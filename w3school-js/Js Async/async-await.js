// Async-await

// Example - async
function myDisplayer(some) {
    console.log(some);
}
async function myFunction(input) {
    if (input) return "Hello";
    else throw ('ERROR')

}
myFunction('print').then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
)

// await - Example-1 (basic)
async function myDisplay() {
    let myPromise = new Promise(function (resolve, reject) {
        resolve("I love You !!");
    });
    const response = await myPromise;
    console.log('GOT BACK:', response);
}
myDisplay();

// await - Example-2 (timeout)
async function myDisplay2() {    
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = [
                {name: "Arif",dept: "CSE"},
                {name: "Bipu",dept: "EEE"}                
            ]            
            resolve(userData)
        }, 3000);
    })    
    return myPromise;
}
let time = new Date()
console.log(time.getSeconds());

// await should have Only worked inside an async func(acc to the doc). But here it seems to work without async
const responseData = await myDisplay2();

time = new Date()
console.log(time.getSeconds());

console.log(responseData);