---
sidebar: auto
---

# HTML 101

## Learning Objectives

After completing this lesson, you will be able to:

1. Understand the basics of HTML
2. Write HTML
3. Use a handful of most-used HTML elements

## Lesson

### Overview

**Hypertext Markup Language (HTML)** is a markup language used for creating content to be displayed by a web browser. A markup language is a way to create structure and annotate each piece of a document. Think about a newspaper, it has columns, headings, images, quotes and more. Each piece of the newspaper page needs to clearly define hierarchy and structure to help the user make sense of the content.

The same way a newspaper uses different elements to create a clear way for the reader, HTML is a foundation for creating digital structure for content on the web.

#### HTML Basics

Here is a sample of a basic HTML document:

```html
<html>
  <body>
    <h1>Page Heading</h1>
    <div>
      <h2>Content Heading</h2>
      <p>The quick brown fox jumps over the lazy dog</p>
      <img src="./cute-cat.jpg" alt="Photo of cat" />
    </div>
  </body>
</html>
```

Here is how that document is rendered with a browser:

![html preview](./html-sample-preview.png)

#### HTML Syntax

"Syntax" is a term used for describing how a programming langues uses the order of characters to define structure and meaning.

An HTML element is made of an opening tag: `<div>` and a closing tag: `</div>` (notice the forward slash `/` directly after the `<`). Together, the opening and closing time together make an HTML element (ex: `<div></div>`).

An opening tag supports attributes to add more detailed annotation to the element. An attribute is always inside the opening tag, separated by a space `<div class="value">`.

There are many attributes, some are global (ex: `class`) and can be put on any element, while others are specific to the element (ex: `href` attribute on `<a>`). As you begin to write HTML you will learn about more attributes and how to use them.

#### Creating a Valid HTML Document

To create a valid HTML document, browsers require specific elements:

```html
<html>
  <head>
    <title>Sample Title</title>
  </head>
  <body></body>
</html>
```

The `<html>` element is the top parent, then `<head>` and `<body>` are direct children. A `<title>` tag goes inside the `<head>` and will populate the browser's tab. All of the content of the page will go in the `<body>` element.

### Summary

- HTML creates **structure** for the web (think newspapers)
- HTML is made up of **elements**
- HTML elements have an opening and closing **tags**
- HTML opening tags can include **attributes** with values
- HTML is made up of **html, head, title, and body elements**

<!--
## Training Exercises

### Small

#### 1. HTML Exercises

This is a collection of HTML snippets to practice. Read the content and recreate the HTML structure described.

1. Headings

<div style="background-color: #eeeeee; padding: 20px;">
  <h1>You can write your thoughts here</h1>
  <h2>Or rant about whatever grinds your gears</h2>
  <h3>Like that Jeremy guy, for example</h3>
  <h4>I mean, like what is his deal?</h4>
  <h5>Why does he drink so much Coke Zero? Weird...</h5>
</div>

2. Nesting Tags

<div style="background-color: #eeeeee; padding: 20px;">
  <div>This exercise is about nesting div tags</div>
  <div>
    This div contains this text and the div tag below.
    <div>
      Hi, I'm the div tag that was mentioned in my parent div! I contain this text and two other children divs
      <div>
        Hi! Our parent was just talking about us. Please make sure you indent this example appropriately.
        <div>Hi! Our parent was just talking about us. Please make sure you indent this example appropriately.</div>
      </div>
    </div>
  </div>
</div>

3. Lists

<div style="background-color: #eeeeee; padding: 20px;">
  <p>This exercise is about making lists</p>

  <p>Here's what I like about lists:</p>
  <ul>
    <li>They're useful for displaying lists of stuff</li>
    <li>That's about it</li>
    <li>I'm gunna put another list item here because doing things in threes is cool</li>
  </ul>

  <p>When you make a list, do it in this order:</p>

  <ol>
    <li>Decide if it's an ordered list or not</li>
    <li>If it's not an ordered list, use the ul tag, otherwise use the ol tag</li>
    <ul>
      <li>Use li tags nested in the list for your list items</li>
      <ol>
        <li>Curveball! You can nest lists inside each other</li>
      </ol>
    </ul>
    <li>You've got this, I believe in you!</li>
  </ol>
</div>

4. Lines

<div style="background-color: #eeeeee; padding: 20px;">
  <h3>Lines. So many lines.</h3>
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <br>
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <br>
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <br>
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <br>
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <br>
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <br>
  <hr style="border: 1px solid black; margin: 0 0 1px;">
  <br>
  <small>I'm sorry...</small>
</div>

5. Styling Text

<div style="background-color: #eeeeee; padding: 20px;">
  <p>Here's a couple ways you can express yourself</p>
  <ul>
    <li>If you want to sound normal, just use a regular li tag here</li>
    <li><em>If you want to sound interesting, try the italics tag</em></li>
    <li><strong>If you want to sound annoying, try the bold tag</strong></li>
  </ul>
  <p>You did it! You should be proud of yourself</p>
  <p><strong><em>yOu DiD iT! yOu ShOuLd Be PrOuD oF yOuRsElF</em></strong></p>
</div>

6. Images

<div style="background-color: #eeeeee; padding: 20px;">
  <p>For this exercise:</p>
  <p>I want you to Google image search your full name and place the first result here:</p>
  <img src="./html-example-person.png" alt="photo of man" width="200px">
  <p>Use the "width" attribute to make the image 200 pixels wide</p>
</div>

7. Links

<div style="background-color: #eeeeee; padding: 20px;">
  <p>This exercise is simple</p>
  <p>Just link to any website on the internet and make the link text "Click me"</p>
  <a href="https://google.com">Click Me</a>
</div>

8. Linking Images

<div style="background-color: #eeeeee; padding: 20px;">
  <p>This is the last exercise</p>
  <p>Take the image from example 7 and turn it into a link that takes you to the webpage from example 8!</p>
  <a href="https://google.com">
    <img src="./html-example-person.png" alt="photo of man" width="200px">
  </a>
</div>

### Medium

#### Sample Document

Now it's time to create your first valid HTML document. Make sure to include the following:

- Name the file `sample.html`
- Add all of the proper HTML elements to create a valid document
- Add headings, paragraphs and images to the body of the document
- Go to the [w3 Schools's HTML Element Reference page](https://www.w3schools.com/html/html_elements.asp) and pick one or two elements you haven't used yet and put it in the page
- Group your sample content inside `<div>` elements into some clear structure

Open your HTML with your web browser and look at your results!

### Large

Since this is a basic lesson there is no large HTML exercise at this time. There will be more opportunities to grow your HTML skills in the upcoming lessons.

## Interview Questions

### Fundamentals

- What is HTML?
- Are all HTML elements made of opening and closing tags?
- How many heading tags are there in HTML?
- What's the difference between a button and anchor tag?
- How do you display the copywrite character in HTML?
- What is an empty element?
- What is something new added in HTML5?
- What are the advantages/disadvantages to using `<meta name="viewport" content="width=device-width, initial-scale=1">`

### Bugfix

None available at this time.

### Conceptual

None available at this time.

### Architect

None available at this time.

[Additional Questions](https://www.javatpoint.com/html-interview-questions) -->

## Additional Resources

- [HTML Cheat Sheet](https://hostingreviewbox.com/wp-content/uploads/2016/02/html5-cheat-sheet-1.png)
- [w3schools HTML elements reference](https://www.w3schools.com/html/html_elements.asp)
- [MDN web docs - HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [The History of HTML and How It Revolutionized the Internet](https://www.thoughtco.com/history-of-html-1991418)
