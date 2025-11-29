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