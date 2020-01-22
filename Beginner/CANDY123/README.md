
# [Bear and Candies 123](https://www.codechef.com/problems/CANDY123)
Problem Code: **CANDY123**

Bears love candies and games involving eating them. Limak and Bob play the following game. Limak eats 1 candy, then Bob eats 2 candies, then Limak eats 3 candies, then Bob eats 4 candies, and so on. Once someone can't eat what he is supposed to eat, he loses.

Limak can eat at most **_A_** candies in total (otherwise he would become sick), while Bob can eat at most **_B_** candies in total. Who will win the game? Print "Limak" or "Bob" accordingly.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The only line of each test case contains two integers **_A_** and **_B_** denoting the maximum possible number of candies Limak can eat and the maximum possible number of candies Bob can eat respectively.

## Output

For each test case, output a single line containing one string — the name of the winner ("Limak" or "Bob" without the quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
10
3 2
4 2
1 1
1 2
1 3
9 3
9 11
9 12
9 1000
8 11
```
### Output:
```
Bob
Limak
Limak
Bob
Bob
Limak
Limak
Bob
Bob
Bob
```
## Explanation

**Test case 1.** We have **_A_** = 3 and **_B_** = 2. Limak eats 1 candy first, and then Bob eats 2 candies. Then Limak is supposed to eat 3 candies but that would mean 1 + 3 = 4 candies in total. It's impossible because he can eat at most **_A_** candies, so he loses. Bob wins, and so we print "Bob".

**Test case 2.** Now we have **_A_** = 4 and **_B_** = 2. Limak eats 1 candy first, and then Bob eats 2 candies, then Limak eats 3 candies (he has 1 + 3 = 4 candies in total, which is allowed because it doesn't exceed **_A_**). Now Bob should eat 4 candies but he can't eat even a single one (he already ate 2 candies). Bob loses and Limak is the winner.

**Test case 8.** We have **_A_** = 9 and **_B_** = 12. The game looks as follows:

- Limak eats 1 candy.
- Bob eats 2 candies.
- Limak eats 3 candies (4 in total).
- Bob eats 4 candies (6 in total).
- Limak eats 5 candies (9 in total).
- Bob eats 6 candies (12 in total).
- Limak is supposed to eat 7 candies but he can't — that would exceed **_A_**. Bob wins.


## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
