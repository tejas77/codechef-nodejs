
# [Chef and Eid](https://www.codechef.com/problems/EID)
Problem Code: **EID**

During Eid, it's a tradition that each father gives his kids money which they can spend on entertainment.

Chef has **_N_** coins; let's denote the value of coin **_i_** by **_vi_**. Since today is Eid, Chef is going to give one coin to each of his two children. He wants the absolute value of the difference between the values of coins given to the two children to be as small as possible, so that he would be as fair as possible.

Help Chef by telling him the minimum possible difference between the values of the coins given to the two children. Of course, Chef cannot give the same coin to both children.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_** space-separated integers **_v1, v2, …, vN_**.

## Output

For each test case, print a single line containing one integer — the minimum possible difference.

## Usage
```sh
node .
```
## Example
### Input:
```
2
3
1 4 2
3
1 3 3
```
### Output:
```
1
0
```
## Explanation

**Example case 1:** Chef gives the coin with value **1** to his first child and the coin with value **2** to the second child, so the answer is **2 − 1 = 1**.

**Example case 2:** Chef gives each of his children a coin with value **3**, so the difference is **0**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
