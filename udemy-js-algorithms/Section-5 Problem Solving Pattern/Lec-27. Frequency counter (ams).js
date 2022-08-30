const same = function (arr1, arr2) {
    const lengthArr1 = arr1.length    
    const lengthArr2 = arr2.length    
    
    if (lengthArr1 !== lengthArr2) return false
    
    const dict1 = {}
    const dict2 = {}
    for (let key in arr1) {
        key
        let e1  = arr1[key]
        let e2  = arr2[key] 

        if (dict1[e1]) dict1[e1].count++ 
        else {
            dict1[e1] = {}
            dict1[e1].count = 1
            dict1[e1].squared = e1 ** 2
        }

        if (dict2[e2]) dict2[e2].count++
        else {
            dict2[e2] = {}
            dict2[e2].count = 1            
        }
    }    
    
    for (let key in dict1) {        
        const prop = dict1[key].squared
        if (!(prop in dict2 && dict2[prop].count === dict1[key].count)) return false 
    }    
    return true
}
const res1 = same ([1,2,3,1], [4,1,9,1])
const res2 = same ([1,2,3], [1,9])
const res3 = same ([1,2,1], [4,4,1])

console.log(res1, res2, res3);
res1
res2
res3