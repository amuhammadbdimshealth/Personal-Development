/**
 * Write a function to find the longest common prefix string amongst an array of strings. 
 * If there is no common prefix, return an empty string "".
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const wordCount = strs.length;
    const shortestWordLength = strs[0].length
    const commonPrefix = [];
    for (let l = 0; l < shortestWordLength; l++) { // iterate letters 
        let currentLetter = '';
        let prevLetter = '';
        for (let i = 0; i < wordCount; i++) { // iterate words 
            // print lth letter of each word 
            currentLetter = strs[i][l];
            // see if all the letters match             
            // compare letters from the 2nd word
            if (i > 0) {
                prevLetter = strs[i - 1][l]
                    // if all letters does not match return upto the last match
                if (currentLetter != prevLetter) {
                    return commonPrefix.join("");
                }
            }

        } // END iterate words 
        // if all letters match store the letter             
        commonPrefix.push(currentLetter)

    } // END iterate letters 
    return commonPrefix.join("");
};


const strs = ["flower", "flow", "flowight"]
console.log(longestCommonPrefix(strs))