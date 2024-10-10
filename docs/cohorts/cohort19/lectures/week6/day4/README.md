---
sidebar_position: 4
sidebar_label: Day 4
title: Week 6 - Day 4 User Auth
keywords:
  - FastAPI
  - PostgreSQL
---

<!-- markdownlint-disable no-inline-html -->

## Let's Review

It's been a busy week, so let's review and debug.

### Relational Databases

- Data is put into tables
- Relationships are defined via datapoints in tables
- i.e. Primary Key -> Foreign Key relationships

### SQL (Structured Query Language)

- It's how we talk to databases
- SQL Databases are relational

### PSQL (PostgreSQL)

- A type of SQL database
- Supabase is a hosted version of PSQL

### FastAPI

- A Python web framework to create APIs

### SQLModel

- An ORM (Object Relational Mapper) translates our code into SQL
- SQLModel is an ORM, built on SQLAlchemy, tailored to FastAPI
- SQLModel translates Python -> SQL

### Alembic

- Database Migrations are changes to a schema
- Alembic is a tool built around SQLAlchemy (and related tools) to manage migrations

### CRUD

| Operation | Description              |
| :-------- | :----------------------- |
| CREATE    | "I want to save stuff"   |
| READ      | "I want to read stuff"   |
| UPDATE    | "I want to change stuff" |
| DELETE    | "I want to remove stuff" |

#### CRUD Routes

| Route                | Description                                  |
| :------------------- | :------------------------------------------- |
| `/post/stuff`        | "Save this stuff I'm sending"                |
| `/get/stuff`         | "Show me this stuff"                         |
| `/put/stuff/{id}`    | "Change the stuff with this ID to new stuff" |
| `/delete/stuff/{id}` | "Delete the stuff with this ID"              |

---

A wise man (KRS One) once said:

> That's it, that's all, solo, single no more no less

Start with the above fundamentals and you can build _anything_.  Don't overcomplicate it!

## Environments, Environments everywhere

Who feels a bit like this?

![XKCD Python Environments](https://imgs.xkcd.com/comics/python_environment.png)
