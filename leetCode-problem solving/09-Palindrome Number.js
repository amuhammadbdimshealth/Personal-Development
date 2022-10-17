/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xstr = x.toString();
    for (let i = 0; i < Math.floor(xstr.length / 2); i++) {
        //console.log(xstr[i], xstr[xstr.length - 1 - i])
        if (xstr[i] != xstr[xstr.length - 1 - i]) return false
    }
    return true
};

// 121
// -121
// 10
// -101
// Input: x = 121
// Output: true
const x = -121
console.log(isPalindrome(x))