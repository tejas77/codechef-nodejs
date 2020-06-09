
# [Knight Chess](https://www.codechef.com/problems/KCHESS)
Problem Code: **KCHESS**

Abhineet the Chess master of NIT Kurukshetra got bored of 8x8 chess board and invented the new variation of Chess, the one on an infinite chess board. There is only a white king and **_N_** black knights. The white king has to avoid checkmate as long as it can.

A situation is given. Determine if white king is in checkmate or not. The white king is in checkmate if and only if it is in check and it is not able to move to any of its neighboring positions which is not in check.

## Input

- The first line will contain **_T_**, number of test cases. Then the test cases follow.
- The first line of each test case contains a single integer **_N_**.
- The next **_N_** line contains 2 space-separated integers **_X\_i_** and **_Y\_i_** denoting the position of knights.
- The next line contains 2 space-separated integers **_A_** and **_B_** denoting the position of king

## Output

Print a single line corresponding to each test case — “YES” (without quotes) – if the king is in checkmate and “NO” (without quotes) – if the king is not in checkmate.

## Usage
```sh
node .
```
## Example
### Input:
```
2
6
1 0
0 2
2 5
4 4
5 0
6 2
3 2
4
5 6
3 5
2 8
-8 -8
0 0
```
### Output:
```
YES
NO
```
## Explanation

In the first test case, the king is in cannot move to any valid position In second test case, the king can easily make a valid move.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
