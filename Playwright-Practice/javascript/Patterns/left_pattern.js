/**
 * ==============================
 * LEFT-ALIGNED REVERSE TRIANGLE STAR PATTERN
 * ==============================
 * 
 * What this program does:
 * -----------------------
 * This program takes a number 'n' from the user and prints a left-aligned
 * triangle in REVERSE order (descending rows). Starts with n stars and
 * decreases by 1 star each row.
 * 
 * Example (Input: 3):
 * -------------------
 *     ***        ← Row 1: 3 stars
 *     **         ← Row 2: 2 stars
 *     *          ← Row 3: 1 star
 * 
 * How the logic works:
 * --------------------
 * This is like the right-angled triangle but INVERTED:
 *   - Outer loop runs from n DOWN TO 1 (decreasing).
 *   - For each row 'i', print exactly 'i' number of stars.
 *   - Row 1 → n stars, Row 2 → (n-1) stars, Row n → 1 star.
 * 
 * Key takeaway:
 * -------------
 * Reverse triangle = descending loop from n to 1, stars = current row number.
 */

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Input: ", (answer)=>{
    const num=parseInt(answer);

    // Outer loop: runs from 'num' DOWN TO 1 (decreasing order)
    // Example for num=3: loop runs for i=3, i=2, i=1
    for (let i=num; i>=1; i--){
        let pattern = "";

        // Inner loop: add stars for this row
        // Row with value 'i' gets exactly 'i' stars
        // Example: i=3 → adds 3 stars, i=2 → adds 2 stars, i=1 → adds 1 star
        for (let j=1;j<=i;j++){
            pattern += "*";
        }

        // Print the completed row of stars
        console.log(pattern);
    }

    rl.close();
});