
# [Check Algorithm](https://www.codechef.com/problems/CHEALG)
Problem Code: **CHEALG**

One day, Saeed was teaching a string compression algorithm. This algorithm finds all maximal substrings which contains only one character repeated one or more times (a substring is maximal if it we cannot add one character to its left or right without breaking this property) and replaces each such substring by the string "cK", where **_K_** is the length of the substring and **_c_** is the only character it contains. For example, "aabaaa" is compressed to "a2b1a3".

Saeed wanted to check if the students understood the algorithm, so he wrote a string **_S_** on the board and asked the students if the algorithm is effective on **_S_**, i.e. if the string created by compressing **_S_** is strictly shorter than **_S_**. Help them answer this question.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single string **_S_**.

## Output

For each test case, print a single line containing the string "**YES**" if the algorithm is effective on **_S_** or "**NO**" if it is not.

## Usage
```sh
node .
```
## Example
### Input:
```
3
bbbbbbbbbbaa
c
aaaaaaaaaabcdefgh
```
### Output:
```
YES
NO
NO
```
## Explanation

**Example case 1:**
- The compressed string of "bbbbbbbbbbaa" is "b10a2", which is shorter.
- The compressed string of "c" is "c1", which is not shorter than "c".
- The compressed string of "aaaaaaaaaabcdefgh" is "a10b1c1d1e1f1g1h1", which is not shorter than "aaaaaaaaaabcdefgh" (both strings have length **17**).

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
