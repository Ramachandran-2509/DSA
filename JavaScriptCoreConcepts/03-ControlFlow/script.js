// JavaScript Control Flow - Interactive Examples

// ============================================
// CONDITIONAL STATEMENTS EXAMPLES
// ============================================

console.log("=== Conditional Statements Examples ===");

// Basic if statement
function demonstrateIf() {
    const age = 20;
    
    if (age >= 18) {
        console.log("You are an adult");
    }
    
    // if...else
    const score = 85;
    if (score >= 90) {
        console.log("A grade");
    } else {
        console.log("B grade or lower");
    }
    
    // if...else if...else
    const grade = 75;
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B");
    } else if (grade >= 70) {
        console.log("C");
    } else {
        console.log("F");
    }
}

// Ternary operator examples
function demonstrateTernary() {
    const age = 20;
    const status = age >= 18 ? "adult" : "minor";
    console.log("Status:", status);
    
    // Nested ternary
    const grade = 85;
    const letter = grade >= 90 ? "A" : 
                   grade >= 80 ? "B" : 
                   grade >= 70 ? "C" : "F";
    console.log("Letter grade:", letter);
    
    // Conditional assignment
    const user = null;
    const displayName = user ? user.name : "Guest";
    console.log("Display name:", displayName);
}

// Run conditional demonstrations
demonstrateIf();
demonstrateTernary();

// ============================================
// SWITCH STATEMENT EXAMPLES
// ============================================

console.log("\n=== Switch Statement Examples ===");

function demonstrateSwitch() {
    const day = "Friday";
    
    switch (day) {
        case "Monday":
            console.log("Start of work week");
            break;
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
            console.log("Regular work day");
            break;
        case "Friday":
            console.log("TGIF!");
            break;
        case "Saturday":
        case "Sunday":
            console.log("Weekend!");
            break;
        default:
            console.log("Unknown day");
    }
    
    // Switch with expressions
    const score = 85;
    switch (true) {
        case score >= 90:
            console.log("Excellent");
            break;
        case score >= 80:
            console.log("Good");
            break;
        case score >= 70:
            console.log("Fair");
            break;
        default:
            console.log("Needs improvement");
    }
}

demonstrateSwitch();

// ============================================
// LOOPS EXAMPLES
// ============================================

console.log("\n=== Loops Examples ===");

// for loop examples
function demonstrateForLoops() {
    console.log("Basic for loop:");
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration ${i}`);
    }
    
    console.log("\nFor loop with array:");
    const fruits = ["apple", "banana", "orange"];
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Fruit ${i + 1}: ${fruits[i]}`);
    }
    
    console.log("\nFor loop with step:");
    for (let i = 0; i <= 10; i += 2) {
        console.log(`Even number: ${i}`);
    }
    
    console.log("\nReverse for loop:");
    for (let i = 5; i > 0; i--) {
        console.log(`Countdown: ${i}`);
    }
}

// while loop examples
function demonstrateWhileLoops() {
    console.log("Basic while loop:");
    let count = 0;
    while (count < 3) {
        console.log(`Count: ${count}`);
        count++;
    }
    
    console.log("\nWhile loop with condition:");
    let attempts = 0;
    const maxAttempts = 5;
    while (attempts < maxAttempts) {
        console.log(`Attempt ${attempts + 1} of ${maxAttempts}`);
        attempts++;
    }
    
    console.log("\nWhile loop with break:");
    let number = 0;
    while (true) {
        if (number >= 3) {
            break;
        }
        console.log(`Number: ${number}`);
        number++;
    }
}

// do...while loop examples
function demonstrateDoWhileLoops() {
    console.log("Basic do...while loop:");
    let num = 0;
    do {
        console.log(`Number: ${num}`);
        num++;
    } while (num < 3);
    
    console.log("\nDo...while always executes once:");
    let x = 10;
    do {
        console.log("This runs once even though condition is false");
    } while (x < 5);
}

