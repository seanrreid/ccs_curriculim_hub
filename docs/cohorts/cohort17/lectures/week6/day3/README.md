---
sidebar_position: 3
sidebar_label: Day 3
title: Week 6 - Day 3
keywords:
    - FastAPI
    - PostgreSQL
---
<!-- markdownlint-disable no-inline-html -->

## Presentations

- [Model/View/Controller (MVC)](https://docs.google.com/presentation/d/1MOyVIg-5koxE0OBaxIcc6hWrRYI1AvdIfl9R0rAjXAY/edit?usp=sharing)

## FastAPI + PSQL

Today we'll do a code along to connect the Apple CEOs database to FastAPI.

We're going to use this starter -> [Apple CEOs Starter](https://github.com/seanrreid/apple_ceos_starter)

## Helpful Resources

- [Building a CRUD FastAPI app with SQLAlchemy](https://mattermost.com/blog/building-a-crud-fastapi-app-with-sqlalchemy/)
  <br/>This is close to what we'll be building, and is worth a full review.

## The MVC(ish) Pattern in FastAPI

- SQLAlchemy + FastAPI defines Models
- The route handlers essentially act as controllers
  - It's not a 1-to-1 between a controller in other MVC frameworks, but FastAPI routes do essentially the same thing
- FastAPI doesn't return Views like Django or Express
  - The JSON responses act as kind of "view"
  - The JSON is used by frontend frameworks that create the view layer that clients consume

## Comparing CRUD, Routes, and SQL Commands

This table illustrates how a usual CRUD (Create, Read, Update, Delete) application corresponds to application routes, and ultimately the SQL statements that might be triggered by those routes.

| CRUD   | ROUTES | SQL    |
| ------ | ------ | ------ |
| CREATE | POST   | INSERT |
| READ   | GET    | SELECT |
| UPDATE | PUT    | UPDATE |
| DELETE | DELETE | DELETE |
