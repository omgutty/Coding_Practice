/**
 * Reverse a string while preserving white space positions.
 * Only non-space characters are reversed; spaces stay at their original indices.

Input: ab c
Output: cb a
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question("input: ", (str) => {
//     // Collect non-space characters
//     const chars = [];
//     for (let ch of str) {
//         if (ch !== ' ') chars.push(ch);
//     }
//     // Reverse the non-space characters
//     chars.reverse();

//     // Build result: spaces stay, non-spaces take from reversed list
//     let result = '';
//     let idx = 0;
//     for (let ch of str) {
//         if (ch === ' ') {
//             result += ' ';
//         } else {
//             result += chars[idx];
//             idx++;
//         }
//     }
//     console.log(result);
//     rl.close();
// });

rl.question("input", (str)=>{
    const arr= str.split('');
    let left= 0;
    let right= arr.length-1;

    while (left<right){
        if(arr[left]=== ' '){
            left++;
        } else if (arr[right]===' '){
            right--;
        }else{
            [arr[left],arr[right]]=[arr[right],arr[left]]
            left++;
            right--;
        }
    }

    //by using joing it will print as single string, or else it will print with commas as we are used array of characters
    console.log(arr.join(''));
    rl.close();
   
})
