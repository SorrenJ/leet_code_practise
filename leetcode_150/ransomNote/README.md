
# Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.


## Solution

We can use a hashmap for this solution since we need to track the key (character) and value (count of character occurence). 

Let's go over the logic first:

### Example 1
```
Input: ransomNote = "a", magazine = "b"

magazineChars = { a:0,  b:1 }
```
There is no 'a' and it occurs 0 times in magazine so it is mapped to 0

It is output false since it doesn't satisfy the ransomNote

### Example 2

` Input: ransomNote = "aa", magazine = "ab"
`
#### Iteration 1
```
magazineChars = { a:1,  b:1 }

ransomNote: {a} a

a: 1 - 1
```
Pointer is now on the 1st position, since it is `a` it will be minus 1 in the next iteration.

#### Iteration 2

```
magazineChars = { a:0,  b:1 }

Pointer: a {a}

a: 0 - 1 // No more -> outputs false

```

Pointer is now in the 2nd position, which is another `a`. The pointer cannot `get` another `a` since there are no more in the `magazineChars`. The function will return `false`

### Example 3

`Input: ransomNote = "aa", magazine = "aab"
`
#### Iteration 1

```
magazineChars = { a:2,  b:1 }

ransomNote: {a} a

a: 2 - 1

```
The pointer is at the 1st position of the ransomNote, it detects an `a` and retreives one from the `magazineChars` 

#### Iteration 2


```
magazineChars = { a:1,  b:1 }

ransomNote: a {a}

a: 1 - 1 // return true

```
The pointer is at the 2nd position of the ransomNote, it detects an existing `a` and retrieves one from the `magazineChars`. 

Since ransomNote is fufilled, completing it's word 'aa', the output is true.

### Code

`const magazineChars = new Map();`

We start by creating a new hashmap

``` js
 for (const char of magazine) {
    if (magazineChars.has(char)) {
      magazineChars.set(char, magazineChars.get(char) + 1);
    } else {
      magazineChars.set(char, 1);
    }
  }
```
Within the for loop, we iterate through `magazine` for characters and add it into `magazineChars` hashmap. We use `.has` to look for existing characters in `magazine`. If a character is found, we update using `.set` and add to the count of that particualar character using `.get` and `+ 1` 

Now, it would know how many occurences of each character in magazine.


``` js
  for (const char of ransomNote) {
    if (magazineChars.get(char)) {
      magazineChars.set(char, magazineChars.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
  ```

  In the next for loop we look at `ransomNote`. Here we iterate through the string of characters. Once a character has been detected using `.get`, we use `.set` and within `.get` and `-1` to subtract from the count of occurence for each letter, once a letter has been found in `magazineChars`.

  Once `ransomNote` is fulfilled the output is `true`, otherwise `false`, if there are missing letters in `magazineChars`.














