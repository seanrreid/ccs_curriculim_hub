---
title: Introductory Programming Concepts with JavaScript
sidebar_label: Programming Concepts
sidebar_position: 1
---

## Why do we write in a programming language?

Your computer is really just a collection of on/off switches, some labeled storage boxes, and wires that run between the switches and the boxes.

What gives your computer its power is that there are billions of switches, many times more boxes, and the wires are extremely fast.

At this scale, your computer is able to coordinate all of this electrical activity so that it can run complex programs like web browser, word processors, spreadsheets, video players, and 3D games.

The problem is that your computer _only_ thinks in terms of "on" and "off". To make the leap from "on" and "off" to 3D games, computer scientists developed different kinds of short-hand, or _code_, that gets translated into "on" and "off". The process of translation is more commonly known as _compiling_.

More specifically, we represent the "on" and "off" states as 1s and 0s because those conveniently translate into `True` and `False`. (There's a [whole branch of mathematics](https://en.wikipedia.org/wiki/Boolean_algebra) dedicated to doing complex logic with `True` and `False`.)

Early computers didn't have nearly as many switches or as much storage, so programming them was not as complex as it is today. Over time, [computers evolved rapidly](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo).

In a nutshell, programmers write code because programming the hardware of a computer would be too complex a task otherwise.

## What are the essential elements of programming?

- Storing values and definitions
- Writing statements and expressions that use values and definitions
- Combining statements and expressions into programs

We will begin exploring these essentials with the most basic of programs.

## What is "Hello World"?

"Hello World" is a short program that prints out "Hello World" to the screen.

Programmers use this as a first program because writing it answers the following questions:

- How do I create a String (a sequence of letters)?
- How do I print that String to the screen?

:::tip
Printing is one of the most powerful tools in a programmer's toolkit.
It provides a way to see what values are available in a program at a particular time.

You will use it regularly as you test an idea or debug your larger programs.
:::

Luckily, your code does not need to have any concept of the "screen" - JavaScript comes with a built-in function that handles that for you. You will see this in the upcoming code sample for the Hello World program.

## What's an expression?

An expression is a piece of code that results in a single value.

An example of an expression is the String `"Hello World"`. It's a sequence of text characters enclosed by quotation marks. It is already in its simplest form and can't be reduced any further.

Another example of an expression is `23 + 19`. It can be reduced to the integer (whole number) `42` but is still considered a single expression.

## What's a statement?

A statement is a general term for a single instruction that uses or manipulates values.

Here's a statement that prints `"Hello World"`:

```js
console.log("Hello World");
```

This statement uses the built-in `console.log()` function. Its job is to receive one or more values and print that to the terminal. In this example, we use it to display the String `"Hello World"`.

Create a new file named `hello_world.js`, type in this statement, and save the file. This is all it takes to write the "Hello World" program in JavaScript. To run your program, type this in your terminal and then press `Enter` on your keyboard:

```sh
node hello_world.js
```

You should see the following printed to the screen:

```sh
Hello World
```

## How do I leave notes for myself in my code?

Programming languages let you put notes, or **comments** in your code. Comments can help you remember how a complex piece of code works and can help your team members understand the reasoning and purpose of your code.

```js
// Hello World: my first JavaScript program
console.log("Hello World"); // <--- Look! I did it!
```

In JavaScript, a pair of slashes (`//`) is the beginning of a comment - the rest of that line of code is ignored.

:::tip
You will often _comment out_ a piece of buggy code so that it is ignored. Programmers do this to confirm that the rest of the program is still working as expected.

Once you've fixed the bug, you'll _uncomment_ the code so that it is part of the running program once again.
:::
