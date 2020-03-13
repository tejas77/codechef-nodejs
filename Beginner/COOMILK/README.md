
# [Bear and Milky Cookies](https://www.codechef.com/problems/COOMILK)
Problem Code: **COOMILK**

Limak is a little polar bear, who loves eating cookies and drinking milk. For this reason he often visits Chef's kitchen.

Limak is going to spend **N** minutes in the kitchen. Each minute he either eats a cookie or drinks milk. Cookies are very sweet and thus Limak's parents have instructed him, that after eating a cookie, he has to drink milk in the next minute.

You are given whether he ate a cookie or drank milk in each of the **N** minutes. Your task is to check if Limak followed his parents' instructions. That is, you need to verify whether after each eaten cookie he drinks milk in the next minute. Print "YES" or "NO" for each test case accordingly.

## Input

- The first line of the input contains a single integer **T** denoting the number of test cases. The description of **T** test cases follows.
- The first line of each test case contains an integer **N** denoting the number of minutes.
- The second line of a test case contains **N** space-separated strings **S**1, **S**2, ..., **S**N. The string **S**i is either "cookie" (if Limak eats a cookie in the i-th minute) or "milk" (otherwise).

## Output

For each test case, output a single line containing the answer — "YES" if Limak followed his parents' instructions, and "NO" otherwise, both without the quotes.

## Usage
```sh
node .
```
## Example
### Input:
```
4
7
cookie milk milk cookie milk cookie milk
5
cookie cookie milk milk milk
4
milk milk milk milk
1
cookie
```
### Output:
```
YES
NO
YES
NO
```
## Explanation

**Test case 1.** Limak is in the kitchen for 7 minutes. He eats three cookies and after each of them he indeed drinks milk in the next minute. The answer is "YES".

**Test case 2.** Limak is in the kitchen for 5 minutes. In the first minute he eats a cookie and in the second minute he eats a cookie again, instead of drinking milk. The answer is "NO".

**Test case 3.** Here Limak doesn't eat any cookies. The answer is "YES" because the condition is satisfied (there is no situation when Limak eats a cookie but doesn't drink milk in the next minute).

**Test case 4.** Limak eats a cookie and doesn't drink milk in the next minute so the answer is "NO".

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
