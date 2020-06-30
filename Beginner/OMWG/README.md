
# [One more weird game](https://www.codechef.com/problems/OMWG)
Problem Code: **OMWG**

Leha is playing a very interesting game. The game will be played on a rectangular grid consisting of **N** rows and **M** columns. Initially all the cells of the grid are uncolored.

Leha's initial score is zero. At each turn, he chooses some cell that is yet not colored, and colors that cell. The score obtained in this step will be number of neighboring colored cells of the cell that Leha colored in this step. Two cells are neighbors of each other if they share a side between them. The game will end when all the cells are colored. Finally, total score obtained at the end of the game will sum of score obtained in each turn.

Leha wants to know what maximum score he can get? Can you please help him in finding this out?

## Input

The first line contains a single integer **T** denoting the number of test cases. **T** test cases follow.

Each of the following **T** lines contains two space-separated integers **N**, **M** denoting the dimensions of the grid.

## Output

For each test case, output a single line containing an integer corresponding to the maximal possible score Leha can obtain.

## Usage
```sh
node .
```
## Example
### Input:
```
1
2 2
```
### Output:
```
4
```
## Explanation

Leha can obtain total score 4 in the following way.

- In the first step, he colors down left cell, all the neighboring cells of this cell are uncolored. So, it adds **0** to total score.
- In second step, he can color upper right cell, it also adds total **0** to the score.
- In third step, he can color top left cell. There are two neighboring cell of this cell, both of which are colored. So, this add **2** to the score.
- In the last step, he can choose the remaining down right cell. There are two neighboring cell of this cell, both of which are colored. So, this also add **2** to the score.

Leha can't obtain a score more than 4. Hence 4 is the answer.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
