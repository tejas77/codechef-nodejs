
# [Magician versus Chef](https://www.codechef.com/problems/MAGICHF)
Problem Code: **MAGICHF**

When Chef was visiting a fair in Byteland, he met a magician. The magician had **_N_** boxes (numbered **1** through **_N_**) and a gold coin. He challenged Chef to play a game with him; if Chef won the game, he could have the coin, but if he lost, the magician would kidnap Chef.

At the beginning of the game, the magician places the gold coin into the **_X_**-th box. Then, he performs **_S_** swaps. To win, Chef needs to correctly identify the position of the coin after all swaps.

In each swap, the magician chooses two boxes **_A_** and **_B_**, moves the contents of box **_A_** (before the swap) to box **_B_** and the contents of box **_B_** (before the swap) to box **_A_**.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains three space-separated integers **_N_**, **_X_** and **_S_**.
- **_S_** lines follow. Each of these lines contains two space-separated integers **_A_** and **_B_** denoting a pair of swapped boxes.

## Output

For each test case, print a single line containing one integer — the number of the box containing the gold coin after all swaps are performed.

## Usage
```sh
node .
```
## Example
### Input:
```
1
5 2 4
4 2
3 4
3 2
1 2
```
### Output:
```
1
```
## Explanation

**Example case 1:**
- after the first swap, the coin is in box **4**
- after the second swap, the coin is in box **3**
- after the third swap, the coin is in box **2**
- after the fourth swap, the coin is in box **1**

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
