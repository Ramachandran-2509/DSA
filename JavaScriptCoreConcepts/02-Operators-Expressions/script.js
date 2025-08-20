// JavaScript Operators & Expressions - Interactive Examples

// ============================================
// ARITHMETIC OPERATORS EXAMPLES
// ============================================

console.log("=== Arithmetic Operators Examples ===");

// Basic arithmetic operations
const a = 10;
const b = 3;

console.log("Basic arithmetic:");
console.log(`${a} + ${b} =`, a + b);      // 13
console.log(`${a} - ${b} =`, a - b);      // 7
console.log(`${a} * ${b} =`, a * b);      // 30
console.log(`${a} / ${b} =`, a / b);      // 3.333...
console.log(`${a} % ${b} =`, a % b);      // 1
console.log(`${a} ** ${b} =`, a ** b);    // 1000

// Type coercion examples
console.log("\nType coercion:");
console.log('"5" + 3 =', "5" + 3);        // "53"
console.log('"5" - 3 =', "5" - 3);        // 2
console.log('"5" * "3" =', "5" * "3");    // 15
console.log('"10" / "2" =', "10" / "2");  // 5

// Special cases
console.log("\nSpecial cases:");
console.log("10 / 0 =", 10 / 0);          // Infinity
console.log("-10 / 0 =", -10 / 0);        // -Infinity
console.log("0 / 0 =", 0 / 0);            // NaN
console.log("Infinity + 1 =", Infinity + 1); // Infinity

// ============================================
// ASSIGNMENT OPERATORS EXAMPLES
// ============================================

console.log("\n=== Assignment Operators Examples ===");

let x = 5;
console.log("Initial x =", x);

x += 3;  // x = x + 3
console.log("After x += 3:", x);  // 8

x -= 2;  // x = x - 2
console.log("After x -= 2:", x);  // 6

x *= 4;  // x = x * 4
console.log("After x *= 4:", x);  // 24

x /= 3;  // x = x / 3
console.log("After x /= 3:", x);  // 8

x %= 5;  // x = x % 5
console.log("After x %= 5:", x);  // 3

x **= 2; // x = x ** 2
console.log("After x **= 2:", x); // 9

// ============================================
// COMPARISON OPERATORS EXAMPLES
// ============================================

console.log("\n=== Comparison Operators Examples ===");

// Equality operators
console.log("Equality comparisons:");
console.log('5 == "5" =', 5 == "5");      // true (loose equality)
console.log('5 === "5" =', 5 === "5");    // false (strict equality)
console.log('5 != "6" =', 5 != "6");      // true
console.log('5 !== "5" =', 5 !== "5");    // true

// Relational operators
console.log("\nRelational comparisons:");
console.log("10 > 5 =", 10 > 5);          // true
console.log("5 < 10 =", 5 < 10);          // true
console.log("5 >= 5 =", 5 >= 5);          // true
console.log("5 <= 4 =", 5 <= 4);          // false

// Special comparison cases
console.log("\nSpecial comparison cases:");
console.log("null == undefined =", null == undefined);     // true
console.log("null === undefined =", null === undefined);   // false
console.log("NaN == NaN =", NaN == NaN);                   // false
console.log("NaN === NaN =", NaN === NaN);                 // false
console.log("isNaN(NaN) =", isNaN(NaN));                   // true

// ============================================
// LOGICAL OPERATORS EXAMPLES
// ============================================

console.log("\n=== Logical Operators Examples ===");

// Logical AND (&&)
console.log("Logical AND:");
console.log("true && true =", true && true);           // true
console.log("true && false =", true && false);         // false
console.log("false && true =", false && true);         // false
console.log("false && false =", false && false);       // false

// Logical OR (||)
console.log("\nLogical OR:");
console.log("true || true =", true || true);           // true
console.log("true || false =", true || false);         // true
console.log("false || true =", false || true);         // true
console.log("false || false =", false || false);       // false

// Logical NOT (!)
console.log("\nLogical NOT:");
console.log("!true =", !true);                         // false
console.log("!false =", !false);                       // true
console.log("!0 =", !0);                               // true
console.log('!"" =', !"");                             // true
console.log("!null =", !null);                         // true
console.log("!undefined =", !undefined);               // true

