# Reverse Polish Notation Lab

## Objective

1. Implement an postfix evaluator and an infix to postfix translator

## Vocabulary
| Vocabulary| Description |
| ----------- | ----------- |
| Reverse Polish Notation | Notation where you write the two operands then the operator |

## Your Task

- Create the class `ReversePolishNotation` that contains the following methods
	- `static int evaluatePostfix(String input)`: Takes in a postfix expression as a String, evaluates it, and returns the answer
	- `static String infixToPostfix(String input)`: Takes in an infix expression as a String, converts it to a postfix expression and returns it
 - You can use your personal `Stack` and `Queue` classes from the previous lab or use Java's `Stack` and `Queue`, although they will be more complicated to use than your personal implementations.

## Evaluating Postfix Expressions

In this lab, you are to write a program that will be able to compute the value of a postfix expression that uses numbers and the four basic arithmetic operations. In our traditional math classes, we write our operators using infix notation, where the operators are written between the operands.  For instance, (5 + 3) – 7 * 9 + 2 is an example of infix notation. However, it is difficult for a computer algorithm to evaluate an infix expression, so often, we see it perform a two-step process instead: change the expression to postfix, then evaluate the postfix expression. Why is the postfix advantageous? It is easier for an algorithm to evaluate with the use of a stack.

To illustrate the algorithm, consider how we would evaluate the postfix expression:   `7 2 + 9 / 3 5 * -`

|   |
|---|
|Read the 7.  Push on the stack.<br><br>Read the 2. Push on the stack.<br><br>Read the +. Retrieve the 7 and 2 from the stack. Evaluate the operation. Push 9 on the stack.<br><br>Read the 9. Push on the stack.<br><br>Read the /. Retrieve the 9 and 9 from the stack. Evaluate, then push 1 on the stack.<br><br>Read the 3. Push on the stack.<br><br>Read the 5. Push on the stack.<br><br>Read the *. Retrieve the 3 and 5. Push 15 on the stack.<br><br>Read the -. Retrieve the 1 and the 15. Push -14 on the stack.<br><br>No more elements to read. Return -14.|

  
Write a method (and whatever helper methods necessary) to evaluate postfix. A call to the method will look like following:  `ReversePolishNotation.evaluatePostfix(someStringExpression)`

For example, `ReversePolishNotation.evaluatePostfix(“7 2 + 9 / 3 5 * -”)` should return -14. If given an invalid postfix expression, it should throw an `IllegalArgumentException`. For example, `ReversePolishNotation.evaluatePostfix(“7 2 + 9 / 3 5 *”)` should throw an `IllegalArgumentException` whose message states that this is an invalid postfix expression.

The input will be a string where the numbers and operators will be space separated. Negative numbers will may also be a part of the input.

## Infix to Postfix Translator

Your program should also be able to take an infix expression and convert it to postfix. In this case, a stack will still be needed, but it will be used for operators rather than operands. Consider the following expression: `a + b * c + (d  * e + f) * g`.  Here’s how we might change this to postfix:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read the a. Put into the output.<br><br>Read the +. Push onto the stack.<br><br>Read the b. Put into the output.<br><br>Read the *. Check the stack. Since + is lower precedence, push * onto the stack.<br><br>Read the c. Put into the output.<br><br>Read the +. Check the stack. * is higher precedence, so pop and add * to output. Since the +  <br>          (now on top of the stack) is not of lower precedence, pop that too and add to output. <br><br>          Push the  + that was just read from the input.<br><br>Read the (. Since this is highest precedence, place on stack.<br><br>Read the d. Put into the output.<br><br>Read the *. Push on the stack.<br><br>Read the e. Put into the output.<br><br>Read the +. Pop the * and push the +.<br><br>Read the f. Put into the output.<br><br>Read the ). Empty the stack back to the (.  (In this case, the + is added to the output.)<br><br>Read the *. Push onto the stack.<br><br>Read the g. Put into the output.<br><br>End of input, so pop the *, add to the output. Repeat with the + left in the stack. |

After this process, we should get the expression: `a b c * + d e * f + g * +`

Write a method (and whatever helper methods necessary) to translate to postfix. A call to the method will look like following:   `ReversePolishNotation.infixToPostFix(someStringExpression)`

## Tips, Tricks, and Resources
- [Infix to Postfix with a Stack](https://www.youtube.com/watch?v=TB7qzDgX-pI)

## Extensions
1. Complete methods to translate from prefix or postfix to infix, evaluate prefix expressions, or convert infix to prefix.

## Reflection Questions
1.  Why is a Stack the ideal data structure for evaluating postfix expressions? Explain how the LIFO (Last-In, First-Out) property maps directly to the order of operations in this algorithm.
2.  What is the time complexity and space complexity of your evaluatePostfix method in terms of N, where N is the number of tokens (numbers and operators) in the string? Justify your answer.
3. Humans naturally read math in infix notation, but computers generally prefer evaluating math in postfix (or prefix) notation. Based on your experience writing this code, why is infix harder for a computer to evaluate directly? What specific problems does postfix eliminate?

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom
- [ ] Answers to the reflection questions, either written or in person

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.