// Class Inheritance
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
let msg = myCar.show();
msg

// Getters and Setters
class Car1 {
    constructor(brand, year) {
        this.carname = brand;
        this.year = year
    }
    get cnam() {
        return `<<${this.carname}>>`;
    }
    set cnam(x) {
        this.carname = x;
    }
    get modelYear() {
        return 'YYYY-' + this.year;
    }
}

let myCar1 = new Car1("Ford", 2020);
let { cnam, modelYear } = myCar1
cnam
modelYear

// JavaScript Static Methods
class Car2 {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!!";
    }
    static hello2(x) {
        return "Hello " + x.name;
    }
}

let myCar2 = new Car2("Ford");

// You can call 'hello()' on the Car Class:
let st = Car2.hello();
let st2 = Car2.hello2(myCar2);
st
st2