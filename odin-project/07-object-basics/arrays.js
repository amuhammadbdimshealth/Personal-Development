/*
    Translate border-left-width to borderLeftWidth
    importance: 5
    Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

    That is: removes all dashes, each word after dash becomes uppercased.

    Examples:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
*/

const camelize = (words="") => {
    return words.split('-')
    .map((word, index) => {
        word
        return index > 0 
        ? word.charAt(0).toUpperCase() + word.slice(1) 
        : word.toLowerCase();
    }).join('')    
} 

let result = camelize("background-color") // == 'backgroundColor';
result
result = camelize("list-style-image") // == 'listStyleImage';
result
result = camelize("-webkit-transition") // == 'WebkitTransition';
result


/*
    Filter range
    importance: 4

    Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

    The function should not modify the array. It should return the new array.

    For instance:

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); // 3,1 (matching values)

    alert( arr ); // 5,3,8,1 (not modified)
*/

const filterRange = (arr=[], a, b) => {
    return arr.filter(num => num >= a && num <= b);    
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
filtered

/*
    Filter range "in place"
    importance: 4
    Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. 
    The test is: a ≤ arr[i] ≤ b.

    The function should only modify the array. It should not return anything.

    For instance:

    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

    alert( arr ); // [3, 1]
*/

const filterRangeInPlace = (arr=[], a, b) => {
    arr.forEach((num, index) => {        
        if(!(num >= a && num <= b)) {
            arr.splice(index, 1);         
        }
    });
}
let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4)
arr2

/**
    Sort in decreasing order
    importance: 4
    let arr = [5, 2, 1, -10, 8];

    // ... your code to sort it in decreasing order

    alert( arr ); // 8, 5, 2, 1, -10
 */
const sortDesc = (arr) => {
    return arr.sort((a,b) => b - a);
}

let arr3 = [5, 2, 1, -10, 8];
result = sortDesc(arr3)
result