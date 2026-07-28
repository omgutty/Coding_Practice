let a = 10;
let b = a;


console.log(a); // 10
console.log(b); // 20

const user1 = {
    name: "Om"
};

const user2 = user1;

user2.name = "John";

console.log(user1.name); // John
console.log(user2.name); // John

let user11= {
    name: "om",
    age:36
};
let user22=user11;

user22.name= "Gutty";

console.log(user11.name);
console.log(user22.name);