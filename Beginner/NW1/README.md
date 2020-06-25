
# [Days in Month](https://www.codechef.com/problems/NW1)
Problem Code: **NW1**

RJ is a very curious observer. On the first day of every month, he tries to figure out, for each of the seven days of the week, how many times that day occurs in the current month.

RJ got confused so badly doing this that he asks for your help! He asks several queries; in each query, he gives you the number of days in the current month and which day of the week is on the 1st of the current month.

For each query, you should tell him how many times each day of the week occurs.

## Input

- The first line of the input contains a single integer **T** denoting the number of test cases. The description of **T** test cases follows.
- The first and only line of each test case contains an integer **W** and a string **S**, separated by a space.
- **W** denotes the number of days in the current month.
- **S** is one of the strings "mon", "tues", "wed", "thurs", "fri", "sat" or "sun", denoting the day of the week on the 1st of the current month.

## Output

For each query, print seven space-separated integers denoting the number of occurrences of Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and Sunday.

## Usage
```sh
node .
```
## Example
### Input:
```
2
28 mon
31 wed
```
### Output:
```
4 4 4 4 4 4 4
4 4 5 5 5 4 4
```
## Explanation

**Example case 2:** There are 4 Mondays, 4 Tuesdays, 5 Wednesdays, 5 Thursdays, 5 Fridays, 4 Saturdays and 4 Sundays.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
