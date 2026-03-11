# Writing in Markdown Notes

## Headings

You can create headings by adding one to six `#` symbols before your heading text. The number of hashes determines the heading level.

# Heading 1 (Largest)

## Heading 2

### Heading 3

#### Heading 4


## Text Emphasis

You can easily format text for emphasis using asterisks or tildes.

* **Bold text:** Wrap the text in double asterisks (`**bold**`).
* *Italic text:* Wrap the text in single asterisks (`*italic*`).
* ***Bold and Italic:*** Wrap the text in triple asterisks (`***bold and italic***`).
* ~~Strikethrough:~~ Wrap the text in double tildes (`~~strikethrough~~`).


## Lists

Markdown supports both ordered (numbered) and unordered (bulleted) lists.

### Unordered Lists

Use asterisks (`*`), plus signs (`+`), or hyphens (`-`) followed by a space to create bullet points.

* First item
* Second item
* Third item

### Ordered Lists

Use numbers followed by periods and a space.

1. First step
2. Second step
3. Third step


## Links and Images

You can add hyperlinks and images using a bracket and parenthesis syntax.

* **Links:** Wrap the display text in brackets and the URL in parentheses.
* *Syntax:* `[Google](https://www.google.com)`
* *Result:* [Google](https://www.google.com)


* **Images:** Add an exclamation mark right before the link syntax.
* *Syntax:* `![Alt text describing the image](image_url.jpg)`


## Code

You can format text to look like code, which is highly useful for technical notes.

* **Inline Code:** Wrap text in single backticks (`).
* *Result:* Use the `print()` function.


* **Code Blocks:** Wrap text in triple backticks (```) for multi-line code. You can also type the name of the programming language right after the first set of backticks for syntax highlighting.

```python
def hello_world():
    print("Hello, Markdown!")

```

## Blockquotes

If you need to quote another source or make a note stand out, use the greater-than sign (`>`).

> "This is a blockquote. It's useful for highlighting a specific excerpt, tip, or note."

## Horizontal Rules

To create a visual break or line across the page, place three or more hyphens (`---`) on a line by themselves. 