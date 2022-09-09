/**
Multiple Pointers - isSubsequence :
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

const isSubsequence = function (searchStr, matchStr) {
    searchStr
    matchStr
    for (let i in matchStr) {
        let subStr = ''        
        for (let j in searchStr) {
            // for each i check the next j chars 
            const k = (+j) + (+i)                        
            subStr += matchStr[k]
        }
        subStr
        searchStr
        if (subStr == searchStr) return true
    }
    return false

}
const res1 = isSubsequence('hello', 'hello world'); // true
// TODO: consider this input. The subSequence need not occur in consecutive order.
const res2 = isSubsequence('sing', 'sting'); // true
const res3 = isSubsequence('abc', 'abracadabra'); // true
const res4 = isSubsequence('abc', 'acb'); // false (order matters)

res1 
res2