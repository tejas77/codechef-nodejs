
# [Chef and His Apartment Dues](https://www.codechef.com/problems/CHEFAPAR)
Problem Code: **CHEFAPAR**

Chef lives in a big apartment in Chefland. The apartment charges maintenance fees that he is supposed to pay monthly on time. But Chef is a lazy person and sometimes misses the deadlines. The apartment charges 1000 Rs per month as maintenance fees. Also, they also charge a one-time fine of 100 Rs for each of the late payments. It does not matter how late the payment is done, the fine is fixed to be Rs.100.

Chef has been living in the apartment for **N** months. Now, he wants to switch the apartment, so he has to pay the entire dues to the apartment. The deadline for the **N**-th month is also over. From his bank statement, he finds the information whether he paid apartment rent for a particular month for not. You are given this information by an array **A** of size **N**, where **Ai** (can be either 0 or 1) specifies whether he has paid the 1000Rs in the **i**-th month or not. Assume that Chef paid the fees in the **i**-th month, then this fees will be considered for the earliest month for which Chef has not yet paid the fees.

For example, assume Chef did not pay any money in first month and 1000Rs in the second month. Then this rent of 1000Rs will be considered for 1st month. But this counts as late payment for the first month's fees, and hence he will have to pay Rs. 100 for that. And since the payment he made in the second month is not accounted for the second month, but rather for the first month, he will incur a fine of Rs.100 even for the second month.

He has not paid any of the fines so far. Can you please help in finding Chef total due (all the fines, plus all the unpaid maintenance fees) that he has to pay to apartment?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test cases contains an integer **N** denoting the number of months for which you have to calculate the total amount of money that Chef has to pay at the end of the **n** month to clear all of his dues.
- Next line of each test case contains **N** space separated integers (each of them can be either 0 or 1) denoting whether Chef paid the 1000Rs fees in the corresponding month or not. If the corresponding integer is 1, it means that Chef paid the maintenance fees for that month, whereas 0 will mean that Chef did not pay the maintenance fees that month.

## Output

For each test case, output a single integer denoting the total amount including fine that Chef has to pay.

## Usage
```sh
node .
```
## Example
### Input:
```
4
2
1 1
2
0 0
3
0 1 0
2
0 1
```
### Output:
```
0
2200
2300
1200
```
## Explanation

**Example case 1.** Chef paid maintenance fees for both the months. So, he does not have any dues left.

**Example case 2.** Chef did not pay the maintenance fees for any of the months. For the first month, he has to pay 1000Rs, and 100Rs fine as a late payment. For second month payments, he just have to pay 1100Rs. So, in total he has a due of 1100 + 1100 = 2200 Rs.

**Example case 3.** In the first month, Chef did not pay his maintenance fees. He paid the maintenance of first in the second month. So, he paid a fine of 100Rs for first month. For second and third month, Chef did not pay the maintenance fees. So, he has to pay 1000Rs + 100Rs (of fine) for second month and only 1000Rs + 100Rs (of fine) for third month. In total, Chef has got to pay 100 + 1100 + 1100 = 2300 Rs.

**Example case 4.** In the first month, Chef did not pay his maintenance fees. He paid the maintenance of first in the second month. So, he paid a fine of 100Rs for first month. For second month, Chef did not pay the maintenance fees. So, he has to pay 1000Rs + 100Rs (of fine) for second month. In total, Chef has got to pay 100 + 1100 = 1200 Rs.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
