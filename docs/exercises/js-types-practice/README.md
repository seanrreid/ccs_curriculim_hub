---
title: Working with JavaScript Data Types
sidebar_label: JS Types
sidebar_position: 4.01
---

The exercises below are designed to get you used to working with basic JavaScript data types.

## Setup

- Make a new folder called `js-types-exercise`
- Initialize a new git repository in this folder
- Make two files in the folder, `index.html` and `scripts.js`
- Copy/Paste the exercise into `scripts.js`.

:::tip
Make sure you've loaded `scripts.js` in your `index.html` file!!
:::

## Exercise

Your task is to open your browser `console` to view the output. You'll make changes to each function to return the desired output. Make your changes inside of the curly brackets, `{}`.

:::tip
You don't need to change the functions themselves. You'll add your code inside the `{}`
:::

Save your changes to the file, reload the browser, and view the output in the `console`.

There are comments for each exercise explaining the type that should be returned. They'll get progressively more difficult with each exercise.

```js
console.log('JavaScript Types Excercise');

function exercise1() {
  // Declare and instantiate a number and return it
}

function exercise2() {
  // Declare and instantiate a floating point number that is not a whole number and return it
}

function exercise3() {
  // Declare and instantiate a string "Hello World!" and return it
}

function exercise4() {
  // Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
}

function exercise5() {
  // Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
}

function exercise6() {
  // Declare and instantiate a boolean value 'false' and return it
}

console.log('This should be a number:', exercise1());
console.log('This should be a floating point number:', exercise2());
console.log('This should be a string saying "Hello World":', exercise3());
console.log( 'This should be an array that includes a string, "Hello World," and a number 4:', exercise4());
console.log('This should be an object that has key-value pairs, key1 -> "Hello World" and key2 -> 4:', exercise5());
console.log("This should be a boolean value that returns 'false':",exercise6());
```

## CHEAT SHEET

- "Declaring" a variable is done via the keywords `const`, `let`, and `var`.
- "Instantiating" a variable is assigning it a value.
- An array is in square brackets, `[]`.
- An object is in curly brackets, `{}`.
- A "key-value pair" follows the format: `key: value`.
- The word `return` is magic ✨ (we'll discuss this more later)
