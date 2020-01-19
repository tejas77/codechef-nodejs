
# [Studying Alphabet](https://www.codechef.com/problems/ALPHABET)
Problem Code: **ALPHABET**

Not everyone probably knows that Chef has younder brother Jeff. Currently Jeff learns to read.

He knows some subset of the letter of Latin alphabet. In order to help Jeff to study, Chef gave him a book with the text consisting of **_N_** words. Jeff can read a word iff it consists only of the letters he knows.

Now Chef is curious about which words his brother will be able to read, and which are not. Please help him!

## Input

- The first line of the input contains a lowercase Latin letter string **_S_**, consisting of the letters Jeff can read. Every letter will appear in **_S_** no more than once.
- The second line of the input contains an integer **_N_** denoting the number of words in the book.
- Each of the following **_N_** lines contains a single lowecase Latin letter string **_Wi_**, denoting the **_i_**th word in the book.

## Output

For each of the words, output "**Yes**" (without quotes) in case Jeff can read it, and "**No**" (without quotes) otherwise.

## Usage
```sh
node .
```
## Example
### Input:
```
act
2
cat
dog
```
### Output:
```
Yes
No
```
## Explanation

**Case 1:** The first word can be read.

**Case 2:** The second word contains the letters d, o and g that aren't known by Jeff.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
