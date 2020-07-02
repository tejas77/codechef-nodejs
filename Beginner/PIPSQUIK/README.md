
# [Full Barrier Alchemist](https://www.codechef.com/problems/PIPSQUIK)
Problem Code: **PIPSQUIK**

Edward Elric is chasing after Scar. To stop Edward, Scar creates **_N_** barriers in the way, numbered from **1** to **_N_**. Each barrier Scar created is either one of the following two types.

- Type 1 barrier - This barrier start from a height **_X_** above the ground and extend till the sky.
- Type 2 barrier - This barrier start from the ground and extend up to height **_X_**
above the ground.
![Full Barrier Alchemist Image](https://codechef_shared.s3.amazonaws.com/download/HYC/External_contest_images/DCOD2019/problem1.png)

The height of Edward is **_H_** units and he has an alchemic life force of **_L_** units. Moreover, he can duck by **_Y1_** units and jump by height **_Y2_** units (as explained in the figures). He starts crossing barriers in sequence, starting from barrier **1** till the barrier **_N_**. Whenever he can't pass a barrier by ducking or jumping (considered passed even when the barrier just touches him), he uses Alchemy to break the barrier. However, this costs him a single unit of his alchemic life force.

If after breaking a barrier no life force is left, Edward gets completely exhausted, unable to pass that barrier.
How many barriers can Edward cross?

And remember never to call him a pipsqueak if his height is too short!

## Input

- The first line contains **_T_**, the number of test cases. Then the test cases follow.
- For each test case, the first line contains five integers **_N, H, Y1, Y2_** and **_L_**.
- The next **_N_** lines, each contain two integers **_ti_** and **_Xi_** for the **_ith_** barrier where **_ti=1_** denotes a Type 1 Barrier and **_ti=2_** denotes a Type 2 barrier.

## Output

For each test case print a single line containing the number of barriers Edward can pass.

## Usage
```sh
node .
```
## Example
### Input:
```
3
6 5 1 2 3
2 2
2 1
1 10
2 8
2 4
1 2
1 4 2 5 1
2 6
6 5 1 2 3
2 2
2 1
1 10
2 8
2 4
1 6
```
### Output:
```
5
0
6
```
## Explanation

**Test case 1:** Given **_N = 6, H = 5, Y1 = 1, Y2 = 2_** and **_L = 3_**.\
He passes the first three barriers by either ducking or jumping. He uses alchemic life force for breaking **_4th_**, **_5th_** and **_6th_** barrier because he cannot pass them by either jumping or ducking. He gets exhausted after breaking the **_6th_** barrier and is unable to pass it. So, in total he passes **_5_** barriers.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
