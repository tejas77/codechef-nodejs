
# [Minimum Deletions](https://www.codechef.com/problems/RD19)
Problem Code: **RD19**

The greatest common divisor (GCD) of a sequence is the greatest positive integer which divides each element of this sequence.

You are given a sequence **_A_** of positive integers with size **_N_**. You are allowed to delete up to **_N − 1_** elements from this sequence. (I.e., you may delete any number of elements, including zero, as long as the resulting sequence is non-empty.)

Please find the minimum number of elements which have to be deleted so that the GCD of the resulting sequence would be equal to **1**, or determine that it is impossible.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line containing one integer — the minimum number of elements to delete, or −1 if it is impossible to make the GCD equal to 1.

## Usage
```sh
node .
```
## Example
### Input:
```
2
2
2 3
2
2 4
```
### Output:
```
0
-1
```
## Explanation

**Example case 1:** The GCD is already equal to **1**, so the answer is **0**.

**Example case 2:** It is impossible to make the GCD equal to **1**, so the answer is **−1**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
