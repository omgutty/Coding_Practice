//4. Find the Earliest Version Number
/**
 * input :2.03.40
2.3.5
2.10.1
1.99.99

output: 1.99.99
 */

// ----- Interview Questions (Concepts Used) -----
// [Number()]
// Q1: What does Number("03") return? What about Number("abc") or Number(undefined)?
// A1: 3, NaN, NaN. Number() converts a value to a number. Leading zeros are ignored.
//     Non-numeric strings and undefined give NaN.
//
// Q2: What's the difference between Number() and parseInt()?
// A2: Number("3.14") → 3.14, parseInt("3.14") → 3 (stops at decimal).
//     parseInt("10px") → 10, Number("10px") → NaN.
//     parseInt can take a radix: parseInt("A", 16) → 10.`
//
// [.split()]
// Q3: What does "a,b,c".split(",") return? What about "hello".split("")?
// A3: ["a", "b", "c"] and ["h", "e", "l", "l", "o"].
//     Empty separator splits by character.
//
// Q4: What does "a..b".split(".") return?
// A4: ["a", "", "b"]. Empty strings are kept between consecutive separators.
//
// [for loop & break]
// Q5: What does break do inside a nested loop?
// A5: It exits only the innermost loop. The outer loop continues.
//
// [let vs const]
// Q6: Why is earlist declared with let instead of const?
// A6: Because earlist gets reassigned inside the loop. const cannot be reassigned.
// ------------------------------

let versions = ["2.03.40", "2.3.5", "2.10.1", "1.99.99"];

// Assume the first version is the earliest — we'll update it if we find a smaller one
let earlist = versions[0];

// Loop through remaining versions (starting from index 1)
for (let i = 1; i < versions.length; i++) {
    // Split both the current version and the current earliest into parts
    // "2.03.40" → ["2", "03", "40"]
    // "1.99.99" → ["1", "99", "99"]
    let current = versions[i].split(".");
    let first = earlist.split(".");

    // Compare each part (major, minor, patch)
    for (let j = 0; j < 4; j++) {
        // Convert string to number — "03" → 3
        // This is critical: "03" < "3" is true in string comparison, which is wrong
        let currentpart = Number(current[j]);
        let firstpart = Number(first[j]);

        if (currentpart < firstpart) {
            // Current version is smaller → this is the new earliest
            earlist = versions[i];
            break; // No need to check remaining parts
        } else if (currentpart > firstpart) {
            // Current version is larger → keep the current earliest
            break; // No need to check remaining parts
        }
        // If equal (e.g., both have major version "2"), loop continues to next part
    }
}

console.log(earlist);

