# API Contract: Checklist

> Work from top to bottom and check off each step as you finish it. Your progress is saved in this browser, so you can come back to it later.
>
> **The goal:** write an API contract that describes every endpoint your program needs, so that front-end and back-end developers can build their parts separately and still have them fit together.

## Step 1: Get Set Up

- [ ] Create a new shared document for your API contract, and share it with your team.
- [ ] Have your [Team Charter](#Software-Engineering/Team-Charter) open. You'll need your project goal and team roles.
- [ ] Look at the optional endpoint template below, and decide as a team whether you'll use it.

<details>
<summary>See the optional endpoint template.</summary>

Copy this once for each endpoint:

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

</details>

## Step 2: Use Cases and Business Rules

- [ ] List the **use cases** of your program: everything a user should be able to do. Write each one as a short sentence, like "A user can create an account."
- [ ] List the **business rules**: the rules that control how your program behaves, like "A username must be unique" or "Only the owner can delete a post."

## Step 3: Resources

- [ ] List the main "nouns" (resources) your program needs.
- [ ] For each resource, list its fields. *Your database developer will eventually turn this into a database schema.*

## Step 4: Plan the Endpoints

For **each resource**:

- [ ] Decide which actions you need: create, read one, read all, update, and/or delete.
- [ ] Choose the URL for each endpoint, like `/api/users` or `/api/users/:id`.
- [ ] Choose the HTTP method that fits each action (GET, POST, PUT, PATCH, DELETE).
- [ ] Decide whether any endpoints should be nested, like `/api/users/:id/posts`.
- [ ] Look for actions that don't fit plain create/read/update/delete, like login, search, or checkout. Decide what those endpoints will look like.

## Step 5: Describe Each Request

For **each endpoint**:

- [ ] Write down what the front end needs to send.
- [ ] Decide whether that data goes in the URL path, the query parameters, or the request body.
- [ ] Write the format of the request body, with an example.
- [ ] Mark which fields are required, and what happens if one is missing.
- [ ] Note any limits on the input, like a maximum length or a list of allowed values.
- [ ] Write what a successful response looks like: its status code and an example.

## Step 6: Plan for Errors

- [ ] For each endpoint, list what can go wrong.
- [ ] Choose a status code for each problem (for example, 400, 401, 403, 404, or 500).
- [ ] Agree on one error format that every endpoint will use, like `{ "error": "message" }`.
- [ ] Add example error responses to each endpoint.

<details>
<summary>Stuck on status codes? See what the common ones mean.</summary>

| Code | Meaning |
| ----------- | ----------- |
| `400 Bad Request` | The request is missing something or has invalid data. |
| `401 Unauthorized` | The user isn't logged in. |
| `403 Forbidden` | The user is logged in but isn't allowed to do this. |
| `404 Not Found` | The thing they asked for doesn't exist. |
| `500 Internal Server Error` | Something broke on the server. |

</details>

## Step 7: Logins and Roles

- [ ] Mark which endpoints require a user to be logged in.
- [ ] Decide whether your program has different roles (like a regular user and an admin).
- [ ] If it does, write down which roles can use each endpoint.

## Step 8: Changing the Contract

- [ ] Decide on a process for changing the API contract after it's written.
- [ ] Decide who needs to approve a change.
- [ ] Decide how you'll let the rest of the team know about a change.

## Step 9: Review and Submit

- [ ] Check that every use case from Step 2 is covered by at least one endpoint.
- [ ] Check that every endpoint has a method, URL, request, success response, and error responses.
- [ ] Have a front-end developer and a back-end developer read through it together. Could each of them build their part from it without asking questions?
- [ ] Submit your API contract on Google Classroom.
