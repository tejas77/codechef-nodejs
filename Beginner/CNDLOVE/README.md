
# [Candy Love](https://www.codechef.com/problems/CNDLOVE)
Problem Code: **CNDLOVE**

Sammy and Simmy love candies and frequently visit the local candy shop. Sammy and Simmy have bought **_N_** candy packs. Packet **_i_** contains **_Ai_** candies. Sammy being the elder one is happy only if she has strictly more candies than Simmy. However Simmy, the more sensible one, is happy only if the difference between their number of candies is not more than **1**.

The shopkeeper, being a generous lady, agrees to help Sammy and Simmy by distributing the candies among them in a way that makes both of them happy. The shopkeeper can open the packs and distribute the candies even within a single pack to different people.

## Input

- The first line will contain **_T_**, the number of testcases.
- The first line of every test case will contain **_N_**, the number of candy packs.
- The next line has **_N_** integers, the **_ith_** integer denoting **_Ai_**, the number of candies in the **_ith_** pack.

## Output

Output "YES" if its possible for the shopkeeper to make both the sisters happy otherwise output "NO".

## Usage
```sh
node .
```
## Example
### Input:
```
1
2
5 2
```
### Output:
```
YES
```
## Explanation

Sammy gets 4 candies from the first pack.

Simmy gets 1 candy from the first pack and 2 from the second one.

So in total, Sammy has 4, and Simmy has 3. Since Sammy has strictly more candies than Simmy, Sammy is happy. And since the difference is not more then 1, Simmy is also happy. Thus both of them are happy.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
