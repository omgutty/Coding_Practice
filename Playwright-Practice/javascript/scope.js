let emp= {
    name:"sukhi",
    greet(){
        console.log("Hi "+this.name);
    }
};

emp.greet();


let emp1= {
    name1: "om",
    greet1:()=>{
        console.log("Hi ", this.name1)
    }
};

emp1.greet1();
//"I don't create my own this.
//I'll take this from my surrounding lexical scope."

/**
 * Normal function: this is determined mainly by how the function is called.

Arrow function: this is determined by where the function is written — it lexically inherits this from the surrounding scope.
 */


let person = {
    name2: "Rahul",

    greet: function() {

        setTimeout(() => {
            console.log("Hello " + this.name2);
        }, 1000);
    }
};

person.greet();

/**
 * greet() gets:

this → person

The arrow function inside setTimeout inherits that this.


person.greet()
      │
      ↓
   this = person
      │
      ↓
setTimeout(() => {
      │
      └── arrow takes surrounding this
                │
                ↓
             person
})
 */