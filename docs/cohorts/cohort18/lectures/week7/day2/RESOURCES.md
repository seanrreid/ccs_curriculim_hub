---
sidebar_position: 3
sidebar_label: Resources
title: Additional Resources
---

<!-- markdownlint-disable no-inline-html no-trailing-punctuation -->

## User Interface

- [The Elements of UI Engineering](https://overreacted.io/the-elements-of-ui-engineering/)
- [Hardware engineers solve a usability problem with the PS/2 connector, but inadvertently create a new one](https://devblogs.microsoft.com/oldnewthing/20210216-00/?p=104869)
  <br/> This is an amusing examination of unintended consequences in User Interface changes.

## JavaScript

- [JavaScript Modules: From IIFEs to CommonJS to ES6 Modules](https://ui.dev/javascript-modules-iifes-commonjs-esmodules/)
- [Getting Under The Hood To Understand JavaScript Prototypes: Part I](https://www.wwt.com/article/getting-under-the-hood-to-understand-javascript-prototypes-part-i)
- [Understanding Prototypal Inheritance in JS](https://javascript.plainenglish.io/understanding-prototypical-inheritance-in-js-3c24e8bd74ce)
- [What is JavaScript Made of?](https://overreacted.io/what-is-javascript-made-of/)
  <br/> I want to specifically call out this part:
  > Prototype: What happens if we read a property that doesn’t exist? For example, iceCream.taste (but our property is called flavor). The simple answer is we’ll get the special undefined value. The more nuanced answer is that most objects in JavaScript have a “prototype”. You can think of a prototype as a “hidden” property on every object that determines “where to look next”. So if there’s no taste property on iceCream, JavaScript will look for a taste property on its prototype, then on that object’s prototype, and so on, and will only give us undefined if it reaches the end of this “prototype chain” without finding .taste. You will rarely interact with this mechanism directly, but it explains why our iceCream object has a toString method that we never defined — it comes from the prototype.

## React

- [You should use Functional Programming instead of OOP when working with React](https://janithrs.medium.com/you-should-use-functional-programming-instead-of-oop-when-working-with-react-b12c1ebc5777)
  <br/>This is an opinion piece, but the author makes a good point about the differences in how React works _currently_ versus how it worked in earlier versions (approx verions 15-16.8)
- [Building Controlled Forms Using Functional Components in React](https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd)
- [Create a React app with Vite and deploy it on GitHub](https://medium.com/@badreddine.boudaoud21/create-a-react-app-with-vite-and-deploy-it-on-github-48b82e19f821)
  <br/>This is new, I haven't done these steps myself. But, it looks very interesting if you want to try it out yourself!
- [A Visual Guide To React Mental Models](https://obedparla.com/code/a-visual-guide-to-react-mental-models/)
- [21 Best Practices for a Clean React Project](https://betterprogramming.pub/21-best-practices-for-a-clean-react-project-df788a682fb)
- [The 5 Types Of React Application State](https://jamesknelson.com/5-types-react-application-state/)
  <br/>This is an older article, but the principles are generally still valid regarding `state`

## Node

Want to do more with Node? Look here:

- [NodeSchool](https://nodeschool.io/)

### Task Runners

- [`npm` vs `npx` — What’s the Difference?](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/)
- [Let's settle things out [2]: NPM Vs. YARN VS. PNPM](https://dev.to/ayoub3bidi/lets-settle-things-out-2-npm-vs-yarn-vs-pnpm-5e04)
    This article works as an extension of the previous link, b/c these things don't seem to sit still for long! (It's also a sequel to the author's previous article regarding the state of things earlier)

## Changes in the Industry

- [The web didn't change; you did](https://remysharp.com/2021/02/11/the-web-didnt-change-you-did)
- [front-of-the-front-end and back-of-the-front-end web development](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/)
- [frontend design, react, and a bridge over the great divide](https://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/)
- [The Great Divide](https://css-tricks.com/the-great-divide/)<br/> "Two front-end developers are sitting at a bar. They have nothing to talk about."
