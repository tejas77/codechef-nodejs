
# [Chef Feeds Cats](https://www.codechef.com/problems/CATFEED)
Problem Code: **CATFEED**

Chef owns **_N_** cats (numbered 1 through **_N_**) and he wants to feed them. There are **_M_** identical cans of cat food; each can must be used to feed exactly one cat and Chef can only feed one cat at a time. Chef wrote down the order in which he wants to feed the cats: a sequence **_A1, A2, …, AM_**.

An order of feeding cats is fair if there is no moment where Chef feeds a cat that has already been fed strictly more times than some other cat. Help Chef — tell him if the order in which he wants to feed the cats is fair.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains two space-separated integers **_N_** and **_M_**.
- The second line contains **_M_** space-separated integers **_A1, A2, …, AM_**.

## Output

For each test case, print a single line containing the string "**YES**" if the order is fair or "**NO**" if it is unfair.

## Usage
```sh
node .
```
## Example
### Input:
```
7
3 9
1 2 3 1 2 3 1 2 3
3 9
1 2 3 3 2 1 1 2 3
3 5
2 3 1 1 2
3 6
2 1 1 3 2 3
2 8
1 2 1 2 1 2 1 1
5 3
5 3 1
4 5
1 2 3 1 4
```
### Output:
```
YES
YES
YES
NO
NO
YES
NO
```
## Explanation

**Example case 4:** Cat **1** will eat twice before cat **3** eats even once, so the order is unfair.

**Example case 5:** The order is unfair because cat **1** will eat its fifth can before cat **2** eats its fourth can.

**Example case 7:** The order is unfair because cat **1** will eat twice before cat **4** eats even once.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
