const removeFromArray = function(array, ...args) {
    const result = array.filter(el => !args.includes(el))
    array
    arguments
    return result
    
};


let result = removeFromArray([1,2,3,4],3)
result
result = removeFromArray([1, 2, 3, 4], 3, 2)
result
result = removeFromArray([1, 2, 3, 4], 7, "tacos")
result
result = removeFromArray([1, 2, 3, 4], 7, 2)
result
result = removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)
result
result = removeFromArray(["hey", 2, 3, "ho"], "hey", 3)
result
result = removeFromArray([1, 2, 3], "1", 3)
result
// Do not edit below this line
module.exports = removeFromArray;
