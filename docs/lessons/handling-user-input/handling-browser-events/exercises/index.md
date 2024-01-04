---
sidebar: auto
---

# Training Exercises

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section [in the lesson](../index.md). The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

## Setup

Start by making a fork of the following repo and then cloning it onto you computer. If you have a DigitalCrafts Projects folder, clone it there.

[https://github.com/DigitalCraftsStudents/exercise-handling-browser-events](https://github.com/DigitalCraftsStudents/exercise-handling-browser-events)

If you would like to see solutions, you can see them below or by switching to the [solutions branch](https://github.com/DigitalCraftsStudents/exercise-handling-browser-events/tree/solutions) on github

## Small

### Log Button Click

Create a button that logs "Button Pressed" to the console when clicked.

:::details Solution
@/lessons/handling-user-input/handling-browser-events/exercises/log-button-click-solution.html
:::

### Log Button Pressed

Create a button that logs "You Left Clicked" to the console when clicked.

- Hint: You will need to access the `event` object.

:::details Solution

``` html
<button id="myButton">Click Me!</button>
<script>
    const button = document.querySelector('#myButton')

    button.addEventListener('click', function(event){
        if(event.button === 0){
            console.log('You Left Clicked')
        }
    })
</script>
```
:::

### Add a scroll event

Add an event to log "You Change the size of the Window!" to the console when a user resizes the browser. The following code is how you would add a 'resize' event. You can use this as a prompt to start the 'scroll' event.

> **Note**: You may also want to research a 'debounce' function. Running an event handler every time the page scrolls can be a heavy procedure and a 'debounce' function will help with that.

``` js
<script>
    window.addEventListener('resize', () => {
        console.log('You Change the size of the Window!')
    })
</script>
```
:::details Solution
``` js
window.addEventListener('scroll', () => {
  console.log('You Change the size of the Window!')
})

// with debounce
let timeout;
const delay = 100; //ms to wait before running function
window.addEventListener('resize', () => {
  timeout = setTimeout(() => {
    console.log('You Change the size of the Window!')
  }, delay)
})
```
:::

## Medium

### Shopping List

Create a Shopping List using Event Listeners and DOM elements

- Use input elements enter in new items for shopping list.
  - Add a button to submit inputs and render the input values to the DOM.
- Add a button to the DOM for each new item in shopping list that can be used to remove the item.

:::details Solution
@/lessons/handling-user-input/handling-browser-events/exercises/shopping-list-solution.html
:::

### MadLib

A Mad Libs is a word game where one player prompts others for a list of words to substitute for blanks in a story before reading the paragraph.

- Look at the example story in the HTML and open it in the browser
- Notice that the story is hidden in the browser but the HTML is still in the document
- Add more inputs for each of the placeholder elements
- Use an event listener on the form to do the following:
  - Replace the contents of the placeholders with the inputs from the form
  - Show the Story
  - Hide the form
  - Make sure you replace all the words. The same word may be used twice in the story!
- Once the story shows, add an event listener to the reset button to do the following:
  - Hide the Story
  - Show the Form
  - Clear out the form inputs

> **Bonus**: Refactor! Are you repeating any code? Can you use functions to make the code less repetitive?

:::details Solution
@/lessons/handling-user-input/handling-browser-events/exercises/madlib-solution.html
:::

## Large

### Calculator

Using the following parameters and starter code to create a calculator.

- Add click handlers to the number buttons
  - Create an array of the numbers clicked, in order
- Add click handlers to the calculation buttons
  - Create an array of the operators
  - Don't let a user start with an operator
  - Don't let a user type multiple operators (i.e. you can't type '--' or '++' or "*+")
- Add click handler to the 'equals' button
  - The 'equals' button needs to trigger a few events (NOTE: These will be functions)
  - Loop through the array of numbers (NOTE: These are currently strings)
  - Convert the strings to integers
  - Write a new array of integers
  - Get an array of the operators
  - Perform each math operation (NOTE: We'll use 4 while loops)
- Add click handler clearing the input on press of clear

:::details HTML
``` html
<!doctype html>
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Calculator</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="wrapper">
    <div class="calculator">
        <div class="input" id="input"></div>
        <div class="buttons">
            <div class="operators">
                <div>+</div>
                <div>-</div>
                <div>*</div>
                <div>/</div>
            </div>
            <div class="leftPanel">
                <div class="numbers">
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                </div>
                <div class="numbers">
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
                <div class="numbers">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div class="numbers">
                    <div>0</div>
                    <div>.</div>
                    <div id="clear">C</div>
                </div>
            </div>
            <div class="equal" id="result">=</div>
        </div>
    </div>
    <p class="u-center">
        Originally forked from: <a href="https://codepen.io/lalwanivikas/pen/eZxjqo">https://codepen.io/lalwanivikas/pen/eZxjqo</a>
    </p>
</div>
<script src="script.js"></script>
</body>
</html>
```
:::

:::details CSS
``` css
body {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

p {
    display: block;
    margin: 2em auto;
}

.u-center {
    text-align: center;
}

.wrapper {
    max-width: 960px;
    margin: 4% auto;
    width: 100%;
}

.calculator {
    border-radius: 1px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    font-size: 1.8rem;
    letter-spacing: 5px;
    margin: 0 auto;
    padding: 20px;
    -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    width: 29rem;
}

.input {
    border: 1px solid #ddd;
    border-radius: 1px;
    font-size: 2.5rem;
    height: 60px;
    margin-right: 6px;
    overflow-x: auto;
    padding-right: 1rem;
    padding-top: 10px;
    text-align: right;
    transition: all .2s ease-in-out;
}

.input:hover {
    border: 1px solid #bbb;
    -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}

.operators div {
    display: inline-block;
    border: 1px solid #bbb;
    border-radius: 1px;
    width: 80px;
    text-align: center;
    padding: 10px;
    margin: 20px 4px 10px 0;
    cursor: pointer;
    background-color: #ddd;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
}

.operators div:hover {
    background-color: #ddd;
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    border-color: #aaa;
}

.operators div:active {
    font-weight: bold;
}

.leftPanel {
    display: inline-block;
}

.numbers div {
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 1px;
    width: 80px;
    text-align: center;
    padding: 10px;
    margin: 10px 4px 10px 0;
    cursor: pointer;
    background-color: #f9f9f9;
    transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
}

.numbers div:hover {
    background-color: #f1f1f1;
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    border-color: #bbb;
}

.numbers div:active {
    font-weight: bold;
}

.equal {
    display: inline-block;
    border: 1px solid #3079ED;
    border-radius: 1px;
    width: 17%;
    text-align: center;
    padding: 127px 10px;
    margin: 10px 6px 10px 0;
    vertical-align: top;
    cursor: pointer;
    color: #FFF;
    background-color: #4d90fe;
    transition: all .2s ease-in-out;
}

.equal:hover {
    background-color: #307CF9;
    -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    border-color: #1857BB;
}

.equal:active {
    font-weight: bold;
}
```
:::

:::details JS
``` js
'use strict';

const input = document.querySelector('#input'), // input/output button
  numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed
```
:::
