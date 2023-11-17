const sumAll = function(start, end) {
    const ts = typeof start
    const te = typeof end    
    let result = 0;
    if (!(ts === 'number' && te === 'number' && start >= 0 && end >=0)) {
        return 'ERROR'
    }
    else {
        if (start > end) {
            const temp = end;
            end = start;
            start = temp;
        }
        result = 0; 
        for (let index = start; index <= end; index++) {            
            index
            result += index
            result
        }
        return result;
    }
};
let result;
result = sumAll(1, 4)
result
result = sumAll(1, 4000)
result
result = sumAll(123, 1)
result
result = sumAll(-10, 4)
result
result = sumAll(10, "90")
result
result = sumAll(10, [90, 1])
result
// Do not edit below this line
module.exports = sumAll;
