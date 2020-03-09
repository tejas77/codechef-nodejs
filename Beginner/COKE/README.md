
# [Chef Drinks Coke](https://www.codechef.com/problems/COKE)
Problem Code: **COKE**

Chef went to the store in order to buy one can of coke. In the store, they offer **_N_** cans of coke (numbered **1** through **_N_**). For each valid **_i_**, the current temperature of the **_i_**-th can is **_Ci_** and its price is **_Pi_**.

After buying a can of coke, Chef wants to immediately start walking home; when he arrives, he wants to immediately drink the whole can. It takes Chef **_M_** minutes to get home from the store.

The ambient temperature outside is **_K_**. When a can of coke is outside, its temperature approaches the ambient temperature. Specifically, if its temperature is **_t_** at some point in time:

- if **_t_** > **_K_+1**, then one minute later, its temperature will be **_t_−1**
- if **_t_** < **_K_−1**, then one minute later, its temperature will be **_t_+1**
- if **_K_−1** ≤ **_t_** ≤ **_K_+1**, then one minute later, its temperature will be **_K_** When Chef drinks coke from a can, he wants its temperature to be between **_L_** and **_R_** (inclusive). Find the cheapest can for which this condition is satisfied or determine that there is no such can.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains five space-separated integers **_N_**, **_M_**, **_K_**, **_L_** and **_R_**.
- **_N_** lines follow. For each **_i_** (**1** ≤ **_i_** ≤ **_N_**), the **_i_**-th of these lines contains two space-separated integers **_Ci_** and **_Pi_**.

## Output

For each test case, print a single line containing one integer — the price of the can Chef should buy, or **−1** if it is impossible to buy a can such that Chef's condition is satisfied.

## Usage
```sh
node .
```
## Example
### Input:
```
2
3 2 5 4 6
1 6
2 8
8 10
3 5 10 20 30
21 20
22 22
23 23
```
### Output:
```
8
-1
```
## Explanation

**Example case 1:** Chef should buy the second can (with price **8**), even though the first can is cheaper. If Chef bought the first can, its temperature would be **3** when he got home, and that is outside the range **[4,6]**.

**Example case 2:** No matter which can Chef buys, when he gets home, its temperature will be less than **20**, so there is no suitable can available in the store.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
