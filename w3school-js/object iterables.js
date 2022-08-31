for (const x of "W3Schools") {
    // code block to be executed
    x
}

for (const x of [1,2,3,4,5]) {
    // code block to be executed
    x
  }

// Home Made Iterable
function myNumbers() {
    let n = 100;
    return {
        next: function() {
            n += 10;
            return {value:n, done:false};
        }
    };
}
  
// Create Iterable
const n = myNumbers();
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());
console.log(n.next());

// JS Iterable 
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
for (const num of myNumbers) {
    num
}

// Manually calling Symbol.iterator method 
let iterator = myNumbers[Symbol.iterator]();
while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
  result
}