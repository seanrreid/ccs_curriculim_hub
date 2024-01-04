---
sidebar: auto
---

# JavaScript Objects

## Learning Objectives

After completing this lesson, you will be able to:

- Use the `object` data type
- Define new objects
- Set and access an object's property values
- Use the keyword `this` 
- Define object's function properties
- Create reusable constructor functions

## Lesson

### JavaScript's Objects

Up to now, you have worked primarily with JavaScript's primitive data types, such as _String_, _Integer_, _Boolean_, `null`, and `undefined`. But if, for example, you were to build an application for managing your friends' contact information or a book of recipes, your code would quickly become too complex to manage.

JavaScript's _Object_ data type is the key to building applications that store complex data. This data type is different from primitive data types . Primitive data types store a single value. Objects may contain multiple values, and each of these values can be a primitive data type or an object.

#### Object Structure

An object can be created with curly brackets `{…}`. Inside of the `{}` we can add our _keys_ and assign them _values_.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 31,
  single: false,
};
```

In the example shown above, we have a `person` object with a 4 properties: `firstName`, `lastName`, `age`, and `single`. separated by commas. The values are assigned to the properties with a `:`. Each of these values can be a different data type such as, `String` ("John" and "Doe"), `Number` (31) or a `Boolean` (false). 


:::tip
Objects are collections of "key-value pairs" which developers usually refer to as _properties_.

They are similar to Python's `dictionary` or Ruby's `Map`.
:::


A property whose value is an [anonymous function](https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions) is called a *method*. 

```js
const person = {
  greet: function() {
    console.log('Hello World!')
  }
};
```

In this example, `greet()` is a method of the `person` object.

### Accessing an Object's Properties

You have already been accessing information stored in objects. For example, when you call a `console.log()` you are accessing the `console` object's `log()` method using the [dot `.`notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors).

An alternative way to access a property is to use the *bracket notation*, in which you specify the key as a string:

```js
person.firstName
// "John"

person["firstName"]
// "John"
```

Bracket notation and dot notation are equivalent, but most developers prefer dot notation because it is shorter.

:::tip
Object property names are strings. You can use anything that can be converted to a _String_, including numbers or booleans.

However, any property name that is not also valid JavaScript variable name (for example, a property name that has a space or a hyphen, or that starts with a number) must be wraped in quotes. They can only be accessed using the bracket notation `[]`.


```js
const anotherPerson = {
  firstName: "Wanda",
  age: 10,
  "favorite-toy": "Commodore 64"
};

anotherPerson["favorite-toy"]
// "Commodore 64"

anotherPerson.favorite-toy
// ReferenceError: toy is not defined
```

In this example, JavaScript interprets `anotherPerson.favorite-toy` as "subtract  the value of `toy` from the value of `anotherPerson.favorite`.

:::

#### Accessing Property Values

Here is the full version of our `person` object so far:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 31,
  single: false,
  greet: function() {
    console.log('Hello World!')
  }
};
```

We can access the value of the properties of an object using dot notation.

```js
const first_name = person.firstName 
console.log(first_name) 
// John
```

We can also call the method of our `person` object in the same way as we would a function.

```js
person.greet() 
// Hello World!
```

#### Assigning New Properties and Methods

You can add new properties and methods to existing objects.
Let's add the property `hairColor` to the `person` object.

```js
console.log(person.hairColor); 
// undefined

person.hairColor = "Brown";

console.log(person.hairColor); 
// "Brown"
```

:::warning
Unassigned properties of an object are `undefined`.
:::

In this example, we once again access the person object with dot notation but this time we are using `=` to assign a value to our new property. You can also use this to reassign a existing method or property.


```js
person.greet = function() {
  console.log("I've been reassigned!");
}

person.greet() 
// I've been reassigned!
```

#### Iterating Over Keys

To loop over the keys of an object, use [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in):

```js
for (property in person) {
  console.log(`${property}`);
}
```

Running this loop would show the object's property names in the console:

```
firstName
lastName
age
single
greet
```

You can combine this with the bracket notation to access the values:

```js
for (property in person) {
  console.log(`${property}: ${person[property]}`);
}
```


```
firstName: John
lastName: Doe
age: 31
single: false
greet: function() {
  console.log('Hello World!')
}
```

Another way to access the keys is to use the `Object.keys()` method:

```js
console.log(Object.keys(person));
// ["firstName", "lastName", "age", "single", "greet"]
```

### Creating New Objects

JavaScript provides multiple ways to create new objects.

#### Object Literal Syntax

