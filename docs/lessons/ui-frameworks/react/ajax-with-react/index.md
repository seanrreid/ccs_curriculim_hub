---
sidebar: auto
---

# Ajax with React

## Learning Objectives

After completing this lesson, you will be able to:

1. Conditionally render based on whether Ajax data has populated
1. Call this.setState with data from Ajax request

## Lesson

### Overview

### Setting Up

```sh
npm create vite@latest react-joke-app
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

cd react-joke-app
npm install
npm run dev
```

### Preparing App.js

The `App` Component's job is to display our `Joke`. We'll begin by clearing out elements that we don't need.

:::info
You'll import the `Joke` later in this lesson!
:::

When you're done, your `App.jsx` should look like this:

```js
function App() {

  return (
    <>

    </>
  );
}

export default App
```

### Creating the `Joke` Component

In `src/components/Joke.js`, add the code for creating a basic React Component:

1. import `useState`
2. Write a `Joke` function (using the `function` keyword _or_ Arrow Syntax ie. `()=>{}` )
3. Add the initial joke state in the `useState` hook
4. Display the joke in return

```jsx
import { useState } from 'react';

function Joke () {
  const [joke, setJoke] = useState('');

  return (
    <p>{joke}</p>
  );
}

export default Joke;
```

Then we can import the `Joke` component into our `App`:

```js
import Joke from "./components/Joke"

function App() {

  return (
    <>
      <Joke/>
    </>
  );
}

export default App
```

We'll add code for retrieving a new joke from the API and storing it in state.

### Adding `fetchJoke()`

The API provides an endpoint for developer/nerdy jokes: `'https://api.chucknorris.io/jokes/random?category=dev'`.

Here's an example of one of the jokes returned by the API:

```json
{
  "categories": ["dev"],
  "created_at": "2020-01-05 13:42:19.324003",
  "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id": "espieyuysgeopdhgcdrmjw",
  "updated_at": "2020-01-05 13:42:19.324003",
  "url": "https://api.chucknorris.io/jokes/espieyuysgeopdhgcdrmjw",
  "value": "Chuck Norris can't test for equality because he has no equal."
}
```

The `value` key contains the actual joke, and that's what we'll store in state.

`fetch()` will send the Request to this API endpoint and start a Promise-chain. We'll add two `.then()` calls onto it:

1. The first `.then()` runs _after_ the entire Response has arrived and converts it to JSON.
2. The second `.then()` receives the JSON Object and can store the joke text in state.

Add the new code to perform the `fetch()`, convert the `response` to JSON, and get ready to store the joke.
Your component should have the new items in the below example:

```jsx
  const fetchJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    return fetch(url)
      .then((response) => response.json())
      .then((jokeJson) => {
        // Set the joke value
      });
  };
```

In the body of the second `.then()` callback, add a call to `this.setState()`:

```jsx
  const fetchJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    return fetch(url)
      .then((response) => response.json())
      .then((jokeJson) => {
        // Set the joke value
        setJoke(jokeJson.value);
      });
  };
```

This stores `jokeJson.value` in state (under the `joke` key)

With `fetchJoke()` created, let's add a button that calls it `onClick`.

#### Calling `fetchJoke()`

To see the joke in the browser, add a `<button>` with an `onClick` to the rendered JSX:

```jsx
  return (
    <>
      <p>{joke}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </>
  );
```

:::tip
For the `onClick`, we don't need an anonymous function.
We don't need to access the Event Object, nor do we need to customize the arguments sent to `fetchJoke()`, as a result we can call the function direction _without_ the parantheses `()`
:::

After you save and the browser reloads, click the button a few times to make sure a new joke appears on the page.

### Adding a Loading Message

The code works, but we could improve the user experience. After the user clicks the `New Joke` button, we'll display the text `Loading...` on the page.
When the Response arrives, we'll replace the loading message with the joke text from the API.

To create this effect, we'll store an `isLoading` Boolean in state. Here's how it will be used:

- If `isLoading` is `true`, we'll show the loading message.
- Otherwise, we show the joke text.

#### Adding `isLoading` to state

First, add `isLoading` with a default value of `false` via the `useState` hook:

```jsx
import { useState } from 'react';

function Joke () {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(false)
```

#### Conditionally rendering the loading message

We'll update our component to use a [ternary statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) so that we show either the loading text or the joke text, based on the value of `isLoading`:

```jsx
  return (
    <>
      <p>{isLoading ? "Loading..." : joke}</p>
      <button onClick={fetchJoke}>New Joke</button>
    </>
  );
```

:::tip
We must use a ternary inside the JSX!
This is because an `if-else` statement is not an expression and does not resolve to a single value!
:::

#### Modifying `fetchJoke()`

We'll update `fetchJoke()` to do the following:

1. Sets `isLoading` to `true` immediately.
2. Makes the `fetch()` call.
3. Sets `isLoading` to `false` after processing the Response from the API.

```jsx
  const fetchJoke = () => {
    setIsLoading(true);
    // Then fetch the joke...
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';
    return fetch(url)
      .then((response) => response.json())
      .then((jokeJson) => {
        // Set the joke value and reset isLoading back to false
        setJoke(jokeJson.value);
        setIsLoading(false);
      });
  };
```

After saving, the updated code is loaded into the browser. Click the `New Joke` button to make sure your loading message appears while the browser waits for the API to respond.

## Summary

- You learned how to store the results of an API call in state. Like the event handling code in the previous lessons, you update state using `setState` function you created when you initialized the `useState` hook.
  - In this exercises our `setState` methods were `setIsLoading` and `setJoke`.
- When using `fetch()` to communicate with an API, you move the call to `this.setState()` to a `.then()` callback.
- You also learned how to use conditional rendering and additional `setState` functions to add a loading message to your app.
- You can control and change what's displayed in your UI by putting values in a component's state and modifying them with whatever `setState` function you initialized.

## Solution

- A completed version of this [hosted on StackBlitz](https://stackblitz.com/edit/react-bhifgxyg?file=src%2Fcomponents%2FJoke.jsx)