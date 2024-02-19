---
title: React Intro - Tic/Tac/Toe
sidebar_label: React - Introduction
sidebar_position: 22
---

<!-- markdownlint-disable no-inline-html -->

## Must Haves

- Create two new folders named the following
  - `react-tic-tac-toe`
  - `react-todo-app`
- Initialize a git repository in each folder

## Learning Objectives

After completing this assignment, you should…

- Know how to create React components
- Use event listeners in React

## Getting Started

- Use `vite` to generate a new React app:

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

## Official React Tutorial: Tic Tac Toe

You'll create a tic tac toe game with React that has at least three components: Game, Board, and Square.

- Use the official React Tutorial to walk you through the process: [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe)

### Setup

:warning: Skip the instructions for _Setup for the tutorial_ section. :warning:

:memo: Instead of forking the Codesandbox, do the following:

- In your local `react-tic-tac-to` folder, open `App.js` and delete everything
- Put the following code into App.js:

```jsx
export default function Square() {
  return <button className="square">X</button>;
}
```

Complete the tutorial up through _Completing the Game_. When you see this below, you're finished.

> Congratulations! You now have a working tic-tac-toe game. And you’ve just learned the basics of React too. So you are the real winner here

## Mozilla Developer Network:  TODO List

- [MDN: React TODO App](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)

> Let's say that we've been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. This article will walk you through the basic structure and styling of such an application, ready for individual component definition and interactivity, which we'll add later.
