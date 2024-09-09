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
npx create-react-app joke-app
cd joke-app
mkdir src/components
npm start
```

### Preparing App.js

The `App` Component's job is to display our `JokeApp`. We'll begin by clearing out elements that we don't need.

-   Remove the `import` for `logo.svg`.
-   Remove the children of `<div className="App"></div>`.

You'll import the `JokeApp` later in this lesson.

```js
import React from 'react';
import './App.css';

function App() {
    return <div className='App'>{/* JokeApp Component will go here */}</div>;
}

export default App;
```

### Creating the `JokeApp` Component

In `src/components/JokeApp.js`, add the code for creating a basic React Component:

1. `import` React.
2. Declare and export a `class` Component.
3. Add the initial `joke` state in the `constructor()`.
4. Display the `joke` in the `render()`.

```js
import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
        };
    }

    render() {
        return (
            <div>
                <p>{this.state.joke}</p>
            </div>
        );
    }
}

export default JokeApp;
```

We'll add code for retrieving a new joke from the API and storing it in state.

### Adding `_fetchJoke()`

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

Add the new code to perform the `fetch()`, convert the `response` to JSON, and get ready to store the joke:

```js{10-15}
    render() {
        return (
            <div>
                <p>{this.state.joke}</p>
            </div>
        );
    }

    _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                // Put the text of the joke in state
            });
    }

```

In the body of the second `.then()` callback, add a call to `this.setState()`:

```js{14-18}
    render() {
        return (
            <div>
                <p>{this.state.joke}</p>
            </div>
        );
    }

    _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                this.setState({
                    joke: jokeJson.value,
                }, () => {
                    console.log('New joke stored');
                });
            });
    }
```

This stores `jokeJson.value` in state (under the `joke` key) and prints a message to the console after `this.state` is updated.

With `_fetchJoke()` created, let's add a button that calls it `onClick`.

#### Calling `_fetchJoke()`

To see the joke in the browser, add a `<button>` with an `onClick` to the rendered JSX:

```js{5}
    render() {
        return (
            <div>
                <p>{this.state.joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }

    _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';
        fetch(url)
            .then(response => response.json())
            .then(jokeJson => {
                this.setState({
                    joke: jokeJson.value,
                }, () => {
                    console.log('New joke stored');
                });
            });
    }
```

For the `onClick`, we don't need an anonymous function. We don't need to access the Event Object, nor do we need to customize the arguments sent to `_fetchJoke()`.

After you save and the browser reloads, click the button a few times to make sure a new joke appears on the page.

### Adding a Loading Message

The code works, but we could improve the user experience. After the user clicks the `New Joke` button, we'll display the text `Loading...` on the page.
When the Response arrives, we'll replace the loading message with the joke text from the API.

To create this effect, we'll store an `isLoading` Boolean in state. Here's how it will be used in the `render()`:

-   If `isLoading` is `true`, we'll show the loading message.
-   Otherwise, we show the joke text.

#### Adding `isLoading` to state

First, add `isLoading: false` to `this.state` in the `constructor()`:

```js{6}
class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false
        };
    }
```

#### Conditionally rendering the loading message

In the `render()`, add a ternary so that we show either the loading text or the joke text, based on the value of `this.state.isLoading`:

```js{4}
    render() {
        return (
            <div>
                <p>{this.state.isLoading ? "Loading..." : this.state.joke}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }
```

We must use a ternary inside the JSX, since an if-else is not an expression and does not resolve to a single value.

#### Modifying `_fetchJoke()`

We'll update `_fetchJoke()` to do the following:

1. Sets `this.state.isLoading` to `true` immediately.
2. Makes the `fetch()` call.
3. Sets `this.state.isLoading` to `false` after processing the Response from the API.

Cut the `fetch()` call, replacing it with `this.setState()`:

```js{2-6}
    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            // We'll move the fetch() call here
        })
    }
```

Paste the `fetch()` call in the body of the callback:

```js{5-14}
    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            const url = 'https://api.chucknorris.io/jokes/random?category=dev';
            fetch(url)
                .then(response => response.json())
                .then(jokeJson => {
                    this.setState({
                        joke: jokeJson.value
                    }, () => {
                        console.log('New joke stored');
                    });
                })
        })
    }
```

This ensures that `isLoading` is set before calling `fetch()`.

When putting `jokeJson.value` in state, set `isLoading` to `false`:

```js{11}
    _fetchJoke = () => {
        this.setState({
            isLoading: true,
        }, () => {
            const url = 'https://api.chucknorris.io/jokes/random?category=dev';
            fetch(url)
                .then(response => response.json())
                .then(jokeJson => {
                    this.setState({
                        joke: jokeJson.value,
                        isLoading: false
                    }, () => {
                        console.log('New joke stored');
                    });
                })
        })
    }
```

After saving, the updated code is loaded into the browser. Click the `New Joke` button to make sure your loading message appears while the browser waits for the API to respond.

## Summary

You learned how to store the results of an API call in state. Like the event handling code in the previous lessons, you update state using `this.setState()` in a helper method. When using `fetch()` to communicate with an API, you move the call to `this.setState()` to a `.then()` callback.

You also learned how to use conditional rendering and additional `this.setState()` calls to add a loading message to your app.

By putting values in `this.state` and modifying them with `this.setState()`, you can control and change what's displayed in your UI.
