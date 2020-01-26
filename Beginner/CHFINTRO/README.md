
# [Chef and Interactive Contests](https://www.codechef.com/problems/CHFINTRO)
Problem Code: **CHFINTRO**

"Every beginning has an end… and an editorial." - taran_1407

What the hell are all these interactive problems? What does flushing output mean? So many questions… Chef explains it in an easy way: you must communicate with a grader program, which accepts your input only if you flushed the output.

There is a contest with interactive problems where **_N_** people participate. Each contestant has a known rating. Chef wants to know which contestants will not forget to flush the output in interactive problems. Fortunately, he knows that contestants with rating at least **_r_** never forget to flush their output and contestants with rating smaller than **_r_** always forget to do it. Help Chef!

## Input

- The first line of the input contains two space-separated integers **_N_** and **_r_**.
- Each of the following **_N_** lines contains a single integer **_R_** denoting the rating of one contestant.

## Output

For each contestant, print a single line containing the string "**Good boi**" if this contestant does not forget to flush the output or "**Bad boi**" otherwise.

## Usage
```sh
node .
```
## Example
### Input:
```
2 1500
1499
1501
```
### Output:
```
Bad boi
Good boi
```

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