// for...of loop examples
function demonstrateForOfLoops() {
    console.log("For...of with array:");
    const colors = ["red", "green", "blue"];
    for (let color of colors) {
        console.log(`Color: ${color}`);
    }
    
    console.log("\nFor...of with string:");
    for (let char of "hello") {
        console.log(`Character: ${char}`);
    }
    
    console.log("\nFor...of with array entries:");
    for (let [index, value] of colors.entries()) {
        console.log(`Index ${index}: ${value}`);
    }
}

// for...in loop examples
function demonstrateForInLoops() {
    console.log("For...in with object:");
    const person = {
        name: "John",
        age: 30,
        city: "NYC"
    };
    
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    
    console.log("\nFor...in with array (not recommended):");
    const arr = ["a", "b", "c"];
    for (let index in arr) {
        console.log(`Index ${index}: ${arr[index]}`);
    }
}

// Array method examples
function demonstrateArrayMethods() {
    console.log("forEach method:");
    [1, 2, 3].forEach((num, index) => {
        console.log(`Element ${index}: ${num}`);
    });
    
    console.log("\nmap method:");
    const doubled = [1, 2, 3].map(num => num * 2);
    console.log("Doubled array:", doubled);
    
    console.log("\nfilter method:");
    const evens = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
    console.log("Even numbers:", evens);
    
    console.log("\nreduce method:");
    const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
    console.log("Sum:", sum);
}

// Run loop demonstrations
demonstrateForLoops();
demonstrateWhileLoops();
demonstrateDoWhileLoops();
demonstrateForOfLoops();
demonstrateForInLoops();
demonstrateArrayMethods();

// ============================================
// BREAK AND CONTINUE EXAMPLES
// ============================================

console.log("\n=== Break and Continue Examples ===");

function demonstrateBreakContinue() {
    console.log("Break example:");
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            console.log("Breaking at 5");
            break;
        }
        console.log(`Number: ${i}`);
    }
    
    console.log("\nContinue example:");
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue; // Skip even numbers
        }
        console.log(`Odd number: ${i}`);
    }
    
    console.log("\nLabeled break example:");
    outerLoop: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === 1 && j === 1) {
                console.log("Breaking out of both loops");
                break outerLoop;
            }
            console.log(`i=${i}, j=${j}`);
        }
    }
    
    console.log("\nLabeled continue example:");
    outer: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (j === 1) {
                console.log(`Skipping j=1 for i=${i}`);
                continue outer;
            }
            console.log(`i=${i}, j=${j}`);
        }
    }
}

demonstrateBreakContinue();

// ============================================
// ERROR HANDLING EXAMPLES
// ============================================

console.log("\n=== Error Handling Examples ===");

// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

function demonstrateErrorHandling() {
    console.log("Basic try...catch:");
    try {
        const result = riskyOperation();
        console.log("Result:", result);
    } catch (error) {
        console.log("Caught error:", error.message);
    }
    
    console.log("\nTry...catch with finally:");
    try {
        console.log("Opening file...");
        // Simulate file operation
        throw new Error("File not found");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Closing file...");
    }
    
    console.log("\nCustom error handling:");
    try {
        validateAge(-5);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("Validation error:", error.message);
        } else {
            console.log("Unknown error:", error.message);
        }
    }
    
    console.log("\nMultiple error types:");
    try {
        const response = simulateNetworkRequest();
        if (response.status === 404) {
            throw new NetworkError("Resource not found", 404);
        }
        console.log("Success:", response.data);
    } catch (error) {
        if (error instanceof NetworkError) {
            console.log(`Network error ${error.statusCode}: ${error.message}`);
        } else {
            console.log("Unexpected error:", error.message);
        }
    }
}

// Helper functions for error handling examples
function riskyOperation() {
    const random = Math.random();
    if (random > 0.5) {
        throw new Error("Random error occurred");
    }
    return "Success";
}

function validateAge(age) {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative");
    }
    if (age > 150) {
        throw new ValidationError("Age seems unrealistic");
    }
    return true;
}

function simulateNetworkRequest() {
    const random = Math.random();
    if (random > 0.7) {
        return { status: 200, data: "Success" };
    } else if (random > 0.4) {
        return { status: 404, data: null };
    } else {
        throw new Error("Connection timeout");
    }
}

