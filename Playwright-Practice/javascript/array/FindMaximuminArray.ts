/**
 * Find and print the maximum element in an array of integers.

Input: 4 10 5 8 3
Output: 10
 */


const number:number[]= [4,10,5,8,3];

let maxnumber:number=number[0];

for (let i=0; i<number.length;i++){
    if(number[i]>maxnumber){
        maxnumber=number[i]
    }
}

console.log(`Output: `,maxnumber)


/**Find duplicate elements in an array.
Input: [1, 2, 3, 2, 4, 1]
Output: 1, 2

*/
const number2:number[]= [1, 2, 3, 2, 4, 1];
let duplicate:number[]=[];

for (let i=0;i<number2.length;i++){
    for (let j=i+1; j<number2.length; j++){
        if (number2[i]===number2[j] && !duplicate.includes(number2[i])){
            duplicate.push(number2[i])
        }
    }
}
console.log(duplicate);
//first number compare with every number and if in duplicate recrod dont have that number, then only push 


/**

Find the third largest number in an array.

[5,10,2,85,19]

*/

const number3 :number[]= [5,10,2,85,19];

let thirdlargest:number;

for(let i=0;i<number3.length;i++){

}


//dont know, need to explore 
// solution 
const numbers: number[] = [5, 10, 2, 85, 19];

let first = Number.NEGATIVE_INFINITY;
let second = Number.NEGATIVE_INFINITY;
let third = Number.NEGATIVE_INFINITY;

for (const num of numbers) {
    if (num > first) {
        third = second;
        second = first;
        first = num;
    } else if (num > second) {
        third = second;
        second = num;
    } else if (num > third) {
        third = num;
    }
}

console.log("Third Largest:", third);
