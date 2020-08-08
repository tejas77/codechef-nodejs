
# [Reduce to One](https://www.codechef.com/problems/REDONE)
Problem Code: **REDONE**

You have become good friends with Chef. Right now, Chef is busy in the kitchen, so he asked you to solve a problem for him.

Consider a list of integers **_L_**. Initially, **_L_** contains the integers **1** through **_N_**, each of them exactly once (but it may contain multiple copies of some integers later). The order of elements in **_L_** is not important. You should perform the following operation **_N − 1_** times:

- Choose two elements of the list, let's denote them by **_X_** and **_Y_**. These two elements may be equal.
- Erase the chosen elements from **_L_**.
- Append the number **_X + Y + X ⋅ Y_** to **_L_**.

At the end, **_L_** contains exactly one integer. Find the maximum possible value of this integer. Since the answer may be large, compute it modulo **1,000,000,007** (**10^9+7**).

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single integer **_N_**.

## Output

For each test case, print a single line containing one integer ― the maximum possible value of the final number in the list modulo **10^9+7**.

## Usage
```sh
node .
```
## Example
### Input:
```
3
1
2
4
```
### Output:
```
1
5
119
```
## Explanation

**Example case 1:** **_L_** = [1]

**Example case 2:** **_L_** = [1, 2]→[1 + 2 + 1 ⋅ 2]

**Example case 3:** **_L_** = [**1**, 2, 3, **4**]→[**2**, 3, **9**]→[3, 29]→[119]. The chosen elements in each step are in bold.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
