**Instructions:** for each of the following, determine whether a `GET` or a `POST` request would be appropriate.

## Round 1

1. Opening a YouTube video page
2. Posting a comment on that video
3. Checking the weather in an app4
4. Sending a text in a messaging app
5. Viewing your Amazon order history
6. Uploading a profile picture

## Round 2
7. Typing in a search box that shows suggestions as you type
8. Clicking “Add to cart”
9. Clicking “Next page” on search results
10. Signing up for a newsletter
11. Filtering products by price on a shopping site
12. Clicking “Forgot password” and submitting your email

<details>
<summary>Click here to view the answer</summary>

## Round 1
1. `GET`, since you’re just loading a page.
2. `POST`, because it creates a new comment.
3. `GET`, since it reads data.
4. `POST`, because it creates a message.
5. `GET`, since it reads your data.
6. `POST`, because it sends a file in the body.

## Round 2
7. `GET`. Each keystroke asks for suggestions without changing anything.
8. `POST`. It changes your cart, even though no money moves yet.
9. `GET`, usually with something like ?page=2 in the URL.
10. `POST`, because it adds you to a list.
11. `GET`. The filters go in the URL (?max_price=50), which is why you can bookmark or share a filtered view.
12. `POST`, because it triggers an action (sending an email).
</details>



