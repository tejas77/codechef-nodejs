
# [CV](https://www.codechef.com/problems/CV)
Problem Code: **CV**

Chef has a string **_S_** with length **_N_**. He needs to find the number of indices **_i_** (**_1 ≤ i ≤ N − 1_**) such that the **_i_**-th character of this string is a consonant and the **_i+1_**-th character is a vowel. However, he is busy, so he asks for your help.

Note: The letters 'a', 'e', 'i', 'o', 'u' are vowels; all other lowercase English letters are consonants.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains a single string **_S_** with length **_N_**.

## Output

For each test case, print a single line containing one integer ― the number of occurrences of a vowel immediately after a consonant.

## Usage
```sh
node .
```
## Example
### Input:
```
3
6
bazeci
3
abu
1
o
```
### Output:
```
3
1
0
```
## Explanation

**Example case 1:** The vowel 'a' follows after the consonant 'b', 'e' follows after 'z' and 'i' follows after 'c', so the answer is **3**.

**Example case 2:** The only vowel 'u' follows after 'b', so the answer is **1**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
