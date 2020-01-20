
# [Average Number](https://www.codechef.com/problems/AVG)
Problem Code: **AVG**

Chef had a sequence of positive integers with length **_N+K_**. He managed to calculate the arithmetic average of all elements of this sequence (let's denote it by **_V_**), but then, his little brother deleted **_K_** elements from it. All deleted elements had the same value.

Chef still knows the remaining **_N_**
elements — a sequence **_A1, A2, …, AN_**. Help him with restoring the original sequence by finding the value of the deleted elements or deciding that there is some mistake and the described scenario is impossible.

Note that the if it is possible for the deleted elements to have the same value, then it can be proven that it is unique. Also note that this value must be a positive integer.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains three space-separated integers **_N_**, **_K_** and **_V_**.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line containing one integer — the value of the deleted elements, or **−1** if there is a mistake.

## Usage
```sh
node .
```
## Example
### Input:
```
3
3 3 4
2 7 3
3 1 4
7 6 5
3 3 4
2 8 3
```
### Output:
```
4
-1
-1
```
## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
