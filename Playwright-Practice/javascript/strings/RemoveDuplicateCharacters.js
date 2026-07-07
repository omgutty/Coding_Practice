/**
 * Medium
Strings
Write a program to remove duplicate characters from a string.

Input: programming
Output: progamin
 */


const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('Input:', (answer)=>{
    let original= answer;
    let result= '';
//Input: programming
//Output: progamin
    for(let i=0;i<=original.length-1;i++){
        
        if(!result.includes(original[i])) {
            result += original[i];
        }
        
    }
    console.log('Output:', result);
    rl.close()
})