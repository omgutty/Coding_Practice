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