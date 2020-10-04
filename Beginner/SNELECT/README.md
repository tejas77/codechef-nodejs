
# [Snakes, Mongooses and the Ultimate Election](https://www.codechef.com/problems/SNELECT)
Problem Code: **SNELECT**

In Snakeland, there are some snakes and mongooses. They are lined up in a row. The information about how exactly they are lined up it is provided to you by a string of length **n**. If the i-th character of this string is 's', then it means that there is a snake at the i-th position, whereas the character 'm' denotes a mongoose.

You might have heard about the age-old rivalry between hares and tortoises, but in Snakeland, the rivalry between snakes and mongooses is much more famous. The snakes and the mongooses want to hold a final poll in which the ultimate winner of this age-old battle will be decided. If the snakes get more votes than the mongooses, they will be the ultimate winners. Similarly, if the mongooses get more votes than snakes, they will be the ultimate winners. Obviously, each animal is loyal to their species, i.e. each snake will vote for the snakes to be the ultimate champions and each mongoose for the mongooses.

Tomorrow's the election day. Before the elections, the mongooses decided to cheat. They planned that each mongoose will eat at most one of its neighbor snakes. Two animals are said to be neighbors of each other if they are consecutive to each other in the row. After this, the elections will be held. The mongooses planned in such a way that the number of snakes eaten is maximized. Can you find out who will win the final poll? Output "snakes", "mongooses" or "tie" correspondingly.

## Input

First line of the input contains an integer **T** denoting the number of test cases. The description of **T** test cases follow.

The only line of each test case contains a string consisting of characters 's' and 'm'.

## Output

For each test case output a single line containing "snakes", "mongooses" or "tie" correspondingly (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
4
sm
ssm
sms
ssmmmssss
```
### Output:
```
mongooses
tie
tie
snakes
```
## Explanation

**Example 1**. The mongoose will eat the snake. Only the mongoose will be left. So, on the election day, there is one mongoose and zero snakes. So mongooses will win.

**Example 2**. The mongoose will eat the snake at position 2 (1-based indexing). One mongoose and one snake will be left. Hence, there will be a tie.

**Example 3**. The mongoose can eat either the snake to its left or to the right. But, it can eat only one of them. Afterwards, there will be a single snake and mongoose. So, it will result in a tie.

**Example 4**. The mongooses can eat at max two snakes. For example, s*mmm*sss, where * denotes the snakes that were eaten by mongooses. After this, we have four snakes and three mongooses. So, the snakes win.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
