
/*
//* Task: 1
Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404
*/

// /*
// * Soln: 1
async function loadJsonAsync(url) {
    try {
        const response = await fetch(url)
        if (response.status == 200) {
            return await response.json();        
            //* We can return response.json() instead of awaiting for it, like this:
            //* return response.json();
            //* Then the outer code would have to await for that promise to resolve. In our case it doesn’t matter.
        }
        else throw new Error(response.status);
    } catch (error) {
        console.log("asynFunc ERROR: ", error);
    }

}

loadJsonAsync('https://javascript.info/no-such-user.json')
    .catch(error => console.log("GLOBAL SCOPE ERROR: ", error))

// */