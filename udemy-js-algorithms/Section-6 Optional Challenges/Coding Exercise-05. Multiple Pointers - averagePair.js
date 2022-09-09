/**
Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)

Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

/** 
 * Logic :
 * Use 2 pointers to point to the start and end of the sorted list
 * When the sum is greater than target * 2, shift the end pointer to the left to a lesser value
 * When the sum is lesser than target * 2, shift the start pointer to the right to a higher value
 * Until the pointers index overlap 
*/
const averagePair = function (list, targetAvg) {
    let i = 0;
    let j = list.length - 1;
    while (i < j) {
        if (list[i] + list[j] == targetAvg * 2) return true;
        if (list[i] + list[j] > targetAvg * 2) --j;
        if (list[i] + list[j] < targetAvg * 2) ++i;
    }
    return false

};

const res1 = averagePair([1, 2, 3], 2.5) // true
const res2 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
const res3 = averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
const res4 = averagePair([], 4) // false

res1
res2
res3
res4