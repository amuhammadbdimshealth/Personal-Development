const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        console.log(this)
        return this.firstName + " " + this.lastName;
    }
};

const fname = person.fullName()
console.log(fname)
console.log(this)
