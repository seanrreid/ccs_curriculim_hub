---
title: Sequences in Python
sidebar_label: Sequences
sidebar_position: 4
---

## Learning Objectives

After completing this lesson, you will be able to:

- Create Lists, Tuples, and `range`s
- Use indexing to access individual locations in a sequence
- Convert between Strings and Lists
- Iterate through sequences using for-loops

## Lesson

In the previous lesson, you learned how to store single values in memory by assigning variable names.

But when you need to keep track of many values of the same kind (e.g, book titles, favorite movies, groceries to buy), it makes more sense to create a single variable that can hold multiple values.

In this lesson, you will build a simple to-do list program that lets you:

- Print your to-do list
- Add items to your to-do list
- Mark items as "complete" - removing them from the list

### What is a Sequence?

In Python, a sequence is a data type that can store multiple, individual values. Examples of sequences include:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/sequence-examples.py

Briefly, each sequence type has a specialty:

- Lists are **mutable** (modifiable) sequences - versatile, general-purpose collection
- Tuples are immutable sequences - best for representing a something with a fixed size (e.g., GPS coordinates)
- `range`s are lists of numeric values

#### How do I create a List?

Lists can hold any other type (Strings, numbers, other Lists, etc.). The easiest way to create one is to assign a List literal to a variable:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-0.py

A List literal is:

- one or more values (or variables)
- separated by commas `,`
- enclosed in square brackets `[]`

### How do I access items in a Sequence?

You can access items in a sequence in groups or individually.

#### How do I access individual items in a Sequence?

Here is how Python stores values in our `todos` List:

| index |     value      |
| :---: | :------------: |
|   0   | "pet the cat"  |
|   1   |  "go to work"  |
|   2   | "feed the cat" |

Python uses an integer _index_ to identify values within a single List. The _first_ index is always `0`.

:::tip
One way to think of an index is like a "seat number" on a plane, except
that the seat numbers are numeric and start at `0`.
:::

You use the index to refer to a specific item in the List:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-1.py

It is not necessary to create a variable. You can index as part of an expression:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-2.py

#### What happens if I specify an invalid index?

Python considers it an error if you use an index that falls outside the range of a sequence:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-2b.py

Specifically, `IndexError` will be thrown:

```
Traceback (most recent call last):
  File "todo-2b.py", line 3, in <module>
    print("This item does not exist:", todos[10])
IndexError: list index out of range
```

As with any exception, you can handle it with `try/except`:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-2c.py

Now a useful message appears instead of your program "erroring out":

```
You almost got an IndexError!
```

#### Why is a negative index valid?

Python allows you to use a negative index, which tells it to start from the end instead of the beginning.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-2d.py

#### How do I access groups of items in a Sequence?

You can access all of the items simply by using the variable name for the sequence itself:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-3.py

Which prints the following:

```
Here are your todos:
['pet the cat', 'go to work', 'feed the cat']
```

You can use the _slicing_ syntax to access a subset of the items:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-4.py{4}

When you _slice_ a List, you normally provide two number separated by a `:`

- The first number is the _starting_ index. It **is** included in the result
- The second number is the _ending_ index. It **is not** included in the result.

If you omit the starting index, Python starts the slice at the beginning (index `0`). If you omit the ending index, Python goes to the end (the last index).

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-5.py

Here is the output:

```
Slice from the third through the end:
['shop for groceries', 'go home', 'feed the cat']
Slice from the beginning up to, but not including the fourth:
['pet the cat', 'go to work', 'shop for groceries']
```

You can use negative indexes with slices:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-2e.py

Which gives the following result:

```
Two items up to, but not including the last: ['shop for groceries', 'go home']
These are the last 3 items: ['shop for groceries', 'go home', 'feed the cat']
```

### How do I iterate through a Sequence?

Now that you know how to access items manually, it is time to automate that with a loop. Using a loop to access a sequence's items one at a time is called **iteration**.

In this portion of the lesson, we will print the items of the to-do list.

Recall that a while loop should always move closer to some end condition so that it isn't an infinite loop.

#### How do I find the length of a Sequence?

Python provides a `len()` function that will tell you how many items are in a Sequence.

You give `len()` a Sequence; it returns an integer. We will use this as part of the condition for a while-loop.

```py{3,4,7}
todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

index = 0 # Begin with index 0
while index < len(todos):
    todo = todos[index]
    print("%d: %s" % (index + 1, todo))
    index += 1
```

These are the three parts of our while loop:

