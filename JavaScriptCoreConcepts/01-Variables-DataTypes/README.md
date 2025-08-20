# JavaScript Variables & Data Types

## 📚 Overview

This section covers the fundamental building blocks of JavaScript: variables and data types. Understanding these concepts is crucial for writing effective JavaScript code.

## 🎯 Learning Objectives

- Understand variable declaration with `var`, `let`, and `const`
- Learn about JavaScript's primitive data types
- Master type conversion and coercion
- Use template literals for string interpolation
- Follow best practices for variable naming and usage

## 📝 Variables

### Variable Declaration Keywords

#### 1. `var` (Legacy - Avoid in Modern Code)
```javascript
var name = "John";
var age = 25;
```

**Characteristics:**
- Function-scoped (not block-scoped)
- Hoisted to the top of their scope
- Can be redeclared
- Can be reassigned

**⚠️ Issues with `var`:**
```javascript
if (true) {
    var x = 10;
}
console.log(x); // 10 - accessible outside the block!
```

#### 2. `let` (Modern - Use for Reassignable Variables)
```javascript
let city = "New York";
city = "Los Angeles"; // ✅ Can be reassigned
```

**Characteristics:**
- Block-scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Has temporal dead zone (TDZ)

#### 3. `const` (Modern - Use by Default)
```javascript
const PI = 3.14159;
const API_URL = "https://api.example.com";
```

**Characteristics:**
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized when declared

### Scope Examples

```javascript
// Global scope
const globalVar = "I'm global";

function example() {
    // Function scope
    var functionVar = "I'm function-scoped";
    let blockVar = "I'm block-scoped";
    
    if (true) {
        // Block scope
        let blockOnly = "I'm only in this block";
        var functionScoped = "I'm accessible outside this block";
    }
    
    // console.log(blockOnly); // ❌ Error: blockOnly is not defined
    console.log(functionScoped); // ✅ Works
}
```

## 🔢 Data Types

JavaScript has 7 primitive data types and 1 reference type (Object).

### Primitive Data Types

#### 1. Number
```javascript
const integer = 42;
const float = 3.14159;
const negative = -17;
const infinity = Infinity;
const notANumber = NaN;

console.log(typeof integer); // "number"
console.log(typeof float);   // "number"
console.log(typeof infinity); // "number"
console.log(typeof notANumber); // "number"
```

**Special Number Values:**
- `Infinity` / `-Infinity`: Represents mathematical infinity
- `NaN` (Not a Number): Result of invalid mathematical operations

#### 2. String
```javascript
const single = 'Hello';
const double = "World";
const template = `Hello ${single}`;
const multiLine = `
    This is a
    multi-line string
`;

console.log(typeof single); // "string"
```

#### 3. Boolean
```javascript
const isTrue = true;
const isFalse = false;

console.log(typeof isTrue); // "boolean"
```

#### 4. Undefined
```javascript
let notDefined;
console.log(notDefined);        // undefined
console.log(typeof notDefined); // "undefined"
```

#### 5. Null
```javascript
const empty = null;
console.log(empty);        // null
console.log(typeof empty); // "object" (JavaScript quirk!)
```

#### 6. Symbol (ES6+)
```javascript
const symbol1 = Symbol("description");
const symbol2 = Symbol("description");
console.log(symbol1 === symbol2); // false - symbols are unique
console.log(typeof symbol1); // "symbol"
```

#### 7. BigInt (ES2020+)
```javascript
const bigNumber = 9007199254740991n;
const bigResult = bigNumber + 1n;
console.log(typeof bigNumber); // "bigint"
```

### Reference Type

#### Object
```javascript
const person = {
    name: "John",
    age: 30
};
const array = [1, 2, 3];
const function = function() {};

console.log(typeof person);   // "object"
console.log(typeof array);    // "object"
console.log(typeof function); // "function"
```

## 🔄 Type Conversion

### Explicit Conversion

#### String to Number
```javascript
const strNum = "42";
const num = Number(strNum);      // 42
const int = parseInt("42.5");    // 42
const float = parseFloat("42.5"); // 42.5
```

