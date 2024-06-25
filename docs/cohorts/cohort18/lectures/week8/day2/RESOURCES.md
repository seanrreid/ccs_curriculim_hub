---
sidebar_position: 3
sidebar_label: Resources
title: Additional Resources
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## General

- [Data Fetching Patterns in Single-Page Applications](https://martinfowler.com/articles/data-fetch-spa.html)

## UI Development

- [Visualizing Frontend Architecture](https://frontendatscale.com/issues/17/)
- [Domain Modeling for Building UIs](https://frontendatscale.com/issues/25/)

## Styling Options (React and beyond...)

:::tip
There are positives and negatives to all of the approaches/libraries that I list below.

Frameworks come and go regularly (eg. the path I used to recommend is no longer recommended, and [another popular library, that started in 2020, is no longer being maintained](https://github.com/stitchesjs/stitches/discussions/1149#discussioncomment-6223090)).

Before going deep into any specific _tool_, make sure you understand the core of the _language!_ Tailwind could disappear tomorrow, but CSS has been relatively stable as a language for decades.
:::

- [CSS Modules](https://github.com/css-modules/css-modules) is my personal preference, primarily because it allows us to focus on just writing CSS.
- Previously, I've recommended [Styled Components](https://styled-components.com/). However, since React 18, this approach isn't recommended.
- [Vanilla Extract](https://vanilla-extract.style/documentation/getting-started/) is an more recent recommendaion, and a possible replacement for something like Styled Components.
  <br/>It's a ["zero runtime"](https://dev.to/mk668a/what-is-zero-runtime-css-in-js-which-library-should-you-pick-3npf) CSS framework.
  <br/>It does require some additional configuration to get setup, but ultimately the behavior is simmilar to CSS Modules.
- Another popular option would be [Tailwind CSS](https://tailwindcss.com/docs/guides/vite).
  <br/>Tailwind is known as a "utility-first" approach to css. It's a framework that generates CSS based on classes applied to elements.

## React, but make it _not_ React

- [How React isn't reactive, and why you shouldn't care](https://dev.to/this-is-learning/how-react-isn-t-reactive-and-why-you-shouldn-t-care-152m)
  <br/>Despite the name, React isn't technically a "reactive" framework.
- [A Hands-on Introduction to Fine-Grained Reactivity](https://dev.to/ryansolid/a-hands-on-introduction-to-fine-grained-reactivity-3ndf)
  <br/>This is an introduction into how "reactive" frameworks work, particularly ones that _are_ reactive that aren't name "React."
- [Let’s learn how modern JavaScript frameworks work by building one](https://nolanlawson.com/2023/12/02/lets-learn-how-modern-javascript-frameworks-work-by-building-one/)
  <br/>This is actually high on my personal list to try out...it's super compelling to dig into the "how" of the tools we're using.

## Actually React...

- [React.dev: `<StrictMode>`](https://react.dev/reference/react/StrictMode)
  <br/>This reference explains a bit about why components load twice in Development mode!
- [Fetching Data in React with useEffect](https://maxrozen.com/fetching-data-react-with-useeffect)
  > This is why useEffect is the hook for us - by fetching data, we're making our React component impure, and useEffect provides us a safe place to write impure code.

## React Router

- [React Router: Main Concepts](https://reactrouter.com/en/main/start/concepts)
- [Log Rocket: Migrating to React Router v6: A complete guide](https://blog.logrocket.com/migrating-react-router-v6-guide/)
- [Official v5 to v6 Migration Guide](https://github.com/remix-run/react-router/discussions/8753)
- [React Router v6: Migrating to RouterProvider](https://reactrouter.com/en/main/upgrading/v6-data#migrating)

> The first thing to be aware of is the presence of a handful of new Data APIs that only work on routes defined via the new data routers (i.e., createBrowserRouter). These include a few categories of APIs:
>
> - Route-level data APIs such as loader, action, shouldRevalidate, handle, and lazy
> - In-component data hooks such as useLoaderData, useActionData, useFetcher, useMatches, useNavigation, etc.
> - Error-handling APIs such as route.errorElement, route.ErrorBoundary, and useRouteError
>
> The rest of the APIs that existed prior to v6.4.0 are still usable in both BrowserRouter and RouterProvider apps. These include common hooks/components such as useNavigate, useLocation, useParams, `<Link>`, `<Outlet />`, etc.

This was new as of React Router v6.4 (it's currently at v6.22.1):

- [React Router v6: `createBrowserRouter`](https://reactrouter.com/en/main/routers/create-browser-router)

> This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
> It also enables the v6.4 data APIs like loaders, actions, fetchers and more.

If you look at tutorials from _before_ v6.4, this will likely be the biggest difference.

## Worth a listen

- [Syntax.fm Episode 026: All About Redux and Cookies vs JWT](https://syntax.fm/show/026/all-about-redux-and-and-cookies-vs-jwt)
- [Syntax.fm Episode 510: How to Build an API in 2022](https://syntax.fm/show/510/how-to-build-an-api-in-2022)

## Worth a Read

- [One Thing Better: How to Recover When You Mess Up](https://jasonfeifer.beehiiv.com/p/you-messed-up-now-here-s-how-to-regain-your-confidence)
- [The Subversive Hyperlink](https://blog.jim-nielsen.com/2024/the-subversive-hyperlink/)
  <br/>, I'll add this to the "everything old is new again" pile. Back in the "walled garden" internt days ruled by services like Prodigy, AOL, and CompuServe, the HTML Link was revolutionary. Now, in the age of Twitter, Facebook, and App Stores, it's interesting to see someone shine the light on the topic again.
- [JavaScript Bloat in 2024](https://tonsky.me/blog/js-bloat/)
  <br/>My hatred of the "Dark Mode" variant of this site is directly proportional to how much I _love_ the message of this site.
