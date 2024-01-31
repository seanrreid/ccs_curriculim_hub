---
title: Website Exercises
sidebar_label: Exercises
sidebar_position: 2
---

## Todo List Review

This tutorial has a solid approach, and is similar to the previous day's exercise. The first four steps in particular are a good way to approach almost _all_ projects. I'm including it here for you to review, but don't need to necessarily complete.

* [Create To-do List using Vanilla JavaScript](https://dev.to/karandeveloper/creating-todo-list-using-vanilla-javascript-2l7l)

## The Discogs API

Hit the music, we're going to start incorporating external data via [Discogs](https://www.discogs.com/)

You can find all the documentation on  [the Discogs API here](https://www.discogs.com/developers/#page:home,header:home-quickstart).

Specifically, the freely available resources we want to use initially are:

* Information on looking up [by artist ID is available here](https://www.discogs.com/developers/#page:database,header:database-artist)
* Information on a [particular release by an artist is available here](https://www.discogs.com/developers/#page:database,header:database-release)

Per the Discog API docs:
> The Release resource represents a particular physical or digital object released by one or more Artists.

<!--
@TODO - This requires auth, we'll get to that tomorrow

* Details on sending a basic search (via query parameters) [cane be found here](https://www.discogs.com/developers/#page:database,header:database-search) -->

Note that Discogs does employ rate-limiting:

> Requests are throttled by the server by source IP to 60 per minute for authenticated requests, and 25 per minute for unauthenticated requests, with some exceptions.
>
> Your application should identify itself to our servers via a unique user agent string in order to achieve the maximum number of requests per minute.
>
> Our rate limiting tracks your requests using a moving average over a 60 second window. If no requests are made in 60 seconds, your window will reset.

As far as the API is concerned, the entire building is sending one request.  To that end, be mindful with regards to requests. Make sure your requests aren't firing in an endless loop!
