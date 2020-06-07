
# [Khaled in HIT](https://www.codechef.com/problems/HIT)
Problem Code: **HIT**

Coach Khaled is a swag teacher in HIT (Hag Institute of Technology). However, he has some obsession problems.

Recently, coach Khaled was teaching a course in building 8G networks using TV antennas and programming them with assembly. There are **_N_**
students (numbered **1** through **_N_**) in his class; for some reason, this number is always a multiple of **4**. The final exam has finished and Khaled has all the scores of his **_N_** students. For each valid **_i_**, the score of the **_i_**-th student is **_A\_i_**; each score is an integer between **0** and **100**. Currently, the score-grade distribution is as follows:
- grade D for score smaller than **60**
- grade C for score greater or equal to **60**
, but smaller than **75**
- grade B for score greater or equal to **75**
, but smaller than **90**
- grade A for score greater or equal to **90**

However, coach Khaled is not satisfied with this. He wants exactly **_N_ / 4** students to receive each grade (A, B, C and D), so that the grades are perfectly balanced. The scores cannot be changed, but the boundaries between grades can. Therefore, he wants to choose three integers **x, y** and **z** and change the grade distribution to the following (note that initially, **x = 60, y = 75** and **z = 90**):
- grade D for score smaller than **x**
- grade C for score greater or equal to **x**, but smaller than **y**
- grade B for score greater or equal to **y**, but smaller than **z**
- grade A for score greater or equal to **z**

Your task is to find thresholds **x, y** and **z** that result in a perfect balance of grades. If there are multiple solutions, choose the one with the maximum value of **x + y + z** (because coach Khaled wants seem smarter than his students); it can be proved that there is at most one such solution. Sometimes, there is no way to choose the thresholds and coach Khaled would resign because his exam questions were low-quality.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_**
space-separated integers **_A\_1_**, **_A\_2_**, …, **_A\_N_**.

## Output

For each test case, if there is no solution, print a single line containing the integer **−1**; otherwise, print a single line containing three space-separated integers **x, y** and **z**.

## Usage
```sh
node .
```
## Example
### Input:
```
6
4
90 25 60 75
8
27 29 92 92 67 67 85 92
4
0 1 2 3
4
100 100 100 100
4
30 30 40 50
4
30 40 40 50
```
### Output:
```
60 75 90
-1
1 2 3
-1
-1
-1
```
## Explanation

**Example case 1:** The default distribution is the correct one.

**Example case 4:** All students have the same score and grade, so there is no way to choose the thresholds and coach Khaled must resign.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
