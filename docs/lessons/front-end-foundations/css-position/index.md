---
sidebar: auto
---

# CSS Position Property

## Learning Objectives

After completing this lesson, you will be able to:

1. Position HTML elements using the `position` CSS property
2. Understand all five position values and how they work
3. Create basic web design layouts and user interface solutions using the position property

## Lesson

### Overview

The `position` property is used to move, manipulate and reposition the placement of HTML elements compared to the browser and document flow.

![css-position-diagram](./css-position-diagram.png)

<small>Diagram Credit: [Interneting is Hard](https://internetingishard.com/html-and-css/advanced-positioning/)</small>

### `top`, `right`, `bottom`, `left`

The `top`, `right`, `bottom`, and `left` properties allow you to move elements depending on their position value and accept any standard CSS value (ex: `10px`, `2em`, `50%`). Each `position` value interacts with these properties differently.

Here are the `position` property values and how they are used to reposition elements.

### `static`

The `static` value positions elements in the standard document flow, top-down and left-to-right. Other related properties (ex: `left`) do not take any effect when items are positioned statically. This is the default `position` value.

<div style="border: 3px solid black; padding: 5px;">
    <div style="border: 3px solid purple; padding: 5px;">Static Position</div>
</div>

### `relative`

The `relative` value positions elements relative to its expected default static position. Imagine where the element would be in it's static position and reposition starting from the direction of the accompanying property.

```css
.box {
  position: relative;
  left: 30px;
}
```

<div style="border: 3px solid black; padding: 5px;">
    <div style="position: relative; left: 30px; border: 3px solid green; padding: 5px; background-color: white;">Relative Position Left</div>
</div>

See how the green box bleeds over the parent black box to the right? When positioned relatively, the element no longer fits in the block flow. It pops out into it's own plane and move independently from the surrounding elements.

In this case, it pushes the element `30px` starting from the left side and moves away (to the right) from the `left` side of the element.

Here are some other examples using the other properties: `bottom`, `top`, and `bottom`. Notice how the position moves **away from** the properties value (ex: from the bottom toward the top)

<div style="border: 3px solid black; padding: 5px; margin: 30px 0;">
    <div style="position: relative; bottom: 30px; border: 3px solid red; padding: 5px; background-color: white;">Relative Position Bottom</div>
</div>

<div style="border: 3px solid black; padding: 5px;  margin: 30px 0 50px;">
    <div style="position: relative; top: 30px; border: 3px solid blue; padding: 5px; background-color: white;">Relative Position Top</div>
</div>

<div style="border: 3px solid black; padding: 5px;">
    <div style="position: relative; right: 30px; border: 3px solid yellow; padding: 5px; background-color: white;">Relative Position Right</div>
</div>

### `absolute`

The `absolute` value positions elements separate from the entire document flow and is positioned against the first non-statically positioned ancestor element. If all items are static it will use the body element for positioning.

<div style="position: relative; padding: 5px; border: 3px solid black;">
    Relative Parent
    <div style="border: 3px solid #666; padding: 5px; margin: 5px 0;">
        Child
        <div style="border: 3px solid #999; padding: 5px; margin: 5px 0;">
            Grandchild
            <div style="border: 3px solid red; padding: 5px; background-color: white; position: absolute; top: 5px; right: 5px;">Absolute Great-grandchild</div>
        </div>
    </div>
</div>

### `fixed`

The `fixed` value positions elements similar to absolute positioning except it will always stay fixed to the browser window in the set position. The exercises at the end of this lesson will show you how it works more in depth.

### `sticky`

The `sticky` value positions elements off of the scroll position of the user. The element switches between relative and fixed positions depending on the scroll position. It is relative while the original position is in the user's viewport and when the user scrolls out of it's position the element becomes sticky and fixes in place.

Example

<div style="position: relative; background-color: #eee; padding: 5px; height: 200px; overflow: scroll;">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta, quam sit amet tincidunt auctor, ligula justo malesuada ligula, et tincidunt odio mauris nec sem. Pellentesque faucibus consectetur risus, eu elementum nisl pulvinar vel.</p>

<div style="position: sticky; top: 10px; padding: 5px; border: 3px solid magenta; background-color: white;">Sticky Position</div>

<p>In dui turpis, iaculis a mauris ac, ullamcorper efficitur enim. Aenean porta sapien vel pharetra facilisis. Sed viverra cursus libero, et ullamcorper lorem mollis ut. Pellentesque commodo at dui eu ornare. Suspendisse convallis rutrum eros, eu pretium tellus suscipit nec. Vivamus mattis, enim euismod condimentum feugiat, ex eros commodo turpis, at tincidunt elit tortor at lectus. Nulla facilisi. Praesent nec pharetra ante. Integer ligula justo, convallis ac molestie at, mattis non mi. Praesent nec enim vitae enim tincidunt mollis.</p>
<p>Proin ante neque, accumsan ut magna auctor, porta dignissim erat. In mollis est ut nibh sodales, sed fringilla eros mattis. Nam a ullamcorper felis, non porttitor eros. Maecenas dui neque, elementum sed ex nec, auctor efficitur odio. Etiam id scelerisque libero. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vitae orci tincidunt sollicitudin sed varius augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla vehicula, dui quis euismod efficitur, purus libero auctor dui, quis tincidunt nulla tellus at mauris.</p>
</div>

### Summary

Using the `position` property with the `top`, `bottom`, `left`, and `right` properties is a powerful way to create complex layouts and unique user interface components. These strategies have been around for a long time on the web and allow for creativity beyond the basic flow of elements in a document.

## Additional Resources

- [CSS Layout - The position Property](https://www.w3schools.com/Css/css_positioning.asp)
- [position - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Learn CSS Layout - Position](https://learnlayout.com/position.html)
- [position | CSS-Tricks](https://css-tricks.com/almanac/properties/p/position/)
- [Quick Overview of CSS Position Values | CSS-Tricks](https://css-tricks.com/video-screencasts/110-quick-overview-of-css-position-values/)
