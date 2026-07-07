/**
 * ==============================
 * PYRAMID PATTERN STAR PROGRAM
 * ==============================
 * 
 * What this program does:
 * -----------------------
 * This program takes a number 'n' from the user and prints a pyramid
 * pattern made of stars (*) with 'n' rows.
 * 
 * Example (Input: 3):
 * -------------------
 *      *       ← Row 1: 2 spaces + 1 star
 *     ***      ← Row 2: 1 space  + 3 stars
 *    *****     ← Row 3: 0 spaces + 5 stars
 * 
 * How the logic works:
 * --------------------
 * Each row has 3 parts:
 *   (A) Leading spaces → Center-aligns the stars. As row increases,
 *       spaces decrease. For row 'i' out of 'n', spaces = n - i.
 *   (B) Stars → Each row has odd number of stars: 1, 3, 5, 7...
 *       Formula: stars = (2 * rowNumber) - 1  [e.g., row 3 → 2*3-1 = 5]
 *   (C) Newline → console.log() automatically moves to next line.
 * 
 * Key takeaway:
 * -------------
 * Pyramid pattern = decreasing spaces + increasing odd-numbered stars.
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input: ", (answer) => {
    const num = parseInt(answer);

    // Outer loop: runs from row 1 to row 'num'
    for (let i = 1; i <= num; i++) {
        let pattern = "";

        // PART A: Add leading spaces to center-align the stars
        // Row 1 needs (n-1) spaces, Row 2 needs (n-2) spaces... Row n needs 0 spaces
        // Formula: number of spaces = total rows - current row number
        for (let j = 1; j <= num - i; j++) {
            pattern += " ";
        }

        // PART B: Add stars for this row
        // Star count follows odd numbers: 1, 3, 5, 7, 9...
        // Formula: stars = (2 * currentRow) - 1
        // Example: Row 3 → (2 * 3) - 1 = 5 stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            pattern += "*";
        }

        // Print the completed row (spaces + stars)
        console.log(pattern);
    }

    // Close the readline interface to allow the program to exit
    rl.close();
});