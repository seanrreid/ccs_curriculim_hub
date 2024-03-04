---
title: Exercises
sidebar_label: Exercises
sidebar_position: 2
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation no-duplicate-heading -->

## Apple CEOs Redo

- We're going to do the Apple CEOs exercise from scratch, this time using `alembic` to manage the tables.
- The goal is to practice including different files/folders and getting used to running migrations with `alembic`
- Use the previous [Apple CEOs FastAPI](/docs/exercises/fastapi-psql-apple-ceos/) exercise as a referece.

:::warning

Read all of the steps first before you begin writing any code!

:::

### Step 1

- Create a new folder in your `repos` directory called `apple_ceos_alembic`
- Make sure your install includes the following:
  - Include `sqlalchemy`
  - Include `uvicorn`
  - Include `psycopg2`
  - Include `alembic` to create tables
  - Include `python-dotenv` to read from an `.env` file

#### Structure

- Put sensitive database data in an `.env` file.
- Put the database information in a file called `config.py`.
- Put the settings in a new `Settings` class in the `config.py`
- Create a _new_ database called `apple_ceos_alembic`

### Step 2

#### Structure

- Put the `sqlalchemy` connection information in a file called `db.py`
- Put the model information in a file called `models.py`

#### Models

- Define the `Base` model from the `declarative_base`
- Create the CEOS table model, name it `CEO`
  - This is what `sqlalchemy` and `alembic` will use :star:
- Create a CEO Pydantic Shema, name it `CEOSchema`
  - This is what FastAPI will use for `POST`ing data :star:
- Name the columns and their types accordingly:
  - id, Integer, Primary Key
  - Name, String
  - Slug, String
  - Year Served, Integer

#### Run your migrations (Revisions)

- Make sure to update the`env.py` file in the `alembic` directory!
  - Don't forget the `Base.metadata`, it will default to `None`
  - You'll need to _add_ in the config setting to include the database connection
  - You'll need to import both the `Base` and `CEO` models
- Use `alembic` to make revisions and create the tables.

### Step 3

- Create routes to READ (`get`) and CREATE (`post`) new entries
- Test your routes via Swagger

## Level Up

### Refactor

- Create a directory called `models`
- Create a file in that directory named `__init__.py`, _leave it blank_!
- Create two model files, `Base.py` and `CEO.py`
- Copy the the `Base` declaration from `models.py` into `Base.py`
  - :warning: Don't forgot to copy over the necessary imports :warning:
- Copy the the `CEO` class from `models.py` into `CEO.py`
  - :warning: Don't forgot to copy over the necessary imports :warning:
- Delete `models.py`

#### Update imports

- Change any `from models import Base, CEO` to match the following:
  - `from models.base import Base`
  - `from models.CEO import CEO`
- Update :point_up: those settings _everywhere_ you call those models.

#### Add a README

- Write a `README.md` file in the root directory
- Note _why_ the `models.base` and `models.ceo` refactor works

### Step 4

- Start the _entire_ project with a file named `read_em.md` and put in the text: "I read all the way through."
- Make your _first_ commit with the commit message, "I read'em"
- Push that up to Github and post a link to that repo in the `#immersive` channel in Slack
