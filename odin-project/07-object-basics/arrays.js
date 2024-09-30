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

/**
    Copy and sort array
    importance: 5
    We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

    Create a function copySorted(arr) that returns such a copy.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (no changes)
 */
const copySorted = (arr) => {
    const copyArr = [...arr];
    return copyArr.sort();
    // return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);
sorted
arr4


/**
    Map to names
    importance: 5
    You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

    For instance:

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [ john, pete, mary ];

    let names =  ... your code 

    alert( names ); // John, Pete, Mary
 */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =  users.map(u => u.name);
names

/**
    Map to objects
    importance: 5
    You have an array of user objects, each one has name, surname and id.

    Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

    For instance:

    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [ john, pete, mary ];

    let usersMapped =  ... your code ... 


    usersMapped = [
        { fullName: "John Smith", id: 1 },
        { fullName: "Pete Hunt", id: 2 },
        { fullName: "Mary Key", id: 3 }
    ]


    alert( usersMapped[0].id ) // 1
    alert( usersMapped[0].fullName ) // John Smith
    So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
 */

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let usersMapped = users.map(user => {    
    return {
        fullName: `${user.name} ${user.surname}`,
        id: user.id
    }
})
usersMapped

/**
    Sort users by age
    importance: 5
    Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

    For instance:

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [ pete, john, mary ];

    sortByAge(arr);

    // now: [john, mary, pete]
    alert(arr[0].name); // John
    alert(arr[1].name); // Mary
    alert(arr[2].name); // Pete
 */

const sortByAge = (users) => {
    users.sort((user1, user2) => user1.age - user2.age)
}
john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 28 };
let arr5 = [ pete, john, mary ];

sortByAge(arr5);
arr5

/**
    Get average age
    importance: 4
    Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

    The formula for the average is (age1 + age2 + ... + ageN) / N.

    For instance:

    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [ john, pete, mary ];

    alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
 */
const getAverageAge = (users=[]) => {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

john = { name: "John", age: 25 };
pete = { name: "Pete", age: 30 };
mary = { name: "Mary", age: 29 };

let arr7 = [ john, pete, mary ];
const avg = getAverageAge(arr7)
avg


/**
    Filter unique array members
    importance: 4
    Let arr be an array.

    Create a function unique(arr) that should return an array with unique items of arr.

    For instance:

    function unique(arr) {
        your code
    }

    let strings = ["Haha", "Kick", "Haha", "Kick",
        "Kick", "Kick", "Haha", "Haha", ":-O"
    ];

    alert( unique(strings) ); // Haha, Kick, :-O
 */

const unique = (arr=[]) => {
    const setArr = new Set(arr);
    return Array.from(setArr)
}
let strings = ["Haha", "Kick", "Haha", "Kick",
    "Kick", "Kick", "Haha", "Haha", ":-O"
];
const uniq = unique(strings);
uniq


/**
    Create keyed object from array
    importance: 4

    Let’s say we received an array of users in the form {id:..., name:..., age:... }.

    Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

    For example:

    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);

    ..after the call we should have:

    usersById = {
        john: {id: 'john', name: "John Smith", age: 20},
        ann: {id: 'ann', name: "Ann Smith", age: 24},
        pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }

    Such function is really handy when working with server data.
    In this task we assume that id is unique. There may be no two array items with the same id.
    Please use array .reduce method in the solution.
*/

const groupById = (arr=[]) => {
    return arr.reduce((group, user) => {        
        group[user.id] = user;
        return group
    }, {})
}

let usersAll = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(usersAll);
usersById;