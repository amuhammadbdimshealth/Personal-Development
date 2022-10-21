// Promises (see index.html)

// Example-1
function doSomething(some) {
    console.log(some)
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // some code (try to change x to 5)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

let myPromise2 = new Promise((myResolve, myReject) => {
    let y = 100;

    if (y == 100) {
        myResolve(y)
    }
    else {
        myReject('ERROR')
    }
})

myPromise.then(
    function (value) { doSomething(value); },
    function (error) { doSomething(error); }
);

myPromise2.then(res => doSomething(res)).catch(err => doSomething(err))


//Example-2 
const myPromise3 = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        myResolve("I love You !!");
    }, 3000);
});

myPromise3.then(function (res) {
    console.log("DISPLAY: ", res)
});


//Example-3 Waiting for a file
let myPromise4 = new Promise((resolve, reject) => {
    fetch('mycar.html').then(res => {
        if(res.status == 200) {
            resolve(res.text())
        } else {
            reject("ERROR FETCHING!!")
        }
    })
})

myPromise4.then(res => {
    console.log(res);
    // once returned, mount the html retrieved on a dom element
    document.getElementById('demo2').innerHTML = res
}).catch(err => {
    console.log(err);
})