
# [Ping Paja Pong](https://www.codechef.com/problems/PAJAPONG)
Problem Code: **PAJAPONG**

Chef and Paja are bored, so they are playing an infinite game of ping pong. The rules of the game are as follows:

- The players play an infinite number of games. At the end of each game, the player who won it scores a point.
- In each game, one of the players serves. Chef serves in the first game.
- After every **_K_** points are scored (regardless of which players scored them), i.e. whenever **_K_** games have been played since the last time the serving player changed, the player that serves in the subsequent games changes: if Chef served in the game that just finished, then Paja will serve in the next game and all subsequent games until the serving player changes again; if Paja served, then Chef will serve.

The players got a little too caught up in the game and they forgot who is supposed to serve in the next game. Will you help them determine that? So far, Chef has scored **_X_** points and Paja has scored **_Y_** points.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains three space-separated integers **_X_**, **_Y_** and **_K_**.

## Output

For each test case, print a single line containing the string "Chef" if Chef is supposed to serve next or "Paja" otherwise (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
3
1 3 3
5 7 2
38657 76322 564
```
### Output:
```
Paja
Chef
Paja
```
## Explanation

**Example case 1:** Chef served for the first three games, after that Paja started serving. He only served in one game, so he is supposed to serve next.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
