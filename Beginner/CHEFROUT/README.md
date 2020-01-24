
# [Chef and his daily routine](https://www.codechef.com/problems/CHEFROUT)
Problem Code: **CHEFROUT**

Chef's daily routine is very simple. He starts his day with cooking food, then he eats the food and finally proceeds for sleeping thus ending his day. Chef carries a robot as his personal assistant whose job is to log the activities of Chef at various instants during the day. **Today** it recorded activities that Chef was doing at N different instants. These instances are recorded in chronological order (in increasing order of time). This log is provided to you in form of a string **s** of length N, consisting of characters 'C', 'E' and 'S'. If **s**[i] = 'C', then it means that at the i-th instant Chef was cooking, 'E' denoting he was eating and 'S' means he was sleeping.

You have to tell whether the record log made by the robot could possibly be correct or not.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The only line of each test case contains string **s**.

## Output

For each test case, output a single line containing "yes" or "no" (without quotes) accordingly.

## Usage
```sh
node .
```
## Example
### Input:
```
5
CES
CS
CCC
SC
ECCC
```
### Output:
```
yes
yes
yes
no
no
```
## Explanation

**Example case 1.** "CES" can correspond to a possible record of activities of Chef. He starts the day with cooking, then eating and then sleeping.

**Example case 2.** "CS" can also correspond to a possible record of activities of Chef. He starts the day with cooking, then eating and then sleeping. Robot recorded his cooking and sleeping in order. He might not have recorded his eating activity.

**Example case 4.** "SC" can not correspond to Chef's activities. Here it means that Chef slept first, then he cooked the food, which is impossible for Chef to do on some particular day.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
