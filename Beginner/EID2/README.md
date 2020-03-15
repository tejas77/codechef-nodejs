
# [Eidi Gift](https://www.codechef.com/problems/EID2)
Problem Code: **EID2**

Eidi gifts are a tradition in which children receive money from elder relatives during the Eid celebration.

Chef has three children (numbered **1, 2, 3**) and he wants to give them Eidi gifts. The oldest child, Chefu, thinks that a distribution of money is fair only if an older child always receives more money than a younger child; if two children have the same age, they should receive the same amounts of money.

For each valid **_i_**, the **_i_**-th child is **_Ai_** years old and it received **_Ci_** units of money. Determine whether this distribution of money is fair.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains six space-separated integers **_A1_**, **_A2_**, **_A3_**, **_C1_**, **_C2_** and **_C3_**.

## Output

For each test case, print a single line containing the string **"FAIR"** if the distribution is fair or **"NOT FAIR"** otherwise.

## Usage
```sh
node .
```
## Example
### Input:
```
5
5 7 10 10 20 50
5 5 5 20 10 20
10 1 17 5 10 15
3 6 3 8 10 9
8 5 5 50 10 10
```
### Output:
```
FAIR
NOT FAIR
NOT FAIR
NOT FAIR
FAIR
```
## Explanation

**Example case 2:** All children have same age which is 5, but second child got less money than the other children, so it's not fair.

**Example case 3:** First child is older than second child but he got less money than him, so it's not fair.

**Example case 4:** First and third children have same age, but didn't get same amount of money, so it's not fair.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
