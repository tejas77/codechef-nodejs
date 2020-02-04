
# [Compress the List](https://www.codechef.com/problems/CMPRSS)
Problem Code: **CMPRSS**

You are given a strictly increasing sequence of integers **_A1,A2,…,AN_**. Your task is to compress this sequence.

The compressed form of this sequence is a sequence of ranges separated by commas (characters ','). A range is either an integer or a pair of integers separated by three dots (the string "**...**"). When each range **a...b** in the compressed form is decompressed into the subsequence **_(a,a+1,…,b)_**, we should obtain the (comma-separated) sequence **_A_** again.

For each maximal contiguous subsequence **_(a,a+1,…,b)_** of **_A_** such that **_b ≥ a+2_**, the compressed form of **_A_** must contain the range **a...b**; if **_b ≤ a+1_**, such a sequence should not be compressed into a range. A contiguous subsequence is maximal if it cannot be extended by at least one element of **_A_** next to it. It can be proved that the compressed form of any sequence is unique (i.e. well-defined).

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_** space-separated integers **_A1,A2,…,AN_**.

## Output

For each test case, print a single line containing one string ― the compressed form of the given sequence.

## Usage
```sh
node .
```
## Example
### Input:
```
3
12
1 2 3 5 6 8 9 10 11 12 15 17
4
4 5 7 8
1
4
```
### Output:
```
1...3,5,6,8...12,15,17
4,5,7,8
4
```
## Explanation

**Example case 1:**
- **(1,2,3)** is a contiguous subsequence with length **3**, so it is replaced by the string "**1...3**"
- **(5,6)** is a contiguous subsequence, but only with length **2**, so it is not compressed into a range
- **(8,9,10,11,12)** is a contiguous subsequence with length **5**, so it is replaced by "**8...12**"
- the elements **15, 17** are unaffected

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
