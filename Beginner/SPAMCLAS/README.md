
# [Spam Classification Using Neural Net](https://www.codechef.com/problems/SPAMCLAS)
Problem Code: **SPAMCLAS**

Neural nets are extremely popular in the Machine Learning domain. A neural net is composed of multiple layers. It has an input layer in which you input the parameter **x** (the input of the program). The input is then passed through multiple hidden layers, finally getting one output at the final layer, called the output layer.

We have a very simple neural net, which consist of **N** hidden layers. Each layer contains one neuron. Each neuron has two values associated with it: **wi**, and **bi**, denoting the weight and the bias of the neuron. If you give the neuron an input of x, it produces an output of **(wi * x) + bi**.

Thus, an input **x** gets transformed by the neural net as follows. The first hidden neuron takes the input **x** and produces **y = w1 * x + b1**, which acts as the input for the second neuron. Then, the second neuron takes input **y** and produces an output of **z = w2 * y + b2**. This keeps happening and you get a single output at the end from the **N**-th neuron.

There are some users and we want to find if they are spamming or not. They have integer user-ids, which range from **minX** to **maxX** (both inclusive). So we take each of these user-ids and feed it as input to the first layer of the neural net. If the final output is even, then that user is not a spammer, otherwise, the user is a spammer. You have to count the number of non-spammers and spammers.

## Input

- The first line of the input contains a single integer **T** denoting the number of test cases. The description of **T** test cases follows.
- The first line of each test case contains three space-separated integers **N**, **minX**, **maxX**.
- Each of the next **N** lines contains two space-separated integers **wi** and **bi** denoting the weight and the bias of the i-th neuron.


## Output

For each test case, output two space-separated integers denoting the number of non-spammers and the number of spammers, respectively.

## Usage
```sh
node .
```
## Example
### Input:
```
3
1 1 2
1 2
2 1 4
2 4
2 3
3 2 1000000000
2 4
2 2
5 4
```
### Output:
```
1 1
0 4
999999999 0
```
## Explanation

**Example 1**. There is a single neuron with weight = 1 and bias = 2. Let us check the output for x = 1: w * x + b = 1 * 1 + 2 = 3. Output for x = 2 would be 2 * 1 + 2 = 4. You can see that one of these is even and the other is odd. So, there is one spammer and one non-spammer.

**Example 2**. There are two neurons with weights 2 each, but bias 4, 3 respectively.

- x = 1, y = 2 * 1 + 4 = 6. z = 2 * 6 + 3 = 15
- x = 2, y = 2 * 2 + 4 = 8. z = 2 * 8 + 3 = 19
- x = 3, y = 2 * 3 + 4 = 10. z = 2 * 10 + 3 = 23
- x = 4, y = 2 * 4 + 4 = 12. z = 2 * 12 + 3 = 27

You can see that all of these are odd and hence signify that they are spammers. So, there are 0 non-spammers and 4 spammers.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
