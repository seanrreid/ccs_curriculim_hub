---
sidebar: auto
---

# CSS Floats

## Learning Objectives

After completing this lesson, you will be able to:

1. Float HTML elements using CSS
2. Create layout using floats
3. Clear floats

## Lesson

### Overview

`float` is a CSS property that allows a developer to position an HTML element to the left or right of other elements. In this lesson we will discuss the multiple ways to float an element as well as how to deal with common problems that come up with this property.

### HTML Flow

In order to understand the `float` property it's important to understand the flow of HTML elements. By default, elements flow through a web page from top to bottom and left to right as they are defined in the HTML document.

#### Default Flow

Here is an example of the default behavior of elements when an image is defined just before text.

<!-- <div style="background-color: #eee; padding: 10px;">
  <p><img src="https://picsum.photos/100" alt="placeholder"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat id asperiores at ad odit aperiam harum repellendus commodi magni, modi eligendi iure veniam ipsam dolorem dolor nesciunt consectetur quia eveniet possimus quibusdam laborum est explicabo? Autem optio obcaecati ducimus, maxime cum molestias, vero facere esse corporis accusantium</p>
</div> -->

#### Float Left

When adding `float: left` to the image, you can see the image's behavior changes and the text wraps itself around the image.

<!-- <div style="background-color: #eee; padding: 10px;">
  <p><img src="https://picsum.photos/100" alt="placeholder" style="float: left"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat id asperiores at ad odit aperiam harum repellendus commodi magni, modi eligendi iure veniam ipsam dolorem dolor nesciunt consectetur quia eveniet possimus quibusdam laborum est explicabo? Autem optio obcaecati ducimus, maxime cum molestias, vero facere esse corporis accusantium aperiam</p>
</div> -->

#### Float Right

When using `float: right` the behavior changes slightly. The image now aligns itself to the right of the container it's in and the text moves to the image's default position and wraps around the image on the right.

<!-- <div style="background-color: #eee; padding: 10px;">
  <p><img src="https://picsum.photos/100" alt="placeholder" style="float: right"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat id asperiores at ad odit aperiam harum repellendus commodi magni, modi eligendi iure veniam ipsam dolorem dolor nesciunt consectetur quia eveniet possimus quibusdam laborum est explicabo? Autem optio obcaecati ducimus, maxime cum molestias, vero facere esse corporis accusantium aperiam</p>
</div> -->

#### Source Order Matters

In the examples above, the image is always defined before the text. That's because the float property restructures the flow of the elements from where it is set in the doucment down. If you call the image after the text with the float property you will simply have a floating image on its own.

<!-- <div style="background-color: #eee; padding: 10px; margin-bottom: 100px">
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat id asperiores at ad odit aperiam harum repellendus commodi magni, modi eligendi iure veniam ipsam dolorem dolor nesciunt consectetur quia eveniet possimus quibusdam laborum est explicabo? Autem optio obcaecati ducimus, maxime cum molestias, vero facere esse corporis accusantium aperiam<img src="https://picsum.photos/100" alt="placeholder" style="float: left"></p>
</div> -->

### Dealing with Overflow

In the last example, you can see the image bleeds outside of the container, this is called overflow. By default, elements will flow over their parent elements if a property like `float` or certain `position` values are used. This can be adjusted using the `overflow` property.

Overflow works across the x and y axis of the document. For the example above, setting the container to `overflow: auto` will change the element to allow elements that overflow (like a floating image) to remain inside the container element.

<!-- <div style="background-color: #eee; padding: 10px; overflow: auto;">
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat id asperiores at ad odit aperiam harum repellendus commodi magni, modi eligendi iure veniam ipsam dolorem dolor nesciunt consectetur quia eveniet possimus quibusdam laborum est explicabo? Autem optio obcaecati ducimus, maxime cum molestias, vero facere esse corporis accusantium aperiam<img src="https://picsum.photos/100" alt="placeholder" style="float: left"></p>
</div> -->

### Clearing Floats

The next most common issue when floating elements is when floated elements overlap, but should not. Adding the `clear` property to an element prevents previously floated elements from interacting with it.

For example, if we add `clear: left` to the paragraph element, then even if we float an image before a paragraph the clear property will ignore the image that is floated to the left above it.

