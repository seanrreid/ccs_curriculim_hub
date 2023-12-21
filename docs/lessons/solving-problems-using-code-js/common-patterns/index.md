---
title: Common JavaScript Patterns
description: Common JavaScript Patterns
---

## Learning Objectives

After completing this lesson, you will be able to:

1. Use Objects and Arrays to solve common programming problems
2. Use loops to accumulate a String or Number value
3. Search for values in an Array
4. Count number of occurrences in an Array

## Lesson

### Overview

In this lesson, you'll put together the techniques you've learned so far. Using Numbers, Strings, Objects, and Arrays, you'll solve problems that come up frequently when programming. This will involve inspecting, comparing, and modifying variables with loops and functions.

### Accumulating values

When you learned to write loops in the last lesson, we wrote a program that prints the numbers from 1 to 10:

```js
let n = 1;
while (n < 10) {
  console.log(n);
  n++;
}
```

Instead of printing while the loop is running, we could wait until after the loop is finished:

```js{5}
let n = 1;
while (n < 10) {
  n++;
}
console.log(n);
// 10
```

In this version the loop serves one purpose: add `1` until the number reaches `10`. Another way of thinking of this is that it "accumulates" a value. Naturally, this is less efficient than simply writing:

```js
let n = 1 + 10;
console.log(n);
```

However, our goal isn't really to add numbers. Our goal is to uncover ways of using loops to accumulate values. Other kinds of values that can be accumulated include Strings, Arrays, and Objects.

#### Building a String with a loop

Imagine you're sharing a plate of cookies with a friend. The conversation may go as follows (assuming there are 5 cookies):

> One for me, one for you.

> One for me, one for you.

> One for me, none for you.

How would you generate the text of that conversation?

You might start with the "greedy" version that simply counts down:

```js
let n = 5;
while (n > 0) {
  console.log("one for me");
  n--;
}

// one for me
// one for me
// one for me
// one for me
// one for me
```

So far, we're still printing. Instead of printing, let's create a `conversation` variable and "add" the String `"one for me"` to it every time the loop runs (making sure to put the `\n` escape character at the end to create the line break).

```js{2,5,8}
let n = 5;
let conversation = '';
while (n > 0) {
  //console.log('one for me');
  conversation += "one for me\n";
  n--;
}
console.log(conversation);
// one for me
// one for me
// one for me
// one for me
// one for me
```

Behaving like this will leave you with a bellyache and no friends. Let's try sharing:

```js{6,7,13,14}
let n = 5;
let conversation = '';
while (n > 0) {
  conversation += "one for me. ";
  n--;
  conversation += "one for you\n";
  n--;
}
console.log(conversation);
// one for me. one for you
// one for me. one for you
// one for me. one for you
console.log(n);
// -1
```

We keep our friends, but have somehow eaten more cookies than we actually have. Do you see the bug?

The code block of the loop decreases `n` twice. The loop can only check the condition `n > 0` _after_ the code block has finished running. This means that it can keep the block from running again, but it can't stop a block that's already in progress.

To solve this, we need to break the problem down. To help us do that, we'll add some `console.log()` statements inside the body. (The goal is still to accumulate a final String, but using `console.log()` gives us insight into what's happening inside the loop.

```js
let n = 5;
let conversation = "";
while (n > 0) {
  console.log(`${n} cookie: me`);
  conversation += "one for me. ";
  n--;
  console.log(`${n} cookie: you`);
  conversation += "one for you\n";
  n--;
}

// 5 cookie: me
// 4 cookie: you
// 3 cookie: me
// 2 cookie: you
// 1 cookie: me
// 0 cookie: you
```

Here's what we know:

- one person ("me") gets the odd numbered cookies
- the other person ("you") gets the even numbered cookies
- nobody gets cookie #0

Inside of our loop, we can check to see if we're currently on an odd numbered cookie or not (using the Boolean expression `n % 2 !== 0`). Based on that, we can decide who gets the cookie.

```js{4,7,12}
let n = 5;
let conversation = '';
while (n > 0) {
  if (n % 2 !== 0) {
    console.log(`${n} cookie: me`);
    conversation += "one for me. ";
  } else {
    console.log(`${n} cookie: you`);
    conversation += "one for you\n";
  }

  n--;
}
```

On line 4, we've added our `if` statement that checks if `n` is an odd number, allowing us to determine who gets the cookie.

