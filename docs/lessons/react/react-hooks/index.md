---
sidebar: auto
---

# React Hooks and Lifecycle Methods

## Learning Objectives

After completing this lesson, you will be able to:

1. Override lifecycle methods in classes to customize behavior
1. Create and manage state variables with `useState()`
1. Trigger custom code at specific stages of a Function Component's life via `useEffect()`

## The Component Lifecycle

React moves your Component through a specific sequence of steps when it draws (and redraws) it to the DOM. You have an opportunity to run your own code during each of these steps to perform tasks like setting up your Component's `state` variables, choose what to `render()` to the DOM, or stopping an animation timer.

### "If it walks like a duck, and talks like a duck"

Starting with version 15.5, React used the `Class` keyword to create components.
These were extensions of the `React.Component` class, and included a `constructor` method and intial `state` values.

When defining a class Component, you always do these two things:

- Declare a class with `extend React.Component`
- Define a `render()` method

React knew how to work with your Components because it knows that it is a kind of `React.Component`. The `React.Component` class has a set of methods that the React library expects to call. By default, your class inherits all of these methods.

To customize the behavior of your Component, you override these methods. That is, you define methods in your class that have the same name as the inherited ones. React will look at your class first to see if it has its own version of the method. If not, it will use the inherited one.

For example, React calls your Component's `render()` method to find out what to draw to the DOM. This was the first method you learned to customize. After that, you defined a `constructor()` to set up the initial values for `state`.

React calls these methods in a specific order based on whether React is preparing to draw your Component, is updating and redrawing your Component, or is about to remove your Component from the DOM.

Collectively, they are known as the lifecycle methods.

#### The Three Phases

The lifecycle methods are grouped into three phases:

1. Mounting - preparing to add to the DOM
2. Updating - `state` or `props` has changed
3. Unmounting - will be removed from the DOM

Components spend most of their time in the updating phase. This is where the Component's data changes because of user or network interaction. The mounting and unmounting phases only take place once during the Component's life.

Here's an example of a Component that demonstrates the commonly used lifecycle methods

```js
class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor()');

        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount()');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate()');
    }

    render() {
        console.log('render()');
        return (
            <>
                <h1>Lifecycle Demo {this.state.count}</h1>
                <button onClick={this._increment}>+</button>
                <h2>App count: {this.props.appCount} </h2>
            </>
        );
    }

    _increment = () => {
        console.log('_increment()');
        this.setState(
            {
                count: this.state.count + 1,
            },
            () => {
                console.log('this.setState() finished');
            }
        );
    };
}
```

## Lifecycle for Function Components

You can think of Function Components as just the `render()` method of a class Component. They have access to `props` and the `return` the JSX to draw to the DOM.

When Function Components were first introduced, there was no way to run code at other points in its lifecycle without converting it to a class.

To solve this problem, the React Dev team introduced _hooks_. React hooks are functions that customize a Function Component's lifecycle behavior.

### How to Use Hooks

