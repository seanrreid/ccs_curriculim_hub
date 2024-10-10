---
title: Revenge of the Magic 8 Ball!!
sidebar_label: Exercises
sidebar_position: 2
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## Project Overview

- It's like Magic 8 Ball, but with an API!
- Write an API to return responses to a user's questions

## Create your database schema

- We'll keep using Supabase, so you'll just need a table.
- You can either use `alembic`, or edit directly in Supabase, you choose.

:::info
Since Supabase uses a single database, the `alembic` table will apply to _all_ of your projects.

Which is...not ideal.

To that end, you can either reset that table, or just write a `schema.sql` file and not use alembic migrations.
:::

## Create Your FastAPI instance

### Install all your dependencies

#### Must Have

- `fastapi`
- `uvicorn`
- `psycopg2`
- `sqlmodel`

#### Maybe?

- `alembic`

### Create your files/folders

- :file_folder: `models` folder
- :page_facing_up: `db.py`
- :page_facing_up: `main.py`

## Create Models

:::info
You choose! This all depends on your schema, and how many tables you're using for the responses.
:::

Potentional ideas would be:

- Type of response, or response category
- The actual response message

## Setup some CRUD routes

:::info
The following are _suggestions_, not requirements. Write routes that match _your_ models.

Use the following as starting guidelines.
:::

- Create
  - POST `/response/add`
  - POST `/category/add`
  - POSt `/question/add` - Maybe?? Depends on if you want to save user questions!
- Read
  - GET `/` (aka "Root Route")
  - GET `/response`
  - GET `/category`

### BONUS LEVEL OPTIONS

- Update
  - PUT `/question/update/{id}`
- Delete
  - PUT `/response/delete/{id}`

### Test your routes

- Test your routes using the Swagger docs (ps. you can also use Bruno, which we don't often talk about :wink:)

## Take it full stack!

Either copy, or update, your HTML from the previous exercise to take in a user's question and return a response!
