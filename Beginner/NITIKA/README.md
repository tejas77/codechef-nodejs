
# [Whats in the Name](https://www.codechef.com/problems/NITIKA)
Problem Code: **NITIKA**

Nitika was once reading a history book and wanted to analyze it. So she asked her brother to create a list of names of the various famous personalities in the book. Her brother gave Nitika the list. Nitika was furious when she saw the list. The names of the people were not properly formatted. She doesn't like this and would like to properly format it.

A name can have at most three parts: first name, middle name and last name. It will have at least one part. The last name is always present. The rules of formatting a name are very simple:

- **Only** the first letter of each part of the name should be capital.
- All the parts of the name except the last part should be represented by only two characters. The first character should be the first letter of the part and should be capitalized. The second character should be ".".

Let us look at some examples of formatting according to these rules:

- gandhi → Gandhi
- mahatma gandhI → M. Gandhi
- Mohndas KaramChand ganDhi → M. K. Gandhi


## Input

The first line of the input contains an integer **T** denoting the number of test cases.

The only line of each test case contains the space separated parts of the name.

## Output

For each case, output the properly formatted name.

## Usage
```sh
node .
```
## Example
### Input:
```
3
gandhi
mahatma gandhI
Mohndas KaramChand gandhi
```
### Output:
```
Gandhi
M. Gandhi
M. K. Gandhi
```

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
