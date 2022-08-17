// Class
class Car {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
}

const myCar1 = new Car("Mercedes", 2022)
myCar1

// Promise
const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        // myReject("I had an error");
        myResolve("I love You !!");
    }, 3000);
});

myPromise.then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});

myPromise.then((value) => { console.log(value); }).catch((error) => { console.log(error); })

// Symbol
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;

console.log(person.id);
console.log(person[id]);

// Default Parameter Values
function myFunction(x, y = 10) {
    return x + y

}
console.log(myFunction(5));

// Function Rest Parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        console.log(arg);
        sum += arg;
    }
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  console.log(x[0], x[1]);
}
