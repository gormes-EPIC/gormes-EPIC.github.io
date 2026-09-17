# Google Search Operators Guide

A reference for narrowing down Google search results using search operators (also called "search filters" or "advanced search operators").

## Basic Syntax Rules

- No space between the operator, the colon, and your search term (e.g. `site:nytimes.com`, not `site: nytimes.com`)
- Most operators can be combined in a single search
- Put multi-word phrases in quotes when using an operator (e.g. `intitle:"climate change"`)

---

## Site & Domain Filters

### `site:`
Restrict results to a specific website or domain.
```
site:wikipedia.org octopus
site:reddit.com best budget laptop
site:.gov climate policy
site:.edu machine learning research
```

### `-site:`
Exclude a specific site from results.
```
python tutorials -site:youtube.com
```

---

## Date & Time Filters

### `before:` and `after:`
Find results published before or after a specific date (format: YYYY-MM-DD, or just YYYY or YYYY-MM).
```
election results after:2024-01-01
"world series" before:2020-01-01
apple earnings after:2023 before:2024
```

### Tools-based date filter
For strict recency filtering, use Search Tools → "Any time" → custom range in the Google UI, since `before:`/`after:` isn't 100% reliable for all content.

---

## Title, URL & Text Filters

### `intitle:`
Find pages with a specific word in the title.
```
intitle:review "iphone 16"
intitle:recipe lasagna
```

### `allintitle:`
Find pages where ALL specified words appear in the title.
```
allintitle:best budget laptops 2025
```

### `inurl:`
Find pages with a specific word in the URL.
```
inurl:blog wordpress
inurl:pricing saas
```

### `allinurl:`
Find pages where all words appear in the URL.
```
allinurl:docs api authentication
```

### `intext:`
Find pages containing a specific word somewhere in the body text.
```
intext:"free shipping" running shoes
```

---

## Exact Phrase & Term Filters

### `"quotes"`
Search for an exact phrase, word-for-word.
```
"to be or not to be"
"best pizza in chicago"
```

### `-` (minus/exclude)
Exclude a word or term from results.
```
jaguar -car
python -snake
```

### `OR` (must be capitalized)
Search for either term.
```
"iphone 15" OR "iphone 16"
cheap flights Paris OR London
```

### `*` (wildcard)
Acts as a placeholder for unknown words.
```
"a * saved is a * earned"
best * for beginners
```

---

## File & Content Type Filters

### `filetype:`
Restrict results to a specific file format.
```
filetype:pdf tax guide 2024
filetype:xlsx budget template
filetype:ppt marketing strategy
```

### `related:`
Find sites similar to a given URL.
```
related:nytimes.com
```

---

## Numeric & Range Filters

### `number1..number2`
Search within a numeric range.
```
laptop $500..$800
"world cup" 1990..2000
```

---

## Combining Operators

Operators can be stacked for precise results:
```
site:reddit.com intitle:review "noise cancelling headphones" after:2023
filetype:pdf site:.gov "annual report" 2024
"remote work" -site:linkedin.com after:2024-01-01
```

---

## Quick Reference Table

| Operator | Purpose | Example |
|---|---|---|
| `site:` | Limit to a domain | `site:bbc.com` |
| `-site:` | Exclude a domain | `-site:pinterest.com` |
| `before:` | Results before a date | `before:2023-06-01` |
| `after:` | Results after a date | `after:2023-06-01` |
| `intitle:` | Word in page title | `intitle:tutorial` |
| `allintitle:` | All words in title | `allintitle:python tutorial` |
| `inurl:` | Word in URL | `inurl:cart` |
| `allinurl:` | All words in URL | `allinurl:api docs` |
| `intext:` | Word in body text | `intext:"in stock"` |
| `"..."` | Exact phrase | `"climate change"` |
| `-word` | Exclude a word | `jaguar -car` |
| `OR` | Either term | `cat OR dog` |
| `*` | Wildcard placeholder | `"* is the new *"` |
| `filetype:` | Specific file format | `filetype:pdf` |
| `related:` | Similar sites | `related:cnn.com` |
| `num1..num2` | Numeric range | `$100..$300` |

---

## Tips

- Google is generally case-insensitive, except `OR`, which must be uppercase.
- Not every operator works perfectly on every query — Google has scaled back support for some over the years (e.g. `intext:` and `allintext:` are less reliable than they used to be).
- For visual date filtering, the Tools menu under the search bar is often more reliable than `before:`/`after:` for very recent content.
