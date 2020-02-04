
# [Fibonacci String](https://www.codechef.com/problems/CLFIBD)
Problem Code: **CLFIBD**

For a string **_S_** let the unique set of characters that occur in it one or more times be **_C_**. Consider a permutation of the elements of **_C_** as **_(c1,c2,c3...)_**. Let **_f(c)_** be the number of times **_c_** occurs in **_S_**.

If any such permutation of the elements of **_C_**
satisfies **_f(c\_i) = f(c\_i−1)+f(c\_i−2)_** for all **_i ≥ 3_**, the string is said to be a **dynamic string**.

Mr Bancroft is given the task to check if the string is dynamic, but he is busy playing with sandpaper. Would you help him in such a state?

Note that if the number of distinct characters in the string is less than 3, i.e. if **|C| < 3**, then the string is always dynamic.

## Input

- First line will contain **_T_**, number of testcases. Then the testcases follow.
- Each testcase contains of a single line of input, a string **_S_**.

## Output

For each testcase, output in a single line "**Dynamic**" if the given string is dynamic, otherwise print "**Not**". (Note that the judge is case sensitive)

## Usage
```sh
node .
```
## Example
### Input:
```
3
aaaabccc
aabbcc
ppppmmnnoooopp
```
### Output:
```
Dynamic
Not
Dynamic
```
## Explanation

- **Testase 1:** For the given string, **_C = {a,b,c}_** and **_f(a) = 4,f(b) = 1,f(c) = 3. f(a) = f(c)+f(b)_** so the permutation **_(b,c,a)_**
satisfies the requirement.
- **Testcase 2:** Here too **_C = {a,b,c}_**
but no permutation satisfies the requirement of a dynamic string.
- **Testcase 3:** Here **_C = {m,n,o,p}_**
and **_(m,n,o,p)_** is a permutation that makes it a dynamic string.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
