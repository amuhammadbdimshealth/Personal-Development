/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

/** LOGIC (Bad solution O(n^2))
 * Gradually increment the window size from 1 to the length of the list
 * Iterate over the list with the current window size
 * For each window find if the Sum of the current window => target
 * If yes, return the window size
 * If no, find sum for the next window size
 * Return 0 if no subarray is found in the process 
*/
const minSubArrayLen = function (list, target) {
    const listLength = list.length
    for (let winLen = 1; winLen <= listLength; winLen++) {            
        let winSum = 0
        for (let i = 0; i < winLen; i++) {
            i
            winSum += list[i]            
        }

        if (winSum >= target) return winLen;        
        else {
            for (let j = winLen; j < listLength ; j++) {
                let prevIndex = j - winLen
                winSum = winSum - list[prevIndex] + list[j]                
                if (winSum >= target) return winLen;     
            }
        }
    }
    return 0;

}

const res1 = minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
const res2 = minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
const res3 = minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
const res4 = minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
const res5 = minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
const res6 = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
const res7 = minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0 

res1
res2
res3
res4
res5
res6
res7