
# [Easy Math](https://www.codechef.com/problems/RPD)
Problem Code: **RPD**

Chef is attending math classes. On each day, the teacher gives him homework. Yesterday, the teacher gave Chef a sequence of positive integers and asked him to find the maximum product of two different elements of this sequence. This homework was easy for Chef, since he knew that he should select the biggest two numbers.

However, today, the homework is a little bit different. Again, Chef has a sequence of positive integers **_A1, A2, …, AN_**, but he should find two different elements of this sequence such that the sum of digits (in base **_10_**) of their product is maximum possible.

Chef thought, mistakenly, that he can still select the two largest elements and compute the sum of digits of their product. Show him that he is wrong by finding the correct answer ― the maximum possible sum of digits of a product of two different elements of the sequence **_A_**.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of the input contains a single integer **_N_**.
The second line contains **_N_** space-separated integers **_A1, A2, …, AN_**.

## Output

For each test case, print a single line containing one integer ― the maximum sum of digits.

## Usage
```sh
node .
```
## Example
### Input:
```
3
2
2 8
3
8 2 8
3
9 10 11
```
### Output:
```
7
10
18
```
## Explanation

**Example case 1:** The only two numbers Chef can choose are **2** and **8**. Their product is **16** and the sum of digits of **16** is **7**.

**Example case 2:** Chef can choose **8** and **8**; their product is **64**. Note that it is allowed to choose two different elements with the same value.

**Example case 3:** Chef can choose **9** and **11**. Their product is **99** and the sum of its digits is **18**. Note that choosing **10** and **11** will result in a larger product (**110**), but the sum of its digits is just **2**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