The rules (per [their docs](https://reactjs.org/docs/hooks-rules.html))

- Only call hooks at the top level of your Function Components
  - not in loops, conditionals, or nested functions
  - This is how React knows which state variables go with which Components.
- Only call hooks from React Components (ones that return JSX)

### Managing State with Hooks

To manage state with a class, you write the following:

- a `constructor()` with an initial value for any state variables
- a helper method that calls `this.setState()`
- a `render()` that displays the state variable and has an event handler that calls the helper method

Here is the relevant code from the `LifecycleDemo` class:

```jsx
class LifecycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor()');

        this.state = {
            count: 0,
        };
    }

    // Other lifecycle methods omitted

    render() {
        console.log('render()');
        return (
            <>
                <h1>Lifecycle Demo {this.state.count}</h1>
                <button onClick={this._increment}>+</button>
                <h2>App count: {this.props.appCount} </h2>
            </>
        );
    }

    _increment = () => {
        console.log('_increment()');
        this.setState(
            {
                count: this.state.count + 1,
            },
            () => {
                console.log('this.setState() finished');
            }
        );
    };
}
```

Here is the equivalent Function Component:

```jsx
import React, { useState } from 'react'

export default (props) => {
    console.log('render()');
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    return (
        <>
            <h1>Lifecycle Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );
}
```

On line 5, we call `useState()` and pass in the initial value.

`useState()` returns an Array with two items, in this order:

1. The value of the state variable it created
2. A function that can set the state variable

On the LHS, we use an [Array destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to create local variable names for the two items in the Array: `count` and `setCount`.

:::tip When destructuring, only order matters
When getting started with `useState()`, developers wonder what variable names are supposed to go between the square brackets `[]`.

The short answer is that it doesn't matter. Our advice is to give these the same names you would a class state variable and the helper method.

What does matter is the order of the variables. Consider the following example:

```jsx
const [koala, setKoala] = useState('');
```

It is equivalent to:

```jsx
const arrayOfStateManagementGoodies = useState('');
const koala = arrayOfStateManagementGoodies[0];
const setKoala = arrayOfStateManagementGoodies[1];
```

The first version is simply [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar). It's a one-liner that creates the variables and assigns the corresponding values from the Array returned by `useState()`.
:::

On line 11, we display the current value of the `count`, followed on line 12 by a `button` whose `onClick` calls a helper function.

```jsx
import React, { useState } from 'react'

export default (props) => {
    console.log('render()');
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    return (
        <>
            <h1>Lifecycle Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );
}
```

(For code this short, the helper function isn't necessary, but we've kept it so that the Function Component and the class Component are more similar.)

### Replicating Lifecycle Methods with Hooks

Besides managing state, you can access the Component Lifecycle using hooks.

The three most frequently use Lifecycle methods (`componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`) are all rolled into a single hook: `useEffect()`.

The "effect" in the function name `useEffect()` refers to "side effects" that should be triggered at certain points in the life of a Component: retrieving data from an API, interacting directly with the DOM, disabling animation timers.

We'll continue to modify our Function Component, adding code to replicate the behavior of each of the three commonly used Lifecycle methods.

#### Replacing `componentDidUpdate()`

The easiest Lifecycle method to duplicate with a hook is `componentDidUpdate()`, which runs after the Component renders.

First, we import `useEffect` from `react`. Then, we call `useEffect()` and pass it a callback function.

```jsx
import React, { useState, useEffect } from 'react';
export default (props) => {
    console.log('render()');
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    // componentDidUpdate()
    useEffect(() => {
        console.log('Runs after every render');
    });

    return (
        <>
            <h1>Lifecycle Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );
}
```

After saving the changes, `Runs after every render` prints to the Console every time you change `state` (by clicking the `+` button) or `props` (by clicking the `Update app's count` button).

#### Watching a Variable

A class Component's `componentDidMount()` runs exactly once, during the mounting phase. When we called `useEffect()` in the previous code sample, our callback runs after every render.

`useEffect()` accepts an Array as an optional second argument. This Array serves as a list of variables to watch for changes. If one of the variables in the Array does change from one render to the next, `useEffect()` will call the callback.

```jsx
import React, { useState, useEffect } from 'react';
export default (props) => {
    console.log('render()');
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    // componentDidUpdate(), watching a variable
    useEffect(() => {
        console.log(`count is now ${count}`);
    }, [count]);

    // componentDidUpdate()
    useEffect(() => {
        console.log('Runs after every render');
    });

    return (
        <>
            <h1>Lifecycle Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );
}
```

When you try this out in the browser, you'll see that the `console.log()` shows the _new_ value of `count`.

#### Replicating `componentDidMount()`

To run a callback only once, after the first render, you can pass `useEffect()` an empty Array as the second argument.

```jsx
import React, { useState, useEffect } from 'react';
export default (props) => {
    console.log('render()');
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    // componentDidMount()
    useEffect(() => {
        console.log('Runs once.);
    }, []);

    // componentDidUpdate(), watching a variable
    useEffect(() => {
        console.log(`count is now ${count}`);
    }, [count]);

    // componentDidUpdate()
    useEffect(() => {
        console.log('Runs after every render');
    });

    return (
        <>
            <h1>Lifecycle Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );
}
```

#### Replicating `componentWillUnmount()`

`componentWillUnmount()` runs when a Component will be removed from the DOM. To reproduce this behavior:

- Call `useEffect()`
- Pass an empty Array as the second argument
- Return a function from the callback

React knows that if you return a function from the callback, it should call the function to do "clean up". Passing the empty Array ensures that the clean up function will only run once (when the Component is unmounting).

```jsx
import React, { useState, useEffect } from 'react';
export default (props) => {
    console.log('render()');
    const [count, setCount] = useState(0);

    const _increment = () => setCount(count + 1);

    // componentDidUpdate(), watching a variable
    useEffect(() => {
        console.log(`count is now ${count}`);
    }, [count]);

    // componentDidMount()
    useEffect(() => {
        console.log('Runs once');
    }, []);

    // componentDidUpdate()
    useEffect(() => {
        console.log('Effect runs after every render');
    });

    // componentWillUnmount()
    useEffect(() => {
        return () => {
            console.log('Runs when the Component is removed');
        }
    }, [])

    return (
        <>
            <h1>Lifecycle Demo {count}</h1>
            <button onClick={_increment}>+</button>
            <h2>App count: {props.appCount} </h2>
        </>
    );
}
```

## async `useEffect()`

As a final note, you cannot pass an `async` function directly to `useEffect()`.

The following will not run and a warning will be printed to the Console:

```jsx
useEffect(async () => {
    const val = await fetch(someAPI).then((r) => r.json());
    console.log(`API returned ${val}`);
});
```

However, you can define an `async` function _inside_ the callback, and it will work as expected:

```jsx
useEffect(() => {
    const asyncFn = async () => {
        const val = await fetch(someAPI).then((r) => r.json());
        console.log(`API returned ${val}`);
    };
    asyncFn();
});
```

## Summary

With version 16.8.0, hooks provide a way for Function Components to manage state and access the Component Lifecycle. You learned how to manage state with `useState()`, which returns an Array with your state variable and a function that can set the state variable.

`useEffect()` is more complex, as it serves as the equivalent of `componentDidMount()`, `componentDidUpdate()`, and `componentDidUnmount()`. In all cases, you pass a callback function to `useEffect()`. By default, the callback will run after ever render, but this can be customized by passing an Array as the second argument. If you need to run clean up code (after the Component is removed from the DOM), return a function from your callback.
