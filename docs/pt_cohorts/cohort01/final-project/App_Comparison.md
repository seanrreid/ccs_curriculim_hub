---
title: App Comparison
sidebar_position: 2
---

## Final Project vs Class Project

Here is a comparison between the ShrinkRay and an example final app.

### Backend

|  ShrinkRay                             | Your Project
| -----------------------------------    | ------------------------------------
| Fast API                               | FastAPI
|   ---                                  |   ---
| **Models**                             | **Models**
| - Users                                | - Users
| - URLs (user submitted data)           | - Posts/Shows/Parts/Cigars (user submitted data)
|   ---                                  |   ---
| **JSON**                               | **JSON**
| - Tokens                               | - Tokens
| - URLs                                 | - Posts/Shows/Parts/Cigars
|   ---                                  |   ---
| **URLs (aka "routes")**                | **URLs**
| - `/token` (login)                     | - `/token` (login)
| - `/logout` (logout)                   | - `/logout` (logout)
| - `/urls` (show all posts)             | - `/[user data]/[id of single item]` (show all items or single item)
| - `/snd/[variable]` (trigger shortener)|

### Frontend

| CrudCo ShrinkRay                       | Your Project
| -----------------------------------    | ------------------------------------
| React + React Router                   | React + React Router
|   ---                                  |   ---
| `<form method=POST>`                   | `<form method=POST>`
| - Submit request to API                | - Submit request to API
| - Send To -> API Route                 | - Send To -> API Route
| - `POST` triggers call to Model        | -`POST` triggers call to Model
| - Model updates DB, new entry made     | - Model updates DB, new entry made
