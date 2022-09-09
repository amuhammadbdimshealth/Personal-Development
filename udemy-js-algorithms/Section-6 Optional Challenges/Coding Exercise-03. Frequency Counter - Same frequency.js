/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/


const sameFrequency = function (numOne, numTwo) {
    let num1Str = numOne.toString();
    let num2Str = numTwo.toString();

    if (num1Str.length !== num2Str.length) return false;

    const dict1 = {};
    const dict2 = {};

    for (let i in num1Str) {
        const el1 = num1Str[i];
        const el2 = num2Str[i];

        if (dict1[el1]) dict1[el1]++;
        else dict1[el1] = 1;

        if (dict2[el2]) dict2[el2]++;
        else dict2[el2] = 1;

    }

    for (let key in dict1) {
        if (!(dict2[key] && dict2[key] == dict1[key])) return false;
    }
    return true;
}

const res1 = sameFrequency(182, 281) // true
const res2 = sameFrequency(34, 14) // false
const res3 = sameFrequency(3589578, 5879385) // true
const res4 = sameFrequency(22, 222) // false


res1
res2
res3
res4