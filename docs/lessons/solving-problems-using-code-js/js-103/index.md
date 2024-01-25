---
title: JavaScript 103 - Callbacks and Anonymous Functions
sidebar_label: JavaScript 103
sidbar_position: 3
---

## Learning Objectives

After completing this lesson, you will be able to:

1. Create and use anonymous functions
2. Pass anonymous functions as callbacks
3. Write functions that accept functions as arguments

## Overview

You have learned to use a number of programming techniques:

- individual values (Number and String variables)
- collections of values (Arrays and Objects)
- loops (bodies of repeatable code)
- conditionals (choosing between different branches of code)
- functions (reusable bundles of code)

Together, these techniques form the basis for [Imperative Programming](https://en.wikipedia.org/wiki/Imperative_programming), a style of programming that focuses on statements that modify variables.

This lesson introduces another style of programming - [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming). Functional Programming emphasizes arguments and return values.

### Recap: Function Declarations

What you have written so far are function _declarations_. (In programming, this means to associate a value with a name - like you do with variables). To declare a function in JavaScript that adds two numbers, you would write this:

```js
function add(x, y) {
  return a + b;
}
```

To use this function, you _call_ it:

```js
const result = add(2, 3);
console.log(result);
// 5
```

Like any variable, you use a function's _name_ to refer to it. The difference between a function and a variable is that a function is _callable_. By putting a pair of parentheses after the name, you are able to run any statements in the function's body (the lines of code between its curly braces).

Not only is a function a "callable variable", it is also _configurable_ - you get a different output if you provide different inputs.

```js
const result1 = add(2, 3); // 5
const result2 = add(4, 5); // 9
```

Even though the definition of the function does not change, you get different `return` values by passing it different _arguments_:

### Anonymous Functions

Another way to write the `add()` function is like this:

```js
const add = function (x, y) {
  return x + y;
};
```

It can be used exactly the same way:

```js
const result = add(2, 3);
console.log(result);
// 5
```

In this version, you have literally created a "callable" variable. It is still:

- identified by its name
- a container for lines of code
- runnable by putting parentheses after its name

It looks like a combination of variable declaration (`const add`) and a function whose name is missing (`function (x, y) { ... }`).

In the code sample

```js
const add = function (x, y) {
  return x + y;
};
```

The RHS is an _anonymous function_, also called a _function expression_ or _function value_.

### Arrow functions

A new and popular alternative way to write function expressions is the shorthand _arrow syntax_. Here is yet another version of the `add()` function:

```js
const add = (x, y) => {
  return x + y;
};
```

This is an _arrow function_ and it may look strange at first. Here is what's different:

- The `function` keyword is omitted
- There is an arrow `=>` between the parameters and the body

We will use this style of anonymous function for the remainder of the lesson.

Anonymous functions are an important feature of JavaScript - they give web pages their interactivity and make Node.js servers their speed and versatility. In the next sections, you'll explore anonymous functions in the context of Numbers and Arrays.

### Receiving function arguments

To make the leap from writing anonymous functions to using anonymous functions, we'll build some functions that do basic arithmetic.

First, let's define functions that add, subtract, multiply, and divide:

```js
const add = (x, y) => {
  return x + y;
};
const sub = (x, y) => {
  return x - y;
};
const mul = (x, y) => {
  return x * y;
};
const div = (x, y) => {
  return x / y;
};
```

Next, we'll create a function that _expects to receive_ a function argument. We'll call it like so:

```js
const result = apply(2, 3, add);
console.log(result);
// 5
```

Notice that the third argument is `add` and not `add()`. If you put the parentheses next to the name `add`, JavaScript will call the `add` function _before_ it calls the `apply` function.

We want `apply` to receive a reference to the `add` function so that it can use it.

Here is the `apply` function:

```js
const apply = (a, b, fn) => {
  const val = fn(a, b);
  return val;
};
```

Remember that the parameter names `a`, `b`, and `fn` do not have to match any other variable names (such as `x` and `y`). Think of them as variables that are assigned when someone _calls_ the `apply` function.

We expect the first two arguments to be Numbers. We expect the third argument to be a function. In the body of `apply`, we run the line:

```js
const val = fn(a, b);
```

On the RHS, we are _calling_ `fn`. How?

- We use its name `fn`
- We put a pair of parentheses to the right of the name

Even though `fn` is not its "original" name, JavaScript will still run the function. (In the case of anonymous functions, there is no original name.)

We pass in the two numbers `a` and `b` as arguments to `fn`.

We trust that `fn` will return a value, and we assign that value to the variable `val`. Then, we `return val`:

```js{3}
const apply = (a, b, fn) => {
  const val = fn(a, b);
  return val;
}
```

To confirm that it works, we test out our `apply` function, passing it our `add`, `sub`, `mul`, and `div` functions:

```js
const r1 = apply(3, 4, add); // 7
const r2 = apply(20, 5, sub); // 15
const r3 = apply(4, 7, mul); // 28
const r4 = apply(99, 9, div); // 11
```

Since the `apply` function receives a function argument and then _calls it_, a JavaScript developer might say "we pass `apply` a callback".

:::tip Callbacks, anonymous functions, function expressions, etc.
It's easy to get overwhelmed with all the different names for functions in JavaScript.

Truth be told, they are interchangeable:

- "We pass `apply` a callback
- "We pass `apply` a function value
- "We pass `apply` a function

If you are ever uncertain, you can just say "function".
:::

### Processing Arrays with Callbacks

Here is an algorithm for adding all the numbers in an Array:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = nums[0];
for (let i = 1; i < nums.length; i++) {
  result = result + nums[i];
}
console.log(result);
```

And here is one for multiplying all the numbers in the same Array:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = nums[0];
for (let i = 1; i < nums.length; i++) {
  result = result - nums[i];
}
console.log(result);
```

What's the difference between those two loops? A single line.

If we want to subtract all the numbers or divide all the numbers, we'd have to write two more loops. And the only difference would still be that single line.

The general pattern is:

- We loop through the array
- We do some arithmetic
- We store the result in a variable

It would be better if we could do this:

```js
const r1 = reduce(nums, add); // 55
const r2 = reduce(nums, sub); // -53
const r3 = reduce(nums, mul); // 3628800
const r4 = reduce(nums, div); // 2.7557319223985894e-7
```

We call our imaginary function `reduce` because we want to "reduce" the Array down to a single value.

#### Writing `reduce()`

To change our loop code to a `reduce` function, we will:

- Change the variable name `nums` to `arr`
- Move `let result` and the loop
- Change the hard-coded arithmetic to a call to `fn`
- `return result` instead of `console.log()`ing it

Here's our code now:

```js
const reduce = (arr, fn) => {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }
  return result;
};
```

And we pass `nums` and `add` to it to confirm that it works:

```js
const r5 = reduce(nums, add);
console.log(r5);
// 55
```

:::tip `reduce` === "Accumulate"
In the last lesson, you learned how to accumulate different kinds of values using a loop.

Here, we write a "general-purpose" accumulator - our `reduce` function.

This technique is worth close-study and is used heavily in databases, data science, and search engines.
:::

#### Transforming an Array with `map()`

On the other hand, we might to transform each element in the Array (instead of reducing the Array to a single value). For example, what if we wanted the square (the number multiplied by itself)?

Using a loop, we could write this:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * nums[i]);
}
console.log(result);
// [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
```

To get the cubes (the square times the original number):

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * nums[i] * nums[i]);
}
console.log(result);
// [ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 ]
```

