---
title: Python 101 Exercises
sidebar_label: Exercises
siderbar_position: 2
---

## Level 1

1. Hello You

    Prompt the user for his name using the input function. Example:

    ```py
    name = input('What is your name? ')
    ```

    Upon receiving their name, you will say hello to them. Example session:

    ```sh
    $ python3 hello.py
    What is your name? Alice
    Hello, Alice!
    ```

2. HELLO YOU

    Same as the first exercise, but this time print the user's name in ALL CAPS, and also tell them the number of letters in their name.

    (Hint: You'll want to search for documentation on how to uppercase a string.)

    Example session:

    ```sh
    $ python3 hello2.py
    WHAT IS YOUR NAME? Alice
    HELLO, ALICE!
    YOUR NAME HAS 5 LETTERS IN IT! AWESOME!
    ```

3. Madlib

    Prompt the user for the missing words to a Madlib sentence using the input function. You can make up your own Madlib sentence, but here's an example:

    ```py
    ____(name)____'s favorite subject in school is ____(subject)____.
    ```

    With the above given sentence, this is what a user session might look like:

    ```sh
    $ python3 madlib.py
    Please fill in the blanks below:
    ____(name)____'s favorite subject in school is ____(subject)____.
    What is name? Marty
    What is subject? time travel
    Marty's favorite subject in school is time travel.
    ```

4. Day of the Week

    Given the following code that prompts the user for a day number (Remember that the `int` function converts a numeric string to a number):

    ```py
    day = int(input('Day (0-6)? '))
    # Fill in your code here
    ```

    The user will enter a number from 0 to 6. Given this number, print a day of the week. 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Here's an example user session (this assumes you've named the file `day_of_week.py`):

    ```py
    $ python3 day_of_week.py
    Day (0-6)? 5
    Friday
    $ python day_of_week.py
    Day (0-6)? 0
    Sunday
    ```

5. Work or Sleep In?

    Prompt the user for a day of the week just like the previous problem. But this time, print "Go to work" if it's a work day and "Sleep in" if it's a weekend day. Example session:

    ```py
    $ python3 work_or_sleep_in.py
    Day (0-6)? 5
    Go to work
    $ python work_or_sleep_in.py
    Day (0-6)? 6
    Sleep in
    ```

6. Celsius to Fahrenheit

    Prompt the user for a number in degrees Celsius, and convert the value to degrees in Fahrenheit and display it to the user.

    Use the following formula:

    ```py
    F = (C * 9/5) + 32
    ```

    Example sessions:

    ```sh
    $ python3 degree_conversion.py
    Temperature in C? 28
    82.4 F
    ```

    ```sh
    $ python3 degree_conversion.py
    Temperature in C? -5
    23 F
    ```

### 7. Looping from 1 to 10

Using a while loop, print out the numbers between 1 and 10 inclusive, one on a line. Example output:

```py
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

### 8. n to m

Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. Example session:

```py
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

## Level 2

1. Tip Calculator

    Your task is to write a program that calculates how much of a tip to leave at a restaurant.

    Prompt the user for two things:

    - The total bill amount
    - The level of service, which can be one of the following: good, fair, or bad

    Calculate the tip amount and the total amount (bill amount + tip amount). The tip percentage based on the level of service is based on:

    - good -> 20%
    - fair -> 15%
    - bad -> 10%

    Example session:

    ```py
    $ python3 tip_calc.py
    Total bill amount? 100
    Level of service? good
    Tip amount: $20.00
    Total amount: $120.00
    ```

    ```py
    $ python3 tip_calc.py
    Total bill amount? 48
    Level of service? bad
    Tip amount: $4.80
    Total amount: $52.80
    ```

    Hints:

    - Remember that you need to convert the input from the user input to floats instead of ints. Use the `float` function instead of the `int` function.
    - To format a float number as a dollar value, use Python's formatting syntax: `"%.2f" % amount`

2. Tip Calculator 2

    Allow the ability to divide the check into a equal parts amount a number of people. The user will enter the number of people to be divided amongst. Example session:

    ```py
    $ python3 tip_calc2.py
    Total bill amount? 100
    Level of service? good
    Split how many ways? 5
    Tip amount: $20.00
    Total amount: $120.00
    Amount per person: $24.00
    ```

3. How many coins?

    Write a program that will prompt you for how many coins you want. Initially you have no coins. It will ask you if you want a coin? If you type "yes", it will give you one coin, and print out the current tally. If you type no, it will stop the program. Example run:

    ```py
    $ python3 coins.py
    You have 0 coins.
    Do you want another? yes
    You have 1 coins.
    Do you want another? yes
    You have 2 coins.
    Do you want another? no
    Bye
    ```

## Level 9000

### Triangle Numbers

Print the first 100 triangle numbers. What is a triangle number? Read
[this article to find out what triangle numbers are](https://www.mathsisfun.com/algebra/triangular-numbers.html).

### Guess a Number

#### Version 1

You will implement a guess-the-number game where the player has to try guessing a secret number until they gets it right. For now, you will "hard code" the secret number to 5 (just set it to five like secret_number = 5). You will prompt the player to enter a number again and again, each time comparing their input to the secret number. To to that, you will need to write a while loop. If they guess correctly, you will print "You win!", otherwise, you will prompt for a number again.

Example session:

```py
$ python3 guess_the_number.py
I am thinking of a number between 1 and 10.
What's the number? 3
Nope, try again.
What's the number? 9
Nope, try again.
What's the number? 5
Yes! You win!
```

#### Version 2: Give High-Low Hint

Improve your game to provide the player with a high-or-low hint. Example session:

```py
$ python3 guess_the_number.py
I am thinking of a number between 1 and 10.
What's the number? 3
3 is too low.
What's the number? 9
9 is too high.
What's the number? 5
Yes! You win!
```

#### Version 3: Randomly Generated Secret Number

Instead of hard-coding the secret number to 5 now, you will generate the secret number using a random number generator provided by Python, so that even you, the programmer, cannot know the secret number before hand. To generate a random number between 1 and 10, inclusive, do this:

```py
import random
my_random_number = random.randint(1, 10)
```

Use this same method to generate your secret number for the game. Play the game a couple of times to see that the secret number is different each time.

Version 4: Limit Number of Guesses

Limit the number of guesses the player has to 5. If he cannot guess the number within 5 guesses, he losses. Example session:

```py
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

<!-- Solutions: https://github.com/carolinacodeschool/exercise_solutions/tree/main/python_101 -->