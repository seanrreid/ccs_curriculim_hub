---
title: Full Stack Web Development Immersive Program
sidebar_label: Immersive Program Syllabus
sidebar_position: 1
---

<!-- markdownlint-disable no-duplicate-heading no-inline-html -->

## Weekly Schedule Outline

This is loosely structured to line up for 9 weeks of lecture, followed by 3 weeks for the Capstone Project.

There are 9 sections. However, it's important to note that each section doesn't necessarily correspond to a week. Some content will be shorter than one week, others will be longer.

---

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
- Git
- GitHub
- Python 3

### Lessons

- [Setting up your Dev Environment](/docs/lessons/dev-fundamentals/setup/)
- [CLI 101](/docs/lessons/dev-fundamentals/cli-101/)
- [Git 101](/docs/lessons/dev-fundamentals/git-101/)
- [Installing Python3](/docs/lessons/dev-fundamentals/setup-python/)
- [Using Thonny to step through Python](https://youtu.be/QQAqQp06nXo?si=5H-MCxL0qlzRiPeN)

## 2. Solving Problems Using Code

### Learning Objectives

- Create, edit, run, and debug programs
- Imperative Programming
  - Implement simple algorithms with variables, loops, and conditionals
  - Use collections of data
    - Python: Lists and Dictionaries
    - JavaScript: Arrays and Objects
- Modular Programming
  - Organize code into functions and modules
  - Import modules from the standard library and third-party libraries
- Object-Oriented Programming
  - Create classes and instantiate objects
  - Reuse code via inheritance

### 2a. Solving Problems Using Python

#### Technologies

- Python 3

#### Lessons

- [Intro to Python](/docs/lessons/solving-problems-using-code-python/intro-to-python/)
- [Sequences](/docs/lessons/solving-problems-using-code-python/python-sequences/)
- [Functions](/docs/lessons/solving-problems-using-code-python/python-functions/)
- [Mapping](/docs/lessons/solving-problems-using-code-python/python-mapping/)
- [Object-Oriented Programming](/docs/lessons/solving-problems-using-code-python/python-oop/)

### 2b. Solving Problems Using JavaScript

#### Technologies

- JavaScript

#### Lessons

- [Intro to JavaScript](/docs/lessons/solving-problems-using-code-js/javascript-intro/)
- [JavaScript Objects](/docs/lessons/solving-problems-using-code-js/javascript-objects/)
- [JavaScript Variables & Functions](/docs/lessons/solving-problems-using-code-js/variables-functions/)
- [Common JavaScript Patterns](/docs/lessons/solving-problems-using-code-js/common-patterns/)
- [Callbacks and Anonymous Functins](/docs/lessons/solving-problems-using-code-js/callbacks)

### Programming Patterns

You'll notice there are some similarities between JavaScript and Python.
Here are some examples things you've likely already encountered.

1. Lists in Python and Arrays in JavaScript
    - Both store ordered collections of elements.
    - Python: `my_list = [1, 2, 3, "hello"]`
    - JavaScript: `const myArray = [1, 2, 3, "hello"]`
    - Both use zero-based indexing: `my_list[0]` or `myArray[0]`
    - Both allow direct assignment to indices: `my_list[1] = 5` or `myArray[1] = 5`
2. Dictionaries in Python and Objects in JavaScript
    - Both store unordered collections of key-value pairs.
    - Python: `my_dicionary = {"name": "Alice", "age": 30}`
    - JavaScript: `const myObject = {name: "Alice", age: 30}`
    - Both use keys: `my_dictionary["name"]` or `myObject.name`
    - Both allow direct assignment to keys: `my_dictionay["age"] = 35` or `myObject.age = 35`
3. Functions
    - Both have a keyword to define a function <sup>1</sup>.
        - Python: `def`
        - JavaScript: `function`
    - Both have a name, parameters (optional), and a body of code.
        - Python
            - `def function_name(parameters): ...`
            - The body code block is defined by indentation.
        - JavaScrip
            - `function myFunction(parameters) { ... }`
            - The body is code block is wrapped in curly braces `{}`.
    - Functions always return values, even without an explicit `return` statement
        - Python will return `None`
        - JavaScript will return `undefined`
    - Functions create their own scope for variables and can access variables from outer scopes.
        - JavaScript has function-level scope for variables declared with `var`, and block-level scope for `let` and `const`.
        - Python has a more unified block-level scope using indentation.
    - Functions are called by their name and passing arguments (if any).

<sup>1</sup> There is alternate syntax in JavaScript that doesn't explicitly use the `function` keyword, but we'll get to that later.

## 3. The Web

### Learning Objects

- What does it mean when a client makes a request?
- What is a server response?
- What does it mean to render a site?
- How are requests and responses received?
- What is the Domain Name System (DNS)?

### Technologies

- Google Chrome

### Lessons

- [How do websites work?](/docs/lessons/the-web/)

## 4. Front-End Foundations

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

- [HTML 101](/docs/lessons/front-end-foundations/html-101/)
- [HTML Forms](/docs/lessons/front-end-foundations/html-forms/)
- [CSS 101](/docs/lessons/front-end-foundations/css-101/)
- [Media Queries](/docs/lessons/front-end-foundations/media-queries/)
- [Chrome DevTools](/docs/lessons/front-end-foundations/chrome-devtools/)

## 5. Handling User Input

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

- [The Document Object Model](/docs/lessons/handling-user-input/dom/)
- [Handling Browser Events](/docs/lessons/handling-user-input/handling-browser-events/)
- JavaScript Event Loop   <!-- @TODO -->

## 6. Building Interactive UIs

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

- [AJAX 101](/docs/lessons/building-interactive-uis/ajax-101/)
- [Intro to Promises](/docs/lessons/building-interactive-uis/intro-to-promises/)

## 7. Backend Foundations

### Learning Objectives

<!-- @TODO -->

### Technologies

- FastAPI
- Django
- Express JS

### Lessons

<!-- @TODO -->

## 8. Databases

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

- PostgreSQL
- [SQLModel](https://sqlmodel.tiangolo.com/)
- [Alembic](https://alembic.sqlalchemy.org/)
- [Supabase](https://supabase.com/docs)

### Lessons

- [SQL Databases](/docs/lessons/databases/sql/)

## 9. UI Frameworks

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
- React Router v6.x
- Full stack metaframeworks
  - Remix JS
  - Next JS

### Lessons

- [Intro to React](/docs/lessons/ui-frameworks/react/intro-to-react/)
- [Installing and Using the React Dev Tools](/docs/lessons/ui-frameworks/react/react-devtools/)
- [Handling Events](/docs/lessons/ui-frameworks/react/handling-events/)
- [Forms with React](/docs/lessons/ui-frameworks/react/forms-with-react/)
- [Ajax with React](/docs/lessons/ui-frameworks/react/ajax-with-react/)
- [Function Components](/docs/lessons/ui-frameworks/react/function-components/)
- [Component Lifecycle and Hooks](/docs/lessons/ui-frameworks/react/react-hooks/)
<!-- @TODO [Intro to React Router] -->

## 10. Full Stack

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
