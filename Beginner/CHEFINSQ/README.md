
# [Chef and Interesting Subsequences](https://www.codechef.com/problems/CHEFINSQ)
Problem Code: **CHEFINSQ**

Chef has a sequence **_A1, A2, …, AN_**. This sequence has exactly **2^N** subsequences. Chef considers a subsequence of **_A_** interesting if its size is exactly **_K_** and the sum of all its elements is minimum possible, i.e. there is no subsequence with size **_K_** which has a smaller sum.

Help Chef find the number of interesting subsequences of the sequence **_A_**.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains two space-separated integers **_N_** and **_K_**.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line containing one integer ― the number of interesting subsequences.

## Usage
```sh
node .
```
## Example
### Input:
```
1
4 2
1 2 3 4
```
### Output:
```
1
```
## Explanation

**Example case 1:**  There are six subsequences with length **2: (1,2), (1,3), (1,4), (2,3), (2,4)** and **(3,4)**. The minimum sum is **3** and the only subsequence with this sum is **(1,2)**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
