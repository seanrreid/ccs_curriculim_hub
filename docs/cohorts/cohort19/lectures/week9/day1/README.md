---
sidebar_position: 1
sidebar_label: Day 1
title: Week 9 - Day 1
---

<!-- markdownlint-disable no-inline-html -->

:::info
There are _many_ moving parts to a full ecommerce store (this is why platforms like Shopify exist).
<br/>We're not going to be able to finish _all_ of those moving parts.

**Remember**: Our goal is to finish what we can to understand the concepts behind a full-stack application, not necessarily build the next great ecommerce platform.
:::

## Previously on "CRUDCo eCommerce App"

- Make a _new_ folder named after your store, i.e. `mkdir my_cool_shop`
- Move your frontend into that folder, i.e. `mv react-ecommernce my_cool_shop/`
- Make a folder for your API, i.e. `mkdir fastapi-ecommerce`
- Scaffold out a FastAPI install. Remember `pipenv`?
  - `pipenv shell`
  - `pipenv install fastapi uvicorn psycopg2-binary sqlmodel alembic`
- Make a `models` folder in `fastapi-ecommerce` and start writing models for your store.

### Review

- Code Review
  - What worked?
  - Where are you stuck?
- Check our Models
- Verify migrations with `alembic`
- Do some refactoring (Surely you didn't assume things wouldn't change??)
- Test our API to add/update URLs via Swagger
