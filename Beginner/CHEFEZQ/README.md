
# [Chef and Easy Queries](https://www.codechef.com/problems/CHEFEZQ)
Problem Code: **CHEFEZQ**

Chef published a blog post, and is now receiving many queries about it. On day **_i_**, he receives **_Qi_** queries. But Chef can answer at most **_k_** queries in a single day.

Chef always answers the maximum number of questions that he can on any given day (note however that this cannot be more than **_k_**). The remaining questions (if any) will be carried over to the next day.

Fortunately, after **_n_** days, the queries have stopped. Chef would like to know the first day during which he has some free time, i.e. the first day when he answered less than **_k_** questions.

## Input

- First line will contain **_T_**, the number of testcases. Then the testcases follow.
- The first line of each testcase contains two space separated integers **_n_** and **_k_**.
- The second line of each testcase contains **_n_** space separated integers, namely **_Q1, Q2, ..., Qn_**.

## Output

For each testcase, output in a single line the first day during which chef answers less than **_k_** questions.

## Usage
```sh
node .
```
## Example
### Input:
```
2 
6 5 
10 5 5 3 2 1 
1 1
100
```
### Output:
```
6
101
```
## Explanation

**Test Case 1**

On the first day, chef answers 5 questions and leaves the remaining 5 (out of the 10) for the future days.

On the second day, chef has 10 questions waiting to be answered (5 received on the second day and 5 unanswered questions from day 1). Chef answers 5 of these questions and leaves the remaining 5 for the future.

On the third day, chef has 10 questions waiting to be answered (5 received on the third day and 5 unanswered questions from earlier). Chef answers 5 of these questions and leaves the remaining 5 for later.

On the fourth day, chef has 8 questions waiting to be answered (3 received on the fourth day and 5 unanswered questions from earlier). Chef answers 5 of these questions and leaves the remaining 3 for later.

On the fifth day, chef has 5 questions waiting to be answered (2 received on the fifth day and 3 unanswered questions from earlier). Chef answers all 5 of these questions.

On the sixth day, chef has 1 question, which he answers. This is the first day he answers less than 5 questions, and so the answer is 6.

**Test Case 2**

Chef answers 1 question a day for the first 100 days. On day 101, he is free.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
