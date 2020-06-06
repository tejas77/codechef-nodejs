
# [Appy and Contest](https://www.codechef.com/problems/HMAPPY2)
Problem Code: **HMAPPY2**

Appy and Chef are participating in a contest. There are **_N_** problems in this contest; each problem has a unique problem code between **1** and **_N_** inclusive. Appy and Chef decided to split the problems to solve between them ― Appy should solve the problems whose problem codes are divisible by **_A_** but not divisible by **_B_**, and Chef should solve the problems whose problem codes are divisible by **_B_** but not divisible by **_A_** (they decided to not solve the problems whose codes are divisible by both **_A_** and **_B_**).

To win, it is necessary to solve at least **_K_**
problems. You have to tell Appy whether they are going to win or lose.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains four space-separated integers **_N_**, **_A_**, **_B_** and **_K_**.

## Output

For each test case, print a single line containing the string "**Win**" if they can solve at least **_K_** problems or "**Lose**" otherwise (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
1
6 2 3 3
```
### Output:
```
Win
```
## Explanation

**Example case 1:**
Appy is solving the problems with codes **2** and **4**, Chef is solving the problem with code **3**. Nobody is solving problem **6**, since **6** is divisible by both **2** and **3**. Therefore, they can solve **3** problems and win.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
