---
title: Dynamically Create a Shopping List
sidebar_label: DOM Shopping List
sidebar_position: 3
---

- Fork and clone this repo: [DOM Shopping List Starter](https://github.com/seanrreid/DOM-shopping-list)
- Using the existing form, your goal is to generate a shopping list.
- Dynamically generate the list by appending `li` elements to the `#myList` element

## Steps to create the list

- User fills out the form
- User clicks the "Make My List" button
- Items from the form populate the list

### Hints

- This would be a good use case for using `querySelector` and `querySelectorAll`
- Think about using a `forEach()` loop on the `input` elements
- You'll want to add an event listener for the button element
- Think about using a function to generate the list (perhaps the button click could call this function?? 🤔🤔🤔)
