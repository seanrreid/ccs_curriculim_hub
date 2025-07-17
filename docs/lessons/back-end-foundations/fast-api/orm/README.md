---
title: FastAPI + SQLModel
sidebar_label: FastAPI + SQLModel
sidebar: auto
---

<!-- markdownlint-disable no-trailing-punctuation -->

## What is SQLModel

From the [SQLModel](https://sqlmodel.tiangolo.com/db-to-code/) documentation:

> SQLModel is a library for interacting with SQL databases from Python code, with Python objects. It is designed to be intuitive, easy to use, highly compatible, and robust.
>
> SQLModel is based on Python type annotations, and powered by Pydantic and SQLAlchemy.
>
> The key features are:
>
> - Intuitive to write: Great editor support. Completion everywhere. Less time debugging. Designed to be easy to use and learn. Less time \* reading docs.
> - Easy to use: It has sensible defaults and does a lot of work underneath to simplify the code you write.
> - Compatible: It is designed to be compatible with FastAPI, Pydantic, and SQLAlchemy.
> - Extensible: You have all the power of SQLAlchemy and Pydantic underneath.
> - Short: Minimize code duplication. A single type annotation does a lot of work. No need to duplicate models in SQLAlchemy and Pydantic.

## SQLModel + FastAPI

> SQLModel is designed to simplify interacting with SQL databases in FastAPI applications, it was created by the same author.

We'll be using SQLModel as our ORM, FastAPI for the API, and [Alembic](https://alembic.sqlalchemy.org/en/latest/) to handle data "migrations" to keep the the API and DB structures in sync.

## Getting Setup

We'll need be in the correct environment, and include all the necessary dependencies...

Using `pipenv`

```bash
pipenv shell
pipenv install alembic sqlmodel psycopg2-binary python-dotenv
```

OR

Using `venv` and `pip3`

```bash
source env/bin/activate
pip3 install alembic sqlmodel psycopg2-binary python-dotenv
```

### Add a `.env` file

- We need a way to _securely_ store sensitive connection data (i.e. our Supabase connection string!)
- We can store these values in a `.env` file, and make sure that file is _not_ tracked by `git`.
- We will use `python-dotenv` to read the values in the `.env` file and make them available to our API

### Make a `config.py` and/or `db.py`

#### `config.py`

- Store configuration variables in `config.py`
- This is where you'll read values from the `.env` file

Here is an example `config.py`

```py
import os
from dotenv import load_dotenv

from pathlib import Path
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)


DATABSE_URL = os.getenv("DATABASE")
```

#### db.py

- This will store your database connection string
- You will either read `config` values that you import, or read from the `.env` in this file.

Here is an example `db.py`

```py
from sqlmodel import create_engine, SQLModel, Session
from config import DATABASE_URL

engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session
```

### Add Models

- Remember Iron Man? We're going to write the Jarvis layer, the part that "models" our data for our app.
- Start with a "Base" model, then add models for URLs.
- Every `Base` model will look like the following:

```py
from sqlmodel import Field, SQLModel


class Base(SQLModel):
    id: int = Field(
        default=None,
        primary_key=True,
        index=True,
        nullable=False,
    )
```

- Our `URLs` model will extend this model...

### Initialize Alembic.

- We'll initialize alembic, and tell it to create a folder called `migrations`
- This folder is where the migrations will be stored

```sh
alembic init migrations
```

### Update the Alembic environment

- In the `migrations` folder there is a file called `env.py`.
- Edit the file accordingly to work with SQLModel

```py
## Add this line around Line 7
from sqlmodel import SQLModel, create_engine

## Add your models
## (these are made up names!)
from models.my_model import Foo

## Set the config to use your database URL
config.set_main_option("sqlalchemy.url", [MY DATABSE URL])

## Update this entry to use the SQLModel.metadata
## Around Line 22
target_metadata = SQLModel.metadata
```

:::tip
Every `env.py` should resemble the example below (_YOUR MODELS WILL LOOK DIFFERENT!_):
![env.py updates](./img/env_py_updates.png)
:::

### Generate the initial migration.

```sh
alembic revision --autogenerate -m "Initial migration"
```

- This command will create a directory in the `migrations` folder called `versions`
- The files in the `versions` folder store all the SQL statements to create/update the tables

:::warning
You'll need to update the migration files to import `sqlmodel` before they can be run!
:::

### Apply the migration

```sh
alembic upgrade head
```

:::tip
Remember those last 2 steps, you'll repeat them when you make future changes to your models!
:::

## Update your API

### Import SQLModel items

Import the following items into `main.py`

- `Session, select` (it's possible you'll need more, but there are the basics!)
- Any/all models from your `models` folder
- Your `get_session` function from your `db.py`

### Update your routes

Make request to the database via SQLModel, i.e.

```py
@app.get('/pigs')
async def get_little_pigs(session: Session = Depends(get_session)):
    statement = select(Pigs)
    results = session.exec(statement).all()
    return results

@app.get('/wolves')
async def get_wolves(session: Session = Depends(get_session)):
    statement = select(Wolves)
    results = session.exec(statement).all()
    return results
```

## Test your API

:::warning
Make sure you're still in your correct environment!
:::

- Run the api with `python3 main.py`
- Browse to `http://localhost:8000/docs` and use the Swagger Docs (or test with Bruno) to see if your endpoints are fetching data via the DB