On line 12, we make sure to decrement `n` _outside_ of our conditionals. This ensures that we don't have an infinite loop and that there is no cookie #0. Here's the new output:

```
5 cookie: me
4 cookie: you
3 cookie: me
2 cookie: you
1 cookie: me
```

We can safely remove our `console.log()` statements inside the loop.

```js{4,7,12}
let n = 5;
let conversation = '';
while (n > 0) {
  if (n % 2 !== 0) {
    conversation += "one for me. ";
  } else {
    conversation += "one for you\n";
  }

  n--;
}
console.log(conversation);
```

The output is now:

```
one for me. one for you
one for me. one for you
one for me.
```

There's one more step. We still want to know when there are no cookies left so we can say "none for..." at the end of our String.

How will we know when someone is given the last cookie? We can check if the current cookie is cookie #1:

```js{7-9,13-15}
let n = 5;
let conversation = '';
while (n > 0) {
  if (n % 2 !== 0) {
    conversation += "one for me. ";
    if (n === 1) {
      conversation += "none for you.";
    }
  } else {
    conversation += "one for you\n";
    if (n === 1) {
      conversation += "none for me.";
    }
  }

  n--;
}
console.log(conversation);
```

Here is the final output for our program:

```
one for me. one for you
one for me. one for you
one for me. none for you.
```

Our program is not perfect (the output is formatted oddly if you start with an even number of cookies), but it illustrates two points:

- Use loops to "build up" a String.
- Use conditionals to determine what gets added to a String.

The takeaway is that counting up and counting down is more useful than it first appears.

#### Counting specific items in an Array

In the cookie divider we just wrote, the source of our information was a number. We produced a sequence of numbers by counting down.

Sometimes, you will be given a sequence. Imagine an array of ratings for a product:

```js
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
```

Let's say that this particular product needs at least six 5-star ratings to be featured on the homepage of shopping site. How would you know (without manually counting) whether this is a featured product?

The first thing to do is start with a loop that can print each rating. It's best to use a for-loop for iterating through an Array. (A `while` loop is best when you need fine-grained control of the loop variable.)

```js
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
for (let i = 0; i < ratings.length; i++) {
  console.log(ratings[i]);
}
```

If it prints successfully, you know that the loop is able to access each item in the Array.

Next, add a conditional so that it only prints the 5-star ratings:

```js{3}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
for (let i=0; i<ratings.length; i++) {
  if (ratings[i] === 5) {
    console.log(ratings[i]);
  }
}
```

Our code is getting a little cluttered, so we'll introduce some additional variables:

```js{2,4}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  if (stars === 5) {
    console.log(stars);
  }
}
```

Each time the body of the loop runs, we assign `ratings[i]` to the `stars` variable, giving us a more readable name. The first tiem the body of the loop runs, the value of `stars` is `3`. The second time the body of the loop runs, the value of `stars` is `1`, and the third time, `stars` is `5`.

After that, add a `count` variable that you increment every time you print.

```js{3,7}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const count = 0;
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  if (stars === 5) {
    count++;
    console.log(stars);
  }
}
```

It's OK to comment out the `console.log()` at this point:

```js{3,7}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const count = 0;
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  if (stars === 5) {
    count++;
    //console.log(stars);
  }
}
```

Finally, check the value of `count` to see if it is at least 6:

```js{10}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const count = 0;
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  if (stars === 5) {
    count++;
  }
}
if (count >= 6) {
  console.log('This is a featured product!');
} else {
  console.log('Sorry, no homepage for you.');
}
```

Sadly, this product needs some work:

```
Sorry, no homepage for you.
```

In this example, we determined whether a particular product should be featured on a shopping site's home page. But, the combination of loops and conditionals is a good way to analyze the contents of any Array.

#### Summing Arrays

In a related problem, you may need to add all the numbers in an Array. Here are two arrays, each with the number of votes a candidate received from different polling stations:

```js
const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
```

Which candidate won the election?

As before, we start with a simple for-loop. In this example, the Arrays are the same length, so we can use a single loop. This loop prints the number of votes for a candidate from each polling station (`c1Votes[i]` and `c2Votes[i]`):

```js{4}
const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
const max = c1Votes.length; // c2Votes.length is the same
for (let i=0; i<max; i++) {
  console.log(c1Votes[i]);
  console.log(c2Votes[i]);
}
```

For very long Arrays, printing each item in the Array with `console.log()` isn't practical. But for a short Array, it's a good way to confirm you are on the right track.

