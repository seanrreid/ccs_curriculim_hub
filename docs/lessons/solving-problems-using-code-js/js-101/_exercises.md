---
title: JS 101 Exercises
description: JS 101 Exercises
pubDate: 2023-12-15T13:49:22-05:00
---

# JS 101 Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section in the lesson. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

## Small

### Numbers

Let's write some functions that 1) create a variable and 2) return it

#### 1. `myNum`

Define a function called `makeANumber()`.

:::details Solution

```js
function makeANumber() {}
```

:::

Declare a variable `myNum` and assign any number to it, then return `myNum`.

NOTE: `myNum` can be any valid JavaScript number

:::details Solution

```js
function makeANumber() {
  var myNum = 42;
  return myNum;
}
```

:::

#### 2. `myInt`

Define a function called `makeAnInteger()`.

:::details Solution

```js
function makeAnInteger() {}
```

:::

Declare a variable `myInt` and assign an integer to it, then return `myInt`.

:::details Solution

```js
function makeAnInteger() {
  var myInt = 42;
  return myInt;
}
```

:::

#### 3. `myFloat`

Define a function called `makeAFloat`.

:::details Solution

```js
function makeAFloat() {}
```

:::

Declare a variable `myFloat` and assign a floating point number to it, then return `myFloat`.

:::details Solution

```js
function makeAFloat() {
  var myFloat = 3.14159;
  return myFloat;
}
```

:::

#### 4. `zilch`

Define a function called `makeZero()`.

:::details Solution

```js
function makeZero() {}
```

:::

Declare a variable `zilch` and assign the number 0 to it, then return `zilch`.

:::details Solution
function makeZero () {
var zilch = 0;
return zilch;
}
:::

### `undefined`, booleans, and `null`

Let's continue with variable declaration and making more simple types.

#### 5. `makeNothing()`

Define a function called `makeNothing()`. Declare a variable `huh` and assign nothing to it, then return `huh`.

:::details Solution

```js
function makeNothing() {
  var huh;
  return huh;
}
```

:::

NOTE: the value `undefined` means "lack of assignment", which is what this function should return.

#### 6. `makeBoolen()`

Define a function called `makeBoolean()`. Declare a variable `myBool` and assign it either `true` or `false`, then return `myBool`.

:::details Solution

```js
function makeBoolean() {
  var myBool = true;
  return myBool;
}
```

Or:

```js
function makeBoolean() {
  var myBool = false;
  return myBool;
}
```

:::

NOTE: remember that the string `"true"` (surrounded by quotes) is not the same thing as boolean `true` (no quotes).

#### 7. `makeTrue()`

Define a function called `makeTrue()`. Declare a variable `yep` and assign boolean `true`, then return `yep`.

:::details Solution

```js
function makeTrue() {
  var yep = true;
  return yep;
}
```

:::

#### 8. `makeFalse()`

Define a function called `makeFalse()`. Declare a variable `nope` and assign boolean `false`, then return `nope`.

:::details Solution

```js
function makeFalse() {
  var nope = false;
  return nope;
}
```

:::

#### 9. `makeNull()`

Define a function called `makeNull()`. Declare a variable `nothingMuch` and assign `null` to it, then return `nothingMuch`.

:::details Solution

```js
function makeNull() {
  var nothingMuch = null;
  return null;
}
```

:::

### Strings

Let's venture into JavaScript strings in these exercises.
Hold onto your hats: we will be using functions with parameters here too!

#### 10. `helloWorld()`

Define a function called `helloWorld()`. Return the string `"Hello, world!"`.

:::details Solution

```js
function helloWorld() {
  return "Hello, world!";
}
```

:::

#### 11. `helloName()`

Define a function called `helloName()` that accepts 1 parameter (arity of 1). Use the symbol "name" for the parameter name.

:::details Solution

```js
function helloName() {}
```

:::

Return the string `"Hello, <name>!"` where `<name>` is the value passed to the function.

:::details Solution

```js
function helloName(name) {
  return "Hello, " + name + "!";
}
```

:::

#### 12. `abstractLength()`

Return the length of the string "tarPitAbstract" defined below. You may copy and paste the code into your text editor.

