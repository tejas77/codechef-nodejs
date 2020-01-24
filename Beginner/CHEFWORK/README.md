
# [Workers](https://www.codechef.com/problems/CHEFWORK)
Problem Code: **CHEFWORK**

There are **_N_** workers; each worker is of one of the following three types:
- A translator translates some text from Chef's language to another langague.
- An author writes some text in Chef's language.
- An author-translator can both write a text in Chef's language and translate it to another language.

Chef wants to have some text written and translated into some language (different from Chef's language). Chef can't do either of those tasks, but he can hire workers. For each **_i (1≤i≤N)_**, if he hires the **_i_**-th worker, he must pay that worker **_c\_i_** coins.

Help Chef find the minimum total number of coins he needs to pay to have a text written and translated. It is guaranteed that it is possible to write and translate a text.

## Input

- The first line of the input contains a single integer **_N_** denoting the number of workers.
- The second line contins **_N_** space-separated integers **_c1,c2,...,cN_** denoting the numbers of coins Chef has to pay each hired worker.
- The third line contains **_N_** space-separated integers **_t1,t2,...,tN_** denoting the types of workers. For each valid **_i_**, the **_i_**-th worker is a translator if **_ti = 1_**, an author if **_ti = 2_** or an author-translator if **_ti = 3_**.

## Output

Print a single line containing one integer — the minimum number of coins Chef has to pay.

## Usage
```sh
node .
```
## Example
### Input:
```
5
1 3 4 6 8
1 2 1 2 3
```
### Output:
```
4
```
## Explanation

Chef can hire 2 workers: worker 1, who is a translator, and worker 2, who is an author. In total, he pays them **1 + 3 = 4** coins.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
