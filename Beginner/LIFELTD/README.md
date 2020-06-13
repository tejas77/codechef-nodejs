
# [Life Limited](https://www.codechef.com/problems/LIFELTD)
Problem Code: **LIFELTD**

Recently the company Life Ltd created a new logo for themselves. You are asked to test the design of the logo.

The logo is a 3 * 3 square grid with 9 cells. Each cell contains some lower case english letter. This logo will be considered good if there exist three cells in the shape of an L that contain the letter 'l' (lower case 'L') in each of them. That is, there should be a cell with 'l', its cell directly beneath it should also have 'l' and the cell to the right of the second cell should also have 'l'.

Your task is to tell whether the logo is good or not.

## Input

- The first line of the input contains an integer **_T_** denoting the number of test cases. The description of the test cases follows.
- Each of the next three lines contains a description of the logo, i-th of the line contains three characters which denote the i-th row of the logo.

## Output

For each test case, output yes or no according to the answer to the problem.

## Usage
```sh
node .
```
## Example
### Input:
```
3
laz
lla
aaa
ala
lla
aaa
lll
lll
lll
```
### Output:
```
yes
no
yes
```
## Explanation

**Example case 1:** The L shaped cells with 'l' in each of them is shown in bold here:

**l**aa

**ll**a

aaa

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