Add variables to hold the total votes for each candidate. Inside the loop, add the number of votes for that candidate.

```js{4,5,8,10}
const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
const max = c1Votes.length; // c2Votes.length is the same
let c1Total = 0;
let c2Total = 0;
for (let i=0; i<max; i++) {
  console.log(c1Votes[i]);
  c1Total += c1Votes[i];
  console.log(c2Votes[i]);
  c2Total += c2Votes[i];
}
```

Then compare the totals:

```js{13}
const c1Votes = [996, 139, 80, 591, 217, 817, 235, 846, 141, 60];
const c2Votes = [746, 154, 366, 515, 523, 846, 590, 806, 446, 23];
const max = c1Votes.length; // c2Votes.length is the same
let c1Total = 0;
let c2Total = 0;
for (let i=0; i<max; i++) {
  console.log(c1Votes[i]);
  c1Total += c1Votes[i];
  console.log(c2Votes[i]);
  c2Total += c2Votes[i];
}

if (c1Total > c2Total) {
  console.log('Candidate 1 is the winner!');
} else if (c2Total > c1Total) {
  console.log('Candidate 2 is the winner!');
} else {
  console.log('Time for a run-off. It was a tie!');
}
```

The results are in:

```
Candidate 2 is the winner!
```

Using a loop to access each element of an Array is known as _iteration_ and is a fundamental technique for working with Arrays of data.

### Searching

Strings, Arrays, and Objects are great for holding collections of values. But what if you needed to know if a particular value existed in a collection?

#### Finding the index of an Array item

In the "star-rating" problem earlier in this lesson, you counted the number of 5-star ratings the product received. A related problem is _locating_ a particular item in an Array - that is, determining the index of that item.

Let's say that you have a list of guests at a wedding. When each arrives, they will tell you their name. You tell them their table number for the reception. That data might look like this:

```js
const guests = ["Scarlett", "Plum", "Peacock", "Green", "Mustard", "White"];
const tables = [3, 1, 1, 2, 3, 2];
```

If the information is in two separate Arrays, how do we find the table number if we're given the name?

The thing to keep in mind that the information in the two tables correspond: the first element in `guests` goes with the first element in `tables`, the second element in `guests` goes with the second element in `tables`. (`Scarlett` is seated at table `3`, `Plum` is at table `1`, `Peacock` at `1`, etc.)

The first version will look similar to the loops you've already written. For now, our program will find what table `Mustard` is assigned to.

```js{6,7}
const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
const tables = [3, 1, 1, 2, 3, 2];

const guestToFind = 'Mustard'; // hard-coded in this example

for (let i=0; i<guests.length; i++) {
  if (guests[i] === guestToFind) {
    console.log(`${guestToFind} sits at table ${tables[i]}`);
  }
}
```

Line 6 sets up our loop for iterating through the `guests` list. Line 7 makes sure that we only `console.log()` if we've located that guest.

The second version makes sure to stop the loop once it is found:

```js{9}
const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
const tables = [3, 1, 1, 2, 3, 2];

const guestToFind = 'Mustard'; // hard-coded in this example

for (let i=0; i<guests.length; i++) {
  if (guests[i] === guestToFind) {
    console.log(`${guestToFind} sits at table ${tables[i]}`);
    break;
  }
}
```

The `break` keyword stops a loop immediately.

Though we have found the correct table, it might be useful to save the index, instead of doing our work (printing) inside the loop. Let's add a `foundIndex` variable, initialized to `-1`, which can never be a valid index. (If we do not find the guest's name in the Array, we can use the value `-1` to tell our program to print an appropriate error message.

```js{5,8,12}
const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
const tables = [3, 1, 1, 2, 3, 2];

const guestToFind = 'Mustard'; // hard-coded in this example
let foundIndex = -1;
for (let i=0; i<guests.length; i++) {
  if (guests[i] === guestToFind) {
    foundIndex = i;
    break;
  }
}
if (foundIndex !== -1) {
  console.log(`${guestToFind} sits at table ${tables[foundIndex]}`);
} else {
  console.log(`${guestToFind} is not on the guest list.`);
}
```

The main reason for doing this is so that we can move our searching algorithm into its own function:

