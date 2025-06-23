---
title: Higher Order Components
sidebar_label: Higher Order Components
sidebar_position: 5
---

## Sidequest: Higher Order Functions

Higher Order Functions either take one or more functions as arguments, _or_ returns a function as its result, without mutating data.
This makes them ideal for Functional Programming. They follow the principles of encapuslation (think: scope), modularity (able to be reused) and immutablity (they don't change any data in place).

While not _specific_ to React, you'll see the Higher Order Function (HOF) pattern mentioned throughout React. There are even [Higher Order Components (HOC)](https://blog.logrocket.com/understanding-react-higher-order-components/#creating-using-hoc-function) that can be used to return new components.

<details>
<summary>Example</summary>
```js
// Object with methods using the prototype chain
const calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};

// Higher-order function that takes an object method as an argument
function applyOperation(x, y, operation) {
  return operation(x, y);
}

// Using the higher-order function with object methods
const resultAddition = applyOperation(5, 3, calculator.add);
console.log(resultAddition); // Outputs: 8

const resultSubtraction = applyOperation(5, 3, calculator.subtract);
console.log(resultSubtraction); // Outputs: 2
```
</details>