
# [Breaking Bricks](https://www.codechef.com/problems/BRKBKS)
Problem Code: **BRKBKS**

For her next karate demonstration, Ada will break some bricks.

Ada stacked three bricks on top of each other. Initially, their widths (from top to bottom) are **_W1, W2, W3_**.

Ada's strength is **_S_**. Whenever she hits a stack of bricks, consider the largest **_k ≥ 0_** such that the sum of widths of the topmost **_k_** bricks does not exceed **_S_**; the topmost **_k_** bricks break and are removed from the stack. Before each hit, Ada may also decide to reverse the current stack of bricks, with no cost.

Find the minimum number of hits Ada needs in order to break all bricks if she performs the reversals optimally. You are not required to minimise the number of reversals.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains four space-separated integers **_S, W1, W2_** and **_W3_**.

## Output

For each test case, print a single line containing one integer ― the minimum required number of hits.

## Usage
```sh
node .
```
## Example
### Input:
```
3
3 1 2 2
2 1 1 1
3 2 2 1
```
### Output:
```
2
2
2
```
## Explanation

**Example case 1:** Ada can reverse the stack and then hit it two times. Before the first hit, the widths of bricks in the stack (from top to bottom) are **(2,2,1)**. After the first hit, the topmost brick breaks and the stack becomes **(2,1)**. The second hit breaks both remaining bricks.

In this particular case, it is also possible to hit the stack two times without reversing. Before the first hit, it is **(1,2,2)**. The first hit breaks the two bricks at the top (so the stack becomes **(2)**) and the second hit breaks the last brick.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
