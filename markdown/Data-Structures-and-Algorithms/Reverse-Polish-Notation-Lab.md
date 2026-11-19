# Reverse Polish Notation Lab

## Objective

1. Implement a postfix evaluator and an infix to postfix translator.

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| Infix Notation | Notation where the operator goes between the two operands, like `3 + 4` |
| Reverse Polish Notation | Also called postfix. Notation where you write the two operands then the operator, like `3 4 +` |
| Operand | A value the operator works on, like the `3` and `4` in `3 + 4` |
| Precedence | Which operators go first: `*` and `/` before `+` and `-` |

## Your Task

In our math classes, we write expressions in **infix** notation, with the operator between the operands, like `(5 + 3) - 7 * 9 + 2`. Infix is hard for a computer to evaluate directly, so it often works in two steps: change the expression to **postfix**, then evaluate the postfix with a stack.

Following the steps below, you will create the following:

1. An [`evaluatePostfix` method](#evaluate)
2. An [invalid expression check](#invalid) for `evaluatePostfix`
3. An [`infixToPostfix` method](#translate)
4. A [`Main` class](#test) that tests both methods

Put both methods in a class called `ReversePolishNotation`. You can use your own `Stack` and `Queue` classes from the [Stack and Queue Lab](#Data-Structures-and-Algorithms/Stack-and-Queue-Lab), or Java's `Stack` and `Queue`, although Java's will be more complicated to use than yours.

Write whatever helper methods you need.

### <a id="evaluate"></a>Step 1: Evaluate Postfix

`public static int evaluatePostfix(String input)`

Takes in a postfix expression as a String, evaluates it, and returns the answer. The numbers and operators (`+`, `-`, `*`, `/`) are separated by spaces. Negative numbers may also be part of the input.

Here's how a stack evaluates `7 2 + 9 / 3 5 * -`:

| Read | What to do | Stack after (top on the right) |
| --- | --- | --- |
| `7` | Push it. | `7` |
| `2` | Push it. | `7 2` |
| `+` | Pop the 2 and the 7. Push 7 + 2. | `9` |
| `9` | Push it. | `9 9` |
| `/` | Pop the 9 and the 9. Push 9 / 9. | `1` |
| `3` | Push it. | `1 3` |
| `5` | Push it. | `1 3 5` |
| `*` | Pop the 5 and the 3. Push 3 * 5. | `1 15` |
| `-` | Pop the 15 and the 1. Push 1 - 15. | `-14` |
| *end* | No more input. Return the last value. | |

`ReversePolishNotation.evaluatePostfix("7 2 + 9 / 3 5 * -")` should return `-14`.

> Watch the order: the **first** value you pop is the **right** side of the operation.

### <a id="invalid"></a>Step 2: Invalid Expressions

If `evaluatePostfix` is given an invalid postfix expression, it should throw an `IllegalArgumentException` whose message says it's an invalid postfix expression.

For example, `ReversePolishNotation.evaluatePostfix("7 2 + 9 / 3 5 *")` should throw an `IllegalArgumentException`.

### <a id="translate"></a>Step 3: Infix to Postfix

`public static String infixToPostfix(String input)`

Takes in an infix expression as a String, converts it to a postfix expression, and returns it. You still need a stack, but this time it holds **operators**, not numbers.

Here's how to change `a + b * c + ( d * e + f ) * g` to postfix:

| Read | What to do | Output | Stack after (top on the right) |
| --- | --- | --- | --- |
| `a` | Put it in the output. | `a` | |
| `+` | Push it. | `a` | `+` |
| `b` | Put it in the output. | `a b` | `+` |
| `*` | `+` is lower precedence, so push the `*`. | `a b` | `+ *` |
| `c` | Put it in the output. | `a b c` | `+ *` |
| `+` | `*` is higher precedence, so pop it to the output. The `+` under it isn't lower, so pop it too. Then push the new `+`. | `a b c * +` | `+` |
| `(` | Always push `(`. | `a b c * +` | `+ (` |
| `d` | Put it in the output. | `a b c * + d` | `+ (` |
| `*` | The top is `(`, so push the `*`. | `a b c * + d` | `+ ( *` |
| `e` | Put it in the output. | `a b c * + d e` | `+ ( *` |
| `+` | Pop the `*` to the output. Stop at the `(`. Push the `+`. | `a b c * + d e *` | `+ ( +` |
| `f` | Put it in the output. | `a b c * + d e * f` | `+ ( +` |
| `)` | Pop to the output until you reach the `(`, then throw the `(` away. | `a b c * + d e * f +` | `+` |
| `*` | `+` is lower precedence, so push the `*`. | `a b c * + d e * f +` | `+ *` |
| `g` | Put it in the output. | `a b c * + d e * f + g` | `+ *` |
| *end* | Pop everything left to the output. | `a b c * + d e * f + g * +` | |

`ReversePolishNotation.infixToPostfix("a + b * c + ( d * e + f ) * g")` should return `"a b c * + d e * f + g * +"`.

### <a id="test"></a>Step 4: Test Your Methods

In a `Main` class, test both methods with the examples above and a few of your own. Then try them together: translate an infix expression with numbers, and evaluate the result.

| Code | Expected result |
| --- | --- |
| `evaluatePostfix("7 2 + 9 / 3 5 * -")` | `-14` |
| `evaluatePostfix("7 2 + 9 / 3 5 *")` | throws `IllegalArgumentException` |
| `infixToPostfix("a + b * c + ( d * e + f ) * g")` | `"a b c * + d e * f + g * +"` |
| `evaluatePostfix(infixToPostfix("( 5 + 3 ) - 7 * 9 + 2"))` | `-53` |

## Tips, Tricks, and Resources
- [Infix to Postfix with a Stack](https://www.youtube.com/watch?v=TB7qzDgX-pI)

## Extensions
1. Complete methods to translate from prefix or postfix to infix, evaluate prefix expressions, or convert infix to prefix.

## Reflection Questions
1. Why is a Stack the ideal data structure for evaluating postfix expressions? Explain how the LIFO (Last-In, First-Out) property maps directly to the order of operations in this algorithm.
2. What is the time complexity and space complexity of your evaluatePostfix method in terms of N, where N is the number of tokens (numbers and operators) in the string? Justify your answer.
3. Humans naturally read math in infix notation, but computers generally prefer evaluating math in postfix (or prefix) notation. Based on your experience writing this code, why is infix harder for a computer to evaluate directly? What specific problems does postfix eliminate?

## How to Submit

Attach your GitHub repository to Google Classroom. Then, show your instructor your GitHub repository and demonstrate your working program in class. You will also need to answer the reflection questions, either written or in person.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.
