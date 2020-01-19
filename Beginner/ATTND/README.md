
# [Attendance](https://www.codechef.com/problems/ATTND)
Problem Code: **ATTND**

Chef is teaching a cooking course. There are **_N_** students attending the course, numbered **1** through **_N_**.

Before each lesson, Chef has to take attendance, i.e. call out the names of students one by one and mark which students are present. Each student has a first name and a last name. In order to save time, Chef wants to call out only the first names of students. However, whenever there are multiple students with the same first name, Chef has to call out the full names (both first and last names) of all these students. For each student that does not share the first name with any other student, Chef may still call out only this student's first name.

Help Chef decide, for each student, whether he will call out this student's full name or only the first name.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- **_N_** lines follow. For each valid **_i_**, the **_i_**-th of the following **_N_** lines contains two space-separated strings denoting the first and last name of student **_i_**.

## Output

For each test case, print **_N_** lines. For each valid **_i_**, the **_i_**-th of these lines should describe how Chef calls out the **_i_**-th student's name ― it should contain either the first name or the first and last name separated by a space.

## Usage
```sh
node .
```
## Example
### Input:
```
1
4
hasan jaddouh
farhod khakimiyon
kerim kochekov
hasan khateeb
```
### Output:
```
hasan jaddouh
farhod
kerim
hasan khateeb
```
## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
