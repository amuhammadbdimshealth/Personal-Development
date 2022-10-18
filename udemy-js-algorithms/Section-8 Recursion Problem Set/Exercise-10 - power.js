/*
power
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

power(2,0) // 1
power(2,2) // 4
power(2,4) // 16

*/

function power(base, exponent){
    if (exponent == 0) return 1
    return base * power(base, exponent-1)
}

const res1 = power(2,0) // 1
const res2 = power(2,2) // 4
const res3 = power(2,4) // 16


res1
res2
res3


