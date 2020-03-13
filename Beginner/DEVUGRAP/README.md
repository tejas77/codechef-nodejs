
# [Devu and Grapes](https://www.codechef.com/problems/DEVUGRAP)
Problem Code: **DEVUGRAP**

Grapes of Coderpur are very famous. Devu went to the market and saw that there were **N** people selling grapes. He didn’t like it because things were not very structured. So, he gave a task to Dhinwa to make things better. If Dhinwa successfully completes the task, Devu will be happy.

Devu wants to change the number of grapes in a bucket of zero or more sellers in such a way that the [GCD](http://en.wikipedia.org/wiki/Greatest_common_divisor) of all the number of grapes is divisible by K. Dhinwa can add or remove any number of grapes from each of the buckets. Adding or removing a grape will be counted as an operation. Also after the operation, none of the seller’s bucket should be empty.

Help Dhinwa in finding the minimum number of operations needed to make Devu happy.

## Input

- First line of input contains an integer **T** denoting the number of test cases.
- For each test case, first line will contain an integer **N** denoting the number of buckets and integer **K**.
- Next line contains **N** space separated integers denoting the number of grapes in each of the bucket.

## Output

For each test case, print a single integer representing the answer of that test case.

## Usage
```sh
node .
```
## Example
### Input:
```
2
2 2
3 5
3 7
10 16 18
```
### Output:
```
2
8
```
## Explanation

For the first test case, add or remove 1 grape in each of the bucket.

For the second test case, remove three grapes in the first bucket, remove two grapes from the second bucket and add three grapes in the third bucket. 

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
