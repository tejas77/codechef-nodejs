
# [Train or Walk](https://www.codechef.com/problems/WALKFAST)
Problem Code: **WALKFAST**


Chefland has all the cities on a straight line. There are ***N*** cities in Chefland numbered **1** to ***N***. City ***i*** is located at coordinate **xi** on the x-axis. Guru wants to travel from city ***A*** to city ***B***. He starts at time t=0. He has following choices to travel.
1. He can walk **1** metre in ***P*** secs.
2. There is a train that travels from city ***C***
to city ***D*** which travels **1** metre in ***Q*** secs which starts at time t=***Y*** secs. Guru can take the train only at city ***C*** and leave the train only at city ***D***.

Can you help Guru find the minimum time he will need to travel from city ***A*** to ***B***. Note that you cannot board the train after time t=***Y***.

## Input

- First line will contain ***T***, number of test cases. Then the test cases follow.
- First line of each testcase contains eight space separated integers ***N,A,B,C,D,P,Q,Y***.
- Second line of each testcase contains ***N*** space-separated integers with the ***i***-th integer representing ***xi***.

## Output

For each testcase, output in a single line containing the minimum travel time.

## Usage
```sh
node .
```
## Example
### Input:
```
1
4 1 3 2 4 3 2 4
1 2 3 4
```
### Output:
```
6
```
## Explanation

Guru can walk directly in 6 secs.

If Guru takes train, then he will need atleast 11 secs.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
