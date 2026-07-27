//Find All Duplicate Elements in an Array

const number:number[]= [1, 2, 3, 2, 4, 1];
let duplicate:number[]=[];

for(let i=0;i<number.length;i++){
    for(let j=i+1; j<number.length; j++){
        if(number[i]===number[j] && !duplicate.includes(number[i])){
            duplicate.push(number[i])
        }
    }
}
console.log(number);
console.log(duplicate); 
  
// ----- Interview Questions -----
// Q1: What is a Set and how is it different from an Array?
// A1: Set stores only unique values. Array allows duplicates.
//     Set has .add(), .has(), .delete() — Array has .push(), .includes(), .splice().
//     Set is ordered but has no index positions.
//
// Q2: What does ... (spread operator) do here?
// A2: [...duplicates] converts the Set into a plain Array,
//     e.g., Set {2, 1} → Array [2, 1].
//
// Q3: Why use two Sets instead of two Arrays?
// A3: Set.has() is O(1) — instant lookup.
//     Array.includes() is O(n) — scans the whole array.
//     Set also auto-handles duplicates (you can't add the same value twice).
// ------------------------------

let arr = [1, 2, 3, 2, 4, 5, 1];     // Input array
let seen = new Set();                  // Tracks numbers we've visited once
let duplicates = new Set();            // Tracks numbers seen more than once

for (let num of arr) {                 // Loop through each value in arr
    if (seen.has(num)) {               // Already seen this number before?
        duplicates.add(num);           // Yes → it's a duplicate, add to Set
    } else {
        seen.add(num);                 // No → mark it as seen
    }
}
// If num appears 3+ times, duplicates.add() just ignores it (Set keeps unique values)

console.log([...duplicates]);          // Spread Set into Array for clean output