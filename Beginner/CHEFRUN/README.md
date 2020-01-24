
# [Secret Recipe](https://www.codechef.com/problems/CHEFRUN)
Problem Code: **CHEFRUN**

Chef and his competitor Kefa own two restaurants located at a straight road. The position of Chef's restaurant is **_X1_**, the position of Kefa's restaurant is **_X2_**.

Chef and Kefa found out at the same time that a bottle with a secret recipe is located on the road between their restaurants. The position of the bottle is **_X3_**.

The cooks immediately started to run to the bottle. Chef runs with speed **_V1_**, Kefa with speed **_V2_**.

Your task is to figure out who reaches the bottle first and gets the secret recipe (of course, it is possible that both cooks reach the bottle at the same time).

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains five space-separated integers **_X1_**, **_X2_**, **_X3_**, **_V1_** and **_V2_**.

## Output

For each test case, print a single line containing the string "**Chef**" if Chef reaches the bottle first, "**Kefa**" if Kefa reaches the bottle first or "**Draw**" if Chef and Kefa reach the bottle at the same time (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
3
1 3 2 1 2
1 5 2 1 2
1 5 3 2 2
```
### Output:
```
Kefa
Chef
Draw
```
## Explanation

**Example case 1.** Chef and Kefa are on the same distance from the bottle, but Kefa has speed **2**, while Chef has speed **1**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
