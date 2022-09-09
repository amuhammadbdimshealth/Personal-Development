// Approach-1 
/** 
 * Insert into an object the value in current as a key if it already does not exist
 * Also increment uniqueCount by 1 for the first time
 * For other occurances of the same value skip the iteration  
*/
const countUniqueValues = function (list) {
    const uniqueValues = {}
    let uniqueCount = 0
    for (let value of list) {
        if (uniqueValues[value]) continue;
        else { 
            uniqueValues[value] = 1
            uniqueCount ++
        }
    }
    return uniqueCount;
}


// Approach-2 
/** 
 * Initialize 2 pointers pointing to the first 2 elements in the list
 * Move the 2nd pointer forwards looking for a value different to what the 1st pointer is holding
 * Whenever you come across a different value set the 1st pointer value to it
 * Otherwise keep moving the 2nd pointer forwards
*/
const countUniqueValues2 = function (list) {
    let i = 0
    let j = 1
    if (list.length == 0) return 0
    if (list.length == 1) return 1    
    while (j < list.length) {
        if(list[i] != list[j]) {            
            list[++i] = list[j]
        }
        j++;
    }
    return i + 1
}

const res1 = countUniqueValues([1,1,1,1,1,2,-2]) // 2
const res2 = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
const res3 = countUniqueValues([]) // 0
const res4 = countUniqueValues([-2,-1,-1,0,1]) // 4

const res5 = countUniqueValues2([1,1,1,1,1,2,-2]) // 2
// const res6 = countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]) // 7
// const res7 = countUniqueValues2([]) // 0
// const res8 = countUniqueValues2([-2,-1,-1,0,1]) // 4

res1
res2
res3
res4

res5
// res6
// res7
// res8