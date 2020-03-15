
# [Event](https://www.codechef.com/problems/EVENT)
Problem Code: **EVENT**

Chef is a very experienced and well-known cook. He has participated in many cooking competitions in the past — so many that he does not even remember them all.

One of these competitions lasted for a certain number of days. The first day of the competition was day **_S_** of the week (i.e. Monday, Tuesday etc.) and the last day was day **_E_** of the week. Chef remembers that the duration of the competition (the number of days between the first and last day, inclusive) was between **_L_** days and **_R_** days inclusive. Is it possible to uniquely determine the exact duration of the competition? If so, what is this duration?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains two space-separated strings **_S_** and **_E_**, followed by a space and two space-separated integers **_L_** and **_R_**.

## Output

For each test case, print a single line containing:

- the string **"impossible"** if there is no duration consistent with all given information
- the string **"many"** if there is more than one possible duration
- one integer — the duration of the competition, if its duration is unique

## Usage
```sh
node .
```
## Example
### Input:
```
3
saturday sunday 2 4
monday wednesday 1 20
saturday sunday 3 5
```
### Output:
```
2
many
impossible
```

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
