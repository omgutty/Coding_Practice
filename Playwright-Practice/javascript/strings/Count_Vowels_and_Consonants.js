/**
 * Write a program to count the number of vowels and consonants in a given string.

Input: Programming
Output: Vowels: 3 Consonants: 8
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input: ", (answer) => {
   let vowels = 0
   let consonants = 0

   let word= answer;
    
   for(let i=0;i<=word.length-1;i++){
    let char=word[i].toLowerCase();
   if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
    ){
        vowels++;
    }
    else if (char >= 'a' && char <= 'z'){
        consonants++
    }
   }
   rl.close();
   console.log("Output: "`Vowels:${vowels}`, ` Consonants:${consonants}`)
});