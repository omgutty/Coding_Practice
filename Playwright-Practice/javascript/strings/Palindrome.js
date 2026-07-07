/**
 * Write a program to check if a given string is a palindrome (reads the same forwards and backwards).

Input: madam
Output: YES
 */
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input: ", (answer) => {
    let original = answer;
    let reverse = original.split("").reverse().join("");

    if (original === reverse) {
        console.log("Output: YES");
    } else {
        console.log("Output: NO");
    }

    rl.close();
});