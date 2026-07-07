/**
 * Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.

Input: 5
Output: 1 2 Fizz 4 Buzz
 */


const readline = require('readline');

const RL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

RL.question("input :",(answer)=>{
    const number=parseInt(answer);

    for (let i=1 ; i <=number;i++) {
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz")
        }else{
            if (i%5===0){
                console.log("Buzz")
            }else{
                if(i%3===0){
                    console.log("Fizz")
                }else{
                    console.log(i)
                }
            }
        }
    }
RL.close();

})

