---
title: Object-Oriented Programming
description: Object-Oriented Programming
pubDate: 2023-12-15T13:49:22-05:00
---

## Learning Objectives

After completing this lesson, you will be able to:

1. Create classes.
2. Instantiate objects with constructors.
3. Customize classes with properties and methods.
4. Extend base classes and overrides method in subclasses.

## Lesson

Way back in the last century, in the 1990s, children all over the world obsessed over their digital pets - little electronic toys about the size of a car keyfob.

These toys had a black and white screen that showed how hungry and happy the digital pet was. You pressed buttons to feed and play with your pet, thereby increasing these levels.

In this lesson, we'll create our own digital pets using Object-Oriented Programming techniques.

Object-Oriented Programming is well-suited for programs that simulate something in the real (or imaginary) world. In this case, we'll simulate a `Pet` that has a certain amount of `happiness` and `fullness`. Over time these amounts start to decrease, and it's up to you to play with and feed your `Pet`.

### Overview

### A Virtual Pet, without Object-Oriented Programming

Before we use Object-Oriented Programming (OOP) techniques to build our Virtual Pet, let's consider what a solution might look like using the tools we already know - arrays, dictionaries, loops, and functions.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/procedural_0.py

We define the `puppy` variable and assign it a dictionary that holds our pet's attributes for `fullness` and `happiness`. For convenience, we also define methods that increase and decrease these attribute levels.

A `while` loop handles our interactions with our pet and also calls the function that decreases the pet's levels (reflecting the passage of time).

We've repeated the strings `"fullness"` and `"happiness"` throughout the code, and this might make you a little nervous. Each string is another opportunity for a typo, potentially raising a `KeyError`.

And, what happens when we adopt another pet? Based on the existing code, you might simply add another dictionary. And you could keep the pets in a list:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/procedural_1.py

When feeding or playing with our pets, the loop gets more complicated:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/procedural_2.py{18,21}

We haven't even added any error handling (should the user enter an invalid value when asked `"Which pet?"`).

Another issue is that each pet behaves exactly the same, getting hungry and mopey at the same rate (which is in no way realistic).

One solution to this is to store each pet's `hunger` and `mopiness` amounts in their dictionary.

```py{6-7,13-14,19-20}
# Define multiple dictionaries that holds each pet's attributes.
puppy_1 = {
    "name": "Cujo",
    "fullness": 50,
    "happiness": 20,
    "hunger": 7,
    "mopiness": 4,
}
puppy_2 = {
    "name": "Benji",
    "fullness": 50,
    "happiness": 100,
    "hunger": 3,
    "mopiness": 2,
}

# Each pet is adjusted invidually.
def get_hungry_and_mopey(pet):
    pet["fullness"] -= pet["hunger"]
    pet["happiness"] -= pet["mopiness"]
```

When we update a pet, we subtract the that pet's `hunger` amount from their `fullness` level. Likewise, we subtract that pet's `mopiness` amount from their `happiness` level.

You can see that as we start adding more attributes to pets, we have to modify each individual dictionary, any function that alters a pet, and our main loop.

As we add features, the amount of code we must change multiplies.

Imagine trying to add:

