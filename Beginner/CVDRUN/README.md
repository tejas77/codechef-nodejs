# [Covid Run](https://www.codechef.com/problems/CVDRUN)
Problem Code: **CVDRUN**

**Covid-19** is spreading fast! There are **_N_** cities, numbered from **0** to **_(N−1)_**, arranged in a circular manner. City **0** is connected to city **1**, **1** to **2**, …, city **_(N−2)_** to city **_(N−1)_**, and city **_(N−1)_** to city **0**.

The virus is currently at city **_X_**. Each day, it jumps from its current city, to the city **_K_** to its right, i.e., from city **_X_** to the city **_(X + K) % N_**. As the virus jumps, the cities in between don't get infected. Cities once infected stay infected. You live in city **_Y_**. **Find if it will reach your city eventually**. If it will, print **YES**, else print **NO**.

## Input

- The first line of the input consists of an integer **_T_**, the number of test cases.
- The first and only line of each test case contains four space-separated integers - **_N_**, **_K_**, **_X_** and **_Y_**, denoting the number of cities, the size of jumps, Covid's current city, and the city that you live in, respectively.

## Output

For each test case, in a new line, print **YES** if Covid shall reach your city after a finite number of days, else print **NO**.

## Usage
```sh
node .
```
## Example
### Input:
```
2
6 2 5 3
12 3 4 2
```
### Output:
```
YES
NO
```
## Explanation

- In the **first sample**, Covid starts at city **5**, then goes to city **1**, and then from city **1** to city **3**. Thus, it reaches the city that you live in.

- In the **second sample**, Covid starts at city **4**, goes to city **7**, then **10**, **1**, then **4**, **7**, **10**, …, and so on. It never reaches city **2**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
