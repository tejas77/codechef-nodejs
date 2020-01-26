
# [Chef and Number Game](https://www.codechef.com/problems/CHNUM)
Problem Code: **CHNUM**

Recently, Chef hosted a strange competition at the Byteland annual fair. There were **_N_** participants in the competition (numbered **1** through **_N_**); at the end of the competition, their scores were **_A1, A2, …, AN_**. Since it was a strange competition, negative scores were allowed too.

The total score of the competition is calculated as follows:

- Divide the participants into one or more non-empty groups (subsets); if there are **_K_** groups, let's denote them by **_G1, G2, …, GK_**. Each participant should be a member of exactly one group.
- Sum up the scores of participants in each individual group. For each valid **_i_**, let's denote the sum of scores of participants in group **_i_** by **_Xi_**.
- The total score of the competition is the sum of squares of these summed up scores, i.e. **_(X1)^2 + (X2)^2 + … + (XK)^2_**.

Chef wants to choose the groups in such a way that the total score is maximum possible. Since there may be many ways to form the groups that lead to the maximum total score, Chef wants to know just the size of the largest group and the size of the smallest group which could be formed while still maximising the total score. These sizes are independent - formally, they are the maximum and minimum size **_s_** of a group such that there is a way to form groups which maximises the total score and contains a group with size **_s_**.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line containing two space-separated integers - the size of the largest possible group and the size of the smallest possible group.

## Usage
```sh
node .
```
## Example
### Input:
```
1
5
5 2 4 6 7
```
### Output:
```
5 5
```
## Explanation

**Example case 1:** To maximise the total score, everyone has to belong to the same group with scores **[5,2,4,6,7]**. For this group, **X = 5 + 2 + 4 + 6 + 7 = 24** and the total score is **24^2 = 576**. The size of the largest possible group, as well as the size of the smallest possible group, is **5**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