- An initial state: we start the `index` variable at `0`
- A condition: only run the code block if `index` is less than `len(todos)`
- A code block that moves us closer to the end condition: `index += 1`

This while-loop is exactly like the simple counter program from the previous lesson. The only difference is that on line 5, we create a `todo` variable to reference the item at `todos[index]`.

Not only does incrementing move us closer to the end condition, but it lets us access the next item in the list each time the code block runs.

When we run our program, we see the following:

```
1: pet the cat
2: go to work
3: shop for groceries
4: go home
5: feed the cat
```

On line 6 of our program, we interpolate the value `index + 1` so that it prints a "human readable" version of our index.

#### What is a for-loop and why should I use it with a List?

Often, you do not need to know the specific index of an item. You just want the items themselves.

Python provides another kind of loop: the for-loop. Here is our to-do printer using this syntax, with the numerical index omitted:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-7.py

It's so much shorter! For-loops are a shorthand for iterating **and** accessing an item at a time.

```
pet the cat
go to work
shop for groceries
go home
feed the cat
```

If you do want to show the index (or at least number the todos) you can add a variable that you display and increment:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-7b.py{3,6}

Other than looking nice next to each to-do, the `count` variable serves no other purpose in our for-loop.

```
1: pet the cat
2: go to work
3: shop for groceries
4: go home
5: feed the cat
```

### How do I modify a List?

Lists are Python's mutable Sequence type, meaning that you can add, remove, and replace items.

#### How do I add items to a List?

There are three ways to add items to a List:

- You can `.append()` individual items
- You can concatenate two lists together
- You can `.extend()` a list using elements from another list

Each List has a `.append()` method that you can use like this:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-8.py

You can see that it adds on to our original `todos`:

```
1: pet the cat
2: go to work
3: shop for groceries
4: go home
5: feed the cat
6: binge watch a show
7: go to sleep
```

:::tip
A _method_ is just like a function, but methods "belong to" a specific instance of a data type.

For example, every List has its own `.append()` method for adding on new items.
:::

Alternatively, you can use the concatenation operator `+` to combine two lists:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-8b.py

This is equivalent to using the `.extend()` method:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-8c.py

:::tip
Concatenation produces a _new_ List.

`.append()` and `.extend()` modify a List **in-place**. That is, these mutate a List instead of returning
:::

Let's modify our to-do program, prompting the user for items to add. If the user just presses `Enter`, the program will exit. If they do provide a new to-do, we'll add it to the list and print their current to-do items.

:::tip
Try to use what you've learned so far and implement this on your own. When you're ready, please continue with the lesson.
:::

:::details Creating the program loop
Our program needs to prompt the user for input until they press `Enter` without typing anything else. That seems like a good case for a while-loop.

In order to get our initial state, we need to prompt the user before the start of the while-loop. Then, in the body of our loop, we need to prompt them again. Since our code block must always move us closer to the end condition, we need to give the user a chance to press `Enter` to end the program.

Here is our program:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-9.py

On the last line of the program, we have a `print()` statement that is _not_ part of the body of the while-loop. It runs **after** the while-loop has finished.

Here is an example session:

```
$ python3 todo-9.py
What do you need to do? feed the cat
To do:
====================
1: feed the cat


What do you need to do? feed the cat again
To do:
====================
1: feed the cat
2: feed the cat again


What do you need to do? keep feeding the cat
To do:
====================
1: feed the cat
2: feed the cat again
3: keep feeding the cat


What do you need to do?
Have a nice day!
```

:::

#### How do I replace items in a List?

You can use an index to refer to a specific place in a List. If you do this on the LHS of an assignment, you can replace an item:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-v2-1.py

In this example, we have reassigned the value at index `1`:

```
['pet the cat', 'go to the grocery store', 'shop for groceries', 'go home', 'feed the cat']
```

If you need to replace multiple items, you can use a slice on the LHS and a List on the RHS:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-v2-2.py

Here, we replace the items from index `1` up to, but not including index `4`:

```
['pet the cat', 'make cat food', 'cook cat food', 'feed the cat']
```

Notice that our slice on the LHS referred to 3 items, but the List on the RHS only contained 2 items. Python replaces that entire segment of the list with a new list; it is not replacing those items individually.

For our to-do program, we'll first prompt the user for whether they want to print their to-do list, add an item, or replace an item. Then, our program will carry out that choice.

This will be a significant change to our code, but we'll take it in steps.

:::tip
Now is another opportunity to exercise your knowledge. Try implementing another while-loop around the existing loop. This loop should ask them
:::