The pattern emerges again:

- We loop through the array
- We do some arithmetic
- We `.push()` the result onto an array

(This algorithm is commonly referred to as "mapping" - meaning to transform all the elements from a group.)

What we want is:

```js
const r6 = map(nums, square);
const r7 = map(nums, cube);
```

First, we describe how we want to transform a single Number:

```js
const square = (z) => {
  return z * z;
};

const cube = (z) => {
  return z * z * z;
};
```

Then we write a function that handles the loop and the `.push()`:

```js
const map = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
};
```

And now we can test our new `map()` function.

```js
const r6 = map(nums, square); // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
const r7 = map(nums, cube); // [ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000 ]
```

In this style of programming, you break the problem into two separate concerns:

- How do I iterate through an Array?
- What do I do with a single element in the Array?

The function that handles the iteration has no idea what to do with each individual element. The transformation function is only aware of a single element and knows nothing about iteration.

The power comes from the way that these functions cooperate.

### Passing Anonymous Functions

Next, we'll illustrate how to filter out elements from an Array.

It's a similar pattern to reducing and mapping:

- Iterate through an Array
- Test each element
- `.push()` the ones that pass the test into a new Array

Here is how we might use it to get only the even numbers from our `nums` Array:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, isEven);
// [2, 4, 6, 8, 10]
```

And to get the odd numbers:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, isOdd);
// [1, 3, 5, 7, 9]
```

