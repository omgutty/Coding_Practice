//Pass by Value (Primitive Types)
let a=10;
let b= a;
b=20;
console.log(a);//10
console.log(b);//20

//pass by reference 
const user1 = {
    name: "Om"
};

const user2 = user1;

user2.name = "John";

console.log(user1.name); // John
console.log(user2.name); // John

//another example with array 
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);//[1234]

//function example primitive 
function changeValue(xx) {
    xx = 100;
}

let number = 10;

changeValue(number);

console.log(number);//10

//function with object 

function changeUser(user) {
    user.name = "John";
}

const person = {
    name: "Om"
};

changeUser(person);
//john
console.log(person.name);//


//pw example 
async function updateUser(user) {
    user.name = "Admin";
}

const testUser = {
    name: "Guest"
};

await updateUser(testUser);

console.log(testUser.name);//Admin

//compare with string 
function updateTitle(title) {
    title = "Dashboard";
}

let pageTitle = "Login";

updateTitle(pageTitle);

console.log(pageTitle); //Login