---
title: React - OMDB Movie Review App
sidebar_label: React - Movie Review
sidebar_position: 7.03
---

<!-- markdownlint-disable no-inline-html -->

:::info
You've done this before in HTML/CSS/JS, now it's time to try it in React!
:::

Use the [OMDB API](https://www.omdbapi.com/) find and review movies!

## Goals

- Accept user input via a form that recieves a movie title.
- Search for that movie via the OMDB API: `http://www.omdbapi.com/?t=[some movie title]&apikey=[your api key]`
- Return that movies's information.
  - Movie poster
  - Movie title
  - Release year
  - Plot description
  - Ratings
- Allow a user to list multiple movies

### UI

- Render the movie information using "card" layout
  <br/>[Look here for an example](https://uxplanet.org/using-card-based-design-to-enhance-ux-51f965ab70cb)
- Append new movie cards with each search.

## Level 1

- Load the lookup form in its own component
- Clear the form's state after each search
- Pass the movie information into its own component via `props`
- Load the movie information component inside the form component
- Load the form component in `App.jsx`

## Level 2

- Create a second form to submit your _own_ review for each movie
- Have your review display _below_ the ratings returned from OMDB

:::tip

- You probably want to have the form appear in each movie's card component
- You'll save your reviews in the `state` for each card

:::

## Level 9000

- Try to use React's Context API to globally store the movie and review information
- Can you have a single form to submit any review, but make sure that the review shows up with the correct movie? 🤔
