async function myDisplay() {
    let myPromise =
        new Promise(
            function (myResolve, myReject) {
                setTimeout(function () {
                    myResolve("I love You !!");
                }, 1000);
            });
    const res = await myPromise;
    console.log(res);
}

myDisplay();