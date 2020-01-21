
# [BST Operations](https://www.codechef.com/problems/BSTOPS)
Problem Code: **BSTOPS**

Write a program that processes the following queries on a Binary Search Tree:\
**i x**: Insert **x** in the BST\
**d x**: Delete **x** from the BST

## Input

- Line 1 contains an integer **Q**, the number of queries
- The next **Q** lines are of the form **i x** or **d x**

## Output

- For each query, print the position of **x** in the BST
- If the position of a node is **p**, the positions of its left and right children are **2*p** and **2*p+1** respectively
- Position of the root node is 1

## Usage
```sh
node .
```
## Example
### Input:
```
5
i 1
i 2
i 0
d 2
i 3
```
### Output:
```
1
3
2
3
3
```
## Explanation
```
On inserting 1,

1

On inserting 2:

1
 \
  2

On inserting 0:

   1
  / \
 0   2

After deleting 2:

  1
 /
0

On inserting 3:

   1
  / \
 0   3
```
## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
