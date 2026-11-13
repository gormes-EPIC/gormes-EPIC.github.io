# Data Design Diagram: Checklist

> **The goal:** as a team, create two diagrams that explain how data flows through your program: a UX diagram of your screens and how users move between them, and a UML database diagram of your tables and their properties.

## Step 1: Get Set Up

- [ ] Look at the two examples at the end of the [Data Design Diagram](#Software-Engineering/Data-Design-Diagram) page.
- [ ] Have your [Team Charter](#Software-Engineering/Team-Charter) and [API Contract](#Software-Engineering/API-Contract) open. Your use cases and resources are a great starting point for both diagrams.
- [ ] Choose a tool your whole team can edit, like Google Drawings, [Excalidraw](https://excalidraw.com/), [Lucidchart](https://www.lucidchart.com/pages), or Figma.
- [ ] Decide who will work on each diagram. Everyone should review both.

## Step 2: List Your Screens

- [ ] Go through your use cases, and list every screen a user needs to complete them.
- [ ] Don't forget screens like log in, sign up, settings, and error pages.
- [ ] For each screen, write a few words about the main data it shows.

## Step 3: Draw Your Screens

- [ ] Draw a box or a quick mockup for each screen.
- [ ] Label each screen with its name.
- [ ] Show the main buttons, links, and data on each screen. Rough sketches are fine. You don't need final colors or fonts.

## Step 4: Connect Your Screens

- [ ] Draw an arrow for every way a user can move from one screen to another.
- [ ] Label each arrow with the button, link, or action that moves the user, like "Sign in" or "Click a club."
- [ ] Include ways back, like "Back" buttons or a link to the home screen.
- [ ] Walk through each use case on your diagram, from start to finish. Can a user complete every one by following the arrows?

## Step 5: List Your Tables

- [ ] List the main "nouns" in your program. Each one will probably become a table. *Your API contract's resources are a good place to start.*
- [ ] For each table, list its columns and each column's data type.
- [ ] Give each table a primary key, a unique value like an id number.
- [ ] Look for many-to-many relationships, like students and classes. Add a joining table for each one.

## Step 6: Draw Your Database Diagram

- [ ] Draw a box for each table, listing its columns and data types.
- [ ] Mark each table's primary key (PK).
- [ ] Mark every foreign key (FK): a column that points to another table's primary key.
- [ ] Draw lines between related tables.
- [ ] Label each line's relationship, like one-to-one or one-to-many.

<details>
<summary>Stuck on keys and relationships? Review these resources.</summary>

- [Database Design](#Software-Engineering/Database-Design): see the Entity-Relationship Diagrams section.
- [Crow's Foot ERD for Beginners](https://medium.com/@callista.m.azizah/crows-foot-erd-for-beginners-a-tutorial-1effc8a326c6)

</details>

## Step 7: Check That Your Diagrams Match

- [ ] For each screen in your UX diagram, check that every piece of data it shows is stored in a table.
- [ ] Check that every table is used by at least one screen.
- [ ] Check that your diagrams match your API contract. Update whichever one is out of date.

## Step 8: Review and Submit

- [ ] Review both diagrams as a team. Could someone outside your team understand your program from them?
- [ ] Make sure every label is easy to read.
- [ ] Export both diagrams as images or PDFs.
- [ ] Submit both diagrams on Google Classroom.
- [ ] ✋ Walk your instructor through both diagrams.
