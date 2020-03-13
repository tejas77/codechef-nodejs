
# [Chef and Sum](https://www.codechef.com/problems/CSUM)
Problem Code: **CSUM**

Given an array **_A_** of size **_N_** and an integer **_K_**, check if there exist any pair of index **_i, j_** such that **_Ai + Aj = K_** and **_i ≠ j_**

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases.
- The first line of each test case contains two space separated integer **_N_** and **_K_** respectively.
- The second line of each test case contains **_N_** space separated integers **_Ai_**.

## Output

For each test case, print a single line containing answer **"Yes"** or **"No"** (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
3
4 3
1 2 1 3
4 6
1 2 1 3
5 1
5 4 1 2 3
```
### Output:
```
Yes
No
No
```
## Explanation

**Example case 1:** A1 + A2 = 3.

**Example case 2:** Pair having Ai + Aj = 6 doesn't exist.

**Example case 3:** Pair having Ai + Aj = 1 doesn't exist.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
