# API Contract: _Project Name_

**Team members:** _Names_
**Last updated:** _YYYY-MM-DD_

<!--
HOW TO USE THIS TEMPLATE
- Replace everything in _italics_ and every ___ with your team's answers.
- Add or delete table rows as needed.
- Copy the endpoint template in Section 5 once for each endpoint.
- Delete these instruction comments when you're done. (Comments like this one don't show up when the file is displayed on GitHub.)
-->

## 1. Use Cases

<!-- Everything a user should be able to do in your program, as short sentences. Example: "A user can create an account." -->

1. _A user can ..._
2. _A user can ..._
3. _A user can ..._

## 2. Business Rules

<!-- The rules that control how your program behaves. Example: "A username must be unique." or "Only the owner can delete a post." -->

1. _..._
2. _..._
3. _..._

## 3. Resources

<!-- The main "nouns" in your program and their fields. Your database developer will eventually turn this into a database schema. Copy the table for each resource. -->

### Resource: _Name_

| Field | Type | Required? | Notes |
| ----- | ---- | --------- | ----- |
| id | integer | Yes | Unique ID |
| ___ | ___ | ___ | ___ |
| ___ | ___ | ___ | ___ |

### Resource: _Name_

| Field | Type | Required? | Notes |
| ----- | ---- | --------- | ----- |
| id | integer | Yes | Unique ID |
| ___ | ___ | ___ | ___ |
| ___ | ___ | ___ | ___ |

## 4. Endpoint Summary

<!--
For each resource, ask:
- Which actions do we need: create, read one, read all, update, delete?
- What URL will each endpoint use? For example, /api/users or /api/users/:id
- Which HTTP method fits each action (GET, POST, PUT, PATCH, DELETE)?
- Do any endpoints need to be nested, like /api/users/:id/posts?
- Are there actions that don't fit plain CRUD, like login, search, or checkout?
-->

| Endpoint name | Method | URL | Login required? | Owner (back end) |
| ------------- | ------ | --- | --------------- | ---------------- |
| ___ | GET | `/api/___` | ___ | ___ |
| ___ | GET | `/api/___/:id` | ___ | ___ |
| ___ | POST | `/api/___` | ___ | ___ |
| ___ | PUT / PATCH | `/api/___/:id` | ___ | ___ |
| ___ | DELETE | `/api/___/:id` | ___ | ___ |

## 5. Endpoint Details

<!--
Copy this whole section (from "### Endpoint" down to the line of dashes) once for each endpoint in your summary table.
For each endpoint, think about:
- What does the front end need to send?
- Does the data go in the URL path, query parameters, or request body?
- Which fields are required, and what happens if one is missing?
- Are there limits on the input, such as maximum length or allowed values?
- What can go wrong, and which status code fits each problem?
-->

### Endpoint: _Name_

- **Method + URL:** `___ /api/___`
- **Description:** _What this endpoint does._
- **Login required?** _Yes / No_
- **Roles allowed:** _Example: any user, owner only, admin only_
- **Owner (back end):** _Name_
- **Used by (front-end page/component):** _Page or component name_

**Request**

| Field | Where it goes (path / query / body) | Type | Required? | Limits |
| ----- | ----------------------------------- | ---- | --------- | ------ |
| ___ | ___ | ___ | ___ | ___ |
| ___ | ___ | ___ | ___ | ___ |

Example request body (leave out if there's no body):

```json
{
  "___": "___"
}
```

**Success response:** status `___`

```json
{
  "___": "___"
}
```

**Error responses**

| Status | When it happens | Example response |
| ------ | --------------- | ---------------- |
| 400 | _Missing or invalid data_ | `{ "error": "___" }` |
| 401 | _Not logged in_ | `{ "error": "___" }` |
| 404 | _The item doesn't exist_ | `{ "error": "___" }` |

---

## 6. Error Format

<!-- Agree on one format that EVERY endpoint uses for errors. -->

Every error response will look like:

```json
{
  "error": "___"
}
```

Status codes we use:

| Status | Meaning in our API |
| ------ | ------------------ |
| 400 Bad Request | ___ |
| 401 Unauthorized | ___ |
| 403 Forbidden | ___ |
| 404 Not Found | ___ |
| 500 Internal Server Error | ___ |

## 7. Logins and Roles

**Does our program have user logins?** _Yes / No_

| Role | What this role can do | Endpoints it can use |
| ---- | --------------------- | -------------------- |
| _Example: user_ | ___ | ___ |
| _Example: admin_ | ___ | ___ |

## 8. Changing This Contract

- **How to propose a change:** _Example: open a GitHub issue, or post in our team chat_
- **Who needs to approve a change:** ___
- **How we'll tell the rest of the team:** ___

### Change Log

| Date | Change | Approved by |
| ---- | ------ | ----------- |
| ___ | ___ | ___ |
