
# [Chef and Mean](https://www.codechef.com/problems/CHFM)
Problem Code: **CHFM**

Chef has invested his savings into **_N_** coins (numbered **1** through **_N_**). For each valid **_i_**, the **_i_**-th coin has value **_Ai_**. Chef does not want to know how much money he has, so he remembers the mean value of the coins instead of the sum of their values.

A waiter from Chef's restaurant plans to steal exactly one of Chef's coins, but he does not want Chef to know about this, so he can only steal a coin if the arithmetic mean of all remaining coins is the same as the original arithmetic mean of all coins. Since the waiter is not good at mathematics, can you help him complete his plan?

You have to determine whether it is possible to steal some coin and if it is possible, choose the coin the waiter should steal. If there are multiple coins that can be stolen, choose the one with the smallest number.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer N.
- The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line. If the waiter cannot steal any coin, this line should contain the string "**Impossible**" (without quotes). Otherwise, it should contain the number of the coin he should steal.

## Usage
```sh
node .
```
## Example
### Input:
```
3
5
1 2 3 4 5
4
5 4 3 6
10
1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000 1000000000
```
### Output:
```
3
Impossible
1
```
## Explanation

**Example case 1:** Stealing the third coin does not change the mean. Initially, it is **(1 + 2 + 3 + 4 + 5)/5 = 3** and after stealing this coin, it is still **(1 + 2 + 4 + 5)/4 = 3**.

**Example case 2:** It is not possible to steal any coin without changing the mean.

**Example case 3:** The mean is always **10^9**, both initially and after removing any coin, so each coin can be stolen. In that case, we should choose the first coin.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
