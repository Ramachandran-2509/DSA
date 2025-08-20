# JavaScript ES6+ Features

ES6 (ECMAScript 2015) and subsequent versions introduced many powerful features that modernized JavaScript. These features make the language more expressive, safer, and easier to work with.

## 📚 Table of Contents

1. [Variable Declarations (let & const)](#variable-declarations-let--const)
2. [Template Literals](#template-literals)
3. [Destructuring](#destructuring)
4. [Arrow Functions](#arrow-functions)
5. [Default Parameters](#default-parameters)
6. [Rest & Spread Operators](#rest--spread-operators)
7. [Classes](#classes)
8. [Modules](#modules)
9. [Promises & Async/Await](#promises--asyncawait)
10. [Other ES6+ Features](#other-es6-features)
11. [Best Practices](#best-practices)
12. [Common Pitfalls](#common-pitfalls)

## 📝 Variable Declarations (let & const)

### let - Block-Scoped Variables

```javascript
// ES5: var (function-scoped)
var x = 10;
if (true) {
    var x = 20; // Same variable
}
console.log(x); // 20

// ES6: let (block-scoped)
let y = 10;
if (true) {
    let y = 20; // Different variable
}
console.log(y); // 10
```

**Key Benefits:**
- Block scope prevents variable hoisting issues
- Prevents accidental variable redeclaration
- Better for loop variables

### const - Immutable References

```javascript
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable

const user = { name: "John" };
user.name = "Jane"; // OK - object properties can change
// user = {}; // Error - cannot reassign const
```

**Key Points:**
- `const` prevents reassignment, not immutability
- Object properties can still be modified
- Use `Object.freeze()` for true immutability

## 📄 Template Literals

### Basic Template Literals

```javascript
// ES5: String concatenation
let name = "John";
let age = 30;
let message = "Hello, " + name + ". You are " + age + " years old.";

// ES6: Template literals
let message2 = `Hello, ${name}. You are ${age} years old.`;
```

### Multiline Strings

```javascript
// ES5: Requires escape characters
let multiline = "This is a\nmultiline string\nwith escape characters";

// ES6: Natural multiline
let multiline = `
    This is a
    multiline string
    without escape characters
`;
```

### Expressions in Template Literals

```javascript
let price = 19.99;
let quantity = 3;
let total = `Total: $${(price * quantity).toFixed(2)}`;

let isActive = true;
let status = `User is ${isActive ? 'active' : 'inactive'}`;
```

### Tagged Templates

```javascript
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

let highlighted = highlight`Hello ${name}, you are ${age} years old!`;
```

## 🔗 Destructuring

### Array Destructuring

```javascript
let colors = ["red", "green", "blue"];

// Basic destructuring
let [first, second, third] = colors;

// Skipping elements
let [primary, , tertiary] = colors;

// Default values
let [a, b, c, d = "yellow"] = colors;

// Rest operator
let [head, ...tail] = colors;

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
```

### Object Destructuring

```javascript
let person = { name: "John", age: 30, city: "NYC" };

// Basic destructuring
let { name, age, city } = person;

// Renaming variables
let { name: userName, age: userAge } = person;

// Default values
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

// Rest operator
let { name, ...otherProps } = person;
```

## 🏹 Arrow Functions

### Basic Arrow Functions

```javascript
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
```

### Arrow Functions with Arrays

```javascript
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((acc, n) => acc + n, 0);
```

### Important: 'this' Context

```javascript
// ES5: 'this' context issues
let timer = {
    seconds: 0,
    start: function() {
        var self = this;
        setInterval(function() {
            self.seconds++; // Need to capture 'this'
        }, 1000);
    }
};

// ES6: Arrow functions capture 'this'
let timer = {
    seconds: 0,
    start() {
        setInterval(() => {
            this.seconds++; // 'this' refers to timer
        }, 1000);
    }
};
```

## ⚙️ Default Parameters

### Basic Default Parameters

```javascript
// ES5: Default parameters
function greet(name) {
    name = name || "Guest";
    return "Hello, " + name + "!";
}

// ES6: Default parameters
function greetES6(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
```

### Default Parameters with Destructuring

```javascript
function createUser({ name = "Anonymous", age = 18, email = "" } = {}) {
    return { name, age, email };
}

// Usage
createUser(); // { name: "Anonymous", age: 18, email: "" }
createUser({ name: "John", age: 30 }); // { name: "John", age: 30, email: "" }
```

### Dynamic Default Values

```javascript
function getDefaultValue() {
    return Math.random();
}

function testDefaults(value = getDefaultValue()) {
    return value;
}

// Default parameters are evaluated at call time
console.log(testDefaults()); // Different value each time
console.log(testDefaults()); // Different value each time
```

## 📦 Rest & Spread Operators

### Rest Operator (...)

```javascript
// Rest parameters in functions
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Rest in destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];
let { name, ...otherProps } = { name: "John", age: 30, city: "NYC" };

// Rest in arrow functions
let multiply = (...args) => args.reduce((product, num) => product * num, 1);
```

### Spread Operator (...)

```javascript
// Spread in arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Spread in objects
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Copying arrays and objects
let arrCopy = [...arr1];
let objCopy = { ...obj1 };

// Merging arrays and objects
let merged = [...arr1, ...arr2];
let mergedObj = { ...obj1, ...obj2 };

// Function arguments
let numbers = [1, 2, 3];
Math.max(...numbers); // Same as Math.max(1, 2, 3)
```

## 🏛️ Classes

### Basic Class Syntax

```javascript
// ES5: Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

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
        [this.name, this.age] = value.split(' is ').map(part => 
            part.includes(' years old') ? parseInt(part) : part
        );
    }
}
```

### Inheritance

```javascript
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
```

### Private Fields (ES2022)

```javascript
class BankAccount {
    #balance = 0;
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(100);
// account.#balance; // Error: Private field
console.log(account.getBalance()); // 100
```

## 📦 Modules

### Exporting

```javascript
// math.js - Module file
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Default export
export default class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}

// Named exports with aliases
export { add as sum, multiply as product };

// Re-exporting
export * from './math.js';
```

### Importing

```javascript
// main.js - Importing modules
import Calculator, { add, multiply, PI } from './math.js';
import { sum, product } from './utils.js';

// Dynamic imports
async function loadModule() {
    const module = await import('./dynamic-module.js');
    module.doSomething();
}

// Import with alias
import { add as addition } from './math.js';
```

## ⏳ Promises & Async/Await

### Promises (ES6)

```javascript
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
        console.log(data);
        return fetchData(); // Return another promise
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

### Async/Await (ES2017)

```javascript
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
        const moreData = await fetchData();
        console.log(moreData);
    } catch (error) {
        console.error(error);
    }
}

// Async function always returns a Promise
async function getDataAsync() {
    const data = await fetchData();
    return data;
}
```

### Promise Combinators

```javascript
// Promise.all - wait for all promises
async function getAllData() {
    const promises = [fetchData(), fetchData(), fetchData()];
    const results = await Promise.all(promises);
    return results;
}

// Promise.race - wait for first promise
async function getFirstData() {
    const promises = [fetchData(), fetchData(), fetchData()];
    const result = await Promise.race(promises);
    return result;
}

// Promise.allSettled - wait for all promises (ES2020)
async function getAllSettled() {
    const promises = [fetchData(), fetchData(), fetchData()];
    const results = await Promise.allSettled(promises);
    return results;
}
```

## 🔧 Other ES6+ Features

### Symbols

```javascript
// Unique identifiers
const sym1 = Symbol();
const sym2 = Symbol('description');
const sym3 = Symbol('description');

console.log(sym1 === sym2); // false
console.log(sym2 === sym3); // false

// Symbol properties
const obj = {
    [Symbol('id')]: 123,
    name: 'John'
};

// Well-known symbols
const arr = [1, 2, 3];
arr[Symbol.iterator] = function* () {
    yield* this.reverse();
};
```

### Map & Set

```javascript
// Map - key-value pairs
const map = new Map();
map.set('key1', 'value1');
map.set(42, 'value2');
map.set({}, 'value3');

console.log(map.get('key1')); // 'value1'
console.log(map.has(42)); // true
console.log(map.size); // 3

// Set - unique values
const set = new Set([1, 2, 2, 3, 3, 4]);
console.log(set); // Set {1, 2, 3, 4}
console.log(set.size); // 4

set.add(5);
set.delete(1);
console.log(set.has(2)); // true
```

### Proxy & Reflect

```javascript
// Proxy - intercept object operations
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
proxy.name; // Logs: Getting name
proxy.age = 30; // Logs: Setting age to 30

// Reflect - provides methods for interceptable operations
Reflect.get(target, 'name');
Reflect.set(target, 'age', 30);
```

### Generators

```javascript
// Generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Generator with parameters
function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}
```

## ✅ Best Practices

### Variable Declarations
- Use `const` by default
- Use `let` when you need to reassign
- Avoid `var` in new code
- Declare variables at the top of their scope

### Template Literals
- Use template literals for string interpolation
- Use for multiline strings
- Consider tagged templates for complex string processing

### Destructuring
- Use for cleaner function parameters
- Use for extracting values from objects/arrays
- Provide default values for optional properties

### Arrow Functions
- Use for short, single-expression functions
- Use with array methods (map, filter, reduce)
- Be careful with `this` context
- Don't use for object methods or constructors

### Classes
- Use for object-oriented programming
- Prefer composition over inheritance
- Use private fields for encapsulation
- Keep classes focused and small

### Modules
- Use ES6 modules for better organization
- Prefer named exports over default exports
- Use dynamic imports for code splitting
- Keep modules focused and cohesive

### Async/Await
- Use async/await over Promise chains
- Always handle errors with try/catch
- Use Promise combinators for complex scenarios
- Don't forget to await async functions

## ❌ Common Pitfalls

### Variable Declarations
```javascript
// ❌ Don't use var
var x = 10;

// ✅ Use const or let
const x = 10;
let y = 20;
```

### Arrow Functions
```javascript
// ❌ Don't use arrow functions for object methods
const obj = {
    name: 'John',
    greet: () => {
        return `Hello, ${this.name}`; // this is undefined
    }
};

// ✅ Use regular functions for object methods
const obj = {
    name: 'John',
    greet() {
        return `Hello, ${this.name}`;
    }
};
```

### Destructuring
```javascript
// ❌ Don't forget default values
function greet({ name }) {
    return `Hello, ${name}`;
}
greet({}); // Error: Cannot read property 'name' of undefined

// ✅ Provide default values
function greet({ name = 'Guest' } = {}) {
    return `Hello, ${name}`;
}
greet({}); // "Hello, Guest"
```

### Classes
```javascript
// ❌ Don't forget super() in derived classes
class Employee extends Person {
    constructor(name, age, salary) {
        this.salary = salary; // Error: Must call super constructor
    }
}

// ✅ Call super() first
class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}
```

### Async/Await
```javascript
// ❌ Don't forget to await
async function getData() {
    const data = fetchData(); // Missing await
    return data;
}

// ✅ Always await async operations
async function getData() {
    const data = await fetchData();
    return data;
}
```

## 🎯 Key Takeaways

1. **ES6+ features make JavaScript more modern and expressive**
2. **Use const by default, let when needed, avoid var**
3. **Template literals provide cleaner string interpolation**
4. **Destructuring simplifies data extraction**
5. **Arrow functions are great for short functions and callbacks**
6. **Classes provide cleaner OOP syntax**
7. **Modules enable better code organization**
8. **Async/await makes asynchronous code more readable**
9. **Always consider browser compatibility**
10. **Use features appropriately - don't overuse them**

ES6+ features have transformed JavaScript into a more powerful and expressive language. Understanding these features is essential for modern JavaScript development.
