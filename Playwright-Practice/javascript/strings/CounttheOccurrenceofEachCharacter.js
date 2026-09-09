//Count the Occurrence of Each Character

//input : automation
/**output: a = 2
u = 1
t = 2
o = 2
m = 1
i = 1
n = 1

*/

// ----- Interview Questions (Loops) -----
// [for...of]
// Q1: What does for...of iterate over — keys or values?
// A1: VALUES. It gives each element in order.
//     Works on: Array, String, Map, Set, and other iterables.
//     for (let ch of "automation") → ch = "a", then "u", then "t" ... one by one.
//
// Q2: Can you use for...of on a plain object like {a:1, b:2}?
// A2: No. Objects are NOT iterable. You'll get TypeError. Use for...in instead.
//
// [for...in]
// Q3: What does for...in iterate over?
// A3: KEYS (property names / indices). On an array it gives indices (0,1,2...),
//     on an object it gives property names ("a", "b"...).
//
// Q4: Can you use for...in on a string?
// A4: Yes. for (let i in "abc") → i = "0", "1", "2" (indices as strings).
//     But not recommended — use for...of when you want characters.
//
// [for...of vs for...in - When to use what]
// Q5: When should I use for...of vs for...in?
// A5: Use for...of when you want VALUES (characters, elements).
//     Use for...in when you want KEYS/INDICES (property names, array indices).
//     for...of needs an iterable. for...in works on any object.
//
// [Behind the scenes]
// Q6: When we write for (let ch of str), does it automatically know
//     the string length and go character by character?
// A6: Yes. for...of internally gets an iterator from the string.
//     The iterator goes through each character one by one until
//     there are no more. Same for arrays — one element per iteration.
//     You don't need to manage an index or length manually.
//
// [Object {} as a Map]
// Q7: Why does if(count[ch]) work to check if a key exists?
// A7: If key doesn't exist, count[ch] is undefined → falsy.
//     If key exists, count[ch] is a number (1, 2...) → truthy.
//     But be careful: if count is 0, it's also falsy. Use
//     if (ch in count) or if (count[ch] !== undefined) to be safe.
// ------------------------------

// Input string — each character will be visited one by one via for...of
let str = "automation   ";
// Empty object to store character counts { char: count, ... }
let count = {};

// for...of gives each character value directly — no index needed
// Behind the scenes: the string creates an iterator that yields
// "a", then "u", then "t" ... until the string ends
for (let ch of str) {
    if (count[ch]) {
        // Key already exists → increment the count
        count[ch]++;
    } else {
        // Key doesn't exist yet → start count at 1
        count[ch] = 1;
    }
}

// for...in gives keys (property names) — perfect for objects
for (let key in count) {
    console.log(key + " = " + count[key]);
}
