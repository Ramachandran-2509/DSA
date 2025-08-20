// N-Dimensional Forest Pattern
// Problem: Print an NxN grid filled with '*' characters

function printNForest(n) {
    // Loop through each row
    for (let i = 0; i < n; i++) {
        let row = '';
        // Loop through each column
        for (let j = 0; j < n; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Alternative solution using repeat method
function printNForestOptimized(n) {
    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n));
    }
}

// Test cases
console.log("=== N-Dimensional Forest Pattern ===");
console.log("\nForest of size 3x3:");
printNForest(3);

console.log("\nForest of size 4x4:");
printNForest(4);

console.log("\nForest of size 5x5:");
printNForest(5);

console.log("\n=== Using Optimized Method ===");
console.log("\nForest of size 3x3 (optimized):");
printNForestOptimized(3);

// Function to create forest pattern as a 2D array
function createNForestArray(n) {
    const forest = [];
    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push('*');
        }
        forest.push(row);
    }
    return forest;
}

// Function to print forest from 2D array
function printForestFromArray(forest) {
    for (let row of forest) {
        console.log(row.join(' '));
    }
}

console.log("\n=== Using 2D Array Method ===");
console.log("\nForest of size 4x4 (2D array):");
const forest4x4 = createNForestArray(4);
printForestFromArray(forest4x4);