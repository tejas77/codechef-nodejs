
# [Cut the Board](https://www.codechef.com/problems/CUTBOARD)
Problem Code: **CUTBOARD**

Suzumo has a chessboard with **_N_** rows and **_M_** columns. In one step, he can choose two cells of the chessboard which share a common edge (that has not been cut yet) and cut this edge.

Formally, the chessboard is split into two or more pieces if it is possible to partition its cells into two non-empty subsets **_S1_** and **_S2_** **_(S1 ∩ S2 = ∅, |S1| + |S2| = NM)_** such that there is no pair of cells **_c1, c2 (c1 ∈ S1,c2 ∈ S2)_** which share a common edge that has not been cut.

Suzumo does not want the board to split into two or more pieces. Compute the maximum number of steps he can perform while satisfying this condition.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains two space-separated integers **_N_** and **_M_**.

## Output

For each test case, print a single line containing one integer — the maximum possible number of steps.

## Usage
```sh
node .
```
## Example
### Input:
```
4
2 4
3 3
6 8
7 5
```
### Output:
```
3
4
35
24
```
## Explanation

**Example case 1:**

![CUTBOARD](https://codechef_shared.s3.amazonaws.com/download/upload/COOK93/CUTBOARD.png)

The edges cut by Suzumo in one optimal solution are marked by red lines.
## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
