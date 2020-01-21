
# [Camp Or Not](https://www.codechef.com/problems/CAMPON)
Problem Code: **CAMPON**

The Petrozavodsk camp takes place in about one month. Jafar wants to participate in the camp, but guess what? His coach is Yalalovichik.

Yalalovichik is a legendary coach, famous in the history of competitive programming. However, he is only willing to send to the camp students who solve really hard problems on Timus. He started a marathon at the beginning of December. Initially, he said that people who solve 200 or more problems by the 31-st of December may go to the camp. Jafar made a schedule for the next month. For each day, he knows how many problems he is going to solve.

The problem is that Yalalovichik is a really moody coach — he may wake up tomorrow and change his decision about the deadline and the number of problems that must be solved by this deadline to qualify for the camp. Jafar has **_Q_**
such scenarios. Now he wants to know: in each scenario, if he does not change his problem solving schedule, will he go to the camp or not?

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line of each test case contains a single integer **_D_** - the number of days in Jafar's schedule.
- **_D_** lines follow. For each **_i_** (**_1 ≤ i ≤ D_**), the **_i_**-th of these lines contains two space-separated integers **_d\_i_** and **_p\_i_** denoting that Jafar will solve **_p\_i_** problems on day **_d\_i_**.
- The next line contains a single integer **_Q_** denoting the number of scenarios Jafar considers.
- **_Q_** lines follow. For each **_i_** (**_1 ≤ i ≤ Q_**), the **_i_**-th of these lines contains two space-separated integers **_dead\_i_** and **_req\_i_** denoting a scenario where Yalaovichik decides that students who solve **_req\_i_** problems by day **_dead\_i_** (inclusive) will go to the camp.

## Output

For each scenario, print a single line containing the string "**Go Camp**" if Jafar is going to the camp or "**Go Sleep**" otherwise (without quotes).

## Usage
```sh
node .
```
## Example
### Input:
```
1
3
10 5
14 4
31 1
2
9 2
15 7
```
### Output:
```
Go Sleep
Go Camp
```
## Explanation

**Example case 1:**
- By the end of day **9**, Jafar will not have any problem solved.
- By the end of day **15**, Jafar will have **9** problems solved, which is enough to go to the camp, since he needs at least **7** problems.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
