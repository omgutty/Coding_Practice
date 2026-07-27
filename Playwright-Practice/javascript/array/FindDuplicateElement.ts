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
  
