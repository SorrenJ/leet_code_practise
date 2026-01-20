/*

iterate through value key pairings

we are looking for the characters in ransomNote from the magazine

can it be constructed out of the letters from the magazine?

hashmap may be used for key value pairing

we need to create hashmap:

const char = new Map ()

.set (key, value) - to  update entries

.get(key) -to retrieve values

.has(key) - check existencce








*/



var canConstruct = function(ransomNote, magazine) {
    

 const magazineChars = new Map();
 for (const char of magazine) {
    if (magazineChars.has(char)) {
      magazineChars.set(char, magazineChars.get(char) + 1);
    } else {
      magazineChars.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (magazineChars.get(char)) {
      magazineChars.set(char, magazineChars.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};


console.log(canConstruct("a","b")); // false

console.log(canConstruct("aa","aab")); // true