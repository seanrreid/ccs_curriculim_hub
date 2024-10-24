---
sidebar_position: 1
sidebar_label: Day 4
title: Week 8 - Day 4
---

<!-- markdownlint-disable no-inline-html -->

## Project Discussion

We'll spend some time discussing the final projects

- How to prepare
- How to proceed
- How to maintain some level of sanity

## Making our Auth Forms -> Supabase connection

- You can learn more about how Supabase handles user accounts via the [Supabase Auth Docs](https://supabase.com/docs/guides/auth/users)
- Additionally, you should read up on [Supabase Sessions](https://supabase.com/docs/guides/auth/sessions) and how they handle access tokens.
  - In particular, it's helpful to read up on [JWTs in Supabase](https://supabase.com/docs/guides/auth/jwts#jwts-in-supabase)

:::warning
Supabase does provide an Auth UI for React (I linked to this yesterday).
<br/>However, as of [February 2024, Auth UI has been depracated](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui)!
:::

## Supabase Docs

- [Creating a new user](https://supabase.com/docs/reference/javascript/auth-signup)
- [Listen to Auth Events](https://supabase.com/docs/reference/javascript/auth-onauthstatechange)
- [Sign In a User](https://supabase.com/docs/reference/javascript/auth-signinwithpassword)
- [Sign Out a User](https://supabase.com/docs/reference/javascript/auth-signout)

:::info
Supabase actually has _many_ ways to sign in a user, we're going to use the username/password combo, but some of the other options are worth a look.
:::
