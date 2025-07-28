---
title: API Updates
sidebar_label: API Files
sidebar_position: 2
---

We'll be adding the following to our API:

## Install `bcrypt` and `jwt`

'pipenv install bcrypt pyjwt`

## A Tokens Model: `models/tokens.py`

```py
from sqlmodel import Field, Column, String, DateTime, func
from datetime import datetime, timedelta, timezone

import config
import jwt

from models.base import Base


class BlacklistedToken(Base, table=True):
    __tablename__: str = 'blacklisted_tokens'

    created_at: datetime = Field(sa_column=Column(
        DateTime(timezone=True), server_default=func.now()))
    token: str = Field(sa_column=Column(String))

    def __repr__(self):
        return f"<BlacklistedToken(id={self.id}, created_at={self.created_at})>"


class Token(Base, table=True):
    __tablename__: str = 'tokens'

    access_token: str
    token_type: str = "bearer"


class TokenData(Base):
    email: str | None = None


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    # Make a copy so we don't mutate the original data
    to_encode = data.copy()

    if expires_delta:
        # If an expires_delta is provided, the expiration time (expire) is set to the current UTC time plus the  delta.
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        # If expires_delta is not provided, the default expiration time is set to 15 minutes from the current UTC time.
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)

    # Add the expiration to the JWT
    to_encode.update({"exp": expire})
    # Actually encode our JWT with the data/time settings
    encoded_jwt = jwt.encode(
        to_encode, config.SECRET_KEY, algorithm=config.ALGORITHM)

    return encoded_jwt


def is_token_blacklisted(token, session):
    # Check if the token is blacklisted in the database
    return session.query(BlacklistedToken).filter_by(token=token).first() is not None
```

## A Users Model: `models/users.py`

```py

from sqlmodel import Field, Column, String, UniqueConstraint
from pydantic import EmailStr
import bcrypt
from models.base import Base

class UserBase(Base):
    email: EmailStr = Field(sa_column=Column(String(225), unique=True))
    name: str = Field(sa_column=Column(String(225), nullable=True))

class User(UserBase, table=True):
    __tablename__: str = "users"
    hashed_password: str = Field(sa_column=Column(String))

    UniqueConstraint("email", name="uq_user_email")

    def __repr__(self):
        """
        Returns string representation of model instance
        !r means the value is formatted using its
        __repr__ method rather than its __str__ method.
        """
        return f"<User {self.email!r}>"

    @staticmethod
    def hash_password(password) -> str:
        """
        Transforms password from it's raw textual form to
        cryptographic hashes
        """
        return bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

    def validate_password(self, pwd) -> bool:
        return bcrypt.checkpw(password=pwd.encode(), hashed_password=self.hashed_password.encode())


class UserSchema(UserBase):
    class Config:
        populate_by_name = True

class UserAccountSchema(Base):
    email: EmailStr
    """ We set an alias for the field so that when this field is serialized or deserialized,
    the name "password" will be used instead of "hashed_password." """
    hashed_password: str = Field(alias="password")
```

## A "Servics" file with helper functions `services.py`

```py
from fastapi import HTTPException, status, Depends
from fastapi.security import OAuth2PasswordBearer
from sqlmodel import Session, select

from models.users import User, UserAccountSchema
from models.tokens import TokenData, is_token_blacklisted
from db import get_session

import config
import jwt

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

def create_user(user: UserAccountSchema, session: Session):
    db_user = User(**user.dict())
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user


def get_user(email: str, session: Session):
    return session.query(User).filter(User.email == email).one()


async def get_current_user_token(token: str = Depends(oauth2_scheme), session: Session = Depends(get_session)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, config.SECRET_KEY,
                             algorithms=[config.ALGORITHM])
        email: str | None = payload.get("email")

        if not email or is_token_blacklisted(token, session):
            raise credentials_exception


        token_data = TokenData(email=email)
    except jwt.ExpiredSignatureError:
        raise credentials_exception
    except jwt.DecodeError:
        raise credentials_exception

    user = session.query(User).filter(User.email == email).first()
    if user is None:
        raise credentials_exception
    return user
```

## Updates to `main.py`

Add the following routes to `main.py`:

```py
# ... existing routes

@app.post('/register', response_model=UserSchema)
def register_user(payload: UserAccountSchema, session: Session = Depends(get_session)):
    """Processes request to register user account."""
    payload.hashed_password = User.hash_password(payload.hashed_password)
    return create_user(user=payload, session=session)


@app.post('/login', status_code=200)

async def login(payload: UserAccountSchema, session: Session = Depends(get_session)):
    try:
        user: User = get_user(email=payload.email, session=session)
    except:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid user credentials"
        )

    is_validated: bool = user.validate_password(payload.hashed_password)
    print(f"Is user validated? {is_validated}")
    if not is_validated:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid user credentials"
        )

    access_token_expires = timedelta(
        minutes=config.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"email": user.email}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")


@app.get('/getUser', status_code=200)
async def get_user_id(current_user: User = Depends(get_current_user_token)):
    return {"email": current_user.email, "id": current_user.id}


@app.get('/logout', status_code=200)
def logout(token: str = Depends(oauth2_scheme), session: Session = Depends(get_session)):
    try:
        blacklisted_token = BlacklistedToken(
            created_at=datetime.now(timezone.utc), token=token)
        session.add(blacklisted_token)
        session.commit()
    except IntegrityError as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token"
        )
    return {"details:": "Logged out"}
```