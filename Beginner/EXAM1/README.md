
# [Multiple Choice Exam](https://www.codechef.com/problems/EXAM1)
Problem Code: **EXAM1**

Chef is taking a cooking exam. The exam consists of **_N_** multiple-choice questions numbered **1** through **_N_**. In each question, Chef may choose one out of four choices: A, B, C and D, or leave the question unanswered.

Answering a question correctly gives Chef **1** point. Not answering a question or answering it incorrectly gives him **0** points. However, there is a penalty for wrong answers. Specifically, the questions are graded one by one from question **1** to question **_N_**; for each **_i_** **(1 ≤ _i_ ≤ _N_−1)**, if Chef answered the **_i_**-th question incorrectly, his answer to the next question (the **(_i_ + 1)**-th question) is discarded without being graded. If an answer is discarded, Chef gets **0** points for it automatically, but even if it was wrong, the next answer is not discarded. There is no penalty for answering the last question incorrectly or for not answering some questions.

You are given the correct answers to all **_N_** questions and Chef's answers. Calculate the total number of points Chef scored on the exam.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains a single string **_S_** with length **_N_**. For each valid **_i_**, the **_i_**-th character of this string denotes the correct answer to the **_i_**-th question.
- The third line contains a single string **_U_** with length **_N_**. For each valid **_i_**, the **_i_**-th character of this string is 'N' if Chef did not answer the **_i_**-th question; otherwise, it denotes Chef's answer to this question.

## Output

For each test case, print a single line containing one integer — Chef's score.

## Usage
```sh
node .
```
## Example
### Input:
```
3
6
ABCDAB
ABCDAB
8
DDCABCCA
DNCBBBBA
3
CDD
NDC
```
### Output:
```
6
3
1
```
## Explanation

**Example case 1:** Chef's answers were all correct, so he got a full score.

**Example case 2:** Chef did not answer question **2** and he answered questions **4** and **6** incorrectly, which resulted in discarding answers to questions **5** and **7**. Note that even though Chef's answer to question **7** was wrong, it was discarded, so it did not result in discarding his answer to question **8**.

**Example case 3:** Chef did not answer the first question and he answered the last question incorrectly, but there is no penalty for that.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
