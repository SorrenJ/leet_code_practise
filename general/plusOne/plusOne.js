var plusOne = function(digits) {
 /*
I will join the array of numbers (removing the commas) then add 1. Convert it back to commas using split()

Must use BigInt to support large digits



 */


 let combDigits = digits.join('');

 let addOne = BigInt(combDigits) + 1n;

 let newArray = addOne.toString().split('').map(Number);

 return newArray;

};


console.log(plusOne([1,2,3]));

console.log(plusOne([4,3,2,1]));

console.log(plusOne([9]));