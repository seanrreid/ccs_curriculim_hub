---
sidebar: auto
---

# Handling Events in React


## Learning Objectives

After completing this lesson, you will be able to:

1. Add event handler props to Components
1. Use the event object passed to the handler function
1. Change state in component that received the event
1. Change state in an ancestor when a descendant receives the event

## Lesson

### Overview

Now that you have a grasp of:

- How to build
- Pass props
- Manage state

It's time to explore React's Event system. This app uses the [Rot13](https://en.wikipedia.org/wiki/ROT13) cipher to "translate" a plain text message into an encoded message.

### Setup

```sh
npx create-react-app translation-app
cd translation-app
mkdir src/components
code .
npm start
```

#### Translator.js

Create a `src/components/Translator.js` with a stateful Component:

```js
import React from 'react';

class Translator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Translator</h1>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Translator;
```

#### App.js

Change `src/App.js`, removing most of the JSX.
Import the `Translator` and pass it an `initialText` prop. (We'll update `Translator` in the next section to use `initialText`.)

```js
import React from 'react';
import './App.css';

import Translator from './components/Translator';

function App() {
  return (
      <div className="App">
          <Translator initialText="salutations" />
      </div>
  );
}

export default App;
```

#### Updating Translator to Use `initialText`

In the `constructor()`, use `props.initialText` as the value for `text`. If `props.initialText` is a falsey value, use an empty String `''`:

```js
import React from 'react';

class Translator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialText || ''
        }
    }

    render() {
        return (
            <div>
                <h1>Translator</h1>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Translator;
```



### Adding an `input` Component

Next, we'll add a text input so that the user can type their own message:

```js{13}
class Translator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialText || ''
        }
    }

    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" />
                <p>{this.state.text}</p>
            </div>
        );
    }
}
```

### Adding the `_updateText()` Helper Method

Add a helper method that will update state:

```js{11-16}
    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" />
                <p>{this.state.text}</p>
            </div>
        );
    }

    _updateText = (newText) => {
        this.setState({
            text: newText
        }, () => {
            console.log(`Text updated to: ${newText}`);
        })
    }
```


### Add the onChange handler

When you worked with `button` Components, you used an `onClick` prop. For an input, you use the `onChange` prop.

Set the value of `onChange` to an arrow function that:

1. expects to receive the `event` Object from the browser
2. prints `event.target.value` to the Console

```js{5-7}
    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" onChange={(event) => {
                    console.log(event.target.value);
                }}/>
                <p>{this.state.text}</p>
            </div>
        );
    }

    _updateText = (newText) => {
        this.setState({
            text: newText
        }, () => {
            console.log(`Text updated to: ${newText}`);
        })
    }
```

After you save your changes, open the dev tools and watch the Console as you type into the text input.

#### Calling `_updateText()` from the Event Handler

Instead of just printing the value to the Console, call `this._updateText()` and pass it `event.target.value`:

```js{7}
    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" onChange={(event) => {
                    console.log(event.target.value);
                    this._updateText(event.target.value);
                }}/>
                <p>{this.state.text}</p>
            </div>
        );
    }

    _updateText = (newText) => {
        this.setState({
            text: newText
        }, () => {
            console.log(`Text updated to: ${newText}`);
        })
    }
```

#### Translating `this.state.text`

Install the `rot-thirteen` npm module

```sh
npm install rot-thirteen
```

The `rot-thirteen` module gives you a function that will return the rot13 version of the text. `import` the module, giving the variable name `rot13`:


```js{2}
import React from 'react';
import rot13 from 'rot-thirteen';

class Translator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialText || ''
        }
    }
...
```


There are two options for the translation. We can store the translation in state or we can do the translation when we interpolate into our JSX.

We'll look at both options.

First, we'll translate at the time of interpolation.

Add an additional `<p>` Component so that we can see the original and the rot13 version of our input text:

```js{9,10}
    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" onChange={(event) => {
                    console.log(event.target.value);
                    this._updateText(event.target.value);
                }}/>
                <p>{this.state.text}</p>
                <p>{rot13(this.state.text)}</p>
            </div>
        );
    }
...
```


The other option is to store the translation.

We'll add another part of state called `translated` and set its initial value to the `rot13()` transformed version of `props.initialText`. If `props.initialText` is not passed in, we set `translated` to an empty String.

```js
import React from 'react';
import rot13 from 'rot-thirteen';

class Translator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialText || '',
            translated: rot13(props.initialText) || '',
        }
    }
...
```

Change the second `<p>` so that it displays `this.state.translated`:

```js{10}
    render() {
        return (
            <div>
                <h1>Translator</h1>
                <input type="text" onChange={(event) => {
                    console.log(event.target.value);
                    this._updateText(event.target.value);
                }}/>
                <p>{this.state.text}</p>
                <p>{this.state.translated}</p>
            </div>
        );
    }
...
```

In your `_updateText()` helper method, you'll set `text` and `translated`:

```js
    _updateText = (newText) => {
        this.setState({
            text: newText,
            translated: rot13(newText)
        }, () => {
            console.log(`Text updated to: ${newText}`);
        })
    }
```

Which approach is better?

In an app this small, it will not make a big difference which option you choose. However, if the `Translator` Component re-renders often, `rot13()` will be called frequently. If `rot13()` were a computationally-intense function, your app's performance could degrade.

Putting the call to `rot13()` in `_updatedText()` ensures that the translation work only takes place when the user inputs text.

### Passing arguments to helper methods

When we added the `onChange` prop to the `<input>`, we gave it an anonymous function that expected to receive the Event object:

```js
    <input type="text" onChange={(event) => {
        console.log(event.target.value);
        this._updateText(event.target.value);
    }}/>
```

In the previous lesson, we did not use an anonymous function. Instead, we passed the name of the helper function as the `onClick` prop:

```js
    <button onClick={this._decrementCounter}>-</button>
```

Could we have written our `onChange` the same way? Let's try it and see.


```js
    <input type="text" onChange={this._updateText}/>
```

When you type in the `<input>`, the console should show Errors.

What's different? With our `Counter` application, we did not need to pass arguments to `_decrementCounter()` or `_incrementCounter()`. In our `Translator` app, we need to pass `_updateText()` the new text to store in state.

When writing plain (non-React) DOM code, the browser calls your Event Handler functions and passes them the Event object. With React code, the same is true.

You need the anonymous function so that it can receive the events. Inside the anonymous function, you can pass custom arguments to `_updateText()`.

:::tip Why can't `_updateText()` receive the Event?
Technically, you could write `_updateText()` like so:

```js{1,2}
    _updateText = (event) => {
        const newText = event.target.value;
        this.setState({
            text: newText,
            translated: rot13(newText)
        }, () => {
            console.log(`Text updated to: ${newText}`);
        })
    }
```

However, `_updateText()` now has two responsibilities:

- Deal with the Event Object
- Call `this.setState()`

This creates an unwanted constraint: `_updateText()` can only be used as an Event Handler function. You cannot pass it text retrieved from an API, or run it manually to test it out.

Using an anonymous function keeps `_updateText()` flexible.
:::

## Summary

In this lesson, you learned how to pass your helper methods to event handler props, such as `onClick` and `onChange`. This triggers state changes in your Component, updating your UI.
