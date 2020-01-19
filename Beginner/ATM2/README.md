
# [ATM Machine](https://www.codechef.com/problems/ATM2)
Problem Code: **ATM2**

There is an ATM machine. Initially, it contains a total of **_K_** units of money. **_N_** people (numbered **1** through **_N_**) want to withdraw money; for each valid **_i_**, the **_i_**-th person wants to withdraw **_Ai_** units of money.

The people come in and try to withdraw money one by one, in the increasing order of their indices. Whenever someone tries to withdraw money, if the machine has at least the required amount of money, it will give out the required amount. Otherwise, it will throw an error and not give out anything; in that case, this person will return home directly without trying to do anything else.

For each person, determine whether they will get the required amount of money or not.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains two space-separated integers **_N_** and **_K_**.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line containing a string with length **_N_**. For each valid i, the i-th character of this string should be '1' if the i-th person will successfully withdraw their money or '0' otherwise.

## Usage
```sh
node .
```
## Example
### Input:
```
2
5 10
3 5 3 2 1
4 6
10 8 6 4
```
### Output:
```
11010
0010
```
## Explanation

**Example case 1:** The ATM machine initially contains **10** units of money. The first person comes and withdraws **3** units, so the amount remaining in the machine is **7**. Then the second person withdraws **5** units and the remaining amount is **2**. The third person wants to withdraw **3** units, but since there are only **2** units of money in the machine, it throws an error and the third person must leave without getting anything. Then the fourth person withdraws **2** units, which leaves nothing in the machine, so the last person does not get anything.

**Example case 2:** The ATM machine initially contains **6** units of money, so it cannot give anything to the first and second person. When the third person comes, it gives them all the money it has, so the last person does not get anything either.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
