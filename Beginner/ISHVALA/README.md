
# [The Promised Land](https://www.codechef.com/problems/ISHVALA)
Problem Code: **ISHVALA**

Years after the Ishval Civil War, the Ishvalan refugees have now found a safe place for themselves which is a rectangular piece of land, surrounded by fences.

The land can be thought of as a 2d grid which extends **_N_** units vertically and **_M_** units horizontally. It is divided into **_N_** horizontal rows, which are numbered from **1** to **_N_**, as you move from top to bottom and into **_M_** vertical columns numbered from **1** to **_M_**, from left to right.

There are **_X_** rivers flowing in a horizontal direction, each flowing in a different row and covering the entire row. Similarly, there are **_Y_**

rivers flowing in a vertical direction, each flowing in a different column and covering the entire column.

The people want to build houses of dimensions **_S_ × _S_** on the remaining land.

What is the maximum number of houses of the given dimensions that could be built on the remaining land, such that no part of any house is in a river and no two houses overlap?

## Input

- The first line contains **_T_**, the number of test cases. Then the test cases follow.
- For each test case, the first line contains **_N_** and **_M_**.
- Then the second line contains **_X_** , **_Y_** and **_S_** denoting the number of rivers flowing horizontally, number of rivers flowing vertically and the dimension of the house.
- The next line contains **_X_** integers **x_i** denoting the indices of rows in which river flows horizontally.
- The next line contains **_Y_** integers **y_i** denoting the indices of columns in which the river flows vertically.

**Note:**
- **x_i** and **y_i** are given in increasing order.
- When **_X_** or **_Y_** are zero, the line containing **x_i** and **y_i** is skipped respectively in the input (instead of a blank line).

## Output

For each test case, print a single line containing the maximum number of houses that can be built.

## Usage
```sh
node .
```
## Example
### Input:
```
2
7 8
1 2 2
5
4 8
6 5
2 0 1
1 4
```
### Output:
```
6
20
```
## Explanation

The given figure corresponds to the first test case.
```
7 8
1 2 2
5
4 8
```
![Example Figure](https://codechef_shared.s3.amazonaws.com/download/HYC/External_contest_images/DCOD2019/image6.png)

As shown in the figure, the maximum number of houses of dimension 2×2 that could be built on the remaining land is 6.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
