# Unit 2 Math Practice

**This assignment is under construction for the 26-27 school year.**


## Objectives
1. Multiply matrices and explain how matrix multiplication passes data through a layer of a neural network.
2. Describe how gradient descent uses the slope of the loss to update weights and reduce error.
3. Compare the shape, output range, and typical uses of ReLU, Sigmoid, and Tanh activation functions.
4. Use TensorFlow Playground to observe how activation functions and network structure affect what a model can learn.

## Exercise 1

For each pair, decide whether the matrices can be multiplied in the order given. If they can, give the dimensions of the result.

1. A $2 \times 3$ matrix times a $3 \times 4$ matrix
2. A $3 \times 2$ matrix times a $3 \times 2$ matrix
3. A $4 \times 1$ matrix times a $1 \times 4$ matrix

<details>
<summary>Click here to view the answer</summary>

The number of **columns in the first** matrix must equal the number of **rows in the second**. The result takes the rows of the first and the columns of the second.

1. **Yes.** $(2 \times 3)(3 \times 4)$ gives a $2 \times 4$ result.
2. **No.** The first has 2 columns but the second has 3 rows.
3. **Yes.** $(4 \times 1)(1 \times 4)$ gives a $4 \times 4$ result.

</details>

## Exercise 2

Multiply the matrices.

$A = \begin{bmatrix} 1 & 2 \cr 3 & 4 \end{bmatrix}$ $\quad B = \begin{bmatrix} 2 & 0 \cr 1 & 3 \end{bmatrix}$

Find $AB$.

<details>
<summary>Click here to view the answer</summary>

Each entry is a **row of $A$** times a **column of $B$**: multiply matching entries, then add.

$AB = \begin{bmatrix} 1(2) + 2(1) & 1(0) + 2(3) \cr 3(2) + 4(1) & 3(0) + 4(3) \end{bmatrix} = \begin{bmatrix} 4 & 6 \cr 10 & 12 \end{bmatrix}$

</details>

## Exercise 3

Using the same matrices from Exercise 2, find $BA$. Is it the same as $AB$?

<details>
<summary>Click here to view the answer</summary>

$BA = \begin{bmatrix} 2(1) + 0(3) & 2(2) + 0(4) \cr 1(1) + 3(3) & 1(2) + 3(4) \end{bmatrix} = \begin{bmatrix} 2 & 4 \cr 10 & 14 \end{bmatrix}$

**No.** $BA \neq AB$. Unlike multiplying regular numbers, the **order matters** in matrix multiplication.

</details>

## Exercise 4

Multiply the matrix by the vector.

$W = \begin{bmatrix} 1 & -1 & 2 \cr 0 & 3 & 1 \end{bmatrix}$ $\quad x = \begin{bmatrix} 2 \cr 1 \cr 1 \end{bmatrix}$

Find $Wx$. What are its dimensions?

<details>
<summary>Click here to view the answer</summary>

$Wx = \begin{bmatrix} 1(2) + (-1)(1) + 2(1) \cr 0(2) + 3(1) + 1(1) \end{bmatrix} = \begin{bmatrix} 3 \cr 4 \end{bmatrix}$

$(2 \times 3)(3 \times 1)$ gives a $2 \times 1$ result. Three input values went in and two values came out.

</details>

## Exercise 5

A neural network layer has **2 inputs** and **3 neurons**. The layer computes $Wx + b$, then applies the ReLU activation function, $\text{ReLU}(z) = \max(0, z)$.

$W = \begin{bmatrix} 1 & 0 \cr 2 & -1 \cr -1 & 1 \end{bmatrix}$ $\quad x = \begin{bmatrix} 2 \cr 1 \end{bmatrix}$ $\quad b = \begin{bmatrix} 1 \cr 0 \cr -2 \end{bmatrix}$

1. What does each row of $W$ represent?
2. Calculate $Wx + b$.
3. Apply ReLU to get the layer's output.

<details>
<summary>Click here to view the answer</summary>

1. Each row holds the **weights for one neuron**. Row 1 is how much neuron 1 cares about each input, and so on.
2. $Wx = \begin{bmatrix} 1(2) + 0(1) \cr 2(2) + (-1)(1) \cr -1(2) + 1(1) \end{bmatrix} = \begin{bmatrix} 2 \cr 3 \cr -1 \end{bmatrix}$, so $Wx + b = \begin{bmatrix} 3 \cr 3 \cr -3 \end{bmatrix}$
3. $\text{ReLU}$ turns negatives into 0: $\begin{bmatrix} 3 \cr 3 \cr 0 \end{bmatrix}$