:::details Wrapping our program in a main menu
Before moving on to the replace-item feature, let's make sure to prompt the user with a main menu. Then, based on that choice, we can run one of our existing procedures (printing or adding).

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-v2-3.py

On line 15, we convert the user's input to upper-case. If we didn't do this, lines 19 and 27 would have to account for either the upper or lower-case version.

Here is a brief session with our program:

```
$ python3 todo-v2-3.py

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item

(Or press Enter to exist the program.)
p



To do:
====================

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item

(Or press Enter to exist the program.)
a
What do you need to do? rock the casbah

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item

(Or press Enter to exist the program.)
p



To do:
====================
1: rock the casbah

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item

(Or press Enter to exist the program.)

Have a nice day!

```

:::

:::details Replacing an item
We need to add another `elif` for replacing an item in the to-do list.

If the user chooses to replace an item, it is a good idea to print the to-do list so that they can see the human-readable numbers.

Then, we can prompt them for which number to replace and then prompt them for the new to-do item.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-v2-4.py{31-49}

Since our program shows human-readable numbers, we have to subtract `1` to get the corresponding List index.

:::danger
Never trust user input!

Always do appropriate error checking using `try/except` and `if/else`.
:::

Here is a session that demonstrates replacing an item.

```
$ python3 todo-v2-4.py

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item

(Or press Enter to exist the program.)
a
What do you need to do? rock the casbah

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item

(Or press Enter to exist the program.)
r



To do:
====================
1: rock the casbah
Which to-do number? 1
What do you need to do? rock the catbox

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item

(Or press Enter to exist the program.)

Have a nice day!

```

#### How do I delete items from a List?

The syntax for removing an item from a List is different from what we've seen so far.

Use the `del` keyword to tell Python to remove one or more items from a List:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-10.py

Here is the output from running the example:

```
['go to work', 'shop for groceries', 'go home', 'feed the cat']
['go to work', 'feed the cat']
```

We can use this to mark an item an item as complete in our to-do program.
It will require an additional choice in our main menu as well as another `elif` branch in our main loop.

:::tip
This is the last change to our to-do program! Give it a shot before looking at the implementation.
:::

:::details Adding "Done" feature to our to-do program
The code for removing an item is very similar the code for replacing an item. The main difference is that instead of prompting for a new to-do, we use the `del` keyword to remove the item at the specified index.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/todo-v2-5.py{50-69}

Here is a session that demonstrates removing an item.

```
Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item
C: Complete a to-do item
(Or press Enter to exist the program.)
a
What do you need to do? rock the catbox

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item
C: Complete a to-do item
(Or press Enter to exist the program.)
c



To do:
====================
1: rock the catbox
Which to-do number? 1
rock the catbox has been marked complete!

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item
C: Complete a to-do item
(Or press Enter to exist the program.)
p



To do:
====================

Choose an action:
P: Print your to-do list
A: Add a to-do item
R: Replace a to-do item
C: Complete a to-do item
(Or press Enter to exist the program.)

Have a nice day!

```

:::

### When should I use nested loops?

Lists can hold any kind of value, including Lists.

You can use nested loops to create nested Lists and to iterate over them.

Let's create a tic-tac-toe board using nested loops.
It will look like this:

<table>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Let's say you wanted to access a particular item in the nested Lists:

<table>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td>x</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</table>

To access the item marked with an `X`, you have to **index twice**, like so:

```py
board[1][2]
```

You read this from left to right: The `board` variable holds a List. `board[1]` refers to the item at index `1`, which is also a List. This corresponds to the 2nd row.

In that 2nd row, to access the 3rd item, you use index `2`

How would you access the following item?

<table>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td>x</td>
<td></td>
</tr>
</table>

:::details Answer
The item on the 3rd row, in the 2nd column is accessed like so:

```py
board[2][1]
```

:::

#### How do I use the `range()` function to generate numbers?

To create our game board, we need to produce numbers that correspond to our List indexes.

To do that, we'll use the `range()` function. You pass `range()` a number, and it returns the integers up to, but not including that number.

First, let's see the nested loops in action, just printing the numbers generated by `range(0)`:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/nested-0.py

Here is our output, showing the values:

```
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
```

Now, instead of printing the numbers, we'll create the `board` as an empty List, then we'll `.append()` an empty List.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/nested-1.py

This results in a List of empty Lists:

```
[[], [], []]
```

And to complete the empty game board, we'll put the "coordinates" in each of the inner Lists. This can help us visualize how our loops are working:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/nested-2.py

Here is what our game board looks like now:

