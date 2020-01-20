
# [Byte to Bit](https://www.codechef.com/problems/BITOBYT)
Problem Code: **BITOBYT**

In the magical land of Byteland, there are three kinds of citizens:
- a Bit - **2 ms** after a Bit appears, it grows up and becomes a Nibble (i.e. it disappears and a Nibble appears)
- a Nibble - **8 ms** after a Nibble appears, it grows up and becomes a Byte
- a Byte - **16 ms** after a Byte appears, it grows up, splits into two Bits and disappears

Chef wants to know the answer to the following question: what would the population of Byteland be immediately before the time **_N ms_** if only 1 Bit appeared at time **0 ms** ?

Help him and find the population (number of citizens) of each type.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single integer **_N_**.

## Output

For each test case, print a single line containing three space-separated integers — the number of Bits, Nibbles and Bytes.

## Usage
```sh
node .
```
## Example
### Input:
```
2
2
3
```
### Output:
```
1 0 0
0 1 0
```
## Explanation

Immediately before the time **2 ms**, there is only one Bit. At **2 ms**, this Bit grows up, so immediately before **3 ms**, there is only one Nibble in Byteland.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
