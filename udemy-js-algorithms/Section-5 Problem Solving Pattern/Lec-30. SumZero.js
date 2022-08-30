const sumZero = function () {
    return []
}

const res1 = sumZero([-4,-3,-2,-1,0,1,2,5]) // [-2,2]
const res2 = sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
const res3 = sumZero([-2,0,1,3]) // undefined
const res4 = sumZero([1,2,3]) // undefined

res1
res2
res3
res4