The Object Literal syntax is the easiest way to create an object - use `{}` with key/value pairs separated by `:`. 

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 31,
  single: false,
  greet: function() {
    console.log('Hello World!')
  }
}
```

#### The `new` Keyword

Calling `new Object()` returns an empty object.

```js
const person = new Object();
```

You can add properties and methods as before.

```js
person.firstName = "John";
person.lastName = "Doe";
person.age = 31;
```

:::tip
A function that can be used with the `new` keyword is called a *constructor*.

Examples of built-in constructors are `Object()`, `String()`, `Number()`, and `Date()`. 
:::

#### Creating a Construtor

A constructor function allows us to create a reuseable "blueprint" for an object. This is ideal when you need to create many objects with the same property names.

A constructor function is just like any other JavaSript function you would write. It can accept arguments and can contain any valid JavaScript expressions, such as variable declarations, `if/else`, and loops.

But constructors have access to a special keyword: `this`. You can use it to refer to the new object that is being created for you.

```js
function Person(fName, lName, age, single) {
  this.firstName = fName
  this.lastName = lName
  this.age = age
  this.single = single
  this.status = "Active"
  this.greet = function() {
    console.log(`Hello, I'm ${fName} ${lName}. I am ${age}.`)
  }
}
```

This constructor function accepts arguments that are used as our new object's property values. Even though there is no `return` statement, the constructor will return the new object:

:::warning
You should *not* include a `return` statement when writing a constructor. JavaScript handles this automatically when you use the `new` keyword.
:::

```js
const john = new Person("John", "Doe", 31, false);
const jane = new Person("Jane", "Doe", 29, false);
```

In the example, we are creating `john` and `jane` objects using the same `Person` constructor function. We pass the values that will be assigned to our new objects. We can then access those properties: 


```js
console.log(john.firstName) 
// John
console.log(jane.firstName) 
// Jane
console.log(john.status) 
// Active

console.log(jane.greet()) 
// Hello World
```

Note that we do not need to pass in a value for `status` or `greet`. Those will be the same for each new object created using the `Person` constructor.


:::tip
An object created using a constructor function is an *instance* of that constructor.
:::

:::warning

You must use the [`new` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) when you use a constructor.

If you do not, JavaScript will not create the instance, and your variable will be `undefined.

```js
const john = Person("John", "Doe", 31, false);
console.log(john);
// undefined

console.log(john.firstName);
// TypeError: john is undefined
```
:::


#### What About 'this'?

As we mentioned earlier, the keyword [`this` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) lets us access the object that JavaScript creates for us. In a constructor, we use it to set the properties of our new object. In a method, it gives us access to those properties.

Here is a modified version of our `greet()` method:

```js
this.greet = function() {
  console.log(`Hello, I'm ${this.firstName} ${this.lastName}. I am ${this.age} years old.`)
}
```

After we make that change and run our code again, calling `jane.greet()` would display the following: `Hello, I'm Jane Doe. I am 29 years old`. 

Likewise, if we call `john.greet()`, the console would show `Hello, I'm John Doe. I am 30 years old`.

Though there is no change to the output in our simple example, you will learn much more advanced uses of the keyword `this` in upcoming lessons.


### Summary

Objects are the building block of all data structures in JavaScript. The properties and methods of objects can be accessed using [dot or bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

By creating constructor functions, we can create blueprints that can be used for structuring similar objects.

The [`this` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) is used to refer to the object instance, allowing us to create and access its properties.

## Training Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson above.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section above. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

### Small

#### Object Literal

Create a object literal of a dog or cat.

You should:
- have at least 2 properties (any data type)
- have one method

#### A `new` Object

Create a object using a constructor function dog or cat.

You should:
- have at least 2 properties (any data type)
- have one method

#### Accessing Properties and methods

Use the constructor from the previous exercise to create a new instance of the object using the `new` keyword.

You should:
- create one 'instance' of your cat or dog
- access and assign the properties to a variable

- After building the object, access each property and method using the dot notation (object.property).
- Access each value using the bracket notation (object["property"]).
- Can you access all methods, properties, objects, and arrays using both methods? 

### Medium

No Medium Exercises

### Large

No Large Exercises

## Interview Questions

### Fundamentals

- What is an Object?
- What are properties and how do you access them?
- Explain what it means when a developer says that "everything in JavaScript is an Object".

### Bugfix

Fix the following code:

```js
function Animal(name, fur, color, sound){
  this.name = name
  this.fur = fur
  this.color = color
  this.sound = sound
  this.makeNoise = {
    console.log(`${name} ${sound}`)
  }
}

const bear = new Animal('bear', true, 'brown', 'roar');
```


:::details

The method of the Animal constructor has some mistakes. 

```js
this.makeNoise = function() {
    console.log(`${this.name} ${this.sound}`)
  }
```

1. The first line fixes the incorrect syntax for declaring a method. It should be assigned a anonymous function. 
2. The second line adds the missing `this` keywords in the `console.log()`. 

:::

### Conceptual

- Is the keyword `this` used only for objects?
- How are JavaScript Objects Similar/different to Python's Classes?

### Architect

How would you use constructors to write better DOM manipulation code?

## Additional Resources

- [MDN - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Understanding the 'this' Keyword](https://medium.com/better-programming/understanding-the-this-keyword-in-javascript-cb76d4c7c5e8)
- [Magic of 'this' Keyword](https://www.freecodecamp.org/news/the-magic-of-the-this-keyword-in-javascript-ce3ce571013e/)
- [Everything is an Object](https://gomakethings.com/everything-is-an-object-in-javascript/)
- [Video - JavaScript 'this' Keyword](https://www.youtube.com/watch?v=gvicrj31JOM)
- [Video - Object Constructors in JavaScript](https://www.youtube.com/watch?v=e1yBONtbTuA)
