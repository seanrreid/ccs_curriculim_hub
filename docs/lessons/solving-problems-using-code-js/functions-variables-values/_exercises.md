---
title: Programming Fundamentals Exercises
description: Programming Fundamentals Exercises
pubDate: 2023-12-15T13:49:22-05:00
---

# Programming Fundamentals Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section in the lesson. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

## Small Exercises

### 1. Writing a recipe

1. Create a new folder called `recipe-exercises` and add a file called `script.js` inside of it (using the `mkdir` and `touch` commands).

:::details Solution

```sh
mkdir recipe-exercises
cd recipe-exercises
touch script.js
```

:::

2. Write out a function definition called `marinaraSauce()`. Be sure to be mindful of your syntax!

:::details Solution

```sh
// Define the marinaraSauce() function
function marinaraSauce() {

}
```

:::

3. Inside this function, write a series of `console.log();` statements that will print the following marinara sauce recipe:

```
- Heat a medium-large saucepan over medium heat.

- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes

- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.

- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes

- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.
```

:::details Solution

```js{3-11}
// Define the marinaraSauce() function
function marinaraSauce() {
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}
```

:::

4. After your function definition, write the line of code that will invoke your function

:::details Solution

```js{15}
// Define the marinaraSauce() function
function marinaraSauce() {
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
```

:::

5. Run your script with node script.js. You should see your recipe printed to the screen!

:::details Solution

```sh
node script.js
```

:::

### 2. Using Parameters

1. In your function definition, change `marinaraSauce()` to take one parameter called `cookName`.

:::details Solution

```js{2}
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
```

:::

2. Use `cookName` to print "Hey, cookName! This is my marinara sauce recipe!" before the recipe.

:::details Solution 1
You can concatenate strings and variables using the `+` operator:

```js{3}
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
```

:::

:::details Solution 2
This version uses the [Template literal syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```js{3}
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log(`Hey, ${cookName}! This is my marinara sauce recipe!`);
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
```

:::

3. Change your function invocation to take "Adam" as a `cookName`

:::details Solution

```js{16}
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
```

:::

4. When you run your script, you should see "Hey, Adam! This is my marinara sauce recipe!", followed by the recipe.

### 3. Using Variables

1. A the top of your function definition, define a variable called `two`, and assign it the number value `2`.

:::details Solution

```js{3}
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    var two = 2;
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
```

:::

2. Define another variable called "oneFourth", and assign it the string value `"1/4"`.

:::details Solution

```js{4}
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    var two = 2;
    var oneFourth = "1/4";
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
```

:::

3. Use string concatenation (i.e. the "+" sign) to replace any instance of 2 or 1/4 that occurs in the recipe.

:::details Solution

```js{4}
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    var two = 2;
    var oneFourth = "1/4";
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add " + two + " tspns of oil and 5 carlic cloves, cook until golden, about " + two + " minutes");
    console.log();
    console.log("- Add " + oneFourth + " cup water, " + two + " cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in " + oneFourth + " cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
```

:::
