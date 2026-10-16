# Unit 1 Math Practice

## Objectives
1. Interpret the slope and intercept of a line, and use y = mx + b to make predictions.
2. Calculate the probability of simple, combined, and conditional events.
3. Compute a loss value, such as mean squared error, to measure how far predictions are from actual values.
4. Explain how optimization adjusts model parameters step by step to reduce loss.

## Exercise 1

A taxi company charges using the equation $y = 2.5x + 4$, where $x$ is the number of miles driven and $y$ is the total cost in dollars.

1. What does the slope mean in this situation?
2. What does the intercept mean in this situation?
3. How much does a 10 mile ride cost?

<details>
<summary>Click here to view the answer</summary>

1. The slope ($2.5$) means the cost goes up by **2.50 dollars for every mile** driven.
2. The intercept ($4$) is the **4 dollar starting fee**, the cost before any miles are driven.
3. $y = 2.5(10) + 4 = 25 + 4 = 29$, so the ride costs **29 dollars**.

</details>

## Exercise 2

A student notices that studying 2 hours led to a test score of 50, and studying 6 hours led to a score of 70. Assume the relationship is a straight line.

1. Find the slope.
2. Find the intercept.
3. Write the equation in the form $y = mx + b$.
4. Predict the score for a student who studies 8 hours.

<details>
<summary>Click here to view the answer</summary>

1. $m = \frac{70 - 50}{6 - 2} = \frac{20}{4} = 5$ (each extra hour of studying adds 5 points)
2. Plug in a point: $50 = 5(2) + b$, so $b = 40$ (the predicted score with 0 hours of studying)
3. $y = 5x + 40$
4. $y = 5(8) + 40 = 80$

</details>

## Exercise 3

A phone's battery level is modeled by $y = -12x + 100$, where $x$ is the number of hours since the phone was unplugged and $y$ is the battery percentage.

1. What does the negative slope tell you?
2. What is the battery level after 5 hours?
3. About how many hours until the battery is dead?

<details>
<summary>Click here to view the answer</summary>

1. The battery **loses 12 percentage points every hour**. A negative slope means $y$ goes down as $x$ goes up.
2. $y = -12(5) + 100 = 40$, so the battery is at 40%.
3. Set $y = 0$: $0 = -12x + 100$, so $x = \frac{100}{12} \approx 8.3$ hours.

</details>

## Exercise 4

A bag has 4 red marbles and 6 blue marbles. You pick one marble at random. What is the probability that it is red?

<details>
<summary>Click here to view the answer</summary>

$P(\text{red}) = \frac{4}{10} = 0.4$

</details>

## Exercise 5

You flip a coin and roll a standard six-sided die. What is the probability of getting heads **and** a 6?

<details>
<summary>Click here to view the answer</summary>

The events are independent, so multiply their probabilities:

$P(\text{heads and } 6) = \frac{1}{2} \cdot \frac{1}{6} = \frac{1}{12} \approx 0.083$

</details>

## Exercise 6

You roll a standard six-sided die. What is the probability of rolling an even number **or** a number greater than 4?

<details>
<summary>Click here to view the answer</summary>

- Even numbers: 2, 4, 6
- Greater than 4: 5, 6

Combine them without counting 6 twice: 2, 4, 5, 6. That's 4 outcomes out of 6.

$P(\text{even or greater than } 4) = \frac{4}{6} = \frac{2}{3} \approx 0.67$

</details>

## Exercise 7

Using the same bag from Exercise 4 (4 red, 6 blue), you pick two marbles **without putting the first one back**. What is the probability that both marbles are red?

<details>
<summary>Click here to view the answer</summary>

After the first red marble is taken, there are only 3 red marbles left out of 9 total.

$P(\text{both red}) = \frac{4}{10} \cdot \frac{3}{9} = \frac{12}{90} = \frac{2}{15} \approx 0.13$

</details>

## Exercise 8

A spam filter looked at 100 emails and recorded whether each one was spam and whether it contained the word "free."

| | Contains "free" | No "free" | Total |
| --- | --- | --- | --- |
| **Spam** | 30 | 10 | 40 |
| **Not Spam** | 5 | 55 | 60 |
| **Total** | 35 | 65 | 100 |

1. What is the probability an email is spam?
2. If an email contains "free," what is the probability it is spam?
3. If an email is spam, what is the probability it contains "free"?

<details>
<summary>Click here to view the answer</summary>

1. $P(\text{spam}) = \frac{40}{100} = 0.4$
2. Only look at the 35 emails that contain "free": $P(\text{spam} \mid \text{free}) = \frac{30}{35} \approx 0.86$
3. Only look at the 40 spam emails: $P(\text{free} \mid \text{spam}) = \frac{30}{40} = 0.75$

Notice that answers 2 and 3 are different. With conditional probability, the order matters.

</details>

## Exercise 9

