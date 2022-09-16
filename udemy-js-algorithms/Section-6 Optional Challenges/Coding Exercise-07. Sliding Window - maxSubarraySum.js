/*
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

// LOGIC  :
// do the sum of the first n elements
// then iterate over the list starting from n + 1
// update max when sum > max
// once you reach the end of the list, return max

const maxSubarraySum = function (list, len) {
    let max = -Infinity;
    if (len > list.length) return null;
    let sum = 0

    for (let i = 0; i < len; i++) {
        sum += list[i]
    }
    if (sum > max) max = sum
    
    for (let j = len; j < list.length; j++) {
        // get the sum of len number for each iteration 
        // j
        let prevIndex = j - len
        // prevIndex
        sum = sum - list[prevIndex] + list[j]
        if (sum > max) max = sum
        // max                   
    }

    return max;
}

const res1 = maxSubarraySum([100, 200, 300, 400], 2) // 700
const res2 = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39 
const res3 = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
const res4 = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
const res5 = maxSubarraySum([2, 3], 3) // null

res1
res2
res3
res4
res5