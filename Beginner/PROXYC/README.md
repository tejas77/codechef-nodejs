
# [Chef and Proxy](https://www.codechef.com/problems/PROXYC)
Problem Code: **PROXYC**

Chef is a brilliant university student that does not attend lectures because he believes that they are boring and coding is life! However, his university follows certain rules and regulations, and a student may only take an exam for a course if he has attended at least 75% of lectures for this course.

Since you are Chef's best friend, you want to help him reach the attendance he needs to take exams. Unfortunately, Chef is still focused on his code and refuses to attend more lectures, so the only option is to have some of his friends mark him as present by proxy. This trick is well-known in the university, but only few have the talent to pull it off.

In a certain course, there is exactly one lesson per day over the course of **_D_** days (numbered **1** through **_D_**). You are given a string **_S_** with length **_D_** describing the lessons Chef attended — for each valid **_i_**, the **_i_**-th character of this string is either 'A' if Chef was absent on day **_i_** or 'P' if Chef was actually present on day **_i_**.

For each day d when Chef is absent, one of Chef's friends can mark him as present by proxy on this day only if he was present (if he was really present, not just marked as present) on at least one of the previous two days, **_i_**.e. days **_d − 1_** and **_d − 2_**, and on at least one of the following two days, **_i_**.e. days **_d + 1_** and **_d + 2_**. However, it is impossible to mark him as present by proxy on the first two days and the last two days.

Find the minimum number of times Chef has to be marked as present by proxy so that his attendance becomes at least 75% (**0.75**). Chef's attendance is number of days when he was marked as present, either by proxy or by actually being present, divided by **_D_**.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_D_**.
- The second line contains a single string **_S_**
with length **_D_**.

## Output

For each test case, print a single line containing one integer — the minimum number of times Chef needs to be marked as present by proxy, or **−1** if it is impossible to make Chef achieve 75% attendance.

## Usage
```sh
node .
```
## Example
### Input:
```
1
9
PAAPPAPPP
```
### Output:
```
1
```
## Explanation

**Example case 1:** With a proxy on the third day, the attendance string is "PAPPPAPPP". Now, Chef's attendance is at least 75%, so the minimum number of times Chef needs to be marked as present by proxy is **1**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