demonstrateErrorHandling();

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

// Grade calculator function
function calculateGrade() {
    const grade = parseInt(document.getElementById('gradeInput').value);
    const result = document.getElementById('gradeResult');
    
    if (isNaN(grade) || grade < 0 || grade > 100) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter a valid grade between 0 and 100!</div>';
        return;
    }
    
    let letterGrade;
    let message;
    
    if (grade >= 90) {
        letterGrade = "A";
        message = "Excellent!";
    } else if (grade >= 80) {
        letterGrade = "B";
        message = "Good job!";
    } else if (grade >= 70) {
        letterGrade = "C";
        message = "Satisfactory";
    } else if (grade >= 60) {
        letterGrade = "D";
        message = "Needs improvement";
    } else {
        letterGrade = "F";
        message = "Failed";
    }
    
    result.innerHTML = `
        <div class="result-display">
            <strong>Grade: ${grade}/100</strong><br>
            <strong>Letter Grade: ${letterGrade}</strong><br>
            <strong>Message: ${message}</strong>
        </div>
    `;
}

// Day of week function
function getDayMessage() {
    const day = document.getElementById('daySelect').value;
    const result = document.getElementById('dayResult');
    
    let message;
    switch (day) {
        case "Monday":
            message = "Start of work week - Let's get productive!";
            break;
        case "Tuesday":
            message = "Tuesday - The week is in full swing";
            break;
        case "Wednesday":
            message = "Hump day - Halfway through the week!";
            break;
        case "Thursday":
            message = "Thursday - Almost there!";
            break;
        case "Friday":
            message = "TGIF! - Time to celebrate the weekend!";
            break;
        case "Saturday":
            message = "Weekend! - Time to relax and have fun";
            break;
        case "Sunday":
            message = "Sunday - Rest day, prepare for the week ahead";
            break;
        default:
            message = "Unknown day";
    }
    
    result.innerHTML = `
        <div class="result-display">
            <strong>${day}:</strong> ${message}
        </div>
    `;
}

// Loop visualizer function
function visualizeLoop() {
    const loopType = document.getElementById('loopType').value;
    const count = parseInt(document.getElementById('loopCount').value);
    const result = document.getElementById('loopResult');
    
    if (isNaN(count) || count < 1 || count > 20) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter a valid number between 1 and 20!</div>';
        return;
    }
    
    let output = `<h4>Loop Visualization:</h4>`;
    output += `<div class="loop-visualization">`;
    
    switch (loopType) {
        case "for":
            output += `<p>for (let i = 0; i < ${count}; i++) {</p>`;
            for (let i = 0; i < count; i++) {
                output += `<p>  <span class="step-indicator active">Step ${i + 1}</span> i = ${i}</p>`;
            }
            output += `<p>}</p>`;
            break;
            
        case "while":
            output += `<p>let i = 0;</p>`;
            output += `<p>while (i < ${count}) {</p>`;
            for (let i = 0; i < count; i++) {
                output += `<p>  <span class="step-indicator active">Step ${i + 1}</span> i = ${i}</p>`;
            }
            output += `<p>}</p>`;
            break;
            
        case "doWhile":
            output += `<p>let i = 0;</p>`;
            output += `<p>do {</p>`;
            for (let i = 0; i < count; i++) {
                output += `<p>  <span class="step-indicator active">Step ${i + 1}</span> i = ${i}</p>`;
            }
            output += `<p>} while (i < ${count});</p>`;
            break;
            
        case "forOf":
            const items = Array.from({length: count}, (_, i) => `item${i + 1}`);
            output += `<p>const items = [${items.map(item => `"${item}"`).join(', ')}];</p>`;
            output += `<p>for (let item of items) {</p>`;
            items.forEach((item, index) => {
                output += `<p>  <span class="step-indicator active">Step ${index + 1}</span> item = "${item}"</p>`;
            });
            output += `<p>}</p>`;
            break;
    }
    
    output += `</div>`;
    result.innerHTML = output;
}

