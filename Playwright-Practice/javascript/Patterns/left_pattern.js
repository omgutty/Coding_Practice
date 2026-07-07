/**
 * Print a left-aligned triangle pattern. For input n, print n rows in reverse order.

Input: 3
Output: *** ** *
 */

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Input: ", (answer)=>{
    const num=parseInt(answer);

    for (let i=answer; i>=1; i--){
        let pattern = "";
        for (let j=1;j<=i;j++){
            pattern += "*";
        }

    console.log(pattern);
    }

});