```js{4-13}
const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
const tables = [3, 1, 1, 2, 3, 2];

function indexFor(guestToFind) {
  let foundIndex = -1;
  for (let i=0; i<guests.length; i++) {
    if (guests[i] === guestToFind) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
}

const guestToFind = 'Mustard'; // hard-coded in this example
const index = indexFor(guestToFind);
const guestTable = tables[index];
if (index !== -1) {
  console.log(`${guestToFind} sits at table ${guestTable}`);
} else {
  console.log(`${guestToFind} is not on the guest list.`);
}
```

Taking this a step further, we could create a second function that handles our conditional `console.log():

```js{15-23}
const guests = ['Scarlett', 'Plum', 'Peacock', 'Green', 'Mustard', 'White'];
const tables = [3, 1, 1, 2, 3, 2];

function indexFor(guestToFind) {
  let foundIndex = -1;
  for (let i=0; i<guests.length; i++) {
    if (guests[i] === guestToFind) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
}

function printTableFor(guestToFind) {
  const index = indexFor(guestToFind);
  const guestTable = tables[index];
  if (index !== -1) {
    console.log(`${guestToFind} sits at table ${guestTable}`);
  } else {
    console.log(`${guestToFind} is not on the guest list.`);
  }
}

printTableFor('Mustard');
printTableFor('Batman');
```

The output is now:

```
Mustard sits at table 3
Batman is not on the guest list.
```

`printTableFor()` can be used over and over for different guest names. Every time it is called, it calls `indexFor()`.

#### Finding a substring

One way to think of a String is that it is a sequence (like an Array) of individual letters. (Some languages have a separate "Character" data type, but JavaScript is not one of them.)

The next example is a little sci-fi: you're programming a DNA-repair bot. (Don't worry, you don't really need to know anything about DNA. In fact, this example is mostly fiction and almost no science.)

Your DNA-repair bot has a copy of a healthy version of the sequence, consisting only of the letters `G`, `A`, `T`, and `C`:

```
'GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC'
```

But it may encounter a damaged version that contains the letter `Z`:

```
'GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC'
```

The DNA-repair bot would locate the letter `Z` at indexes `3` and `10` and replace them with the corresponding letters from the healthy sequence (`G` and `A`).

To get started, here are three variables containing DNA Strings. The first is the `HEALTHY` version for reference. The other two are samples that the DNA-repair bot will search through, repairing as necessary.

```js
const HEALTHY = "GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC";
let sample1 = "GCTGGGTGGGACACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTTGGGCAACCC";
let sample2 = "GCTZGGTGGGZCACTGTCGTTCCTTACCGCACCGCCACATCATTCACCCTZGGGCAACCC";
```

Our bot needs to look through each sample for the String `Z` and replace it with the corresponding letter from the `HEALTHY` sequence. (And no, it can't simply copy the entire String...that's cheating!)

The first thing we need to understand is that unlike Arrays, you cannot update individual letters in a String. However, we can copy individual letters into a new Array.

The first version of our program copies each letter into the new `sequence` Array using a for-loop, then converts it a String using the `.join()` method:

```js
let sequence = [];
for (let i = 0; i < sample1.length; i++) {
  sequence.push(sample1[i]);
}
sequence = sequence.join("");
```

Next, before we copy the letter into the `sequence` Array, we should check if that letter is `Z`:

```js{4,5,7}
let sequence = [];
for (let i = 0; i<sample1.length; i++) {
  const letter = sample1[i];
  if (letter === 'Z') {
    sequence.push(HEALTHY[i]);
  } else {
    sequence.push(letter);
  }
}
sequence = sequence.join('');
```

If we find a `Z`, we `.push()` the corresponding value from `HEALTHY`. Otherwise, we use the original letter.

Using a loop and indexing, we can iterate through the individual letters of a String. With Strings of the same `.length`, we can copy corresponding letters into a new Array using the common index.

#### in an Object

Let's revisit our star-rating problem. Instead of counting how many 5-star ratings a product has, we want to know how many of each kind of rating a product has received.

Here is the rating data:

```js
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
```

This requires us to count the number of occurrences of each kind of rating. While we could create variables for each rating (e.g., `howMany5Star`, `howMany4Star`, etc.), it might better to use an Object.

After our program is finished, here is an example of the Object it would produce:

```js
{
  '5': 4,
  '4': 4,
  '3': 3,
  '2': 6,
  '1': 3,
}

```

The key names is the rating, and the value is how many times the product received that rating.

To get started, we'll create our for-loop to iterate through the array of ratings:

```js
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
for (let i = 0; i < max; i++) {
  const stars = ratings[i];
}
```

Next, we'll create our `ratingsCount` Object (which we initialize as an empty Object):

```js{3}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const ratingsCount = {};
for (let i=0; i<max; i++) {
  const stars = ratings[i];
}
```

As we iterate through the Array, we'll access one rating a time (`ratings[i]`), which we assign to `stars` to give us a more convenient name. We check `ratingsCount` to see if we have already created a key for that rating.

To be more explicit, before the loop runs, `ratingsCount` is empty:

```js
{
}
```

After the loop runs 1 time, `ratingsCount` has one entry:

```js
{
  '3': 1
}
```

After the loop runs again, `ratingscount` has two entries:

```js
{
  '3': 1,
  '1': 1,
}
```

The third time the loop body runs, we have another entry:

```js
{
  '3': 1,
  '1': 1,
  '5': 1,
}
```

After the loop iterates through the next two elements in the Array, we have:

```js
{
  '3': 1,
  '1': 1,
  '5': 2,
  '2'': 1
}
```

Notice that we incremented the value for `5` because the loop has encountered two 5-star ratings.

Before we write any more code, let's make some notes as comments:

```js{6-8}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const ratingsCount = {};
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  // Check if we already have the key in the ratingsCount object.
  // If so, we increment the value.
  // If not, add a new key to ratingsCount and set the value to 1
}
```

To check whether we have a particular key in an Object, we'll use bracket syntax to "ask" the Object for the value. If it exists, the result is the value. If it does not exist, the result is `undefined` (one of JavaScript's "falsy" values).

:::tip Use bracket syntax if the key is stored in a variable
Bracket syntax is absolutely necessary in the following situation:

```js
const hero = {
  name: "Katie Bouman",
  accomplishment: "First person to photograph a black hole",
};

