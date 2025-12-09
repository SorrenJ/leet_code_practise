


/*

spaces don't count for the last word

for loop to iterate s

detect last word

how?

split by spaces, remove extra spaces, 
store each word in array

-> check for last array element

count chars in last array element



*/


var lengthOfLastWord = function(s) {
    
 let sArray = s.split(" ");

  let spaceFree = sArray.filter(item => item.trim().length > 0);
//  console.log(spaceFree);
    for (let i = 0; i < spaceFree.length; i++){
        let lastWord = spaceFree[spaceFree.length - 1];
    //    console.log(lastWord);
       let lastwordArray = lastWord.split("");
    //    console.log(lastwordArray);
       let count = lastwordArray.length;
       return count;
    }

};

console.log(lengthOfLastWord("Hello World"));

console.log(lengthOfLastWord( "   fly me   to   the moon  "));

console.log(lengthOfLastWord("luffy is still joyboy"));

