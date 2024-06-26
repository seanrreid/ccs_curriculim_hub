---
sidebar_position: 1
sidebar_label: Day 3
title: Week 8 - Day 3
keywords:
  - React
  - React Router
---

<!-- markdownlint-disable no-trailing-punctuation no-inline-html -->
<!--

@TODO - Hold pending Fly.io pricing

## Hosting

Go to [Platform.sh](https://auth.api.platform.sh/register?trial_type=general) and login via Github to create your account. You'll be automatically enrolled the free 30 day plan. Once you're registered, let me know which email you're using and the Organization you created. I'll follow up with them to extend the trial.

 -->

> Every great improvement [...] has come after repeated failures [...] Virtually nothing comes out right the first time.
> <br/> Failures, repeated failures, are fingerposts on the road to achievement.
<br/>- [Charles F Kettering](https://en.wikipedia.org/wiki/Charles_F._Kettering)

## React Router Forms

From the [React Router v6.x Tutorial](https://reactrouter.com/en/main/start/tutorial#data-writes--html-forms):

> React Router emulates HTML Form navigation as the data mutation primitive, according to web development before the JavaScript cambrian explosion. It gives you the UX capabilities of client rendered apps with the simplicity of the "old school" web model.

[...]

> The Form component is a wrapper around a plain HTML form that emulates the browser for client side routing and data mutations. It is not a form validation/state management library like you might be used to in the React ecosystem (for that, we recommend the browser's built in HTML Form Validation and data validation on your backend server).

Translation: Using the React Router `Form` component means that forms are able to work the way forms have worked since the creation of the browser, prior to the advent of Single Page Apps (SPAs). AKA, no more `preventDefault()`.

Which will lead us to...

## Welcome to CRUDCo!

CRUDCo Inc has been hired to write a URL shortening service for a client.

### Requirements

- Users can submit a long URL.
- URLs are saved in a database.
- Unique IDs are generated for each URL.
- The short url is available via a list when a user logs in.

### To discuss

- What relationships do we need to create (aka "What is our schema?")?
- What is our Minimum Viable Product (MVP)?
- What are all the parts we'll need to build out the MVP?
