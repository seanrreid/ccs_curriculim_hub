---
sidebar_position: 1
sidebar_label: Day 3
title: Week 8 - Day 3
keywords:
  - React
  - React Router
---

 <!-- markdownlint-disable no-trailing-punctuation no-inline-html -->

> Every great improvement [...] has come after repeated failures [...] Virtually nothing comes out right the first time.
> <br/> Failures, repeated failures, are fingerposts on the road to achievement.
> <br/>- [Charles F Kettering](https://en.wikipedia.org/wiki/Charles_F._Kettering)

## React Router Forms

From the [React Router v6.x Tutorial](https://reactrouter.com/en/main/start/tutorial#data-writes--html-forms):

> React Router emulates HTML Form navigation as the data mutation primitive, according to web development before the JavaScript cambrian explosion. It gives you the UX capabilities of client rendered apps with the simplicity of the "old school" web model.

[...]

> The Form component is a wrapper around a plain HTML form that emulates the browser for client side routing and data mutations. It is not a form validation/state management library like you might be used to in the React ecosystem (for that, we recommend the browser's built in HTML Form Validation and data validation on your backend server).

Translation: Using the React Router `Form` component means that forms are able to work the way forms have worked since the creation of the browser, prior to the advent of Single Page Apps (SPAs). AKA, no more `preventDefault()`.

Which will lead us to...

## Time to add authentication

It's time to add some user registration and login forms to our ecommerce site!

:::info
Auth involves a _lot_ of moving parts, so we're likely going to spend the next two days getting this configured!
::::

- We're going to borrow a bit from the [Remix Supa Fly Stack](https://github.com/rphlmr/supa-fly-stack)
- Supabase does provides [its own React components](https://supabase.com/docs/guides/auth/quickstarts/react). Those will use `useEffect`, and not leverage the benefits of React Router, however, it's worth seeing how they set things up.

### Bobby Tables!!

![Bobby Tables](https://imgs.xkcd.com/comics/exploits_of_a_mom.png)

We're going to use [Zod](https://zod.dev/) for form validation, and prevent Bobby Tables from wreaking havoc!

![Kneel before Zod](./img/kneel.gif)
