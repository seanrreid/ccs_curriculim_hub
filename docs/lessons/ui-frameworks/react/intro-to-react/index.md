---
title: Introduction to React
sidebar_label: React - Intro
sidebar_position: 1
---

## Learning Objectives

After completing this lesson, you will be able to:

1. Use the ES6 `import` and `export` syntax
1. Create React Elements using JSX
1. Pass values to Components using props
1. Build custom React Components
1. Render Arrays of Components using `.map()`

## Overview

React is a JavaScript library that helps you write complex front-end applications. It provides convenient syntax for:

- Creating reusable UI components
- Managing and displaying data
- Adding event handler functions

It has become the most widely used JavaScript library, and it has influenced the current design of other libraries and frameworks such as [Vue.js](https://vuejs.org/) and [Angular](https://angular.io/).

To begin, we'll write a "Hello World" style application in React. Then, we'll create a custom "Greeter" Component.

## Up and Running

Start by running the following command to create a new React application:

```sh
npm create vite@latest greeter-app
```

Then answer the following questions:

```sh
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others

? Select a variant: › - Use arrow-keys. Return to submit.
    TypeScript
    TypeScript + SWC
❯   JavaScript
    JavaScript + SWC
```

Once it's done installing you'll see:

```sh
Done. Now run:

cd greeter-app
npm install
npm run dev
```

Follow those instructions;

1. Change into the new directory, `cd greeter-app`
2. Run `npm install`
   - You'll do this the _first time_ for every new React app.
3. Run `npm run dev`
   - You'll run this _every time_ you're working with a React app.

## First Steps with React

The page advises you to edit the file `src/App.js` to get started. When we open that file, we see some unfamiliar syntax:

```js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
```

It appears to be a strange mix of JavaScript and HTML. The markup that looks like HTML is _JSX_. We'll explore JSX throughout this lesson and the ones that follow. Even though it looks odd, you'll recognize that it contains the same Elements that you saw in the Inspector.

Using React terminology, we say that `App` is a _Component_.

When the App Component is _rendered_ in the browser, it displays a `<div>` that contains an `<a>` with an `<img>`, etc...

In this way, React lets you create groups of Elements.

## Hot Module Reloading (HMR)

One of the benefits of the React Dev Server is that it will automatically reload the browser when you save changes to the code.

## JSX !== HTML

:::tip
JSX is:

1. XML
2. That looks like HTML
3. That is rendered in JavaScript

:::

The reason that `class` is not valid in JSX is because JSX is translated into JavaScript. In JavaScript `class` is a reserved word and cannot be used as a variable or function name.

`babel` is the tool that React uses to convert JSX into the JavaScript that runs in the browser. To see the JavaScript version of our code, copy and paste the `App()` function into the [babeljs.io website](https://babeljs.io/en/repl). You will see the following:

Comparing the JSX to the resulting JavaScript shows how each part of the JSX (the tag name, the attributes, the children) is an argument to `React.createElement()`:

![Diagram of correspondence of JSX to JavaScript](./jsx-to-js.png)

The tag name `div` is the first argument to `React.createElement()`.

The attribute `className="greeting"` is turned into a key-value pair in an Object. That Object is passed as the second argument to `React.createElement()`.

In HTML, we would say that the `<h1>` is a child of the `<div>`. Because it is JSX, the `<h1>` is converted into a call to `React.createElement("h1")` and used as the third argument to `React.createElement("div")`.

React takes the result of all of the `React.createElement()` calls and draws DOM Elements to the page.

:::warning Don't forget to close JSX tags!

Be careful when writing JSX. It's easy to forget your closing tags:

In that case, you would see a "Failed to compile" error:

![Error when failing to close JSX tag](./unterminated-jsx.png)

JSX is XML, not HTML. XML looks like HTML but is much more strict.
:::

## Repeating a Component

Components can be displayed multiple times on a page:

```js
function App() {
  return (
    <div className="App">
      <Greeter />
      <Greeter />
      <Greeter />
      <Greeter />
      <Greeter />
    </div>
  );
}
```

For each `Greeter` JSX tag, you will see `Hello again!` on the page:

![Web page showing an H1 for each Greeter in the JSX](./multiple-greeters.png)

You can see that a Component can be reused, but it would be more interesting if a `Greeter` could say "Hello" to different people. In the next section, we'll make our `Greeter` Components accept data to display.

## Passing Props

To provide information to a Component, you add _props_, which look identical to HTML Attributes. (In fact, you have already been using the `className` prop.)

In the following example, we render a single `Greeter` and pass it a `name` prop. Our goal is to make `Greeter` show the text `"Hello again, Melanie"`.

```js
function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello React!</h1>
      <Greeter name="Melanie" />
    </div>
  );
}

```

Nothing will change on the page until we update `Greeter`. We'll access the `name` prop and use it inside the `<h1>`.

```js
function Greeter{{name}} {
    return (
        <h1>Hello again, {name}!</h1>
    );
}
```

Two pieces of new syntax appear with this change;

1. We use can destructure the `props` by name in the function arguments.
1. We use `{}` to interpolate a JavaScript value in JSX.

Some props have special meaning, like `className`. Otherwise, you can treat props like variables - you can call them whatever you like, but it's best to call them something clear and meaningful.

`{}` in JSX is like `${}` in a [Template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). Any JavaScript expression inside of the `{}` will be evaluated.

:::tip You can put any JavaScript expression in between the {}

Any JavaScript that represents a single value can be used:

- Strings, numbers, booleans
- anonymous functions
- function calls
- arithmetic
- String concatenation

What's an expression? Anything that you can pass to a function or put on the Right Hand Side (RHS) of an assignment.

That means you cannot put the following in between the `{}`:

- if-else
- loops

Gotcha: Syntax for template literals with interpolation can be tricky.
:::

## Rendering an Array

React was made for dynamic data - created through user interaction or pulled from an API. Your application data will usually be an Array (or an Object).

Let's update our example so that the names are in an Array.

```js
const nameArray = [
  "Melanie",
  "Emma",
  "Mel B",
  "Geri",
  "Victoria"
];

function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello React!</h1>
      {
        /* For each name in nameArray, render a <Greeter /> */
      }
    </div>
  );
}
```

To add a comment to our JSX, we use `/* */` style comments inside of `{}`.

With those changes in place, we'll learn a common React pattern: creating an Array of Components using `.map()`.

The `.map()` method does the following:

1. Expects to receive a function argument
1. Iterates over the elements of the Array
1. Passes each element to the function argument
1. Stores the returned value in a new Array
1. Returns the new Array

:::tip
The difference between a for-loop and `.map()` is that `.map()` can return a value (the new Array), but a for-loop cannot.
:::

```js
App(nameArray.map((n) => Greeter(n)));
// .map() will call the anonymous function,
// passing it each element in nameArray.
// The anonymous function calls Greeter().
```

Or even more succinctly:

```js
App(nameArray.map(Greeter));
// .map() will call Greeter(), passing it each element in nameArray
```

It's important to get comfortable with `.map()` - it's one of the most common conventions used in React codebases.

## Transforming an Array into Components

We'll use a `map()` to create an array of `Greeter` Components.

```js
const nameArray = [
  "Melanie",
  "Emma",
  "Mel B",
  "Geri",
  "Victoria"
];

function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello React!</h1>
      {
        nameArray.map(n => <Greeter name={n} />)
      }
    </div>
  );
}
```

You've seen that React can render individual Components (written in JSX, like `<h1>` or `<div>`).

In this example, we see that React can also render Arrays of Components (such as the Array of `Greeter` Components returned by `.map()`).

`nameArray.map()` is plain JavaScript, not JSX. Therefore, we must put it inside of `{}`.

On the page, we get the desired result! :tada:

But the console shows a warning... :disappointed:

![Console showing a warning about needing a unique key for each Greeter](./map-with-warning.png)

React is telling us that it sees multiple `Greeter` Components, but can't tell them apart and we should provide an additional prop to uniquely identify each one. For now, we'll use the Array item as the `key`:

```js
const nameArray = [
  "Melanie",
  "Emma",
  "Mel B",
  "Geri",
  "Victoria"
];

function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello React!</h1>
      {
        nameArray.map(n => (
          <Greeter key={n} name={n}/>
        ))
      }
    </div>
  );
}
```

With that change, the warning goes away:

![Console shows no warning about keys](./map-no-warning.png)

:::tip Why provide a key?
React was created to efficiently _redraw_ the UI whenever data changes. Even though we aren't changing the data in our Greeter app, we should always provide a unique `key` prop when we have an Array of Components.

In larger appliations with data that changes frequently, React can pinpoint the exact Components that need updating, and leave the others alone. This is the main technique that React uses for performance optimization.
:::

## Summary

In this lesson, you got started with React by using the built-in Components to create DOM elements on the page. You created custom Components using ES6 modules and class syntax. You used JSX as a shorthand way to call React's `createElement()` function, which produces descriptions of DOM Elements. You returned JSX from your Component's `render()` method, telling React to draw them on the page as DOM Elements. You provided data for your Components to display by passing props. In JSX, these look like HTML attributes, but are translated into arguments to `React.createElement()`.

You used the JSX interpolation syntax (curly braces) to display JavaScript values on the page. To display Arrays of values, you used the `.map()` method to convert each Array element into JSX, providing a unique `key` so that React can tell them apart.
