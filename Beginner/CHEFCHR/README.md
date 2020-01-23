
# [Chef And His Characters](https://www.codechef.com/problems/CHEFCHR)
Problem Code: **CHEFCHR**

Chef was reading a book. He decided to highlight all the lovely sentences of the book. He calls a sentence a lovely sentence if, after removing all the non-alphabetical characters (like punctuation and spaces) from it and converting all uppercase letters to lowercase, it is possible to choose **four contiguous characters** from the sentence and reorder them to create the string “chef”.

Chef has almost completed the highlighting work, only a few sentences are left to be checked and highlighted. Now, he wants your help in checking the remaining sentences, as he has to help his mother in the kitchen.

Each sentence **s** has already been preprocessed — all non-alphabetical characters have been erased and all remaining uppercase characters converted to lowercase. You should determine whether **s** is a lovely sentence or not. If it is a lovely sentence, then Chef is also interested in the number of possible ways to select 4 contiguous characters that can be reordered to give his name (the string "chef").

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first and only line of each test case contains a single string **s**, denoting a preprocessed sentence.

## Output

- For each test case, print a single line.
- If the string **s** is not a lovely string, this line should contain a single string “normal” (without quotes).
- Otherwise, it should contain the string ”**lovely**” (without quotes) followed by one integer — the number of ways to select the four contiguous characters.

## Usage
```sh
node .
```
## Example
### Input:
```
5
ifchefisgoodforchess
fehcaskchefechohisvoice
hecfisaniceperson
letscallchefthefch
chooseaprogrammer
```
### Output:
```
lovely 2
lovely 3
lovely 1
lovely 3
normal
```
## Explanation

**Example case 1:** We can select “fche” (the substring starting at index 2) or “chef” (index 3).

**Example case 2:** We can select “fehc” (index 1), “chef” (index 8) or “fech” (index 11).

**Example case 3:** We can only select “hecf” (index 1).

**Example case 4:** We can select “chef” (index 9), “hefc” (index 14), or “efch” (index 15).

**Example case 5:** No four contiguous characters can be reordered to form Chef's name.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
