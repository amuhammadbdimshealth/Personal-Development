/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let mod,
        reverseNumber = 0,
        neg = 1
    if (x == 0) return 0;
    if (x < 0) {
        x = x * (-1);
        neg = -1
    }
    while (x > 0) {
        mod = x % 10;
        reverseNumber = (reverseNumber * 10) + mod;
        //console.log(x, mod, reverseNumber)
        x = Math.floor(x / 10);
    }
    // If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
    if (reverseNumber > Math.pow(2, 31) - 1) return 0;
    // Multiple by -1 if x is negative
    return reverseNumber * neg;
};

const x = -1534236469
console.log(reverse(x))