
# [Digit Longest Increasing Subsequences 2](https://www.codechef.com/problems/LISDIGIT)
Problem Code: **LISDIGIT**

Recently Chef learned about [Longest Increasing Subsequence](https://en.wikipedia.org/wiki/Longest_increasing_subsequence). To be precise, he means longest **strictly** increasing subsequence, when he talks of longest increasing subsequence. To check his understanding, he took his favorite **n**-digit number and for each of its **n** digits, he computed the length of the longest increasing subsequence of digits ending with that digit. Then he stored these lengths in an array named **LIS**.

For example, let us say that Chef's favourite **4**-digit number is **1531**, then the **LIS** array would be **[1, 2, 2, 1]**. The length of longest increasing subsequence ending at first digit is **1** (the digit **1** itself) and at the second digit is **2** (**[1, 5]**), at third digit is also **2** (**[1, 3]**), and at the **4**th digit is **1** (the digit **1** itself).

Now Chef wants to give you a challenge. He has a valid **LIS** array with him, and wants you to find any **n**-digit number having exactly the same **LIS** array? You are guaranteed that Chef's **LIS** array is valid, i.e. there exists at least one **n**-digit number corresponding to the given **LIS** array.

## Input

The first line of the input contains an integer **T** denoting the number of test cases.

For each test case, the first line contains an integer **n** denoting the number of digits in Chef's favourite number.

The second line will contain **n** space separated integers denoting **LIS** array, i.e. **LIS1, LIS2, ..., LISn**.

## Output

For each test case, output a single **n**-digit number (without leading zeroes) having exactly the given **LIS** array. If there are multiple **n**-digit numbers satisfying this requirement, any of them will be accepted.

## Usage
```sh
node .
```
## Example
### Input:
```
5
1
1
2
1 2
2
1 1
4
1 2 2 1
7
1 2 2 1 3 2 4
```
### Output:
```
7
36
54
1531
1730418
```
## Explanation

**Example case 1:** All one-digit numbers have the same **LIS** array, so any answer from **0** to **9** will be accepted.

**Example case 2 & 3:** For a two digit number we always have **LIS1 = 1**, but the value of **LIS2** depends on whether the first digit is strictly less than the second one. If this is the case (like for number **36**), **LIS2 = 2**, otherwise (like for numbers **54** or **77**) the values of **LIS2** is **1**.

**Example case 4:** This has already been explained in the problem statement.

**Example case 5:** 7-digit number **1730418** has **LIS** array **[1, 2, 2, 1, 3, 2, 4]**:

index    LIS    length\
 1     **1**730418    1\
 2     **17**30418    2\
 3     **1**7**3**0418    2\
 4     173**0**418    1\
 5     **1**7**3**0**4**18    3\
 6     173**0**4**1**8    2\
 7     **1**7**3**0**4**1**8**    4


## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
