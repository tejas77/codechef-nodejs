
# [Maximise the Sum](https://www.codechef.com/problems/BRKBKS)
Problem Code: **BRKBKS**

You are given an array with **_N_** integers: **_A[1], A[2], …, A[N]_** (where **_N_** is even). You are allowed to permute the elements however you want. Say, after permuting the elements, you end up with the array **_A′[1],A′[2],…,A′[N]_**. Your goal is to maximize the following sum:

**_| A′[1]−A′[2] | + | A′[3]−A′[4] | + ... + | A′[N−1]−A′[N] |_**

Here, **_| x |_** denotes the absolute value of **_x_**.

You have to print the maximum sum achievable.

## Input

- The first line contains **_T_**, the number of test cases.
- Each test case starts with an integer **_N_** in the first line.
- The second line of each test case contains **_N_** space separated integers, denoting the values of array **_A_**.

## Output

For each test case, output the maximum sum achievable in a new line.

## Usage
```sh
node .
```
## Example
### Input:
```
1
4
1 -3 2 -3
```
### Output:
```
9
```
## Explanation

The original array is **{1,−3,2,−3}**. Suppose you permute it and get the array **{2,1,−3,−3}**. Then the corresponding sum would be **|2−1| + |−3−(−3)| = 1 + 0 = 1**.

But suppose you permute it differently and get the array **{−3,2,1,−3}**. Then the corresponding sum would be **|−3−2| + |1−(−3)| = 5 + 4 = 9**. You can check that you cannot do any better, and hence the answer is 9.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
