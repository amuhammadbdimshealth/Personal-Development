/** 
 * Write a function which accepts an array of Integers and a number n and returns the max sum of n consecutive elements in the array
*/
const maxSubarraySum = function (list, n) {    
    
    const len = list.length;
    let windowSum = 0;
    let max = -Infinity;     
    if (len == 0) return null;
    
    for (let index in list) {        
        index = parseInt(index)
        let windowEndIndex = index + n ;                
        if((windowEndIndex) > len) return max;
        else {                             
            windowSum = getWindowSum(index, windowEndIndex, list, windowSum)                
            if (windowSum > max) max = windowSum
        }
    }
    return max; 
}

const getWindowSum = function (start, end, array, prevWindowSum) {
    // check sum of next n numbers for the first index      
    // for index > 1 calc sum by using the previous window sum, the previous element, the new element    
    const endIndex = end - 1
    let sum = 0;
    if (start == 0) {
        for (let i = start; i <= endIndex; i++) {                
            sum += array[i]        
        }
    }
    else if (start > 0) {
        const prevElement = array[start - 1] 
        const windowLastElement = array[endIndex] 
        sum = prevWindowSum - prevElement + windowLastElement        
    }
    return sum;
}

const res1 = maxSubarraySum([1,2,5,2,8,1,5],2) // 10
const res2 = maxSubarraySum([1,2,5,2,8,1,5],4) // 17
const res3 = maxSubarraySum([4,2,1,6,2],1) // 6
const res4 = maxSubarraySum([4,2,1,6,2],4) // 13
const res5 = maxSubarraySum([],4) // null

res1
res2
res3
res4
res5