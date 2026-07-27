//Remove duplicates and create a new array with unique elements

const numbers: number[] = [1, 2, 3, 2, 4, 1];
const unique: number[] = [];

for(let i=0;i<numbers.length;i++){
    if (!unique.includes(numbers[i])){
        unique.push(numbers[i])
    }
}

console.log("Original:", numbers);
console.log("Unique:  ", unique);


