---
sidebar_position: 1
sidebar_label: Day 2
title: Week 8 - Day 2
keywords:
    - React
    - React Router
---

## Do cool things

> "I assure you I've done a lot of really stupid things, and none of them bother me. All the mistakes, and all the dopey things, and all the times I was embarrassed — they don't matter. What matters is that I can kind of look back and say: Pretty much any time I got the chance to do something cool I tried to grab for it — and that's where my solace comes from.

Randy Pausch [_The Last Lecture}](https://www.amazon.com/Last-Lecture-Randy-Pausch/dp/1401323251?tag=chimindustry-20&geniuslink=true) via [1000 Leaps](https://1000leaps.com/2023/10/07/85-the-last-lecture/)

## React Router v6

React Router v6 introduces more than a few changes over v5 (and v5 had a _lot_ of big changes over v4).

[Log Rocket](https://blog.logrocket.com/migrating-react-router-v6-guide/#change-react-router-v6) does a great job looking into these changes, with some history around the benefits/drawbacks of the different apporoaches.

> React Router v5 came close to perfection, but there were still some flaws. The v5 library has some issues with the routing algorithm and routing configuration defaults (JSX component prop defaults). Also, the v5 came with some inconsistent, somewhat complex APIs that affect the developer’s productivity. Moreover, v5’s bundle size weighs more compared to what it offers as a React library.

Log Rocket also goes into the [benefits of v6 over v5](https://blog.logrocket.com/migrating-react-router-v6-guide/#benefits-react-router-v6-over-v5).

### React Router 5 demo

:::info
I'm sharing this to show the previous patterns used in React Router. _Some_ of these carry over into React Router 6, and you'll likely see them used in a variety of tutorials or ChatGPT examples.

We'll be leaning into the updated syntax, i.e. the `createBrowserRouter` object, and moving away from the component based examples like below.

:::

<iframe src="https://codesandbox.io/embed/76dcgp?view=Editor+%2B+Preview&module=%2Fsrc%2FApp.jsx&hidenavigation=1"
     style={{width:'100%', height: '500px', border:0, borderRadius: '4px', overflow:'hidden'}}
     title="react-router-v5 (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## React Router Forms

From the [React Router v6.x Tutorial](https://reactrouter.com/en/main/start/tutorial#data-writes--html-forms):

> React Router emulates HTML Form navigation as the data mutation primitive, according to web development before the JavaScript cambrian explosion. It gives you the UX capabilities of client rendered apps with the simplicity of the "old school" web model.

[...]

> The Form component is a wrapper around a plain HTML form that emulates the browser for client side routing and data mutations. It is not a form validation/state management library like you might be used to in the React ecosystem (for that, we recommend the browser's built in HTML Form Validation and data validation on your backend server).

Translation: Using the React Router `Form` component means that forms are able to work the way forms have worked since the creation of the browser, prior to the advent of Single Page Apps (SPAs). AKA, no more `preventDefault()`.

Which will lead us to...

## Code Along: Modern React + React Router v6.x

- We'll do a code along exercise where we'll connect to our Apple CEOs API.
- Wel'll discuss an approach to building modern React apps with React Router 6.x.

:::info
Here's a link to the code from today's code along: [https://github.com/seanrreid/ccs_react_apple_ceos](https://github.com/seanrreid/ccs_react_apple_ceos)
:::