> HINT: Use the [.length property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

```js
function abstractLength() {
  const tarPitAbstract =
    "Complexity is the single major difficulty in the successful development of large-scale software systems. " +
    "Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. " +
    "We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. " +
    "To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.";
}
```

:::details Solution

```js{7}
function abstractLength() {
    var tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
    'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
    'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
    'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'

    return tarPitAbstract.length;
}
```

:::

#### 13. `makeLoud()`

Modify the following function, returning the string `chorus` in all capital letters.

> HINT: use the [.toUpperCase method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
> //

```js
function makeLoud() {
  var chorus = "Who let the dogs out?";
}
```

:::details Solution

```js{3}
function makeLoud() {
  var chorus = 'Who let the dogs out?';
  return chorus.toUpperCase();
}
```

:::

#### 14. `makeQuiet()`

In the following `makeQuiet()` function, assume that a string is passed as the parameter `str`.

Return the value of `str` in all lower case letters.

> HINT: use the [.toLowerCase method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

```js
function makeQuiet(str) {}
```

:::details Solution

```js{2}
function makeQuiet(str) {
    return str.toLowerCase();
}
```

:::

### Math

Let's do some grade-school math. Actually: let's have the computer do the math for us :)

This page may be helpful for these exercises: [Arithmetic Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

#### 15. `add99()`

Create a function called `add99()` that takes one argument and adds the number 99 to it.

You can assume that the argument passed in will be a number value.

:::details Solution

```js
function add99(n) {
  return 99 + n;
}
```

:::

#### 16. `add()`

Create a function `add()` that takes 2 arguments and sums them together.

Assume that both arguments are numbers.

:::details Solution

```js
function add(n, m) {
  return n + m;
}
```

:::

#### 17. `subtract()`

Create a function `subtract()` that takes 2 number arguments and returns their difference (i.e., the second number substracted from the first number).

:::details Solution

```js
function subtract(n, m) {
  return n - m;
}
```

:::

#### 18. `multiply()`

Create a function `multiply()` that takes 2 number arguments and returns their product.

:::details Solution

```js
function multiply(n, m) {
  return n * m;
}
```

:::

#### 19. `divide()`

Create a function `divide()` that takes 2 number arguments. Divide the first argument by the second and return the result.

:::details Solution

```js
function division(n, m) {
  return n / m;
}
```

:::

#### 20. `mod()`

The modulus operator (`%`) finds the remainder from division.

Create a function `mod()` that takes 2 number arguments and returns the remainder of the first divided by the second.

:::details Solution

```js
funciton mod(n, m) {
    return n % m;
}
```

:::

### Arrays

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are ordered lists of values. You use them all the time in programming.

#### 21. `threeFruits()`

You can create an Array using the `[]` characters, with commas separating the individual values.

Define a function called `threeFruits()`. Declare a `fruits` variable whose value is the Array `['Apple', 'Banana', 'Cherry']`

Return the array of fruit strings.

:::details Solution

```js
function threeFruits() {
  var fruits = ["Apple", "Banana", "Cherry"];
  return fruits;
}
```

:::

#### 22. `multipleTypes()`

An Array can contain multiple types. ie: strings, numbers, boolean, etc.

Define a function called `multipleTypes()`. Declare a `diverseArray` variable whose value is the Array `['Skateboard', null, 8.75, 'Eiffel Tower', 44, 7, true, null]`.

Return the array of values.

:::details Solution

```js
function multipleTypes() {
  var diverseArray = [
    "Skateboard",
    null,
    8.75,
    "Eiffel Tower",
    44,
    7,
    true,
    null,
  ];
  return diverseArray;
}
```

:::

#### 23. `indexAccess()`

You can access individual values of an array using bracket notation shown below.
Remember that arrays start at index 0. So for an array `myArray` the _first_ item can be accessed at `myArray[0]`.

Define a function called `indexAccess()`. In the function, create a `people` array with the names of 6 people. (These names should be strings!)

:::details Solution

```js
function indexAccess() {
  var people = ["Jenny", "James", "Jimmy", "Jonny", "Julia", "Jessica"];
}
```

:::

Return the third item from the `people` array.

:::details Solution

```js
function indexAccess() {
  var people = ["Jenny", "James", "Jimmy", "Jonny", "Julia", "Jessica"];
  return people[2];
}
```

:::

#### 24. `useLength()`

Define a function called `useLength()`. In the function, create an `arr` array that contains the strings `'a'`, `'b'`, and `'c'`. Return the [length of the array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length).

:::details Solution

```js
function useLength() {
  var arr = ["a", "b", "c"];
  return arr.length;
}
```

:::

#### 25. `usePush()`

Define a function called `usePush()` with an `arr` variable. `arr` should be an array that contains the strings `'a'`, `'b'`, and `'c'`.

Add the string `'d'` to the end of an array using the [.push() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).

Then return the array.

:::details Solution

```js
function usePush() {
  var arr = ["a", "b", "c"];
  arr.push("d");

  return arr;
}
```

:::

#### 26. `useIndefOf()`

You can search an array for an item using the [.indexOf() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf). This method accepts a value as an argument.

It returns either:

- the _first_ index of an item that matches the argument
- or `-1` if there are no matching items

Create a function called `useIndexOf()` with an array `arr`. The array should hold the values `'C'`, `'A'`, `'G'`, `'T'`, `'A'`, `'A'`, `'G'`, `'T'`.

Return the index of `'T'`.

:::details Solution

```js
function useIndexOf() {
  let arr = ["C", "A", "G", "T", "A", "A", "G", "T"];

  return arr.indexOf("T");
}
```

:::

#### 27. `useJoin()`

You can convert an Array into a string using the [.join() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

Define a `useJoin()` function with an array containing the strings `'a'`, `'b'`, `'c'`, `'d'`, `'e'`, `'f'`.

Return the string `'a-b-c-d-e-f'`.

:::details Solution

```js
function useJoin() {
  var arr = ["a", "b", "c", "d", "e", "f"];
  return arr.join("-");
}
```

:::

### Objects

```
// Objects are collections of key/value pairs. You use them all the time in programming.
//
// Useful reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You can create an Object using the {} characters.
// Note the commas between the items.
// Return the object of numbers in the function below.

function threeNumbers () {
  const numbers = { numberOne: 1, numberTwo: 2, numberThree: 3 }

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// An Object can contain any type for each property. ie: strings, numbers, boolean, etc
// Return the object of values in the function below.

function manyTypes () {
  const diverseObject = { name: 'banana', count: 42, isDelicious: true }

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You can access individual values of an object using bracket notation shown below.
// This allows you to write the label (key) assigned to the value and get the value back.
// All Object keys are strings.
// Return the name of the bestFruit Object below.

function keyAccess () {
  const bestFruit = { name: 'banana', count: 42, isDelicious: true }

  // console.assert() allows you to declare things that should be true; it's like
  // a sanity-check for your code.
  // Here we are confirming that object access works like we expect:
  console.assert(bestFruit['name'] === 'banana')
  console.assert(bestFruit['count'] === 42)
  console.assert(bestFruit['isDelicious'] === true)

  // return the name of the bestFruit Object here.

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// You can add properties to an Object by assigning a value to a new key.
// Add the property 'color' and assign it the string 'yellow' in the bestFruit object below.
// Then return the object.

function addKey () {
  const bestFruit = { name: 'banana', count: 42 }

  // Note that before a key is assigned it will always return `undefined`
  console.assert(bestFruit['isDelicious'] === undefined)
  bestFruit['isDelicious'] = true
  console.assert(bestFruit['isDelicious'] === true)

  // Assign 'yellow' to the key 'color' of bestFruit here and return bestFruit

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// When an Object gets large, it is normal to define its properties one-per-line as shown below.
// Create your own object named bootcampStudent and give it 8 properties similar to
// the bootcampInstructor object.
// Return your bootcampStudent object.

function largeObject () {
  const bootcampInstructor = {
    name: 'Susan',
    email: 'susan@bootcamp.digitalcrafts',
    age: 32,
    heightFeet: 5.5,
    favoriteColor: 'green',
    homeTown: 'Houston',
    pet: 'cat',
    ownsCar: true
  }

  // create a bootcampStudent object here similar to bootcampInstructor and return it

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Objects aren't restricted to containing only JavaScript primitive types.
// Remember, JavaScript primitive types include string, number, boolean, null...
// Here is an object which contains a nested array.
// Return the second item in the array favoriteFoods.

function nestedArray () {
  const bootcampInstructor = {
    name: 'Susan',
    favoriteColor: 'green',
    favoriteFoods: [
      'chicken pot pie',
      'salmon',
      'pho'
    ]
  }

  // Note that you can chain the bracket notation to reach into the Object AND into the Array.
  console.assert(bootcampInstructor['favoriteFoods'][0] === 'chicken pot pie')

  // Return the second item of the nested array favoriteFoods

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// When working with Objects, it is most common to use the dot notation to access properties.
// Bracket notation is more flexible, but dot notation is a more convenient, readable syntax.
// Useful Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
//
// Return the name of the bootcampInstructor Object below

function dotNotation () {
  const bootcampInstructor = {
    name: 'Susan',
    favoriteColor: 'green',
    favoriteFoods: [
      'chicken pot pie',
      'salmon',
      'pho'
    ]
  }

  // Some examples of using dot notation vs bracket notation:
  console.assert(bootcampInstructor.name === 'Susan')
  console.assert(bootcampInstructor['name'] === 'Susan')
  const nameString = 'name'
  console.assert(bootcampInstructor[nameString] === 'Susan')

  console.assert(bootcampInstructor.favoriteColor === 'green')
  console.assert(bootcampInstructor['favoriteColor'] === 'green')
  console.assert(bootcampInstructor['favorite' + 'Color'] === 'green')

  console.assert(bootcampInstructor['favoriteFoods'][0] === 'chicken pot pie')
  console.assert(bootcampInstructor.favoriteFoods[0] === 'chicken pot pie')

  // Return the name of the bootcampInstructor Object using dot notation

}

```

## Medium

There are no medium exercises for this lesson.

## Large

There are no large exercises for this lesson.
