
# [Chef and Chocolate](https://www.codechef.com/problems/CHCHCL)
Problem Code: **CHCHCL**

Chef has a standard chocolate of **n** by **m** pieces. More formally, chocolate is a rectangular plate consisting of **n** rows and **m** columns.

Here you can see an example of a standard 5 by 7 chocolate.

![](https://s3.amazonaws.com/codechef_shared/download/upload/AUG16/choco.jpg)

He has two friends and they will play with this chocolate. First friend takes the chocolate and cuts it into two parts by making either a horizontal or vertical cut. Then, the second friend takes one of the available pieces and divides into two parts by either making a horizontal or vertical cut. Then the turn of first friend comes and he can pick any block of the available chocolates and do the same thing again. The player who cannot make a turn loses.

Now Chef is interested in finding which of his friends will win if both of them play optimally. Output "Yes", if the friend who plays first will win, otherwise print "No".

## Input

- The first line of the input contains a single integer **T** denoting the number of test cases. The description of **T** test cases follows.
- The only line of each test case contains two space separated integers **n** and **m** - the sizes of the chocolate.

## Output

For each test case, output a single line containing one word "Yes" (without quotes) if there is a sequence of moves leading to the winning of the person who moves first and "No" (without quotes) otherwise.

## Usage
```sh
node .
```
## Example
### Input:
```
2
1 2
1 3
```
### Output:
```
Yes
No
```
## Explanation

**Example case 1:** There is only one possible move, so the second player even won't have a chance to make move.

**Example case 2.** There are only two ways first player can make first move, after each of them only one move left, so the first player cannot win.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