This output becomes the input to the next layer. A whole layer of neurons is calculated with one matrix multiplication.

</details>

## Exercise 6

A dataset has **4 features**, and the first hidden layer of a network has **5 neurons**.

1. What are the dimensions of the weight matrix $W$ for this layer?
2. How many weights does this layer have? How many biases?

<details>
<summary>Click here to view the answer</summary>

1. $5 \times 4$ (one row per neuron, one column per input feature). That way $(5 \times 4)(4 \times 1)$ gives a $5 \times 1$ output, one value per neuron.
2. $5 \cdot 4 = 20$ weights and $5$ biases (one per neuron), for 25 parameters total.

</details>

## Exercise 7

Gradient descent updates a weight using this rule:

$$\text{new } w = w - (\text{learning rate}) \cdot (\text{slope of loss})$$

1. A weight is currently $w = 0.8$. The slope of the loss is $0.5$ and the learning rate is $0.1$. What is the new weight?
2. On the next step, the slope of the loss is $-2$. Using the same learning rate, what is the new weight?
3. Explain why the weight went down in one step and up in the other.

<details>
<summary>Click here to view the answer</summary>

1. $0.8 - 0.1(0.5) = 0.8 - 0.05 = 0.75$
2. $0.75 - 0.1(-2) = 0.75 + 0.2 = 0.95$
3. The slope tells the model which way is "uphill" for the loss. A **positive** slope means increasing $w$ would increase the loss, so the weight moves **down**. A **negative** slope means increasing $w$ would decrease the loss, so the weight moves **up**. Gradient descent always steps in the direction opposite the slope.

</details>

## Exercise 8

A one-weight model predicts $\text{prediction} = w \cdot x$. For one training example, the input is $x = 2$ and the correct answer is $y = 10$. The current weight is $w = 3$.

The loss is $(y - wx)^2$, and the slope of the loss is $-2x(y - wx)$.

1. What is the model's prediction and loss?
2. What is the slope of the loss?
3. Using a learning rate of $0.05$, update the weight.
4. What are the new prediction and loss? Did the model improve?

<details>
<summary>Click here to view the answer</summary>

1. Prediction: $3 \cdot 2 = 6$. Loss: $(10 - 6)^2 = 16$
2. Slope: $-2(2)(10 - 6) = -16$
3. $\text{new } w = 3 - 0.05(-16) = 3 + 0.8 = 3.8$
4. Prediction: $3.8 \cdot 2 = 7.6$. Loss: $(10 - 7.6)^2 = 5.76$

**Yes.** The loss dropped from 16 to 5.76 after one step. Repeating this process would keep moving $w$ toward 5, where the prediction would be exactly 10.

</details>

## Exercise 9

During training, the slope of the loss for a weight becomes $0$. What happens to that weight on the next update, and what does that tell you about the model?

<details>
<summary>Click here to view the answer</summary>

$\text{new } w = w - (\text{learning rate}) \cdot 0 = w$, so the weight **stops changing**. A slope of 0 means the loss is flat at that point, which usually means the model has reached a minimum of the loss, so small changes to that weight can't reduce the error any further.

</details>

## Exercise 10

Calculate the ReLU output, $\text{ReLU}(z) = \max(0, z)$, for each value.

1. $z = -3$
2. $z = 0$
3. $z = 2.5$

<details>
<summary>Click here to view the answer</summary>

1. $0$
2. $0$
3. $2.5$

ReLU passes positive values through unchanged and replaces anything negative with 0.

</details>

## Exercise 11

Fill in the approximate output for each activation function.

| Input $z$ | Sigmoid | Tanh |
| --- | --- | --- |
| $-10$ | ? | ? |
| $0$ | ? | ? |
| $10$ | ? | ? |

<details>
<summary>Click here to view the answer</summary>

| Input $z$ | Sigmoid | Tanh |
| --- | --- | --- |
| $-10$ | $\approx 0$ | $\approx -1$ |
| $0$ | $0.5$ | $0$ |
| $10$ | $\approx 1$ | $\approx 1$ |

