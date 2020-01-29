
# [Chef and Serves](https://www.codechef.com/problems/CHSERVE)
Problem Code: **CHSERVE**

In a regular table tennis match, the player who serves changes every time after 2 points are scored, regardless of which players scored them.

Chef and Cook are playing a different match — they decided that the player who serves would change every time after **_K_** points are scored instead (again regardless of which players scored them). When the game starts, it's Chef's turn to serve.

You are given the current number of points scored by Chef and Cook (**_P1_** and **_P2_** respectively). Find out whether Chef or Cook has to serve next.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains three space-separated integers **_P1_**, **_P2_** and **_K_**.

## Output

For each test case, print a single line containing the string "**CHEF**" if it is Chef's turn or "**COOK**" if it is Cook's turn.

## Usage
```sh
node .
```
## Example
### Input:
```
3
1 3 2
0 3 2
34 55 2
```
### Output:
```
CHEF
COOK
CHEF
```
## Explanation

**Example case 1:** Chef serves for the first two points, Cook serves for the next two, so Chef has to serve again now.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
