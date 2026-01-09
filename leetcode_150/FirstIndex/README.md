Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

## Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

## Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.



## Solution

JavaScript .substring() Method
The .substring() method in JavaScript extracts a portion of a string between two specified indices and returns it as a new string.

### Basic Syntax:

``` js

str.substring(startIndex, endIndex)

```
Parameters:
startIndex (required): The index where extraction begins (inclusive)

endIndex (optional): The index where extraction ends (exclusive)
If omitted, extracts to the end of the string

### Step 1: Function Definition

``` js

var strStr = function(haystack, needle) {

 ```

haystack: The string to search in (e.g., "hello")

needle: The string to search for (e.g., "ll")



### Step 2: Handle Empty Needle

```js
if (needle === "") return 0;
```
If needle is empty, return 0 immediately (empty string is considered to be at the beginning)


### Step 3: Outer Loop Setup

``` js
for (let i = 0; i <= haystack.length - needle.length; i++) {

```
Loop variable: i represents the starting index in haystack

Loop condition: i <= haystack.length - needle.length

Example: haystack = "hello" (length 5), needle = "ll" (length 2)

5 - 2 = 3, so i goes from 0 to 3 (inclusive)

This prevents unnecessary checks: you can't find a 2-character substring starting at index 4 in a 5-character string

Valid starting positions: 0, 1, 2, 3

### Step 4: Substring Comparison

``` js
console.log(strStr("hello", "ll")); // Output: 2

```
For each position i:

Extract substring: haystack.substring(i, i + needle.length)

Start at index i

End at index i + needle.length (exclusive)

Compare with needle: Check if extracted substring equals needle

### Step 5: Walkthrough with Example

console.log(strStr("hello", "ll")); // Output: 2


Iteration 1: i = 0

``` text
haystack = "hello", needle = "ll"
i = 0
haystack.substring(0, 0 + 2) = haystack.substring(0, 2) = "he"
"he" === "ll" → false

```
Iteration 2: i = 1

``` text

i = 1
haystack.substring(1, 1 + 2) = haystack.substring(1, 3) = "el"
"el" === "ll" → false

```
Iteration 3: i = 2

``` text

i = 2
haystack.substring(2, 2 + 2) = haystack.substring(2, 4) = "ll"
"ll" === "ll" → true
return i → return 2

```
### Step 6: Return Values

``` js
return i;      // If needle found, return starting index
return -1;     // If loop completes without finding, return -1
```