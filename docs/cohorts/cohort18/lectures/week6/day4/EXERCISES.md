---
title: Class Survey, pt 2
sidebar_label: Exercises
sidebar_position: 2
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## Project Overview

This is part 2 of the [Class Survey Application](/docs/cohorts/cohort18/lectures/week5/day2/EXERCISES.md).

Previously, we built the UI and worked with local arrays. Now, we're going to move from local arrays to an API.

## Create your database

- Create a database named `class_survey`

:::tip

Don't forget about the `createdb` command!

:::

## Create Your FastAPI instance

### Install all your dependencies

- `fastapi`
- `uvicorn`
- `psycopg2`
- `alembic`

### Create your files/folders

- :file_folder: `models`
- :page_facing_up: `db.py`
- :page_facing_up: `main.py`

## Create Models

You'll need two models to match the arrays from the previous version

1. `topics`
2. `rankings`

:::tip

The previous exercise had a `{key:value}` pair for the array.
<br/>This version will use the `id` field for the integer value, and the name.

For example, the API will return something like:

```py
{
    id: 5,
    ranking: "Awesome"
}
```

And the UI result will look like:

```html
<!-- the "value" is the same as the id above, and the text is the same as the "ranking" -->
<option value="5">Awesome</option>
```

:::

## Migrate

Use Alembic to create the database tables.

:::tip

Refer to [yesterday's notes on Alembic](/docs/cohorts/cohort18/lectures/week6/day3/#enter-alembic)!

:::

### Setup all the necessary CRUD routes

- Create
  - POST `/topics/add`
  - POST `/rankings/add`
- Read
  - GET `/` (aka "Root Route")
  - GET `/topics`
  - GET `/rankings`

### BONUS LEVEL!

- Update
  - PUT `/topics/update/{id}`
  - PUT `/rankings/update/{id}`
- Delete
  - PUT `/topics/delete/{id}`
  - PUT `/rankings/delete/{id}`

### Test your routes

- Test your routes using the Swagger docs, or Bruno (or both!)

## Take it full stack!

Either copy, or update, your HTML from the previous exercise to load the list of topics/rankings via your new API!
