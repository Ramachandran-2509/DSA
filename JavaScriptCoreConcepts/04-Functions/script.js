// JavaScript Functions - Interactive Examples

// ============================================
// FUNCTION DECLARATIONS EXAMPLES
// ============================================

console.log("=== Function Declarations Examples ===");

// Basic function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

console.log("Basic function:", greet("John"));

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log("Add function:", add(5, 3));

// Function with default parameters
function multiply(a, b = 1) {
    return a * b;
}

console.log("Multiply with default:", multiply(5));
console.log("Multiply with both params:", multiply(5, 3));

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum with rest params:", sum(1, 2, 3, 4, 5));

// Function with destructuring
function processUser({name, age, city = "Unknown"}) {
    return `${name} is ${age} years old from ${city}`;
}

let user = {name: "John", age: 30};
console.log("Process user:", processUser(user));

// ============================================
// FUNCTION EXPRESSIONS EXAMPLES
// ============================================

console.log("\n=== Function Expressions Examples ===");

// Anonymous function expression
let greetExpr = function(name) {
    return "Hello, " + name + "!";
};

console.log("Function expression:", greetExpr("Alice"));

// Function expression with multiple operations
let calculate = function(a, b, operation) {
    switch(operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        case 'multiply': return a * b;
        case 'divide': return a / b;
        default: return NaN;
    }
};

console.log("Calculate function:", calculate(10, 5, 'multiply'));

// IIFE examples
(function() {
    console.log("IIFE executed immediately");
})();

let iifeResult = (function(a, b) {
    return a + b;
})(5, 3);

console.log("IIFE result:", iifeResult);

// Function as object property
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    }
};

console.log("Calculator object:", calculator.add(5, 3));

// ============================================
// ARROW FUNCTIONS EXAMPLES
// ============================================

console.log("\n=== Arrow Functions Examples ===");

// Basic arrow functions
let greetArrow = name => "Hello, " + name + "!";
let addArrow = (a, b) => a + b;
let getRandom = () => Math.random();

console.log("Arrow function:", greetArrow("Bob"));
console.log("Arrow add:", addArrow(4, 6));
console.log("Arrow random:", getRandom());

// Arrow function with multiple lines
let processArrow = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return {sum, product};
};

console.log("Arrow process:", processArrow(3, 4));

// Arrow functions with arrays
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
let evens = numbers.filter(num => num % 2 === 0);
let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Arrow with arrays:");
console.log("Doubled:", doubled);
console.log("Evens:", evens);
console.log("Sum:", sum);

// Arrow functions vs regular functions (this context)
let obj = {
    name: "Object",
    regularMethod: function() {
        return "Regular: " + this.name;
    },
    arrowMethod: () => {
        return "Arrow: " + (this.name || "undefined");
    }
};

console.log("This context comparison:");
console.log(obj.regularMethod());
console.log(obj.arrowMethod());

// ============================================
// ADVANCED FUNCTION CONCEPTS EXAMPLES
// ============================================

console.log("\n=== Advanced Function Concepts Examples ===");

// Closures
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

let counter1 = createCounter();
let counter2 = createCounter();

console.log("Closure counters:");
console.log("Counter1:", counter1());
console.log("Counter1:", counter1());
console.log("Counter2:", counter2());

// Closure with parameters
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

let multiplyByTwo = multiply(2);
let multiplyByTen = multiply(10);

console.log("Closure with params:");
console.log("Multiply by 2:", multiplyByTwo(5));
console.log("Multiply by 10:", multiplyByTen(5));

// Higher-order functions
function createGreeter(greeting) {
    return function(name) {
        return greeting + ", " + name + "!";
    };
}

let sayHello = createGreeter("Hello");
let sayGoodbye = createGreeter("Goodbye");

console.log("Higher-order functions:");
console.log(sayHello("John"));
console.log(sayGoodbye("John"));

// Function composition
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

function pipe(...fns) {
    return function(x) {
        return fns.reduce((acc, fn) => fn(acc), x);
    };
}

let addOne = x => x + 1;
let double = x => x * 2;
let square = x => x * x;

let composed = compose(square, double, addOne);
let piped = pipe(addOne, double, square);

console.log("Function composition:");
console.log("Composed(3):", composed(3));
console.log("Piped(3):", piped(3));

// Currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, args.concat(moreArgs));
        };
    };
}

let curriedAdd = curry((a, b, c) => a + b + c);

console.log("Currying:");
console.log("Curried add:", curriedAdd(1)(2)(3));
console.log("Curried add partial:", curriedAdd(1, 2)(3));

// ============================================
// FUNCTION CONTEXT AND 'THIS' EXAMPLES
// ============================================

console.log("\n=== Function Context and 'this' Examples ===");

// Understanding 'this'
let contextObj = {
    name: "Context Object",
    greet: function() {
        return "Hello from " + this.name;
    }
};

console.log("Method context:", contextObj.greet());

