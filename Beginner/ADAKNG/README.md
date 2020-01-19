
# [Ada King](https://www.codechef.com/problems/ADAKNG)
Problem Code: **ADAKNG**

Chef Ada is training to defend her title of World Chess Champion.

To train her calculation skills, Ada placed a king on a chessboard. Remember that a chessboard has **_8_**
rows and **_8_** columns (for the purposes of this problem, both the rows and the columns are numbered **_1_** through **_8_**); let's denote the square in row **_r_** and column **_c_** by **_(r, c)_**. A king on a square **_(r, c)_** can move to another square **_(r′, c′)_** if and only if **_(r′− r)^2 + (c′− c)^2 ≤ 2_**.

Ada placed her king on the square **_(R,C)_**. Now, she is counting the number of squares that can be visited (reached) by the king in at most **_K_** moves. Help Ada verify her answers.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains three space-separated integers **_R_**, **_C_** and **_K_**.

## Output

For each test case, print a single line containing one integer — the number of squares the king can visit.

## Usage
```sh
node .
```
## Example
### Input:
```
1
1 3 1
```
### Output:
```
6
```
## Explanation

**Example case 1:** The king can stay on its original square or move to one of the squares circled in the following figure.

![](https://codechef_shared.s3.amazonaws.com/download/Images/CK102TST/ADAKNG/ADAKNG.png)

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
