1. Register and create an account with [NewsAPI](https://newsapi.org/)
2. Save your API key in a `.env` file. Access the key from your file using the starter code below.
3. Create a headline guessing game that gets a top headline and replaces a capitalized word with blanks and allow the user to guess what the word is. 

```python
import requests
import os
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Access the specific keys
api_key = os.getenv("API_KEY")

```


## Example Implementation
```
NEWS QUIZ
Enter the missing word in these current headlines.
-------------------------------------------------

1. North Korea's Kim __________ Un touts ties, opens bridge with China on first trip in a year
Enter the missing word: not sure
The correct answer was Jong.

...


You got 2/5 correct.
``