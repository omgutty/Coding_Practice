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



//second way to do 

/**
 * 1. Store all elements in a Set.
2. A Set automatically removes duplicate values.
3. Print the unique elements.
 */
let arr = [1,2,3,2,4,5,1];
let unique2 = [...new Set(arr)];
console.log(unique2);


