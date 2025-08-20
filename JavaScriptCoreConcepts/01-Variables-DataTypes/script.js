// JavaScript Variables & Data Types - Interactive Examples

// ============================================
// VARIABLES EXAMPLES
// ============================================

// 1. Variable Declaration Examples
console.log("=== Variable Declaration Examples ===");

// var (function-scoped, hoisted)
var globalVar = "I'm a global variable";
console.log("var example:", globalVar);

// let (block-scoped, can be reassigned)
let blockVar = "I'm a block-scoped variable";
blockVar = "I can be reassigned";
console.log("let example:", blockVar);

// const (block-scoped, cannot be reassigned)
const constantVar = "I'm a constant";
// constantVar = "This would cause an error"; // Uncomment to see error
console.log("const example:", constantVar);

// Block scope demonstration
{
    let blockScoped = "I'm only available in this block";
    var functionScoped = "I'm available outside this block";
    console.log("Inside block:", blockScoped);
}
// console.log(blockScoped); // This would cause an error
console.log("Outside block:", functionScoped);

// ============================================
// DATA TYPES EXAMPLES
// ============================================

console.log("\n=== Data Types Examples ===");

// Number
const integer = 42;
const float = 3.14159;
const negative = -17;
const infinity = Infinity;
const notANumber = NaN;

console.log("Numbers:", {
    integer: integer,
    float: float,
    negative: negative,
    infinity: infinity,
    notANumber: notANumber
});

console.log("Type checks:", {
    integer: typeof integer,
    float: typeof float,
    infinity: typeof infinity,
    notANumber: typeof notANumber
});

// String
const singleQuotes = 'Hello';
const doubleQuotes = "World";
const templateLiteral = `Hello ${singleQuotes}`;
const multiLine = `
    This is a
    multi-line string
    using template literals
`;

console.log("Strings:", {
    singleQuotes: singleQuotes,
    doubleQuotes: doubleQuotes,
    templateLiteral: templateLiteral,
    multiLine: multiLine
});

// Boolean
const isTrue = true;
const isFalse = false;
const truthy = Boolean(1);
const falsy = Boolean(0);

console.log("Booleans:", {
    isTrue: isTrue,
    isFalse: isFalse,
    truthy: truthy,
    falsy: falsy
});

// Undefined and Null
let undefinedVar;
const nullVar = null;

console.log("Special types:", {
    undefined: undefinedVar,
    null: nullVar,
    undefinedType: typeof undefinedVar,
    nullType: typeof nullVar // JavaScript quirk: typeof null is "object"
});

// Symbol (ES6+)
const symbol1 = Symbol("description");
const symbol2 = Symbol("description");
console.log("Symbols:", {
    symbol1: symbol1,
    symbol2: symbol2,
    areEqual: symbol1 === symbol2, // false - symbols are unique
    type: typeof symbol1
});

// BigInt (ES2020+)
const bigNumber = 9007199254740991n;
const bigResult = bigNumber + 1n;
console.log("BigInt:", {
    bigNumber: bigNumber,
    bigResult: bigResult,
    type: typeof bigNumber
});

// ============================================
// TYPE CONVERSION EXAMPLES
// ============================================

console.log("\n=== Type Conversion Examples ===");

// Explicit Conversion
const stringToNumber = Number("42");
const stringToInt = parseInt("42.5");
const stringToFloat = parseFloat("42.5");
const numberToString = String(42);
const booleanFromNumber = Boolean(1);
const booleanFromZero = Boolean(0);

console.log("Explicit conversions:", {
    stringToNumber: stringToNumber,
    stringToInt: stringToInt,
    stringToFloat: stringToFloat,
    numberToString: numberToString,
    booleanFromNumber: booleanFromNumber,
    booleanFromZero: booleanFromZero
});

// Implicit Conversion (Type Coercion)
console.log("Implicit conversions:");
console.log("'5' + 3 =", "5" + 3);     // "53" (string concatenation)
console.log("'5' - 3 =", "5" - 3);     // 2 (number subtraction)
console.log("'5' * '3' =", "5" * "3"); // 15 (number multiplication)
console.log("true + 1 =", true + 1);   // 2 (true becomes 1)
console.log("false + 1 =", false + 1); // 1 (false becomes 0)
console.log("'5' == 5 =", "5" == 5);   // true (loose equality)
console.log("'5' === 5 =", "5" === 5); // false (strict equality)

// ============================================
// TEMPLATE LITERALS EXAMPLES
// ============================================

console.log("\n=== Template Literals Examples ===");

const name = "Alice";
const age = 30;
const city = "Paris";

// Old way vs Template literals
const oldWay = "My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
const newWay = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;

console.log("String concatenation vs Template literals:");
console.log("Old way:", oldWay);
console.log("New way:", newWay);

// Expressions in template literals
const sum = 5 + 3;
const expression = `The sum of 5 and 3 is ${sum}`;
const conditional = `You are ${age >= 18 ? 'an adult' : 'a minor'}`;

