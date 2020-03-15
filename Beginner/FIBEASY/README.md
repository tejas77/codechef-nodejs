
# [Easy Fibonacci](https://www.codechef.com/problems/FIBEASY)
Problem Code: **FIBEASY**

The **Fibonacci sequence _F0,F1,…_** is a special infinite sequence of non-negative integers, where **_F0 = 0, F1 = 1_** and for each integer **_n ≥ 2, Fn = F(n−1) + F(n−2)_**.

Consider the sequence **_D_** of the last decimal digits of the first **_N_** Fibonacci numbers, i.e. **_D = (F0 % 10, F1 % 10, …, FN−1 % 10)_**. Now, you should perform the following process:
- Let **_D = (D1,D2,…,Dl)_**.
- If **_l = 1_**, the process ends.
- Create a new sequence **_E = (D2,D4,…,D2⌊l/2⌋)_**. In other words, **_E_** is the sequence created by removing all odd-indexed elements from **_D_**.
- Change **_D_** to **_E_**.

When this process terminates, the sequence **_D_** contains only one number. You have to find this number.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single integer **_N_**.

## Output

For each test case, print a single line containing one integer ― the last remaining number.

## Usage
```sh
node .
```
## Example
### Input:
```
1
9
```
### Output:
```
3
```
## Explanation

**Example case 1:** The first **_N_** Fibonacci numbers are **(0,1,1,2,3,5,8,13,21)**. The sequence **_D_** is **(0,1,1,2,3,5,8,3,1) → (1,2,5,3) → (2,3) → (3)**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
