---
title: Dictionaries
description: Dictionaries
pubDate: 2023-12-15T13:49:22-05:00
---

## Learning Objectives

After completing this lesson, you will be able to:

1. Store and manipulate data in the form of key/value pairs
2. Save and load binary data from files.
3. Convert dictionaries to/from JSON

## Lesson

### Overview

A dictionary is a book of words and their definitions.

Python provides the same idea, but as a data type.

Consider your address book - it has the contact information of your friends, family, and other important people.

Here's an example of an entry you might see in an address book:

|   Key    |    Value    |
| :------: | :---------: |
|   Name   | Alan Turing |
|   Cell   |   6017576   |
| Birthday |   June 23   |

This is how you would express this as a Python dictionary:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/example-0.py

Each **value**, like `"June 23"`, is associated with a specific **key** (`Birthday`).

In other words, a dictionary is a way to group together labeled information.

### What is a dictionary?

Python's Dictionary type lets you create a **mapping** from _keys_ to **values**. They are useful for representing information as records.

#### How do I create a dictionary?

Looking more closely at our first example:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/example-0.py

A dictionary consists of pairs of keys and values inside of curly braces.

Keys and their values are separated by a `:`.

Key-value pairs are separated by a `,`.

An empty dictionary can be created like so:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/empty-dict.py

#### What can I use as keys?

You can use any of Python's primitive data types, such as Strings, numbers, and tuples.

You cannot use list or dictionaries as keys.

:::tip
You can use any immutable value as a key in a Python dictionary.
:::

#### What can I use as a value?

Dictionary values can be any valid Python type, including lists and dictionaries.

// @TODO - embed this/lessons/solving-problems-using-code/mapping/values_0.py

#### How do I retrieve data?

// @TODO - embed this/lessons/solving-problems-using-code/mapping/values_1.py

There are three ways to retrieve data from a dictionary:

- `[<key name>]` retrieves the value for a key using the **index** syntax (similar to lists)
- `.get(<key name>)` if it exists, retrieves the value for a key, or returns `None`
- `.values()` returns all values of a dictionary

The `.get()` method takes an optional second argument. If the key does not exist in the dictionary, the second argument is returned (instead of `None`).

// @TODO - embed this/lessons/solving-problems-using-code/mapping/values_2.py

#### How do I check if a key exists?

The `in` operator to see if a key exists in a dictionary:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/membership_0.py

You can also use `not in`:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/membership_1.py

#### How do I update a value?

Use the index syntax on the LHS to update a value. This can also be used to add a key/value pair to a dictionary.

// @TODO - embed this/lessons/solving-problems-using-code/mapping/update_0.py

#### How do I iterate over a dictionary?

Use the dictionary's `.items()` method. It returns a sequence of the key/value pairs:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/iteration_0.py

Note that instead of providing a single looping variable, we provide two since we are iterating over pairs of values.

```
Superhero's name is Wonder Woman
Superhero's alias is Diana Prince
Superhero's gear is ['Lasso of Truth', 'Bracelets of Submission']
Superhero's vehicle is {'title': 'Invisible Jet', 'speed': '2000 mph'}
```

#### Are the key/value pairs always in the same order?

There is no guarantee that the key/value pairs will be in same order, regardless of how you created the dictionary (or in what order you add/update keys).

Python optimizes the data behind the scenes, which can cause the key/value pairs to appear in a different order than you might expect.

#### How do I remove a key?

Use the `del` keyword to remove a key/value pair from a dictionary.

// @TODO - embed this/lessons/solving-problems-using-code/mapping/del_0.py

### How do I access data in nested dictionaries?

// @TODO - embed this/lessons/solving-problems-using-code/mapping/nested_0.py

By indexing and assigning to variables, you can get to the data in a nested dictionary:

```
Invisible Jet
```

Alternatively, you can omit the intermediary `vehicle` variable and just stack additional `[]` to index further and further into the dictionaries:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/nested_1.py

### How do I access data in a list in a dictionary?

To access a specific list item inside a dictionary, first use the key name for the list. Then use the numerical index for the item in the list.

// @TODO - embed this/lessons/solving-problems-using-code/mapping/nested_2.py

You can also iterate over a list inside of a dictionary:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/nested_3.py

### Summary

In this lesson, you learned how to create and manipulate dictionaries, Python's mapping data type. Using key/value pairs, you can now create custom records for organizing your data.

## Additional Resources

- [Understanding Dictionaries in Python 3](https://www.digitalocean.com/community/tutorials/understanding-dictionaries-in-python-3)
- [Dictionaries in Python](https://realpython.com/courses/dictionaries-python/)