// Nullish coalescing (??)
console.log("\nNullish coalescing:");
console.log('null ?? "default" =', null ?? "default");           // "default"
console.log('undefined ?? "default" =', undefined ?? "default"); // "default"
console.log('0 ?? "default" =', 0 ?? "default");                 // 0
console.log('"" ?? "default" =', "" ?? "default");               // ""
console.log('false ?? "default" =', false ?? "default");         // false

// Short-circuit evaluation
console.log("\nShort-circuit evaluation:");
let shortCircuit = false && console.log("This won't run");
console.log("shortCircuit =", shortCircuit); // false

let shortCircuit2 = true || console.log("This won't run either");
console.log("shortCircuit2 =", shortCircuit2); // true

// ============================================
// INCREMENT/DECREMENT OPERATORS EXAMPLES
// ============================================

console.log("\n=== Increment/Decrement Operators Examples ===");

// Prefix increment
let prefix = 5;
let prefixResult = ++prefix;
console.log("Prefix increment:");
console.log("let prefix = 5;");
console.log("let prefixResult = ++prefix;");
console.log("prefix =", prefix);           // 6
console.log("prefixResult =", prefixResult); // 6

// Postfix increment
let postfix = 5;
let postfixResult = postfix++;
console.log("\nPostfix increment:");
console.log("let postfix = 5;");
console.log("let postfixResult = postfix++;");
console.log("postfix =", postfix);         // 6
console.log("postfixResult =", postfixResult); // 5

// Prefix decrement
let prefixDec = 5;
let prefixDecResult = --prefixDec;
console.log("\nPrefix decrement:");
console.log("let prefixDec = 5;");
console.log("let prefixDecResult = --prefixDec;");
console.log("prefixDec =", prefixDec);     // 4
console.log("prefixDecResult =", prefixDecResult); // 4

// Postfix decrement
let postfixDec = 5;
let postfixDecResult = postfixDec--;
console.log("\nPostfix decrement:");
console.log("let postfixDec = 5;");
console.log("let postfixDecResult = postfixDec--;");
console.log("postfixDec =", postfixDec);   // 4
console.log("postfixDecResult =", postfixDecResult); // 5

// ============================================
// BITWISE OPERATORS EXAMPLES
// ============================================

console.log("\n=== Bitwise Operators Examples ===");

const num1 = 5;  // 101 in binary
const num2 = 3;  // 011 in binary

console.log("Bitwise operations:");
console.log(`${num1} & ${num2} =`, num1 & num2);   // 1 (001)
console.log(`${num1} | ${num2} =`, num1 | num2);   // 7 (111)
console.log(`${num1} ^ ${num2} =`, num1 ^ num2);   // 6 (110)
console.log(`~${num1} =`, ~num1);                  // -6

// Bitwise shifts
console.log("\nBitwise shifts:");
console.log(`${num1} << 1 =`, num1 << 1);  // 10 (1010)
console.log(`${num1} >> 1 =`, num1 >> 1);  // 2 (010)
console.log(`${num1} >>> 1 =`, num1 >>> 1); // 2 (010)

// ============================================
// OPERATOR PRECEDENCE EXAMPLES
// ============================================

console.log("\n=== Operator Precedence Examples ===");

console.log("Precedence examples:");
console.log("2 + 3 * 4 =", 2 + 3 * 4);           // 14 (not 20)
console.log("(2 + 3) * 4 =", (2 + 3) * 4);       // 20
console.log("2 ** 3 + 1 =", 2 ** 3 + 1);         // 9 (not 16)
console.log("(2 ** 3) + 1 =", (2 ** 3) + 1);     // 9
console.log("2 ** (3 + 1) =", 2 ** (3 + 1));     // 16

// Complex precedence
console.log("\nComplex precedence:");
console.log("5 + 3 * 2 ** 2 =", 5 + 3 * 2 ** 2); // 17
console.log("(5 + 3) * 2 ** 2 =", (5 + 3) * 2 ** 2); // 32

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

