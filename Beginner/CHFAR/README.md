
# [Chef and Sequence](https://www.codechef.com/problems/CHFAR)
Problem Code: **CHFAR**

Chef has a sequence of positive integers **_A1, A2, …, AN_**. He has only one question for you: is it possible to change at most **_K_** elements of this sequence to arbitrary positive integers in such a way that the condition **_(A\_1)^2 + (A\_2)^2 + ⋯ + (A\_N)^2 ≤ A\_1 + A\_2 + ⋯ + A_N_** holds?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains two space-separated integers **_N_** and **_K_**.
- The second line contains N space-separated integers **_A\_1, A\_2, …, A\_N_**.

## Output

For each test case, print a single line containing the string "**YES**" if it is possible to satisfy the given condition or "**NO**" otherwise.

## Usage
```sh
node .
```
## Example
### Input:
```
1
2 2
1 2
```
### Output:
```
YES
```
## Explanation

**Example case 1:** It is possible to change **A_2** to **1**. This gives **A = [1,1]**, for which the given condition holds, so the answer is "**YES**".

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
