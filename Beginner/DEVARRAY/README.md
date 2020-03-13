
# [Devu and an Array](https://www.codechef.com/problems/DEVARRAY)
Problem Code: **DEVARRAY**

Devu has an array **A** consisting of **N** positive integers. He would like to perform following operation on array.

- Pick some two elements **a**, **b** in the array (**a** could be same as **b**, but their corresponding indices in the array should not be same). Remove both the elements **a** and **b** and instead add **a** number **x** such that **x** lies between **min(a, b)** and **max(a, b)**, both inclusive, (i.e. **min(a, b) ≤ x ≤ max(a, b)**).

Now, as you know after applying the above operation **N - 1** times, Devu will end up with a single number in the array. He is wondering whether it is possible to do the operations in such a way that he ends up a number **t**.

He asks your help in answering **Q** such queries, each of them will contain an integer **t** and you have to tell whether it is possible to end up **t**.

## Input

There is only one test case per test file.

First line of the input contains two space separated integers **N**, **Q** denoting number of elements in **A** and number of queries for which Devu asks your help, respectively

Second line contains **N** space separated integers denoting the content of array **A**.

Each of the next **Q** lines, will contain a single integer **t** corresponding to the query.

## Output

Output **Q** lines, each containing "Yes" or "No" (both without quotes) corresponding to the answer of corresponding query.

## Usage
```sh
node .
```
## Example
#### Input 1:
```
1 2
1
1
2
```
#### Output:
```
Yes
No
```
#### Input 2:
```
2 4
1 3
1
2
3
4
```
#### Output:
```
Yes
Yes
Yes
No
```
## Explanation

**In the first example**, Devu can't apply any operation. So the final element in the array will be 1 itself.

**In the second example**, Devu can replace 1 and 3 with any of the numbers among 1, 2, 3. Hence final element of the array could be 1, 2 or 3.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