#### Number to String
```javascript
const num = 42;
const str = String(num);     // "42"
const str2 = num.toString(); // "42"
```

#### Boolean Conversion
```javascript
const bool1 = Boolean(1);   // true
const bool2 = Boolean(0);   // false
const bool3 = Boolean("");  // false
const bool4 = Boolean("hello"); // true
```

### Implicit Conversion (Type Coercion)

```javascript
console.log("5" + 3);     // "53" (string concatenation)
console.log("5" - 3);     // 2 (number subtraction)
console.log("5" * "3");   // 15 (number multiplication)
console.log(true + 1);    // 2 (true becomes 1)
console.log(false + 1);   // 1 (false becomes 0)
```

## 📝 Template Literals (ES6+)

### Basic Usage
```javascript
const name = "Alice";
const age = 30;
const city = "Paris";

// Old way
const oldWay = "My name is " + name + ", I am " + age + " years old.";

// Template literal way
const newWay = `My name is ${name}, I am ${age} years old.`;
```

### Multi-line Strings
```javascript
const multiLine = `
    This is a
    multi-line string
    using template literals.
`;
```

### Expressions in Template Literals
```javascript
const sum = 5 + 3;
const message = `The sum of 5 and 3 is ${sum}`;
const conditional = `You are ${age >= 18 ? 'an adult' : 'a minor'}`;
```

## ✅ Best Practices

### Variable Naming
```javascript
// ✅ Good
const API_URL = "https://api.example.com";
let userCount = 0;
let isLoggedIn = false;
const MAX_RETRY_ATTEMPTS = 3;

// ❌ Avoid
var oldWay = "don't use var";
let a = 1; // unclear variable name
const pi = 3.14; // should be uppercase for constants
```

### Declaration Guidelines
1. **Use `const` by default** - Only use `let` when you need to reassign
2. **Use descriptive names** - Make your code self-documenting
3. **Use UPPERCASE for constants** - Makes them easily identifiable
4. **Initialize variables** - Always give variables an initial value
5. **Use camelCase** - For variable and function names
6. **Use PascalCase** - For constructor functions and classes

### Type Safety
```javascript
// ✅ Explicit conversion
const userInput = "42";
const number = Number(userInput);

// ✅ Check for NaN
if (isNaN(number)) {
    console.log("Invalid number");
}

// ✅ Use strict equality
console.log("5" === 5); // false
console.log("5" == 5);  // true (avoid loose equality)
```

## 🎮 Interactive Examples

Open `index.html` in your browser to try the interactive examples:

1. **Variable Testing** - Test different variable declarations
2. **Type Conversion** - See how values convert between types
3. **Template Literal Builder** - Create dynamic strings

## 🔍 Common Pitfalls

### 1. Hoisting Confusion
```javascript
console.log(x); // undefined (not an error!)
var x = 5;
```

### 2. Temporal Dead Zone
```javascript
// console.log(y); // ❌ Error: Cannot access 'y' before initialization
let y = 5;
```

### 3. Type Coercion Surprises
```javascript
console.log([] + []);     // ""
console.log([] + {});     // "[object Object]"
console.log({} + []);     // "[object Object]"
console.log({} + {});     // "[object Object][object Object]"
```

### 4. NaN Confusion
```javascript
console.log(NaN === NaN); // false
console.log(isNaN("hello")); // true
console.log(Number.isNaN("hello")); // false (more precise)
```

## 📚 Further Reading

- [MDN - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
- [MDN - Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript.info - Variables](https://javascript.info/variables)
- [JavaScript.info - Data Types](https://javascript.info/types)

## 🎯 Practice Exercises

1. Create variables for a user profile (name, age, email, isActive)
2. Convert a string number to an actual number and perform calculations
3. Create a template literal that includes conditional logic
4. Demonstrate the difference between `var`, `let`, and `const` scoping
5. Write a function that checks if a value is truthy or falsy

---

**Next Section:** [Operators & Expressions](../02-Operators-Expressions/)


