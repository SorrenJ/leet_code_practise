/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    

    //const ans = s.split('').reverse().join('');
    
    
    
    // 1. we must track vowels
    
    // 2. reverse only vowels in s
    
    // i dont think using s.reverse would work for this case
    
    let foundVowels = ['A','a','E','e','I','i','O','o','U','u'];
    
    let str = s.split("");

    let collectedVowels = [];

    // iterate through str array
    for (let i = 0; i < str.length; i++) {
 
       if (foundVowels.includes(str[i])) {
        collectedVowels.push(str[i]);
        }
    }
    
    // reverse the collectedVowels
    collectedVowels.reverse();
    console.log(collectedVowels);

    let vowelIndex = 0;

    for (let i = 0; i < str.length; i++) {

        if (foundVowels.includes(str[i])) {

         // replace a vowel in str with the reverse vowel 
            str.splice(i, 1, collectedVowels[vowelIndex]);
            vowelIndex++;
        }
    }

    return str.join("");
    
    };
    
    console.log(reverseVowels("IceCreAm")); 