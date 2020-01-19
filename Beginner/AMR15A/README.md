
# [Mahasena](https://www.codechef.com/problems/AMR15A)
Problem Code: **AMR15A**

Kattapa, as you all know was one of the greatest warriors of his time. The kingdom of Maahishmati had never lost a battle under him (as army-chief), and the reason for that was their really powerful army, also called as **Mahasena**.

Kattapa was known to be a very superstitious person. He believed that a soldier is "lucky" if the soldier is holding an **even number** of weapons, and "unlucky" otherwise. He considered the army as "READY FOR BATTLE" if the count of "lucky" soldiers is strictly greater than the count of "unlucky" soldiers, and "NOT READY" otherwise.

Given the number of weapons each soldier is holding, your task is to determine whether the army formed by all these soldiers is "READY FOR BATTLE" or "NOT READY".

**Note:**
- You can find the definition of an even number [here](https://simple.wikipedia.org/wiki/Even_number).
- The Code Submission is not available for Node.JS.

## Input

- The first line of input consists of a single integer **_N_** denoting the number of soldiers.
- The second line of input consists of **_N_** space separated integers **_A1, A2, ..., AN_**, where **_Ai_** denotes the number of weapons that the **_i_**th soldier is holding.

## Output

Generate one line output saying "READY FOR BATTLE", if the army satisfies the conditions that Kattapa requires or "NOT READY" otherwise (quotes for clarity).

## Usage
```sh
node .
```
## Example
### Example 1
#### Input:
```
1
1
```
#### Output:
```
NOT READY
```
### Example 2
#### Input:
```
1
2
```
#### Output:
```
READY FOR BATTLE
```
### Example 3
#### Input:
```
4
11 12 13 14
```
#### Output:
```
NOT READY
```
### Example 4
#### Input:
```
3
2 3 4
```
#### Output:
```
READY FOR BATTLE
```
### Example 5
#### Input:
```
5
1 2 3 4 5
```
#### Output:
```
NOT READY
```
## Explanation

- **Example 1**: For the first example, **N = 1** and the array **A = [1]**. There is only 1 soldier and he is holding 1 weapon, which is odd. The number of soldiers holding an even number of weapons = 0, and number of soldiers holding an odd number of weapons = 1. Hence, the answer is "NOT READY" since the number of soldiers holding an even number of weapons is not greater than the number of soldiers holding an odd number of weapons.

- **Example 2**: For the second example, **N = 1** and the array **A = [2]**. There is only 1 soldier and he is holding 2 weapons, which is even. The number of soldiers holding an even number of weapons = 1, and number of soldiers holding an odd number of weapons = 0. Hence, the answer is "READY FOR BATTLE" since the number of soldiers holding an even number of weapons is greater than the number of soldiers holding an odd number of weapons.

- **Example 3**: For the third example, **N = 4** and the array **A = [11, 12, 13, 14]**. The 1st soldier is holding 11 weapons (which is odd), the 2nd soldier is holding 12 weapons (which is even), the 3rd soldier is holding 13 weapons (which is odd), and the 4th soldier is holding 14 weapons (which is even). The number of soldiers holding an even number of weapons = 2, and number of soldiers holding an odd number of weapons = 2. Notice that we have an equal number of people holding even number of weapons and odd number of weapons. The answer here is "NOT READY" since the number of soldiers holding an even number of weapons is not strictly greater than the number of soldiers holding an odd number of weapons.

- **Example 4**: For the fourth example, **N = 3** and the array **A = [2, 3, 4]**. The 1st soldier is holding 2 weapons (which is even), the 2nd soldier is holding 3 weapons (which is odd), and the 3rd soldier is holding 4 weapons (which is even). The number of soldiers holding an even number of weapons = 2, and number of soldiers holding an odd number of weapons = 1. Hence, the answer is "READY FOR BATTLE" since the number of soldiers holding an even number of weapons is greater than the number of soldiers holding an odd number of weapons.

- **Example 5**: For the fifth example, **N = 5** and the array **A = [1, 2, 3, 4, 5]**. The 1st soldier is holding 1 weapon (which is odd), the 2nd soldier is holding 2 weapons (which is even), the 3rd soldier is holding 3 weapons (which is odd), the 4th soldier is holding 4 weapons (which is even), and the 5th soldier is holding 5 weapons (which is odd). The number of soldiers holding an even number of weapons = 2, and number of soldiers holding an odd number of weapons = 3. Hence, the answer is "NOT READY" since the number of soldiers holding an even number of weapons is not greater than the number of soldiers holding an odd number of weapons.


## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
