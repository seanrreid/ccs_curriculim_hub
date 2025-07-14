---
sidebar_position: 1
sidebar_label: Day 1
title: Week 6 - Day 1 - FastAPI x PSQL
keywords:
  - FastAPI
  - PostgreSQL
---

<!-- markdownlint-disable no-inline-html -->

## Time for plumbing

This week we'll connect all the pipes...

![Mario Brothers](./img/mario.jpg)

## Presentations

But first, Iron Man!

- [Model/View/Controller (MVC)](https://docs.google.com/presentation/d/1v0l-9MRVO7CmAs74c2zHv-swL52JdJEgZBrU77iqSLU/edit?usp=sharing)

## FastAPI

- We'll start with the [Fast API Tutorial](https://fastapi.tiangolo.com/tutorial/) as a code along in class
- Then we'll start our Shrink Ray API, written in FasAPI

## The MVC(ish) Pattern in FastAPI

- SQLModel (an [ORM](https://sqlmodel.tiangolo.com/db-to-code/)) + FastAPI define Models
- The route handlers essentially act as Controllers
  - It's not a 1-to-1 between a controller in other MVC frameworks, but FastAPI routes do essentially the same thing
- FastAPI doesn't return Views like Django or Express
  - The JSON responses act as kind of "view"
  - The JSON is used by frontend frameworks that create the view layer that clients consume

## Running FastAPI

Rather than running `uvicorn` directly from the command line, we can build it into our app.

Running

```sh
python3 main.py
```

will return:

```py
INFO:     Will watch for changes in these directories: [YOUR REPO DIRECTORY]
INFO:     Uvicorn running on http://localhost:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [4769] using WatchFiles
INFO:     Started server process [4771]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

:::tip
The following screenshot show how those calls are translated into running `uvicorn` on our app.

![In Class Screenshot](./img/main_app_startup.png)

:::

## Comparing CRUD, Routes, and SQL Commands

This table illustrates how a usual CRUD (Create, Read, Update, Delete) application corresponds to application routes, and ultimately the SQL statements that might be triggered by those routes.

| CRUD   | ROUTES | SQL    |
| ------ | ------ | ------ |
| CREATE | POST   | INSERT |
| READ   | GET    | SELECT |
| UPDATE | PUT    | UPDATE |
| DELETE | DELETE | DELETE |
