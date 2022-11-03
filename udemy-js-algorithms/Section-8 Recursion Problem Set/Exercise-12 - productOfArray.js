/*
    productOfArray
    Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
    
    productOfArray([1,2,3]) // 6
    productOfArray([1,2,3,10]) // 60
*/

// Loop
const productOfArraySimple = function(numList) {
    // const numList = []
    let product = 1 
    numList.forEach(n => {
        product = product * n        
    })
    return product    
}

const res1 = productOfArraySimple([1,2,3]) // 6
const res2 = productOfArraySimple([1,2,3,10]) // 60

res1
res2

// Recursion
const productOfArray = function(numList) { 
    if(numList.length == 0) return 1       
    return numList[0] * productOfArray(numList.slice(1))
}

const res3 = productOfArray([1,2,3]) // 6
const res4 = productOfArray([1,2,3,10]) // 60

res3
res4
// res4