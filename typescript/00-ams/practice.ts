// Array type 
const myArray: number[] = [1, 2, 3, 4, 5]

// Another way to define an array type
const myArray2: Array<number> = [1, 2, 3, 4, 5]

// Union type
const mixedArray: (number | string)[] = [1, "two", 3, "four"]; 
let score: number | string = 100;
score = 30;

// Define enum

enum SeatChoice {
    AISLE = "Aisle",
    MIDDLE = "Middle",
    WINDOW = "Window"
}


const mySeat: SeatChoice = SeatChoice.AISLE;