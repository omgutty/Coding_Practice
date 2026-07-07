/**
 * ==============================
 * FIZZBUZZ PROGRAM
 * ==============================
 * 
 * What this program does:
 * -----------------------
 * This program takes a number 'n' from the user and prints numbers
 * from 1 to 'n', but with these special rules:
 *   - If a number is divisible by 3 → print "Fizz" instead of the number
 *   - If a number is divisible by 5 → print "Buzz" instead of the number
 *   - If a number is divisible by BOTH 3 AND 5 → print "FizzBuzz"
 *   - Otherwise → print the number itself
 * 
 * Example (Input: 5):
 * ------------------
 *   Output:
 *     1
 *     2
 *     Fizz      ← 3 is divisible by 3
 *     4
 *     Buzz      ← 5 is divisible by 5
 * 
 * How FizzBuzz works (real-world analogy):
 * ----------------------------------------
 * Imagine counting items in a warehouse. Every 3rd item gets a red sticker ("Fizz"),
 * every 5th item gets a blue sticker ("Buzz"), and every 15th item (3×5) gets
 * a special gold sticker ("FizzBuzz"). Everything else gets no sticker (just the number).
 * 
 * How the logic works:
 * --------------------
 *   - A for loop runs from 1 to the user's number.
 *   - For each number, we check:
 *       (1) Is it divisible by BOTH 3 AND 5? → Print "FizzBuzz"
 *       (2) Otherwise, is it divisible by 5? → Print "Buzz"
 *       (3) Otherwise, is it divisible by 3? → Print "Fizz"
 *       (4) Otherwise → Print the number
 *   - Divisibility check: number % divisor === 0 means no remainder → perfectly divisible.
 *   - IMPORTANT: Check "FizzBuzz" (both conditions) FIRST! If we check 3 or 5 first,
 *     we'll print "Fizz" or "Buzz" and never reach the "FizzBuzz" case.
 * 
 * Key takeaway:
 * -------------
 * FizzBuzz teaches: loops, conditional logic (if/else), and the modulo operator (%).
 * The order of conditions matters - check the most specific case first!
 */

const readline = require('readline');

const RL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

RL.question("input :", (answer) => {
    const number = parseInt(answer);

    // Loop from 1 to the user's input number
    for (let i = 1; i <= number; i++) {

        // Check if divisible by BOTH 3 AND 5 (most specific condition FIRST!)
        // A number divisible by 15 is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");  // Divisible by 3 AND 5

        } else {
            if (i % 5 === 0) {
                console.log("Buzz");    // Divisible by 5 only

            } else {
                if (i % 3 === 0) {
                    console.log("Fizz");    // Divisible by 3 only

                } else {
                    console.log(i);           // Not divisible by 3 or 5
                }
            }
        }
    }
    RL.close();
})

