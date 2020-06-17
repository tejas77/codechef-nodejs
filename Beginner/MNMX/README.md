
# [Minimum Maximum](https://www.codechef.com/problems/MNMX)
Problem Code: **MNMX**

Chef loves to play with arrays by himself. Today, he has an array **A** consisting of **N** distinct integers. He wants to perform the following operation on his array **A**.

- Select a pair of adjacent integers and remove the larger one of these two. This decreases the array size by 1. Cost of this operation will be equal to the smaller of them.

Find out minimum sum of costs of operations needed to convert the array into a single element.

## Input

First line of input contains a single integer **T** denoting the number of test cases. First line of each test case starts with an integer **N** denoting the size of the array **A**. Next line of input contains **N** space separated integers, where the **ith** integer denotes the value **Ai**.

## Output

For each test case, print the minimum cost required for the transformation.

## Usage
```sh
node .
```
## Example
### Input:
```
2
2
3 4
3
4 2 5
```
### Output:
```
3
4
```
## Explanation

**Test 1:** Chef will make only 1 move: pick up both the elements (that is, 3 and 4), remove the larger one (4), incurring a cost equal to the smaller one (3).

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