// Constructor context
function Person(name) {
    this.name = name;
    this.greet = function() {
        return "Hello, I'm " + this.name;
    };
}

let person = new Person("John");
console.log("Constructor context:", person.greet());

// Binding 'this'
let person2 = {
    name: "John",
    greet: function() {
        return "Hello, " + this.name;
    }
};

let result1 = person2.greet.call({name: "Alice"});
let result2 = person2.greet.apply({name: "Bob"});
let boundGreet = person2.greet.bind({name: "Charlie"});
let result3 = boundGreet();

console.log("Binding 'this':");
console.log("Call:", result1);
console.log("Apply:", result2);
console.log("Bind:", result3);

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

// Function calculator
function calculateWithFunction() {
    const num1 = parseFloat(document.getElementById('calcNum1').value);
    const num2 = parseFloat(document.getElementById('calcNum2').value);
    const operator = document.getElementById('calcOperator').value;
    const result = document.getElementById('calcResult');
    
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter valid numbers!</div>';
        return;
    }
    
    let calculation;
    let symbol;
    
    switch (operator) {
        case 'add':
            calculation = num1 + num2;
            symbol = '+';
            break;
        case 'subtract':
            calculation = num1 - num2;
            symbol = '-';
            break;
        case 'multiply':
            calculation = num1 * num2;
            symbol = '×';
            break;
        case 'divide':
            if (num2 === 0) {
                result.innerHTML = '<div style="color: #e74c3c;">Cannot divide by zero!</div>';
                return;
            }
            calculation = num1 / num2;
            symbol = '÷';
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

// IIFE demo
function demoIIFE() {
    const result = document.getElementById('iifeResult');
    
    let output = '<h4>IIFE Examples:</h4>';
    
    // Basic IIFE
    output += '<div class="function-visualization">';
    output += '<p>Basic IIFE:</p>';
    output += '<p>(function() {</p>';
    output += '<p>  console.log("IIFE executed immediately");</p>';
    output += '<p>})();</p>';
    output += '<p>Output: IIFE executed immediately</p>';
    output += '</div>';
    
    // IIFE with parameters
    output += '<div class="function-visualization">';
    output += '<p>IIFE with parameters:</p>';
    output += '<p>(function(name) {</p>';
    output += '<p>  return "Hello, " + name + "!";</p>';
    output += '<p>})("World");</p>';
    output += '<p>Output: Hello, World!</p>';
    output += '</div>';
    
    // IIFE that returns value
    let iifeResult = (function(a, b) {
        return a + b;
    })(5, 3);
    
    output += '<div class="function-visualization">';
    output += '<p>IIFE that returns value:</p>';
    output += '<p>let result = (function(a, b) {</p>';
    output += '<p>  return a + b;</p>';
    output += '<p>})(5, 3);</p>';
    output += `<p>Result: ${iifeResult}</p>`;
    output += '</div>';
    
    result.innerHTML = output;
}

// Arrow function converter
function convertToArrow() {
    const code = document.getElementById('functionCode').value;
    const result = document.getElementById('arrowResult');
    
    if (!code.trim()) {
        result.innerHTML = '<div style="color: #e74c3c;">Please enter a function to convert!</div>';
        return;
    }
    
    try {
        // Simple conversion logic (this is a basic implementation)
        let converted = code
            .replace(/function\s+(\w+)\s*\(([^)]*)\)\s*\{([^}]*)\}/g, 'let $1 = ($2) => {$3}')
            .replace(/function\s*\(([^)]*)\)\s*\{([^}]*)\}/g, '($1) => {$2}')
            .replace(/return\s+([^;]+);/g, 'return $1');
        
        // Handle single return statements
        if (converted.includes('return') && !converted.includes('{')) {
            converted = converted.replace(/return\s+([^;]+);/, '$1');
        }
        
        result.innerHTML = `
            <div class="result-display">
                <strong>Converted to Arrow Function:</strong><br>
                <pre>${converted}</pre>
            </div>
        `;
    } catch (error) {
        result.innerHTML = `
            <div style="color: #e74c3c;">
                <strong>Error:</strong> Could not convert function - ${error.message}
            </div>
        `;
    }
}

// Closure counter demo
let currentCounter = null;

function createNewCounter() {
    const result = document.getElementById('counterResult');
    
    let count = 0;
    currentCounter = function() {
        return ++count;
    };
    
    result.innerHTML = `
        <div class="result-display">
            <strong>New counter created!</strong><br>
            <strong>Current count:</strong> 0
        </div>
    `;
}

function incrementCounter() {
    const result = document.getElementById('counterResult');
    
    if (!currentCounter) {
        result.innerHTML = '<div style="color: #e74c3c;">Please create a counter first!</div>';
        return;
    }
    
    const newCount = currentCounter();
    
    result.innerHTML = `
        <div class="result-display">
            <strong>Counter incremented!</strong><br>
            <strong>Current count:</strong> ${newCount}
        </div>
    `;
}

