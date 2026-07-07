/**
 * ==============================
 * RIGHT-ANGLE TRIANGLE STAR PATTERN
 * ==============================
 * 
 * What this program does:
 * -----------------------
 * This program takes a number 'n' from the user and prints a right-angle
 * triangle made of stars (*) with 'n' rows.
 * 
 * Example (Input: 3):
 * -------------------
 *     *          ← Row 1: 1 star
 *     **         ← Row 2: 2 stars
 *     ***        ← Row 3: 3 stars
 * 
 * How the logic works:
 * --------------------
 * This is the simplest star pattern:
 *   - For each row 'i', print exactly 'i' number of stars.
 *   - Row 1 → 1 star, Row 2 → 2 stars, Row 3 → 3 stars, etc.
 *   - Inner loop runs from 1 to the current row number.
 * 
 * Key takeaway:
 * -------------
 * Right triangle = stars increase linearly. Row number = number of stars in that row.
 */

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Input: ", (answer)=>{
    const num=parseInt(answer);

    // Outer loop: runs from row 1 to row 'num'
    for (let i = 1; i <= num; i++){
        let pattern = "";

        // Inner loop: add stars for this row
        // Row 'i' gets exactly 'i' stars
        // Example: Row 3 → loop runs j=1, j=2, j=3 → adds 3 stars
        for(let j=1;j<=i;j++){
              pattern += "*";
            }

        // Print the completed row of stars
        console.log(pattern);
    }
rl.close();
});
