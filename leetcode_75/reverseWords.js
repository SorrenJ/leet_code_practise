/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    // remove extra whitespaces from the start and end of the string and split by spaces
    let str = s.trim().split(" ");
    
    let reverseStr = str.reverse();

    // console.log(reverseStr);

    // .filter creates new array containing only elements that pass the condition
    // item => item.trim() !== ""
    // !== "" filters out empty values.
    // .filter() only keeps elements where the condition evaluates to true.
/*
function(item) {
    return item.trim() !== "";
}
*/  
// .trim() removes whitespace from both ends of a string
    // 

    let removeSpaces = reverseStr.filter(item => item.trim() !== ""); // Remove all occurrences of ' '
    
    let result = removeSpaces.join(" ");
    
    return result;
    };
   
    console.log(reverseWords("a good   example"));