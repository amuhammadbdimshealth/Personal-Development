/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/

const areThereDuplicates = function (...args) {
    const dict = {}
    for (let v of args) {
        if(!dict[v]) dict[v] = 1
        else return true
    }
    return false
}

const res1 = areThereDuplicates(1, 2, 3) // false
const res2 = areThereDuplicates(1, 2, 2) // true 
const res3 = areThereDuplicates('a', 'b', 'c', 'a') // true 
const res4 = areThereDuplicates('a', 'b', 'c', 'd') // false 
const res5 = areThereDuplicates('a', 'b', 'c', 'd', 'e', 'a') // true 

res1
res2
res3
res4
res5
