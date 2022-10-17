/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const notSame = i != j
            const equalToTarget = nums[i] + nums[j] == target
            if (notSame && equalToTarget) return [i, j];
        }
    }

};

var twoSum_OnePassMap = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}
console.log(twoSum([3, 3, 1, 7], 6))
console.log(twoSum_OnePassMap([3, 3, 1, 7], 6))