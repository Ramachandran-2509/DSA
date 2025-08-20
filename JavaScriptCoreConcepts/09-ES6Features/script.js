// JavaScript ES6+ Features - Interactive Examples

// ============================================
// VARIABLE DECLARATIONS EXAMPLES
// ============================================

console.log("=== Variable Declarations Examples ===");

// ES5: var (function-scoped)
function testVar() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable
    }
    return x; // 20
}

// ES6: let (block-scoped)
function testLet() {
    let y = 10;
    if (true) {
        let y = 20; // Different variable
    }
    return y; // 10
}

// ES6: const (block-scoped, immutable reference)
const PI = 3.14159;
const user = { name: "John" };

console.log("var test:", testVar());
console.log("let test:", testLet());
console.log("const PI:", PI);

// ============================================
// TEMPLATE LITERALS EXAMPLES
// ============================================

console.log("=== Template Literals Examples ===");

// ES5: String concatenation
let name = "John";
let age = 30;
let message = "Hello, " + name + ". You are " + age + " years old.";

// ES6: Template literals
let message2 = `Hello, ${name}. You are ${age} years old.`;

// Multiline strings
let multiline = `
    This is a
    multiline string
    without escape characters
`;

// Expressions in template literals
let price = 19.99;
let quantity = 3;
let total = `Total: $${(price * quantity).toFixed(2)}`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

let highlighted = highlight`Hello ${name}, you are ${age} years old!`;

console.log("Template literal:", message2);
console.log("Multiline:", multiline);
console.log("Expression:", total);
console.log("Tagged template:", highlighted);

// ============================================
// DESTRUCTURING EXAMPLES
// ============================================

console.log("=== Destructuring Examples ===");

// Array destructuring
let colors = ["red", "green", "blue"];
let [first, second, third] = colors;
let [primary, , tertiary] = colors;
let [a, b, c, d = "yellow"] = colors;
let [head, ...tail] = colors;

// Object destructuring
let person = { name: "John", age: 30, city: "NYC" };
let { name: userName, age: userAge } = person;
let { name, age, country = "USA" } = person;

// Nested destructuring
let user = {
    id: 1,
    profile: {
        firstName: "John",
        lastName: "Doe"
    }
};
let { profile: { firstName, lastName } } = user;

console.log("Array destructuring:", { first, second, third, primary, tertiary, head, tail });
console.log("Object destructuring:", { userName, userAge, name, age, country });
console.log("Nested destructuring:", { firstName, lastName });

// ============================================
// ARROW FUNCTIONS EXAMPLES
// ============================================

console.log("=== Arrow Functions Examples ===");

// ES5: Function expression
let add = function(a, b) {
    return a + b;
};

// ES6: Arrow function
let addArrow = (a, b) => a + b;

// Single parameter (parentheses optional)
let square = x => x * x;

// No parameters
let getRandom = () => Math.random();

// Multiple statements
let processData = (data) => {
    let result = data.map(item => item * 2);
    return result.filter(item => item > 10);
};

// Object literal return
let createUser = (name, age) => ({ name, age });

// Array methods with arrow functions
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Arrow function add:", addArrow(5, 3));
console.log("Square:", square(4));
console.log("Processed data:", processData([1, 2, 3, 4, 5, 6]));
console.log("Created user:", createUser("Alice", 25));
console.log("Array methods:", { doubled, evens, sum });

// ============================================
// DEFAULT PARAMETERS EXAMPLES
// ============================================

console.log("=== Default Parameters Examples ===");

// ES5: Default parameters
function greet(name) {
    name = name || "Guest";
    return "Hello, " + name + "!";
}

// ES6: Default parameters
function greetES6(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Default parameters with destructuring
function createUserWithDefaults({ name = "Anonymous", age = 18, email = "" } = {}) {
    return { name, age, email };
}

// Default parameters are evaluated at call time
function getDefaultValue() {
    return Math.random();
}

function testDefaults(value = getDefaultValue()) {
    return value;
}

console.log("ES5 greet:", greet());
console.log("ES6 greet:", greetES6());
console.log("User with defaults:", createUserWithDefaults());
console.log("Dynamic default:", testDefaults());

// ============================================
// REST & SPREAD OPERATORS EXAMPLES
// ============================================

console.log("=== Rest & Spread Operators Examples ===");

// Rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

let multiply = (...args) => args.reduce((product, num) => product * num, 1);

// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };

// Copying arrays and objects
let arrCopy = [...arr1];
let objCopy = { ...obj1 };

console.log("Rest sum:", sum(1, 2, 3, 4, 5));
console.log("Rest multiply:", multiply(2, 3, 4));
console.log("Spread array:", arr2);
console.log("Spread object:", obj2);
console.log("Copied array:", arrCopy);
console.log("Copied object:", objCopy);

// ============================================
// CLASSES EXAMPLES
// ============================================

console.log("=== Classes Examples ===");

// ES6: Class syntax
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Static method
    static create(name, age) {
        return new Person(name, age);
    }
    
    // Getter
    get description() {
        return `${this.name} is ${this.age} years old`;
    }
    
    // Setter
    set description(value) {
        let parts = value.split(' is ');
        this.name = parts[0];
        this.age = parseInt(parts[1]);
    }
}

