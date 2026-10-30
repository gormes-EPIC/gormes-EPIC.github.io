# Front End Wireframe  Lab

## Objective
1. Create a wireframe for your front end website

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |


## Your Task

## Tips, Tricks, and Resources

- 

## Extensions

## Reflection Questions
1. 


## How to Submit

Show your instructor your GitHub repository with your code. Answer the reflection questions. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.

### HTML Template

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Template</title>
  
</head>
<body>

  <header>
    <h1>Page Title</h1>
    <p>A short subtitle or tagline goes here.</p>
  </header>

  <main>
    <!-- Text section -->
    <section>
      <h2>Section Heading</h2>
      <p>
        This is a paragraph of body text. Replace it with your own content.
        You can use <strong>bold</strong>, <em>italic</em>, and
        <a href="#">links</a> inside paragraphs.
      </p>
      <h3>Subheading</h3>
      <p>Another paragraph under a smaller heading.</p>
      <ul>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
      </ul>
    </section>

    <!-- Form section -->
    <section>
      <h2>Contact Form</h2>
      <form id="contactForm">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="you@example.com" required>

        <label for="topic">Topic</label>
        <select id="topic" name="topic">
          <option value="general">General question</option>
          <option value="support">Support</option>
          <option value="feedback">Feedback</option>
        </select>

        <label for="message-text">Message</label>
        <textarea id="message-text" name="message" rows="5" placeholder="Write your message..."></textarea>

        <div class="button-row">
          <button type="submit" class="btn-primary">Submit</button>
          <button type="reset" class="btn-secondary">Clear</button>
          <button type="button" class="btn-danger" id="cancelBtn">Cancel</button>
        </div>
      </form>
      <p id="message"></p>
    </section>
  </main>

  <footer>
    &copy; 2026 Your Name. All rights reserved.
  </footer>

  <script>
    // Replace with your API endpoint
    const API_URL = 'https://example.com/api/contact';

    const form = document.getElementById('contactForm');
    const message = document.getElementById('message');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async function (event) {
      event.preventDefault(); // stop the page from reloading

      // Turn the form fields into a plain object: { name, email, topic, message }
      const data = Object.fromEntries(new FormData(form));

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      message.style.color = '#16a34a';
      message.textContent = '';

      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error('Server responded with status ' + response.status);
        }

        message.textContent = 'Thanks, ' + data.name + '! Your message was submitted.';
        form.reset();
      } catch (error) {
        message.style.color = '#dc2626';
        message.textContent = 'Something went wrong: ' + error.message;
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit';
      }
    });

    document.getElementById('cancelBtn').addEventListener('click', function () {
      form.reset();
      message.textContent = '';
    });
  </script>

</body>
</html>
```