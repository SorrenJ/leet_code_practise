function isPalindrome(s: string): boolean {
    let stringLower: string = s.toLowerCase();

    // we make the variable matches to handle null string values
    let matches = stringLower.match(/[a-z0-9]/g);
    
    let cleanedString: string = matches ? matches.join('') : '';

    let reverseString: string = cleanedString.split("").reverse().join("") || '';

    if (cleanedString === reverseString) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));