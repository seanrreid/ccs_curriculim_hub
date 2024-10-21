---
sidebar_position: 4
sidebar_label: Hints
title: Helpful Syntax/Examples
---

## Conditional Rendering

Well, this is confusing as hell!

- Old React says: [If-Else in JSX](https://react-cn.github.io/react/tips/if-else-in-JSX.html)
    > if-else statements don't work inside JSX. This is because JSX is just syntactic sugar for function calls and object construction.
- But new React says: [Conditional Rendering](https://react.dev/learn/conditional-rendering)
    > Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

See this [Stackblitz Demo](https://stackblitz.com/edit/ccs-ternary-demo?file=src%2FApp.jsx) for an example.

## Ternary Operators

A ternary is an item that is composed of three parts.

`[Part 1: The condition] ? [Part 2: Do this if truthy] : [Part 3: Do this if not true]`

Per MDN:

> The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

- [MDN: Conditional (ternary) Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
- [Flavio Copes: Ternary Operator](https://flaviocopes.com/javascript-ternary-operator/)

## Nullish Coalescing

- [MDN: Nullish Coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [Flavio Copes: JavaScript Nullish Coalescing](https://flaviocopes.com/javascript-nullish-coalescing/)
- [JavaScript Tutorial: JavaScript Nullish Coalescing Operator](https://www.javascripttutorial.net/es-next/javascript-nullish-coalescing-operator/)

## Optional Chaining

- [MDN: Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Flavio Copes: JavaScript Optional Chaining](https://flaviocopes.com/javascript-optional-chaining/)
- [JavaScript Tutorial: JavaScript Optional Chaining Operator](https://www.javascripttutorial.net/es-next/javascript-optional-chaining-operator/)
