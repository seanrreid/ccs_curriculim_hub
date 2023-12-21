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

## Training Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson above.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section above. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

### Small

#### 1. Phonebook dictionary

Given the following dictionary, representing a mapping from names to phone numbers:

```py
phonebook_dict = {
  'Alice': '703-493-1834',
  'Bob': '857-384-1234',
  'Elizabeth': '484-584-2923'
}
```

Write code to do the following:

- Print Elizabeth's phone number.
- Add an entry to the dictionary: Kareem's number is 938-489-1234.
- Delete Alice's phone entry.
- Change Bob's phone number to '968-345-2345'.
- Print all the phone entries.

#### 2. Nested dictionaries

Given the following dictionary:

```py
ramit = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ]
}
```

- Write a python expression that gets the email address of Ramit.
- Write a python expression that gets the first of Ramit's interests.
- Write a python expression that gets the email address of Jasmine.
- Write a python expression that gets the second of Jan's two interests.

#### 3. Friend counter

Using the dictionary from the [Nested dictionaries exercise](#nested-dictionaries) above, write a function `countFriends()` that accepts a dictionary as an argument and returns a new dictionary that includes a new key `friends_count`:

// @TODO - embed this/lessons/solving-problems-using-code/mapping/exercise_friend_counter_0.py{17}

### Medium

#### 1. Letter Summary

Write a `letter_histogram` program that asks the user for input, and prints a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:

```bash
$ python3 letter_histogram.py
Please enter a word: banana
{'a': 3, 'b': 1, 'n': 2}
```

#### 2. Word Summary

Write a `word_histogram` program that asks the user for a sentence as its input, and prints a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

```bash
$ python3 word_histogram.py
Please enter a sentence: To be or not to be
{'to': 2, 'be': 2, 'or': 1, 'not': 1}
```

#### 3. Sorting a histogram

Given a histogram tally (one returned from either `letter_histogram` or `word_histogram`), print the top 3 words or letters.

```
$ python3 word_histogram_tally.py

Please enter a sentence: To be or not to be do be do be do
The top three words are:
be: 4
do: 3
to: 2
```

### Large

#### 1. Phone Book App

You will write a command line program to manage a phone book. When you start the `phonebook.py` program, it will print out a menu and ask the user to enter a choice:

```
$ python3 phonebook.py
Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit

What do you want to do (1-5)?
```

- If they choose to look up an entry, you will ask them for the person's name, and then look up the person's phone number by the given name and print it to the screen.
- If they choose to set an entry, you will prompt them for the person's name and the person's phone number,
- If they choose to delete an entry, you will prompt them for the person's name and delete the given person's entry.
- If they choose to list all entries, you will go through all entries in the dictionary and print each out to the terminal.
- If they choose to quit, end the program.

Example session:

```
$ python3 phonebook.py

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
What do you want to do (1-5)? 2

Name: Melissa
Phone Number: 584-394-5857
Entry stored for Melissa.

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 2

Name: Igor
Phone Number: 857-485-2935
Entry stored for Igor.

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 2

Name: Jazz
Phone Number: 334-584-2345
Entry stored for Jazz.

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit
What do you want to do (1-5)? 1

Name: Melissa
Found entry for Melissa: 584-394-5857

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 3

Name: Melissa
Deleted entry for Melissa

Electronic Phone Book
=====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 4

Found entry for Igor: 857-485-2935
Found entry for Jazz: 334-584-2345

Electronic Phone Book =====================
1. Look up an entry
2. Set an entry
3. Delete an entry
4. List all entries
5. Quit What do you want to do (1-5)? 5

Bye.
```

## Interview Questions

### Fundamentals

- What is a dictionary?
- How is a dictionary different from a list?
- How do you retrieve a value from a nested dictionary?

### Bugfix

We've created a program that should update the number of miles traveled in a superhero's vehicle.

// @TODO - embed this/lessons/solving-problems-using-code/mapping/interview_bugfix.py

Unfortunately, when we run the program, it reports the following error:

```
Traceback (most recent call last):
  File "interview_bugfix.py", line 18, in <module>
    add_miles_traveled(superhero, 100)
  File "interview_bugfix.py", line 16, in add_miles_traveled
    vehicle["miles_traveled"] += how_many
KeyError: 'miles_traveled'
```

Where is the source of the bug and what would you change to make the program run correctly?

:::details Solution
The `KeyError` is because we passed `superhero` to the `add_miles_traveled()` function. On line 16 of the program, we are attempting to increment the value of the `"miles_traveled"` key.

Because we are using the `+=` operator, that line really means:

```py
vehicle["miles_traveled"] = vehicle["miles_traveled"] + how_many
```

Since the `superhero` dictionary does not have a `"miles_traveled"` key, our attempt to access a value for that key on the RHS causes an error to be thrown.

The first thing to do is to make sure to pass `superhero["vehicle"]` to `add_miles_traveled()` instead of just the `superhero`.

The other thing to do is to check to see if the `"miles_traveled"` key exists.

// @TODO - embed this/lessons/solving-problems-using-code/mapping/interview_bugfix_solution.py
:::

### Conceptual

What are some differences between `pickle` and `json`? When should you use one or the other?

### Architect

Create a dictionary that represents a single [tweet](https://twitter.com/). What keys would you need?

Would you need a different dictionary structure to keep track of likes, replies, and retweets? Or could it be nested inside a single tweet?

## Additional Resources

- [Understanding Dictionaries in Python 3](https://www.digitalocean.com/community/tutorials/understanding-dictionaries-in-python-3)
- [Dictionaries in Python](https://realpython.com/courses/dictionaries-python/)
- [Using Pickle](https://wiki.python.org/moin/UsingPickle)
- [Official Python Documentation on the `pickle` module](https://docs.python.org/3/library/pickle.html)
- [Working with JSON Data in Python](https://realpython.com/python-json/)
