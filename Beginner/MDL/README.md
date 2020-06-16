
# [Medel](https://www.codechef.com/problems/MDL)
Problem Code: **MDL**

You are given a sequence **_A1, A2, …, AN_** of distinct integers. While the sequence contains at least three elements, look at its first three elements, find the median among these elements and delete it. What will the final sequence be?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

- For each test case, print a single line containing **_K_** space-separated integers, where **_K_** is the length of the final sequence. For each valid **_i_**, the **_i_**-th of these integers should be the **_i_**-th element of the final sequence.

## Usage
```sh
node .
```
## Example
### Input:
```
2
3
2 5 3
10
38 9 102 10 96 7 46 28 88 13
```
### Output:
```
2 5
102 7
```
## Explanation

**Example case 1:** We remove the element **3** because it is the median of **(2,5,3)**. The final sequence is **(2,5)**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
