// JavaScript Arrays - Interactive Examples

// ============================================
// ARRAY CREATION EXAMPLES
// ============================================

console.log("=== Array Creation Examples ===");

// Array literal
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, undefined];

console.log("Array literals:", fruits, numbers, mixed);

// Array constructor
let arr1 = new Array();
let arr2 = new Array(1, 2, 3);
let arr3 = new Array(5); // Creates array with length 5

console.log("Array constructor:", arr1, arr2, arr3);

// Array.from() (ES6+)
let charArray = Array.from("hello");
let numberArray = Array.from({length: 5}, (_, i) => i);

console.log("Array.from():", charArray, numberArray);

// Array.of() (ES6+)
let arrOf1 = Array.of(1, 2, 3);
let arrOf2 = Array.of(5); // [5] not [empty × 5]

console.log("Array.of():", arrOf1, arrOf2);

// Spread operator
let combined = [...fruits, ...numbers];
let withElements = [0, ...numbers, 6];

console.log("Spread operator:", combined, withElements);

// ============================================
// ARRAY ACCESS AND MODIFICATION EXAMPLES
// ============================================

console.log("\n=== Array Access and Modification Examples ===");

let colors = ["red", "green", "blue", "yellow"];

// Accessing elements
console.log("First element:", colors[0]);
console.log("Last element:", colors[colors.length - 1]);
console.log("Array length:", colors.length);

// Modifying elements
colors[1] = "purple";
console.log("After modification:", colors);

// Adding elements
colors.push("orange");
colors.unshift("pink");
console.log("After adding:", colors);

// Removing elements
let lastColor = colors.pop();
let firstColor = colors.shift();
console.log("Removed:", lastColor, firstColor);
console.log("After removing:", colors);

// ============================================
// ARRAY METHODS EXAMPLES
// ============================================

console.log("\n=== Array Methods Examples ===");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Adding/Removing methods
console.log("Original array:", numbers);

numbers.push(11);
console.log("After push(11):", numbers);

let popped = numbers.pop();
console.log("Popped element:", popped);
console.log("After pop():", numbers);

numbers.unshift(0);
console.log("After unshift(0):", numbers);

let shifted = numbers.shift();
console.log("Shifted element:", shifted);
console.log("After shift():", numbers);

// Searching methods
console.log("indexOf(5):", numbers.indexOf(5));
console.log("lastIndexOf(5):", numbers.lastIndexOf(5));
console.log("includes(3):", numbers.includes(3));
console.log("includes(15):", numbers.includes(15));

let firstEven = numbers.find(num => num % 2 === 0);
let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log("First even number:", firstEven);
console.log("First even index:", firstEvenIndex);

// Transformation methods
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

let evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Manipulation methods
let portion = numbers.slice(2, 6);
console.log("Slice(2, 6):", portion);

let reversed = numbers.slice().reverse();
console.log("Reversed:", reversed);

let sorted = numbers.slice().sort((a, b) => a - b);
console.log("Sorted:", sorted);

// ============================================
// ADVANCED ARRAY CONCEPTS EXAMPLES
// ============================================

console.log("\n=== Advanced Array Concepts Examples ===");

// Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("2D Matrix:", matrix);
console.log("Element at [1][2]:", matrix[1][2]);

// Creating 2D array
let rows = 3, cols = 4;
let grid = Array(rows).fill().map(() => Array(cols).fill(0));
console.log("3x4 Grid:", grid);

// Destructuring
let [first, second, third, ...rest] = [1, 2, 3, 4, 5, 6];
console.log("Destructured:", first, second, third, rest);

// Array-like objects
let str = "hello";
let charArray = Array.from(str);
console.log("String to array:", charArray);

// Set for unique values
let duplicates = [1, 2, 2, 3, 3, 4, 4, 5];
let unique = [...new Set(duplicates)];
console.log("Original:", duplicates);
console.log("Unique:", unique);

// Typed arrays
let intArray = new Int32Array([1, 2, 3, 4]);
let floatArray = new Float32Array([1.1, 2.2, 3.3, 4.4]);
console.log("Int32Array:", intArray);
console.log("Float32Array:", floatArray);

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

// Array creator function
function createArray() {
    const input = document.getElementById('arrayElements').value;
    const result = document.getElementById('arrayResult');
    
    if (!input.trim()) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter elements!</div>';
        return;
    }
    
    try {
        // Parse comma-separated values
        const elements = input.split(',').map(item => {
            item = item.trim();
            // Try to convert to number if possible
            if (!isNaN(item) && item !== '') {
                return Number(item);
            }
            return item;
        });
        
        const array = elements;
        
        result.innerHTML = `
            <div class="result-display">
                <strong>Created Array:</strong> [${array.join(', ')}]<br>
                <strong>Length:</strong> ${array.length}<br>
                <strong>Type:</strong> ${Array.isArray(array) ? 'Array' : 'Not an array'}<br>
                <strong>First element:</strong> ${array[0]}<br>
                <strong>Last element:</strong> ${array[array.length - 1]}
            </div>
        `;
    } catch (error) {
        result.innerHTML = `
            <div style="color: #e74c3c;">
                <strong>Error:</strong> ${error.message}
            </div>
        `;
    }
}

