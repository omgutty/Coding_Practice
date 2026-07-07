
/**
 * ==============================
 * PROBLEM 1: GREETING PROGRAM
 * ==============================
 * 
 * What this program does:
 * -----------------------
 * This program takes a name as input from the user and prints
 * a greeting message: "Hello, [name]!".
 * 
 * Example:
 *   Input:  World
 *   Output: Hello, World!
 * 
 * How it works:
 * ------------
 *   - readFileSync(0, 'utf8') reads text input from the command line
 *     (file descriptor 0 = stdin / standard input).
 *   - The input is inserted into the greeting using a template literal.
 * 
 * This version demonstrates reading input synchronously from stdin
 * using Node.js File System (fs) module.
 */

// Read input from the command line (stdin) synchronously
const data = require('fs').readFileSync(0, 'utf8');
console.log(`Hello, ${data}!`);

// Alternative: Hardcoded example (no input required)
const name = "World";
console.log(`Hello, ${name}!`);


/**
 * ==============================
 * PROBLEM 2: MULTIPLICATION TABLE
 * ==============================
 * 
 * What this program does:
 * -----------------------
 * This program prints the multiplication table for the number 3
 * from 1 to 10.
 * 
 * Example Output:
 *   3 x 1 = 3
 *   3 x 2 = 6
 *   3 x 3 = 9
 *   3 x 4 = 12
 *   3 x 5 = 15
 *   3 x 6 = 18
 *   3 x 7 = 21
 *   3 x 8 = 24
 *   3 x 9 = 27
 *   3 x 10 = 30
 * 
 * How it works:
 * ------------
 *   - A for loop runs from i=1 to i=10 (total 10 iterations).
 *   - In each iteration, it calculates: number × i.
 *   - Template literal `${}` is used to embed variables in the output string.
 * 
 * OPTION 1: Uses a hardcoded number (3).
 * OPTION 2: Takes the number as input from the user.
 */

// ============ OPTION 1: Hardcoded Number ============

const number = 3;

// Loop from 1 to 10 to print multiplication table
for (let i = 1; i <= 10; i++) {
    // Print: "3 * 1 = 3", "3 * 2 = 6", etc.
    console.log(`${number}*${i}=${number * i}`);
}


// ============ OPTION 2: User Input Number ============

// Read user input from command line and convert to number
const fs = require('fs');
const num2 = parseInt(fs.readFileSync(0, 'utf8').trim());

// Loop from 1 to 10 to print multiplication table for user's number
for (let i = 1; i <= 10; i++) {
    console.log(`${num2}*${i}=${num2 * i}`);
}
