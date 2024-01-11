---
title: Python List/Dictionary Exercises
sidebar_label: Exercises
sidebar_position: 2
---

## Level 1

1. Phonebook dictionary

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

2. Nested dictionaries

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

3. Friend counter

    Using the dictionary from the Nested dictionaries exercise above, write a function `countFriends()` that accepts a dictionary as an argument and returns a new dictionary that includes a new key `friends_count`:

## Level 2

1. Letter Summary

    Write a `letter_histogram` program that asks the user for input, and prints a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:

    ```sh
    $ python3 letter_histogram.py
    Please enter a word: banana
    {'a': 3, 'b': 1, 'n': 2}
    ```

2. Word Summary

    Write a `word_histogram` program that asks the user for a sentence as its input, and prints a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

    ```sh
    $ python3 word_histogram.py
    Please enter a sentence: To be or not to be
    {'to': 2, 'be': 2, 'or': 1, 'not': 1}
    ```

3. Sorting a histogram

    Given a histogram tally (one returned from either `letter_histogram` or `word_histogram`), print the top 3 words or letters.

    **HINT:** Lookup the `sorted()` built-in.

    ```sh
    $ python3 word_histogram_tally.py

    Please enter a sentence: To be or not to be do be do be do
    The top three words are:
    be: 4
    do: 3
    to: 2
    ```

### Level 9000

#### Phone Book App

You will write a command line program to manage a phone book. When you start the `phonebook.py` program, it will print out a menu and ask the user to enter a choice:

```sh
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

```sh
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
