# Roman to Integer


Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].


## Python Solution

``` python

def romanToInt(s):

    roman_map = {"I": 1, "V": 5, "X": 10, "L": 50, "C":100, "D": 500, "M" : 1000 }

    result = 0

    for i in range (len (s) -1):
     current = roman_map [s[i]] 
     next_val = roman_map [s[i+1]]


     if  current < next_val :
        result -= current
     else: result += current

    result += roman_map[s[-1]]

    return result

print(romanToInt("III"))
print(romanToInt("LVIII"))
print(romanToInt("MCMXCIV"))




```
### The Loop
``` python
for i in range(len(s) - 1):
```
1. for keyword
Starts a loop that will iterate multiple times

2. i
The loop variable that takes on a new value in each iteration

Common convention: i stands for "index"

3. in keyword
Specifies what collection we're iterating over

4. range(len(s) - 1) - This is the most important part:
len(s)
len() is a built-in function that returns the length of a string/list

If s = "LVIII", then len(s) = 5

len(s) - 1
Subtracts 1 from the length

For s = "LVIII": 5 - 1 = 4

range(len(s) - 1)
range(n) creates a sequence of numbers from 0 to n-1

So range(4) creates: 0, 1, 2, 3

### What this loop does:
Iterates through indices 0, 1, 2, 3 (but stops before the last index)

For s = "LVIII" (indices: 0=L, 1=V, 2=I, 3=I, 4=I), it processes:

i=0: Compare L and V

i=1: Compare V and I

i=2: Compare I and I

i=3: Compare I and I

Why len(s) - 1?
Because inside the loop we access s[i] AND s[i+1]

If we used range(len(s)) and i reached the last index, s[i+1] would cause an IndexError

This ensures we only go up to the second-to-last element

Example with "LVIII":

``` python

s = "LVIII"  # len(s) = 5
range(len(s) - 1) = range(4)  # generates: 0, 1, 2, 3

# Loop iterations:
# i=0: compare s[0]="L" and s[1]="V"
# i=1: compare s[1]="V" and s[2]="I"  
# i=2: compare s[2]="I" and s[3]="I"
# i=3: compare s[3]="I" and s[4]="I"


```



### The Comparison Logic Inside the Loop


``` python

if current < next_val:
    result -= current
else: 
    result += current

```


What this does:
This implements the subtraction rule for Roman numerals.

Roman Numeral Rule:
When a smaller numeral appears before a larger one, you subtract the smaller one

Otherwise, you add the numeral

Examples:
Case 1: Subtraction (current < next_val)

``` python
# Example: "IV" (4)
# i=0: current = I=1, next_val = V=5
# 1 < 5 → True → result -= 1 → result = -1
# Later: result += V=5 → -1 + 5 = 4 ✓

```

Case 2: Addition (current >= next_val)

``` python
# Example: "VI" (6)  
# i=0: current = V=5, next_val = I=1
# 5 < 1 → False → result += 5 → result = 5
# Later: result += I=1 → 5 + 1 = 6 ✓
```

Why this works:
We subtract the current numeral now, knowing we'll add the larger next numeral later

The subtraction happens "in advance" before we process the larger numeral


### Adding the Last Character

``` python 
result += roman_map[s[-1]]
```

What this does:
Adds the value of the very last Roman numeral in the string.

Syntax breakdown:
`s[-1]` = the last character of string s

`roman_map[s[-1]] `= convert that character to its integer value

`result += `= add it to our running total

Why this is necessary:
The loop only goes up to the second-to-last character because it looks at pairs:

Loop processes: indices 0 to len(s)-2

It never processes the last character alone

Examples:

"LVIII" (58):

``` python
# After loop: result = 57 (from L+V+I+I)
# s[-1] = "I" = 1
# result += 1 → 57 + 1 = 58 ✓

```


"IV" (4):

``` python
# After loop: result = -1 (subtracted I)
# s[-1] = "V" = 5  
# result += 5 → -1 + 5 = 4 ✓

```
"VI" (6):

``` python
# After loop: result = 5 (added V)
# s[-1] = "I" = 1
# result += 1 → 5 + 1 = 6 ✓

```