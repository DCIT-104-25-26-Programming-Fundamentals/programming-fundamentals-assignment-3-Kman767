// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================



const readlineSync = require('readline-sync');
 
function readMatrix(label) {
  console.log(`\n-- ${label} --`);
  const rows = parseInt(readlineSync.question('Enter number of rows: '), 10);
  const cols = parseInt(readlineSync.question('Enter number of columns: '), 10);
 
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let row;
    while (true) {
      row = readlineSync
        .question(`Enter row ${i + 1}: `)
        .trim()
        .split(/\s+/)
        .map(Number);
 
      if (row.length === cols && row.every((n) => !Number.isNaN(n))) {
        break;
      }
      console.log(`Please enter exactly ${cols} numbers separated by spaces.`);
    }
    matrix.push(row);
  }
  return matrix;
}
 
function printMatrix(matrix, title) {
  console.log(`\n${title}`);
  const width = Math.max(...matrix.flat().map((n) => n.toString().length));
  for (const row of matrix) {
    console.log(row.map((n) => n.toString().padStart(width + 2)).join(''));
  }
}
 

function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];
 
  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}
 

function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
 
  if (b.length !== rows || b[0].length !== cols) {
    throw new Error('Matrices must be the same size to add them.');
  }
 
  const result = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(a[i][j] + b[i][j]);
    }
    result.push(row);
  }
  return result;
}
 

function multiplyMatrices(a, b) {
  const rowsA = a.length;
  const colsA = a[0].length;
  const rowsB = b.length;
  const colsB = b[0].length;
 
  if (colsA !== rowsB) {
    throw new Error('Number of columns in A must equal number of rows in B.');
  }
 
  const result = [];
  for (let i = 0; i < rowsA; i++) {
    const row = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}
 
function partA() {
  console.log('\n=== PART A: Transpose a Matrix ===');
  const matrix = readMatrix('Matrix');
  printMatrix(matrix, 'Original Matrix:');
  printMatrix(transpose(matrix), 'Transposed Matrix:');
}
 
function partB() {
  console.log('\n=== PART B: Add Two Matrices ===');
  const a = readMatrix('Matrix A');
  const b = readMatrix('Matrix B (must match size of A)');
  printMatrix(a, 'Matrix A:');
  printMatrix(b, 'Matrix B:');
  try {
    printMatrix(addMatrices(a, b), 'Sum (A + B):');
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
 
function partC() {
  console.log('\n=== PART C: Multiply Two Matrices ===');
  const a = readMatrix('Matrix A (M x N)');
  const b = readMatrix('Matrix B (N x P)');
  printMatrix(a, 'Matrix A:');
  printMatrix(b, 'Matrix B:');
  try {
    printMatrix(multiplyMatrices(a, b), 'Product (A x B):');
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
 
function main() {
  partA();
  partB();
  partC();
}
 
main();

