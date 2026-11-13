# API Contract

## Objective
1. Define an API Contract

## Your Task

Create a new document for your API contract. Use the following questions to guide you. There is a template at the end per enpoint if you choose to use it. 

1. Start by listing the **use cases** of the program. 
2. Create a list of **business rules** to define the interactions of our program.
3. Create a general list of the main "nouns" required for your program and their associated fields. *Your database developer will eventually turn this into a database schema.*
4. For each resource, ask:
    1. Which actions do we need: create, read one, read all, update, delete?
    2. What URL will each endpoint use? For example, `/api/users` or `/api/users/:id`.
    3. Which HTTP method fits each action (GET, POST, PUT, PATCH, DELETE)?
    4. Do any endpoints need to be nested, like `/api/users/:id/posts`?
    5. Are there actions that don’t fit plain CRUD, like login, search, or checkout? What will those endpoints look like? 
5. For each endpoint:
    1. What does the front end need to send?
    2. Does the data go in the URL path, query parameters, or request body?
    3. What format is the request body, and what does an example look like?
    4. Which fields are required, and what happens if one is missing?
    5. Are there limits on the input, such as maximum length or allowed values?
6. For each endpoint, plan for errors:
    1. What can go wrong with each endpoint?
    2. Which status codes will we use (400, 401, 403, 404, 500)?
    3. What will every error response look like? Agree on one consistent format, for example { "error": "message" }.
7. Which endpoints require a user login? Are there different roles, and if so which endpoint go with which role?
8. Decide on a process for making changes to the API contract? Who needs to approve it and how will you communicate with the team?

#### Optional Template
```
Endpoint name:
Method + URL:
Description:
Auth required? (Y/N):
Request params/body (with example):
Success response (status + example):
Error responses (status + example):
Owner (back end):
Used by (front-end page/component):
```