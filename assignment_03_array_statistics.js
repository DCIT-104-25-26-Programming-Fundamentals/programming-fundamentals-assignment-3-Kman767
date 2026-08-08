// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readLineSync = require("readline-sync");

const userInput = readLineSync.questionInt("How many numbers? ");

if (userInput <= 0){
    console.log("Error: Number must be a positive integer.");
    process.exit(1);
}

const numbers = [];

for (let i = 0; i < userInput; i++) {
    const num = readLineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(num);
}


function compute_sum (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
function compute_average(numbers) {
    return compute_sum(numbers) / numbers.length;
}

function compute_max(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function compute_min(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}

function main () {
    const total = compute_sum(numbers);
    const average = compute_average(numbers);
    const largest = compute_max(numbers);
    const smallest = compute_min(numbers);

    console.log("Results:  ");
    console.log(`Sum:     ${total}`);
    console.log(`Average: ${average}`);
    console.log(`Maximum: ${largest}`);
    console.log(`Minimum: ${smallest}`);

}

main();