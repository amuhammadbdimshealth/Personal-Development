/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function(str) {
    if (str.length < 2) return false;
    let wife_husb = [
            ['}', '{'],
            [')', '('],
            [']', '[']
        ]
    // Use the regular Map constructor to transform a 2D key-value Array into a map
    var map = new Map(wife_husb)
    var stack = [];
    stack.push(str[0]);

    for (let i = 1; i < str.length; i++) {
        const e = str[i]
        // console.log({ i, stack, e  })
        stack.push(str[i])
        // If element is a key(Wife) from the map,  validate the string 
        if (map.has(str[i])) {            
            // Find the previous character
            let prev = stack[stack.length-2]; //console.log({prev})
            // If prev char is not its complement then false i.e not matching
            if (prev != map.get(str[i])) return false
            // Else remove the last 2 matching brackets from the stack
            else {
                // console.log(`${i} POP`)
                stack.pop();
                stack.pop();
            }                        
        }
    }
    // When loop ends the stack should be empty for valid string 
    //console.log(stack)
    if (stack.length > 0) return false
    return true;
};


const input = "[{{}}[[()[{]{()()}]]]"
console.log(isValid(input))