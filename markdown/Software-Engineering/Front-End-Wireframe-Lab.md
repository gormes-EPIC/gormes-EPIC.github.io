# Front-end Wireframe Lab

## Objective
1. Create a wireframe for your front-end website

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| wireframe | A simple, low-detail sketch or skeleton of a website that shows the layout and the elements on each screen without worrying about colors, fonts, or styling. |
| use case | A specific task a user needs to accomplish with the system (for example, "a user adds a new item to the inventory"). |
| view | A single screen or page of a website that the user sees. Each view is usually its own HTML file. |
| front-end | The part of an application that the user sees and interacts with in their browser, built with HTML, CSS, and JavaScript. |
| back-end | The part of an application that runs on the server, handling logic and data storage. In this lab, the back-end is your Python Flask API. |
| Flask | A lightweight Python web framework used to build APIs and serve web pages. |
| API | Application Programming Interface; a set of rules that lets programs communicate with each other. A web API receives requests and sends back responses, often as JSON. |
| endpoint | A specific URL on an API (such as `/` or `/view2`) that performs an action or returns data when a request is sent to it. |
| route | In Flask, the connection between a URL and the Python function that runs when that URL is visited, created with `@app.route(...)`. |
| GET request | An HTTP request used to retrieve (read) data from a server. |
| POST request | An HTTP request used to send new data to a server, such as the data entered in a form. |
| JSON | JavaScript Object Notation; a text format for storing and sending data as key-value pairs (e.g., `{"name": "Ana"}`). |
| HTML | HyperText Markup Language; the language used to define the structure and content of a web page using elements such as headings, paragraphs, and buttons. |
| element | A single piece of an HTML page, written with an opening and closing tag, such as `<p>Some text.</p>`. |
| tag | The keyword in angle brackets that marks the start or end of an HTML element, such as `<h1>` and `</h1>`. |
| attribute | Extra information added to an HTML tag, such as `id`, `href`, or `type` in `<button id="loadBtn">`. |
| form | An HTML element (`<form>`) that groups input fields, such as text boxes and drop-downs, so the user can enter and submit data. |
| CSS | Cascading Style Sheets; the language used to control how a web page looks, including colors, fonts, spacing, and layout. |
| stylesheet | A `.css` file containing CSS rules that is linked to an HTML page to style it. |
| JavaScript | A programming language that runs in the browser and makes web pages interactive, such as responding to button clicks or fetching data from an API. |
| event listener | JavaScript code that waits for an event (like a click or form submission) and runs a function when it happens. |
| fetch | A JavaScript function used to send a request to an API endpoint and receive its response. |
| DOM | Document Object Model; the browser's representation of the HTML page that JavaScript can read and change (e.g., with `document.getElementById`). |
| template | An HTML file stored in Flask's `templates` folder that Flask renders and sends to the browser using `render_template()`. |
| static files | Files that do not change when served, such as CSS, JavaScript, and images, stored in Flask's `static` folder. |



## Your Task

### Plan Your Views

0. Using pen and paper pr Google Drawing or [Excalidraw](https://excalidraw.com/) or [Lucidchart](https://lucid.co/lucidchart), plan out each view(screen) of your website. Your plan should incorporate all of your **use cases**. 
  - In your design, plan to use different elements like headers, buttons, forms with text boxes or drop downs, etc. 
  - *Don't spend too long on this portion, but it is good to think through how many different screens you need and what will connect to where.*

> If you really want to get into this step, use a design tool like Figma to help you design your views. If you are going to use Figma, get a free plan [Figma for Education](https://help.figma.com/hc/en-us/articles/360041061214-Figma-for-Education). 

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
2. Add the following endpoint to your Flask API and update your import command to add `render_template`: `from flask import Flask, render_template`

```
@app.route('/')
def home():
    # Render and return the HTML file from the templates folder
    return render_template('index.html')
```

3. Run your Python API file and go to your `http://your_pi_ip:5000` on your Framework's browswer. You should see your page appear!


### Adding basic headers and text formatting

4. Use the following reference guide to make the basics of your site. Use placeholders like `[BUTTON HERE]` or `[TEXT BOX HERE]` for elements that are not listed. We will worry about making it look good later, just get everything on the screen for now.

> If you want to pass values to your HTML, see this example: [Geeks for Geeks Rendering Templates](https://www.geeksforgeeks.org/python/flask-rendering-templates/)

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
<table id="myTable"></table>
<script src="/static/app.js"></script>
```

2. Create a new JavaScript file `app.js` in the `static` folder.

Assuming the JSON response is:
```
{
  "info": ["a", "b", "c", "d"],
  "info2": ["e", "f", "g", "h"],
  "info3": ["h", "j", "k", "l"]
}
```

Your `app.js` should be:
```
document.getElementById("loadBtn").addEventListener("click", async () => {
  const table = document.getElementById("myTable");

  try {
    const response = await fetch("YOUR API ENDPOINT HERE");
    const data = await response.json();
    const keys = Object.keys(data);
    const rowCount = Math.max(...keys.map((k) => data[k].length));

    let html = "<tr>" + keys.map((k) => `<th>${k}</th>`).join("") + "</tr>";

    for (let i = 0; i < rowCount; i++) {
      html += "<tr>" + keys.map((k) => `<td>${data[k][i] ?? ""}</td>`).join("") + "</tr>";
    }

    table.innerHTML = html;
  } catch (err) {
    document.getElementById("output").textContent = "Error: " + err.message;
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

### Looking Ahead

**Before we come back to this assignment, have a peer test out your website and give them feedback.** Give them a quick overview of the project, but do not explain the intricacies of your design. Then ask them to complete different use cases and see if they can do it without guidance. 

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

1. Incorporate popup boxes with `dialog` elements embedded in your HTML
2. Add an icon to your tab by adding `<link rel="icon" type="image/png" href="/static/favicon.png">` to each HTML view in the header and adding your image to the `static` folder with the name `favicon.png`. 
3. Use CSS to make your site look nicer. Start by adding `<link rel="stylesheet" href="/static/samplestyle.css">` to each HTML view header then adding <a href="assets/samplestyle.css" download>this samplestyle.css</a> to your `static` folder. Edit your stylesheet as needed to fit your vision for your site.

## Reflection Questions

1. How many views did you plan for your website, and how does each view support one or more of your use cases? Did you discover any use cases that were missing or harder to show than you expected?
2. For one of your use cases that implements a POST request, describe in your own words what happens, step by step, between the user interacting with the site and your data being displayed.
3. Why does Flask separate files into a `templates` folder and a `static` folder? What kinds of files belong in each, and why?
4. Compare your finished wireframe to your original paper or digital plan. What changed, and what would you prioritize next to make your site more usable or visually appealing?

## How to Submit

Show your instructor your GitHub repository with your code. Answer the reflection questions. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
