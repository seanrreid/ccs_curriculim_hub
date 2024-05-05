---
title: Supabase
sidebar_label: Supabase
sidebar_position: 3
---

## Overview

[TBD]

## What is Supabase?

> Supabase is an open source Firebase alternative.
> Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

[Supabase.com](https://supabase.com/)

Supabase functions as a backend-as-a-service (BaaS) platform, offering a comprehensive set of tools to streamline web and mobile app development. Here's a breakdown of its core functionalities and the advantages it provides:

## Benefits of Supabase vs other platforms

### Database

Supabase leverages PostgreSQL, a powerful and mature relational database engine, for data storage. This ensures data integrity, scalability, and the ability to handle complex queries.

### Authentication

Supabase offers built-in user authentication, including email/password, social logins (OAuth), and passwordless authentication. This eliminates the need for developers to implement these features from scratch.

### File Storage

Supabase provides integrated file storage for storing various file types like images, videos, and documents. This simplifies file management and retrieval within your application.

### Real-time Features

Supabase empowers real-time functionality by enabling data synchronization across connected devices. This is ideal for applications that require constant updates, such as chat or collaborative editing tools.

### Open-Source

Supabase's open-source nature grants developers flexibility and control over their backend. They can customize the codebase and self-host the service if desired.

### Cost-Effective

Supabase offers a generous free tier that includes a good range of features, making it suitable for startups and personal projects.

## Example

```js
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

supabase
  .auth
  .signUp({ email, password })
  .then((data) => {
    console.log(data);
    // handle successful sign-up
  })
  .catch((error) => {
    console.error(error);
    // handle sign-up error
  });
```
