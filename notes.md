# Data Modeling Notes

## Requirements

Build a system to manage students and cohorts for LS.

Manage students,
Manage cohorts,
Add students to cohorts

- a cohort can have multiple students.
- a student can join more than one cohort over time.

## Relationships

- one to one (ignore)
- one to many (most common)
- many to many (a trick)

# Principles

- every table must have a primary key.
- work on two or three entities (each entity is a noun --> table) at a time.
- one to many --> use a foreign key (a column in a table that references a primary key in another table.)
- the foreign key goes on the many side.
- many to many --> use a third table.
- the third table could have additional information.

Example of a one to many relationship:

- a "track" can have many "cohorts."
- a "cohort" belongs to only one "track."