A model made predictions for three data points. Calculate the mean squared error (MSE).

| Actual | Predicted |
| --- | --- |
| 3 | 4 |
| 5 | 5 |
| 8 | 6 |

Use the formula $\text{MSE} = \frac{1}{n}\sum (\text{actual} - \text{predicted})^2$

<details>
<summary>Click here to view the answer</summary>

1. Errors: $3 - 4 = -1$, $5 - 5 = 0$, $8 - 6 = 2$
2. Squared errors: $1, 0, 4$
3. Sum: $5$
4. Divide by $n = 3$: $\text{MSE} = \frac{5}{3} \approx 1.67$

</details>

## Exercise 10

Two models predict the same three values. The actual values are 10, 20, and 30.

- Model A predicts: 12, 18, 30
- Model B predicts: 10, 20, 36

Calculate the MSE for each model. Which model is better?

<details>
<summary>Click here to view the answer</summary>

- **Model A:** Squared errors $4, 4, 0$. $\text{MSE} = \frac{8}{3} \approx 2.67$
- **Model B:** Squared errors $0, 0, 36$. $\text{MSE} = \frac{36}{3} = 12$

**Model A** is better because it has the lower loss. Model B got two predictions exactly right, but squaring makes its one big miss count a lot. MSE punishes large errors much more than small ones.

</details>

## Exercise 11

A line $y = 2x + 1$ is used to predict the data points $(1, 4)$, $(2, 5)$, and $(3, 7)$. Calculate the MSE.

<details>
<summary>Click here to view the answer</summary>

1. Predictions: $2(1) + 1 = 3$, $2(2) + 1 = 5$, $2(3) + 1 = 7$
2. Errors: $4 - 3 = 1$, $5 - 5 = 0$, $7 - 7 = 0$
3. Squared errors: $1, 0, 0$
4. $\text{MSE} = \frac{1}{3} \approx 0.33$

</details>

## Exercise 12

Why do we **square** the errors when calculating loss instead of just adding them up? Use a model with errors of $+5$ and $-5$ as an example.

<details>
<summary>Click here to view the answer</summary>

If you just add the errors, $+5$ and $-5$ cancel out to $0$, which makes the model look perfect even though both predictions were wrong. Squaring makes every error positive ($25 + 25 = 50$), so errors can't cancel each other out.

</details>

## Exercise 13

A model has one parameter, $m$. Its loss is $L = (m - 3)^2$, and the slope of the loss at any value of $m$ is $2(m - 3)$.

Gradient descent updates the parameter with this rule:

$$\text{new } m = m - (\text{learning rate}) \cdot (\text{slope of loss})$$

Start at $m = 7$ with a learning rate of $0.25$. Perform **three** update steps. What value is $m$ heading toward?

<details>
<summary>Click here to view the answer</summary>

| Step | Current $m$ | Slope $2(m - 3)$ | New $m$ |
| --- | --- | --- | --- |
| 1 | 7 | 8 | $7 - 0.25(8) = 5$ |
| 2 | 5 | 4 | $5 - 0.25(4) = 4$ |
| 3 | 4 | 2 | $4 - 0.25(2) = 3.5$ |

$m$ is heading toward **3**, where the loss is $0$ (its minimum). The steps get smaller as the model gets closer because the slope of the loss gets smaller.

</details>

## Exercise 14

Repeat Exercise 13, starting at $m = 7$, but use a learning rate of $1$. Perform two update steps. What goes wrong?

<details>
<summary>Click here to view the answer</summary>

1. Slope is $2(7 - 3) = 8$. New $m = 7 - 1(8) = -1$
2. Slope is $2(-1 - 3) = -8$. New $m = -1 - 1(-8) = 7$

The model jumps back and forth between $7$ and $-1$ forever and **never reaches the minimum** at 3. A learning rate that is too large overshoots. A learning rate that is too small would work, but would take many more steps.

</details>

## Exercise 15

A model's loss was recorded after each training step:

50, 30, 18, 12, 10, 9.5, 9.4, 9.4

Describe what is happening during training. When would it make sense to stop?

<details>
<summary>Click here to view the answer</summary>

Early on, each step makes the loss drop a lot because the parameters are far from their best values. As the model gets closer to the minimum, the improvements shrink. By the end, the loss has leveled off at about 9.4, which means the model has **converged**. It makes sense to stop once the loss stops meaningfully decreasing, since more steps won't improve the model.

</details>

## Exercise 16

In your own words, explain how a model "learns" using loss and optimization. Use the words **parameters**, **loss**, and **step** in your answer.

<details>
<summary>Click here to view the answer</summary>

Example answer: A model starts with some **parameters** (like the slope and intercept of a line). It makes predictions, and the **loss** measures how wrong those predictions are. Optimization looks at which direction would make the loss smaller and adjusts the parameters a small **step** in that direction. This repeats over and over until the loss stops going down.

</details>