Both are S-shaped curves that flatten out for very large or very small inputs. Sigmoid is centered at 0.5, and Tanh is centered at 0.

</details>

## Exercise 12

Complete the comparison table for the three activation functions.

| Activation | Shape of the Graph | Output Range | Typical Use |
| --- | --- | --- | --- |
| ReLU | ? | ? | ? |
| Sigmoid | ? | ? | ? |
| Tanh | ? | ? | ? |

<details>
<summary>Click here to view the answer</summary>

| Activation | Shape of the Graph | Output Range | Typical Use |
| --- | --- | --- | --- |
| ReLU | Flat at 0 for negative inputs, a straight diagonal line for positive inputs | $0$ to $\infty$ | Hidden layers (the most common default because it is simple and trains fast) |
| Sigmoid | S-curve | $0$ to $1$ | Output layer for yes/no (binary) classification, since the output can be read as a probability |
| Tanh | S-curve | $-1$ to $1$ | Hidden layers when outputs should be centered around 0 |

</details>

## Exercise 13

A model needs to output the probability that an email is spam. Which activation function should its **output** neuron use, and why would ReLU be a poor choice?

<details>
<summary>Click here to view the answer</summary>

**Sigmoid**, because its output is always between 0 and 1, just like a probability.

ReLU would be a poor choice because its output can be any number from 0 up to infinity. A "probability" of 4.7 doesn't make sense.

</details>

## Exercise 14

Suppose a network has no activation functions. Layer 1 multiplies its input by 3, and layer 2 multiplies its input by 2.

1. Write one equation for what the two layers do together.
2. Use this to explain why neural networks need activation functions.

<details>
<summary>Click here to view the answer</summary>

1. $y = 2(3x) = 6x$
2. Stacking the two layers gave the same result as **one** layer that multiplies by 6. Without activation functions, any number of layers collapses into one straight-line (linear) model, no matter how deep the network is. Activation functions add curves (non-linearity), which let the network learn patterns that a straight line can't fit.

</details>

## Exercise 15

Open [TensorFlow Playground](https://playground.tensorflow.org). Choose the **circle** dataset (blue dots surrounded by a ring of orange dots), and use only the $X_1$ and $X_2$ input features.

1. Set the activation to **Linear** and press play. Let it train for about 500 epochs. What does the boundary between blue and orange look like, and what happens to the test loss?
2. Reset, change the activation to **Tanh** or **ReLU**, and train again. What changes?
3. Explain the difference using what you know about activation functions.

<details>
<summary>Click here to view the answer</summary>

1. With **Linear**, the boundary is always a **straight line**. It can't separate the inner circle from the outer ring, so the test loss stays high (around 0.5).
2. With **Tanh** or **ReLU**, the boundary bends into a **closed shape** around the blue dots, and the test loss drops close to 0.
3. Linear activation means every layer collapses into one straight line (Exercise 14). Non-linear activation functions let the network combine lines into curves, which is what the circle pattern needs.

</details>

## Exercise 16

In TensorFlow Playground, keep the **circle** dataset with **ReLU** activation. Use **1 hidden layer** and try training it with **1 neuron**, then **2 neurons**, then **4 neurons**.

How does the number of neurons change what the model can learn?

<details>
<summary>Click here to view the answer</summary>

- **1 neuron:** The model can only draw one straight split, so it can't surround the blue dots.
- **2 neurons:** It can combine two lines into a corner or band shape, but still can't fully enclose the circle.
- **4 neurons:** It can combine enough lines to box in the blue dots, and the test loss gets close to 0.

Each neuron contributes roughly one line to the boundary. More neurons let the network build more complex shapes. (Your exact results may vary each time you reset.)

</details>

## Exercise 17

In TensorFlow Playground, set up any network that successfully learns the circle dataset. Then change the **learning rate** to $3$ (or higher) and train again from the start.

What happens to the loss? Connect this to how gradient descent updates weights.

<details>
<summary>Click here to view the answer</summary>

The loss **jumps around or gets stuck** instead of smoothly decreasing, and the boundary may flicker or never settle.

In gradient descent, the learning rate controls how big each step is. When it is too large, each update **overshoots** the minimum, landing on the other side of it, so the weights bounce back and forth instead of settling where the loss is lowest.

</details>
