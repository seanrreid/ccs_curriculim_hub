---
sidebar_position: 2
sidebar_label: Day 2
title: Week 16 - Day 2 Full Stack
keywords:
  - FastAPI
  - PostgreSQL
  - Alembic
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## FULL STACK :exploding_head:

<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazhhZXJwMWdwZjBqbzdhbjllbWR5NG1tdXhhYTgzZGgzeWtoN3NheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hRsayJrDAx8WY/giphy.gif" alt="Stacks of Pancakes" />

Today we'll go FULL STACK!

- We're going to configure the Shrink Ray UI to talk to our _local_ Shrink Ray API
- We'll wrestle with [CORS](https://fastapi.tiangolo.com/tutorial/cors/)
- We'll make sure we can `POST` data from the UI to the API

:::info

### What about user accounts?

We're going to focus on rolling our own user authentication for the final week.
<br/>HOWEVER, once we've done that I'll make the recommendation to _never_ do it again, :grinning:

It is important to know how auth works, but, in my opinion, it's far too important to risk rolling your own every time.

There are services like [Supabase Auth](https://supabase.com/docs/guides/auth) and [Clerk](https://clerk.com/) that handle most (if not _all_) of the intricacies related to User Management.
<br/>It's not a task you, as a new developer, want to handle on your own.

:::

## Notes and Video

- [Class Notes](https://docs.google.com/document/d/131Yw8Lbi9vhMcaSGwqYMuzNMsWY_jRXBGt3s3RaJtZc/view?usp=sharing)
- [Class Video :movie_camera:](https://drive.google.com/file/d/17CNK0yjh8pTOlz82c4reQEVWdUzrFVwg/view?usp=sharing)
- [Shrink Ray API Repo](https://github.com/buildcarolina/shrinkray_api)
