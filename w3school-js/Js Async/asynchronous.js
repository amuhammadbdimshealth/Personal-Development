// (see  index.html)

// Waiting for Intervals:
setInterval(myFunction, 1000);

let now = ''
function myFunction() {
    let d = new Date();
    now =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();

    //   console.log(now);
}


// Waiting for Files
/*
    See the link - Getting HTML with fetch() in vanilla JS:
    https://gomakethings.com/getting-html-with-fetch-in-vanilla-js/
*/

function myDisplayer(some, domId) {
    document.getElementById(domId).innerHTML = some;
}

function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function () {
        if (req.status == 200) {
            myCallback(this.responseText, "demo1");
        } else {
            myCallback("Error: " + req.status, "demo1");
        }
    }
    req.send();

    // alternative with fetchAPI
    fetch('mycar.html')
        .then((response) => {
            console.log(response);
            return response.text()
        })
        .then(html => {
            myCallback(html + '<span> (from FetchAPI) </span>', "demo2");
        })
        .catch(err => {
            myCallback("Error: " + req.status, "demo2");
        })

}

getFile(myDisplayer);
