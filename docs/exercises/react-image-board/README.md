---
title: React - User Image Board
sidebar_label: React - Image Board
sidebar_position: 7.02
---

<!-- markdownlint-disable no-inline-html -->

Create an image board that saves submissions to state using React

## Objectives

### Learning Objectives

After completing this assignment, you should...

- Be able to create a boilerplate React project with Vite
- Use React state
- Pass state using props
- Hook up an event in a React component to capture user input and update state

## Requirements

- A repo containing a Vite project
- A component called `ImaageForm` to render the form
- A component called `ImageList` to render the list of items
- A component called `ImageBoard` to load the form _and_ the list

:::tip

Read this [Using Files From Web Applications](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#example_using_object_urls_to_display_images) MDN article for a plain JavaScript example.

Also, look at the [`createObjectURL()` method documentation](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static`)

:::

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
