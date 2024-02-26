---
sidebar_position: 3
sidebar_label: Resources
title: Additional Resources
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## React Router

- [React Router: Main Concepts](https://reactrouter.com/en/main/start/concepts)
- [Log Rocket: Migrating to React Router v6: A complete guide](https://blog.logrocket.com/migrating-react-router-v6-guide/)
- [Remix.run: Remixing React Router](https://remix.run/blog/remixing-react-router)
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

## React Metaframeworks

- [Evan Stern: Remix: The Framework you should learn about](https://medium.com/@evanstern_94664/remix-the-framework-you-should-learn-about-928d4060e8ad)
    <br/>This should sound familiar, or at least have some familiar terminology (emphasis added)
    <br/>
    > Remix turns browser functionality into an efficient web development tool, utilizing classic standards and web fundamentals for crafting HTML forms. When building a remix app, the **_“action”_** and **_“loader”_** functions, Remix handles everything.

- [Machine Servant: Untangling Remix Optimistic Ui With Multiple Destinations](https://machineservant.com/blog/2022-11-12-remix-optimistic-with-ui-multiple-destinations/)
- [Remix vs Next.js](https://remix.run/blog/remix-vs-next)
