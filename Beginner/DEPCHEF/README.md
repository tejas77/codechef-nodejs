
# [Deputy Chef](https://www.codechef.com/problems/DEPCHEF)
Problem Code: **DEPCHEF**

A battle is going to begin in the kingdom of Airland. There are **_N_** soldiers in the kingdom, numbered **1** through **_N_** and standing in a circle in such a way that for each valid **_i_**, the soldier directly to the right of the **_i_**-th soldier is soldier **_i + 1_**, and the soldier directly to the right of the **_N_**-th soldier is soldier **1**.

Each soldier holds a sword and a shield. The sword is used to attack other soldiers and the shield is used to defend from attacks. Let's denote the attack value of the **_i_**-th soldier's sword by **_ai_** and the defense value of the **_i_**-th soldier's shield by **_di_**.

In the battle, each soldier picks one of the soldiers standing to his left and right, and attacks that soldier. The choices of the soldiers are completely independent, so each soldier can be attacked by the soldier to his left, by the soldier to his right (the power of such an attack is the attack value of the attacking soldier's sword), by both of them (then, the power of the resulting attack is the sum of the attack values of these soldiers' swords) or by nobody. A soldier remains alive if the defense value of his shield is strictly greater than the power with which he is attacked. Everyone attacks simultaneously and there is only one round of attacks. Each soldier that remains alive at the end is awarded a laurel.

The king of Airland likes these fights, so the host of the battle promised the king that he can pick one soldier and if the soldier he picks survives the battle, the king receives the shield of that soldier.

Chef is the deputy of the king and you want to help him pick a soldier for the king in such a way that the king receives the best shield (with the greatest defense value). However, if Chef picks a soldier and that soldier does not survive, Chef will be thrown in a snake pit. Therefore, it should be guaranteed that the chosen soldier will survive regardless of the decisions of the other soldiers.

Can you help Chef make the best choice and tell him the defense value of the shield which the king gets, or decide that he can be thrown in the snake pit no matter which soldier he picks?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_N_**.
- The second line contains **_N_** space-separated integers **_a1, a2, …, aN_**.
- The third line contains **_N_** space-separated integers **_d1, d2, …, dN_**.

## Output

For each test case, print a single line containing one integer ― the best defense value of the shield the king gets, or **−1** if Chef can be thrown in the snake pit.

## Usage
```sh
node .
```
## Example
### Input:
```
2
4
1 1 4 1
3 4 2 1
7
5 4 5 4 5 4 5
3 2 4 7 2 5 9
```
### Output:
```
3
-1
```
## Explanation

**Example case 1:** Soldier **1** can be attacked by soldier **2** and/or soldier **4**. If only soldier **2** attacks him, the power of the attack is **1**. If only soldier **4** attacks him, the power of the attack is **1** again. If they attack together, the power of the attack is **2**. In each of these cases, soldier **1** will live.

Soldier **2** can be attacked by soldier **3**, with attack power **4**. His shield has defense value **4**, which is not enough, so in this case, soldier **2** would die. The best safe choice is soldier **1**, with defense value **3**.

**Example case 2:** No soldier is guaranteed to survive the battle, so the answer is **−1**.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
