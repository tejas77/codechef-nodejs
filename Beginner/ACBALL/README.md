
# [Akhil And Colored Balls](https://www.codechef.com/problems/ACBALL)
Problem Code: **ACBALL**

Akhil has many balls of white and black colors. One day, he was playing with them. During the play, he arranged the balls into two rows both consisting of **_N_** number of balls. These two rows of balls are given to you in the form of strings **_X_**, **_Y_**. Both these string consist of 'W' and 'B', where 'W' denotes a white colored ball and 'B' a black colored.

Other than these two rows of balls, Akhil has an infinite supply of extra balls of each color. he wants to create another row of **_N_** balls, **_Z_** in such a way that the sum of hamming distance between **_X_** and **_Z_**, and hamming distance between **_Y_** and **_Z_** is maximized.

[Hamming Distance](https://en.wikipedia.org/wiki/Hamming_distance) between two strings **_X_** and **_Y_** is defined as the number of positions where the color of balls in row **_X_** differs from the row **_Y_** ball at that position. e.g. hamming distance between "WBB", "BWB" is 2, as at position 1 and 2, corresponding colors in the two strings differ.

As there can be multiple such arrangements of row **_Z_**, Akhil wants you to find the lexicographically smallest arrangement which will maximize the above value.

## Input

- The first line of the input contains an integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows:
- First line of each test case will contain a string **_X_** denoting the arrangement of balls in first row.
- Second line will contain the string **_Y_** denoting the arrangement of balls in second row.

## Output

For each test case, output a single line containing the string of length **_N_** denoting the arrangement of colors of the balls belonging to row **_Z_**.

## Usage
```sh
node .
```
## Example
### Input:
```
1
WBWB
WBBB
```
### Output:
```
BWBW
```
## Explanation

**Example case 1:** As we know, Hamming Distance (WBWB, BWBW) + Hamming Distance (WBBB, BWBW) = 4 + 3 = 7.
You can try any other value for string **_Z_**, it will never exceed 6.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
