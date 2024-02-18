---
title: React - Building Function Components
sidebar_label: React - Functional Components
sidebar_position: 5
---

## Learning Objectives

After completing this lesson, you will be able to:

1. Write "render-only" components
1. destructuring props

## Lesson

### Writing a Function Component

In modern React, you can write a Component using a function instead of a class.
Your function will receive a `props` argument by default.

```js
import React from 'react';

function Greeter(props) {
    return (
        <h1>Hello again, {props.name}!</h1>
    );
}


export default Greeter;
```

The `props` are passed directly to your Component when it is a function.

Alternatively, you can write an arrow function:

```js
import React from 'react';

const Greeter = (props) => {
    return (
        <h1>Hello again, {props.name}!</h1>
    );
}

export default Greeter;
```

And you can use implicit return by:

1. Removing the curly braces around the function body
2. Removing the `return` keyword

```js
import React from 'react';

const Greeter = (props) => (
    <h1>Hello again, {props.name}!</h1>
);

export default Greeter;
```

To return multiple sibling Components (without wrapping everything in another JSX tag), use the (what is this called?)

```js
import React from 'react';

const Greeter = (props) => (
    <>
        <h1>Hello again, {props.name}!</h1>
        <h2>We're very pleased to meet you!</h2>
    </>
);

export default Greeter;
```

## Summary

In this lesson, you learned how to write Function Components, which are like "render-only" Components. You can use them for any Component that doesn't need to manage state.