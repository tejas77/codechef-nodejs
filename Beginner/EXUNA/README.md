
# [Weird Modulo Problem](https://www.codechef.com/problems/EXUNA)
Problem Code: **EXUNA**

You are given an array **_A_** of **_N_** positive and pairwise distinct integers. You can permute the elements in any way you want.

The cost of an ordering **_(A1, A2, …, AN)_** is defined as **_(((A1 mod A2) mod A3)......) mod AN_** where **_X mod Y_** means the remainder when **_X_** is divided by **_Y_**. You need to find the maximum cost which can be attained through any possible ordering of the elements.

## Input

- The first line contains **_T_** denoting the number of test cases.
- The first line of each testcase contains a single integer **_N_**.
- The second line of each testcase contains **_N_** space-separated integers, the elements of **_A_**.

## Output

- For each testcase, output the maximum possible cost in a new line.


## Usage
```sh
node .
```
## Example
### Input:
```
1
2
7 12
```
### Output:
```
7
```
## Explanation

The two possible ways to order the elements are [7, 12] and [12, 7]. In the first case, the cost is **7 mod 12 = 7** and in the second case the cost is **12 mod 7 = 5**. Clearly the answer is 7.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