function resetCounter() {
    const result = document.getElementById('counterResult');
    
    if (!currentCounter) {
        result.innerHTML = '<div style="color: #e74c3c;">Please create a counter first!</div>';
        return;
    }
    
    createNewCounter();
    
    result.innerHTML = `
        <div class="result-display">
            <strong>Counter reset!</strong><br>
            <strong>Current count:</strong> 0
        </div>
    `;
}

// 'this' context demo
function demoThisContext() {
    const result = document.getElementById('thisResult');
    
    let output = '<h4>Context and \'this\' Demo:</h4>';
    
    // Global context
    output += '<div class="function-visualization">';
    output += '<p>Global context:</p>';
    output += '<p>console.log(this); // window (browser) or global (Node.js)</p>';
    output += '</div>';
    
    // Method context
    let obj = {
        name: "Demo Object",
        greet: function() {
            return "Hello from " + this.name;
        }
    };
    
    output += '<div class="function-visualization">';
    output += '<p>Method context:</p>';
    output += '<p>let obj = { name: "Demo Object", greet: function() { ... } };</p>';
    output += `<p>obj.greet(): ${obj.greet()}</p>`;
    output += '</div>';
    
    // Constructor context
    function DemoPerson(name) {
        this.name = name;
        this.greet = function() {
            return "Hello, I\'m " + this.name;
        };
    }
    
    let demoPerson = new DemoPerson("Demo Person");
    
    output += '<div class="function-visualization">';
    output += '<p>Constructor context:</p>';
    output += '<p>function DemoPerson(name) { this.name = name; ... }</p>';
    output += `<p>new DemoPerson("Demo Person").greet(): ${demoPerson.greet()}</p>`;
    output += '</div>';
    
    // Binding demo
    let person3 = {
        name: "Original",
        greet: function() {
            return "Hello, " + this.name;
        }
    };
    
    let boundResult = person3.greet.call({name: "Bound"});
    
    output += '<div class="function-visualization">';
    output += '<p>Binding \'this\':</p>';
    output += '<p>person.greet.call({name: "Bound"}):</p>';
    output += `<p>Result: ${boundResult}</p>`;
    output += '</div>';
    
    result.innerHTML = output;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Function to demonstrate function hoisting
function demonstrateHoisting() {
    console.log("\n=== Function Hoisting ===");
    
    // Function declarations are hoisted
    console.log("Function declaration hoisting:");
    console.log(greetHoisted("John")); // Works
    
    function greetHoisted(name) {
        return "Hello, " + name + "!";
    }
    
    // Function expressions are not hoisted
    try {
        console.log(greetExprHoisted("John")); // Error
    } catch (error) {
        console.log("Function expression not hoisted:", error.message);
    }
    
    let greetExprHoisted = function(name) {
        return "Hello, " + name + "!";
    };
}

// Function to demonstrate function scope
function demonstrateScope() {
    console.log("\n=== Function Scope ===");
    
    let globalVar = "I'm global";
    
    function outer() {
        let outerVar = "I'm from outer";
        
        function inner() {
            let innerVar = "I'm from inner";
            console.log("Inner can access:", globalVar, outerVar, innerVar);
        }
        
        inner();
        console.log("Outer can access:", globalVar, outerVar);
        // console.log(innerVar); // Error - innerVar not accessible
    }
    
    outer();
    console.log("Global can access:", globalVar);
    // console.log(outerVar); // Error - outerVar not accessible
}

// Function to demonstrate recursion
function demonstrateRecursion() {
    console.log("\n=== Recursion Examples ===");
    
    // Factorial
    function factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    console.log("Factorial of 5:", factorial(5));
    
    // Fibonacci
    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    console.log("Fibonacci sequence (first 8):");
    for (let i = 0; i < 8; i++) {
        console.log(fibonacci(i));
    }
    
    // Tail recursion optimization example
    function factorialTail(n, acc = 1) {
        if (n <= 1) return acc;
        return factorialTail(n - 1, n * acc);
    }
    
    console.log("Tail recursive factorial of 5:", factorialTail(5));
}

// Function to demonstrate function performance
function demonstratePerformance() {
    console.log("\n=== Function Performance ===");
    
    const iterations = 1000000;
    
    // Regular function
    function regularAdd(a, b) {
        return a + b;
    }
    
    // Arrow function
    const arrowAdd = (a, b) => a + b;
    
    // Performance test
    console.time('Regular function');
    for (let i = 0; i < iterations; i++) {
        regularAdd(i, i + 1);
    }
    console.timeEnd('Regular function');
    
    console.time('Arrow function');
    for (let i = 0; i < iterations; i++) {
        arrowAdd(i, i + 1);
    }
    console.timeEnd('Arrow function');
}

// Run utility demonstrations
demonstrateHoisting();
demonstrateScope();
demonstrateRecursion();
demonstratePerformance();
