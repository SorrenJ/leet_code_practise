var isPalindrome = function(s) {

const lowString = s.toLowerCase();

const cleanedS = lowString.replace(/[^a-zA-Z0-9]/g, '');

const reverseS = cleanedS.split('').reverse().join('');

if (cleanedS === reverseS){
    return true;
} else {
    return false;
}

}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));