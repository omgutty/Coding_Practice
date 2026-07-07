
//Problem 1: 
// Write a JS program that takes a name as input and greets the user with 'Hello, [name]!'.
//Input: World
//Output: Hello, World!

const data = require('fs').readFileSync(0, 'utf8');
console.log(`Hello, ${data}!`);
const name = "World";
console.log(`Hello, ${name}!`);

/**
 * Problem 2:
 * Write a Java program that prints a multiplication table for a given number using printf formatting.

Input: 3
Output: 3 x 1 = 3 3 x 2 = 6 3 x 3 = 9 3 x 4 = 12 3 x 5 = 15 3 x 6 = 18 3 x 7 = 21 3 x 8 = 24 3 x 9 = 27 3 x 10 = 30
 */

//option 1
const number= 3;

for(let i=1; i<=10;i++){
    console.log(`${number}*${i}=${number*i}`)
}


//option 2
//taking input 
const fs= require('fs');
const num2= parseInt(fs.readFileSync(0,'utf8').trim());

for(let i=1; i<=10;i++){
    console.log(`${num2}*${i}=${num2*i}`)
}