// Method tester function
function testMethod() {
    const method = document.getElementById('methodSelect').value;
    const result = document.getElementById('methodResult');
    
    let testArray = [1, 2, 3, 4, 5];
    let output = '';
    
    switch (method) {
        case 'push':
            testArray.push(6);
            output = `push(6): [${testArray.join(', ')}]`;
            break;
            
        case 'pop':
            let popped = testArray.pop();
            output = `pop(): removed ${popped}, array: [${testArray.join(', ')}]`;
            break;
            
        case 'map':
            let mapped = testArray.map(x => x * 2);
            output = `map(x => x * 2): [${mapped.join(', ')}]`;
            break;
            
        case 'filter':
            let filtered = testArray.filter(x => x > 2);
            output = `filter(x => x > 2): [${filtered.join(', ')}]`;
            break;
            
        case 'reduce':
            let reduced = testArray.reduce((sum, x) => sum + x, 0);
            output = `reduce((sum, x) => sum + x, 0): ${reduced}`;
            break;
            
        default:
            output = 'Unknown method';
    }
    
    result.innerHTML = `
        <div class="result-display">
            <strong>Original array:</strong> [1, 2, 3, 4, 5]<br>
            <strong>${method}() result:</strong> ${output}
        </div>
    `;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to demonstrate array performance
function demonstratePerformance() {
    console.log("\n=== Array Performance Examples ===");
    
    const size = 100000;
    
    // Push vs unshift performance
    console.time('push');
    let pushArray = [];
    for (let i = 0; i < size; i++) {
        pushArray.push(i);
    }
    console.timeEnd('push');
    
    console.time('unshift');
    let unshiftArray = [];
    for (let i = 0; i < size; i++) {
        unshiftArray.unshift(i);
    }
    console.timeEnd('unshift');
    
    // Array methods vs loops
    let testArray = Array.from({length: 10000}, (_, i) => i);
    
    console.time('for loop');
    let sum1 = 0;
    for (let i = 0; i < testArray.length; i++) {
        sum1 += testArray[i];
    }
    console.timeEnd('for loop');
    
    console.time('reduce');
    let sum2 = testArray.reduce((acc, num) => acc + num, 0);
    console.timeEnd('reduce');
    
    console.log("Sums are equal:", sum1 === sum2);
}

// Function to demonstrate common array patterns
function demonstratePatterns() {
    console.log("\n=== Common Array Patterns ===");
    
    // Pattern 1: Remove duplicates
    let duplicates = [1, 2, 2, 3, 3, 4, 4, 5];
    let unique = [...new Set(duplicates)];
    console.log("Remove duplicates:", unique);
    
    // Pattern 2: Flatten nested arrays
    let nested = [[1, 2], [3, 4], [5, 6]];
    let flattened = nested.flat();
    console.log("Flatten arrays:", flattened);
    
    // Pattern 3: Group by property
    let items = [
        {name: 'apple', category: 'fruit'},
        {name: 'banana', category: 'fruit'},
        {name: 'carrot', category: 'vegetable'},
        {name: 'lettuce', category: 'vegetable'}
    ];
    
    let grouped = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item.name);
        return acc;
    }, {});
    
    console.log("Group by category:", grouped);
    
    // Pattern 4: Chunk array
    let chunkArray = [1, 2, 3, 4, 5, 6, 7, 8];
    let chunkSize = 3;
    let chunks = [];
    
    for (let i = 0; i < chunkArray.length; i += chunkSize) {
        chunks.push(chunkArray.slice(i, i + chunkSize));
    }
    
    console.log("Chunked array:", chunks);
}

// Function to demonstrate array immutability
function demonstrateImmutability() {
    console.log("\n=== Array Immutability Examples ===");
    
    let original = [1, 2, 3, 4, 5];
    
    // Mutable operations (modify original)
    let mutable = original;
    mutable.push(6);
    console.log("Original after mutable operation:", original);
    
    // Immutable operations (don't modify original)
    let immutable = [...original];
    immutable.push(7);
    console.log("Original after immutable operation:", original);
    console.log("New array:", immutable);
    
    // Using slice for immutability
    let sliced = original.slice(1, 4);
    console.log("Sliced array:", sliced);
    console.log("Original unchanged:", original);
}

// Run utility demonstrations
demonstratePerformance();
demonstratePatterns();
demonstrateImmutability();
