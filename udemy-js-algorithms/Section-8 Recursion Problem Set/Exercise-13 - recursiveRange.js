/*
recursiveRange
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
*/

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
    if (num == 0) return 0
    return num + recursiveRange(num-1)
}


const res1 = recursiveRange(6) // 21
const res2 = recursiveRange(10) // 55 

res1
res2