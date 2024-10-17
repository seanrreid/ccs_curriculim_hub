---
title: Github User Query
sidebar_label: Github User Query
sidebar_position: 7.03
---

<!-- markdownlint-disable no-inline-html -->

## Objectives

For this exercise you'll query the Github Users API for profile information on a specific user.
You'll create a form that submits a username to the API and return the results on the same page.

The Github API URL is: `https://api.github.com/users/[username]`

:::info
Replace `[username]` with an actual username, no brackets!
:::

### Learning Objectives

After completing this assignment, you should...

- Be able to create a boilerplate React project with Vite
- Fetch data from an external API
- Use React state
- Pass state using props
- Hook up an event in a React component to capture user input and update state

## Requirements

- A repo containing a Vite project
- A component called `UserCardList` - Accepts an array of user data as a `prop`
- A component called `UserCard` - Accepts a single user's information as a `prop`

## Level 1

- The page loads you see the form, but no user info
- Type a username into the input and click "submit"
- A user's information populates the page
- Additional users are added to the page with subsequent searches

### `App.jsx`

- You'll need a form with a _controlled_ text input and a submit button
- The form will need a `handleSubmit` function bound to `onSubmit`
- The text input will need a `handleChange` function bound to `onChange`
- Initial state should contain an empty array, i.e. `users`, that will store the usernames being searched, i.e. `setUsers`

### `/components/UserCardList.jsx`

- This component takes the array of users (from `App`) as a prop
- You'll loop through this list (aka `map()`) passing an individual user's information into the `UserCard` component

:::tip
You'll need a `key` attribute when rendering items in a list.
<br/>You can learn about rendering lists using data from arrays here: [React.dev: Rendering Lists](https://react.dev/learn/rendering-lists)
:::

### `/components/UserCard.jsx`

- This component takes a user objects as a prop (from `UserCardList`)
- Render whatever data you'd like from a user's profile.

:::info
Not all users have all their information filled out!
<br/>A good starting place would be a user's `avatar_url`, since almost every user has some sort of avatar image.
:::

## Level 9000

Ever thought about adding some more action to your sites? If so, check out [React Spring](https://www.react-spring.dev/)

Take a look at some of their [demos](https://www.react-spring.dev/examples) for inspiration, and try to include some animations on your page.