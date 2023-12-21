---
title: Intro to Python
description: Programming Fundamentals
pubDate: 2023-12-15T13:49:22-05:00
---

## Learning Objectives

After completing this section, you'll be able to:

- Create programs in your text editor and run them in the terminal
- Use variables to keep track of values in your program
- Print and format strings
- Use loops to repeat blocks of code
- Use conditionals to choose what blocks of code to run
- Handle errors and exceptions

## Lesson

### Overview

In this lesson, you will build two different programs:

- Greeter: the user enters their name and the program prints a greeting
- Counter: the user enters a number and the program prints the numbers from 0 up to that number

#### Why do we write in a programming language?

Your computer is really just a collection of on/off switches, some labeled storage boxes, and wires that run between the switches and the boxes.

What gives your computer its power is that there are billions of switches, many times more boxes, and the wires are extremely fast.

At this scale, your computer is able to coordinate all of this electrical activity so that it can run complex programs like web browser, word processors, spreadsheets, video players, and 3D games.

The problem is that your computer thinks in terms of "on" and "off". Humans represent these two states as 1s and 0s because those conveniently translate into `True` and `False`. (There's a [whole branch of mathematics](https://en.wikipedia.org/wiki/Boolean_algebra) dedicated to doing complex logic with `True` and `False`.)

Early computers didn't have nearly as many switches or as much storage, so programming them was not as complex as it is today. Over time, [computers evolved rapidly](https://en.wikipedia.org/wiki/Boolean_algebra).

Since the 1950s, computer scientists have developed different kinds of short-hand, or _code_, that gets translated into 1s and 0s. The process of translation is more commonly known as _compiling_.

Essentially, programmers write code because programming the hardware of a computer would be too complex a task otherwise.

#### What write programs that run in the terminal?

Even if your eventual goal is to build 3D games, one of the best ways to get started with programming is to build programs that only run in the terminal.

The reason is that terminal-based programs are small and focused. There are no extra layers (e.g., windows, graphics, sound effects, and networks) to take your attention away from the pure fundamentals.

Programs are built in layers. At their foundation are a few, main pieces. A chat application is still just text input and output. A video game is a loop filled with conditionals. A photo editing program can simply be described as a way to manipulate a grid of color values.

When planning, developing, and debugging programs it is best to focus on the most bare-bones implementation of an idea. It is easier to build on top of something that works.

### What are the essential elements of programming?

- Storing values and definitions
- Writing statements and expressions that use values and definitions
- Combining statements and expressions into programs

We will begin exploring these essentials with the most basic of programs.

#### What is "Hello World"?

"Hello World" is a short program that prints out "Hello World" to the screen.

Programmers use this as a first program because writing it answers the following questions:

- How do I create a String (a sequence of letters)?
- How do I print that String to the screen?

:::tip
Printing is one of the most powerful tools in a programmer's toolkit.
It provides a way to see what values are available in a program at a particular time.

You will use it regularly as you test an idea or debug your larger programs.
:::

Luckily, your code does not need to have any concept of the "screen" - Python comes with a built-in function that handles that for you. You will see this in the upcoming code sample for the Hello World program.

#### What's an expression?

An expression is a piece of code that results in a single value.

An example of an expression is the String `"Hello World"`. It's a sequence of text characters enclosed by quotation marks. It is already in its simplest form and can't be reduced any further.

Another example of an expression is `23 + 19`. It can be reduced to the integer (whole number) `42` but is still considered a single expression.

#### What's a statement?

A statement is a general term for a single instruction that uses or manipulates values.

Here's a statement that prints `"Hello World"`:

```py
print("Hello World")
```

This statement uses the built-in `print()` function. Its job is to receive one or more values and print that to the terminal. In this example, we use it to display the String `"Hello World"`.

Create a new file named `hello_world.py`, type in this statement, and save the file. This is all it takes to write the "Hello World" program in Python. To run your program, type this in your terminal and then press `Enter` on your keyboard:

```sh
python3 hello_world.py
```

You should see the following printed to the screen:

```
Hello World
```

#### How do I leave notes for myself in my code?

Programming languages let you put notes, or **comments** in your code. Comments can help you remember how a complex piece of code works and can help your team members understand the reasoning and purpose of your code.

```py
# Hello World: my first python program
print("Hello World") # <--- Look! I did it!
```

In Python, the `#` symbol is the beginning of a comment - the rest of that line of code is ignored.

:::tip
You will often _comment out_ a piece of buggy code so that it is ignored. Programmers do this to confirm that the rest of the program is still working as expected.

Once you've fixed the bug, you'll _uncomment_ the code so that it is part of the running program once again.
:::

#### How do I save values for later use?

In Python, you can give a value an easy-to-remember label and use it again and again. This is especially useful if the value itself is long and tricky to type out.

Programmers refer to these labels as **variables**.

```py{1}
friendly_greeting = "Hello World"
print(friendly_greeting)
```

On the first line of this program, we are using `=` to **assign** the value `"Hello World"` to the _variable_ `friendly_greeting`. If you were to add more lines to your program, you could refer to the String `"Hello World"` simply by using the variable name `friendly_greeting`.

:::tip
When you see `=` in a program, it means you are _assigning a value to a variable_.

It does not mean that the two sides are equal, like it does in math.
:::

When you assign variables, the computer stores the value in memory. The computer knows the location of the value by a long, numeric address. These are hard for humans to remember, so programming languages let us give them convenient variable names.

#### What kinds of names should I give to variables?

It varies from language to language, but Python variables must follow these rules:

- The first character must either be a letter (lower case or upper case) or the underscore character (`_`)
- The rest of the variable name can consist of letters, numbers, or underscores

:::tip
Python variables typically use `snake_case_variable_names` - all lowercase letters with words separated by underscores. It's not a requirement, but it is the convention adopted by the community of Python programmers.

Other programming language communities favor other styles, such as `camelCaseVariableNames` or `PascalCaseVariableNames`.
:::

#### What words can I not use as variable names?

The following are "reserved words", meaning they are part of the Python language itself and cannot be used as variable names:

<table>
<tr>
<td>False</td>      <td>await</td>      <td>else</td>       <td>import</td>     <td>pass</td>
</tr>
<tr>
<td>None</td>       <td>break</td>      <td>except</td>     <td>in</td>         <td>raise</td>
</tr>
<tr>
<td>True</td>       <td>class</td>      <td>finally</td>    <td>is</td>         <td>return</td>
</tr>
<tr>
<td>and</td>        <td>continue</td>   <td>for</td>        <td>lambda</td>     <td>try</td>
</tr>
<tr>
<td>as</td>         <td>def</td>        <td>from</td>       <td>nonlocal</td>   <td>while</td>
</tr>
<tr>
<td>assert</td>     <td>del</td>        <td>global</td>     <td>not</td>        <td>with</td>
</tr>
<tr>
<td>async</td>      <td>elif</td>       <td>if</td>         <td>or</td>         <td>yield</td>
</tr>
</table>

You will learn the meaning of many of these reserved words as you learn more Python.

#### What are the basic data types in Python?

In computer programming, a data type is a specific kind of value. (Often, programmers just call them "types" instead of saying "data types".)

Python provides many data types. You have already seen the String type, which is a sequence of text characters. Each type has particular characteristics and uses. For example, you can do mathematical calculations with numbers, search and replace with Strings, and sorting with Lists.

Here are some of the other data types:

- Integer - a whole number (`0`, `42`, `8675309`)
- Float - a number with a decimal point (`3.14159`, `6.626068`, `1.21`)
- Boolean - `True` or `False`
- List - a sequence of values (`[1, 2, 3, 4]`, `["milk", "butter", "eggs"]`)
- Dictionary - a sequence of labeled values (`{ "name": "Galahad", "quest": "Seek the Grail", "favorite_color": "Blue"}`)

You will learn more about each data type throughout these lessons.

:::tip
Developers use the term "literal" to refer to a value that is not in a variable.

For example, `"Hello World"` is a String literal, and `42` is an Number literal.
:::

#### What are three ways to create a String literal?

A String literal can be created by putting quotes around text. In Python, you can use single quotes, double quotes, and triple quotes.

Here's what those look like:

```py
"I am a string."

'I am also a string.'

"I'm a string and I have a single quote"

'I\'m a string and I have to escape my single quote.'

'''
I am a string
and I can span
multiple lines!
'''

"""
Meeeeeee
toooooooooo!
"""

```

#### How do I combine two or more Strings?

You can combine Strings by using the `+` operator. Though it looks like the math symbol for addition, it is called the **concatenation** operator when used with Strings.

```py{1}
friendly_greeting = "Hello" + " World"
print(friendly_greeting)
```

You can also concatenate String literals with variables

```py{2}
friendly_greeting = "Hello"
print(friendly_greeting + " " + "World")
```

:::tip
When concatenating Strings, you may need to add additional spaces as in the examples above.
:::

#### How do I print a tab or a line breaks?

The thing about computers is that they have no concept of tabs or line breaks. Python gives you a way to represent special characters inside of a String. These are known as **escape sequences**.

```py
special_characters = "This\tis\ttabbed!\n\n\nAnd has line breaks!"
print(special_characters)
```

When you run that program, it prints the following:

```
This is tabbed!


And has line breaks!

```

Here are a some of the escape sequences you can use in Python:

<table>
<tr>
<tr>
<td><code>\b</code></td>
<td>backspace</td>
</tr>
<td><code>\t</code></td>
<td>horizontal tab</td>
</tr>
<tr>
<td><code>\v</code></td>
<td>vertical tab</td>
</tr>
<tr>
<td><code>\n</code></td>
<td>newline</td>
</tr>
<tr>
<td><code>\r</code></td>
<td>carriage return</td>
</tr>
</table>

While printing, Python "decodes" the escape sequences, displaying the meaning of these special characters. But otherwise, the escape sequences remain part of the String, even when assigned to a variable.

#### Which side of the assignment is handled first?

The `=` is more formally known as the **assignment operator**. It always appears between the Left Hand Side (LHS) and the Right Hand Side (RHS) of the assignment.

The LHS must be a variable.

The RHS can be any expression - that is, it must be a single value or it must be reducible to a single value. Because expressions can contain calculations, the RHS is evaluated before the assignment occurs.

The following example shows a value being assigned to the variable `the_answer`:

```py
the_answer = 23 + 19
print("The answer is", the_answer)
```

What is the value being assigned? It is `42`, because the assignment occurs after the calculation of `23 + 19` takes place.

One of the handy things about variables is that they can be used as part of the RHS:

```py{3}
first_number = 23
second_number = 19
the_answer = first_number + second_number
print("The answer is", the_answer)
```

Another thing about variables is that they can be _reassigned_:

```py{2,6}
first_number = 23
second_number = 19
the_answer = first_number + second_number
print("The answer is", the_answer)

second_number = 100
print("The answer is still", the_answer)
print("Even though the second number is now", second_number)
```

In this code sample, this is what is prints to the terminal:

```
The answer is 42
The answer is still 42
Even though the second number is now 100
```

It is important to understand that the RHS is never recomputed, even if one of its parts changes.

(In Python, you can make definitions that recompute their results, but the syntax is different. This requires the use of functions, which you will learn about in a later lesson.)

:::tip
The value of a variable is set at the time of assignment. If part of the RHS changes, that does not retroactively change the value of the variable.
:::

#### What really happens when I do assignment?

Python takes the following steps when you assign a value to a variable:

- Reduces the RHS to a single value
- Reserves memory for the value
- Saves the value to a memory address
- Associates the variable name with the memory address

Now that you have the basics of variables and printing, it's time to learn how to prompt a user for input.

#### How do I get values entered by the user?

The next step to creating interactive programs is to get input from the user. The built-in `input()` function allows you to prompt the user with some text and save whatever value they type into the terminal.

In the following code sample, the user is shown the String `"What is your name? "`. The program watches for input, waiting until the user presses the `Enter` key. When that happens, the RHS is effectively replaced with whatever the user typed into the terminal and the variable `name_of_user` is assigned that String. That String is used as part of the greeting `print()`ed.

```sh
name_of_user = input("What is your name? ")
print("Hello", name_of_user)
```

When you run this program with `python3 greeter-1.py`, you might see the following:

```
What is your name? Oakley the Cat
Hello Oakley the Cat
```

#### How do I use the a value as part of a String?

Up to now, we have passed the `print()` function multiple values, separated by commas. If we wanted to do something more complicated with the output, we might need to use the string interpolation syntax.

```py{2}
name_of_user = input("What is your name? ")
print("Hello %s, it is very nice to meet you!" % name_of_user)
```

Line 2 of this code sample shows an example of string interpolation. It consists of three parts:

1. The `%s` placeholder inside of a String
2. The interpolation operator (`%`)
3. A value to substitute for the placeholder

Here is the result of running the new version of the program:

```
What is your name? Oakley the Cat
Hello Oakley the Cat, it is very nice to meet you!
```

#### How do I interpolate multiple values into a String?

Interpolating a single value into another String may not be worth the effort. When dealing with multiple values, interpolation may make more sense.

```py{3}
name_of_user = input("What is your name? ")
name_of_friend = input("What is your friend's name? ")
print("Hello %s, it is very nice to meet you and your friend %s!" % (name_of_user, name_of_friend))
```

Here we are prompting the for two separate values, each assigned to different variables. Then on line 3, we interpolate those values into printed String. Notice that when we provide multiple values to interpolate, we must

- Enclose them in parentheses
- Separate them with commas

Here's an example of running that code:

```
What is your name? Oakley the Cat
What is your friend's name? Milla the Other Cat
Hello Oakley the Cat, it is very nice to meet you and your friend Milla the Other Cat!
```

Interpolation also works when a variable is used for the String with placeholders:

```py{1,5}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
name_of_friend = input("What is your friend's name? ")
print(greeting % (name_of_user, name_of_friend))
```

The only thing that matters is that the number of placeholders equals the number of values provided.

#### What are the other interpolation placeholders?

Generally `%s` will work when you need to do String interpolation.
But for some types (such as Floats), you can use other placeholders that allow you to specify the format.

Here is an example that formats a Float so that it only prints 2 decimal places:

```py
plancks_constant = 6.62607004
print("%.2f is the 2014 version of Planck's constant" % plancks_constant)
```

The result is:

```
6.63 is the 2014 version of Planck's constant
```

Here are some of the other interpolation placeholders and the types associated:

<table>
<thead>
<tr>
<th>Placeholder</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>%s</code></td>
<td>String (automatically converts other types to String)</td>
</tr>
<tr>
<td><code>%d</code></td>
<td>Integer</td>
</tr>
<tr>
<td><code>%f</code></td>
<td>Float (decimal format)</td>
</tr>
<tr>
<td><code>%e</code></td>
<td>Float (exponent format)</td>
</tr>
</tbody>
</table>

#### What are some other math operators?

<table>
<thead>
<tr>
<th>Operator</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>1 + 1</code></td>
<td>Addition</td>
</tr>
<tr>
<td><code>3 - 2</code></td>
<td>Subtraction</td>
</tr>
<tr>
<td><code>2 * 3</code></td>
<td>Multiplication</td>
</tr>
<tr>
<td><code>8 / 4</code></td>
<td>Division</td>
</tr>
<tr>
<td><code>abs(-5)</code></td>
<td>Absolute Value</td>
</tr>
<tr>
<td><code>pow(2, 2)</code></td>
<td>Exponent</td>
</tr>
<tr>
<td><code>round(5.5)</code></td>
<td>Round</td>
</tr>
</tbody>
</table>

:::warning
Note that in the older version of Python (2), all division was integer division, meaning that values were rounded to the nearest whole number.

```py
print(1 / 2) # python2 prints 0, python3 print 0.5

print(1.0 / 2.0) # python2 prints 0.5, python3 print 0.5
```

:::

:::danger
Dividing by `0` will cause an error!

```py
def divide(dividend, divisor):
    quotient = dividend // divisor # The // operator rounds
    remainder = dividend % divisor
    return (quotient, remainder) # Return a tuple

result = divide(5, 3)
print(result)
```

:::

### How do I make choices based on the user's input?

Let's return to our greeter program. It currently prompts the user twice for names to use when we `print()`. But what happens if they don't actually type any text and just press `Enter`? How would we check and how could we write our code to handle that situation?

First let's focus on whether or not the user types in their name.

```py{4,5}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
length_of_name = len(name_of_user)
if length_of_name > 0:
    name_of_friend = input("What is your friend's name? ")
    print(greeting % (name_of_user, name_of_friend))
```

Line 4 uses the built-in `len()` function, which counts the number characters in a String, telling us its length. Line 5 introduces an if-condition that compares this length to `0`.

This comparison is known as a _conditional_. It is followed by an _indented body_ of code, which only runs if the conditional is `True`.

:::tip
In Python, you always put a `:` at the end of a line before the beginning of an indented body.

The indented body is also known as a _code block_.
:::

If the user does type their name, the code runs as it did before. If they do not, the program ends. But it might be more useful if we provide an alternate _branch_ of code that runs. Let's modify our program so that it informs them that they really should type something:

```py{8,9}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
length_of_name = len(name_of_user)
if length_of_name > 0:
    name_of_friend = input("What is your friend's name? ")
    print(greeting % (name_of_user, name_of_friend))
else:
    print("OK, I'll ask again some other time.")
```

Try running your code a few times. Type a name when first prompted to make sure the program runs as it did before. Then run it again, pressing `Enter` at the first prompt to confirm that it runs the `else`.

:::tip
If Python expects an indented body, you **must** provide one.
If you need to, you can use the keyword `pass` as a placeholder for an indented body:

```py{9}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
length_of_name = len(name_of_user)
if length_of_name > 0:
    name_of_friend = input("What is your friend's name? ")
    print(greeting % (name_of_user, name_of_friend))
else:
    pass
```

:::

#### Can I put an `if` inside another `if`?

The code block (indented body) inside the `if` can contain any valid Python code. There's nothing special about a code block, it's just "protected" by the if-condition.

We can check the length of the friend's name by adding another if-condition:

```py{7,8}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
length_of_name = len(name_of_user)
if length_of_name > 0:
    name_of_friend = input("What is your friend's name? ")
    length_of_friend_name = len(name_of_friend)
    if length_of_friend_name > 0:
        print(greeting % (name_of_user, name_of_friend))
else:
    print("OK, I'll ask again some other time.")
```

#### Can I check for more than one condition?

An `if` and an `else` lets you decide whether to run one code block or another code block. But what if you wanted more than two options?

In Python, the keyword `elif` ("else if") does just that:

```py{10,11}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
length_of_name = len(name_of_user)
if length_of_name > 10:
    print("That's a really long name!")
elif length_of_name > 0:
    name_of_friend = input("What is your friend's name? ")
    length_of_friend_name = len(name_of_friend)
    if length_of_friend_name > 0:
        print(greeting % (name_of_user, name_of_friend))
else:
    print("OK, I'll ask again some other time.")
```

An `elif` works exactly like an `if`, but must appear after an `if` (since it serves as an alternate condition).

#### What are some other conditionals?

The previous code samples showed a conditional operator that checked if one value was greater than a second value.

| Operator | Meaning                  |
| -------- | ------------------------ |
| `<`      | less than                |
| `<=`     | less than or equal to    |
| `>`      | greater than             |
| `>=`     | greater than or equal to |
| `==`     | is equal to              |
| `!=`     | not equal to             |
| `not`    | negates a Boolean        |

#### What values are equivalent to `False`?

When used as a conditional, the following are the same as `False`:

- the number `0`
- `None`
- `""` (an empty String)
- `[]` (an empty List)
- `{}` (an empty Set)

Though we won't encounter them until the next lesson `List`s and `Set`s are sequences of data, the same way that a `String` is a sequence of characters.

#### What is the result of a comparison?

When you add two numbers, you can substitute in the resulting value.

And just like addition and subtraction, a comparison has a result which is either `True` or `False`. These are known as Boolean values. Python provides the keywords `True` and `False` when you need to refer the Boolean values without having to make a comparison.

#### How do I check multiple conditions at the same time?

Our `greeter` program might benefit from combining the conditionals instead of nesting them. We can modify our program so that we prompt the user for both names, and then `print()` different messages based on what they typed. The following code sample uses the `and` operator.

```py{9}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
name_of_friend = input("What is your friend's name? ")

length_of_name = len(name_of_user)
length_of_friend_name = len(name_of_friend)

if length_of_name > 0 and length_of_friend_name > 0:
    print(greeting % (name_of_user, name_of_friend))
else:
    print("OK, I'll ask again some other time.")
```

If either of the conditionals results in a `False` value, the body of the `if` will not run.

Here is the equivalent code, written using the `or` operator.

```py{9}
greeting = "Hello %s, it is very nice to meet you and your friend %s!"

name_of_user = input("What is your name? ")
name_of_friend = input("What is your friend's name? ")

length_of_name = len(name_of_user)
length_of_friend_name = len(name_of_friend)

if length_of_name == 0 or length_of_friend_name == 0:
    print("OK, I'll ask again some other time.")
else:
    print(greeting % (name_of_user, name_of_friend))
```

Notice that the code blocks were swapped since we are checking for different conditions than before.

:::tip
Always keep in mind that the `and` operator and the `or` operator _stop evaluating_ their operands as soon as they find what they're looking for. Otherwise, they continue processing their operands.

The following code sample demonstrates how the `and` operator stops once it finds a `True` value.

```py
False and print('hey')
# Does not run the print function

True and print('hey')
# Prints "hey"
```

Here is the same demonstration, but with the `or` operator.

```py
False or print('hey')
# Prints "hey"

True or print('hey')
# Does not run the print function
```

:::

### How do I repeat a piece of code over and over?

The power of programming comes from the fact that a computer does not get bored or tired. It will happily do tedious, repetitive tasks.

As a programmer, you can use that to your advantage to do massive amounts of work in a short period of time. Let's begin exploring some of the syntax and techniques for working with _loops_.

#### How do I increment a number?

When programming, you frequently have a variable that holds a number, and you will need to increase this number again and again.

```py{1,3,5,7}
donuts_consumed = 0
print("You have eaten %d donuts." % donuts_consumed)
donuts_consumed = donuts_consumed + 1
print("You have eaten %d donuts." % donuts_consumed)
donuts_consumed = donuts_consumed + 1
print("You have eaten %d donuts." % donuts_consumed)
donuts_consumed = donuts_consumed + 1
print("You have eaten %d donuts." % donuts_consumed
```

When looking at the code on lines 3, 5, and 7 it is important to focus on the RHS first. You can see that it is an expression that adds the current value of `donuts_consumed` and `1`.

After the expression on the RHS has been reduced to a single value, the variable on the LHS is assigned to this new value.

Here is the result of running this program:

```
You have eaten 0 donuts.
You have eaten 1 donuts.
You have eaten 2 donuts.
You have eaten 3 donuts.
```

:::warning
It is only valid to use a variable on the RHS if the variable already exists.
:::

The variable `donuts_consumed` is being added to and reassigned. This process is so common that there is shorthand for it:

```py{1,3,5,7}
donuts_consumed = 0
print("You have eaten %d donuts." % donuts_consumed)
donuts_consumed += 1
print("You have eaten %d donuts." % donuts_consumed)
donuts_consumed += 1
print("You have eaten %d donuts." % donuts_consumed)
donuts_consumed += 1
print("You have eaten %d donuts." % donuts_consumed)
```

`+=` is the increment operator. There is a corresponding decrement operator that subtracts and reassigns: `-=`. Multiplication and division follow the same pattern: `*=` and `/=`

#### What are the three parts of a loop?

The previous code sample was highly repetitive. In fact, other than the first line, the rest of the program is the same two lines over and over.

Thankfully programming languages have mechanisms for getting rid of this repetition. The following code sample is our first example of a while-loop. Its output is identical to the previous version.

```{2,3,4}
donuts_consumed = 0
while (donuts_consumed < 4):
    print("You have eaten %d donuts." % donuts_consumed)
    donuts_consumed = donuts_consumed + 1
```

The first line is the same - it sets the initial value of `donuts_consumed`. Line 2 illustrates the syntax for a while-loop.

In general, a while-loop consists of three parts as shown in the code sample:

1. Line 1: An initial state (`donuts_consumed = 0`)
2. Line 2: The keyword `while` followed by a **conditional** check (`(donuts_consumed < 4)`)
3. Lines 3-4: An _indented body_ of code that is repeated again and again

The conditional in this example compares the value of `donuts_consumed` to the number `4`. Similar to an `if`, the indented body only runs if that condition is `True`.

:::warning
It is important that the indented body modifies the state variable, moving the loop closer to completion.

If it does not, the loop would run forever, resulting in an "infinite loop" (which is a _bad thing_).
:::

From running the program, you know that it eventually finishes. In the body of the loop, the `donuts_consumed` variable is incremented by `1`. Eventually the value of `donuts_consumed` reaches `4`. The conditional check is equivalent to `4 < 4`, which results in a `False`. At this point, the loop stops running and the program finishes.

#### How do I stop a program with an infinite loop?

For example, if you wanted to write an infinite loop, you could do the following:

```py
while (True):
    print("Everything is awesome. Everything is cool when you're part of a team.")
```

:::tip
If you need to stop a program stuck in an infinite loop, press the `Control` and `C` keys at the same time.

You will often see this abbreviated as `Ctrl-C`.
:::

#### What are loops good for?

Some examples of when you will need to repeat an indented body of code include:

- Incrementing or decrementing a number
- Concatenating letters or words onto an existing String
- A game loop

#### What is an example of incrementing a number in a loop?

Here is a simple example of counting until a maximum value:

```py
count = 0
MAX = 10
while (count < MAX):
    print(count)
    count += 1
```

On line 2, the variable name `MAX` is in uppercase. This is a convention denoting a value that is "constant" in the program and should not change while the program is running.

Inside the body of our loop, we can include any Python code, including an `if`-`elif`-`else`. We'll modify the code so that it prints a slightly different message based on whether the value of `count` is below, equal to, or greater than `MAX/2`:

```py{4-9}
count = 0
MAX = 10
while (count < MAX):
    if count < MAX/2:
        print("%d is below the halfway point" % count)
    elif count == MAX/2:
        print("%d is at the halfway point" % count)
    else:
        print("%d is above the halfway point" % count)

    count += 1
```

Notice that the increment (`count += 1`) is at the same level of indentation as the keywords `if`, `elif`, and `else` - meaning that it is part of the `while` and will run each time the body of the `while` runs.

#### How do I convert a String to a number?

Next, we'll modify our code so that we ask the user how high they would like the counter to go. To do that, we'll add an `input()` as we've done before.

But we'll need to take an additional step - we have to convert the user's input from a String to a number. The reason is that the `input()` function always results in a String, even if the user types in numbers.

Python provides the `int()` function that does just that:

```py{2-3}
count = 0
input_string = input("How high should we count? ")
MAX = int(input_string)
while (count < MAX):
    print(count)
    count += 1
```

:::tip
The term for explicitly converting from one type of value to another is _casting_.
:::

### How do I use try/except to guard against exceptions?

What happens if we type something other than numbers when prompted?

Try it and you will see something like this:

```
How high should we count? five
Traceback (most recent call last):
  File "counter-3.py", line 3, in <module>
    MAX = int(input_string)
ValueError: invalid literal for int() with base 10: 'five'
```

The last line of the output shows that Python encountered a `ValueError` exception.

:::tip
In most programming languages, it is common to say that an "exception was thrown" - meaning that a specific kind of error was encountered. It is best to have code that "catches" - or handles - the specific kind of exception that can occur.
:::

Let's use Python's `try/except` syntax to catch any `ValueError` exceptions:

```py{3,8}
count = 0
input_string = input("How high should we count? ")
try:
    MAX = int(input_string)
    while (count < MAX):
        print(count)
        count += 1
except ValueError:
    print("Please run the program again and type a number!")
```

When we run our code again and give it bad input, our program gracefully handles the exception and prints an informative message for the user:

```
How high should we count? five
Please run the program again and type a number!
```

:::tip
The body of a `try` should have as few lines of code as possible.
Because the `try` will catch _any_ exceptions, you want to make sure you're targeting a specific one.
:::

#### How do I determine if a number is even or odd?

Let's add another modification to our counter by making it only print even numbers. To determine if a number is even, we'll use the _modulo_ operator, which performs division, but produces the remainder.

:::warning
The symbol for modulo is identical to the interpolation operator, but they are not the same!
:::

An even number is one that has a remainder of `0` when it is divided by `2`. Here's what that looks like when expressed as Python code `count % 2 == 0`.

We'll add a new variable `is_even` which will hold the result of that expression.

```py{6-8}
count = 0
input_string = input("How high should we count? ")
try:
    MAX = int(input_string)
    while (count < MAX):
        is_even = count % 2 == 0
        if is_even:
            print(count)
        count += 1
except ValueError:
    print("Please run the program again and type a number!")
```

We could have omitted the variable and just used the `count % 2 == 0` expression on line 7, but with the `is_even` variable it reads much more naturally.

:::tip
When a variable holds a Boolean value, you should start the variable's name with "is" (or some other form of the verb "to be").
:::

Alternatively, if our code should only print odd numbers, we simply modify the modulo expression:

```py{6}
count = 0
input_string = input("How high should we count? ")
try:
    MAX = int(input_string)
    while (count < MAX):
        is_odd = count % 2 != 0
        if is_odd:
            print(count)
        count += 1
except ValueError:
    print("Please run the program again and type a number!")
```

For good measure, we've also updated our variable's name to `is_odd` so that it reflects the change to the logic in our code.

### Summary

In this lesson, you learned how to:

- Create variables and assign values
- Print, interpolate, and concatenate Strings
- Use Boolean conditions to run different code blocks
- Automate processes using loops
- Handle exceptions

:::tip
Though we used Python as the programming language in this lesson, these concepts are transferable to languages like C, C#, JavaScript, Ruby, Java, and others. This style of programming is called _Imperative Programming_ because you are giving explicit instructions on how to carry out a process.
:::

## Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson above.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section above. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

### Small

#### 1. Hello You

Prompt the user for his name using the input function. Example:

```py
name = input('What is your name? ')
```

Upon receiving their name, you will say hello to them. Example session:

```
$ python3 hello.py
What is your name? Alice
Hello, Alice!
```

#### 2. HELLO YOU

Same as the first exercise, but this time print the user's name in ALL CAPS, and also tell them the number of letters in their name.

(Hint: You'll want to search for documentation on how to uppercase a string.)

Example session:

```
$ python3 hello2.py
WHAT IS YOUR NAME? Alice
HELLO, ALICE!
YOUR NAME HAS 5 LETTERS IN IT! AWESOME!
```

#### 3. Madlib

Prompt the user for the missing words to a Madlib sentence using the input function. You can make up your own Madlib sentence, but here's an example:

```py
____(name)____'s favorite subject in school is ____(subject)____.
```

With the above given sentence, this is what a user session might look like:

```
$ python3 madlib.py
Please fill in the blanks below:
____(name)____'s favorite subject in school is ____(subject)____.
What is name? Marty
What is subject? time travel
Marty's favorite subject in school is time travel.
```

#### 4. Day of the Week

Given the following code that prompts the user for a day number (Remember that the `int` function converts a numeric string to a number):

```py
day = int(input('Day (0-6)? '))
# Fill in your code here
```

The user will enter a number from 0 to 6. Given this number, print a day of the week. 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Here's an example user session (this assumes you've named the file `day_of_week.py`):

```
$ python3 day_of_week.py
Day (0-6)? 5
Friday
$ python day_of_week.py
Day (0-6)? 0
Sunday
```

#### 5. Work or Sleep In?

Prompt the user for a day of the week just like the previous problem. But this time, print "Go to work" if it's a work day and "Sleep in" if it's a weekend day. Example session:

```
$ python3 work_or_sleep_in.py
Day (0-6)? 5
Go to work
$ python work_or_sleep_in.py
Day (0-6)? 6
Sleep in
```

#### 6. Celsius to Fahrenheit

Prompt the user for a number in degrees Celsius, and convert the value to degrees in Fahrenheit and display it to the user.

Use the following formula:

```
F = (C * 9/5) + 32
```

Example sessions:

```
$ python3 degree_conversion.py
Temperature in C? 28
82.4 F
```

```
$ python3 degree_conversion.py
Temperature in C? -5
23 F
```

#### 7. Looping from 1 to 10

Using a while loop, print out the numbers between 1 and 10 inclusive, one on a line. Example output:

```
$ python3 1_to_10.py
1
2
3
4
5
6
7
8
9
10
```

#### 8. n to m

Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. Example session:

```
$ python3 n_to_m.py
Start from: 2
End on: 8
2
3
4
5
6
7
8
```

#### 9. Print a Square

Print a 5x5 square of \* characters. Example output:

```
$ python3 square.py
*****
*****
*****
*****
*****
```

#### 10. Print a Square II

Print a NxN square of \* characters. Prompt the user for N. Example output:

```
$ python3 square2.py
How big is the square? 10
**********
**********
**********
**********
**********
**********
**********
**********
**********
**********
```

### Medium

#### 1. Tip Calculator

Your task is to write a program that calculates how much of a tip to leave at a restaurant.

Prompt the user for two things:

- The total bill amount
- The level of service, which can be one of the following: good, fair, or bad

Calculate the tip amount and the total amount (bill amount + tip amount). The tip percentage based on the level of service is based on:

- good -> 20%
- fair -> 15%
- bad -> 10%

Example session:

```
$ python3 tip_calc.py
Total bill amount? 100
Level of service? good
Tip amount: $20.00
Total amount: $120.00
```

```
$ python3 tip_calc.py
Total bill amount? 48
Level of service? bad
Tip amount: $4.80
Total amount: $52.80
```

Hints:

- Remember that you need to convert the input from the user input to floats instead of ints. Use the `float` function instead of the `int` function.
- To format a float number as a dollar value, use Python's formatting syntax: `"%.2f" % amount`

#### 2. Tip Calculator 2

Allow the ability to divide the check into a equal parts amount a number of people. The user will enter the number of people to be divided amongst. Example session:

```
$ python3 tip_calc2.py
Total bill amount? 100
Level of service? good
Split how many ways? 5
Tip amount: $20.00
Total amount: $120.00
Amount per person: $24.00
```

#### 3. How many coins?

Write a program that will prompt you for how many coins you want. Initially you have no coins. It will ask you if you want a coin? If you type "yes", it will give you one coin, and print out the current tally. If you type no, it will stop the program. Example run:

```
$ python3 coins.py
You have 0 coins.
Do you want another? yes
You have 1 coins.
Do you want another? yes
You have 2 coins.
Do you want another? no
Bye
```

#### 4. Print a Box

Given a height and width, input by the user, print a box consisting of \* characters as its border. Example session:

```
$ python3 box.py
Width? 6
Height? 4
******
*    *
*    *
******
```

#### 5. Print a Triangle

Print a triangle consisting of \* characters like this:

```
   *
  ***
 *****
*******
```

#### 6. Multiplication Table

Print the multiplication table for numbers from 1 up to 10. Example output:

```
$ python3 multiplication_table.py
1 X 1 = 1
1 X 2 = 2
1 X 3 = 3
1 X 4 = 4
...
5 X 5 = 25
5 X 6 = 30
5 X 7 = 35
...
10 X 8 = 80
10 X 9 = 90
10 X 10 = 100
```

### Large

#### 1. Triangle Numbers

Print the first 100 triangle numbers. What is a triangle number? Read
[this article to find out what triangle numbers are](https://www.mathsisfun.com/algebra/triangular-numbers.html).

#### 2. Factor a Number

Given a number, print its factors. What are factors? Read through [this article on finding the factors of a number](https://www.khanacademy.org/math/pre-algebra/factors-multiples/divisibility-and-factors/v/finding-factors-of-a-number).

#### 3. Guess a Number

You will implement a guess-the-number game where the player has to try guessing a secret number until they gets it right. For now, you will "hard code" the secret number to 5 (just set it to five like secret_number = 5). You will prompt the player to enter a number again and again, each time comparing their input to the secret number. To to that, you will need to write a while loop. If they guess correctly, you will print "You win!", otherwise, you will prompt for a number again.

Example session:

```
$ python3 guess_the_number.py
I am thinking of a number between 1 and 10.
What's the number? 3
Nope, try again.
What's the number? 9
Nope, try again.
What's the number? 5
Yes! You win!
```

##### Step 2: Give High-Low Hint

Improve your game to provide the player with a high-or-low hint. Example session:

```
$ python3 guess_the_number.py
I am thinking of a number between 1 and 10.
What's the number? 3
3 is too low.
What's the number? 9
9 is too high.
What's the number? 5
Yes! You win!
```

##### Step 3: Randomly Generated Secret Number

Instead of hard-coding the secret number to 5 now, you will generate the secret number using a random number generator provided by Python, so that even you, the programmer, cannot know the secret number before hand. To generate a random number between 1 and 10, inclusive, do this:

```py
import random
my_random_number = random.randint(1, 10)
```

Use this same method to generate your secret number for the game. Play the game a couple of times to see that the secret number is different each time.

##### Step 4: Limit Number of Guesses

Limit the number of guesses the player has to 5. If he cannot guess the number within 5 guesses, he losses. Example session:

```
$ python3 guess_the_number.py
I am thinking of a number between 1 and 10.
You have 5 guesses left.
What's the number? 1
1 is too low.
You have 4 guesses left.
What's the number? 10
10 is too high.
You have 3 guesses left.
What's the number? 2
2 is too low.
You have 2 guesses left.
What's the number? 7
7 is too high.
You have 1 guesses left.
What's the number? 4
4 is too low.
You ran out of guesses!
```

##### Bonus: Play Again

At the conclusion of a game, give the player the option of playing again. Example session:

```
$ python3 guess_the_number.py
I am thinking of a number between 1 and 10.
You have 5 guesses left.
What's the number? 1
Yes! You win!
Do you want to play again (Y or N)? Y
I am thinking of a number between 1 and 10.
You have 5 guesses left.
What's the number? 5
Yes! You win!
Do you want to play again (Y or N)? N
Bye!
```

## Interview Questions

### Fundamentals

- What is the difference between the `=` operator and the `==` operator?
- What is a Boolean value?
- How do you write a while-loop?

### Bugfix

The following code sample has a number of errors in it.

```py
MAX = 10
while count < 10:
count += 1
if count %2 == 0:
print(count)
```

What would you need to change so that it runs correctly and outputs the following?

```
2
4
6
8
10
```

:::details Solution
When you run the program as-is, you would see the following error:

```
  File "interview-bugfix-0.py", line 3
    count += 1
        ^
IndentationError: expected an indented block
```

The first issue is that the file lacks indentation. Python requires a code block (that immediately follows any `:`) to be indented. After correcting the indentation errors, the following new error appears:

```
Traceback (most recent call last):
  File "interview-bugfix-1.py", line 2, in <module>
    while count < 10:
NameError: name 'count' is not defined
```

Python is telling you that you are trying to reference a variable that has not been defined. The solution is to declare and assign the `count` variable before you try to use it:

```py
count = 0
MAX = 10
while count < 10:
    count += 1
    if count %2 == 0:
        print(count)
```

:::

### Conceptual

What does a compiler do and what are some examples of compiled languages?

Contrast compiled languages with interpreted languages.

:::details Solution
Languages like Go, C/C++, and Java are examples of _compiled_ languages. There is a separate program that translates the raw _source code_ that a programmer writes into _machine code_ that the computer can run.

This translation program is known as a **compiler**. The result of compilation is an **executable** file (sometimes called a **binary**). Running an executable starts the program.

An executable is not human-readable, and there is currently no way to get the original source code back if all you have is the executable.

:::tip
Check out the [How do Programming Languages work?](#how-do-programming-languages-work) video in the [Additional Resources](#additional-resources) section of this lesson for more information about compilers.
:::

Interpreted languages require no compilation step - you run them using an **interpreter** program. The interpreter reads the source code line-by-line and immediately runs the program.

Interpreters do not produce an executable and remain in their human readable code (though tools exist to [intentionally make the code unreadable](<https://en.wikipedia.org/wiki/Obfuscation_(software)>)).
:::

### Architect

Using what you learned throughout this lesson, how would you build a game that:

- Prompts the user, asking if it should `"Flip a coin? "`
- If the user responds `"yes"` or `"y"`:
  - Displays the result (`"Heads"` or `"Tails"`) to the user
  - Prompts the user again (`"Flip a coin? "`)
- Otherwise, the program exits

Hint, look up the documentation for `random.randint` for information about how to choose a random number. It could be useful for simulating a coin flip.

:::details Solution
To create this program you will need a combination of loops, if-conditions, and variables.

Here is one example solution:

```py
import random
wants_flip  = input("Flip a coin? ")
while (wants_flip == "y" or wants_flip == "yes"):
    is_heads = random.randint(0,2) % 2 == 0 # 50% chance heads, 50% tails
    if is_heads:
        print("heads")
    else:
        print("tails")

    wants_flip  = input("Flip a coin? ")
```

:::

## Additional Resources

What follows are links to tutorials and videos to help you reinforce and deepen your knowledge.

The following articles offer an alternate explanation of some of the material from the lesson. Note that they may cover slightly different areas of the same topics.

- [Variables](http://greenteapress.com/thinkpython2/html/thinkpython2003.html)
- [Strings](http://greenteapress.com/thinkpython2/html/thinkpython2009.html)
- [Loops](http://greenteapress.com/thinkpython2/html/thinkpython2008.html)

This video is part of a [high quality series that covers the history of computing and how computers work from the ground up](https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/RU1u-js7db8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you find this video interesting, we recommend the entire series.
