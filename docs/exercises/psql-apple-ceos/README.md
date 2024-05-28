---
title: SQL - Apple CEOs pt 1
sidebar_label: SQL - Apple CEOs
sidebar_position: 5.02
---

## Getting Started

- Create an `apple_ceos_sql` folder
-This folder will contain _two_ SQL files.

### Create a Schema File

- Create a `schema.sql` file for an Apple CEO database.
  - Make sure you innclude a `CREATE TABLE` statement to create a table called `apple_ceos`.

The table will contain the following columns:

- Name
- Slug (_lowercase version of the name without spaces_)
- First Year Active

Make sure to use the appropriate data types for each column to represent the info it will recieve.

**REMINDER:** Use an auto-incrementing primary key `ID`

### Create a Seed File

Create a `seed.sql` file to populate the table. Include an `INSERT` statement to add one, or more, Apple CEOs with all the associated data.

This file will use the following information to populate the columns you defined above:

| CEO Name         | Year |
| ---------------- | ---- |
| Michael Spindler | 1993 |
| Gil Amelio       | 1996 |
| Mike Markkula    | 1977 |
| Tim Cook         | 2011 |
| Mike Scott       | 1978 |
| John Sculley     | 1983 |
| Steve Jobs       | 1976 |
| Steve Jobs       | 1997 |

## Level Up

- Using either your local PSQL environment, or using ElephantSQL, run the schema and see files to create and populate a database.
- Run queries on your database to return the list of CEOs and the years they served, in chronological order.
- Save this query, and any others your try, in a file called `apple_ceos_queries.sql`

## Associated Lessons

|        | Lesson Topic |
|--------|:------------------------|
| :memo: | [SQL Databases](/docs/lessons/databases/sql) |
