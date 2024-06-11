---
title: Exercises
sidebar_label: Exercises
sidebar_position: 2
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## Build your own

### Database

- Make a new directory, give it a descriptive name that indicates it's an API for your app, eg. `/my_super_cool_api`
- Determine what data you'd like to store, write this out :pencil2:
- Create a Database Schema, saved it in a `schema.sql` file, with the necessary tables and columns.

Include the following entries in your `schema.sql` file. We'll be including them next week.

```sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    token TEXT NOT NULL
);
```

### FastAPI

- Install and configure FastAPI & SQLModel
  - Use the School and Apple CEOs exercises as guides!
- Create Models that match the data you setup in your schema

  - Include the following models:

  `models/token.py`

  ```py
    class Token(Base):
        access_token: str
        token_type: str
  ```

  `models/user.py`

  ```py
    # Create a User model
    class User(Base):
        username: str
  ```

- Setup the routes/route types that you'll need
  - :point_right: Don't worry about the user/token routes, we'll configure those next week
- Test these routes using the Swagger Docs built into FastAPI