```
[['[0][0]', '[0][1]', '[0][2]'], ['[1][0]', '[1][1]', '[1][2]'], ['[2][0]', '[2][1]', '[2][2]']]
```

#### How do I print all of the items in a nested List?

We used nested loops to generate the game board, and we can use similar code to print the board.

Instead of printing the List itself, let's print it as a grid:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/nested-3.py

We added nested for-loops, and since we wanted the values (instead of the indexes), we did not use the `range()` function.

```
[0][0]  [0][1]  [0][2]

[1][0]  [1][1]  [1][2]

[2][0]  [2][1]  [2][2]
```

#### Making a move

Adding game play is part of the exercises after the lesson, but here is an example of placing a move on the game board:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/nested-4.py

We added nested for-loops, and since we wanted the values (instead of the indexes), we did not use the `range()` function.

```
[0][0]  [0][1]  [0][2]

[1][0]  [1][1]  [1][2]

[2][0]  [2][1]  [2][2]



Player X is moving.


[0][0]  [0][1]  X

[1][0]  [1][1]  [1][2]

[2][0]  [2][1]  [2][2]
```

### How do I use Strings as Sequences?

Like Lists, you can index, slice, and get the length of Strings as if though they were Lists.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/string-0.py

And the results of running the code:

```
The first letter is a
The first three letters are abc
Some letters in the middle are lmnop
There are 26 letters in the alphabet
```

#### How do I loop through the characters of a String?

Because you can index and get the length of a String, you can also iterate through the individual characters:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/string-1.py

And the results of running the code:

```
a
b
c
d
e
f
g
h
i
j
k
l
m
n
o
p
q
r
s
t
u
v
w
x
y
z

```

#### How do I convert a String into a List?

One notable difference between Strings and Lists is that you _cannot_ modify a String by reassigning to an index.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/string-2.py

This results in an error:

```
Traceback (most recent call last):
  File "string-2.py", line 3, in <module>
    alphabet[0] = "4" # Uh oh.
TypeError: 'str' object does not support item assignment
```

You would first have to convert it to a List so that you could mutate the data:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/string-3.py

This allows you to make whatever modifications you choose:

```
['4', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
```

#### How do I convert a List into a String?

There is a trick to converting your List back into a String, and it is a bit counter-intuitive at first.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/string-4.py

You use the String method `.join()` to reconnect the items of a List.

Because we used an empty String (`""`) to join the items, the resulting String has no spaces:

```
['4', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
4bcdefghijklmnopqrstuvwxyz
```

:::tip
Note that we did not _mutate_ our String, but did **reassign** the variable name `alphabet` to our newly `.join()`ed String.
:::

But, we can use any String we want to insert between the joined List items:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/string-5.py

Now, our `alphabet` String has an `!` and a line break between each letter:

```
['4', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
4!
b!
c!
d!
e!
f!
g!
h!
i!
j!
k!
l!
m!
n!
o!
p!
q!
r!
s!
t!
u!
v!
w!
x!
y!
z

```

Note that `.join()` inserts a String **between** each List item. The `z` does not have a `!` after it.

### What Sequence operations work with Tuples?

Just as with Strings, you can index, slice, and get the length of a Tuple. But you cannot modify a Tuple.

// @TODO - embed this/lessons/solving-problems-using-code/sequences/tuple-0.py

This program prints the following:

```
The latitude is 33.848673 and the longitude is -84.373313
```

:::tip
Python supports **unpacking** syntax which allows you to assign multiple variables at a time when used with Sequences on the RHS:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/tuple-1.py
:::

Tuples are immutable:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/tuple-2.py

Assigning to an index of a Tuple results in an error:

```
Traceback (most recent call last):
  File "tuple-2.py", line 3, in <module>
    coordinates[0] = 40.741895
TypeError: 'tuple' object does not support item assignment
```

But you can concatenate to produce a new Tuple:

// @TODO - embed this/lessons/solving-problems-using-code/sequences/tuple-3.py

This works because you are doing reassignment, not mutation.

```
('John', 'Paul', 'George', 'Pete')
('John', 'Paul', 'George')
('John', 'Paul', 'George', 'Ringo')
```

:::tip
To create a Tuple with a single item, you must wrap it in parentheses and add a trailing comma as shown in the previous code sample.
:::

### Summary

In this lesson, you learned about the following Sequence types:

- Lists
- Strings
- Tuples
- ranges

Sequences in Python share a number of qualities in common. They are all:

- index-able
- slice-able
- length-able

Because of these qualities, they are also _iterable_ (meaning you can use a for-loop with them.)