- the ability to adopt more pets
- toys for pets (allowing pets to increase their own `happiness`)
- play dates (so that one pet increases another pet's happiness)

Modifying and debugging our code will soon be unmanageable!

### Classes and Objects

Up to now, the programs we've written are simple enough that a single programmer can hold all the pieces of the program in their head at one time.

Our Virtual Pet program is starting to get more complex and we need a better way to organize the details. To tackle this complexity, we'll rewrite our code using classes.

You can think of a class like a blueprint for making a specific kind of house. You can use the blueprint to make individual _instances_ of that class.

Attributes are the qualities of a specific house, such as the color of the exterior, the number of floors, and the size of the pool on the roof. Each instance will be different from other houses based on these attributes.

Classes usually have methods, which are functions that describe what instances of that class can _do_. Continuing with our analogy, these are like rooms in a house that have a dedicated purpose, like a kitchen or a game room.

The rooms connect to each other via a hallway and can access the attributes of that house.

here's a diagram!

Get ready for an example!

#### How do you define a class?

We start by creating our `Pet` class:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_00.py

Just like a function, a `class` has a name and an indented body. We haven't defined any attributes or methods yet, so we use python's `pass` keyword as a placeholder.

#### How do you create an instance of a class?

When you use the name of the class like a function, it returns a new instance of that class.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_01.py

You can call a class multiple times and get a different instance of the class.

::::tip
Some developers think of classes as "factories" for new instances.
::::

#### Constructors

A blueprint defines a house, but a blueprint does not _build_ a house. In order to do that, a team of workers does the job of pouring the foundation, framing the structure, and building out the rooms.

Luckily, Python takes care of this process for us when it builds an object, letting us configure the object as it is built.

An individual object created from a class is known as an _instance_ of that class. The function that creates instances is the _constructor_.

##### How do you give attributes to an instance?

Let's roll our code back just a little bit so that we're only tracking the `name`, `fullness`, and `happiness` for a `Pet`:

| attribute | value  |
| :-------: | :----: |
|   name    | "Cujo" |
| fullness  |   50   |
| happiness |   20   |

To implement this as part of our `Pet` class, you have to tell the class to add these attributes when it creates an instance.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_02.py

::::tip
It is customary to name this parameter `self`.

Technically, you can give it any valid parameter name, but seasoned Python developers would find this jarring.
::::

We never have to call `__init__` directly - Python automatically calls it when we make a new instance:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_03.py

##### How do you customize the attributes of each instance?

If you make another instance of `Pet`, you'd find that no matter what, it has all the same attribute values as the other one.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_04.py

We need a way to configure each instance with its own attribute values. We can achieve this by defining additional parameters for `__init__` and using those values for the instance's attributes:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_05.py{2-5}

When we create new `Pet` instances, we pass in the values for the attributes:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_06.py{1,5}

As with regular functions, we can define default argument values:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_07.py{2}

After this modification, we only need to provide a `name` for each `Pet` instance:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_08.py{1,5}

#### Methods

We now have a class that we can use to create instances with their own attribute values. But the real power of classes is the ability to define custom methods that make use of those attribute values.

We can add the methods `eat_food()` and `get_love()` for the `Pet` class. Each modifies the instance's attributes accordingly:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_09.py{7-11}

As with `__init__`, the first parameter is `self`, which is how the body of the method access the instance.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_10.py

Each instance has its own `eat_food()` and `get_love()` methods. Calling `cujo.eat_food()` only affects the value of `cujo.fullness`. Likewise, calling `benji.get_love()` only affects the value of `benji.happiness`.

### Encapsulation

In Object-Oriented Programming, one of the main features of classes is that they provide a way to bundle state (attributes) and behavior (methods). This is known as **encapsulation**.

Practicing good encapsulation is a matter of deciding the minimum amount of information an object needs to store in its state in order to do its work via its behaviors. Likewise, methods should have as few responsibilities as possible. As with functions, a method should have one clear and specific purpose.

Implementing `be_alive()` so that it decrements a certain amount of `fullness` and `happiness`:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_11.py{13-15}

#### specializing via parameters

Modifying `be_alive()` so that it the amounts are parameterized:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_12.py{13-15}

This moves those to the constructor, but are not configurable:

```py{6-7,16-17}
class Pet:
    def __init__(self, name, fullness=50, happiness=50):
        self.name = name
        self.fullness = fullness
        self.happiness = happiness
        self.hunger = 5
        self.mopiness = 5

    def eat_food(self):
        self.fullness += 30

    def get_love(self):
        self.happiness += 30

    def be_alive(self):
        self.fullness -= self.hunger
        self.happiness -= self.mopiness
```

And this makes them configurable:

```py{2,6-7}
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
```

asking ourselves, what if we end up sending the same parameters over and over, when conceptually, we mean a more specific kind of pet.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_17.py

like a cuddly pet responds more strongly to affection and a light eater doesn't need to be fed very much

In the next section, we'll build out a `CuddlyPup` that is naturally happy and responds strongly to affection.

### Inheritance

Another technique from Object-Oriented Programming involves making specialized versions of classes.

While an instance of the `Pet` class can be manually configured to be happy, creating many of them with the same constructor arguments is a sign that we need another class.

This new class should be exactly like the `Pet` class, except with specific traits built into it. We'll tackle that in two parts. First, we'll make a _subclass_ of `Pet`, taking on all of its properties and methods. Then we will handle the customizations.

Here is how to make a _subclass_ of `Pet`:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_18.py

By putting `Pet` in parentheses next to the name of the class, we're telling Python that the `CuddlyPet` class _inherits_ from `Pet`.

::::tip
A class that inherits from another is a _subclass_.

Subclasses inherit from _superclasses_, also known as parent classes.

There is nothing special about superclasses. They are simply classes that provide default attributes and methods for their subclasses.
::::

This means that instances of `CuddlyPet` has all the same attributes and methods that instances of `Pet` do.

In fact, you even instantiate a `CuddlyPet` with the same arguments:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_19.py

#### How do I add new methods to a subclass?

Now that we have a subclass of `Pet`, we need to differentiate it. Let's define a new method called `cuddle()`:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_20.py

This method accepts the **implicit** argument self, and also accepts the argument `other_pet` - the target of the cuddle.

Here's an example of our new `cuddle()` method in action:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_21.py

#### How do I override an existing methods in a subclass?

We know that in an instance of `CuddlyPet`, we have access all the properties and methods of `Pet`. And now we know that `CuddlyPet` can implement its own new methods.

But what if we wanted `be_alive()` to have a different effect in `CuddlyPet` than it does in `Pet`?

The answer is that we simply redefine the method.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_22.py{4}

By writing a new version of `def be_alive()`, we **override** the version in the `Pet` class. An instance of `CuddlyPet` stays happy for twice as long as your typical `Pet`!

#### Can I override a method, but still call the superclass version?

While a `CuddlyPet` instance stays happy, it might be better if it always started out with different values for `happiness` and `mopiness`.

Whenever we create an instance of `CuddlyPet`, we want to repeat all the steps in creating an instance of `Pet`, but with the traits for happiness baked in.

One option is to override the `__init__()` method, just as we did with `be_alive()`:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_23.py

Here, we are simply disregarding the `happiness` and `mopiness` arguments passed to the constructor and using hard-coded values.

We could take this a little further and remove `happiness` and `mopiness` from the parameter list:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_24.py

But this is not ideal. If we made changes to `__init__()` in the `Pet` class, we would have to repeat those changes in `CuddlyPet` (probably by copying and pasting the code). This problem would extend to any additional subclasses of `Pet` we created. It would be better if we could just call `Pet`'s `__init__()` from `CuddlyPet`'s `__init__()`.

Luckily, Python lets us do just that - we can override `__init()__` while also reusing the `__init__()` code from the superclass. The key is to use the built-in `super()` function to access `Pet`:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/oop_25.py{3}

With this technique, a `CuddlyPet` could accept additional constructor arguments:

```py{2,4,11-12}
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

#### When should I add attributes to the superclass and when should I add them to subclasses?

When you want to make a change to the superclass and all its subclasses, make the change to the superclass. If you only want the change to affect a specific subclass, only change that subclass.

This works both for attributes as well as methods.

### Polymorphism (message passing is agnostic to class)

It's time to add our `while` loop back to our app so we can interact with our `Pet` instances.

We'll build on the previous version of the loop by providing an option to adopt new `Pet` instances (including `CuddlyPet`).

Before we continue, make sure that your `Pet` and `CuddlyPet` class definitions are in a file named `pet.py`:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/pet_0.py

Then, create a file named `main.py` where our `while` loop will go.
In this file, we'll `import` our two classes so we can create new instances.

Here's a skeleton version of our `while` loop, using a few helper functions to collect the user input and make sure the user has made a valid choice:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/main_1.py

#### How do I instantiate while putting it in a list?

Let's fill out the part of our main loop that lets the user adopt a pet. This will prompt the user for a pet name, instantiate the new `Pet`, and add it to the `pets` list:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/main_2.py{6-7}

You'll notice that there was no need to create a variable for the new `Pet`. We are passing the result of `Pet(pet_name)` directly to `pets.append()`.

#### How do I produce a human-readable version of an instance?

If you do the following in a Python prompt:

```py
print(Pet("Fido"))
```

You'll see something similar to the following:

```
<pet.Pet object at 0x7fb7d4224588>
```

That's probably not what you expected. Python is being awfully literal. It's telling us that the printable version of the `Pet` instance is an object located somewhere in the computer's memory - that's the `0x7fb7d4224588` part of what prints out. (When you run the same code, you'll see a different memory address.)

To get a more readable version of a `Pet`, add a `__str__()` method to it:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/pet_1.py{19-25}

Just like `__init__()`, Python will automatically call `__str__()`.

::::tip
`__init__()` and `__str__()` are examples of Python's "magic methods" - methods that are called automatically by Python.

To learn more about them, check the links in the [Additional Resources](#additional-resources) section.
::::

Let's use this as part of our main loop:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/main_3.py{10-13}

#### How do I differentiate between `Pet` and `CuddlyPet`?

You might start to worry that when we mix `Pet` instances and `CuddlyPet` instances in our list that our main loop will get terribly complicated. To avoid this, won't we have to check to see which kind of instance we're dealing with?

Spoiler alert: you don't.

Let's take this in steps. Add an `adoption_menu` variable to hold a list of pet choices. Then, prompt the user to choose a type of pet to adopt:

```py{2-4,12-17}
#...
adoption_menu = [
    "Pet",
    "Cuddly Pet"
]
#...
def main():
    while True:
        choice = get_user_choice(main_menu)
        if choice == 1:
            pet_name = input("What would you like to name your pet? ")
            print("Please choose the type of pet:")
            type_choice = get_user_choice(adoption_menu)
            if type_choice == 1:
                pets.append(Pet(pet_name))
            elif type_choice == 2:
                pets.append(CuddlyPet(pet_name))
            print("You now have %d pets" % len(pets))

        if choice == 4:
            for pet in pets:
                print(pet)

main()
```

At this point, you should be able to adopt either a `Pet` or a `CuddlyPet`. When you choose `4` to `"View status of pets"`, each pet should correctly use `__str__()` to print its status.

In Object-Oriented Programming, this has a special name - **polymorphism**. What this means is that regardless of the class used to create an instance, as long as the class (or its superclass) defines a particular method, the instance can respond to that message.

Put plainly, you don't have to know what kind of thing it is. You only have to pass it a message that it can respond to.

::::tip

#### Method resolution

When you perform a function call, such as `benji.get_love()`, Python checks if that object knows how to `get_love()`. If the class `benji` belongs to didn't define that method, Python checks the superclass. If that class didn't define it, Python checks the superclass of the superclass.

It does this until it finds the method or runs out of superclasses to check.
::::

Now that we have confirmed that we don't need to differentiate between the different kinds of `Pet` objects we're interacting with, it's time to implement the menu options for playing with and feeding them:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/main_5.py{13-18}

For the sake of brevity, we're not prompting the user to tell us which of the `pets` to play with or to feed.

And finally, let's add in the code that runs when we choose to do nothing:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/main_6.py{22-26}

### Composition (not everything should be a subclass)

It's getting pretty tough to play with all these pups! You might consider getting some toys for them, each of which can provide them with a certain amount of happiness.

#### When should I store additional information in another class?

We might think that a toy might just be a Boolean field - does the pet have a toy or not? But what an individual `Pet` could have multiple toys? And what if each toy could provide a certain amount of happiness, or a limited lifespan?

Once we start adding attributes to an attribute, it might be a good time to make another class.

Create a new file `toy.py` with the following class definition:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/toy_0.py

Here's a sketch of the attributes a `Toy` class might have:

|    attribute    | value |
| :-------------: | :---: |
| happiness_bonus |  20   |
|     newness     |  10   |

To implement these, let's define a `__init__()` for the `Toy` class:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/toy_1.py

And finally, we need to define what it means for a `Toy` to be played with. Each time we `use()` a `Toy`, it should decrease in `newness` and it should return a happiness `bonus`.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/toy_2.py{6-11}

#### What is the relationship between a `Pet` and a `Toy`?

As we put bundles of related state and behavior into classes, we make decisions about how the instances of those classes should interact.

A `CuddlyPet` is a kind of `Pet`. But a `Toy` is not a kind of `Pet` - it's a separate concept altogether. A `Pet` (or a `CuddlyPet`) can have toys, perhaps stored in a list attribute of the `Pet` class.

::::tip
The terms "is-a" and "has-a" are used as a common sense way to help us decide what should be a separate class and what should be a subclass.
::::

Let's give every `Pet` a list that can hold toys, starting it as an empty list:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/pet_2.py{8}

Then, modify the `be_alive()` method so that the `Pet` plays with toys when it's not doing anything else.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/pet_3.py{6-7}

We'll make a corresponding change in `CuddlyPet`:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/pet_4.py{6-7}

(Can you think of any ways we could use `super()` instead of repeating the change?)

Now, we're ready to give `Toy`s to the `Pet`s!

#### Giving a `Toy` to a `Pet`

Add a method to `Pet` that lets it receive a toy:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/pet_5.py{3-4}

While we could easily just call `pet.toys.append(Toy())`, this is not good Object-Oriented Programming. We want the `Pet` class to manage its own attributes. The details of how it manages its toys should be its own responsibility. Code that interacts with `Pet` instances should not need to know the details.

In `main.py`, we need to import the `Toy` class, add another option to the `main_menu`, and handle this new choice:

```py{2,12,21-24}
from pet import Pet, CuddlyPet
from toy import Toy

# Begin with no pets.
pets = []

main_menu = [
    "Adopt a Pet",
    "Play with Pet",
    "Feed Pet",
    "View status of pets",
    "Give a toy to all your pets",
    "Do nothing",
]

#...

        if choice == 4:
            for pet in pets:
                print(pet)
        if choice == 5:
            for pet in pets:
                pet.get_toy(Toy())
        if choice == 6:
            # Pet levels naturally lower.
            for pet in pets:
                pet.be_alive()

```

Try your code out, running through all of the menu options. Make sure to check the status of your pets to see that their changes are adjusting to your interactions.

### Summary

In this lesson, you learned how to write classes, customize object instantiation with constructors, define methods, and create subclasses.

## Training Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson above.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section above. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

### Small

#### 1. Overriding `__str__()` in `CuddlyPet`

When you pass a `CuddlyPet` instance to the `print()` function, it uses the `Pet` version of the method.

Override the definition of `__str__()` in `CuddlyPet` so that the return value includes the string `"Extra cuddly"`.

:::details Solution

To override the `Pet` version of `__str__()` so taht `CuddlyPet` has a custom version, add a `def __str__(self)` to `CuddlyPet`:

```py{15-20}
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

    def __str__(self):
        return """
Extra Cuddly %s:
Fullness: %d
Happiness: %d
""" % (self.name, self.fullness, self.happiness)
```

:::

#### 2. Using `super()` in `CuddlyPet.be_alive()`

`CuddlyPet` has a custom version of `be_alive()`, but it's nearly identical to the definition in `Pet`. The only difference is that we subtract `self.mopiness/2` from `self.happiness` for a `CuddlyPet`.

If our Virtual Pets get more complex, we might add more lines to `be_alive()`. It would be tedious to update both versions of `be_alive()`.

One solution is for `CuddlyPet` to call `Pet.be_alive()` and then increase its `self.happiness`. Modify `CuddlyPet.be_alive()` so that it calls `super()` to invoke `Pet`'s version of `be_alive()`.

:::details Solution

```py{7,8}
class CuddlyPet(Pet):
    def __init__(self, name, fullness=50, hunger=5, cuddle_level=1):
        super().__init__(name, fullness, 100, hunger, 1)
        self.cuddle_level = cuddle_level

    def be_alive(self):
        super().be_alive()
        self.happiness += self.mopiness/2
```

:::

### Medium

#### 1. Add a `Treat` class to your `Pet` simulator.

When you give one of your `Pet` objects a treat, prompt the user to choose one of three kinds:

- `ColdPizza`
- `Bacon`
- `VeganSnack`

Create a class for each of these, and customize them so that they have differing effects on the `Pet` object's `fullness` and `happiness` levels.

:::details Solution

First, create a `treat.py` file with a `Treat` class. Give it a constructor that accepts arguments for setting the `yum` and `joy` attributes:

```py
class Treat:
    def __init__(self, yum=10, joy=10):
        self.yum = yum
        self.joy = joy
```

Create three subclasses of `Treat`, each passing in custom values for `yum` and `joy` using `super().__init()`:

```py
class ColdPizza(Treat):
    def __init__(self):
        super().__init__(15, 20)

class Bacon(Treat):
    def __init__(self):
        super().__init__(30, 30)

class VeganSnack(Treat):
    def __init__(self):
        super().__init__(2, 1)
```

Modify your `Pet` class so that it knows how to `eat_treat()`:

```py
class Pet:
    #...
    def eat_treat(self, treat):
        self.fullness += treat.yum
        self.happiness += treat.joy
```

Finally, modify your main program, adding imports and menu options for giving treats to your pets:

```py
from pet import Pet, CuddlyPet
from toy import Toy

# Import your treats
from treat import ColdPizza, Bacon, VeganSnack

#...
# Add a variable for the `treat_menu`
adoption_menu = [
    "Pet",
    "Cuddly Pet"
]

treat_menu = [
    "ColdPizza",
    "Bacon",
    "VeganSnack"
]

#...
# Add to the main menu:
        if choice == 6:
            # Pet levels naturally lower.
            for pet in pets:
                pet.be_alive()
        if choice == 7:
            print("Please choose what type of treat:")
            treat_choice = get_user_choice(treat_menu)
            if treat_choice == 1:
                for pet in pets:
                    pet.eat_treat(ColdPizza())
            if treat_choice == 2:
                for pet in pets:
                    pet.eat_treat(Bacon())
            if treat_choice == 3:
                for pet in pets:
                    pet.eat_treat(VeganSnack())


```

:::

#### 2. Create a `Menu` class for your `Pet` simulator.

Create a `Menu` class that has the following attributes:

- `prompt_text` - the text to show the user

Add the following methods:

- `get_choice()` - shows the user the `prompt_text` and converts their input to an `int`, prompting again if they enter an invalid value.

Modify the `while` loop of your `Pet` simulator so that it uses a `Menu` instance to handle user interaction.

For each additional prompt (such as choosing which kind of `Pet` subclass to adopt), use additional `Menu` instances.

:::details Solution
Start by creating a `menu.py` file with a `Menu` class. Define the `__init__()` so that it accepts `prompt_text` as an argument. Define `get_choice()` but leave it blank for now.

```py
class Menu:
    def __init__(self, prompt_text):
        self.prompt_text = prompt_text

    def get_choice(self):
        pass

```

The functions you called inside of your `while` loop can be moved to this class. They will need to be modified so that they accept the `self` argument. They also need to be modified to call each other using the `self.` prefix.

In addition, the `choices_to_string()` method should use `self.prompt_text` instead of the hard-coded `"Please choose an option: "`

```py{11,17,20,22,29}
class Menu:
    def __init__(self, prompt_text):
        self.prompt_text = prompt_text

    def get_choice(self):
        pass

    def print_menu_error(self):
        print("That was not a valid choice. Try again.\n\n\n")

    def choices_to_string(self, choice_list):
        choice_string = ""
        num = 1
        for choice in choice_list:
            choice_string += "%d: %s\n" % (num, choice)
            num += 1
        choice_string += self.prompt_text
        return choice_string

    def get_user_choice(self, choice_list):
        choice = -1
        choice_string = self.choices_to_string(choice_list)
        while choice == -1:
            try:
                choice = int(input(choice_string))
                if choice <= 0 or choice > len(choice_list):
                    raise ValueError
            except ValueError:
                self.print_menu_error()
        return choice
```

Update `get_choice()` so that it:

- accepts a `choice_list`
- calls `self.get_user_choice()` and passes it `choice_list`

```py
    def get_choice(self, choice_list):
        return self.get_user_choice(choice_list)
```

Modify your main program so that it uses your new `Menu` class.

```py{4,10-12,15,18,41}
from pet import Pet, CuddlyPet
from toy import Toy
from treat import ColdPizza, Bacon, VeganSnack
from menu import Menu

#...


def main():
    app = Menu("Please choose an option: ")
    types = Menu("Please choose the type of pet: ")
    treats = Menu("Please choose a treat: ")

    while True:
        choice = app.get_choice(main_menu)
        if choice == 1:
            pet_name = input("What would you like to name your pet? ")
            type_choice = types.get_choice(adoption_menu)
            if type_choice == 1:
                pets.append(Pet(pet_name))
            else:
                pets.append(CuddlyPet(pet_name))
            print("You now have %d pets" % len(pets))
        if choice == 2:
            for pet in pets:
                pet.get_love()
        if choice == 3:
            for pet in pets:
                pet.eat_food()
        if choice == 4:
            for pet in pets:
                print(pet)
        if choice == 5:
            for pet in pets:
                pet.get_toy(Toy())
        if choice == 6:
            # Pet levels naturally lower.
            for pet in pets:
                pet.be_alive()
        if choice == 7:
            treat_choice = treats.get_choice(treat_menu)
            if treat_choice == 1:
                for pet in pets:
                    pet.eat_treat(ColdPizza())
            if treat_choice == 2:
                for pet in pets:
                    pet.eat_treat(Bacon())
            if treat_choice == 3:
                for pet in pets:
                    pet.eat_treat(VeganSnack())

```

Bonus: the code could be improved further. Instead of passing the `choice_list` to `get_choice()`, it could be passed into the constructor:

```py
    def __init__(self, prompt_text, choice_list):
        self.prompt_text = prompt_text
        self.choice_list = choice_list

    def get_choice(self):
        return self.get_user_choice(self.choice_list)
```

Your `main()` function changes to:

```py{2-4,7,10,33}
def main():
    app = Menu("Please choose an option: ", main_menu)
    types = Menu("Please choose the type of pet: ", adoption_menu)
    treats = Menu("Please choose a treat: ", treat_menu)

    while True:
        choice = app.get_choice()
        if choice == 1:
            pet_name = input("What would you like to name your pet? ")
            type_choice = types.get_choice()
            if type_choice == 1:
                pets.append(Pet(pet_name))
            else:
                pets.append(CuddlyPet(pet_name))
            print("You now have %d pets" % len(pets))
        if choice == 2:
            for pet in pets:
                pet.get_love()
        if choice == 3:
            for pet in pets:
                pet.eat_food()
        if choice == 4:
            for pet in pets:
                print(pet)
        if choice == 5:
            for pet in pets:
                pet.get_toy(Toy())
        if choice == 6:
            # Pet levels naturally lower.
            for pet in pets:
                pet.be_alive()
        if choice == 7:
            treat_choice = treats.get_choice()
            if treat_choice == 1:
                for pet in pets:
                    pet.eat_treat(ColdPizza())
            if treat_choice == 2:
                for pet in pets:
                    pet.eat_treat(Bacon())
            if treat_choice == 3:
                for pet in pets:
                    pet.eat_treat(VeganSnack())

```

:::

### Large

#### 1. Garden simulator

Create the following classes to simulate a garden:

- `Tree` - its shade decreases water loss by `2`
- `Gnome` - each instance adds a `5%` chance of rain
- `Woodchuck` - creates a `5%` chance of a `Tree` disappearing
- `Garden` - has separate lists for instances of `Tree`, `Gnome`, and `Woodchuck`

Create a main `while` loop that runs your simulator. During each turn, your `Garden` may experience rain, or may have a `Woodchuck` move in. For each of its lists, tally up the various percents that an event will occur and use the built-in `random` module to decide what happens during that turn. (See https://docs.python.org/3.5/library/random.html for more information)

Every 10th turn, you have a random chance of earning another `Tree` or `Gnome`.

The simulation ends if you reach `10` `Tree` instances.

##### 2. Adding more classes

- `FruitTree` (a subclass of `Tree`) - after its `water_level` reaches `100`, it should increase its `fruit` attribute by `1`
- `Squirrel` - each one adds a 5% chance that your `fruit` levels will decrease by `1`.

The simulation ends if your `FruitTree` instances are able produce `10` fruits.

## Interview Questions

### Fundamentals

- What is Object-Oriented Programming?
- What are the differences between classes and instances?
- How are super classes and subclasses related?

### Bugfix

When we run this code:

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/squeak.py

We see the following error:

```
TypeError: bite() takes 1 positional argument but 2 were given
```

What needs to be changed in order to make it work?

:::details Solution
The `bite()` method definition is missing one crucial piece: the `self` argument.

// @TODO - embed this/lessons/solving-problems-using-code/object-oriented-programming/code/squeak_solution.py{6}

Remember that all methods at least one argument - a reference to the instance.

Even though you aren't responsible for passing it in (Python does that automatically), this _must_ be declared as the first argument.
:::

### Conceptual

Give some examples of when it is better to use composition instead of inheritance.

### Architect

You are creating a program to manage the inventory of a movie streaming service. What classes would you create? What classes, if any, would inherit from others?

## Additional Resources

- SOLID principals
- History of OOP
  - Also, as opposed to imperative, structured/modular, and FP (https://softwareengineering.stackexchange.com/questions/117092/whats-the-difference-between-imperative-procedural-and-structured-programming)
- [The Python Data Model](https://docs.python.org/3/reference/datamodel.html)
- [A Guide to Python's Magic Methods](https://rszalski.github.io/magicmethods/)