console.log("Expressions in template literals:");
console.log(expression);
console.log(conditional);

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

// Function to test variable declarations
function testVariables() {
    const input = document.getElementById('varInput').value;
    const output = document.getElementById('varOutput');
    
    if (!input) {
        output.innerHTML = '<div style="color: #e74c3c;">Please enter a value!</div>';
        return;
    }
    
    let result = `<h4>Variable Test Results:</h4>`;
    result += `<p><strong>Input:</strong> "${input}"</p>`;
    result += `<p><strong>Type:</strong> ${typeof input}</p>`;
    
    // Test different variable declarations
    const constVar = input;
    let letVar = input;
    var varVar = input;
    
    result += `<p><strong>const:</strong> ${constVar}</p>`;
    result += `<p><strong>let:</strong> ${letVar}</p>`;
    result += `<p><strong>var:</strong> ${varVar}</p>`;
    
    // Try to reassign let variable
    letVar = input + " (modified)";
    result += `<p><strong>let after reassignment:</strong> ${letVar}</p>`;
    
    output.innerHTML = result;
}

// Function to test type conversion
function testTypeConversion() {
    const input = document.getElementById('convertInput').value;
    const output = document.getElementById('convertOutput');
    
    if (!input) {
        output.innerHTML = '<div style="color: #e74c3c;">Please enter a value!</div>';
        return;
    }
    
    let result = `<h4>Type Conversion Results:</h4>`;
    result += `<p><strong>Original:</strong> "${input}" (${typeof input})</p>`;
    
    // Test different conversions
    const asNumber = Number(input);
    const asInt = parseInt(input);
    const asFloat = parseFloat(input);
    const asBoolean = Boolean(input);
    const asString = String(input);
    
    result += `<p><strong>As Number:</strong> ${asNumber} (${typeof asNumber})</p>`;
    result += `<p><strong>As Integer:</strong> ${asInt} (${typeof asInt})</p>`;
    result += `<p><strong>As Float:</strong> ${asFloat} (${typeof asFloat})</p>`;
    result += `<p><strong>As Boolean:</strong> ${asBoolean} (${typeof asBoolean})</p>`;
    result += `<p><strong>As String:</strong> "${asString}" (${typeof asString})</p>`;
    
    // Check if it's NaN
    if (isNaN(asNumber)) {
        result += `<p style="color: #e74c3c;"><strong>Note:</strong> Input cannot be converted to a valid number</p>`;
    }
    
    output.innerHTML = result;
}

// Function to build template literal
function buildTemplateLiteral() {
    const name = document.getElementById('tlName').value;
    const age = document.getElementById('tlAge').value;
    const city = document.getElementById('tlCity').value;
    const output = document.getElementById('tlOutput');
    
    if (!name || !age || !city) {
        output.innerHTML = '<div style="color: #e74c3c;">Please fill in all fields!</div>';
        return;
    }
    
    const message = `Hello! My name is ${name}, I am ${age} years old, and I live in ${city}.`;
    const oldWay = "Hello! My name is " + name + ", I am " + age + " years old, and I live in " + city + ".";
    
    let result = `<h4>Template Literal vs String Concatenation:</h4>`;
    result += `<p><strong>Template Literal:</strong></p>`;
    result += `<div style="background: #2c3e50; color: #ecf0f1; padding: 10px; border-radius: 5px; margin: 5px 0;">${message}</div>`;
    result += `<p><strong>String Concatenation:</strong></p>`;
    result += `<div style="background: #2c3e50; color: #ecf0f1; padding: 10px; border-radius: 5px; margin: 5px 0;">${oldWay}</div>`;
    
    output.innerHTML = result;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to check if a value is truthy or falsy
function checkTruthiness(value) {
    if (value) {
        return "truthy";
    } else {
        return "falsy";
    }
}

// Function to demonstrate hoisting
function demonstrateHoisting() {
    console.log("Before declaration:", hoistedVar); // undefined (not error)
    var hoistedVar = "I'm hoisted!";
    console.log("After declaration:", hoistedVar);
}

// Function to demonstrate temporal dead zone
function demonstrateTDZ() {
    // console.log(tdzVar); // This would cause an error (temporal dead zone)
    let tdzVar = "I'm in temporal dead zone";
    console.log("After declaration:", tdzVar);
}

// Run demonstrations
console.log("\n=== Advanced Concepts ===");
demonstrateHoisting();
demonstrateTDZ();

// Truthiness examples
console.log("\n=== Truthiness Examples ===");
const truthyValues = [1, "hello", [], {}, true];
const falsyValues = [0, "", null, undefined, false, NaN];

console.log("Truthy values:");
truthyValues.forEach(value => {
    console.log(`${value} is ${checkTruthiness(value)}`);
});

console.log("Falsy values:");
falsyValues.forEach(value => {
    console.log(`${value} is ${checkTruthiness(value)}`);
});
