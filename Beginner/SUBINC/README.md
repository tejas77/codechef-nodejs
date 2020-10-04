
# [Count Subarrays](https://www.codechef.com/problems/SUBINC)
Problem Code: **SUBINC**

Given an array **_A1,A2,...,AN_**, count the number of subarrays of array **_A_** which are non-decreasing.
A subarray **_A[i,j]_**, where **_1 ≤ i ≤ j ≤ N_** is a sequence of integers **_Ai,Ai+1,...,Aj_**.

A subarray **_A[i,j]_** is non-decreasing if **_Ai ≤ Ai+1 ≤ Ai+2 ≤ ...≤Aj_**. You have to count the total number of such subarrays.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_** denoting the size of array.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_** denoting the elements of the array.

## Output

For each test case, output in a single line the required answer.

## Usage
```sh
node .
```
## Example
### Input:
```
2
4
1 4 2 3
1
5
```
### Output:
```
6
1
```
## Explanation

**Example case 1.**\
All valid subarrays are **_A[1,1],A[1,2],A[2,2],A[3,3],A[3,4],A[4,4]_**.\
Note that singleton subarrays are identically non-decreasing.

**Example case 2.**\
Only single subarray **_A[1,1]_** is non-decreasing.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