You can already imagine how to write `filter`:

```js
const filter = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};
```

We `.push()` a value from the Array if and only if `fn(arr[i])` is `true`.

Here is how we might define `isEven` and `isOdd`:

```js
const isEven = (val) => {
  return val % 2 === 0;
};
const isOdd = (val) => {
  return val % 2 === 1;
};
```

One interesting property of arrow functions is that these can be written using an _implicit return_:

```js
const isEven = (val) => val % 2 === 0;
const isOdd = (val) => val % 2 === 1;
```

Here is what we did:

- We omitted the line break
- We omitted the curly braces, because there is only one statement
- We omitted the `return`, because that one statement was the return statement

And finally, if there is only a single argument, you can omit the parentheses:

```js
const isEven = (val) => val % 2 === 0;
const isOdd = (val) => val % 2 === 1;
```

Some developers prefer writing their arrow functions this way. The array "looks like" it's transforming `val` into a Boolean. Feel free to write your anonymous functions with the longer syntax.

We will use it in this section simply because it is shorter.

Returning to our original `filter()` example, notice the arguments on line 2:

```js{2}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, isEven);
// [2, 4, 6, 8, 10]
```

We use variable names because they're shorter, and we know that JavaScript will substitute in the corresponding value.

On the other hand, they aren't necessary. We could have typed the value of `nums` instead of creating the variable:

```js
const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], isEven);
// [2, 4, 6, 8, 10]
```

It still works!

And it would still work if we passed in the function value instead of the `isEven` variable:

````js
const result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], val => val % 2 === 0);
// [2, 4, 6, 8, 10]

Though that example might be clearer if we went back to using our `nums` variable:


```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, val => val % 2 === 0);
// [2, 4, 6, 8, 10]
````

You can read this as "filter the nums array using the function expression `val => val % 2 === 0`".

:::tip When should you use anonymous function arguments?
There are differing opinions, but we recommend:

- Give a function a name:
  - if you will use it more than twice in your program
  - or if it long/complex
- Use an anonymous function:
  - if you only use it once or twice in your program
  - or if it is very short and quick to type out

:::

Here, we filter out anything that isn't an odd number:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, (v) => v % 2 === 1);
// [1, 3, 5, 7, 9]
```

And, we could do the same thing for multiples of 3:

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = filter(nums, (v) => v % 3 === 0);
// [3, 6, 9]
```

Here is an example using `map()` on an Array of Strings:

```js
const greetings = ["hello", "how are you?", "good to see you!"];
const result = map(greetings, (s) => s.toUpperCase());
console.log(result);
// [ 'HELLO', 'HOW ARE YOU?', 'GOOD TO SEE YOU!' ]
console.log(greetings);
// ['hello', 'how are you?', 'good to see you!']
```

## Summary

In this lesson you learned a different way to approach problem solving. Taking what you've already learned, you saw that you can break your algorithms into two parts: a function that works with a single value, and another that applies the function to each value in an Array.

You learned new ways to write functions, including anonymous functions and the arrow syntax. You wrote functions that received functions as arguments, and you passed anonymous functions as arguments.

Review this lesson as needed - these are standard patterns in modern JavaScript but require plenty of practice before you master them.

## Additional Resources

- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Immediately Invoked Function Expressions](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) - anonymous functions that run, but are never assigned to a variable
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
