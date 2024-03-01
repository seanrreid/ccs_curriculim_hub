---
sidebar_position: 1
sidebar_label: Day 5
title: Week 8 - Day 5
---
<!-- markdownlint-disable no-inline-html -->

:::info

REMINDER:  Per the [instructions from yesterday](/docs/cohorts/cohort17/lectures/week8/day4/EXERCISES):
> Create the link table model _only_

:::

Don’t move forward with the Users table yet, just focus on the table to store the links.

- Yes, there is a `user_id` column that will need to connect to a users table, but don't worry about that _yet_.
- Yes, we’ll need to make some modifications to the links table.
- Yes, we’ll be using `alembic` for our updates

This is all planned out, and will be covered on Monday.

For now, make sure your API can support `get` and `post` requests to view/add links.

If it's working in the Swagger Docs, then move to the frontend and make some routes to test `loaders` and `actions`.

:::note

It's very likely that whatever frontend routes you create will need to change. Don't get too bogged down in that structure yet.

We're just setting things up to test `actions` & `loaders` against the API at this point. We'll refactor later.

:bulb: You can have an action and a loader in the same file.<br/>That means you could just do all of this on the home route for now. It would need a form to submit a link and another component to view links.

:::
