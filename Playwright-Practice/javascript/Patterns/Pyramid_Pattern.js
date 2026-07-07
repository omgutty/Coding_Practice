/**
 * Print a pyramid pattern using stars.
 * Input: 3
 * Output:
 *   *
 *  ***
 * *****
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input: ", (answer) => {
    const num = parseInt(answer);

    for (let i = 1; i <= num; i++) {
        let pattern = "";

        // Leading spaces
        for (let j = 1; j <= num - i; j++) {
            pattern += " ";
        }

        // Stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            pattern += "*";
        }

        console.log(pattern);
    }

    rl.close();
});