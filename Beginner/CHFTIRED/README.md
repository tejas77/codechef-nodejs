
# [Chef and Difficult Contests](https://www.codechef.com/problems/CHFTIRED)
Problem Code: **CHFTIRED**

Oh, these difficult contests… In each contest, there are so many hard tasks Chef cannot solve. However, he knows that he can only become a successful coder if he works hard. Fortunately, he has a problem in mind for training.

You are given two positive integers **_a_** and **_b_**. You may apply the following magical operation any number of times (including zero):

- choose an arbitrary **positive** integer **_d_**
- perform exactly one of the following actions:
 - add **_d_** to **_a_**, add **_d − 1_** to **_b_**
 - add **_d − 1_** to **_a_**, add **_d_** to **_b_**

Chef is asking you to find out if it is possible to obtain **_a = b_**. Help him!

## Input

- The first line of the input contains **_a_** single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains two space-separated integers **_a_** and **_b_**.

## Output

For each test case, print a single line containing the string "**YES**" if it is possible to obtain **_a = b_** or "**NO**" if it is impossible.

## Usage
```sh
node .
```
## Example
### Input:
```
1
5 7
```
### Output:
```
YES
```
## Explanation

**Example case 1:** One possible strategy for Chef is:

- choose **_d =_** **10**, add **_d −_** **1 = 9** to **_a_** and **_d =_** **10** to **_b_**; after this operation, **_a =_** **14** and **_b =_** **17**
- choose **_d =_** **10**, add **_d =_** **10** to **_a_** and **_d −_** **1 = 9** to **_b_**; afterwards, **_a =_** **24** and **_b =_** **26**
- choose **_d =_** **9**, add **_d =_** **9** to **_a_** and **_d −_** **1 = 8** to **_b_**; afterwards, **_a =_** **33** and **_b =_** **34**
- choose **_d =_** **9**, add **_d_** to **_a_** and **_d −_** **1** to **_b_**; finally, we have **_a = b =_** **42**

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
