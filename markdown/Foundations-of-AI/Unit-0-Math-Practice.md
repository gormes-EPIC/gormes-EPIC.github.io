# Unit 0 Math Practice

## Objectives
1. Calculate measures of center (mean, median, mode) and spread (range, standard deviation) for a dataset.
2. Represent data as vectors and matrices, and identify their dimensions.
3. Perform basic matrix operations, including addition, scalar multiplication, and transposition.
4. Describe how transformations such as scaling, rotation, and reflection change a set of points.

## Exercise 1

A student's last five quiz scores are: 7, 9, 4, 9, 6. Find the mean, median, mode, and range.

<details>
<summary>Click here to view the answer</summary>

- **Mean:** $(7 + 9 + 4 + 9 + 6) / 5 = 35 / 5 = 7$
- **Median:** Sorted: 4, 6, **7**, 9, 9. The middle value is $7$.
- **Mode:** $9$ (it appears twice)
- **Range:** $9 - 4 = 5$

</details>

## Exercise 2

Find the mean and median of this dataset: 12, 3, 8, 5, 10, 6.

<details>
<summary>Click here to view the answer</summary>

- **Mean:** $(12 + 3 + 8 + 5 + 10 + 6) / 6 = 44 / 6 \approx 7.33$
- **Median:** Sorted: 3, 5, **6**, **8**, 10, 12. With an even number of values, average the two middle values: $(6 + 8) / 2 = 7$

</details>

## Exercise 3

Find the standard deviation of this dataset: 2, 4, 4, 4, 5, 5, 7, 9.

Use the formula $\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}}$

<details>
<summary>Click here to view the answer</summary>

$\sigma = 2$

1. Mean: $\bar{x} = 40 / 8 = 5$
2. Squared distances from the mean: $9, 1, 1, 1, 0, 0, 4, 16$
3. Sum of squared distances: $32$
4. Divide by $n$: $32 / 8 = 4$
5. Square root: $\sqrt{4} = 2$

</details>

## Exercise 4

Five employees at a small company earn these salaries (in thousands of dollars): 40, 45, 50, 55, 500.

Calculate the mean and the median. Which one better describes a "typical" salary at this company, and why?

<details>
<summary>Click here to view the answer</summary>

- **Mean:** $690 / 5 = 138$ thousand
- **Median:** $50$ thousand

The **median** is the better description. The single outlier (500) pulls the mean far above what four of the five employees actually earn, while the median is not affected by how extreme the outlier is.

</details>

## Exercise 5

Two classes took the same test.

- Class A scores: 48, 50, 52
- Class B scores: 20, 50, 80

Both classes have the same mean. Which class has the larger standard deviation? Explain what that tells you without calculating.

<details>
<summary>Click here to view the answer</summary>

**Class B.** Both means are 50, but Class B's scores are much farther from the mean. Standard deviation measures how spread out values are from the mean, so Class B's scores are more spread out (less consistent) than Class A's.

</details>

## Exercise 6

A dataset describes three houses using three features: number of bedrooms, number of bathrooms, and square footage.

| House | Bedrooms | Bathrooms | Square Feet |
| --- | --- | --- | --- |
| 1 | 3 | 2 | 1500 |
| 2 | 4 | 3 | 2200 |
| 3 | 2 | 1 | 900 |

1. Write House 2 as a vector.
2. Write the whole dataset as a matrix.
3. What are the dimensions of the matrix?
4. In this matrix, what does a single row represent? What does a single column represent?

<details>
<summary>Click here to view the answer</summary>

