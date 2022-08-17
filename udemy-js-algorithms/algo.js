const addUpTo = function (n) {
    let total = 0;
    let t1 = performance.now()
    for (let i = 1; i <= n; i++) {
        total += i
    }
    let t2 = performance.now()
    return {
        timeTaken: (t2 - t1)/1000,
        result: total
    };
} 
const addUpToM = function (n) {
    let total;
    let t1 = performance.now()
    total = n * (n+1) / 2
    let t2 = performance.now()
    return {
        timeTaken: (t2 - t1)/1000,
        result: total
    };
}
const n1 = addUpTo(100000000)
console.log(n1);
const n2 = addUpToM(100000000)
console.log(n2);