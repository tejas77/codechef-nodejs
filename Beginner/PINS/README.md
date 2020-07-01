
# [Strike or Spare](https://www.codechef.com/problems/PINS)
Problem Code: **PINS**

Chef's company wants to make ATM PINs for its users, so that they could use the PINs for withdrawing their hard-earned money. One of these users is Reziba, who lives in an area where a lot of robberies take place when people try to withdraw their money.

Chef plans to include a safety feature in the PINs: if someone inputs the reverse of their own PIN in an ATM machine, the Crime Investigation Department (CID) are immediately informed and stop the robbery. However, even though this was implemented by Chef, some people could still continue to get robbed. The reason is that CID is only informed if the reverse of a PIN is different from that PIN (so that there wouldn't be false reports of robberies).

You know that a PIN consists of **_N_** decimal digits. Find the probability that Reziba could get robbed. Specifically, it can be proven that this probability can be written as a fraction **_P / Q_**, where **_P ≥ 0_** and **_Q > 0_** are coprime integers; you should compute **_P_** and **_Q_**.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single integer **_N_** denoting the length of each PIN.

## Output

For each test case, print a single line containing two space-separated integers — the numerator **_P_** and denominator **_Q_** of the probability.

## Usage
```sh
node .
```
## Example
### Input:
```
1
1
```
### Output:
```
1 1
```
## Explanation

**Example case 1:** A PIN containing only one number would fail to inform the CID, since when it's input in reverse, the ATM detects the same PIN as the correct one. Therefore, Reziba can always get robbed — the probability is **1 = 1 / 1**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
