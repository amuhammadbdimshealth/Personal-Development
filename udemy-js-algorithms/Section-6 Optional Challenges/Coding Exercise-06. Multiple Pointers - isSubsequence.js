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

// Thinking the logic (ams) :
// initialize the pointers to the beginning of the strings
// iterate the matchStr    
// move to next char in searchStr only if current char in searchStr matches with current char in matchStr, and continue matching 
// if you reach the matchStr End point before searchStr ends, return false (outside the while loop)

const isSubsequence = function (searchStr, matchStr) {
    let pointerSearchStr = 0;
    let pointerMatchStr = 0;
    while (pointerMatchStr <= matchStr.length - 1) {               
        if (searchStr[pointerSearchStr] == matchStr[pointerMatchStr]) {                 
            pointerSearchStr++;            
        }        
        if (pointerSearchStr == searchStr.length) {
            return true
        }
        pointerMatchStr++;
    }
    return false;

}
const res1 = isSubsequence('hello', 'hello world'); // true
const res2 = isSubsequence('sing', 'sting'); // true
const res3 = isSubsequence('abc', 'abracadabra'); // true
const res4 = isSubsequence('abc', 'acb'); // false (order matters)

res1 
res2
res3
res4