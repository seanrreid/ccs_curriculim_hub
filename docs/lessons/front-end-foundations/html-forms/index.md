---
sidebar: auto
---

# HTML Forms

## Learning Objectives

After completing this lesson, you will be able to:

- Describe what web forms are used for.
- Use `fieldset` and `label` elements to make forms more accessible to everyone.
- Structure a web form for a user to enter information.
- Use form controls to update the webpage.


## Lesson

### What are Web Forms

> Web forms are one of the main points of interaction between a user and a web site or application. Forms allow users to enter data, which is generally sent to a web server for processing and storage, or used on the client-side to immediately update the interface in some way (for example, add another item to a list, or show or hide a UI feature). A web form's HTML is made up of one or more **form controls**, plus some additional elements to help structure the overall form - [MDN Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

In HTML `<form>...</form>` tags are used to identify the start and the end forms. The form controls are nested inside of these tags. Many assistive technologies and browser plugins can discover `<form>` elements and implement special hooks to make them easier to use.

:::tip
`<form>` tags are not always needed to submit information. It is used in a way to group together several form controls for a single purpose. Form Controls can be used independently of the `<form>` tag.
:::

### Form accessibility

#### Fieldset and Legend
The [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) element is a good way to create groups of form controls that share the same purpose, for styling and sematic purposes. You can label a `<fieldset>` by including a `<legend>` element just below the opening `<fieldset>`

Many assistive technologies, such as screen readers, will use the `<legend>` element as part of the label of each form control for each `<fieldset>` element.

@/lessons/front-end-foundations/html-forms/fieldset-example.html

In this example, we are grouping a user's information under a single label. When a screen reader would read this to a user it will allow the user to understand a little more of the context of the information that you are asking for.

#### The `label` element

The [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) element is the formal way to define a label for an HTML form widget. This is the most important element if you want to build accessible forms. Not only does this help separate and group together different form controls, it informs the user about what is needed for form control.

You can associate a `label` with an `input`. For example:

@/lessons/front-end-foundations/html-forms/label-example1.html

