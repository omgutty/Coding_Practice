/**
 * Write a program to remove all white spaces from a given string.
 *  Input: Hello World Java Output: HelloWorldJava
 */

const { stdout } = require("process");
const rl=require("readline");
const ip=rl.createInterface({
    input:process.stdin,
    output:process.stdout,
})

ip.question('input:',(answer)=>{
   // const inputstring= answer;
    const result = answer.replace(/\s+/g, "");

    console.log(result);
})