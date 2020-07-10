
# [Qualifying to Pre-Elimination](https://www.codechef.com/problems/QUALPREL)
Problem Code: **QUALPREL**

Snackdown 2019 is coming! There are two rounds (round A and round B) after the qualification round. From both of them, teams can qualify to the pre-elimination round. According to the rules, in each of these two rounds, teams are sorted in descending order by their score and each team with a score greater or equal to the score of the team at the **_K_ = 1500**-th place advances to the pre-elimination round (this means it is possible to have more than **_K_** qualified teams from each round in the case of one or more ties after the **_K_**-th place).

Today, the organizers ask you to count the number of teams which would qualify for the pre-elimination round from round A for a given value of **_K_**
(possibly different from **1500**). They provided the scores of all teams to you; you should ensure that all teams scoring at least as many points as the **_K_**-th team qualify.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains two space-separated integers **_N_** and **_K_**.
- The second line contains **_N_** space-separated integers **_S1, S2, …, SN_**.

## Output

For each test case, print a single line containing one integer — the number of qualified teams.

## Usage
```sh
node .
```
## Example
### Input:
```
2
5 1
3 5 2 4 5
6 4
6 5 4 3 2 1
```
### Output:
```
2
4
```

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
