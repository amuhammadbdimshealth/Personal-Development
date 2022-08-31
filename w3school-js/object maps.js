// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
fruits

// Map.set()
fruits.set("apples",1000)
fruits

const bool = fruits.has("apples");
bool

// Objects as Keys : Being able to use objects as keys is an important Map feature.
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruitz = new Map();

// Add new Elements to the Map
fruitz.set(apples, 500);
fruitz.set(bananas, 300);
fruitz.set(oranges, 200);

fruitz