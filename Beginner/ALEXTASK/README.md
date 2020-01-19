
# [Task for Alexey](https://www.codechef.com/problems/ALEXTASK)
Problem Code: **ALEXTASK**

Alexey is trying to develop a program for a very simple microcontroller. It makes readings from various sensors over time, and these readings must happen at specific regular times. Unfortunately, if two of these readings occur at the same time, the microcontroller freezes and must be reset.

There are **_N_** different sensors that read data on a regular basis. For each **_i_** from **1** to **_N_**, the reading from sensor **_i_** will occur every **_Ai_** milliseconds with the first reading occurring exactly **_Ai_** milliseconds after the microcontroller is powered up. Each reading takes precisely one millisecond on Alexey's microcontroller.

Alexey wants to know when the microcontroller will freeze after he turns it on.

## Input

- The first line of the input contains a single integer **_T_** denoting the number of test cases. The description of **_T_** test cases follows.
- The first line contains single integer **_N_** denoting the number of sensors.
- The second line contains **_N_** space-separated integers **_A1, A2, ..., AN_** denoting frequency of measurements. Namely, sensor **_i_** will be read every **_Ai_** milliseconds with the first reading occurring **_Ai_** milliseconds after the microcontroller is first turned on.

## Output

For each test case, output a single line containing the number of milliseconds until the microcontroller freezes.

## Usage
```sh
node .
```
## Example
### Input:
```
3
3
2 3 5
4
1 8 7 11
4
4 4 5 6
```
### Output:
```
6
7
4
```
## Explanation

**Case 1:** in 6 milliseconds, the third reading will be attempted from the 1st sensor and the second reading will be attempted from the 2nd sensor.

**Case 2:** in 7 milliseconds the seventh reading will be attempted from the 1st sensor and the first reading will be attempted from the 3rd sensor.

**Case 3:** in 4 milliseconds, the first readings from the first two sensors will be attempted.

## Coder

* **Tejas Rathod** - [@tejas77](https://github.com/tejas77)
