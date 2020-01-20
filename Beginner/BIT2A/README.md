
# [A - Books](https://www.codechef.com/problems/BIT2A)
Problem Code: **BIT2A**

You are given a **_sorted_** list **_A_** of size **_N_**.You have to make a new list **_B_** such that **_B[i]_** is equal to the number of elements **_strictly greater_** than **_A[i]_** in the list **_A_**.

Print the **_new list_**.

## Input

- The first line consists of **_T_**, denoting the number of test cases.
- First line of each test case consists of one integer denoting **_N_**, where **_N_** is the size of the list given to you.
- Second line of each test case contains the list given to you containing **_N_** elements.

## Output

For each test case print the list in a single line and the elements of the list should be separated by **_space_**.

Print the answer to **_each_** test case in a **_new line_**.

## Usage
```sh
node .
```
## Example
### Input:
```
2
4
1 2 4 4
5
1 2 2 2 2
```
### Output:
```
3 2 0 0
4 0 0 0 0
```
## Explanation

The explanation for test case 1 of sample input :

The first element in the new list is 3 since the first element in the previous list was 1, and there are three elements which are strictly greater than 1, that is 2, 4 and 4.

The second element in the new list is 2 since the second element in the previous list was 2, and there are two elements which are strictly greater than 2, that is 4 and 4.

The third and fourth element in the new list is 0 since third and fourth element in the previous list was 4 and there are no elements which are strictly greater than them.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
