
# [Chef and Cook-Off](https://www.codechef.com/problems/CCOOK)
Problem Code: **CCOOK**

Chef has obtained the results of a past Cook-Off. He wants to estimate the skill level of each contestant. The contestants can be classified [with high probability](https://en.wikipedia.org/wiki/With_high_probability) (w.h.p.) based on the number of solved problems:

- A contestant that solved exactly 0 problems is a beginner.
- A contestant that solved exactly 1 problem is a junior developer.
- A contestant that solved exactly 2 problems is a middle developer.
- A contestant that solved exactly 3 problems is a senior developer.
- A contestant that solved exactly 4 problems is a hacker.
- A contestant that solved all five problems is [Jeff Dean](https://www.quora.com/What-are-all-the-Jeff-Dean-facts).

Please help Chef to identify the programming level of each participant.

## Input

- The first line of the input contains a single integer **N** denoting the number of competitors.
- **N** lines follow. The **i**-th of these lines contains five space-separated integers **Ai_1**, **Ai_2**, **Ai_3**, **Ai_4**, **Ai_5**. The **j**-th of these integers (1 ≤ **j** ≤ 5) is 1 if the **i**-th contestant solved the **j**-th problem and 0 otherwise.

## Output

For each participant, print a single line containing one string denoting Chef's classification of that contestant — one of the strings "**Beginner**", "**Junior Developer**", "**Middle Developer**", "**Senior Developer**", "**Hacker**", "**Jeff Dean**" (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
7
0 0 0 0 0
0 1 0 1 0
0 0 1 0 0
1 1 1 1 1
0 1 1 1 0
0 1 1 1 1
1 1 1 1 0
```
### Output:
```
Beginner
Middle Developer
Junior Developer
Jeff Dean
Senior Developer
Hacker
Hacker
```
## Explanation

The first contestant has no solved problems, therefore he is a beginner. The second contestant solved 2 problems (the second and fourth problem), therefore he has the skills of a middle developer. The third contestant solved 1 problem, therefore he's at the expected level of a junior developer. The fourth contestant solved 5 problems — we can guess it was Jeff Dean. The fifth contestant solved 3 problems, so he is a senior developer. And the last two contestants should be hackers because they solved exactly 4 problems each.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