// Arithmetic calculator function
function calculateArithmetic() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('arithmeticOp').value;
    const result = document.getElementById('arithmeticResult');
    
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter valid numbers!</div>';
        return;
    }
    
    let calculation;
    let symbol;
    
    switch (operator) {
        case '+':
            calculation = num1 + num2;
            symbol = '+';
            break;
        case '-':
            calculation = num1 - num2;
            symbol = '-';
            break;
        case '*':
            calculation = num1 * num2;
            symbol = '×';
            break;
        case '/':
            if (num2 === 0) {
                result.innerHTML = '<div style="color: #e74c3c;">Cannot divide by zero!</div>';
                return;
            }
            calculation = num1 / num2;
            symbol = '÷';
            break;
        case '%':
            calculation = num1 % num2;
            symbol = '%';
            break;
        case '**':
            calculation = num1 ** num2;
            symbol = '^';
            break;
        default:
            result.innerHTML = '<div style="color: #e74c3c;">Invalid operator!</div>';
            return;
    }
    
    result.innerHTML = `
        <div class="result-display">
            <strong>${num1} ${symbol} ${num2} = ${calculation}</strong>
        </div>
    `;
}

// Assignment operator demo function
function demoAssignment() {
    const result = document.getElementById('assignmentResult');
    
    let x = 10;
    let output = '<h4>Assignment Operator Demo:</h4>';
    output += `<p>Initial value: x = ${x}</p>`;
    
    x += 5;
    output += `<p>After x += 5: x = ${x}</p>`;
    
    x -= 3;
    output += `<p>After x -= 3: x = ${x}</p>`;
    
    x *= 2;
    output += `<p>After x *= 2: x = ${x}</p>`;
    
    x /= 4;
    output += `<p>After x /= 4: x = ${x}</p>`;
    
    x %= 3;
    output += `<p>After x %= 3: x = ${x}</p>`;
    
    x **= 2;
    output += `<p>After x **= 2: x = ${x}</p>`;
    
    result.innerHTML = output;
}

// Comparison tester function
function testComparison() {
    const val1 = document.getElementById('comp1').value;
    const val2 = document.getElementById('comp2').value;
    const operator = document.getElementById('comparisonOp').value;
    const result = document.getElementById('comparisonResult');
    
    if (!val1 || !val2) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter both values!</div>';
        return;
    }
    
    let comparison;
    let symbol;
    
    switch (operator) {
        case '==':
            comparison = val1 == val2;
            symbol = '==';
            break;
        case '===':
            comparison = val1 === val2;
            symbol = '===';
            break;
        case '!=':
            comparison = val1 != val2;
            symbol = '!=';
            break;
        case '!==':
            comparison = val1 !== val2;
            symbol = '!==';
            break;
        case '>':
            comparison = val1 > val2;
            symbol = '>';
            break;
        case '<':
            comparison = val1 < val2;
            symbol = '<';
            break;
        case '>=':
            comparison = val1 >= val2;
            symbol = '>=';
            break;
        case '<=':
            comparison = val1 <= val2;
            symbol = '<=';
            break;
        default:
            result.innerHTML = '<div style="color: #e74c3c;">Invalid operator!</div>';
            return;
    }
    
    result.innerHTML = `
        <div class="result-display">
            <strong>"${val1}" ${symbol} "${val2}" = ${comparison}</strong>
        </div>
    `;
}

// Logical operator tester function
function testLogical() {
    const val1 = document.getElementById('logical1').value.toLowerCase();
    const val2 = document.getElementById('logical2').value.toLowerCase();
    const operator = document.getElementById('logicalOp').value;
    const result = document.getElementById('logicalResult');
    
    if (!val1 || !val2) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter both values!</div>';
        return;
    }
    
    // Convert string inputs to boolean
    const bool1 = val1 === 'true' || val1 === '1';
    const bool2 = val2 === 'true' || val2 === '1';
    
    let logicalResult;
    let symbol;
    
    switch (operator) {
        case '&&':
            logicalResult = bool1 && bool2;
            symbol = '&&';
            break;
        case '||':
            logicalResult = bool1 || bool2;
            symbol = '||';
            break;
        default:
            result.innerHTML = '<div style="color: #e74c3c;">Invalid operator!</div>';
            return;
    }
    
    result.innerHTML = `
        <div class="result-display">
            <strong>${bool1} ${symbol} ${bool2} = ${logicalResult}</strong>
        </div>
    `;
}

