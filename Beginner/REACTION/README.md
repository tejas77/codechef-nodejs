
# [Chain Reaction](https://www.codechef.com/problems/REACTION)
Problem Code: **REACTION**

You are given a grid with **_R_** rows (numbered **1** through **_R_**) and **_C_** columns (numbered **1** through **_C_**). A cell in row **_r_** and column **_c_** is denoted by **( _r, c_ )**. Two cells in the grid are adjacent if they have a common side. For each valid **_i_** and **_j_**, there is a value **_a\_i,j_** written in cell **_a\_i,j_**.

A cell in the grid is stable if the number of cells in the grid which are adjacent to this cell is strictly greater than the value written in this cell. The whole grid is stable if all cells in the grid are stable.

Can you determine whether the grid is stable?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains two space-separated integers **_R_** and **_C_**.
- **_R_** lines follow. For each **_i_** (**1 _≤ i ≤ R_**), the **_i_**-th of these lines contains **_C_** space-separated integers **_a\_i,1, a\_i,2, …, a\_i,C_**.

## Output

For each test case, print a single line containing the string "_Stable_" if the grid is stable or "_Unstable_" if it is unstable (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
2
3 3
1 2 1
2 3 2
1 2 1
3 4
0 0 0 0
0 0 0 0
0 0 4 0
```
### Output:
```
Stable
Unstable
```
## Explanation

**Example case 1:** Each cell of the grid is stable, so the grid is stable.

**Example case 2:** The cell in row **3** and column **3** is unstable since the number of cells adjacent to this cell is **3**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
