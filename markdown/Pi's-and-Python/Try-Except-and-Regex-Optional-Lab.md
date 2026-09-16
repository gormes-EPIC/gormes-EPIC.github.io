# Try/Except and Regex Optional Lab

## Objective
1. Use try/excepts to catch and redirect errors
2. Create error resistant code that mitigates unexpected user inputs
3. Use regular expressions to match patterns

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| `try/except` | a code block that prevents expected errors from ending the program |
| regular expression | sequences of characters that define search patterns for text matching, input validation, and data extraction | 

## Your Task

Then, solve these 4 programming challenges:
- [Movie Theater](#movie-theater)
- [Address Validator](#address-validator)
- [Email Extractor](#email-extractor)

## <a id="movie-theater"></a> Movie Theater

You are creating a computer system to calculate the total price of a movie ticket order. Your program will first validate their choise of movie and then tabulate the types of tickets they would like to order.

Here is a sample run of the program:

```
What movie: lrd of the Rings
Invalid movie type
What movie: Lord of the Rings
---
What kind of ticket: adult 
What kind of ticket: ADULT
What kind of ticket: Teen
What kind of ticket: chlid
Invalid ticket type
What kind of ticket: child
What kind of ticket: [CTRL-D]
---
You are seeing LORD OF THE RINGS and your total is $47.00.
```

You'll notice that you will use CTRL-D to quit the program rather than a "done" or similar keyword. CTRL-D causes a `EOFError` that you can use a try/except to check.

Currently, your movie theatre is showing the following movies:
- The Shawshank Redemption
- The Godfather
- The Dark Knight
- Lord of the Rings
- 12 Angry Men
- Schindler's List
- Pulp Fiction

The current ticket prices of your movie tickets are:
- Adult: $15
- Teen: $12
- Child: $5


## <a id="address-validator"></a> Address Validator

For this program, you will create an input validator for an address. *Note: in practice, an address validator can be an extremely complex problem. For this program, just focus on the qualifications we have described below*

```
Address Line 1:
Address Line 2(apartment number, unit number):
City:
State:
Zip Code: 
```

In order to validate an address check the following:
- Address Line 1 is in the form of a number followed by any number of words/letters
- Address Line 2 can be anything
- City
- Check the state is one of the 50 valid state two digit codes
- Zip code contains only 5 digits 


## <a id="email-extractor"></a> Email Extractor