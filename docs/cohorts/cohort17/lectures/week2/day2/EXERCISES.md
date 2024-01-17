---
title: OOP Exercises
sidebar_label: Exercises
sidebar_position: 2
---

## Working with an existing class

Given the following `Person` class:

```python
class Person:
    def __init__(self, name, email, phone):
      self.name = name
      self.email = email
      self.phone = phone

    def greet(self, other_person):
      print('Hello %s, I am %s!' % (other_person.name, self.name))
```

Write code to:

* Instantiate an instance object of Person with name of 'Sonny', email of '<sonny@hotmail.com>', and phone of '483-485-4948', store it in the variable `sonny`.
* Instantiate another person with the name of 'Jordan', email of '<jordan@aol.com>', and phone of '495-586-3456', store it in the variable `jordan`.
* Have `sonny` greet `jordan` using the greet method.
* Have `jordan` greet `sonny` using the greet method.
* Write a print statement to print the contact info (email and phone) of Sonny.
* Write another print statement to print the contact info of Jordan.

---

### Make your own class

Create a class `Vehicle`. A `Vehicle` object will have 3 attributes:

* make
* model
* year

A vehicle is created like this:

`car = Vehicle('Nissan', 'Leaf', 2015)`

And you can access it's attributes individually like so:

```python
print(car.make, car.model, car.year)
```

#### Add a method

Add a `print_info` method to the `Vehicle` class. It will print out the vehicle's information like so:

```python
car.print_info()
```

Will output:

```python
2015 Nissan Leaf
```

## Expanding classes

### Add another method

Go back to the `Person` class.

```python
class Person:
    def __init__(self, name, email, phone):
         self.name = name
         self.email = email
         self.phone = phone

     def greet(self, other_person):
         print('Hello %s, I am %s!' % (other_person.name, self.name))
```

Add a `print_contact_info` method to the `Person` class that will print out the contact info for a object instance of Person.

```python
sonny.print_contact_info()
```

Should generate this output:

```sh
Sonny's email: sonny@hotmail.com
Sonny's phone number: 483-485-4948
```

### Add an instance variable (attribute)

Add a `friends` instance variable (attribute) to the `Person` class.

You will initialize it to an empty list within the constructor `__init__`.

Once you've done this you should be able to add a friend to a person using list's append method:

`jordan.friends.append(sonny)`
`sonny.friends.append(jordan)`

You should also be able to get the number of friends a person has by using the len function on his friends:

```python
len(jordan.friends)
```

Will return:

```sh
1
```

#### Add an `add_friend` method

The fact that a person's friends attribute is a list is an implementation detail of the `Person` class.

Occassionally you'll want to hide implementation details from the users of your object/class. Implement an `add_friend` method to `Person`, so that in order to add a friend you call this method:

`jordan.add_friend(sonny)`

instead of:

`jordan.friends.append(sonny)`

#### Add a `num_friends` method

We also want to hide the implementation detail that there is a friends attribute containing a list of friends.

To do this, we'll implement a `num_friends` method which returns the number of friends for a person.

For example:

```python
jordan.num_friends()
1
```

#### Count number of greetings

We want to count the number of times a person has greeted someone. To do this, we'll add another attribute, `greeting_count`, and initialize it to `0`. Then each time the greet method is called, we'll increment `greeting_count` by `1`.

The output will resemble the following:

```py
>>> sonny.greeting_count
0
>>> sonny.greet(jordan)
>>> sonny.greeting_count
1
>>> sonny.greet(jordan)
>>> sonny.greeting_count
2
```

### Working with `__str__`

You may notice that when you are working with a person object, it's representation in the Python shell is pretty cryptic and unhelpful:

```sh
>>> print(jordan)
<__main__.Person object at 0x106976410>
```

Adding the `__str__` method to the `Person` class and have it return a string. Whatever you return there will be used to "represent" your person object.

For example, say I want a `Person` to be represented like this:
Jordan <jordan@aol.com> 495-586-3456

I could implement __str__ like this:

```python
def __str__(self):
     return 'Person: {} {} {}'.format(self.name, self.email, self.phone)
```

Implement your own `__str__` method, and you can represent your person objects however you want. Incidentally, `__str__` is also used when you use convert your object to a string: i.e. `str(jordan)`.

---

### Bonus Challenge

