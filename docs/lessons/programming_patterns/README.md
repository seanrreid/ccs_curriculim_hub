---
sidebar_position: 2
sidebar_label: Programming Patterns
title: Programming Patterns
---

<!-- markdownlint-disable no-inline-html -->

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