<!-- <div style="background-color: #eee; padding: 10px; overflow: auto;">
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat id asperiores at ad odit aperiam harum repellendus commodi magni, modi eligendi iure veniam ipsam dolorem dolor nesciunt consectetur quia eveniet possimus quibusdam laborum est explicabo? Autem optio obcaecati ducimus, maxime cum molestias, vero facere esse corporis accusantium aperiam<img src="https://picsum.photos/100" alt="placeholder" style="float: left"></p>
  <p style="clear: left;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quaerat id asperiores at ad odit aperiam harum repellendus commodi magni, modi eligendi iure veniam ipsam dolorem dolor nesciunt consectetur quia eveniet possimus quibusdam laborum est explicabo? Autem optio obcaecati ducimus, maxime cum molestias, vero facere esse corporis accusantium aperiam</p>
</div> -->

### Wrapping

Something to keep in mind is that an element can only float inside the size of its parent container. As shown above, some elements may overflow depending on its position. But what happens when multiple elements float next to each other?

In this example, a group of blocks will all be set to `float: left` and notice what happens as the element reaches the width of the container.

<!-- <div style="background-color: #eee; padding: 10px; overflow: auto;">
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
  <div style="background-color: white; border-radius: 10px; float: left; padding: 10px; font-size: 60px; line-height; 1;">🍬</div>
</div> -->

The elements wrap to the next line when floated elements reach the width of the container. Since all of these elements are floating it's important to include the `overflow` property as mentioned before.

### Layout Example

Wrapping an image around text is a simple example. How can floats be used to create a website's layout? We will have to use all of the properties to achieve a bug free result.

First, a header can be created by floating an image and menu items inside the header.

```html
<header class="header">
  <ul class="header-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <h1 class="header-title">Acme Inc.</h1>
</header>
```

```css
.header {
  overflow: auto;
  /* since all the elements are floating,
     setting overflow will allow the rest of
     the layout to flow properly */
}
.header-menu {
  float: right;
  list-style-type: none;
}

.header-menu > li {
  float: left;
  padding-right: 10px; /* whitespace */
}
```

<!-- <header style="background-color: #eee;">
  <ul style="float: right; list-style-type: none;">
    <li style="float: left; padding-right: 10px;"><a href="#">Home</a></li>
    <li style="float: left; padding-right: 10px;"><a href="#">Blog</a></li>
    <li style="float: left; padding-right: 10px;"><a href="#">About</a></li>
    <li style="float: left; padding-right: 10px;"><a href="#">Contact</a></li>
  </ul>
  <h1>Acme Inc.</h1>
</header> -->

Notice that the menu is floating to the right, but the individual menu items are floating to the left. You can mix and match the property however best fits. If you float individual items to the right they will be display in the reverse order from right to left.

Continuing with the layout, to add a sidebar and main content one of the elements will have to float next to the other. For this example we'll float the sidebar to the right of the main content.

```css
.container {
  overflow: auto; /* don't forget to adjust the overflow */
  clear: both;
}

.sidebar {
  float: right;
  padding: 10px;
}
```

```html
<div class="container">
  <aside class="sidebar">
    ...
  </aside>
  <main>
    <h2>Headline</h2>
    ...
  </main>
</div>
```
<!--
<div style="background-color: #eee; overflow: auto; padding: 10px;">
  <header style="overflow: auto">
    <ul style="float: right; list-style-type: none;">
      <li style="float: left; padding-right: 10px;"><a href="#">Home</a></li>
      <li style="float: left; padding-right: 10px;"><a href="#">Blog</a></li>
      <li style="float: left; padding-right: 10px;"><a href="#">About</a></li>
      <li style="float: left; padding-right: 10px;"><a href="#">Contact</a></li>
    </ul>
    <h1 style="margin: 0">Acme Inc.</h1>
  </header>

  <aside style="float: right; padding: 10px;">
    <h3 style="margin: 0">Categories</h3>
    <ul>
      <li><a href="#">Finance</a></li>
      <li><a href="#">Hiring</a></li>
      <li><a href="#">Marketing</a></li>
      <li><a href="#">Sales</a></li>
      <li><a href="#">Culture</a></li>
    </ul>
  </aside>
  <main>
    <h2 style="margin: 0">Headline</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
      asperiores ullam eligendi id, explicabo libero eos iste sunt aliquam alias
      voluptatum numquam natus quibusdam minima eveniet molestiae illum! Ratione
    </p>
  </main>
