
# [Kitchen Timetable](https://www.codechef.com/problems/KTTABLE)
Problem Code: **KTTABLE**

There are **N** students living in the dormitory of Berland State University. Each of them sometimes wants to use the kitchen, so the head of the dormitory came up with a timetable for kitchen's usage in order to avoid the conflicts:

- The first student starts to use the kitchen at the time **0** and should finish the cooking not later than at the time **A_1**.
- The second student starts to use the kitchen at the time **A_1** and should finish the cooking not later than at the time **A_2**.
- And so on.
- The **N**-th student starts to use the kitchen at the time **A_N-1** and should finish the cooking not later than at the time **A_N**

The holidays in Berland are approaching, so today each of these **N** students wants to cook some pancakes. The **i**-th student needs **B_i** units of time to cook.

The students have understood that probably not all of them will be able to cook everything they want. How many students will be able to cook without violating the schedule?

## Input

The first line of the input contains a single integer **T** denoting the number of test cases. The description of **T** test cases follows.

The first line of each test case contains a single integer **N** denoting the number of students.

The second line contains **N** space-separated integers **A_1, A_2, ..., A_N** denoting the moments of time by when the corresponding student should finish cooking.

The third line contains **N** space-separated integers **B_1, B_2, ..., B_N** denoting the time required for each of the students to cook.

## Output

For each test case, output a single line containing the number of students that will be able to finish the cooking.

## Usage
```sh
node .
```
## Example
### Input:
```
2
3
1 10 15
1 10 3
3
10 20 30
15 5 20
```
### Output:
```
2
1
```
## Explanation

**Example case 1:** The first student has **1** unit of time - the moment **0**. It will be enough for her to cook. The second student has **9** units of time, but wants to cook for **10** units of time, and won't fit in time. The third student has **5** units of time and will fit in time, because needs to cook only for **3** units of time.

**Example case 2:** Each of students has **10** units of time, but only the second one will be able to fit in time.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
