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