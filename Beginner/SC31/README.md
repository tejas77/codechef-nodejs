
# [Weapon Value](https://www.codechef.com/problems/WALKFAST)
Problem Code: **SC31**


A competition with ***N*** participants (numbered **1** through ***N***) is taking place in Chefland. There are **_N −_** **1** rounds in the competition; in each round, two arbitrarily chosen contestants battle, one of them loses and drops out of the competition.

There are **10** types of weapons (numbered **1** through **10**). You are given **_N_** strings **_S1,S2,…,SN_**; for each valid **_i_** and **_j_**, the **_j_**-th character of **_Si_** is '1' if the **_i_**-th contestant initially has a weapon of type **_j_** or '0' otherwise. During each battle, for each type **_j_** such that both contestants in this battle currently have weapons of type **_j_**, these weapons of both contestants are destroyed; after the battle, the winner collects all remaining (not destroyed) weapons of the loser. Note that each contestant may win or lose regardless of the weapons he/she has.

Chef is feeling bored watching the contest, so he wants to find the maximum possible number of weapons the winner of the tournament could have after the last battle, regardless of which contestants fight in which battles or the results of the battles. Can you help him?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- **_N_** lines follow. For each valid **_i_**, the **_i_**-th of these lines contains a single string **_Si_**.

## Output

For each test case, print a single line containing one integer ― the maximum number of weapons the winner could have.

## Usage
```sh
node .
```
## Example
### Input:
```
1
3
1110001101
1010101011
0000000011
```
### Output:
```
4
```
## Explanation

**Example case 1:** If the first person defeats the second person, weapons **1, 3, 7** and **10** are destroyed. Then, if the third person defeats the first person (who now has weapons **2, 5, 8** and **9**), weapons **9** are destroyed and the winner has weapons **2, 5, 8** and **10**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
