
/*

if common prefix return "fl"

if no common prefix return ""

Input: strs = ["flower","flow","flight"]


we split the words into chars and into its own array

the array of letters goes through a for loop

the for loop checks for consective patterns

we can use the commas as markers for a new word in split

so it can be like ["f","l","o","w","e","r",",","f" ...]

or we make each word a separate array instead of all together, with the spread operator

[["f","l","o","w","e","r"], ["f","l","o","w"], ...]

probably making each word a new array might be easier

as a reminder

nestedArray[1][0] // will print out f from the 2nd array

we loop througn an array

the loop through a sub array

but how do we compare a sub array with another subarray only at 
least 2 common elements consecutivley



*/

var longestCommonPrefix = function(strs) {
    
const text = strs;

const charArrays = text.split(" ").map(word => [...word]);

console.log(charArrays);




};

console.log(longestCommonPrefix("Hello World JavaScript"))