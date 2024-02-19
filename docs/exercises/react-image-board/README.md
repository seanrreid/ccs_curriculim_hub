---
title: React - User Image Board
sidebar_label: React - Image Board
sidebar_position: 25
---

<!-- markdownlint-disable no-inline-html -->

Create an image board that saves submissions to state using React

## Objectives

### Learning Objectives

After completing this assignment, you should...

- Be able to create a boilerplate React project with Vite
- Be able to use React components as a View layer

### Performance Objectives

After completing this assignment, you should be able to effectively use...

- A basic React Component
- React state
- Pass state using props
- Hook up an event in a React component to capture user input and update state

## Deliverables

- A repo containing a Vite project:
- A minimum of three React components in your App.js:

```jsx
function ImageForm() {
    return <form>...</form>;
}

function ImageList() {
    return <ul>...</ul>;
}

function ImageBoard() {
    return (
        <div>
            <ImageForm />
            <ImageList />
        </div>
    );
}
```

## Level 1

Using the tools you've learned in class, create a responsive image board that allows you to add images and captions via a url. The images that are added to the image board should be saved using React state.

Below are screenshots of what your app could look like. But feel free to use some creative freedom.

### Mobile

![Mobile](./images/mobile.png)

### Desktop

![Desktop](./images/desktop.png)

## Add Image Form

![Add image form](./images/add.png)

## Level 9000

The form to add an image should properly validate the image URL by at a minimum checking for a `http://` or `https://` prefix and require a non-empty description.
