---
title: CCS Fall 2023 Lecture Notes
description: CCS Fall 2023 Lecture Notes
pubDate: 2023-12-18T11:22:42-05:00
---

<!-- markdownlint-disable no-duplicate-heading -->

This is your field guide to your Full Time Web Development cohort, and should provide you with information you need about what to expect in class week to week.

Your lectures will be published in weekly folders inside this `lectures` repository. Each week will contain:

* `README.md` - An overview about what to expect that week, including any recommended preparation
* `day-*` directories - Each day of your class will contain
  * `README.md` - An agenda for the day and any relevant scheduling information
  * `EXERCISES.md` - A link to the exercises for a particular day (could be Learning Portal or external)
  * `RESOURCES.md` - Additional resources that may be relevant to the day's lecture (if applicable)
  * `/resources` - Occasionally we'll include some helpful files here (screenshots, PDFs, etc...)

There might be other related files in any given day for extra reading, practice, etc... In general, most will follow the above pattern.

**NOTE:** Documents will be published the morning of each day. This is by design, I'll explain why in class. 😄

## Important Links

* [The Debug Process](https://docs.google.com/document/d/19xjZ3n9WHFqJXMsEEcLnJycQT-_MhInFY_AkHyeAMRg/edit?usp=sharing)

## Week 1

Getting started with code, and diving into JavaScript!

### Day 1

Intro to `git` & JavaScript

#### Presentations

* [Getting Started - Command Line](https://docs.google.com/presentation/d/1EK_npTGzTjIph8FJe-isghegqn7NyPMG/edit?usp=sharing&ouid=110079887532608677386&rtpof=true&sd=true)

#### Helpful Links

* [Learn Git (A Tutorial for Beginners)](https://www.afternerd.com/blog/learn-git/)
* [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
* [Adding a new SSH key to your GitHub account](https://docs.github.com/en/enterprise-server@2.20/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

#### Recommended Reading

* [Top Ten Things Beginners Must Know About JavaScript](https://www.codementor.io/@j2jensen/top-ten-things-beginners-must-know-about-javascript-aaeabailp)
* [Type Coercion in Javascript](https://medium.com/codezillas/let-me-coerce-you-into-liking-javascripts-dynamic-typing-system-3cd22c19cb64)
* [A fictitious, somewhat farcical conversation between me and the JavaScript programming language](https://littleyellowdifferent.substack.com/p/a-fictitious-somewhat-farcical-conversation)

#### Keywords

* git
* repository

### Day 2

JavaScript Events

#### Presentations

* [Getting Started - JavaScript](https://docs.google.com/presentation/d/1nY5IWiZ4_OPO-NitYqX6SHB3AbOYfo6EcnLnYgyC8oA/edit?usp=sharing)
* [JS Event Loop](https://docs.google.com/presentation/d/1-k0RR3bCRKXj3ujPsniacpW5sRjRgF6SAjvzZAnXZPQ/edit?usp=sharing)
* [JavaScript Functions](https://docs.google.com/presentation/d/1v-F7oxkXfVgEvAOwhinHt0jiXpCJBOKxeizxYkL3ME4/edit?usp=sharing)

#### Bookmark This

* [Clean Code: Javascript](https://github.com/ryanmcdermott/clean-code-javascript#introduction)

#### Read These

* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)<br/>__HIGHLY RECOMMENDED__
* [Type Coercion in Javascript](https://medium.com/codezillas/let-me-coerce-you-into-liking-javascripts-dynamic-typing-system-3cd22c19cb64)

#### Other

* __VIDEO__: [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

#### Keywords

* objects
* variables
* events
* event loop

### Day 3

Let's get interactive!!

#### Presentations

* [A Sneak Peak into HTML](https://docs.google.com/presentation/d/1V8wBrCh8GK3FOrYRiHxQ5jrnlJUhYs7W1JWLBoH8_Kc/edit?usp=sharing)
* [JavaScript Functions](https://docs.google.com/presentation/d/1v-F7oxkXfVgEvAOwhinHt0jiXpCJBOKxeizxYkL3ME4/edit?usp=sharing)
* [JavaScript Event Loop](https://docs.google.com/presentation/d/1-k0RR3bCRKXj3ujPsniacpW5sRjRgF6SAjvzZAnXZPQ/edit?usp=sharing)
* [JavaScript Scope and Callbacks](https://docs.google.com/presentation/d/1s7pb8g-czdcuaDR_toqaS-cz4h_OSjfEo33d28UgvmA/edit?usp=sharing)

#### Bookmark This

* [Chrome Dev Tools Docs](https://developer.chrome.com/docs/devtools/overview/)

#### Recommended Reading

* [Things I Don't Know as of 2018](https://overreacted.io/things-i-dont-know-as-of-2018/)
* [JavaScript: Designing a Language in 10 Days](https://www.computer.org/csdl/magazine/co/2012/02/mco2012020007/13rRUy08MzA)
* [What is Javascript Made Of?](https://overreacted.io/what-is-javascript-made-of/)
* [A Brief History of JavaScript](https://auth0.com/blog/a-brief-history-of-javascript/)
* [The Story Behind Java and JavaScript: What's the Difference](https://blog.galvanize.com/story-behind-java-javascript-whats-difference/)

#### Keywords

* objects
* events
* DOM
* BOM
* binding
* functions
* `console.log()`
* `document`
* `window`

### Day 4

#### JavaScript Control Flow

* Conditional Statements
  * `if` some value is `true` or `false` _then_ do some thing...`else` do another thing.
  * NOTE: `else` is optional, and JavaScript technically [does not have an `else if` syntax!](https://dev.to/genta/theres-no-else-if-in-js--24f9)
* Loops
  * `for` every item in a group of items, do a thing over and over until a predetermined "stop" event happens, i.e. a certain number of loops is reached.
  * `forEach` "needle" in a "haystack" do some thing.
  * `while` some condition is met, do a thing. Stop the loop when the condition is no longer met.

#### The DOM

* Document
* Object
* Model

This is the in-memory representation of the page you're veiwing in the browser. JavaScript can interact with a page via methods and APIs that expose DOM elements to JavaScript. You can add, remove, edit, read, HTML elements, i.e. `<p>` tags, by querying the `document` object, aka the "root" of the DOM. This is one of many items provided by the **browser** (not unique to JS!) as part of the Browser API.

#### Scope

* "global" scope variables are available to an entire application.
* "local" scope limits variables to where they were created.
* Functions can access variables in their local scope _and_ anything in the global scope.
* Functions cannot access variables in the scope of other functions.
* Locally scoped variables are not available globally.

#### JavaScript is asynchronous

* When given a series of commands, i.e. functions/method, JavaScript doesn't wait for one command to finish before moving on to the next.
* JavaScript uses an Event Loop, a call stack and event queue kept in memory, to keep track of that status of each function.
* It adds each task to the queue, and returns the result of each task as they are **completed** not as they are **submitted**.
* We are also asynchronous, we can start any number of tasks and complete them regardless of the order in which they were started (i.e. Doing a morning routine that consists of making coffee, doing laundry, emptying the dishwasher.)

#### Call me maybe??

* JavaScript uses "Callbacks", a functions that is passed as an argument to another function, to handle asynchronous events.
* A function starts, it's added to the call stack and event queue, when it's done the resulting data is given to the "callback" function.
* This is useful when a particular function _needs_ to wait on the data from a previous function.

#### Recommended Reading

* [Frontend Weekly: Ajax — Async, Callback & Promise](https://medium.com/front-end-weekly/ajax-async-callback-promise-e98f8074ebd7)

#### Helpful Links

* [Vanilla JS Toolkit](https://vanillajstoolkit.com/plugins/)

#### Keywords

* objects
* event listeners
* event loop
* DOM
* selectors
* elements
* callbacks
* scope

## Week 2

During this week we'll detour into HTML/CSS and then bring back JavaScript to complete the trifecta!

### Day 1

Let's review all the JS Mad(lib)ness!

#### Presentations

* [Welcome to the Internet](https://docs.google.com/presentation/d/1ol-3hnU32We6fljDsjStbU_PqWt8Ceuxna7yRcdT8UQ/edit?usp=sharing)
* [Getting Started with HTML](https://docs.google.com/presentation/d/1PNaBurvvi38zGHah9icOI8EUtl9AU4Evu9i-5OlMBg0/edit?usp=sharing)

#### Types of programming

1. **Imperative programming** is writing code that tells the computer _how_ to do something.
    > "Hey, Computer, if a user gives you value [x] then perform action [y]."
2. **Decalartive programming** is writing code that tell the computer _what_ you want to see.
   > "Hey, Computer, this content needs to look like this..."

#### Keywords

* tag pairs (start and end tags)
* elements (tag pair + whatever they contain)
* Document Object Model (DOM)
* semantic markup
* `<head>` - Document Metadata element
* `<body>` - content of an HTML document

### Day 2

#### GIT busy*

*<sup> I know, the title is awful, I'm just as embarassed as you...</sup>

So many things with `git` and Github!

#### CSS

If HTML is our "architecture," consider CSS the "interior design."

#### Reading

* [An Introduction to Meta Viewport and @viewport](https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/)
* [CSS-Trick: CSS is Awesome](https://css-tricks.com/css-is-awesome/))
* [MDN: CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
* [CSS Specifishity](https://specifishity.com/)

#### Keywords

* selectors
* specificity
* declarations
* classes
* box model

### Day 3

#### Github

* [CSS Demo Repo](https://github.com/seanrreid/CSS/)
    _Note_: Positioning Demo is on the `positioning` branch

#### Recommended Reading

* [Anatomy of an HTML document](./anatomy-of-html.pdf) - PDF from University of Pittsburgh CS Course
* [Media Queries (Examples of Responsive Designs)](https://mediaqueri.es/)
* [THE CASSETTE TAPE AS RESPONSIVE DESIGN](https://needmoredesigns.com/early-responsive-design/)
* [Old CSS, new CSS](https://eev.ee/blog/2020/02/01/old-css-new-css/)
* [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/)

#### Challenge

* [100 Days CSS Challenges](https://100dayscss.com/)

#### Keywords

* box model
* floats
* flexbox
* grid
* responsive
* media queries

### Day 4

Read this -> [Just Build It](https://blog.stephaniestimac.com/posts/2023/09/just-build-it/)

#### HTML

HTML is _essentially_ information architecture.

* "Semantic" markup means choosing elements that best represent the content being displayed.
* HTML is where you put the content and control what it _is_, CSS is how you control how it _looks_.
* HTML elements are essentially a bunch of "blocks" on a page (even if they look like other shapes!).

#### CSS

CSS is the how a page should _look_, we can use it to enhance the content created by HTML.

* User Agent Stylesheets, aka "Browsers gonna browser..."
* In CSS order matters, recent rules override prior rules.
* However, Specificity can override almost everything!
* CSS Selectors read from left->right.
* The box model
  * Old and busted (ish): `content-box`
    * This is the default behavior, the box grows as you add padding + content)
  * New hotness: `border-box`
    * The width of a box doesn't change if you add padding.
    * Essentially the padding is _contained_ by the box and the content adjusts accordingly
    * This can be applied universally (the `*` selector).
* HTML elements can be displayed a few different ways:
  * Inline: Default behavior for elements (it's usually reset to "block" by browsers*).
    * Doesn't break the flow, stays inline
    * Margin and Padding can be applied
    * Height and Width are ignored
  * Inline-Block
    * Similar to inline but it respects width and height values.
  * Block: Are not inline, more like "stacked."
    * If a width isn't set, they'll take up the full width by default
  * Flex and Grid are newer display types for blocks.
    * Flex allows boxes to be "flexible," think of it almost like a liquid being poured into a container.
    * Grid puts things into a grid of rows and columns. You can assign boxes to specific areas.
* Some elements have default display types, i.e.
  * By default a `span`, or a text modifier like `strong`, are _inline_.
  * By default most images, paragraphs, headings, and `div` elements are _block_.

#### Responsive Web Design/Development

* The introduction of Media Queries in CSS has made it possible to use the same code across many different device types/sizes.
* Media Queries are built in to CSS and allow us to "test" if a certain value is true, i.e. "Is this scren 640px or larger?" or "Is this screen in landscape or portrait mode?"

## Week 3

Bringin' it all togther, HTML + CSS + JS, and a chance encounter with CHUCK NORRIS!

### Day 1

* Show your work from the weekend, group debug any problems, discuss victories large and small.

#### I'm debuggin' out

* First, [obligatory Tribe Called Quest link](https://www.youtube.com/watch?v=P9oTCzWRuvQ)
* I BROKE MY SHOPPING CART!! 🤯 [Busted Shopping List](https://github.com/ccs-fall-2023/exercises/tree/main/js-shoping-list-busted)

#### Presentations

* [Scope and Callbacks](https://docs.google.com/presentation/d/10nW_mk5EDWl43SzuIWEJOitD5cuE43_WMLIHeLtM0i8/edit?usp=sharingg)

#### Recommended Reading

* [The Promise JS Explained in Burger Party](https://fullstackjournal.wordpress.com/2018/07/06/the-promise-js-explained-i-burger-party/)

#### Helpful Links

* [Chuck Norris Quotes API](https://api.chucknorris.io/)

#### Keywords

* asynchronous
* callbacks
* Application Program Interface (API)
* `fetch`
* query parameters

### Day 2

#### ATTACK OF THE 13 QUESTION QUIZ

* [Our journey so far...(HTML/CSS/JS)](https://forms.gle/XbpJ2GKmNn6TkGoLA)

#### Review

* [jQuery to JS Conversion: jQuery Music Box](https://github.com/seanrreid/jquery_music_box)

#### Presentations

* [Scope and Callbacks](https://docs.google.com/presentation/d/1RtrA2VlRYspHjE-XtdlunvQTvrT8w0RjCFo4O1M6Jwc/edit?usp=sharing)
* [Array Methods](https://docs.google.com/presentation/d/1rDNtcpH7hSSYfIoYzCi6yCLv_SLQp2rOKT51gGa2Kxo/edit?usp=sharing)

#### Helpful Links

* [MDN: The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN: Working with json](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
* [CodeAcademy: What is REST?](https://www.codecademy.com/article/what-is-rest)

> JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. Even though it closely resembles JavaScript object literal syntax, it can be used independently from JavaScript, and many programming environments feature the ability to read (parse) and generate JSON.

* [Chuck Norris Quotes API](https://api.chucknorris.io/)

#### Recommended Reading

* [5 Rules to Improve Code Readability](https://medium.com/better-programming/5-rules-to-improve-code-readability-83eda50ca780)
* [What is JavaScript Made Of?](https://overreacted.io/what-is-javascript-made-of/)
* [How JavaScript Works](https://medium.com/better-programming/how-javascript-works-1706b9b66c4d)
* [What Not to Do as a Programmer - My List After 2 Years of Working In Teams](https://dev.to/haseebelaahi/what-not-to-do-as-a-programmer-my-list-after-2-years-of-working-with-teams-1b23)

    > Do Not Fall In Love ❤️  With Your Code<br/>
    > The number 1 mistake a lot of devs make at the start of their careers is treating their code like their babies or pets.<br/>
    > Sure, we all love our work but always remember what your end goal is, to write good code and collectively contribute to making the product/project you are working on better every day.<br/>
    > When you don't attach your feelings with the code you write, there is a better chance you'll always try to make it better and not let your feelings come in way of improving it.

#### Other

* __VIDEO__: [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

#### Helpful Guides

#### Array Methods
<!--
![Array Methods](./img/array_methods.jpg) -->

Array methods, but with food! (not mine, but versions of this are all over the interwebs...)
<!--
![Array Methods, with food!](./img/array_methods_food.png) -->

#### The Lifecycle of _EVERY_ Personal Project
<!--
![Project Lifecycle](./img/project_lifecycle.jpg) -->

### Day 3

#### CodeWars follow up

* [CodeSandbox Demo](https://codesandbox.io/s/cool-drake-d8g84p?file=/src/index.mjs)
* [Discussion on CodeWars "Soul of Wit" exercise](https://www.sitepoint.com/community/t/reversing-a-javascript-array-without-reverse-code-explanation/284994/2)

#### Fetch Chuck Norris

* [Chuck Norris Quotes API](https://api.chucknorris.io/)

Today, we're going to `fetch` all the things!

#### Recommended Reading

* [An introduction to JavaScript Arrays](https://flaviocopes.com/javascript-array/)
* [The JavaScript Spread Operator](https://flaviocopes.com/javascript-spread-operator/)

These are repeats from yesterday, but they're worth re-reading

* [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [MDN: Working with json](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
* [CodeAcademy: What is REST?](https://www.codecademy.com/article/what-is-rest)

### Day 4

* We can build interactive pages!
  * Shopping Lists!
  * Calculators!
* We can work with arrays!
  * `map()`
  * `filter()`
  * Fights with CodeWars and `reverse()`
* We can make `fetch` happen!!
  * Chuck Norris!
  * Star Wars!

#### This morning

* IT'S A TIMED QUIZ!!! 😱
* Star Wars API Show'n'Tell

#### In class code along

* Let's review functions, shall we?
* Can we talk to Chuck more than _once_? 🤔🤔

## Week 4

* Making `fetch()` happen!
* JavaScript Prototypes/Classes/Modules
* UI Tools
* Possibly some `yarn` and/or `npm`

### Day 1

* Show your work from the weekend, group debug any problems, discuss victories large and small.
* `async` and `await` to make life easier.
* CLEAR THOSE FORMS!
* Meet [Bulma](https://bulma.io/documentation/overview/start/)
* Meet [Tailwind](https://tailwindcss.com/) NOTE: I have _many_ thoughts about this one, 😂
* Time Permitting, we'll touch on [JavaScript Prototypes](https://docs.google.com/presentation/d/1o_7-TJMjTDkLj7awAkdyP7hThlV-rgay_d_TJi_oMz0/edit?usp=sharing).

#### In Class Exercises

* Apply styles to Chuck and/or Star Wars exercises
* (Time Permitting) Add Modal to Chuck exercise

#### Helpful Reading

These will come in handy for tomorrow!

* [MDN: Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
* [MDN: Using JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes)
* [MDN: The `super` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)

### Day 2

* Review/debug the Github Users and Issues exercises

#### Clear it out

* Walkthrough clearing `form` elements and `elements`;

#### Welcome to `Class`

* Presentation: [JavaScript Prototypes](https://docs.google.com/presentation/d/1o_7-TJMjTDkLj7awAkdyP7hThlV-rgay_d_TJi_oMz0/edit?usp=sharing)

#### Classes

* **Classes:** Classes provide a blueprint for creating objects. You can define properties and methods within a class, and then you can create instances (objects) based on that class. This is a fundamental concept in OOP called "class-based inheritance."
* **Objects:** You can create multiple objects from the same class, each with its own set of properties and behaviors.
* **Encapsulation:** Classes allow you to encapsulate data (properties) and behavior (methods).
* **Inheritance:**CYou can create a subclass that inherits properties and methods from a parent class.

#### JavaScript and Classes...it's complicated

* **Prototypal Inheritance**: JavaScript is often described as a "prototypal" language because objects can inherit properties and methods directly from other objects. Every object in JavaScript has an associated prototype object, and if a property or method is not found on the object itself, JavaScript will look up the prototype chain to find it. This is often referred to as "prototypal inheritance."
* **Classes in ES6:** The introduction of the `Class` keyword in ES6 provides a syntax that resembles traditional class-based inheritance found in languages like Java or Python. However, under the hood, JavaScript classes still use prototypes. When you create a class and instantiate objects from it, JavaScript sets up a prototype chain for you automatically.
*** Objects and Instances:** In JavaScript, objects can be created in various ways, including literal object notation, constructor functions, and ES6 classes. Instances of objects can be created using the new keyword. These instances inherit properties and methods from their prototype, whether it's a prototype object created explicitly or the one associated with a class.

#### Recommend Reading

* [Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)

### Day 3

* [QUIZ TIME!!](./QUIZ.md)
* Show'n'Tell'n'Debug
* Working with ALL the OOP!
* [CodeSanbox Review](https://codesandbox.io/s/admiring-matan-23yc8v?file=/src/index.mjs)
* [Static Methods Demo](https://codesandbox.io/s/eager-lucy-hdskj7?file=/src/index.mjs)
* Presentation: [JavaScript Prototypes](https://docs.google.com/presentation/d/1o_7-TJMjTDkLj7awAkdyP7hThlV-rgay_d_TJi_oMz0/edit?usp=sharing)

#### Recommend Reading

##### HIGHLY RECOMMENDED

* [Code Newbie](https://www.codenewbie.org/)
* [Code Newbie Podcast](https://www.codenewbie.org/podcast)

##### JavaScript Classes

* [MDN: JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [JavaScript Info: JavaScript Classes](https://javascript.info/class)
* [JavaScript Info: JavaScript Classes, Not just a syntactic sugar](https://javascript.info/class#not-just-a-syntactic-sugar)  This is accurate and technically correct. But, I think using the shorthand "syntactic sugar" is still valid _if you understand the distinctions_.

##### General

* [Free Code Camp: Parameters vs Arguments in JavaScript – What's the Difference?](https://www.freecodecamp.org/news/what-is-the-difference-between-parameters-and-arguments-in-javascript/)
* [Code Reading Club](https://www.felienne.com/archives/6472)

### Day 4

#### Review

* [That's `super()`](https://codesandbox.io/s/super-dog-edition-29n5c5?file=/src/index.mjs)
* We're going to [the dogs](https://codesandbox.io/s/oop-kennel-m5y74y?file=/src/index.mjs)

#### Ask Me Anything

Next week we'll start working in [React](https://react.dev/learn).  There is a lot to this framework, it's very powerful and popular (and those things are _mostly_ correlated).

Before we jump into that, it's important that we address any lingering questions/misunderstandings. Therefore, today is dedicated to "Ask Me Anything!"

Whatever questions you have, let's figure them out together!

#### AMA CodeSandbox Links

* [Dynamic Buttons](https://codesandbox.io/s/dynamic-buttons-wtq6gl)
* [Fetching API Data](https://codesandbox.io/s/fetching-api-data-htwlxf)
* [Arrow Function Syntax](https://codesandbox.io/s/arrow-functions-vs-normal-jscwm2)

#### Recommended Reading

* [Ten Years Ago](https://neal.fun/ten-years-ago/)
  See what popular websites looked like 10 years ago
* [Car Hates Vanilla Ice Cream](https://www.cs.cmu.edu/~wkw/humour/carproblems.txt)
  This is a great post about discovering the _actual_ problem based on the _reported_ problem.
* [MDN: CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [Programming Paradigms](https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/)

#### Good Advice for Forward Progress:

> When you focus on the outcome, the gap between where you are and where you want to go seems large. To cover ground quickly, the tendency is to look for a hack or shortcut.
> The problem is that no one who got the outcomes you wanted used a hack or shortcut to get them. Instead, they consistently inched forward.
> Instead of focusing on the ultimate outcome, focus on the next move. There is always something you can do today to get a little better, to move a little closer, to put yourself in a better position. It's not pretty. It's not sexy. It's not fast. It doesn't even make for a good story. But it works.
> You don't build an empire in a day. You build it brick by brick. Day by day.
> Consistent daily progress for a long period of time.

Source: [Brain Food Newsletter](https://fs.blog/newsletter/)

#### Do it Anyway

A few of you are, or will be, in this position. Keep going!

<!-- ![Do it Anyway](./img/do_it_anyway.jpg) -->

#### Food for thought

> A complex system that works is invariably found to have evolved from a simple system that worked. A complex system designed from scratch never works and cannot be patched up to make it work. You have to start over with a working simple system.

-- [Gall's Law](https://en.wikipedia.org/wiki/John_Gall_(author)#Galls_law)

#### Helpful Resources

* [Speeding Up the JavaScript Ecosystem](https://marvinh.dev/blog/speeding-up-javascript-ecosystem/)
  This is a multipart series about potential improvements across the entire ecosystem. A lot of this will be more advanced than were we are currently, but it's worth a read to judge the scale of JavaScript development today.  (it's also somewhat relevent re: Gall's Law above)
* [When to Loop? When to Recurse?](https://betterprogramming.pub/when-to-loop-when-to-recurse-b786ad8977de)
  This question plagues me any time I need to work with complex data. Thankfully, those times have been somewhat rare 😂

#### OOP Warrior Exercises

Here comes a curveball...

* What if, instead of "hero" and "villain" _person_, they were cars competing in a race?
* Do you go more [_Fast and Furious_](https://en.wikipedia.org/wiki/Fast_%26_Furious)?
* Perhaps [_Death Race 200_](https://en.wikipedia.org/wiki/Death_Race_2000)?

If you're finished with warriors, make a new version (new folder, new repo) that is vehicle based.

#### Git & Github Notes

Val made some fantastic notes about the steps for `git` and Github. I'm adding them to the lectures repo!

<!-- ![Using `git` and Github](./img/vals_git_github_notes.jpg) -->

## Week 5

React is a JavaScript library built around tools for reactive rendering & componentized design.
Here's a general outline of what the next couple weeks will look like:

* Introducing React
  * Quick history & purpose
* Reactive rendering: the virtual DOM
  * Generating a virtual DOM
  * ASTs and the render tree
* Component-based architecture
  * React components
  * Relationships (import/export)
  * Mounting to the DOM (`<App>`)
  * The component life cycle
  * JSX templating
* React data flow
  * "Data down, actions up"
  * Antipatterns: Prop drilling
* React Hooks
  * Why "hooks"?
  * Common hooks
    * useState
    * useEffect

### Day 1

#### Intro to React

<!-- ![Code Complexity](./img/code_complexity.jpg) -->

REACT!

**Read this first!** -> * [Create-React-App Evolution (Bitsrc.io)](https://blog.bitsrc.io/the-future-of-react-why-create-react-app-is-deprecated-and-hooks-are-the-future-83e8a087a325)

**NOTE** React has changed quite a bit recently, i.e. a fairly drastic change in the last year.

Time permitting: We'll setup [Node](https://nodejs.org/en/about) using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm#installing-and-updating)

(If you have `brew` installed, this is another way to try to install `nvm` [NVM](https://collabnix.com/how-to-install-and-configure-nvm-on-mac-os/))

#### Application Architecture

We're moving from simple DOM manipulation and `fetch()` requests into _more complex_ DOM manipulation and `fetch()` requests. 😉

Notably, we're moving in the realm of "Single Page Applications" aka "SPA."

<!-- ![React SPA Map](./img/React-SPA-Architecture.jpg) -->

#### Presentations

* [Intro to React](https://docs.google.com/presentation/d/1v0moMo6PUqGvogbsfelnbTL0y-sIv7WbyRoIgY0Vly4/edit?usp=sharing)

#### Guides

* [Official React "Get Started" Documentation](https://react.dev/learn)
<!-- * [React 2020 Cheatsheet (pdf file)](./files/React_2020_Cheatsheet_small.pdf) -->
* [SheCodes: React 2023 Cheat Sheet](http://cheatsheets.shecodes.io/react)
  This is more recent, but it's good to see the changes over the last few years.

#### Resources

* [JavaScript Inheritance vs Composition](https://ui.dev/javascript-inheritance-vs-composition/)
* [Vite docs](https://vitejs.dev/)

#### Keywords

* state
* props
* composition
* components
* single-page-application (SPA)

### Day 2

* Install [Node](https://nodejs.org/en/about) using [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm#installing-and-updating)
  * Quick tour of Node + Express
  * If you have `brew` installed, this is another way to try to install `nvm` [NVM](https://collabnix.com/how-to-install-and-configure-nvm-on-mac-os/)
* React + Forms!
  * You saw some of this in yesterday's [MDN exercise](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

#### Bookmark These

* [Using Vite to create a new React app](https://flaviocopes.com/vite-react-app/)
* [React API Reference: `<input>`](https://react.dev/reference/react-dom/components/input)

#### Helpful Resources

* [React.js for Beginners — Props and State Explained](https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/)
* [React 'Aha' Moments](https://ui.dev/react-aha-moments/)
  This one is 🤌, even still today (it was published in 2016)

### Day 3

* [React DevTools](https://react.dev/learn/react-developer-tools)
* Making `fetch()` happen, but with React! (Hi Chuck! 👋)
* Time Permitting: Mood Ring + [Styled Components](https://styled-components.com/)

#### Helpful Resources

* [Fetching Data in React using Hooks](https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a)
* [When does React re-render components?](https://felixgerschau.com/react-rerender-components/)

#### Extra Reading

This article, [All your mainstream UI frameworks are lying to you](https://moonthought.github.io/posts/all-your-mainstream-ui-frameworks-are-lying-to-you/), is fairly interesting.

I don't agree with all of the points the author makes. I also think the author's proposed solution is...not great? But, there are some valid criticisms with regards to the ecosystem of frameworks.

In addtition, there is a fascinating [discussion on Hacker News](https://news.ycombinator.com/item?id=37656257) about the article.

### Day 4

#### Advanced Prep

Tomorrow's huddle will be about Test Driven Development.

Read through this tutorial, [Learn TDD in React](https://learntdd.in/react) to get an overview of the topic.

You can _try_ the tutorial if you'd like, but note that it hasn't been updated for React 18. However, the principles remain the same.

* Mood Ring + [Styled Components](https://styled-components.com/)
* Time Permitting: [React Context API](https://react.dev/learn/passing-data-deeply-with-context#step-1-create-the-context)

#### Recommended Reading

* [OverReacted: A complete guide to `useEffect`](https://overreacted.io/a-complete-guide-to-useeffect/)
* [React.dev: Managing State](https://react.dev/learn/managing-state)
* [Patrick Roza: Component vs Prop drilling in React](https://patrickroza.com/blog/component-vs-prop-drilling-in-react/)

#### NOTE

There are a _lot_ of good links in the [Resources](./RESOURCES.md) file today! I would read as many of those as you can (and note any particular questions that come to mind).

## Week 6

* It's GROK week!!
* IT'S SPOOKY SEASON!! 🎃 👻 💀
  * Keep me honest, for October I'll wear a _different_ "spooky" themed shirt every day of class.
  * It's your job to let me know if I repeat!
* We'll spend most of the week working with additional React Libraries
  * React Router
  * React Context API
* Time permitting, we'll look at React-based frameworks like NextJS and/or RemixJS

Alex Martin, CTO of Build Carolina, will be here on Wednesday.

Thursday is [GROK](https://grokconf.com/). Use this time to listen to great talks, and meet with other industry folks. I've not been to GROK before, but I've been told it's a fantastic, free-flowing, type of conference.

I will also be at the conference on Friday, but will try to check in after you're done with your Friday morning huddle.

### Day 1

* Let's talk about [Optional Chaining](https://flaviocopes.com/javascript-optional-chaining/), [Nullish Coalescing](https://flaviocopes.com/javascript-nullish-coalescing/), and the [Ternary Operator](https://flaviocopes.com/javascript-ternary-operator/)
* Using [React Router](https://reactrouter.com/) to browse Github issues.

#### Well, this is confusing as hell

* Old React says: [If-Else in JSX](https://react-cn.github.io/react/tips/if-else-in-JSX.html)
    > if-else statements don't work inside JSX. This is because JSX is just syntactic sugar for function calls and object construction.
* But new React says: [Conditional Rendering](https://react.dev/learn/conditional-rendering)
    > Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

Let's [take a look](https://codesandbox.io/s/react-jsx-conditional-v5zf9v)

CodeSandbox Demo for [Dealing with empty arrays](https://codesandbox.io/s/optional-chaing-nullish-coalescing-2m4jdn)

#### Resources

* [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

#### Sneak Preview

* [Migrating your React Router App to Remix](https://remix.run/docs/en/main/guides/migrating-react-router-app)

### Day 2

All.the.questions!! Let's answer 'em!

(Also, y'all are going to [help _me_ debug!](https://github.com/seanrreid/react-router-v6.4_CCS_11-2023))

Code along! We'll be referencing our [Github Issues API exercise](https://github.com/ccs-fall-2023/exercises/tree/main/js-github-fetch#github-issues-lookup), but starting over with React Router.

#### React Router v6

React Router v6 introduces more than a few changes over v5 (and v5 had a _lot_ of big changes over v4).

[Log Rocket](https://blog.logrocket.com/migrating-react-router-v6-guide/#change-react-router-v6) does a great job looking into these changes, with some history around the benefits/drawbacks of the different apporoaches.

> React Router v5 came close to perfection, but there were still some flaws. The v5 library has some issues with the routing algorithm and routing configuration defaults (JSX component prop defaults). Also, the v5 came with some inconsistent, somewhat complex APIs that affect the developer’s productivity. Moreover, v5’s bundle size weighs more compared to what it offers as a React library.

Log Rocket also goes into the [benefits of v6 over v5](https://blog.logrocket.com/migrating-react-router-v6-guide/#benefits-react-router-v6-over-v5).

* [CodeSanbox of React Router v5](https://codesandbox.io/s/react-router-v5-y5l4ch?file=/src/App.js)

### Day 3

It's Grok Eve y'all!

#### Remix JS

Next week we'll be getting into Python, and then Django. We'll use Remix as a "bridge" between our familiarity with frontend/client-side technology and backend/server-side technology.

From [Remix.run](https://remix.run)

> Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience.

Large portions of Remix are _just_ React-Router. You can read more about that here: [Discussions: React Router](https://remix.run/docs/en/main/discussion/react-router)

> Remix is built on top of React Router and maintained by the same team. This means that you can use all the features of React Router in your Remix app.
>
> This also means that the 90% of Remix is really just React Router: a very old, very stable library that is perhaps the largest dependency in the React ecosystem. Remix simply adds a server behind it.

You'll notice that the [Remix setup tutorial](https://remix.run/docs/en/main/start/tutorial) will look _very_ familiar.

#### READ THIS

* [Evan Stern: Remix: The Framework you should learn about](https://medium.com/@evanstern_94664/remix-the-framework-you-should-learn-about-928d4060e8ad)

This should sound familiar, or at least have some familiar terminology (emphasis added)

> Remix turns browser functionality into an efficient web development tool, utilizing classic standards and web fundamentals for crafting HTML forms. When building a remix app, the ***“action”*** and ***“loader”*** functions, Remix handles everything.

#### Other Resources

* [React Router: Main Concepts](https://reactrouter.com/en/main/start/concepts)
* [Machine Servant: Untangling Remix Optimistic Ui With Multiple Destinations](https://machineservant.com/blog/2022-11-12-remix-optimistic-with-ui-multiple-destinations/)
* [Remix vs Next.js](https://remix.run/blog/remix-vs-next)

### Day 4

IT'S TIME FOR [GROK 2023](https://grokconf.com)!!

Go meet people, hear talks, have discussions.

### Day 5

The post-Grok hangover.

#### Teach a Thing

In place of Show'n'Tell'Debug, we're going to do Shown'n'Teach!

On _Monday_ (10/09) you will be required to teach the class on an assigned topic.  We'll dedicate the first 90 minutes of the day to these lessons (there is a time limit!).

##### Requirements

* Each presentation must be at _least_ 15 minutes long, but can go a maximum of 20 minutes.
* Each presentation must involve a code demo.
* It is recommended, but not required, that you include the class as much as possible.
* Be prepared for follow up questions from the class.

For your topic, answer the following questions:

1. What is it?
2. How does it work?
3. Why is it important?

##### Topic Assignments

| Name    | Language   | Topic               |
|---------|------------|---------------------|
| Austin  | JavaScript | The `class` keyword |
| Brandon | JavaScript | Scope               |
| David   | React      | Props               |
| Mary    | React      | State               |
| Oliver  | JavaScript | The `fetch()` API   |
| Sam     | HTML       | Form element        |
| Val     | HTML/CSS   | Responsive Design   |

## Week 7

Now, for something completely different!

Python is going to be our introduction to backend development. From here, we'll go right into Django.

> "I assure you I've done a lot of really stupid things, and none of them bother me. All the mistakes, and all the dopey things, and all the times I was embarrassed — they don't matter. What matters is that I can kind of look back and say: Pretty much any time I got the chance to do something cool I tried to grab for it — and that's where my solace comes from.

Randy Pausch [_The Last Lecture}](https://www.amazon.com/Last-Lecture-Randy-Pausch/dp/1401323251?tag=chimindustry-20&geniuslink=true) via [1000 Leaps](https://1000leaps.com/2023/10/07/85-the-last-lecture/)

### Day 1

#### First 1.5 Hours

You teach us!

##### Topics

Randomized with the help of ChatGPT 😁

| Name    | Language   | Topic               |
|---------|------------|---------------------|
| Mary    | React      | State               |
| David   | React      | Props               |
| Brandon | JavaScript | Scope               |
| Sam     | HTML       | Form element        |
| Val     | HTML/CSS   | Responsive Design   |
| Austin  | JavaScript | The class keyword   |
| Oliver  | JavaScript | The fetch() API     |

#### Second 1.5 Hours

Python!

Download Python here: [Python.org Downloads](https://www.python.org/downloads/)

#### Presentations

We may not get to all of these, but I'm listing them all here just in case.

* [Python -> JS](https://docs.google.com/presentation/d/1H1QWJuDiXZTMuKaoVc0ln5vCMCe6zvNroRqDO2zFpLg/edit?usp=sharing)
* [Python Intro](https://docs.google.com/presentation/d/1wOcDnevppnLO9PT3kBBv0T-NcNyiMmp-mCpZGDloSUU/edit?usp=sharing)
* [Python II: Secret of the Ooze](https://docs.google.com/presentation/d/1H1QWJuDiXZTMuKaoVc0ln5vCMCe6zvNroRqDO2zFpLg/edit?usp=sharing)

#### READ THIS

Seriously, read it, it's short: [Creativity is like Breathing](https://theoatmeal.com/comics/creativity_breathing)

#### Resources

* [Flavio Copes - Introduction to Python](https://flaviocopes.com/python-introduction/)

### Day 2

We'll continue learning Python's syntax, as well as looking at how JavaScript and Python are similar.

#### Presentations

* [Python II: Secret of the Ooze](https://docs.google.com/presentation/d/1cys408wjh9LY29ZccZnjPgUxRACfHSaamfe0Wpx2D7o/edit?usp=sharing)
* [Python III: Dream Warriors](https://docs.google.com/presentation/d/1HKomSMmWoze9dubMH8lz07eXRmMY2A67EDZiRwWuA9k/edit?usp=sharing)

#### Files

<!-- [Python CheatSheet](./files/Python_Cheatsheet.pdf) -->

### Day 3

Taking a detour from Python into SQL...

#### Presentations

* [Intro to Backend: SQL](https://docs.google.com/presentation/d/1YmJdFVibKDHaV7-l_bkn32ib42lBuiPBvtEerOad4Tg/edit?usp=sharing)
* [Intro PSQL](https://docs.google.com/presentation/d/1dXS8LL3yzo-QPqwdicnlmNfJYicOjFkYS9pBwKW2uoQ/edit?usp=sharing)

#### Tools

* [ElephantSQL](https://www.elephantsql.com/)
<!-- * [PostgreSQL Cheat Sheet](./files/PostgreSQL-Cheat-Sheet.pdf) -->

#### Installation

* **RECOMMENDED INSTALLER FOR MAC** [Postgres.app](https://postgresapp.com/downloads.html)
* [Installing Postgres via Brew](https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3)

#### Recommended Reading

* [The most valuable software developer skills to get hired now](https://www.infoworld.com/article/3583931/the-most-valuable-software-developer-skills.html)<br/>**NOTE**: This is a couple years old, so some of the data is going to be out of date. But, there is some high-level guidance that remains valid.

    > Stack Overflow asked thousands of developers how frequently they learn a new language or framework for its 2020 Developer Survey, with around **75% of respondents saying they learn a new technology at least once a year**.

    (_emphasis added_)

* [Why Learning to Code is So Damn Hard](https://www.thinkful.com/blog/why-learning-to-code-is-so-damn-hard/)

    > [Quincy] was convinced that the seemingly normal programmers I ran into were actually sociopaths who had experienced, then repressed, the trauma of learning to code.

<!-- ![Coding Confidence vs Competence](./files/LearningToCode_20200306_Blog_Graph_08-1.jpg) -->

Gee, why does that look familiar? 🤔

### Day 4

OOP, but with 🐍

#### Presentations

Turns out, there are at least 2 more presentations!

* [SQL Joins](https://docs.google.com/presentation/d/1ty4X_BHb-4rNiLtuACPsv0OxXlAyJGjThfJyiO0JI-U/edit?usp=sharing)
* [Python OOP](https://docs.google.com/presentation/d/1oh-Bb836t5LixOopCjhpqsJSOe1IoDIOaetsAEPQBVc/edit?usp=sharing)

#### In Class Exercises

* We'll repeat some of our [JavScript OOP exercises, but using Python](./IN_CLASS_WORK.md).

#### Helpful Resources, aka "WTF QUOTES??"

Inspired by [Val's Question #get-help](https://carolinacodeschool.slack.com/archives/C05MR1ZEBC3/p1697069567798859)

* [Stack Overflow: What is the difference between single quotes and double quotes in PostgreSQL?](https://stackoverflow.com/questions/41396195/what-is-the-difference-between-single-quotes-and-double-quotes-in-postgresql)
* [Prisma.io: How to use single and double quotes in PostgreSQL](https://www.prisma.io/dataguide/postgresql/short-guides/quoting-rules)
* [Don’t use double quotes in PostgreSQL](https://lerner.co.il/2013/11/30/quoting-postgresql/)
  > Single quotes and double quotes in PostgreSQL have completely different jobs, and return completely different data types.  Single quotes return text strings.  Double quotes return (if you can really think of them as “returning” anything) identifiers, but with the case preserved.

## Week 8

### MVC + Django = Backend Web Development

Per the documentation:

> Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

Read [the overview](https://docs.djangoproject.com/en/4.2/intro/overview/) to get a deeper insight into what Django offers.

### Motivational Help

From the [October 15th edition of Brain Food](https://fs.blog/brain-food/october-15-2023/)

#### Hard Mode vs Easy Mode, You Decide

> Your position determines if you're playing on easy mode or hard more.
>
> Many people unintentionally choose to play on hard mode by not sleeping enough, not eating healthy food, or not investing in their most important relationships.
>
> You can't remove struggle or emotion from life, but you can put yourself in a position where they don't control you.
>
> Consistently doing the simplest things makes the biggest difference.

### Consistency >>>> Talent

> Talent and potential mean nothing if you can't consistently do the boring things when you don't feel like doing them.

### Day 1

It's time for Server Side Development!

* MVC architecture
* What is Django?
* MVC vs Django MVT

#### Presentations

* [Intro to MVC (with bonus Iron Man!)](https://docs.google.com/presentation/d/1K8CqTaSJLHZstxJjKGIlADvXaOVHdBY56XOzyRqL7QY/edit?usp=sharing)
  I think _this_ is actually the final slideshow! 👀

#### In Class

* [Writing your first Django app, part 1](https://docs.djangoproject.com/en/4.2/intro/tutorial01/)
* [Django Models](https://docs.djangoproject.com/en/4.2/topics/db/models/)
* [Django Class Based Views](https://docs.djangoproject.com/en/4.2/topics/class-based-views/)

#### ⭐⭐ READ THIS FIRST! ⭐⭐

* [MDN: Django Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)

#### From the Django Docs

> Django is named after [Django Reinhardt](https://en.wikipedia.org/wiki/Django_Reinhardt), a jazz manouche guitarist from the 1930s to early 1950s. To this day, he’s considered one of the best guitarists of all time.

This FAQ article explains the Djangon perspective on MVC vs MVT: [Django appears to be a MVC framework, but you call the Controller the “view”, and the View the “template”.](https://docs.djangoproject.com/en/4.2/faq/general/#django-appears-to-be-a-mvc-framework-but-you-call-the-controller-the-view-and-the-view-the-template-how-come-you-don-t-use-the-standard-names)

#### Bookmark these

* [Django FAQ](https://docs.djangoproject.com/en/4.2/faq/general/)
* [Django Databases: PostgreSQL notes](https://docs.djangoproject.com/en/4.2/ref/databases/#postgresql-notes)
* [Django Learning Subreddit](https://www.reddit.com/r/djangolearning/wiki/index/)

### Day 2

Today we're going to break down the [Django Tutorial from MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Tutorial_local_library_website).

#### Common Steps, a Review

Start with:

```python
pip install django
django-admin startproject [YOUR_PROJECT_NAME]
cd [YOUR_PROJECT_NAME]
```

Run the server for your project:

```python
python manage.py runserver
```

Create your web apps in the current directory:

```python
python manage.py startapp [YOUR_APP_NAME]
```

_Working with `pyenv` here would also be handy! There's more information about that [here](./RESOURCES.md#whats-the-deal-with-pyenv)._

#### Resources

* [Django Rest Framework](https://www.django-rest-framework.org/)
* [Django Docs: PostgreSQL notes](https://docs.djangoproject.com/en/4.2/ref/databases/#postgresql-notes)

#### What's the differnce in a project and an app?

* [Project VS App in Django](https://atufashireen.medium.com/project-vs-app-in-django-755cf2a82312)

> A _project_ refers to the entire application and all its parts.
>
> An _app _refers to a submodule of the project. It’s self-sufficient and not intertwined with the other apps in the project [...] An app typically has its own `models.py`` (which might actually be empty). [...] A simple project might only have one app.

#### Using `requirements.txt`, it's like `package.json` but with 🐍🐍🐍

* [LearnPython.org: The Python Requirements File and How to Create it](https://learnpython.com/blog/python-requirements-file/)
* [How to install Python packages with pip and requirements.txt](https://note.nkmk.me/en/python-pip-install-requirements/)

### Day 3

Time for REST! (not _a_ rest, but Representational State Transfer)

Let's build the Apple CEOs app, but this time as an API.

Also, we're gonna get _CRUDdy_!

#### Helpful Resources

What the heck is "serialization??"

It's basically a way for the Django REST Framework to convert your data into JSON or XML that can be sent as a `response` from your API. The inverse, deserialization, takes place when the framework needs to convert `requests` into something Python understands.

* [Django REST Framework Quickstart](https://www.django-rest-framework.org/tutorial/quickstart/#project-setup)

Isaac recommended using this to manage installs, it looks like it's much easier than jumping through `pip` and `pyenv` separately.

* [Pipenv](https://pypi.org/project/pipenv/)

### Day 4

Just call us IHOP because we're about to serve FULL STACKS! 🥞

* Apple CEOs is getting an interface.
* Django API backend + PSQL database + React frontend 🤯🤯

### Day 5

#### Journal

Hey, remember that journal we started on even numbered weeks that I _totally_ forgot about on Week 6??

Let's bring that back to life and something in for Week 8! Reflect on where you are today, compared to where you were when you started. Brag on yourself, you've earned!

#### JWT

Here ares some additional resources if you want to read up more on JWT and user authentication...

* [Django Rest Doc: Authentication](https://www.django-rest-framework.org/api-guide/authentication/)
* [SimpleJWT Docs: Getting Started](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)
* [How to Implement Tokenization using JWT and Django Rest Framework](https://www.freecodecamp.org/news/how-to-use-jwt-and-django-rest-framework-to-get-tokens/)
* [How to Use JWT Authentication with Django REST Framework](https://simpleisbetterthancomplex.com/tutorial/2018/12/19/how-to-use-jwt-authentication-with-django-rest-framework.html)

#### Val's Tutorial Corner

Here's the sketch Val did to illustrate the diffence between React's SPA Client Side templates vs Django's Server-Side templates.

<!-- ![Val's Sketch for React vs Django Templates](./img/vals_template_sketch.jpg) -->

## Week 9

### Putting it all together

It's the last week of instruction, next week is all projects, all the time.

This week will be:

* Tying up any loose ends
* Working through user authentication
* Building and deploying full-stack applications
* Preparing for projects

LET'S GO!! 🚀

### Day 1

Here we go, last week of instruction!!

There won't be as many resources/exercises this week. Our primary focus for the week will be building out a feature complete full-stack app.
We're going to act like we're an agency and have been tasked to build an app for a client.

Welcome to CRUDCo, Inc! Let's build rad stuff!

* Let's talk all things JWT (we'll be doing more JWT this week).
* Register for an account on [Render.com](https://dashboard.render.com/).
    This will be needed to deploy later.

Let's build some CRUD!

CRUDCo Inc has been hired to write a URL shortening service for a client.

#### Requirments

* Users can submit a long URL.
* URLs are saved in a database.
* Unique IDs are generated for each URL.
* The short url is available via a list when a user logs in.

#### To discuss

* What relationships do we need to create (aka "What is our schema?")?
* What is our Minimum Viable Product (MVP)?
* What are all the parts we'll need to build out the MVP?

#### JWT Review

Here ares some additional resources if you want to read up more on JWT and user authentication...

* [Django Rest Doc: Authentication](https://www.django-rest-framework.org/api-guide/authentication/)
* [SimpleJWT Docs: Getting Started](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html)
* [How to Implement Tokenization using JWT and Django Rest Framework](https://www.freecodecamp.org/news/how-to-use-jwt-and-django-rest-framework-to-get-tokens/)
* [How to Use JWT Authentication with Django REST Framework](https://simpleisbetterthancomplex.com/tutorial/2018/12/19/how-to-use-jwt-authentication-with-django-rest-framework.html)

#### Render Docs

* [Deploying on Render](https://render.com/docs/deploys)

### Day 2

**NOTE**: Renaming folders/files after running `django-admin startproject ...` or `django-admin startapp ...` has some unintended side effects.
In general, _avoid_ renaming existing folders when possible. It'll just save you a lot of headache and extra work.

#### Today's Goals

We're going to keep working on the CRUDCo URL Shortening App.

<!-- ![It's URL Shortening!](./img/shortening.png) -->

#### Review

* Code Review
  * What worked?
  * Where are you stuck?
* Check our Models
  * Review [Django REST Framework: PrimaryKeyRelatedField](https://www.django-rest-framework.org/api-guide/relations/#primarykeyrelatedfield)
  * Verify migrations
* Test our API to add/update URLs via POSTMan

#### New Features

* Add in JWT and Authentication
* Protect `POST` requests
* Protect `GET` requests as well? Or allow "read only?"
  * Review [Django REST Framework: Permissions](https://www.django-rest-framework.org/api-guide/permissions/)
* Let's add some user and data!
* Prepare for some design work on the frontend

#### More JWT Reading

* [Flavio Copes: JWT](https://flaviocopes.com/jwt/)
* [Okta: A Beginner's Guide to JWT](https://developer.okta.com/blog/2020/12/21/beginners-guide-to-jwt)

#### Worth a listen

* [Syntax.fm Episode 026: All About Redux and Cookies vs JWT](https://syntax.fm/show/026/all-about-redux-and-and-cookies-vs-jwt)
* [Syntax.fm Episode 510: How to Build an API in 2022](https://syntax.fm/show/510/how-to-build-an-api-in-2022)

#### Worth a Read

* [One Thing Better: How to Recover When You Mess Up](https://jasonfeifer.beehiiv.com/p/you-messed-up-now-here-s-how-to-regain-your-confidence)

### Day 3

> "I hope you're proud of yourself for the times you've said 'yes,' when all it meant was extra work for you and was seemingly helpful only to someone else." — Fred Rogers.

#### Today's Goals

We're going to keep working on the CRUDCo URL Shortening App.

<!-- ![It's More URL Shortening!](./img/shortening2.png) -->

OH, BTW, [here are the details for the final project!](../../final-project/README.md)

#### Review

* Code Review
  * What worked?
  * Where are you stuck?
* Check our Models
  * Review [Django REST Framework: PrimaryKeyRelatedField](https://www.django-rest-framework.org/api-guide/relations/#primarykeyrelatedfield)
  * Verify migrations
* Test our API to add/update URLs via POSTMan
* Add in JWT and Authentication
* Protect `POST` requests
* Protect `GET` requests as well? Or allow "read only?"
  * Review [Django REST Framework: Permissions](https://www.django-rest-framework.org/api-guide/permissions/)
* Let's add some user and data!
* Prepare for some design work on the frontend

#### New Features

* Build forms to login
* Build forms to submit a new URL
* Handle the _actual_ redirection!

#### Helpful Links

* [Real Python: Django Redirects: A Super Simple Example](https://realpython.com/django-redirects/#django-redirects-a-super-simple-example)
* [Django ORM Cookbook](https://books.agiliq.com/projects/django-orm-cookbook/en/latest/index.html)
* [Vite ENV and Modes](https://vitejs.dev/guide/env-and-mode.html)

### Day 4

We're coming up on the end of the CRUDCo URL Shortening App.
Oh, and it's PICTURE DAY! SMILE! 📷 😁 📷

#### Review

* Code Review
  * What worked?
  * Where are you stuck?
* Checked our Models
* Tested our API to add/update URLs via POSTMan
* Added in JWT and Authentication
* Protected `POST` requests
* Protected `GET` requests as well? Or allow "read only?"
* Added some users and data!
* Built the frontend
* Built forms to login
* Built forms to submit a new URL

#### New Features

* Handle the _actual_ redirection!
* Handle getting the user information we need from "Simple" JWT 😂
* Let's talk about Protected Routes (and why they're super confusing!) 🥴
* Let's talk about context!

## Weeks 10-12

Final project time! Go make something rad!!

You can review the [final project guidelines here](./final-project/README.md)

> "Life is not just about peaks and valleys, about wins and losses. Life is about the journey. You hear that all the time. You’ve got to absorb that. You’ve got to know that. The journey has to become the destination because there is no true destination. There is no endpoint. There is no goal. All rivers run to the sea and yet the sea is not full. Life goes on; accept what life gives you. The sun rises the morning after you win the championship or lose in the first round."

— Paul Assaiante, _Run to the Roar_ [Amazon link for those interested in the book](https://www.amazon.com/Run-Roar-Coaching-Overcome-Fear/dp/1591844711)
