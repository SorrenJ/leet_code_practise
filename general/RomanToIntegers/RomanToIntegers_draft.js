var romanToInt = function(s) {
    

// I need a counter for every 5th or %5

// switch case for every %5?

// switch()

// a way to detect specific char string
//replace symbol with number
// convert to Number
// I need some way for it keep checking the the switch case
// detect a certain sequence of I or V or just convert these into numbers and add



// for (let i = 0; i < s.length; i++) {



switch(true){


case s.includes("I"):
sResult = s.replace("I", "1");
break;

case s.includes("V"):
sResult = s.replace("V", "5");
break;

case s.includes("X"):
sResult = s.replace("X", "10");
break;

case s.includes("L"):
sResult = s.replace("L", "50");
break;

case s.includes("C"):
sResult = s.replace("C", "100");
break;

case s.includes("D"):
sResult = s.replace("D", "500");
break;

case s.includes("M"):
sResult = s.replace("M", "1000");
break;
default:
sResult = s.replace("");
};


const convertToNum = Number(sResult);






};








// };


console.log(romanToInt("I"));
console.log(romanToInt("III"));