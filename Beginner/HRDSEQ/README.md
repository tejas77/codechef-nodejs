
# [Hard Sequence](https://www.codechef.com/problems/HRDSEQ)
Problem Code: **HRDSEQ**

Chef decided to write an infinite sequence. Initially, he wrote **0**, and then he started repeating the following process:

- Look at the last element written so far (the **_l_**-th element if the sequence has length **_l_** so far); let's denote it by **_x_**.
- If **_x_** does not occur anywhere earlier in the sequence, the next element in the sequence is **0**.
- Otherwise, look at the previous occurrence of **_x_** in the sequence, i.e. the **_k_**-th element, where **_k < l_**, this element is equal to **_x_** and all elements between the **_k+1_**-th and **_l−1_**-th are different from **_x_**. The next element is **_l−k_**, i.e. the distance between the last two occurrences of **_x_**.

The resulting sequence is **(0, 0, 1, 0, 2, 0, 2, 2, 1, …)**: the second element is **0** since **0** occurs only once in the sequence **(0)**, the third element is **1** since the distance between the two occurrences of **0** in the sequence **(0,0)** is **1**, the fourth element is **0** since **1** occurs only once in the sequence **(0,0,1)**, and so on.

Chef has given you a task to perform. Consider the **_N_**-th element of the sequence (denoted by **_x_**) and the first **_N_** elements of the sequence. Find the number of occurrences of **_x_** among these **_N_** elements.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single integer **_N_**.

## Output

For each test case, print a single line containing one integer ― the number of occurrences of the **_N_**-th element.

## Usage
```sh
node .
```
## Example
### Input:
```
1
2
```
### Output:
```
2
```
## Explanation

**Example case 1:** The 2-nd element is 0. It occurs twice among the first two elements, since the first two elements are both 0.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
