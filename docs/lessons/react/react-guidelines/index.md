---
sidebar: auto
sidebar_position: 1
sidebar_label: React Guidelines
---

# Basic Guidelines for Creating a New React App

**Last Updated:** June 2025

The following guidelines provide a good rule of thumb when starting _any_ React project.

For the below example we'll create an app called "React Shopping List."
The steps will provide guidance for:

- Starting with a fresh React install
- Cleaning out defaults
- Guidelines for creating new components

## Setting Up the Project

- Open your terminal and navigate to your desired repository directory.
- Run the following command to create a new React app using Vite:

  ```bash
  npm create vite@latest
  ```

- Enter a project name (e.g., `react-shopping-list`).
- Select **React** as the framework and **JavaScript** as the variant.
- Change into the new project directory:

  ```bash
  cd react-shopping-list
  ```

- Install dependencies:

  ```bash
  npm install
  ```

- Open the project in your code editor (e.g., VSCode).

## Running the Development Server

- Start the development server:

  ```bash
  npm run dev
  ```

- The app will typically be available at `http://localhost:5173`.
- Vite provides hot module reloading, so changes in your code are reflected automatically in the browser.

## Cleaning Up the Default Files

- In `src/App.jsx`, delete most of the default content.
- Delete `src/App.css` and the contents (or the entire folder) of `src/assets`.
- With `src/index.css` you can remove either the entire file, or remove the contents and replace with your own global styles.
- **Do not modify** `src/main.jsx`—this is the entry point for your React app.

## Creating New Components

- Create a `components` folder inside `src`.
- Add new component files using PascalCase (e.g., `ShoppingList.jsx`).

:::info
Be sure to use `PascalCase` when naming your components _and_ definining your component functions!!
:::

- Define functional components:

  ```jsx
  function ShoppingList() {
    return <div>Shopping List</div>;
  }
  export default ShoppingList;
  ```

  or, using Lambda Syntax

  ```jsx
  const ShoppingList = () => {
    return <div>Shopping List</div>;
  };
  export default ShoppingList;
  ```

  :::warning
  Don't forget to export your new component!
  :::

- Import components into `App.jsx`:

  ```jsx
  import ShoppingList from "./components/ShoppingList";
  ```

- Use the component in JSX:

  ```jsx
  <ShoppingList />
  ```

## Passing Data and Props

- Pass data from parent to child components using props:

  ```jsx
  <ShoppingList list={shoppingList} />
  ```

- Access props in the child component via function parameters:

  ```jsx
  function ShoppingList({ list }) {
    // use list here
  }
  ```

## Rendering Lists of Items

- You can loop through collections of items just like you would in regular JavaScript.
- For example, if you have an array of data, you can use `.map()` to render each item.

:::info
Whenever you use `map()` in JSX you _must_ provide a unique `key` prop for each individual item.
:::

  ```jsx
  {array.map((item, index) => {
    return (
      <li key={index}>{item}</li>
      )
    }
  }
  ```

:::warning
When creating a `key` property, you want to use a _unique_ value. The previous example uses `index`, but in general you want to steer clear of using that value.
The `index` is too generic, and you'll likely find yourself with errors for duplicate `key` values.
:::

## Best Practices

- Build small, simple components that do one thing well.
- Use fragments (`<>...</>`) to group multiple elements without adding extra DOM nodes.
- Keep components pure and minimize side effects.
- Use React DevTools for debugging and inspecting component state and props.
