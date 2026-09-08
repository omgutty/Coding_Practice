//find largeset number 

let arr= [12,3,4,5,6,7]

//option 1
let largest= Math.max(...arr)
console.log(largest)

//option 2
let largest2 = arr[0]

for (let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest2=arr[i]
    }
}

console.log(largest2)

//smallest 

let arr2= [12,3,4,5,6,7]
let smallest = arr2 [0]

for (let i =1;i <arr2.length;i++){
    if (arr2[i]<smallest){
        smallest=arr2[i]
    }
}

console.log(smallest)

//ermove duplicate 
let arr3 = [1, 2, 2, 3, 4, 4, 5];
console.log([...new Set(arr3)]);

//count vowels

let str= "playwright"
let count= 0;

for  (let ch of str){
    if("aeiou".includes(ch.toLowerCase())){
        count++;
    }
}

console.log(count)

//reverse an array 

let arr4= [1,2,3,4,5,6]
console.log(arr4.reverse())

let reversearr4= [];

for (let i=arr4.length-1;i>=0;i--){
    reversearr4.push(arr4[i])
}

console.log(reversearr4)

for (let left = 0, right = arr4.length - 1; left < right; left++, right--) {
    [arr4[left], arr4[right]] = [arr4[right], arr4[left]];
}

console.log(reversearr4)

//find duplicate elements 


let arr5= [1,2,3,4,4,5,6,3];

let seen= new Set();
let duplicate= []

for (let item of arr5){
    if (seen.has(item)){
        duplicate.push(item)
    }else{
        seen.add(item)
    }
}
console.log(duplicate)

///

let arr6= [1,2,3,4,4,5,6,3];
let seen2= new Set()
let duplicate2= []
for (let ii of arr6){
    if (seen2.has(ii)){
        duplicate2.push(ii)
    }else{
        seen2.add(ii)
    }
}
console.log(duplicate2)

// ============================================================
// FIND DUPLICATE ELEMENTS — filter + indexOf approach
// ============================================================
// Goal: pick out every value that appears more than once in the array.
//
// How it works, line by line:
//
//   arr7.filter(callback)  -> builds a NEW array with only the elements
//                             for which the callback returns true.
//
//   (item, i)              -> the callback parameters:
//                             item = the current element of arr7
//                             i    = the index of that element in arr7
//
//   arr7.indexOf(item)     -> returns the index of the FIRST occurrence
//                             of item in the array.
//
//   arr7.indexOf(item) !== i
//                        -> "Is the first time this value appears somewhere
//                            else (not the current position)?" If yes, this
//                            is a duplicate, so we keep it.
//
// Walkthrough for arr7 = [1, 2, 3, 4, 4, 5, 6, 3]:
//   index 0 -> item 1, indexOf(1)=0, 0 !== 0 -> false, skipped (first time)
//   index 1 -> item 2, indexOf(2)=1, 1 !== 1 -> false, skipped (first time)
//   index 2 -> item 3, indexOf(3)=2, 2 !== 2 -> false, skipped (first time)
//   index 3 -> item 4, indexOf(4)=3, 3 !== 3 -> false, skipped (first time)
//   index 4 -> item 4, indexOf(4)=3, 3 !== 4 -> true , kept  (repeat of 4)
//   index 5 -> item 5, indexOf(5)=5, 5 !== 5 -> false, skipped (first time)
//   index 6 -> item 6, indexOf(6)=6, 6 !== 6 -> false, skipped (first time)
//   index 7 -> item 3, indexOf(3)=2, 2 !== 7 -> true , kept  (repeat of 3)
//
// Result: [4, 3]
//
// NOTE on output order: each duplicate is pushed on its SECOND (and later)
// occurrence, in the order it appears in arr7.
//
// PERFORMANCE: O(n^2) — indexOf() scans the array for every element, so this
// is fine for small arrays but slow for large ones. A Set-based loop (see
// the good option above) is O(n) and usually preferred for bigger data.
// ============================================================
let arr7= [1,2,3,4,4,5,6,3];
  let duplicates = arr7.filter((item, i) => arr7.indexOf(item) !== i);
    console.log(duplicates); // [4, 3]

    //