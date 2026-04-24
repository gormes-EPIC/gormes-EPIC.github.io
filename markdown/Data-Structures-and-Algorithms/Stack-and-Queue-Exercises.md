# Stack and Queue Exercises

## Exercise 1

Trace the following code and give the output of the program for the stack s.

```java
Stack s = new Stack();
s.push(7);
s.push(15);
s.push(35);
s.push(2);
System.out.println(s.peek());
s.push(22);
System.out.println(s.pop());
s.peek();
s.push(14);
s.pop();
s.pop();
System.out.println("size: " + s.size());
System.out.println(s.pop);
```

<details>
<summary>Click here to view the answer</summary>
```
2
22
size: 3
35
```

</details>

## Exercise 2


Trace the following code and give the output of the program for the queue q.

```java
Queue q = new Queue();
q.add(7);
q.add(14);
q.add(13);
q.remove();
q.add(24);
System.out.println(q.peek());
q.remove();
System.out.println(q.remove());
q.add(3);
q.add(15);
System.out.println("size: " + q.size());
int num = q.remove() + q.remove(); 
System.out.println(num);
```


<details>
<summary>Click here to view the answer</summary>

```
14
size: 5
27
```

</details>

## Exercise 3

Complete the table below:

| Infix | Prefix | Postfix |
| - | - | - |
| (A + B) / C * D |||
|||A B C * + A C - C + +|
|||A B / C ^ 2 D + + |
|(A - B) * (C / D)|||
||+ A / - / B C D E||
|A ^ 2 * B ^ 2 + C ^ 2|||
|| * A + B / C D||

<details>
<summary>Click here to view the answer</summary>

| Infix | Prefix | Postfix |
| - | - | - |
| (A + B) / C * D | * / + A B C D | A B + C / D *|
|||A B C * + A C - C + +|
|||A B / C ^ 2 D + + |
|(A - B) * (C / D)|||
||+ A / - / B C D E||
|A ^ 2 * B ^ 2 + C ^ 2|||
|| * A + B / C D||

</details>

## Exercise 4

Let A = 2, B = 3, C = 4, and D = 5.

What is the final value of the prefix expression: `+ * A B – C D`

<details>
<summary>Click here to view the answer</summary>

5

</details>

What is the final value of the postfix expression: `B C D A D - + - +`
<details>
<summary>Click here to view the answer</summary>

5

</details>

## Exercise 5

Which of the following is a valid expression (either postfix or prefix)? For each valid expression, identify if it is infix or postfix or prefix.

- `B C * D - +`
- `A B C + *`
- `A + B C –`
- `* A B C –`
- `* + - A * B C D / E F`
- `A + B * C`
- `B B B * *`
- `* A + B – C D * / E F`
- `A B + C D * E / F - +`

<details>
<summary>Click here to view the answer</summary>

- `B C * D - +` - invalid
- `A B C + *` - valid postfix
- `A + B C –` - invalid
- `* A B C –` - invalid
- `* + - A * B C D / E F` -  valid prefix
- `A + B * C` - valid infix
- `B B B * *` - valid postfix
- `* A + B – C D * / E F` - invalid
- `A B + C D * E / F - +` - valid postfix 

</details>

## Exercise 6

Evaluate the following with the given values:
- (postfix) `A 2 ^ B C * D / -` where A = 8, B = 2, C = 3, D = 6
- (postfix) `A B + D / A B * -` where A = 12, B = 14, and D = 13
- (prefix) `/ * 2 B + B * B ^ A 2` where A = 1 and B = 9999
- (prefix) `+ A / - / B C D E` where A = 11, B = 20, C = 10, D = 4 and E = 2

<details>
<summary>Click here to view the answer</summary>


</details>

## Exercise 7

Evaluate the following postfix expression if A = 2, B = 4, C = 6, D = 1, and E = 0:

`A B + C / B E ^ * D A + 2 ^ + B C E * + A / −`


<details>
<summary>Click here to view the answer</summary>


</details>

## Exercise 8

Convert the following prefix expression into a postfix expression:

`− + − * + A B − ^ A 2 B / + A B ^ C 2 / A B C`


<details>
<summary>Click here to view the answer</summary>


</details>

## Exercise 9

Evaluate the following postfix expression. All numbers are single digits.

`2 4 6 + * 5 / 3 2 ^ 4 2 − * +` 
<details>
<summary>Click here to view the answer</summary>


</details>

## Exercise 10

Convert the following prefix expression into a postfix expression.
`+ − * A ^ B C / B A * C + / A B C`

<details>
<summary>Click here to view the answer</summary>


</details>

## Exercise 11

5.Define A @ B = gcf (A, B) and A % B = largest integer $<=$ (A/B). Evaluate the following postfix expression. Note all the numbers are single digits.
`4 3 6 * 9 3 + @ 3 2 ^ @ * 2 3 5 * * 7 5 * @ %`

<details>
<summary>Click here to view the answer</summary>


</details>


## Exercise 12

Rearrange the lines below to construct the method `isPalindrome` which checks if a string is a palindrome using a **deque** (double ended queue).


```java
if (deque.removeFirst() != deque.removeLast()) {
Deque<Character> deque = new ArrayDeque<>();
public boolean isPalindrome(String s) {
while (deque.size() > 1) {
return true;
for (char c : s.toCharArray())
deque.add(c);
return false;
}
}
}
```

<details>
<summary>Click here to view the answer</summary>

```java
public boolean isPalindrome(String s) {
    Deque<Character> deque = new ArrayDeque<>();
    for (char c : s.toCharArray()) 
        deque.add(c);
    while (deque.size() > 1) {
        if (deque.removeFirst() != deque.removeLast()) {
            return false;
        }
    }
    return true;
}
```

</details>



## Exercise 13

Rearrange the lines of code below to create the method `sortStack` which sorts a stack recursively or iteratively using a temporary stack `r`.

```java
Stack<Integer> r = new Stack<>();
while (!r.isEmpty() && r.peek() > tmp) {
public Stack<Integer> sortStack(Stack<Integer> s) {
s.push(r.pop());
r.push(tmp);
while (!s.isEmpty()) {
int tmp = s.pop();
return r;
}
}
}
```


<details>
<summary>Click here to view the answer</summary>

```java
public Stack<Integer> sortStack(Stack<Integer> s) {
    Stack<Integer> r = new Stack<>();
    while (!s.isEmpty()) {
        int tmp = s.pop();
        while (!r.isEmpty() && r.peek() > tmp) {
            s.push(r.pop());
        }
        r.push(tmp);
    }
    return r;
}
```
</details>