1. $\begin{bmatrix} 4 & 3 & 2200 \end{bmatrix}$
2. $\begin{bmatrix} 3 & 2 & 1500 \cr 4 & 3 & 2200 \cr 2 & 1 & 900 \end{bmatrix}$
3. $3 \times 3$ (3 rows by 3 columns)
4. A **row** is one data point (one house). A **column** is one feature (for example, every house's number of bedrooms).

</details>

## Exercise 7

Give the dimensions (rows × columns) of each of the following.

$A = \begin{bmatrix} 5 & 1 & 8 & 2 \end{bmatrix}$ $\quad B = \begin{bmatrix} 3 \cr 7 \cr 0 \end{bmatrix}$ $\quad C = \begin{bmatrix} 1 & 2 & 3 \cr 4 & 5 & 6 \end{bmatrix}$

<details>
<summary>Click here to view the answer</summary>

- $A$: $1 \times 4$ (a row vector)
- $B$: $3 \times 1$ (a column vector)
- $C$: $2 \times 3$

Remember: dimensions are always written as **rows × columns**.

</details>

## Exercise 8

A grayscale image is 28 pixels tall and 28 pixels wide. Each pixel stores one brightness value.

1. If the image is stored as a matrix, what are its dimensions?
2. How many numbers are needed to store the whole image?
3. If the image is "flattened" into a single column vector, what would its dimensions be?

<details>
<summary>Click here to view the answer</summary>

1. $28 \times 28$
2. $28 \cdot 28 = 784$ numbers
3. $784 \times 1$

</details>

## Exercise 9

Use the matrices below to answer the question.

$A = \begin{bmatrix} 1 & 2 \cr 3 & 4 \end{bmatrix}$ $\quad B = \begin{bmatrix} 5 & 0 \cr -1 & 2 \end{bmatrix}$

Find $A + B$.

<details>
<summary>Click here to view the answer</summary>

Add the entries in matching positions:

$A + B = \begin{bmatrix} 1 + 5 & 2 + 0 \cr 3 + (-1) & 4 + 2 \end{bmatrix} = \begin{bmatrix} 6 & 2 \cr 2 & 6 \end{bmatrix}$

</details>

## Exercise 10

Using the same matrices $A$ and $B$ from Exercise 9, find $3A$ and $2A - B$.

<details>
<summary>Click here to view the answer</summary>

Multiply every entry by the scalar:

$3A = \begin{bmatrix} 3 & 6 \cr 9 & 12 \end{bmatrix}$

$2A - B = \begin{bmatrix} 2 & 4 \cr 6 & 8 \end{bmatrix} - \begin{bmatrix} 5 & 0 \cr -1 & 2 \end{bmatrix} = \begin{bmatrix} -3 & 4 \cr 7 & 6 \end{bmatrix}$

</details>

## Exercise 11

Find the transpose of $C = \begin{bmatrix} 1 & 2 & 3 \cr 4 & 5 & 6 \end{bmatrix}$. How do the dimensions change?

<details>
<summary>Click here to view the answer</summary>

$C^T = \begin{bmatrix} 1 & 4 \cr 2 & 5 \cr 3 & 6 \end{bmatrix}$

The rows become columns, so the dimensions change from $2 \times 3$ to $3 \times 2$.

</details>

## Exercise 12

Can you add a $2 \times 3$ matrix to a $3 \times 2$ matrix? Why or why not?

<details>
<summary>Click here to view the answer</summary>

**No.** Matrix addition only works when both matrices have exactly the same dimensions, because each entry needs a matching entry in the same position to add to.

</details>

## Exercise 13

A triangle has corners at $(1, 1)$, $(3, 1)$, and $(1, 2)$. Every point is **scaled by 2** (both coordinates are multiplied by 2).

1. What are the new corners?
2. Describe how the triangle changed.

<details>
<summary>Click here to view the answer</summary>

1. $(2, 2)$, $(6, 2)$, and $(2, 4)$
2. The triangle keeps the same shape, but every side is twice as long, and every point is twice as far from the origin.

</details>

## Exercise 14

Reflect the point $(2, 3)$:

1. Across the x-axis
2. Across the y-axis

<details>
<summary>Click here to view the answer</summary>

1. Across the x-axis, flip the sign of $y$: $(2, -3)$
2. Across the y-axis, flip the sign of $x$: $(-2, 3)$

</details>

## Exercise 15

Rotating a point 90° counterclockwise around the origin moves $(x, y)$ to $(-y, x)$.

Rotate the point $(3, 1)$ 90° counterclockwise. Does its distance from the origin change?

<details>
<summary>Click here to view the answer</summary>

$(3, 1) \rightarrow (-1, 3)$

The distance does **not** change. Both points are $\sqrt{10}$ away from the origin. Rotations move points around the origin without stretching or shrinking anything.

</details>

## Exercise 16

For each change below, name the transformation (scaling, rotation, or reflection).

1. $(4, 2) \rightarrow (-4, 2)$
2. $(4, 2) \rightarrow (2, 1)$
3. $(4, 2) \rightarrow (-2, 4)$

<details>
<summary>Click here to view the answer</summary>

1. **Reflection** across the y-axis (only the sign of $x$ flipped)
2. **Scaling** by $\frac{1}{2}$ (both coordinates were cut in half)
3. **Rotation** 90° counterclockwise (follows the rule $(x, y) \rightarrow (-y, x)$)

</details>
