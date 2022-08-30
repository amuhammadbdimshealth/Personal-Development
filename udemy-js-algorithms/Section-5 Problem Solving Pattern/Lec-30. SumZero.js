// Thinking ...
// initialize 2 pointers: 1st at the beginning, 2nd at the end 
// for values at both pointer position do 
    // check if sum is zero. return if true
    // if sum greater than 0, shift the 2nd pointer backwards to point to a lesser value
    // if sum lesser than 0, shift the 1st pointer forwards to point to a higher value
const sumZero = function (list1) {
    const list = [...list1]
    list
    let head = 0 
    let tail = list.length - 1  
    while (head < tail) {
        
        const headValue = list[head]
        const tailValue = list[tail]        
        if (headValue + tailValue === 0) return [headValue, tailValue]
        else if (headValue + tailValue > 0) {
            tail--;
        }
        else if (headValue + tailValue < 0) {
            head++
        }
    }
    return undefined;    
}

const res1 = sumZero([-4,-3,-2,-1,0,1,2,5]) // [-2,2]
const res2 = sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
const res3 = sumZero([-2,0,1,3]) // undefined
const res4 = sumZero([1,2,3]) // undefined

// Quokka : 
res1
res2
res3
res4