---
title: CCS Winter 2024 Proposed Syllabus
description: CCS Winter 2024 Proposed Syllabus
pubDate: 2023-12-19T11:22:42-05:00
---

<!-- markdownlint-disable no-duplicate-heading -->

This is loosely structured to line up for 9 weeks of lecture, followed by 3 weeks for the Capstone Project.
There are 9 sections. However, it's important to note that each section doesn't necessarily correspond to a week. Some content will be shorter than one week, others will be longer.

## 1. Developer Fundamentals

### Learning Objectives

- Command line
  - Run basic commands
  - Navigate the file system
- Version control
  - Create Git repositories
  - Create, merge and rebase branches
  - Clone, push, pull and make pull requests to and from GitHub
  - Resolve merge conflicts

### Technologies

- Unix Terminal
- Shell Commands (Bash or ZSH)
  - [Dungeons and Directories](https://wheybags.com/dungeons_and_directories/)
- Git
- GitHub
- Python 3
  - [Python Sandbox](https://pythonsandbox.dev/)
  - [Thonny](https://thonny.org/)

### Lessons

- [Setting up your Dev Environment](/lessons/dev-fundamentals/setup/)
- [Installing Python3](/lessons/dev-fundamentals/setup-python/)
- Installed Thonny @TODO
  - [Using Thonny to step through Python](https://youtu.be/QQAqQp06nXo?si=5H-MCxL0qlzRiPeN)
- [CLI 101](/lessons/dev-fundamentals/cli-101/)
- [Git 101](/lessons/dev-fundamentals/git-101/)

## 2. Solving Problems Using Code

@TODO - Start with Python, then dip into JS _before_ going into DOM.

### Learning Objectives

- Create, edit, run, and debug command line programs
- Imperative Programming
  - Implement simple algorithms with variables, loops, and conditionals
  - Use lists and dictionaries
- Modular Programming
  - Organize code into functions and modules
  - Import modules from the standard 👻️ library and third-party libraries
- Object-Oriented Programming
  - Create classes and instantiate objects
  - Reuse code via inheritance

### Technologies

- Python 3

### Lessons

- [Python 101](/lessons/solving-problems-using-code-python/intro-to-python/)
- [Python 102](/lessons/solving-problems-using-code-python/sequences/)
- [Functions](/lessons/solving-problems-using-code-python/functions/)
- [Mapping](/lessons/solving-problems-using-code-python/mapping/)
- [Object-Oriented Programming](/lessons/solving-problems-using-code-python/oop/)

## 3. Front-End Foundations

### Learning Objectives

- How to use Google Chrome’s Developer Tools
- HTML
  - Create tags and elements
  - Write a valid HTML document
  - Construct hierarchy
  - Embed Images
  - Create Links
- Understand how to read and write CSS
  - Style HTML elements with selectors
  - CSS specificity and how to use it
  - Color
  - Fonts
  - Box model
  - Positioning
  - Viewports and media queries
  - Introduction to CSS naming conventions
- Creating web layout with flexbox
- Basics of web accessibility

### Technologies

- HTML
- CSS
- Google Chrome Developer Tools
- Flexbox and Grid Layout

### Lessons

- [HTML 101](/lessons/front-end-foundations/html-101/)
- [HTML Forms](/lessons/front-end-foundations/html-forms/)
- [CSS 101](/lessons/front-end-foundations/css-101/)
- [CSS Floats](/lessons/front-end-foundations/css-floats/)
- [Media Queries](/lessons/front-end-foundations/media-queries/)
- [CSS Position](/lessons/front-end-foundations/css-position/)
- [Flexbox](/lessons/front-end-foundations/flexbox/)
- [Grid Layout](/lessons/front-end-foundations/grid-layout/)
- [Chrome DevTools](/lessons/front-end-foundations/chrome-devtools/)

## 4. Handling User Input

### Learning Objectives

- DOM Programming
- Forms and Validation
- JavaScript gotchas
  - Avoid common pitfalls related to scoping and hoisting
  - Take advantage of implicit and explicit type coercion
- Asynchronous Programming
  - Understand JavaScript’s Event Loop
  - Use callbacks to add interactivity to web pages
- ES6
  - Arrow functions
  - Object literals
  - Spread operator
  - [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
  - Destructuring
  - Block scoping (`cosnt` & `let` vs `var`)
  - [Iterators & Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (aka "loops and functions")
  - Template literals
- Beyond the DOM
  - JavaScript Prototypes
  - Inheritance vs Composion
  - The `class` keyword in JavaScript
  - [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

### Technologies

- DOM
- JavaScript
- Web Components

### Lessons

- [JavaScript 101](/lessons/handling-user-input/javascript-101/)
- [DOM 101](/lessons/handling-user-input/dom-101/)
- [Handling Browser Events](/lessons/handling-user-input/handling-browser-events/)

## 5. Building Interactive UIs

### Learning Objectives

- AJAX and RESTful Web APIs
  - Use `fetch()` to work with data from remote web services
  - Process data asynchronously using Promises
- Array Methods
  - Use map, filter, and reduce to work with arrays of objects, DOM elements, and Promises

### Technologies

- Promises
- `fetch()`
- Array Methods
- RESTful Web APIs

### Lessons

- [AJAX 101](/lessons/building-interactive-uis/ajax-101/)
- [Intro to Promises](/lessons/building-interactive-uis/intro-to-promises/)

## 6. Backend Foundations

### Learning Objectives

- FastAPI @TODO

### Technologies

- FastAPI

### Lessons

@TODO

## 7. Databases

### Presentations

- [Intro to Backend: SQL](https://docs.google.com/presentation/d/1YmJdFVibKDHaV7-l_bkn32ib42lBuiPBvtEerOad4Tg/edit?usp=sharing)
- [Intro PSQL](https://docs.google.com/presentation/d/1dXS8LL3yzo-QPqwdicnlmNfJYicOjFkYS9pBwKW2uoQ/edit?usp=sharing)

### Learning Objectives

- Data modeling
  - Create tables that describe a problem domain
  - Apply database normalization when creating tables
  - Use primary keys, foreign keys, and linking tables to model relationships between tables
- Querying
  - Modify the contents of database tables by inserting, updating, and deleting
  - Efficiently retrieve data by selecting, filtering, grouping, and joining data from tables
- Database management
  - Modify the structure of tables
  - Optimize databases with indexes
  - Export and import data

### Technologies

- PostgreSQL 11
- [SQLAlchemy](https://www.sqlalchemy.org/)

### Lessons

- [Data Modeling](/lessons/databases/data-modeling/)

## 8. React

### Learning Objectives

- Create complex, front-end applications, with a JavaScript framework
- React
  - Using Vite to scaffold a React application
  - JSX
  - React Dev Tools
  - Elements
  - Components and Props
  - State and Lifecycle
  - Events
  - React Design Patterns
  - Lists and Keys
  - Forms
  - React Router
  - Hooks

### Technologies

- React 18
- React Router 6
- Remix/Next(?)

### Lessons

- [Intro to React](/lessons/full-stack-frameworks/intro-to-react/)
- Comparison to Web Components
- [Installing and Using the React Dev Tools](/lessons/full-stack-frameworks/react-devtools/)
- [Handling Events](/lessons/full-stack-frameworks/handling-events/)
- [Forms with React](/lessons/full-stack-frameworks/forms-with-react/)
- [Ajax with React](/lessons/full-stack-frameworks/ajax-with-react/)
- [Function Components](/lessons/full-stack-frameworks/function-components/)
- [Component Lifecycle and Hooks](/lessons/full-stack-frameworks/react-hooks/)
- [Intro to React Router](/lessons/full-stack-frameworks/react-router/)

## 9. Full Stack

### Put it all together

Welcome to CRUDCo, Inc! Let's build rad stuff!

CRUDCo Inc has been hired to write a URL shortening service for a client.

#### Requirments

- Users can submit a long URL.
- URLs are saved in a database.
- Unique IDs are generated for each URL.
- The short url is available via a list when a user logs in.

#### To discuss

- What relationships do we need to create (aka "What is our schema?")?
- What is our Minimum Viable Product (MVP)?
- What are all the parts we'll need to build out the MVP?
