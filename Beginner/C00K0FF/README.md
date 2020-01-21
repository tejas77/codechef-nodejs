
# [Chef and Cook-Off Contests](https://www.codechef.com/problems/C00K0FF)
Problem Code: **C00K0FF**

Chef wants to prepare a Cook-Off contest with 5 problems chosen from a set of **N** problems. He has marked the difficulty of each problem within a range identified by one of the following strings: "cakewalk", "simple", "easy", "easy-medium", "medium", "medium-hard", "hard". According to this page, a Cook-Off contest must have problems of the following difficulties:
- exactly one "cakewalk";
- exactly one "simple";
- exactly one "easy";
- one "easy-medium" or one "medium";
- one "medium-hard" or one "hard".

Given the information about the **N** problems, can you advise Chef if it's possible to pick 5 problems and form a valid Cook-Off contest?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **N**.
- Then **N** lines follow; the **i**-th line contains a single string **s_i**, denoting the difficulty of the **i**-th problem.

## Output

For each test case, output "Yes" if it's possible to pick 5 problems and form a valid Cook-Off contest; otherwise, output "No".

## Usage
```sh
node .
```
## Example
### Input:
```
3
5
easy
medium
medium-hard
simple
cakewalk
7
simple
simple
medium
medium
easy-medium
cakewalk
easy
7
cakewalk
simple
easy
easy-medium
medium
medium-hard
hard
```
### Output:
```
Yes
No
Yes
```
## Explanation

**Example case 2:** There are neither problems of "medium-hard" level nor "hard" level, so it's impossible to form a Cook-Off contest.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
