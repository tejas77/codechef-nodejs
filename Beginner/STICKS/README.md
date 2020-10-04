
# [Sticks](https://www.codechef.com/problems/STICKS)
Problem Code: **STICKS**

Chef and his little brother are playing with sticks. They have total **N** sticks. Length of **i**-th stick is **Ai**. Chef asks his brother to choose any four sticks and to make a rectangle with those sticks its sides. Chef warns his brother to not to break any of the sticks, he has to use sticks as a whole. Also, he wants that the rectangle formed should have the maximum possible area among all the rectangles that Chef's brother can make.

Chef's little brother takes this challenge up and overcomes it. Can you also do so? That is, you have to tell whether it is even possible to create a rectangle? If yes, then you have to tell the maximum possible area of rectangle.

## Input

- The first line contains a single integer **T** denoting the number of test-cases. **T** test cases follow.
- The first line of each test case contains a single integer **N** denoting the number of sticks.
- The second line of each test case contains **N** space-separated integers **A1, A2, ..., AN** denoting the lengths of sticks.

## Output

For each test case, output a single line containing an integer representing the maximum possible area for rectangle or -1 if it's impossible to form any rectangle using the available sticks.

## Usage
```sh
node .
```
## Example
### Input:
```
2
5
1 2 3 1 2
4
1 2 2 3
```
### Output:
```
2
-1
```
## Explanation

**Example case 1**. Chef's brother can choose sticks of lengths 1, 2, 1, 2. He can create a rectangle with area 1 * 2 = 2.

**Example case 2**. It's impossible to choose 4 sticks so that they form a rectangle.
## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
