
# [Even Matrix](https://www.codechef.com/problems/EVENM)
Problem Code: **EVENM**

Chef has an integer **_N_** and he wants to generate a matrix **_M_** with **_N_** rows (numbered **1** through **_N_**) and **_N_** columns (numbered **1** through **_N_**). He thinks that **_M_** would be delicious if:

- Each element of this matrix is an integer between **1** and **_N^2_** inclusive.
- All the elements of the matrix are pairwise distinct.
- For each square submatrix containing cells in rows **_r_** through **_r+a_** and in columns **_c_** through **_c+a_** (inclusive) for some valid integers **_r, c_** and **_a_ ≥ 0**:
  - **_M\_r,c + M\_r+a,c+a_** is even
  - **_M\_r,c+a + M\_r+a,c_** is even

Can you help Chef generate a delicious matrix? It can be proved that a solution always exists. If there are multiple solutions, you may find any one.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single integer **_N_**.

## Output

For each test case, print **_N_** lines describing a delicious matrix **_M_**. For each valid **_i_**, the **_i_**-th of these lines should contain **_N_** space-separated integers **_Mi,1, Mi,2, …, Mi,N_**.

## Usage
```sh
node .
```
## Example
### Input:
```
1
2
```
### Output:
```
1 2
4 3
```
## Explanation

**Example case 1:** The matrix **_M_** has five square submatrices. Four of them (**[1], [2], [4], [3]**) have **_a_ = 0**, so they obviously satisfy all conditions. The last square submatrix is the whole matrix **_M_**, with **_r = c = a =_ 1**, and we can see that **_M\_1,1 + M\_2,2 = 1 + 3 = 4_** and **_M\_1,2 + M\_2,1 = 2 + 4 = 6_** are both even.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
