
# [A Big Sale](https://www.codechef.com/problems/BIGSALE)
Problem Code: **BIGSALE**

Chef recently opened a big e-commerce website where her recipes can be bought online. It's Chef's birthday month and so she has decided to organize a big sale in which grand discounts will be provided.

In this sale, suppose a recipe should have a discount of **_x_** percent and its original price (before the sale) is **_p_**. Statistics says that when people see a discount offered over a product, they are more likely to buy it. Therefore, Chef decides to first increase the price of this recipe by **_x_**% (from **_p_**) and then offer a discount of **_x_**% to people.

Chef has a total of **_N_** types of recipes. For each **_i_** (1 ≤ **_i_** ≤ **_N_**), the number of recipes of this type available for sale is **_quantity_i_**, the unit price (of one recipe of this type, before the **_x_**% increase) is **_price_i_** and the discount offered on each recipe of this type (the value of **_x_**) is **_discount_i_**.

Please help Chef find the total loss incurred due to this sale, if all the recipes are sold out.

## Input

- The first line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
- The first line of each test case contains a single integer **_N_** denoting the number of recipe types.
- **_N_** lines follow. The **_i_**-th of these lines contains three space-separated integers **_price_i_**, **_quantity_i_** and **_discount_i_** describing the **_i_**-th recipe type.

## Output

For each test case, print a single line containing one real number — the total amount of money lost. Your answer will be considered correct if it has an absolute error less than 10^-2.

## Usage
```sh
node .
```
## Example
### Input:
```
2
2
100 5 10
100 1 50
3
10 10 0
79 79 79
100 1 100
```
### Output:
```
30.000000000
3995.0081000
```
## Explanation

**Example case 1:** There are two recipes.

There are 5 recipes of the first type, each of them has a price of 100 and there is a 10% discount provided on it. Therefore, Chef first increases the price of each recipe by 10%, from 100 to 110. After that, she decreases the price by 10%, which makes the final price 99. The amount of money lost for each unit is 1, thus losing 5 for recipes of the first type.

There is only one recipe of the second type, with price 100 and a 50% discount. Therefore, Chef increases the price of the recipe by 50% from 100 to 150 and after that, she decreases its price by 50% to make its final price 75. She loses 25 for this recipe.

Overall, the amount of money Chef loses is 30.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
