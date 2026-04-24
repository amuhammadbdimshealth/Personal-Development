const isAlphabetic = (str) => {
    str
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(str);
}

const palindromes = function (str="") {
    const onlyAlphabets = str
    .split('')
    .filter(letter => isAlphabetic(letter))
    .map(letter => letter.toLowerCase());

    const lastIndex = onlyAlphabets.length - 1
    lastIndex

    for (let i = 0; i < Math.floor(onlyAlphabets.length / 2); i++) {             
        if(onlyAlphabets[0+i] !== onlyAlphabets[lastIndex-i]) return false;
    }
    return true;
};

let result = palindromes('A car, a man, a maraca');
result
result = palindromes('tacos') // false
result
result = palindromes('r3ace3car') // false
result


// Do not edit below this line
module.exports = palindromes;


