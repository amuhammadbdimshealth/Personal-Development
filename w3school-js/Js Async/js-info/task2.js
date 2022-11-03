

/*
//* Task: 2: 
Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.

And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.


class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        });
}


//* Ask for a user name until github returns a valid user
function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
    if (name) {
        return loadJson(`https://api.github.com/users/${name}`)
            .then(user => {
                alert(`Full name: ${user.name}.`);
                return user;
            })
            .catch(err => {
                if (err instanceof HttpError && err.response.status == 404) {
                    alert("No such user, please reenter.");
                    return demoGithubUser();
                } else {
                    throw err;
                }
            });
    }
    else {
        return demoGithubUser();
    }
}

demoGithubUser();
*/

// * Soln: 2
class HttpError extends Error {
    constructor(response) {
        super('CUSTOM ERROR');
        this.name = "HttpError";
        this.response = response;
    }
}

async function loadJsonAsync(url) {
    const response = await fetch(url)
    if(response.status == 200) {
        const respJson = await response.json();
        return respJson;
    }
    else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    while (true) {
        let name = prompt("Name?", 'iliakan');
        if (!name) return demoGithubUser();
    
        const url = `https://api.github.com/users/${name}`
        try {
            const user = await loadJsonAsync(url)
            console.log("FETCHED USER DATA: ",user);    
            return user;
        } catch (error) {
            if(error instanceof HttpError && error.response.status == 404) {
                console.log("No such user, reenter.");                
            } else {
                throw error;
            }
        }
    }    
}
demoGithubUser()
