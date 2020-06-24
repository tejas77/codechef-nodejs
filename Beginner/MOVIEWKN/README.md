
# [Movie Weekend](https://www.codechef.com/problems/MOVIEWKN)
Problem Code: **MOVIEWKN**

Little Egor is a huge movie fan. He likes watching different kinds of movies: from drama movies to comedy movies, from teen movies to horror movies. He is planning to visit cinema this weekend, but he's not sure which movie he should watch.

There are **n** movies to watch during this weekend. Each movie can be characterized by two integers **Li** and **Ri**, denoting the length and the rating of the corresponding movie. Egor wants to watch exactly one movie with the maximal value of **Li × Ri**. If there are several such movies, he would pick a one with the maximal **Ri** among them. If there is still a tie, he would pick the one with the minimal index among them.

Your task is to help Egor to pick a movie to watch during this weekend.

## Input

- The first line of the input contains an integer **T** denoting the number of test cases.
- The first line of the test case description contains an integer **n**.
- The second line of the test case description contains **n** integers **L1, L2, ...,Ln**. The following line contains **n** integers **R1, R2, ..., Rn**.

## Output

For each test case, output a single integer **i** denoting the index of the movie that Egor should watch during this weekend. Note that we follow 1-based indexing.

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
2 1
4
2 1 4 1
2 4 1 4
```
### Output:
```
1
2
```
## Explanation

In the first example case, both films have the same value of **L × R**, but the first film has a better rating.

In the second example case, the second and the fourth movies are equally good, but the second movie has a smaller index.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
