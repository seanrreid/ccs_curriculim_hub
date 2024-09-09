---
title: Day 2 - Working with OOP
sidebar_label: Day 2
sidebar_position: 1
keywords:
  - python
  - object-oriented programming
  - OOP
  - class keyword
---

## First Hour

- Show'n'Tell'n'Debug
- Review [Hotel Manager](/docs/exercises/python-hotel-manager/) solution

## Hours 2 & 3

Today will be a mix of demo + code along. I'm sharing the presentation link again for reference, but most of our information will be pulled from the lesson link.

**NOTE:** It's pets and cars all the way down today! 🐶 😺 🏎️

## Presentations

- [Object Oriented Programming](https://docs.google.com/presentation/d/1pqIK5nza4rjglKo3iCms3dfDZgBw2CcwI2fq7T3nmIE/edit?usp=sharing)

## Lessons

- [Object Oriented Programming(OOP)](/docs/lessons/solving-problems-using-code-python/python-oop)

<!--
## In Class Solution

Here's the in-class version of the Hotel Manager app

```py
hotel = {
  1: {
    101: ['George Jefferson', 'Wheezy Jefferson'],
  },
  2: {
    237: ['Jack Torrance', 'Wendy Torrance'],
  },
  3: {
    333: ['Neo', 'Trinity', 'Morpheus']
  }
}


def check_in():
    floor_num = int(input("Which floor? "))
    room_num = int(input("Which room number? "))
    number_of_guests = int(input("How many in your party? "))
    names_of_guests = []

    for person in range(number_of_guests):
        name = input("Name of person #%d: " % (person + 1))
        names_of_guests.append(name)

    hotel[floor_num] = { room_num: names_of_guests }
    print(hotel)
    return hotel

def check_out():
    floor_num = int(input("What floor were you on?"))
    room_num = int(input("What was your room number? "))

    del hotel[floor_num][room_num]
    print(hotel)
    return hotel


def check_in_or_out(response):
    if response == 'in':
        check_in()
        return True
    elif response == 'out':
        check_out()
        return False
    else:
        print('Invalid input, please answer either \'in\' or \'out\'')
        return True

concierge = True
while concierge:
    in_or_out = input("Are you checking, or out? ").lower()
    concierge = check_in_or_out(in_or_out)
``` -->
