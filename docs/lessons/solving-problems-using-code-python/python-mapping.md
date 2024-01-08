---
title: Dictionaries and File I/O
description: Dictionaries and File I/O
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

### How do I save to a file?

Imagine that you're using a word processor program to update your resume.

You probably opened the file, typed a few words, formatted the headings and bulleted lists, and then saved the file.

When working with files in Python, the workflow is similar.

Python includes built-in functions to `open()` a file so that you can read from it or write to it.

Here is an example of reading from a file:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/read_file_0.py{2,3}

Line 2 shows an example of how to `open()` a file. You pass it two arguments:

- The name of the file, as a string
- A "mode" that specifies if you intend to read or write to the file

The `with-as` syntax lets us create a variable (which we've named `file_handle`) that we can use to access what's inside the file.

Line 3 demonstrates how to `read()` the plain text contents from our file. When we `print()` the contents, we see the following:

```
1. Sand the floor
2. Wax on, wax off
3. Paint the fence
4. Paint the house
```

But working with anything other than plain text requires some extra steps, namely converting it to a format that can be written to a file.

To format your Python variables so that they can be saved to a file requires a helper _module_. Python comes with a lot of modules, but they are not all loaded by default. (If they were, using Python make your computer run very slowly.)

:::tip
Formatting or encoding data for saving to a file or transmitting over a network is also known as **serialization**.

The act of decoding data that has been saved to a file or transmitted over a network is known as **deserialization**.
:::

#### What is `pickle`?

The `pickle` module can encode your Python variables so that they can be stored to a file. `pickle` can also decode the data and convert it back into Python values.

To use the `pickle` module, you must include this at the top of your program:

```py
import pickle
```

This creates a new variable `pickle` that has access to functions for serializing and deserializing data. Those functions are:

- `pickle.dump()` serializes
- `pickle.load()` deserializes

#### How do I use `pickle.dump()`?

The following is an example of using `pickle.dump()` to encode a list of dictionaries. You pass `pickle.dump()` two arguments:

- The data to serialize
- A file handle to write to

// @TODO - embed this/lessons/solving-problems-using-code/mapping/pickle_0.py{25,26}

On line 25, we `open()` the file using the mode `"wb"`, which lets us *w*rite *b*inary information to the file.

Line 26 shows the call to `pickle.dump()`. Because we wrote it in binary, the file itself isn't completely human-readable. Here are the contents of our `to-do-list.pickle` file:

#### `pickle.load()`

In order to retrieve the data, we will use another `pickle` function.

`pickle.load()` only expects a single argument: the file handle where it can find the pickled data.

// @TODO - embed this/lessons/solving-problems-using-code/mapping/pickle_1.py{6,7}

On line 6, we use the mode `"rb"` because we want to *r*ead *b*inary.

Line 7 puts the call to `pickle.load()` on the RHS. The `todos` variable is now a list of dictionaries, just as in the previous example.

### What is JSON?

JSON stands for JavaScript Object Notation. Though technically the syntax comes from the JavaScript programming language, the format has been adopted as the standard for exchanging plain text data on the internet.

For serializing and deserializing plain text data, the `json` module is an alternative to `pickle`.

The `json` module can be used in the same way as the `pickle` module. The main difference is that you do _not_ open the file in *b*inary.

#### `json.dump()` and `json.load()`

// @TODO - embed this/lessons/solving-problems-using-code/mapping/json_0.py{17-23}

Here are the contents of the file we wrote:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/ww.json

And this is the result of doing a `json.load()` and `print()`:

```
{'name': 'Wonder Woman', 'alias': 'Diana Prince', 'gear': ['Lasso of Truth', 'Bracelets of Submission'], 'vehicle': {'title': 'Invisible Jet', 'speed': '2000 mph'}}
```

### Summary

In this lesson, you learned how to create and manipulate dictionaries, Python's mapping data type. Using key/value pairs, you can now create custom records for organizing your data.

In addition, you learned techniques for serializing and deserializing binary and plain text data to files, using the `pickle` and `json` modules.

## Additional Resources

- [Understanding Dictionaries in Python 3](https://www.digitalocean.com/community/tutorials/understanding-dictionaries-in-python-3)
- [Dictionaries in Python](https://realpython.com/courses/dictionaries-python/)
- [Using Pickle](https://wiki.python.org/moin/UsingPickle)
- [Official Python Documentation on the `pickle` module](https://docs.python.org/3/library/pickle.html)
- [Working with JSON Data in Python](https://realpython.com/python-json/)
