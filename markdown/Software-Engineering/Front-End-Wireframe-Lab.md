# Front End Wireframe  Lab

## Objective
1. Create a wireframe for your front end website

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| Flask | |
| HTML | | 
| JavaScript ||
|HTML|


## Your Task

### Displaying a website with Flask

0. Inside your application/API folder, add two more directories: `templates` and `static`.
  - `templates`: holds HTML files
  - `static`: holds CSS assets, JavaScript files, and images

1. Inside `templates`, create a new file `index.html`. Inside the file put the following:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Flask App</title>
</head>
<body>
    <h1>Welcome to My Flask Website!</h1>
    <p>This page is successfully being served by Python backend routes.</p>
</body>
</html>
```
2. Add the following endpoint to your Flask API:
```
@app.route('/')
def home():
    # Render and return the HTML file from the templates folder
    return render_template('index.html')
```

3. Run your Python API file and go to your `http://your_pi_ip:5000` on your Framework's browswer. You should see your page appear!


### Adding basic headers and text formatting

4. Use the following reference guide to make the basics of your site. Use placeholders like `[BUTTON HERE]` or `[TEXT BOX HERE]` for elements that are not listed. We will worry about making it look good later, just get everything on the screen for now.

#### HTML Quick Reference
| Element | HTML | Result / Purpose |
|---|---|---|
| Heading 1 (largest) | `<h1>Title</h1>` | Main page title |
| Heading 2 | `<h2>Section</h2>` | Section heading |
| Heading 3–6 | `<h3>` … `<h6>` | Smaller subheadings |
| Paragraph | `<p>Some text.</p>` | Block of text |
| Bold (semantic) | `<strong>text</strong>` | **Important** text |
| Bold (visual only) | `<b>text</b>` | **Bold** text |
| Italic (semantic) | `<em>text</em>` | *Emphasized* text |
| Italic (visual only) | `<i>text</i>` | *Italic* text |
| Underline | `<u>text</u>` | Underlined text |
| Strikethrough | `<s>text</s>` or `<del>text</del>` | ~~Struck~~ text |
| Highlight | `<mark>text</mark>` | Highlighted text |
| Small text | `<small>text</small>` | Smaller fine print |
| Superscript | `x<sup>2</sup>` | x² |
| Subscript | `H<sub>2</sub>O` | H₂O |
| Line break | `Line one<br>Line two` | Forces a new line |
| Horizontal rule | `<hr>` | Divider line |
| Link | `<a href="https://example.com">Link</a>` | Clickable hyperlink |
| Image | `<img src="pic.jpg" alt="Description">` | Embeds an image |
| Unordered list | `<ul><li>Item</li></ul>` | Bulleted list |
| Ordered list | `<ol><li>Item</li></ol>` | Numbered list |
| Blockquote | `<blockquote>Quote</blockquote>` | Indented quotation |
| Inline code | `<code>let x = 1;</code>` | `Monospace` code |
| Preformatted | `<pre>  spacing kept  </pre>` | Keeps whitespace and line breaks |
| Generic block | `<div>...</div>` | Groups content into a block |
| Generic inline | `<span>...</span>` | Wraps inline text for styling |

### Creating a Button

*We will be creating a button to submit a GET request to your API and display a table with the results*

0. Choose a GET request from your API to use during this portion. If there is no data in the table yet, add some sample data.

1. Add a button element to your `<body>` section:

```
<button id="loadBtn">Load Table</button>
<div id="output"></div>
<script src="/static/app.js"></script>
```

2. Create a new JavaScript file `app.js` in the `static` folder.

```
document.getElementById("loadBtn").addEventListener("click", async () => {
  const output = document.getElementById("output");

  try {
    const response = await fetch("YOUR API ENDPOINT HERE");
    const rows = await response.json();

    const columns = Object.keys(rows[0]);
    let html = "<table border='1'><tr>";
    columns.forEach(col => html += `<th>${col}</th>`);
    html += "</tr>";

    rows.forEach(row => {
      html += "<tr>";
      columns.forEach(col => html += `<td>${row[col]}</td>`);
      html += "</tr>";
    });

    output.innerHTML = html + "</table>";
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
});

```

3. Try clicking the button on your website and see your table appear.


### Using a Form

*Let's use forms to enter data and submit a POST request*

0. Choose a POST request to use for ths section.

1. Add the following to your HTML and substitute each input and label for an input needed for your POST request.

```
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
```

2. Add the following to `app.js`:

```
    const API_URL = 'YOUR ENDPOINT HERE';

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
```

4. Use your form and see the message updated at the bottom.

### Switching Views

*We will now practice using a button to switch to a new HTML file.*

0. Add another HTML file to your `templates` folder and add the following. I called mine `view2.html`.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>View 2</title>
</head>
<body>
  <h1>View 2</h1>
  <p>You pressed the button!</p>
  <a href="{{ url_for('index') }}">Back to home</a>
</body>
</html>
```

1. Add this endpoint or similar to your API

```
@app.route("/view2", methods=["GET", "POST"])
def view2():
    return render_template("view2.html")
```

2. Add this button to your `index.html`
```
<form action="{{ url_for('view2') }}" method="post">
  <button type="submit">Go to View 2</button>
</form>
```

3. Test your button and your hyperlink to switch values.

### Creating Your Wireframe

Use the previous examples to create a skeleton of your site. It doesn't have to look good; it just has to handle your use cases. 

Use the <a href="assets/Flask_Quick_Reference.pdf" download>Quick Reference</a> to help you as you work.

## Tips, Tricks, and Resources

**HTML forms and buttons**
- [MDN: Your First Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
- [MDN: The Button Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [MDN: HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)


**JavaScript**
- [javascript.info](https://javascript.info/)
- [MDN: Introduction to Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [MDN: Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

**Flask**
- [Learn More About Flask Templates](https://flask.palletsprojects.com/en/stable/tutorial/templates/)

## Extensions
1. Add an icon to your tab

## Reflection Questions
1. 


## How to Submit

Show your instructor your GitHub repository with your code. Answer the reflection questions. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
