
/* convert integer to char 


then use reverse function

convert back to integer

I need to handle negative numbers too


*/


var reverse = function(x) {
    let str = x.toString();

    let reversedStr = str.split('').reverse().join('');

    let reversedInt = parseInt(reversedStr);

// makes any reversed negative numbers negative again
    if (x < 0) {
        reversedInt = -reversedInt;
    }
    
 
// check for 32 bit signed integer range
    if (reversedInt < -2147483648 || reversedInt > 2147483647) {
        return 0;
    }

    return reversedInt;


};



console.log(reverse(-123));  //-321