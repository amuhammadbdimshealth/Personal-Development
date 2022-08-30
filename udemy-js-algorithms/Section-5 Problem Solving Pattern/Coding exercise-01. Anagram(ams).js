const validAnagram = function (firstWord, secondWord) {
    const firstWordLength = firstWord.length        
    const secondWordLength = secondWord.length    
    
    if (firstWord == secondWord) return true
    if (firstWordLength !== secondWordLength) return false
    
    const dict1 = {}
    const dict2 = {}

    for (let key in firstWord) {        
        let e1  = firstWord[key]        
        let e2  = secondWord[key] 

        if (dict1[e1]) dict1[e1].count++ 
        else {
            dict1[e1] = {}
            dict1[e1].count = 1            
        }

        if (dict2[e2]) dict2[e2].count++
        else {
            dict2[e2] = {}
            dict2[e2].count = 1            
        }
    }            
    for (let key in dict1) {       
        if (!(key in dict2 && dict2[key].count === dict1[key].count)) return false         
    }
    return true    
}
const res1 = validAnagram('', '') // true
const res2 = validAnagram('aaz', 'zza') // false
const res3 = validAnagram('anagram', 'nagaram') // true
const res4 = validAnagram("rat","car") // false) // false
const res5 = validAnagram('awesome', 'awesom') // false
const res6 = validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
const res7 = validAnagram('qwerty', 'qeywrt') // true
const res8 = validAnagram('texttwisttime', 'timetwisttext') // true

// Quokka : 
res1
res2
res3
res4
res5
res6
res7
res8