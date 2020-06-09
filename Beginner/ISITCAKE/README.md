
# [Is it a Cakewalk Problem](https://www.codechef.com/problems/ISITCAKE)
Problem Code: **ISITCAKE**

Estimating the difficulty of cakewalk problem is a hard task. Our Chef Hasan has prepared a problem which he thinks is a cakewalk level problem. There are 100 participants in the contest. The problem indeed turned out to be easy and was solved by all the participants. However, each person might have taken a different amount of time to solve the problem. The contest's duration was 1 hour (60 minutes).

You are given an array **_times_** denote the time each person took to solve the problem. Hasan estimated that the problem should be solved within half an hour (<= 30 minutes). So, he will consider the problem to be a cakewalk if there are at least 60 users who solved the problem within 30 minutes (including 30).

The participants of the contest were arranged in a grid of size 10 * 10, and the input is given according to this. You can see the input section to know more about how to read the time taken by each user.

Tell whether the problem is indeed a cakewalk or not.

## Input

- The first line of the input contains a single integer **_T_**, which denotes the number of test cases.
- Each test case consists of 10 lines. Each of the next 10 lines contain 10 space-separated integers denoting the **_times_** taken by the people in that corresponding row.

## Output

For each test case output either "yes" or "no", in a new line, corresponding to whether it was a cakewalk problem or not.

## Usage
```sh
node .
```
## Example
### Input:
```
2
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 31
31 32 33 34 35 36 37 38 39 40
```
### Output:
```
yes
no
```
## Explanation

**Testcase 1:** The problem was too easy, it was solved by everyone in the first minute itself. This is a cakewalk problem.

**Testcase 2:** 59 people solved it under 30 minutes. We should have at least 60 people to solve the problem under 30 minutes. This problem is not a cakewalk problem.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
