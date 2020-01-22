
# [Making a Meal](https://www.codechef.com/problems/CFMM)
Problem Code: **CFMM**

Today, Chef decided to cook some delicious meals from the ingredients in his kitchen. There are **_N_** ingredients, represented by strings **_S1, S2, …, SN_**. Chef took all the ingredients, put them into a cauldron and mixed them up.

In the cauldron, the letters of the strings representing the ingredients completely mixed, so each letter appears in the cauldron as many times as it appeared in all the strings in total; now, any number of times, Chef can take one letter out of the cauldron (if this letter appears in the cauldron multiple times, it can be taken out that many times) and use it in a meal. A complete meal is the string "codechef". Help Chef find the maximum number of complete meals he can make!

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- **_N_** lines follow. For each i (**1 _≤ i ≤ N_**), the i-th of these lines contains a single string **_Si_**.

## Output

For each test case, print a single line containing one integer — the maximum number of complete meals Chef can create.

## Usage
```sh
node .
```
## Example
### Input:
```
3
6
cplusplus
oscar
deck
fee
hat
near
5
code
hacker
chef
chaby
dumbofe
5
codechef
chefcode
fehcedoc
cceeohfd
codechef
```
### Output:
```
1
2
5
```
## Explanation

**Example case 1:** After mixing, the cauldron contains the letter 'c' 3 times, the letter 'e' 4 times, and each of the letters 'o', 'd', 'h' and 'f' once. Clearly, this is only enough for one "codechef" meal.

**Example case 1:** After mixing, the cauldron contains the letter 'c' 4 times, 'o' 2 times, 'd' 2 times, 'e' 4 times, 'h' 3 times and 'f' 2 times, which is enough to make 2 meals.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
