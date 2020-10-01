
# [Bear and Segment 01](https://www.codechef.com/problems/SEGM01)
Problem Code: **SEGM01**

Bear Limak has a string **S**. Each character of **S** is a digit '0' or '1'.

Help Limak and check if all the '1' digits form a single non-empty segment (consecutive subsequence) in the string. For each test case, print "YES" or "NO" accordingly.

## Input

The first line of the input contains an integer **T** denoting the number of test cases. The description of **T** test cases follows.

The only line of each test case contains one string **S**, consisting of digits '0' and '1' only.

## Output

For each test case, output a single line containing the answer — "YES" if all the '1' digits form a single non-empty segment, and "NO" otherwise. Don't print the quotes.

## Usage
```sh
node .
```
## Example
### Input:
```
6
001111110
00110011
000
1111
101010101
101111111111
```
### Output:
```
YES
NO
NO
YES
NO
NO
```
## Explanation

The answer is "YES" for strings 001111110 and 1111.

The answer is "NO" for 00110011 because the '1' digits form two disjoint segments (while they should all be consecutive, with no '0' digits between them).

The answer is "NO" for 000 because the segment formed by the '1' digits must be non-empty (as written in the statement).

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