// Inheritance
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    
    work() {
        return `${this.name} is working`;
    }
    
    // Method overriding
    greet() {
        return `${super.greet()} and I work here`;
    }
}

let person1 = new Person("John", 30);
let employee1 = new Employee("Alice", 25, 50000);

console.log("Person:", person1.greet());
console.log("Employee:", employee1.greet());
console.log("Employee work:", employee1.work());
console.log("Static create:", Person.create("Bob", 35));

// ============================================
// MODULES EXAMPLES
// ============================================

console.log("=== Modules Examples ===");

// Simulating module exports
const mathModule = {
    PI: 3.14159,
    add: (a, b) => a + b,
    multiply: (a, b) => a * b,
    default: class Calculator {
        add(a, b) { return a + b; }
        subtract(a, b) { return a - b; }
    }
};

// Simulating module imports
const { add, multiply, PI } = mathModule;
const Calculator = mathModule.default;

console.log("Module PI:", PI);
console.log("Module add:", add(5, 3));
console.log("Module multiply:", multiply(4, 6));
console.log("Calculator:", new Calculator().add(10, 5));

// ============================================
// PROMISES & ASYNC/AWAIT EXAMPLES
// ============================================

console.log("=== Promises & Async/Await Examples ===");

// ES6: Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John" };
            resolve(data);
        }, 1000);
    });
}

// Promise chaining
fetchData()
    .then(data => {
        console.log("Promise data:", data);
        return fetchData();
    })
    .then(data => {
        console.log("Chained promise data:", data);
    })
    .catch(error => {
        console.error("Promise error:", error);
    });

// ES2017: Async/Await
async function getData() {
    try {
        const data = await fetchData();
        console.log("Async data:", data);
        return data;
    } catch (error) {
        console.error("Async error:", error);
    }
}

// Promise.all - wait for all promises
async function getAllData() {
    const promises = [fetchData(), fetchData(), fetchData()];
    const results = await Promise.all(promises);
    return results;
}

console.log("Async function called");
getData();
getAllData().then(results => console.log("Promise.all results:", results));

// ============================================
// OTHER ES6+ FEATURES EXAMPLES
// ============================================

console.log("=== Other ES6+ Features Examples ===");

// Symbols
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description');

console.log("Symbols:", { sym1, sym2, sym3 });
console.log("Symbol equality:", sym2 === sym3); // false

// Map & Set
const map = new Map();
map.set('key1', 'value1');
map.set(42, 'value2');

const set = new Set([1, 2, 2, 3, 3, 4]);

console.log("Map:", map.get('key1'), map.has(42), map.size);
console.log("Set:", set, set.size);

