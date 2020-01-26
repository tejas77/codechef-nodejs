
# [Chef and An Ideal Problem](https://www.codechef.com/problems/CHFIDEAL)
Problem Code: **CHFIDEAL**

"An ideal problem has no test data." - aryanc403

**This is an interactive problem.**

Chef likes probability puzzles a lot, almost as much as interactive problems. Today, he learned about the [Monty Hall Paradox](https://en.wikipedia.org/wiki/Monty_Hall_problem).

Suppose that Chef is participating in a game show, where he has to choose between three doors numbered **1**
through **3**. There is a car behind one of the doors and goats behind the other two. Chef does not know what is behind which door, but there is a game host who knows where the car is.

First, you need to help Chef pick a door (let's denote it by **_X_**). Then, the host opens a different door (let's denote it by **_Y_**) such that there is a goat behind this door, and asks Chef to pick an arbitrary door again (let's denote it by **_Z_**). You need to help Chef pick door **_Z_** too. You should do it in such a way that the probability of a car being behind door **_Z_** is maximised. If there are multiple optimal possible ways to pick doors for Chef, you may choose any one.

## Input

- First, you should print a line containing a single integer **_X_** **(1 ≤** **_X_** **≤ 3)**.
- Then, you should read a line containing a single integer **_Y_**.
- Finally, you should print a line containing a single integer **_Z_** **(1 ≤** **_Z_** **≤ 3)**.

Don't forget to flush the output after printing each line!

## Output

For each test case, print a single line containing one integer ― the minimum required number of hits.

## Usage
```sh
node .
```
## Example
```
You                     Grader
-------------------------------
3
                        1
2
```
## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
