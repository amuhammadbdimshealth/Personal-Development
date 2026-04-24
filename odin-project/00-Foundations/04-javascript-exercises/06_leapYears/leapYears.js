const leapYears = function(year) {
    const divisibleBy100 = year % 100 == 0    
    const divisibleBy400 = year % 400 == 0    
    const divisibleBy4 = year % 4 == 0    
        
    if (divisibleBy100) {
        if (divisibleBy400) {
            return true;
        }
        else return false;
    } else if (divisibleBy4) {
        return true;
    }
    else return false;
};


const result2000 = leapYears(2000) // is a leap year: returns true
result2000
const result1985 = leapYears(1985) // is not a leap year: returns false
result1985
const result1996 = leapYears(1996) // toBe(true)
result1996
const result1997 = leapYears(1997) // toBe(false)
result1997
const result34992 = leapYears(34992) // toBe(true)
result34992
const result1900 = leapYears(1900) // toBe(false)
result1900
const result1600 = leapYears(1600) // toBe(true)
result1600
const result700 = leapYears(700) // toBe(false)
result700

// Do not edit below this line
module.exports = leapYears;
