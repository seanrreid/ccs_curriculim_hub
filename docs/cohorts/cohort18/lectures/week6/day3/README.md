---
sidebar_position: 3
sidebar_label: Day 3
title: Week 6 - Day 3 POST/PUT/DELETE
keywords:
  - FastAPI
  - PostgreSQL
  - Alembic
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## Migrations, but, with pigs?

Wouldn't it be nice if we could leverage the ORM to _create_ our database programatically?  :thinking:
<br/>Wouldn't it be even nicer if we could track those changes like we do `git` commits??  :thinking:

That's what we'll do today!

- We're going to make a brand new FastAPI instance based on _The Three Little Pigs_.
- We'll use its data models to create the database using [Alembic](https://alembic.sqlalchemy.org/en/latest/)

## FairyTalesDB

- First, create a local database called `fairytales`

  - Pro Tip: You can create a DB directly via the CLI: `createdb fairytales`

- Then it's time to create models in a FastAPI app

### Enter Alembic

1. Initialize Alembic.

   - We'll initialize alembic, and tell it to create a folder called `migrations`
   - This folder is where the migrations will be stored

   <br/>

   ```sh
   alembic init migrations
   ```

2. Update the alembic environment

   - In the `migrations` folder there is a file called `env.py`.
   - Edit the file accordingly to work with SQLModel

   <br/>

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

3. Generate the initial migration.

   ```sh
   alembic revision --autogenerate -m "Initial migration"
   ```

   - This command will create a directory in the `migrations` folder called `versions`
   - The files in the `versions` folder store all the SQL statements to create/update the tables

   <br/>
   :::warning

   You'll need to update the migration files to import `sqlmodel` before they can be run!

   :::

4. Apply the migration

   ```sh
   alembic upgrade head
   ```

:::tip

Remember those last 2 steps, you'll repeat them when you make future changes to your models!

:::
