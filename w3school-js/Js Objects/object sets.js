const letters = new Set(["a","b","c","c","c","d"]);

letters.add("newVal")
letters


// List all entries
let text = "";
letters.forEach (function(value) {
  value
})

const valList = letters.values()   
for (const v of valList) {
    v
}
const keyList = letters.keys()   
for (const k of keyList) {
    k
}

const myIterator = letters.entries();

// List all Entries
for (const e of myIterator) {
  e
}