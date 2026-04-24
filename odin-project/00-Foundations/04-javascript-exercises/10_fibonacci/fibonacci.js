const fibonacci = function(num) {        
    if (num <= 0) return "OOPS";
    if(num <= 2) {
        return 1;
    } 
    else {
        num = num - 1        
        const curr = fibonacci(num);
        const prev = fibonacci(num-1);        
        return prev + curr;
    }
};
// const result = fibonacci(6);
// result

// Do not edit below this line
module.exports = fibonacci;