</div> -->

Finally when adding the footer it's important to clear all previous floats.

```css
.footer {
  clear: both;
}
```
<!--
<div style="background-color: #eee; overflow: auto; padding: 10px;">
  <header style="overflow: auto">
    <ul style="float: right; list-style-type: none;">
      <li style="float: left; padding-right: 10px;"><a href="#">Home</a></li>
      <li style="float: left; padding-right: 10px;"><a href="#">Blog</a></li>
      <li style="float: left; padding-right: 10px;"><a href="#">About</a></li>
      <li style="float: left; padding-right: 10px;"><a href="#">Contact</a></li>
    </ul>
    <h1 style="margin: 0">Acme Inc.</h1>
  </header>

  <aside style="float: right; padding: 10px;">
    <h3 style="margin: 0">Categories</h3>
    <ul>
      <li><a href="#">Finance</a></li>
      <li><a href="#">Hiring</a></li>
      <li><a href="#">Marketing</a></li>
      <li><a href="#">Sales</a></li>
      <li><a href="#">Culture</a></li>
    </ul>
  </aside>
  <main>
    <h2 style="margin: 0">Headline</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
      asperiores ullam eligendi id, explicabo libero eos iste sunt aliquam alias
      voluptatum numquam natus quibusdam minima eveniet molestiae illum! Ratione
    </p>
  </main>
  <footer style="clear: both; text-align: center;">Acme Inc. All rights reserved.</footer>
</div> -->

:::warning Layout is Dynamic
Keep in mind that if you use floats for layout that every page will be slightly different reguarding content and the height of elements. That's why it's important to properly test different lengths of content and using the `overflow` and `clear` properties appropriately.
:::

### Summary

The `float` CSS property is used to adjust HTML elements to float and wrap around other elements withing the flow the the document. You can float left or right and can even float multiple items next to each other.

We also covered `overflow` to deal with floated content inside its container as well as `clear` to prevent unwanted elements from interacting with floated elements.

Lastely, we covered how to create a layout using floats by combining everything covered in the lesson.

## Training Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson above.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section above. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

### Small

#### Navigation

Create a basic navigation by floating list items next to each other. Use the `list-style-type: none` property on the `ul` element to remove the "•". Make a menu of at least 5 items (ex: "Home", "About", "Blog", etc...)

:::details View Navigation Solution
/lessons/front-end-foundations/css-floats/navigation-solution.html
:::

#### Blog Post

Create a blog post made up of half a dozen paragraphs or more (can be fake text). Add three photos and float them left and right throughout the post. It will should look like a magazine style editorial piece, get createive and use your existing CSS knowledge to give it some style.

:::details View Blog Post Solution
/lessons/front-end-foundations/css-floats/blog-post-solution.html
:::

### Medium

#### Grid

Create a 9x9 grid using floats. Put all 9 elements in the same container and set a `width` on the container and elements to create the desired grid size of 9x9.

:::details View Grid Solution
/lessons/front-end-foundations/css-floats/grid-solution.html
:::

#### Gallery

Create a gallery of images that float side-by-side of each other. The images should be different widths.

:::details View Gallery Solution
/lessons/front-end-foundations/css-floats/gallery-solution.html
:::

### Large

#### Layout

Create a website layout, similar to the example in the lesson, using floats. There should be the following

- A header with a title and floating navigation
- A main content area (75% width) and a floating sidebar (25% width)
- A footer (clear of both the content and sidebar)

:::details View Layout Solution
/lessons/front-end-foundations/css-floats/layout-solution.html
:::

## Interview Questions

### Fundamentals

None for this lesson.

### Bugfix

None for this lesson.

### Conceptual

- What is flow, and how is flow affected by using the `float` property?

### Architect

None for this lesson.

## Additional Resources

- [All About Floats (CSS Tricks)](https://css-tricks.com/all-about-floats/)
- [CSS Layout - float and clear (w3schools)](https://www.w3schools.com/Css/css_float.asp)
