
# [Change It](https://www.codechef.com/problems/CHNGIT)
Problem Code: **CHNGIT**

You are given a sequence **_A1, A2, …, AN_**. You want all the elements of the sequence to be equal. In order to achieve that, you may perform zero or more moves. In each move, you must choose an index **_i_** **(1 _≤ i ≤ N_)**, then choose **_j = i −_ 1** or **_j = i +_ 1** (it is not allowed to choose **_j =_ 0** or **_j = N +_ 1**) and change the value of **_Ai_** to **_Aj_** — in other words, you should replace the value of one element of the sequence by one of its adjacent elements.

What is the minimum number of moves you need to make in order to make all the elements of the sequence equal?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line containing one integer — the minimum required number of moves.

## Usage
```sh
node .
```
## Example
### Input:
```
3
5
1 1 1 1 1
4
9 8 1 8
2
1 9
```
### Output:
```
0
2
1
```
## Explanation

**Example case 1:** No moves are needed since all the elements are already equal.

**Example case 3:** We can perform one move on either **_A1_** or **_A2_**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
