---
title: Web Application Development Part Time Program
sidebar_label: Part Time Program Syllabus
sidebar_position: 1
---

<!-- markdownlint-disable no-duplicate-heading no-inline-html -->

This comprehensive course is broken up into 12 modules, designed to be completed over 20 weeks with a flexible, part-time approach.

Each week begins with a review of the prior week's module, and an introduction to the upcoming topic. Students will engage in daily and weekly assignments as well as weekend project work.

There will be a total of 12 projects throughout the 20 weeks. Regular check-ins occur throughout the week via Slack, providing ongoing support and guidance. Weekly review sessions are held on Thursdays, at which time the upcoming week's project will be assigned for Monday review.

The course goal is to deliver a structured, yet flexible, learning experience that accommodates diverse student schedules.

## PART TIME PROGRAM

## Weekly Schedule Outline

### Monday and Thursday: Introduction and Review

Introduction and review meetings will run 3 hours, for a total of 6 hours per week for 16 weeks (96 total hours).

### Tuesday, Wednesday, Friday: Office Hours

Regular check-ins will occur during Office Hours. Office Hours will consist of 3 hour blocks on each day (144). Times will be determined based on students' availability, and designed to provide times that meet the needs for all the students.

### Assignments/Classwork

Assignments work will take 2-4 hours per day, and weekend projects are expected to take 8-12 hours to complete.

Face-to-face time will be at least 240 hours total over the course of 16 weeks, and classwork will run between 160-320 hours total. Over the course of the program students can expect a maximum of 560 hours.

## 1. Developer Fundamentals

### The Terminal

- Unix Philosophy: "Each tool should do one thing, do it well, and work together with other tools."
- Run basic commands
- Navigate the file system
- File manipulation
- Process Management
- Shell Scripts

### File Systems

- File I/O
- Permissions
- Streams
- Storage optimization

### Version control

- Create Git repositories
- Create, merge and rebase branches
- Clone, push, pull and make pull requests to and from GitHub
- Resolve merge conflicts

### Code Organization

- Naming Conventions
- Logical grouping
- Clear hierarchy

### Code Review Principles

- Readability
- Maintainability
- Documentation needs

## 2. Problem Solving

### Algorithmic Thinking

- Breaking problems into smaller parts
- Identifying patterns
- Creating reusable solutions

### Logical Reasoning

- Conditionals (if/else)
- Cause and effect
- Edge case consideration

## 3. Universal Design Principles

### DRY (Don't Repeat Yourself)

- Applies to code, documentation, and processes
- Valid in any development context
- Don't OVERDRY

### Separation of Concerns

- Modular thinking
- Component isolation

## 4. Problem solving with code

- Create, edit, run, and debug programs in a variety of languages

### Imperative Programming

- Implement simple algorithms with variables, loops, and conditionals
- Use collections of data
  - Python: Lists and Dictionaries
  - JavaScript: Arrays and Objects

### Modularization

- Organize code into functions and modules
- Import modules from the standard library and third-party libraries

### Object-Oriented Programming

- Create classes and instantiate objects
- Reuse code via inheritance

#### Core OOP Concepts

- Abstraction
- Encapsulation
- Polymorphism
- Inheritance
- Association
- Aggregation
- Composition

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

## 5. Architecture Concepts

### Data Flow

- Input → Process → Output patterns
- State management
- Data transformation

### System Boundaries

- Interface definitions
- API design principles
- Component communication

### Testing Mentality

- Validation strategies
- Error handling patterns
- Edge case thinking

### These concepts are particularly valuable because they

- Work in any programming paradigm
- Apply across frontend, backend, or full-stack development
- Remain relevant as technology evolves
- Form the foundation for learning new technologies
- Help in understanding any codebase
- Guide architectural decisions at any scale

## 6. The Web

- How do networks transmit data across the internet?
- What does it mean when a client makes a request?
- What is a server response?
- What does it mean to render a site?
- How are requests and responses received?
- What is the Domain Name System (DNS)?

## 7. Working in the Browser

- How to use Google Chrome’s Developer Tools

### HTML

- Create tags and elements
- Write a valid HTML document
- Construct hierarchy
- Embed Images
- Create Links

### CSS

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

## 8. User Interface (UI) Foundations

- DOM Programming
- Forms and Validation

### Asynchronous Programming

- Understand JavaScript’s Event Loop
- Use callbacks to add interactivity to web pages

### JavaScript gotchas

- Avoid common pitfalls related to scoping and hoisting
- Take advantage of implicit and explicit type coercion

