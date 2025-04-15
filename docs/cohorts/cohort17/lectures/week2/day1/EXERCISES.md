---
sidebar_label: Exercises
sidebar_position: 2
title: Exercises
---

## Lists

Save these in a file called `lists.py`.

1. Change a List

    * Use the following list: `numbers = [1, 2, 3, 4, 5, 99, 2600, 300]`
    * There is a Python method that will [reverse a list](https://realpython.com/python-reverse-list/).
    * Create a new variable called `reversed_list` and assign it the reversed value of `numbers`.
    * Print the values of each list.

2. String to List

    * Make a string with at least 6 characters.
    * Make an empty list (hint: create a variable with no value between the brackets)
    * Loop through each letter in your string and for each letter in the string, append it to the empty list.
    * Reverse the list.
    * Create a new variable that is an empty string.
    * Loop through the list, for each letter in the list, add it to the new string your created.
    * Print out the new string. It should be the reversed version of the string you created. i.e. "sean" -> "neas".

3. List + Conditional

    * Make a new list containing members of your favorite band/sports team/television show.
    * Write a conditional statement to check if a specific person is in that list.
    * If they are in the list, remove them.
    * If they're not in the list, add them.

    Can you write a condition that does _both_ of these checks?

    * Think like this: "If the person exists, then remove them. Otherwise, if they don't, add them.
    * Print the updated list.

## While Loop

Save these in a file called `loops.py`.

### Start/End

* Ask the user for a starting number, assign it to a variable.
* Ask the user for an ending number, assign it to a variable.
* Write a loop that increments the starting number by `1` until it matches the ending number.

### Bonus

* Can you write a loop that increments by more than `1`?
* Can you create a range of numbers from which the user can choose?
* Can you let the user know when they choose something out of that range?

## Dictionaries

### Hotel Management Python App

Imagine that you're running a hotel, and you want to keep track of guests by floor and room number.

Start with the following dictionary:

```python
hotel = {
    '1': {
        '185': ['George Jefferson', 'Wheezy Jefferson'],
    },
    '2': {
        '237': ['Jack Torrance', 'Wendy Torrance'],
    },
    '3': {
        '333': ['Neo', 'Trinity', 'Morpheus']
    }
}
```

Write a program that does the following:

* Display a menu asking whether to check in or check out.
* Prompt the user for a floor number, then a room number.
* If checking in, ask for the number of occupants and what their names are.
* If checking out, remove the occupants from that room.
* After checking in or out, display a list of all the occupants and their rooms.

#### Level Up

* Do not allow anyone to check into a room that is _already occupied_!
* Do not allow checking out of a room that _isn't occupied_!

## Functions

Many of these will look familiar to exercises we did last week, but this time we're going to _specifically_ write them using functions.

### Madlib function

Write a function that accepts two arguments: a name and a subject.

The function should return a String with the name and subject interpolated in.

For example:

```py
madlib("Jenn", "science")
# "Jenn's favorite subject is science."

madlib("Jeff", "history")
# "Jeff's favorite subject is history."
```

Provide default arguments in case one or both are omitted.

### Conversions

#### Celsius to Fahrenheit

The formula to convert a temperature from Celsius to Fahrenheit is:

`F = (C * 9/5) + 32`

Write a function that takes a temperature in Celsius, converts it Fahrenheit, and returns the value.

#### Fahrenheit to Celsius

The formula to convert a temperature from Fahrenheit to Celsius is:

`C = (F - 32) * 5/9`

Write a function that takes a temperature in Fahrenheit, converts it to Celsius, and returns the value.

### Odd & Even

#### `is_even` function

Write a function that accepts a number as an argument and returns a Boolean value. Return `True` if the number is even; return `False` if it is not even.

#### `is_odd` function

Write an `is_odd` function that uses your `is_even` function to determine if a number is odd. (That is, do not do the calculation - call a function that does the calculation.)

Hint: You'll use the `not` keyword.

#### `only_evens` function

Write a function that accepts a List of numbers as an argument.

Return a new List that includes the only the even numbers.

```py
only_evens([11, 20, 42, 97, 23, 10])
# Returns [20, 42, 10]
```

Hint: use your `is_even()` function to determine which numbers to include in your new List.

#### `only_odds` function

Write a function that accepts a List of numbers as an argument.

Return a new List that includes the only the odd numbers.

```py
only_odds([11, 20, 42, 97, 23, 10])
# Returns [11, 97, 23]
```

Hint: use your `is_odd()` function to determine which numbers to include in your new List.

### Smallest vs Largest

#### Find the smallest number

Write a function `smallest` that accepts a List of numbers as an argument.

It should return the smallest number in the List.

#### Find the largest number

Write a function `largest` that accepts a List of numbers as an argument.

It should return the largest number in the List.

### Longest vs Shortest

#### Find the shortest String

Write a function `shortest` that accepts a List of Strings as an argument.

It should return the shortest String in the List.

#### Find the longest String

Write a function `longest` that accepts a List of Strings as an argument.

It should return the longest String in the List.

### Level 9000

#### Change maker

Write a function that calculates how many bills and coins someone would receive as change.

Write a function `make_change` that accepts two arguments:

* `total_charge` - the amount of money owed
* `payment` - the amount of money payed

Return a 2-dimensional [tuple](https://docs.python.org/3/library/stdtypes.html?highlight=tuple#tuple) whose values represent the bills and coins.

---

##### Reminder from Wes Boss

Calling back to this [podcast transcript quote](/docs/cohorts/cohort17/lectures/week1/day4/#things-i-wish-i-heard-20-years-ago)

> A tuple is a very scary sounding name for an array where you the length and the item types are known.

##### Follow Up Reminder from Sean

In Python:

* Tuples are ordered collections of objects enclosed in parentheses `()`
* Each element within the tuple occupies a specific position starting at index 0
* Unlike lists, tuples can't be directly changed, aka "immutable"

---

For example, consider the following tuple:

```py
# Example change tuple
(
  (3, 0, 1, 1, 0, 1),
  (4, 1, 0, 2)
)
```

The first item represents the bills:

* 3 singles
* 0 fives
* 1 ten
* 1 twenty
* 0 fifties
* 1 hundred

The second item represents the coins

* 4 pennies
* 1 nickel
* 0 dimes
* 2 quarters

Your function `make_change()` will return a tuple that resembles the above example based on the values the user gives for `payment` and `total_change`.

Hint: consider writing a small function to help produce the "bills" tuple and another function to help produce the "coins" tuple.

#### Calculate the change value

Write a `value_of_change` function that accepts a 2-dimensional tuple like the one returned by the `make_change` function.

This function should calculate the monetary value specified by the tuple.

For example, if the following tuple were passed to `value_of_change`

```py
(
  (3, 0, 1, 1, 0, 1),
  (4, 1, 0, 2)
)
```

It would return `133.59`

As before, consider writing helper functions to deal with the bills and the coins separately.
