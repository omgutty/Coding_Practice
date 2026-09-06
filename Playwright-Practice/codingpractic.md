1. Reverse a string
let str = "playwright";
console.log(str.split("").reverse().join(""));

Output: thgirwyalp

2. Check palindrome
let str = "madam";
let rev = str.split("").reverse().join("");

console.log(str === rev);

Output: true

3. Find largest number
let arr = [10, 25, 5, 40, 15];
console.log(Math.max(...arr));

Output: 40

4. Find smallest number
let arr = [10, 25, 5, 40, 15];
console.log(Math.min(...arr));

Output: 5

5. Remove duplicates
let arr = [1, 2, 2, 3, 4, 4, 5];
console.log([...new Set(arr)]);

Output: [1, 2, 3, 4, 5]

6. Count vowels
let str = "playwright";
let count = 0;

for (let ch of str) {
    if ("aeiou".includes(ch)) count++;
}

console.log(count);

Output: 2

7. Reverse an array
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

Output: [5, 4, 3, 2, 1]

8. Find duplicate elements
let arr = [1, 2, 3, 2, 4, 3];

let duplicates = arr.filter((value, index) =>
    arr.indexOf(value) !== index
);

console.log([...new Set(duplicates)]);

Output: [2, 3]

9. Swap two numbers
let a = 10, b = 20;

[a, b] = [b, a];

console.log(a, b);

Output: 20 10

10. Check even or odd
let num = 10;

console.log(num % 2 === 0 ? "Even" : "Odd");

Output: Even

11. Factorial
let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);

Output: 120

12. Fibonacci series
let a = 0, b = 1;

for (let i = 0; i < 7; i++) {
    console.log(a);
    [a, b] = [b, a + b];
}

Output:

0
1
1
2
3
5
8
13. Find sum of array
let arr = [10, 20, 30, 40];

console.log(arr.reduce((sum, n) => sum + n, 0));

Output: 100

14. Count characters
let str = "hello";
let count = {};

for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
}

console.log(count);

Output:

{ h: 1, e: 1, l: 2, o: 1 }
15. Find second largest
let arr = [10, 5, 20, 8, 20, 15];

let unique = [...new Set(arr)].sort((a, b) => b - a);

console.log(unique[1]);

Output: 15