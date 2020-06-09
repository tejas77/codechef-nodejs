
# [Judging Delay](https://www.codechef.com/problems/JDELAY)
Problem Code: **JDELAY**

You have been recently hired as a developer in CodeChef. Your first mission is to implement a feature that will determine the number of submissions that were judged late in a contest.

There are **_N_** submissions, numbered **1** through **_N_**. For each valid **_i_**, the **_i_**-th submission was submitted at time **_S\_i_** and judged at time **_J\_i_** (in minutes). Submitting and judging both take zero time. Please determine how many submissions received their verdicts after a delay of more than **5** minutes.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of the input contains a single integer **_N_**.
- **_N_** lines follow. For each valid **_i_**, the **_i_**-th of these lines contains two space-separated integers **_S\_i_** and **_J\_i_**.

## Output

For each test case, print a single line containing one integer — the number of submissions for which the judging was delayed by more than 5 minutes.

## Usage
```sh
node .
```
## Example
### Input:
```
1
5
1 3
4 4
4 10
1 11
2 7
```
### Output:
```
2
```
## Explanation

**Example case 1:** The delays of the respective submissions are **2** minutes, **0** minutes, **6** minutes, **10** minutes and **5** minutes. Only submissions **3** and **4** are delayed by more than **5** minutes, hence the answer is **2**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
