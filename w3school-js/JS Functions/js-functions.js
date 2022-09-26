// Function Borrowing
var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

const pfn = person.fullName()
pfn

const fn = fullName()
fn


// Preserving this
var person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        let fn = this.firstName + " " + this.lastName;
        console.log(fn)
    }
}
person.display();


var person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        let fn = this.firstName + " " + this.lastName;
        // undefined since this is lost
        console.log(fn)
    }
}
setTimeout(person.display, 3000);


var person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        let fn = this.firstName + " " + this.lastName;
        // result is as expected since this not lost by using bind
        console.log(fn)
    }
}
var display = person.display.bind(person)
setTimeout(display, 3000);


// Closures
const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter; }
})();

var c = add()
c
c = add()
c
c = add()
c