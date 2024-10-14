---
title: React Intro - Tic/Tac/Toe
sidebar_label: React - Introduction
sidebar_position: 7
---

<!-- markdownlint-disable no-inline-html -->

## Learning Objectives

After completing this assignment, you should…

- Know how to create React components
- Use event listeners in React

## Official React Tutorial: Tic Tac Toe

You'll create a tic tac toe game with React that has at least three components: Game, Board, and Square.

- Use the official React Tutorial to walk you through the process: [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)
- Complete the tutorial up through _Completing the Game_.
- When you see this below, you're finished:
  > Congratulations! You now have a working tic-tac-toe game. And you’ve just learned the basics of React too. So you are the real winner here

## Mozilla Developer Network:  TODO List

### Read These

- [Understanding client-side JavaScript frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
- [Getting started with React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

### Then do this

- [MDN: React TODO App](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)

> Let's say that we've been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through the basic structure and styling of such an application, ready for individual component definition and interactivity, which we'll add later.

:::info
:loudspeaker: The ToDo app requires Vite to scaffold a _new_ React App. The steps are below.

Remember: You need to run `npm run dev` after you've setup your folders to run your app
:::

### Using `vite` to generate a new React app

```sh
npm create vite@latest [your app name]
```

Then answer the following questions:

```sh
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others

? Select a variant: › - Use arrow-keys. Return to submit.
    TypeScript
    TypeScript + SWC
❯   JavaScript
    JavaScript + SWC
```

Once it's done installing you'll see:

```sh
Done. Now run:

cd [your app name]
npm install
npm run dev
```
