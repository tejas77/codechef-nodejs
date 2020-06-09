
# [Chef and Game with Sequence](https://www.codechef.com/problems/L56GAME)
Problem Code: **L56GAME**

Chef has a sequence **A** containing **N** integers **A_1, A_2, ..., A_N**.

Chef is playing a game with this sequence. In this game, he may perform the following operation any number of times (including zero): Choose an arbitrary pair of elements from the sequence such that their sum is even, delete these two elements from the sequence and insert their sum into the sequence instead.

The goal of the game is to minimise the number of elements in the sequence.

Help Chef to play the game and find the minimum possible size of the sequence at the end of the game!

## Input

- The first line of the input contains a single integer **T** denoting the number of test cases. The description of **T** test cases follows.
- The first line of each test case contains a single integer **N**.
- The second line contains **N** space-separated integers **A_1, A_2, ..., A_N**.

## Output

For each test case, print a single line containing one integer — the minimum possible final size of the sequence.

## Usage
```sh
node .
```
## Example
### Input:
```
2
2
1 2
5
7 4 3 2 6
```
### Output:
```
2
1
```
## Explanation

**Example case 1:** There is no pair of elements with an even sum. Thus, the sequence must remain the same and the answer is 2.

**Example case 2:** Chef can choose elements 7 and 3 in the first step, delete them and insert 10 in the sequence. Now all its elements are even and Chef can choose any two elements on each of the following steps of the game until the sequence contains only one element.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
