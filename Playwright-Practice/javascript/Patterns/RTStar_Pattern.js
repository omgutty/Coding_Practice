/**
 * Print a right triangle pattern using stars. For input n, print n rows where row i has i stars.

Input: 3
Output: * ** ***
 */

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Input: ", (answer)=>{
    const num=parseInt(answer);

    for (let i = 1; i <= num; i++){
        let pattern = "";
        for(let j=1;j<=i;j++){
              pattern += "*";
            }
        console.log(pattern);
    }
rl.close();
});