### ES6

- Arrow functions
- Object literals
- Spread operator
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Destructuring
- Block scoping (`cosnt` & `let` vs `var`)
- [Iterators & Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (aka "loops and functions")
- Template literals

### Beyond the DOM

- JavaScript Prototypes
- Inheritance vs Composion
- The `class` keyword in JavaScript
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

### AJAX and RESTful Web APIs

- Use `fetch()` to work with data from remote web services
- Process data asynchronously using Promises
- Array Methods
  - Use map, filter, and reduce to work with arrays of objects, DOM elements, and Promises

### Design Patterns

- MVC/MVVM: Separating concerns in application layers
- Observer Pattern: For event handling and state management
- Singleton: For shared resources
- Factory: For object creation

## 9. API Foundations

### Core Data Structures

- Arrays/Lists: For storing ordered collections
- Hash Tables/Maps: For key-value storage and quick lookups
- Trees: For hierarchical data (like DOM manipulation)
- Stacks/Queues: For managing async operations and event handling

### Key Algorithms

- Sorting: For organizing data efficiently
- Searching: Binary search, depth/breadth-first search
- Time/Space Complexity: Understanding Big O notation

### HTTP Protocol

- Request/Response cycle
- HTTP methods (GET, POST, PUT, DELETE)
- Status codes and their meanings
- Headers and their purposes

### API Design

- RESTful principles
- GraphQL basics
- WebSocket communication
- API versioning

### Security

- SSL/TLS
- CORS
- Content Security Policy
- Network security headers

## 10. Databases

### Data modeling

- Create tables that describe a problem domain
- Entity-Relationship diagrams
  - Use primary keys, foreign keys, and linking tables to model relationships between tables
- Normalization rules
- Schema design
- Indexing strategies

### Querying

- Modify the contents of database tables by inserting, updating, and deleting
- Efficiently retrieve data by selecting, filtering, grouping, and joining data from tables

### Database management

- Modify the structure of tables
- Optimize databases with indexes
- Export and import data

### Database Types

- When to use SQL vs NoSQL
- Document stores (MongoDB)
- Key-value stores (Redis)
- Graph databases

## 11. UI Frameworks

- State management in frontend frameworks
- Optimizing API response handling
- Efficient DOM traversal
- Cache implementation

### Create complex, front-end applications with a JavaScript framework

#### React

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

## 12. App Development

- Create APIs to manage data
- Create UI to consume the data
  - Create a UI that works across multiple platforms
- Handle User Authentication

## 13. Relevant Topics throughout the course

### Data Structures

- Arrays: Manipulations (e.g., two-pointer techniques, sliding windows).
- Strings: Pattern matching, anagrams, palindromes.
- Linked Lists: Reverse, merge, cycle detection.
- Stacks & Queues: Parentheses validation, monotonic stacks/queues.
- Hash Maps/Sets: Frequency counting, two-sum problems, caching.
- Trees:
  - Binary tree traversals (in-order, pre-order, post-order).
  - Lowest Common Ancestor.
  - Balancing.
- Graphs:
  - Breadth-First Search (BFS), Depth-First Search (DFS).
  - Shortest paths.
  - Connected components.
- Heaps/Priority Queues: Top-k elements, merging sorted lists.

### Algorithms

- Sorting: QuickSort, MergeSort, custom sort logic.
- Searching: Binary Search, modified binary search (e.g., in rotated arrays).
- Dynamic Programming:
  - Subset problems, knapsack, Fibonacci.
  - Longest common subsequence.
- Backtracking: Sudoku solvers, permutations, combinations.
- Greedy Algorithms: Interval scheduling, coin change.
- Divide and Conquer:
  - Maximum subarray (Kadane's algorithm).
  - Merge intervals.
- Bit Manipulation: XOR operations, bit counting.

### Math & Logic

- Prime numbers, greatest common divisors (GCD), least common multiples (LCM).
- Modular arithmetic and combinatorics.
- Geometry problems (e.g., determining points inside shapes).

### System Design (Advanced)

- Designing scalable systems or simple components (e.g., URL shorteners, key-value stores).
- API design and basic database schema design.

### Programming Paradigms

- Recursion: Factorials, tree traversals.
- Iterative Approaches: Converting recursive solutions into iterative ones.
- Object-Oriented Programming: Small design questions focusing on inheritance or polymorphism.

### Optimization

- Identifying time and space complexity.
- Reducing brute-force solutions using efficient algorithms or data structures.
