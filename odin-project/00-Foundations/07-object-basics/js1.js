/*
As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

Take in an array.
For every even number, it will triple it.
Then it will sum all those even numbers.
*/

const sumOfTripledEvens = (list) => {
    let sum = 0;
    list.forEach(el => {
        const isEven = (el % 2 == 0);
        sum = isEven ? (el * 3) + sum : sum;
    });
    return sum;
} 


const sumOfTripledEvens2 = (list = []) => {
    return list
        .filter(el => el % 2 == 0)
        .map(el => el * 3)
        .reduce((total, el) => {        
            return total + el
        }, 0)
} 

const result = sumOfTripledEvens([1,2,3,4,5,6,7,8])
const result2 = sumOfTripledEvens2([1,2,3,4,5,6,7,8])