function printInfo(keyName) {
  console.log(hero[keyName]);
}

printInfo("accomplishment");
// First person to photograph a black hole
```

In the body of the `printInfo()` function, we have a variable whose value is the String `'accomplishment'`. We can do this:

```js
hero[keyName];
```

Because JavaScript interprets that as:

```js
hero["accomplishment"];
// First person to photograph a black hole
```

However, if we try to do this:

```js
hero.keyName;
```

JavaScript interprets that as:

```js
hero["keyName"];
// undefined
```

Remember: dot notation is just a convenience. Whatever word you use after the dot will be interpreted as a String and placed inside of square brackets.
:::

Because the value of a non-existent key is Falsy and a Number is Truthy, we can write our if-condition like so:

```js{7}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const ratingsCount = {};
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  // Check if we already have the key in the ratingsCount object.
  if (ratingsCount[stars]) {
    // If so, we increment the value.
  } else {
    // If not, add a new key to ratingsCount and set the value to 1
  }
}
```

Now, we can increment if it exists:

```js{9}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const ratingsCount = {};
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  // Check if we already have the key in the ratingsCount object.
  if (ratingsCount[stars]) {
    // If so, we increment the value.
    ratingsCount[stars]++;
  } else {
    // If not, add a new key to ratingsCount and set the value to 1
  }
}
```

Or set it to `1` because it's the first time we're "seeing" this rating:

```js{12}
const ratings = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5];
const max = ratings.length;
const ratingsCount = {};
for (let i=0; i<max; i++) {
  const stars = ratings[i];
  // Check if we already have the key in the ratingsCount object.
  if (ratingsCount[stars]) {
    // If so, we increment the value.
    ratingsCount[stars]++;
  } else {
    // If not, add a new key to ratingsCount and set the value to 1
    ratingsCount[stars] = 1;
  }
}
```

JavaScript Objects can help you "keep score" as you process Arrays. We could have used a similar approach to the voting example. But it is even more powerful for the ratings problem. With the voting example, you know that there are only two candidates. With the ratings problem, you don't know how many different star-ratings exist. You can add new keys to Objects at any time, without knowing ahead of time what those keys will be.

### Summary

In this lesson you learned how to use Objects, Arrays, Strings, and Numbers to solve a number of common programming problems. Iterating, counting, and accumulating are a few of the techniques you learned. In future lessons, you will learn to solve larger problems. But many of them will be variations of the ones in this lesson.

## Additional Resources

Here are some built-in functions that can help you do more with Arrays and Objects:

- [Reversing an Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Getting a list of an Object's keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
