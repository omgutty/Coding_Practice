/**
 * Write a Java program to reverse a given string.

Input: Java
Output: avaJ
 */



const readline=require("readline");
const string1=readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

string1.question("input:",(word)=>{
    let original= word;
    let reverseword='';

    for (let i=original.length-1;i>=0;i--){
        reverseword = reverseword + original[i];
    }
    console.log(reverseword)
    string1.close();
})

