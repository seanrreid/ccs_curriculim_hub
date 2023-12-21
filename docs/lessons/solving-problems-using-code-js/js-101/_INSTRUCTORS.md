---
title: Goals
description: Goals
pubDate: 2023-12-15T13:49:22-05:00
---

    # Goals

- Does the student understand how to create and access items in Arrays and Objects?
- Can they use if/else statements to choose what code to run?
- Can they write a loop?
  - Do they know the body of the loop runs?
  - Do they know what code runs after the loop is finished?

# Why?

## Why not iteration syntax?

Some students may have seen the iteration syntax (`.forEach()`, `.map()`, `for-of`, etc.).

The thing to communicate is that while these do work (and some languages have similar constructs), the goal is not necessarily to get the correct answer.

At this point in the class, we want to confirm that they can think in terms of Array index and the values at those locations.

## Why store things in an Object?

Similarly, Objects correspond to maps and dictionaries in other languages. Moreover, they are similar to rows in a database.

## Why can't you compare Arrays or Objects?

The language itself doesn't do "deep" comparison - that would be inefficient, espcially since the size of collections they would be working with
professionally are quite large (with lengths in the 10s or 100s of thousands).

Instead, the designers of the language decided that it would be useful to know if two variables point to the same Object (or Array) - this is most likely to avoid trying to store an array "in itself".
