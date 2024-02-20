---
title: React - Let's Go Shopping
sidebar_label: React - Shopping List
sidebar_position: 26
---

<!-- markdownlint-disable no-inline-html -->

:::info
You've done this before in HTML/CSS/JS, now it's time to try it in React!
:::

## Must Haves

- Create a new folder named the following
  - `react-shopping-list`
- Initialize a git repository in that folder

## Learning Objectives

After completing this assignment, you should…

- Know how to create React components
- Use event listeners in React

## Requirements

- A repo containing a Vite project
- A component called `ShoppingForm` to render the form
- A component called `ShoppingList` to render the list of items

## Steps

- `App.jsx`
  - Loads both components
  - Stores `shoppingListItems` in state
  - Initial state is an empty array: `[]`
  - Has a function called `generateList` to pass an array to the `ShoppingList` component
  - `generateList` will update the `shoppingListItems` array in the state
- `ShoppingForm`
  - Take a function called `generateList` as a prop
  - Stores an array of items from the inputs
  - Inputs are bound to the items in the array based on the item's index
  - Start with a _single_ input and then add more once that works
  - Clicking the button triggers the function that is passed down via `props`
  - This function will send the updated array of items to the `App.jsx` component and updates the state accordingly
- `ShoppingList`
  - Takes a prop called `items`
  - If there are 1 or more items in the `items` array, render a `<ul>` with each item in an `<li>`

### User Interface

- User fills out the form
- User clicks the "Make My List" button
- Items from the form populate the list

### Hints

- You'll want to use controlled inputs!
- Start with a _single_ input, then work on adding more
- You'll want to `useState` to keep track of what the user adds to their list.
- You're updating an array, so think of using indexes to add/update the array.
- You'll want to `map()` through the user's list of groceries and generate a list.
