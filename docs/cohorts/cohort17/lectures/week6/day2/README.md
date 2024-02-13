---
sidebar_position: 2
sidebar_label: Day 2
title: Week 6 - Day 2
keywords:
    - FastAPI
    - PostgreSQL
---
<!-- markdownlint-disable no-inline-html -->

<!--
Implementing MVC in FastAPI:

FastAPI's route handlers essentially act as controllers
by accepting user requests and interacting with models as needed.
-->

## Presentations

- [SQL Joins](https://docs.google.com/presentation/d/17iyaNvewtzZUVR8y5qNj9C6nHBAaHtrb6zAeR4XRGuc/edit?usp=sharing)

## Lessons

- [SQL Databases](/docs/lessons/databases/sql/)

## SQL (continued)

### Postico

- Download the [Evaluation Version](https://eggerapps.at/postico2/buy.html)
- Install it on your machine

### Schools -> Courses -> Students

We're going to look at `JOIN` statements, and a many-to-many relationship.

```sql
CREATE DATABASE some_school_name;

-- REMEMBER TO CONNECT TO THE DATABASE
\c some_school_name

CREATE TABLE students (
    id serial PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE courses (
    id serial PRIMARY KEY,
    name VARCHAR(50)
);

-- many-to-many,
-- Enrollments tracks students & courses
CREATE TABLE enrollments (
    enrollment_id serial PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Let's use a JOIN statement to handle our lookup
SELECT
  students.name,
  courses.name
FROM enrollments
INNER JOIN students
  ON students.id = enrollments.student_id
INNER JOIN courses
  ON courses.id = enrollments.course_id;
```

## Fast API

Today, we'll get started with [FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/)

### Helpful Resources

- [10 Tips for adding SQLAlchemy to FastAPI](https://bitestreams.com/blog/fastapi-sqlalchemy/)
- [5 Advanced Features of FastAPI You Should Try](https://levelup.gitconnected.com/5-advance-features-of-fastapi-you-should-try-7c0ac7eebb3e)

## Comparing CRUD, Routes, and SQL Commands

This table illustrates how a usual CRUD (Create, Read, Update, Delete) application corresponds to application routes, and ultimately the SQL statements that might be triggered by those routes.

| CRUD   | ROUTES | SQL    |
| ------ | ------ | ------ |
| CREATE | POST   | INSERT |
| READ   | GET    | SELECT |
| UPDATE | PUT    | UPDATE |
| DELETE | DELETE | DELETE |
