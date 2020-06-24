
# [Dinosaurs Football](https://www.codechef.com/problems/MXCH)
Problem Code: **MXCH**

Chef Ada is the FootBall coach of the Dinosaurs Institute of Technology.

There are **_N_**
dinosaurs (enumerated **1** through **_N_**) placed in a line. The i-th dinosaur has a height of **_i_** meters.

Ada is training The dinosaurs in the following tactic:

- Initially the leftmost dinosaur has the ball.
- The dinosaur that has the ball passes the ball to the nearest dinosaur to the right that is tallest than him.
- The previous step continues until the ball reaches the tallest dinosaur, then he throws the ball and scores a goal!

Help Ada reordering the dinosaurs in such a way that the ball is passed from dinosaur to dinosaur exactly **_K_** times.

For example, if there are **5** dinosaurs ordered as **[2, 3, 1, 5, 4]**, then the ball goes **_2 → 3 → 5 → goal_**, and the ball was passed two times.

## Input

- First line will contain **_T_**, number of testcases.
- Each test case consist of a line with two space separated integers **_N_**,**_K_**.

## Output

For each testcase, output in a single line conaining **_N_** integers representing one possible ordering in which the dinosaurs can be placed.


## Usage
```sh
node .
```
## Example
### Input:
```
1
5 2
```
### Output:
```
2 3 1 5 4
```

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
