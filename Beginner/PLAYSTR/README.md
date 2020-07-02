
# [Playing with Strings](https://www.codechef.com/problems/PLAYSTR)
Problem Code: **PLAYSTR**

Chef usually likes to play cricket, but now, he is bored of playing it too much, so he is trying new games with strings. Chef's friend Dustin gave him binary strings **_S_** and **_R_**, each with length **_N_**, and told him to make them identical. However, unlike Dustin, Chef does not have any superpower and Dustin lets Chef perform only operations of one type: choose any pair of integers **_(i, j)_** such that **_1 ≤ i, j ≤ N_** and swap the **_i_**-th and **_j_**-th character of **_S_**. He may perform any number of operations (including zero).

For Chef, this is much harder than cricket and he is asking for your help. Tell him whether it is possible to change the string **_S_** to the target string **_R_** only using operations of the given type.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains a binary string **_S_**.
The third line contains a binary string **_R_**.

## Output

For each test case, print a single line containing the string "**YES**" if it is possible to change **_S_** to **_R_** or "**NO**" if it is impossible (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
2
5
11000
01001
3
110
001
```
### Output:
```
YES
NO
```
## Explanation

**Example case 1:** Chef can perform one operation with **(_i, j_) = (1,5)**. Then, **_S_** will be "01001", which is equal to **_R_**.

**Example case 2:** There is no sequence of operations which would make **_S_** equal to **_R_**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
