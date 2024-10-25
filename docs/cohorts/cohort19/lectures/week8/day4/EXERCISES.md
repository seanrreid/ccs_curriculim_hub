---
title: Exercises
sidebar_label: Exercises
sidebar_position: 2
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## eCommerce Continued...

- Make a _new_ folder named after your store, i.e. `mkdir my_cool_shop`
- Move your frontend into that folder, i.e. `mv react-ecommernce my_cool_shop/`
- Make a folder for your API, i.e. `mkdir fastapi-ecommerce`
- Scaffold out a FastAPI install. Remember `pipenv`?
  - `pipenv shell`
  - `pipenv install fastapi uvicorn psycopg2-binary sqlmodel alembic`
- Make a `models` folder in `fastapi-ecommerce` and start writing models for your store.

:::tip
Use the [FakeStore API models as a guide!](https://github.com/keikaavousi/fake-store-api/blob/master/model/product.js)
:::