Keep track of the number of unique people a person has greeted, and be able to report that number via a `num_unique_people_greeted method`:

```sh
>>> sonny.num_unique_people_greeted()
0
>>> sonny.greet(jordan)
>>> sonny.num_unique_people_greeted()
1
>>> sonny.greet(jordan)
>>> sonny.num_unique_people_greeted()
1
>>> sonny.greet(dee_ann)
>>> sonny.num_unique_people_greeted()
2
```

### Cuddly Pet

Start with these classes:

```py
class Pet:
    def __init__(self, name, fullness=50, happiness=50, hunger=5, mopiness=5):
        self.name = name
        self.fullness = fullness
        self.happiness = happiness
        self.hunger = hunger
        self.mopiness = mopiness

    def eat_food(self):
        self.fullness += 30

    def get_love(self):
        self.happiness += 30

    def be_alive(self):
        self.fullness -= self.hunger
        self.happiness -= self.mopiness


class CuddlyPet(Pet):
    def __init__(self, name, fullness=50, hunger=5, cuddle_level=1):
        super().__init__(name, fullness, 100, hunger, 1)
        self.cuddle_level = cuddle_level

    def be_alive(self):
        self.fullness -= self.hunger
        self.happiness -= self.mopiness/2

    def cuddle(self, other_pet):
        # Super cuddle powers, activate!
        for i in range(self.cuddle_level):
            other_pet.get_love()
```

#### Level 1

1. Overriding `__str__()` in `CuddlyPet`

    When you pass a `CuddlyPet` instance to the `print()` function, it uses the `Pet` version of the method.

    Override the definition of `__str__()` in `CuddlyPet` so that the return value includes the string `"Extra cuddly"`.

2. Using `super()` in `CuddlyPet.be_alive()`

    `CuddlyPet` has a custom version of `be_alive()`, but it's nearly identical to the definition in `Pet`.  The only difference is that we subtract `self.mopiness/2` from `self.happiness` for a `CuddlyPet`.

    If our Virtual Pets get more complex, we might add more lines to `be_alive()`. It would be tedious to update both versions of `be_alive()`.

    One solution is for `CuddlyPet` to call `Pet.be_alive()` and then increase its `self.happiness`.  Modify `CuddlyPet.be_alive()` so that it calls `super()` to invoke `Pet`'s version of `be_alive()`.

#### Level 2

1. Add a `Treat` class to your `Pet` simulator.

    When you give one of your `Pet` objects a treat, prompt the user to choose one of three kinds:

    * `ColdPizza`
    * `Bacon`
    * `VeganSnack`

    Create a class for each of these, and customize them so that they have differing effects on the `Pet` object's `fullness` and `happiness` levels.

2. Create a `Menu` class for your `Pet` simulator

    Create a `Menu` class that has the following attributes:

    * `prompt_text` - the text to show the user

    Add the following methods to the `Menu` class

    * `get_choice()` - shows the user the `prompt_text` and converts their input to an `int`, prompting again if they enter an invalid value.

    Modify the `while` loop of your `Pet` simulator so that it uses a `Menu` instance to handle user interaction.
    For each additional prompt (such as choosing which kind of `Pet` subclass to adopt), use additional `Menu` instances.

### Level 9000

1. Garden simulator

    Create the following classes to simulate a garden:

    * `Tree` - its shade decreases water loss by `2`
    * `Gnome` - each instance adds a `5%` chance of rain
    * `Woodchuck` - creates a `5%` chance of a `Tree` disappearing
    * `Garden` - has separate lists for instances of `Tree`, `Gnome`, and `Woodchuck`

    Create a main `while` loop that runs your simulator. During each turn, your `Garden` may experience rain, or may have a `Woodchuck` move in. For each of its lists, tally up the various percents that an event will occur and use the built-in `random` module to decide what happens during that turn. (See <https://docs.python.org/3.5/library/random.html> for more information)

    Every 10th turn, you have a random chance of earning another `Tree` or `Gnome`.

    The simulation ends if you reach `10` `Tree` instances.

2. Adding more classes

    * `FruitTree` (a subclass of `Tree`) - after its `water_level` reaches `100`, it should increase its `fruit` attribute by `1`
    * `Squirrel` - each one adds a 5% chance that your `fruit` levels will decrease by `1`.

    The simulation ends if your `FruitTree` instances are able produce `10` fruits.