// Break/Continue demo function
function demoBreakContinue() {
    const result = document.getElementById('breakContinueResult');
    
    let output = '<h4>Break and Continue Demo:</h4>';
    
    // Break demo
    output += '<h5>Break Example:</h5>';
    output += '<div class="loop-visualization">';
    output += '<p>for (let i = 0; i < 10; i++) {</p>';
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            output += `<p>  <span class="step-indicator">BREAK</span> i = ${i} (breaking here)</p>`;
            break;
        }
        output += `<p>  <span class="step-indicator active">Step ${i + 1}</span> i = ${i}</p>`;
    }
    output += '<p>}</p>';
    output += '</div>';
    
    // Continue demo
    output += '<h5>Continue Example:</h5>';
    output += '<div class="loop-visualization">';
    output += '<p>for (let i = 0; i < 10; i++) {</p>';
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            output += `<p>  <span class="step-indicator">CONTINUE</span> i = ${i} (skipping even)</p>`;
            continue;
        }
        output += `<p>  <span class="step-indicator active">Step ${i + 1}</span> i = ${i} (odd number)</p>`;
    }
    output += '<p>}</p>';
    output += '</div>';
    
    result.innerHTML = output;
}

// Error handling test function
function testErrorHandling() {
    const code = document.getElementById('errorCode').value;
    const result = document.getElementById('errorResult');
    
    if (!code.trim()) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter some code to test!</div>';
        return;
    }
    
    try {
        // Create a safe evaluation environment
        const safeEval = new Function(code);
        const output = safeEval();
        
        result.innerHTML = `
            <div class="result-display">
                <strong>Code executed successfully!</strong><br>
                <strong>Output:</strong> ${output !== undefined ? output : 'undefined'}
            </div>
        `;
    } catch (error) {
        result.innerHTML = `
            <div style="color: #e74c3c;">
                <strong>Error caught:</strong><br>
                <strong>Type:</strong> ${error.name}<br>
                <strong>Message:</strong> ${error.message}<br>
                <strong>Stack:</strong> ${error.stack ? error.stack.split('\n')[0] : 'N/A'}
            </div>
        `;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to demonstrate loop performance
function demonstrateLoopPerformance() {
    console.log("\n=== Loop Performance Comparison ===");
    
    const array = Array.from({length: 10000}, (_, i) => i);
    
    // for loop
    console.time('for loop');
    let sum1 = 0;
    for (let i = 0; i < array.length; i++) {
        sum1 += array[i];
    }
    console.timeEnd('for loop');
    
    // for...of loop
    console.time('for...of loop');
    let sum2 = 0;
    for (let num of array) {
        sum2 += num;
    }
    console.timeEnd('for...of loop');
    
    // forEach
    console.time('forEach');
    let sum3 = 0;
    array.forEach(num => {
        sum3 += num;
    });
    console.timeEnd('forEach');
    
    // reduce
    console.time('reduce');
    const sum4 = array.reduce((acc, num) => acc + num, 0);
    console.timeEnd('reduce');
    
    console.log("All sums should be equal:", sum1 === sum2 && sum2 === sum3 && sum3 === sum4);
}

// Function to demonstrate common loop patterns
function demonstrateLoopPatterns() {
    console.log("\n=== Common Loop Patterns ===");
    
    // Pattern 1: Find first match
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let firstEven = null;
    
    for (let num of numbers) {
        if (num % 2 === 0) {
            firstEven = num;
            break;
        }
    }
    console.log("First even number:", firstEven);
    
    // Pattern 2: Collect matches
    const evens = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            evens.push(num);
        }
    }
    console.log("All even numbers:", evens);
    
    // Pattern 3: Transform array
    const doubled = [];
    for (let num of numbers) {
        doubled.push(num * 2);
    }
    console.log("Doubled numbers:", doubled);
    
    // Pattern 4: Nested loops
    console.log("Multiplication table (3x3):");
    for (let i = 1; i <= 3; i++) {
        let row = "";
        for (let j = 1; j <= 3; j++) {
            row += `${i * j}\t`;
        }
        console.log(row);
    }
}

// Run utility demonstrations
demonstrateLoopPerformance();
demonstrateLoopPatterns();
