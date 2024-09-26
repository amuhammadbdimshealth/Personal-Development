// https://javascript.info/object
/*
    Hello, object
    importance: 5

    Write the code, one line for each action:

    1. Create an empty object user.
    2. Add the property name with the value John.
    3. Add the property surname with the value Smith.
    4. Change the value of the name to Pete.
    5. Remove the property name from the object.
*/

const user = {}; 
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
// user
delete user.name
// user

/*
    Check for emptiness
    importance: 5
    Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.    
    Should work like that:

    let schedule = {};

    alert( isEmpty(schedule) ); // true

    schedule["8:30"] = "get up";

    alert( isEmpty(schedule) ); // false
*/

const isEmpty = (obj) => {
    for (key in obj) {
        return false
    }
    return true;
}
const obj = {}
const _isEmpty = isEmpty(obj);
// _isEmpty

/*
    Sum object properties
    importance: 5
    We have an object storing salaries of our team:

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
    Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

    If salaries is empty, then the result must be 0.
 */
const addSalaries = (salaries) => {
    let total = 0;
    for (key in salaries) {
        total = salaries[key] + total
    }
    return total;
} 

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sumSalaries = addSalaries(salaries);
// sumSalaries

/*
    Multiply numeric property values by 2
    importance: 3
    Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

    For instance:

    // before the call
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };

    multiplyNumeric(menu);

    // after the call
    menu = {
        width: 400,
        height: 600,
        title: "My menu"
    };
 */

const multiplyNumeric = (obj) => {    
    for (key in obj) {
        const type = typeof obj[key]
        if (type === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
    return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
const mSum = multiplyNumeric(menu);
// mSum