---
sidebar_position: 3
sidebar_label: Patterns
title: A review of common patterns
---

The following items apply almost univerally across most (if not all) programming languages you'll encounter.

---

## Universals

1. **Imperative programming** is writing code that tells the computer _how_ to do something. (i.e. JavaScript and Python are mostly imperative)
    - "Hey, Computer, if a user gives you value [x] then perform action [y]."
2. **Declarative programming** is writing code that tells the computer _what_ you want, and the computer decides the "how." (i.e. HTML, CSS, SQL)
    - "Hey, Browser, here's a bunch of markup to be rendered."
3. **Variables** are basically placeholders for data.
4. **Functions** are like "programs within a program." Think of them like a recipe, or list of steps. Their superpower is the ability to break up a large program into smaller, re-usable, chunks.
    - “Create one object that can spawn many”

## Types

### Primitive Data Types

- Strings - any kind of characters in quotes
  - `"This is 1 single string, it's in quotes."`
- Integer - numbers, no quotes
  - `1`
- Boolean
  - `True` or `False`

### Reference Data Types

- Lists - Collections of stuff
  - `['Fred', 'Barney', 42]`
- Dictionaries - Unordered collections of `key:value` pairs
  - `{first_name: 'Fred', last_name: 'Flintstone', age: 2000}`
- Objects - Complex structures, often built with classes and containing their own attributes and methods
  - `person = Person()` creates an object `person` that is an instance of the `Person` class

## Loops

- A `for` loop will loop over each item in a collection of items.
- A `while` loop will loop over items until a condition is no longer `True`

## Functions

A function will have **four** key parts:

1. The function keyword
2. A unique name (make it descriptive!)
3. Parentheses, `()`, follow the name and can accept parameters (if needed!)
4. The function body, which will `return` a value

## Object Oriented Programming (OOP)

- A class will act like a blueprint/template/factory.
- A class will contain attributes and applicable methods.
- Classes have a _"constructor"_ method that defines how new objects are create.
- Objects created using a class are called **instances**
- Objects will inherit attributes and methods from their class.
- Classes can inherit properties from "parent" or "super" classes.

In general, a `class` will have the following key parts:

1. The `class` keyword
2. A unique, _Capitalized_ name (make it descriptive!)
3. A constructor function
4. Attributes: What can _instances_ of the class **HAVE**?
5. Methods: What can _instances_ of the class **DO**?
