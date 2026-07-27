//Remove duplicates from original array and display which were removed

const numbers: number[] = [1, 2, 3, 2, 4, 1];
const removed: number[] = [];
const unique: number[] = [];

for (let i =0; i < numbers.length;i++){
    if(!unique.includes(numbers[i])){
        unique.push(numbers[i]);
    }else{
        if(!removed.includes(numbers[i])){
            removed.push(numbers[i])
        }
    }
}

console.log("Original:", numbers);
console.log("Unique:  ", unique);
console.log("Removed: ", removed);
