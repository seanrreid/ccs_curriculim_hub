---
sidebar_position: 1
sidebar_label: Day 2
title: Week 9 - Day 2
---

<!-- markdownlint-disable no-inline-html -->

## CRUDCo - Frontend

We're going to keep working on the CRUDCo URL Shortening App.

![It's More URL Shortening!](./img/shortening2.png)

### Review

- Exercise Review
  - Did you read all the steps _first_?
- Code Review
  - What worked?
  - Where are you stuck?

### New Features

- Add Authentication
  - Review [JWT](https://flaviocopes.com/jwt/)
  - Review [bCrypt](https://en.wikipedia.org/wiki/Bcrypt)
  - Possibly use [FastAPIUsers](https://fastapi-users.github.io/fastapi-users/12.1/)?
- Test our API to register/login a user via Swagger
- Work on the client UI

### Eventual Steps

- Let users _actually_ login
- Handle the _actual_ redirection
- Deploy

## Helpful Resources

### FastAPI Boilerplate

- [List of FastAPI Boilerplate repos](https://github.com/topics/fastapi-boilerplate)
  <br/>There are 90 repos on Github that match the terms "FastAPI Boilerplate," ranked by stars (meaning, popularity).
  <br/>:rotating_light: You won't find something that's exactly 1-to-1 with what we've done in class. :rotating_light:
  <br/>The goal isn't to find an exact match, but to learn from other processes!
- [Minimal async FastAPI + PostgreSQL template](https://github.com/rafsaf/minimal-fastapi-postgres-template)
  <br/>This is an example from the list above, it's well documented and the folder structure follows patterns that are similar to those used by Django.

### bCrypt

- [Easy Password Hashing Using bCrypt in Python](https://geekpython.medium.com/easy-password-hashing-using-bcrypt-in-python-3a706a26e4bf)

### Alembic

If you populated your databased _before_ using `alembic` you likely ran into some issues trying to perform migrations.

[This article](https://medium.com/@cemdurak/alembic-existing-db-a4cf36a33c77) walks through an approach to "adopt" an existing database. It might be the option you need if you're not in a position to start over with a clean database.