With the `<label>` associated correctly with the `<input>` via its `for` attribute (which contains the `<input>` element's `id` attribute), a screen reader will read out something like "Name, edit text".

You can also nest the form controls inside of the `<label>` tags. This allows for it to be associated with the use of the 'for' attribute.

@/lessons/front-end-foundations/html-forms/label-example2.html

### What are Form Controls

Form controls, also called **widgets**, can be single or multi-line text fields, dropdown boxes, buttons, checkboxes, or radio buttons and are mostly created using the `<input>` element. When this data is submitted the values of these elements are sent by the browser to the server or update the web page itself.

#### The many faces of `<input>`

The most common use of form controls is with the `<input>` elements `type` property, such as 'text'. Let's look at an example of this.

@/lessons/front-end-foundations/html-forms/input-text-example.html

This will appear in the browser like this:

<input type="text"/>  You can type here!

The text `<input>` field is the most basic form control and is the default value of the `type` property. It allows the user to type enter any kind of data.

:::warning
If any line-breaks are entered by the user, the browser will remove those breaks before sending the data to the server.
:::

The `<input>` field is one of the most flexible elements in HTML. There are many values you can assign to the `type` attribute. Here is a quick look at some of the most common and how it changes the behavior and look of the `<input>` element. You can checkout a full list here [MDN - HTML Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

| Type | Description | Appearance |
|:-----|:------------|:----------:|
|`text`| | `<input type="text" placeholder="This is a text field">` |
|`checkbox` | A check box allowing single values to be selected/deselected. | `<input type="checkbox">` |
| `radio` | A radio button, allowing a single value to be selected out of multiple choices with the same name value. | `<input type="radio">` |
| `range` | A control for entering a number whose exact value is not important; displays as a range widget defaulting to the middle value. Used with `min` and `max` attributes. | `<input type="range" max="100">` |
| `submit` | A button that submits the form. | `<input type="submit">`

#### Checkbox and Radio Types

`checkbox` and `radio` types allows for choices to be given to the user. It allows you to get a specific answer from the user versus a text field which can be open-ended. Let's look at an example.

@/lessons/front-end-foundations/html-forms/input-radio-example.html

With this code your webpage will look something like this:

<!--
<fieldset>
  <legend> Do you like programming? </legend>
  <p>
    <label>
      <input type=radio id="yes" name="question" checked> Yes
    </label>
  </p>
  <p>
    <label>
      <input type=radio id="no" name="question"> No
    </label>
  </p>
</fieldset> -->

With `type="radio"`, the user can choose one (and only one) of multiple options, in this case `yes` or `no`. You must use value for the `name` property so that the browser groups them together, allowing only one of them to be selected at any given time. The `checked` attribute at the end of the `input` tag tells the browser to have set that input as initially selected when the page loads.

Now lets take a look a example with `checkbox` as the `type`:

@/lessons/front-end-foundations/html-forms/input-checkbox-example.html

This looks like:

<fieldset>
  <legend> What Programming languages do you like? (Choose More than One)</legend>
  <p>
    <label>
      <input type="checkbox" checked /> HTML
    </label>
  </p>
  <p>
    <label>
      <input type="checkbox" /> CSS
    </label></p>
  <p>
    <label>
      <input type="checkbox" /> Javascript
    </label>
  </p>
  <p>
    <label>
      <input type="checkbox" /> Python
    </label>
  </p>
 </fieldset>

Unlike the `radio` type the `checkbox` type allows the user to select more than one option. We can also apply the `checked` attribute to the `input` as well to preselect options.

### Other Form Controls

#### TextArea

The `<textarea>` is a field just like the `<input type="text">` element except that it creates a multiple line text field not just one line. This allows for a user to insert line breaks to create paragraphs.

@/lessons/front-end-foundations/html-forms/textarea-example.html

<fieldset>
    <label for="experience-input"> Tell us about your Experience! </label>
    <p>
      <textarea id="experience-input" name="experience">You had a ...</textarea>
    </p>
</fieldset>

`<textarea>` have several other properties that can be used to expand on its size and other functionality. For example, you can add `rows` and `columns` attributes to expand the area for more area for the user to type in. For more information visit [MDN - Textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)

#### Using Dropdowns

You can add a dropdown menu into your form by using the `select` tag. This creates a dropdown menu. You fill it with choices using the `<option>` tag.

@/lessons/front-end-foundations/html-forms/select-example.html

With the use of the `<select>` element we are able to give the user a ton of choices to choose from without taking up a lot of space. Each option has a `value` attribute, once selected, will allow you to save the selected `value` to a database for later use. Note that we use two attributes in the first options. `disabled` attribute prevents the user from being able to choose this option as its value is an empty string. `selected` tells the browser to select this `<option>` when the page loads.

When we open this in the browser are page now looks like this.

<fieldset>
    <label for="genre-select"> What's Your favorite movie genre? </label>
    <select name="genre" id="genre-select">
      <option value="" disabled selected>--Please choose an option--</option>
      <option value="action">Action</option>
      <option value="adventure">Adventure</option>
      <option value="comedy">Comedy</option>
      <option value="documentary">documentary</option>
      <option value="horror">Horror</option>
      <option value="mystery">Mystery</option>
      <option value="Anime">Anime</option>
    </select>
  </fieldset>

The usefulness of the `<select>` element goes beyond forms. From navigation to rendering different elements based on the choice of the user. For additional information check out [MDN - Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

### Summary

Forms are a large part of the interaction between a user and a website. It allows for users to sign up, login, creating blog posts and so much more. On the other side it allows companies and other websites to get feedback from the user and save that information into a database.

The `<input>` form control is the most commonly used form element. by changing the `type` property it provides entirely different look and functionality. There are many different types of form controls including `<select>` and `<textarea>` that expand what data that you can obtain from a user.

## Training Exercises

To solidify your knowledge, here are a set of exercises that will require you to use the techniques you've just learned in the lesson above.

They are organized into _small_, _medium_, and _large_ sized problems. The small exercises will be very similar to the examples in the lesson. If you get stuck, refer to the relevant section above. The medium exercises will require you to combine concepts. The lesson may not have a single, specific example for you to reference. The large exercises are more open-ended and may require you to search the web for additional material.

### Small

#### Create a form 1.

Create a form that includes a `input` element and can except text from a user.
  - Must be able to include text in the `input` field
  - Must use at least one `fieldset` element
  - Must Contain Labels

#### Create a form 2.

Create a form that includes a `input` element that gives a user to select only one of many options.
  - Only one selection should be able to be selected at a time.
  - Must use at least one `fieldset` element
  - Must contain labels

#### Create a form 3.

Create a form that includes a `input` element that gives a user a dropdown to select only one of many options.
  - Only one selection should be able to be selected at a time.
  - Must use at least one `fieldset` element
  - Must contain labels

### Medium

#### Order a Pizza.

Create a form that allows a user to order a pizza.

- Should have have `input` fields for:
  - Types of Crust
  - Toppings
  - Whether it's delivery or pick up
  - Address
  - Name for order
  - Additional Instructions
- Must use at least one `fieldset` element
- Must contain labels

#### Credit Card Payment

Create a form that allows a user to enter information to make a credit card purchase.

- Search the internet for examples.
- Should at least contain fields for: (use the correct types for 'input' fields to ensure proper data is entered)
  - Name
  - Email
  - Card number
  - Expiration date
  - Security code
- Must use `fieldset` elements
- Must contain labels

### Large

#### User Sign up and login

In this exercise you'll create 2 forms.

The first form will be for a user sign up. You will ask for information from the user to sign-up to your website.

- This form should collect information from the user such as :
  - name
  - password
  - email
  - telephone
  - Tell me about yourself.
  - Where did you hear about us.
- Should be styled and centered on the screen.
- Must use `fieldset` elements
- Must contain labels

The second form should be a form that is contained within the navbar and displayed on the top-right of the screen.

- This form should only have 2 fields and a button to login:
  - email
  - password
- Should be position in the navbar section (top of the screen)
- Must contain labels

## Interview Questions

### Fundamentals

- What is a web form?
- What are form controls?
- What is the difference between radio buttons and checkboxes?
- What is the difference between an `input` with `type` attribute of `text` and a `textarea`?

### Bugfix

Explain what is missing from this form and explain why it's important.

@/lessons/front-end-foundations/html-forms/bugfix.html

:::details Solution

The Labels are missing. The label text is not only visually associated with its corresponding text input; it is programmatically associated with it too. This means that, for example, a screenreader will read out the label when the user is focused on the form input, making it easier for an assistive technology user to understand what data should be entered.

@/lessons/front-end-foundations/html-forms/bugfix-solution.html
:::

### Architect

- What form control would you use to allow a user to type a comment on a blog post?

## Additional Resources

- [MDN - Your First Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)

- [The Ultimate Guide for the Perfect Form](https://medium.com/@electerious/the-ultimate-guide-for-the-perfect-form-f52b7ee0fd29)

- [Video: Learn HTML Forms in 25 Minutes](https://www.youtube.com/watch?v=fNcJuPIZ2WE)