---
title: Day 2 - OOPs all OOP
sidebar_label: Day 2
sidebar_position: 1
keywords:
 - python
 - object-oriented programming
 - OOP
 - class keyword
---

## Goals

* Show'n'Tell'n'Review
  * [Hotel Manager](/docs/exercises/python-hotel-manager/)
  * [OOP exercises](/docs/exercises/python-oop/)
* Group exercise

Today we'll be setting the stage to get started on the Role Playing Game (RPG).

## Group Exercise

The following is written in a [procedural format](./RESOURCES#beyond-oop).

```py
def create_person(name, email, phone):
    person = {
        "name": name,
        "email": email,
        "phone": phone,
    }
    return person

def greet(person1, person2):
    print('Hello {}, I am {}!'.format(person2["name"], person1["name"]))

def print_contact_info(person):
    print(f"{person['name']}'s email: {person['email']}, {person['name']}'s phone number: {person['phone']}")
```

### Create people as dictionaries

```py
sonny = create_person("Sonny", "sonny@hotmail.com", "483-485-4948")
jordan = create_person("Jordan", "jordan@aol.com", "495-586-3456")
```

### Perform actions on people

```py
greet(sonny, jordan)
greet(jordan, sonny)

print_contact_info(sonny)
```

## Lessons

* [Object Oriented Programming(OOP)](/docs/lessons/solving-problems-using-code-python/python-oop)
