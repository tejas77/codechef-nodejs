
# [The Deadly Sin](https://www.codechef.com/problems/SINS)
Problem Code: **SINS**

Meliodas and Ban are fighting over chocolates. Meliodas has **_X_** chocolates, while Ban has **_Y_**. Whoever has lesser number of chocolates eats as many chocolates as he has from the other's collection. This eatfest war continues till either they have the **same number of chocolates**, or atleast one of them is left with **no chocolates**.

Can you help Elizabeth predict the total no of chocolates they'll be left with at the end of their war?

## Input

- First line will contain **_T_**, number of testcases. Then the testcases follow.
- Each testcase contains of a single line of input, which contains two integers **_X_**, **_Y_**, the no of chocolates Meliodas and Ban have, respectively.

## Output

For each testcase, output in a single line the no of chocolates that remain after Ban and Meliodas stop fighting.

## Usage
```sh
node .
```
## Example
### Input:
```
3
5 3
10 10
4 8
```
### Output:
```
2
20
8
```
## Explanation

Denoting Meliodas as **_M_**, Ban as **_B_**.

Testcase 1:\
**_M_** = 5, **_B_** = 3\
Ban eates 3 chocolates of Meliodas.\
**_M_** = 2, **_B_** = 3\
Meliodas eats 2 chocolates of Ban.\
**_M_** = 2, **_B_** = 1\
Ban eates 1 chocolate of Meliodas.\
**_M_** = 1, **_B_** = 1\
Since they have the same no of candies, they stop quarreling.
Total candies left: 2

Testcase 2:\
**_M_** = 10, **_B_** = 10\
Since both of them had the same candies to begin with, there was no point in fighting.\
Total candies left: 20

Testcase 3:\
**_M_** = 4, **_B_** = 8\
Meliodas eats 4 chocolates of Ban.\
**_M_** = 4, **_B_** = 4\
Since they have the same no of candies, they stop quarreling.
Total candies left: 8

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