// Increment/decrement demo function
function demoIncrement() {
    const result = document.getElementById('incrementResult');
    
    let output = '<h4>Increment/Decrement Demo:</h4>';
    
    // Prefix increment
    let x = 5;
    let y = ++x;
    output += `<p>Prefix increment: let x = 5; let y = ++x;</p>`;
    output += `<p>Result: x = ${x}, y = ${y}</p>`;
    
    // Postfix increment
    x = 5;
    y = x++;
    output += `<p>Postfix increment: let x = 5; let y = x++;</p>`;
    output += `<p>Result: x = ${x}, y = ${y}</p>`;
    
    // Prefix decrement
    x = 5;
    y = --x;
    output += `<p>Prefix decrement: let x = 5; let y = --x;</p>`;
    output += `<p>Result: x = ${x}, y = ${y}</p>`;
    
    // Postfix decrement
    x = 5;
    y = x--;
    output += `<p>Postfix decrement: let x = 5; let y = x--;</p>`;
    output += `<p>Result: x = ${x}, y = ${y}</p>`;
    
    result.innerHTML = output;
}

// Bitwise calculator function
function calculateBitwise() {
    const num1 = parseInt(document.getElementById('bit1').value);
    const num2 = parseInt(document.getElementById('bit2').value);
    const operator = document.getElementById('bitwiseOp').value;
    const result = document.getElementById('bitwiseResult');
    
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter valid integers!</div>';
        return;
    }
    
    let calculation;
    let symbol;
    
    switch (operator) {
        case '&':
            calculation = num1 & num2;
            symbol = '&';
            break;
        case '|':
            calculation = num1 | num2;
            symbol = '|';
            break;
        case '^':
            calculation = num1 ^ num2;
            symbol = '^';
            break;
        default:
            result.innerHTML = '<div style="color: #e74c3c;">Invalid operator!</div>';
            return;
    }
    
    result.innerHTML = `
        <div class="result-display">
            <strong>${num1} ${symbol} ${num2} = ${calculation}</strong>
        </div>
    `;
}

// Expression evaluator function
function evaluateExpression() {
    const expression = document.getElementById('expression').value;
    const result = document.getElementById('precedenceResult');
    
    if (!expression) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter an expression!</div>';
        return;
    }
    
    try {
        // Use Function constructor to safely evaluate the expression
        const evaluated = new Function(`return ${expression}`)();
        result.innerHTML = `
            <div class="result-display">
                <strong>${expression} = ${evaluated}</strong>
            </div>
        `;
    } catch (error) {
        result.innerHTML = `
            <div style="color: #e74c3c;">
                <strong>Error:</strong> Invalid expression - ${error.message}
            </div>
        `;
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to demonstrate operator precedence
function demonstratePrecedence() {
    console.log("\n=== Precedence Demonstration ===");
    
    const examples = [
        "2 + 3 * 4",
        "(2 + 3) * 4",
        "2 ** 3 + 1",
        "5 + 3 * 2 ** 2",
        "10 / 2 + 3 * 2"
    ];
    
    examples.forEach(expr => {
        try {
            const result = new Function(`return ${expr}`)();
            console.log(`${expr} = ${result}`);
        } catch (error) {
            console.log(`${expr} = Error: ${error.message}`);
        }
    });
}

// Function to demonstrate type coercion
function demonstrateTypeCoercion() {
    console.log("\n=== Type Coercion Examples ===");
    
    const examples = [
        ['"5" + 3', "5" + 3],
        ['"5" - 3', "5" - 3],
        ['"5" * "3"', "5" * "3"],
        ['true + 1', true + 1],
        ['false + 1', false + 1],
        ['[] + []', [] + []],
        ['[] + {}', [] + {}],
        ['{} + []', {} + []]
    ];
    
    examples.forEach(([expr, result]) => {
        console.log(`${expr} = ${result} (${typeof result})`);
    });
}

// Run demonstrations
demonstratePrecedence();
demonstrateTypeCoercion();
