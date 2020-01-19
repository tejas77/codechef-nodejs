
# [Train Partner](https://www.codechef.com/problems/ANKTRAIN)
Problem Code: **ANKTRAIN**

Rahul and Rashi are off to the wedding of a close relative. This time they have to travel without their guardians. Rahul got very interested in the arrangement of seats inside the train coach.

The entire coach could be viewed as an arrangement of consecutive blocks of size 8.

**Berth Number  |  Compartment**

1 -  8        |  1

9 - 16        |  2

17 - 24       |  3

... and so on

Each of these size-8 blocks are further arranged as:

1LB,  2MB,  3UB,  4LB,  5MB,  6UB,  7SL,  8SU

9LB, 10MB, ...

...

...

Here **LB** denotes lower berth, **MB** middle berth and **UB** upper berth.

The following berths are called **Train-Partners**:

3UB   |  6UB

2MB   |  5MB

1LB   |  4LB

7SL   |  8SU

and the pattern is repeated for every set of 8 berths.

Rahul and Rashi are playing this game of finding the train partner of each berth. Can you write a program to do the same?

## Input

- The first line of input contains a single integer **_T_**, denoting the number of test cases to follow.
- Each of the next **_T_** lines contain a single integer **_N_**, the berth number whose neighbor is to be found out.

## Output

The output should contain exactly **_T_** lines each containing the berth of the neighbor of the corresponding seat.

## Usage
```sh
node .
```
## Example
### Input:
```
3
1
5
3
```
### Output:
```
4LB
2MB
6UB
```

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