// Proxy & Reflect
const target = { name: 'John' };
const handler = {
    get(target, prop) {
        console.log(`Getting ${prop}`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);
console.log("Proxy get:", proxy.name);
proxy.age = 30;

// Generators
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log("Generator:", gen.next(), gen.next(), gen.next());

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

function testVariableDeclarations() {
    let result = "";
    
    // Test var scoping
    var x = 10;
    if (true) {
        var x = 20;
    }
    result += `var x after block: ${x}\n`;
    
    // Test let scoping
    let y = 10;
    if (true) {
        let y = 20;
    }
    result += `let y after block: ${y}\n`;
    
    // Test const
    const PI = 3.14159;
    result += `const PI: ${PI}\n`;
    
    document.getElementById('variableResult').textContent = result;
}

function buildTemplateLiteral() {
    const name = document.getElementById('templateName').value || 'Guest';
    const age = document.getElementById('templateAge').value || '25';
    
    const template = `Hello, ${name}! You are ${age} years old.`;
    const multiline = `
        Name: ${name}
        Age: ${age}
        Greeting: Hello, ${name}!
    `;
    
    const result = `Template Literal: ${template}\n\nMultiline:\n${multiline}`;
    document.getElementById('templateResult').textContent = result;
}

function testArrayDestructuring() {
    const colors = ["red", "green", "blue", "yellow", "purple"];
    const [first, second, , fourth, ...rest] = colors;
    
    const result = `Original array: ${colors}
First: ${first}
Second: ${second}
Fourth: ${fourth}
Rest: ${rest}`;
    
    document.getElementById('destructuringResult').textContent = result;
}

function testObjectDestructuring() {
    const person = { 
        name: "John", 
        age: 30, 
        city: "NYC",
        country: "USA",
        email: "john@example.com"
    };
    
    const { name, age, city, ...otherProps } = person;
    
    const result = `Original object: ${JSON.stringify(person, null, 2)}
Destructured:
- name: ${name}
- age: ${age}
- city: ${city}
- otherProps: ${JSON.stringify(otherProps, null, 2)}`;
    
    document.getElementById('destructuringResult').textContent = result;
}

function convertToArrowFunction() {
    const input = document.getElementById('functionInput').value;
    let result = "";
    
    if (input.includes('function')) {
        // Convert function declaration to arrow function
        const arrowFunc = input
            .replace(/function\s+\w*\s*\(([^)]*)\)\s*{/, '($1) => {')
            .replace(/function\s*\(([^)]*)\)\s*{/, '($1) => {');
        result = `Arrow function:\n${arrowFunc}`;
    } else if (input.includes('=>')) {
        // Convert arrow function to function declaration
        const funcDecl = input
            .replace(/\(([^)]*)\)\s*=>\s*{/, 'function($1) {')
            .replace(/\(([^)]*)\)\s*=>\s*/, 'function($1) { return ');
        result = `Function declaration:\n${funcDecl}`;
    } else {
        result = "Please enter a function to convert";
    }
    
    document.getElementById('arrowFunctionResult').textContent = result;
}

function testDefaultParameters() {
    const name = document.getElementById('paramName').value;
    const greeting = document.getElementById('paramGreeting').value;
    
    function greetWithDefaults(name = "Guest", greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
    
    const result = greetWithDefaults(name, greeting);
    document.getElementById('defaultParamResult').textContent = result;
}

function testRestOperator() {
    function sum(...numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }
    
    const result = `sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}
sum(10, 20) = ${sum(10, 20)}
sum() = ${sum()}`;
    
    document.getElementById('restSpreadResult').textContent = result;
}

function testSpreadOperator() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    
    const spreadArray = [...arr1, ...arr2];
    const spreadObject = { ...obj1, ...obj2 };
    
    const result = `Original arrays: [${arr1}], [${arr2}]
Spread array: [${spreadArray}]

Original objects: ${JSON.stringify(obj1)}, ${JSON.stringify(obj2)}
Spread object: ${JSON.stringify(spreadObject)}`;
    
    document.getElementById('restSpreadResult').textContent = result;
}

function testClasses() {
    const name = document.getElementById('className').value || 'John';
    const age = parseInt(document.getElementById('classAge').value) || 30;
    const salary = parseInt(document.getElementById('classSalary').value) || 50000;
    
    class Employee extends Person {
        constructor(name, age, salary) {
            super(name, age);
            this.salary = salary;
        }
        
        work() {
            return `${this.name} is working`;
        }
        
        greet() {
            return `${super.greet()} and I work here`;
        }
    }
    
    const employee = new Employee(name, age, salary);
    
    const result = `Employee created:
- Name: ${employee.name}
- Age: ${employee.age}
- Salary: $${employee.salary}
- Greeting: ${employee.greet()}
- Work: ${employee.work()}`;
    
    document.getElementById('classResult').textContent = result;
}

function simulateModules() {
    // Simulate module exports
    const mathModule = {
        PI: 3.14159,
        add: (a, b) => a + b,
        multiply: (a, b) => a * b,
        default: class Calculator {
            add(a, b) { return a + b; }
            subtract(a, b) { return a - b; }
        }
    };
    
    // Simulate imports
    const { add, multiply, PI } = mathModule;
    const Calculator = mathModule.default;
    
    const result = `Module simulation:
PI: ${PI}
add(5, 3): ${add(5, 3)}
multiply(4, 6): ${multiply(4, 6)}
Calculator.add(10, 5): ${new Calculator().add(10, 5)}`;
    
    document.getElementById('moduleResult').textContent = result;
}

function testAsyncAwait() {
    function fetchData() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: Math.floor(Math.random() * 100), name: "Data" });
            }, 1000);
        });
    }
    
    async function getData() {
        try {
            const data = await fetchData();
            return `Async data received: ${JSON.stringify(data)}`;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
    
    getData().then(result => {
        document.getElementById('asyncResult').textContent = result;
    });
}

function testPromiseAll() {
    function fetchData(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id, name: `Data ${id}` });
            }, Math.random() * 1000);
        });
    }
    
    async function getAllData() {
        const promises = [fetchData(1), fetchData(2), fetchData(3)];
        const results = await Promise.all(promises);
        return `All promises resolved: ${JSON.stringify(results, null, 2)}`;
    }
    
    getAllData().then(result => {
        document.getElementById('asyncResult').textContent = result;
    });
}

// Initialize console examples
console.log("ES6+ Features examples loaded. Check the interactive sections above!");
