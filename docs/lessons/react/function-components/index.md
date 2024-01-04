---
sidebar: auto
---

# Writing Function Components


## Learning Objectives

After completing this lesson, you will be able to:

1. Write "render-only" components (shorter than class components)
1. destructuring props

## Lesson

### Converting a Class Component to a Function

When you don't need to manage state, you can write a Component using a function instead of a class.
Your function will receive a `props` argument.

Here is a Walkthroughs of converting the `Greeter` Component from a class to a function.

```js
import React from 'react';

class Greeter extends React.Component {
    render() {
        return (
            <h1>Hello again, {this.props.name}!</h1>
        );
    }
}

export default Greeter;
```

- Remove the `class` declaration (and the closing curly brace)


```js
import React from 'react';


    render() {
        return (
            <h1>Hello again, {this.props.name}!</h1>
        );
    }


export default Greeter;
```

Change the word `render` into `function Greeter`

```js
import React from 'react';


    function Greeter() {
        return (
            <h1>Hello again, {this.props.name}!</h1>
        );
    }


export default Greeter;
```

Add a `props` argument, and remove `this.` from the function:

```js
import React from 'react';


    function Greeter(props) {
        return (
            <h1>Hello again, {props.name}!</h1>
        );
    }


export default Greeter;
```

The `props` are passed directly to your Component when it is a function instead of a class.


Reformat, adjusting indentation and removing unnecessary line breaks:

```js
import React from 'react';

function Greeter(props) {
    return (
        <h1>Hello again, {props.name}!</h1>
    );
}

export default Greeter;
```

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

Finally, you can omit the `const Greeter` declaration altogether by exporting the arrow function directly:


```js
import React from 'react';

export default (props) => (
    <>
        <h1>Hello again, {props.name}!</h1>
        <h2>We're very pleased to meet you!</h2>
    </>
);
```

### Summary

In this lesson, you learned how to write Function Components, which are like "render-only" Components. You can use them for any Component that doesn't need to manage state.