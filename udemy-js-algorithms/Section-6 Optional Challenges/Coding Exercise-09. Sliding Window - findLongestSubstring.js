/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6

Time Complexity - O(n)
*/

/** LOGIC :  
 * t	h	e	c	a	t	i	n	t	h	e	h	a        t	
 * Initialise a sliding window with length of 1 char
 * Gradually increment the window size until you find a character which already exist in the current window. Save the window size till that point.
 * Since now you dont have a chance of getting a distinct substring if you proceed, 
 * shift the starting position of the substring to the index which is next to the position of the duplicate char
 * Then repeat the same process of gradually incrementing the window size until a duplicate char is reached. Save the window size each time you encounter a duplicate char.
 * End the search until the window end index reaches the end of the array.

*/
const findLongestSubstring = function (string) {    
    let windowStartIndex = 0
    let windowEndIndex = 0
    let longestStringDict = {}
    const lastIndex = string.length - 1 
    let longestSubString = {str:'', len:0}

    while (windowStartIndex <= lastIndex && windowEndIndex <= lastIndex) {
        const chr = string[windowEndIndex]        
        if (!longestStringDict[chr]) {
            longestStringDict[chr] = {}
            longestStringDict[chr] = {count:1, index:windowEndIndex}    

            // if end of string check for longest string 
            if (windowEndIndex == lastIndex) {
                // longestStringDict
                // save window size 
                const str = Object.keys(longestStringDict).join('')
                const len = Object.keys(longestStringDict).length                           
                if (len > longestSubString.len) longestSubString = {str, len}      
            }      
        }
        // duplicate
        else if (longestStringDict[chr]){            
            
            // longestStringDict
            // save window size 
            const str = Object.keys(longestStringDict).join('')
            const len = Object.keys(longestStringDict).length 
            const duplicateIndex =   longestStringDict[chr].index                
            if (len > longestSubString.len) longestSubString = {str, len}            
            // longestSubString
            // duplicateIndex
                        
            // delete from the longestStringDict all the chars before the duplicate 
            var allDels = []        
            for (var [key, e] of Object.entries(longestStringDict)) {                        
                if (e.index <= duplicateIndex) {                    
                    const toDeleteChar = key
                    allDels.push(toDeleteChar)
                    // toDeleteChar
                    delete longestStringDict[toDeleteChar]
                }
            }                                            
            // allDels
            // longestStringDict
            
            // insert the current char into the Dictionary
            longestStringDict[chr] = {count:1, index:windowEndIndex}
            
            // shift the start of the window to next index of the duplicate char            
            windowStartIndex = longestStringDict[chr].index + 1            
        }   
        
        windowEndIndex++;
    }
    return longestSubString.len;
}

const res1 = findLongestSubstring('') // 0
const res2 = findLongestSubstring('rithmschool') // 7
const res3 = findLongestSubstring('thisisawesome') // 6
const res4 = findLongestSubstring('thecatinthehat') // 7
// const res4 = findLongestSubstring('thecat') // 7
const res5 = findLongestSubstring('bbbbbb') // 1
const res6 = findLongestSubstring('longestsubstring') // 8
const res7 = findLongestSubstring('thisishowwedoit') // 6

res1
res2
res3
res4
res5
res6
res7