# JavaScript Objects

Objects are the fundamental building blocks of JavaScript. They are collections of key-value pairs that can store data and behavior. Objects are used to represent real-world entities, organize code, and create complex data structures.

## 📚 Table of Contents

1. [Object Creation](#object-creation)
2. [Object Properties](#object-properties)
3. [Object Methods](#object-methods)
4. [Object Iteration](#object-iteration)
5. [Advanced Concepts](#advanced-concepts)
6. [Best Practices](#best-practices)
7. [Common Pitfalls](#common-pitfalls)

## 🏗️ Object Creation

### Object Literal
The most common way to create objects in JavaScript:

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

### Object Constructor
Using the `Object` constructor:

```javascript
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
```

### Object.create()
Creates an object with a specified prototype:

```javascript
let animal = Object.create(null); // No prototype
animal.type = "Dog";

// With prototype
let person = Object.create(Object.prototype);
person.name = "Alice";
```

### Factory Functions
Functions that return objects:

```javascript
function createUser(name, email) {
    return {
        name: name,
        email: email,
        greet() {
            return `Hello, I'm ${this.name}`;
        }
    };
}
```

## 🔧 Object Properties

### Accessing Properties

**Dot Notation:**
```javascript
let user = { name: "Alice", age: 25 };
console.log(user.name); // "Alice"
```

**Bracket Notation:**
```javascript
console.log(user["age"]); // 25

// Dynamic property access
let propertyName = "name";
console.log(user[propertyName]); // "Alice"
```

### Adding Properties
```javascript
user.email = "alice@email.com";
user["phone"] = "123-456-7890";
```

### Deleting Properties
```javascript
delete user.phone;
delete user["email"];
```

### Property Descriptors
```javascript
Object.defineProperty(user, 'id', {
    value: 12345,
    writable: false,      // Cannot be changed
    enumerable: true,     // Shows in loops
    configurable: false   // Cannot be deleted or reconfigured
});
```

### Checking Properties
```javascript
// Using 'in' operator
console.log('name' in user); // true

// Using hasOwnProperty()
console.log(user.hasOwnProperty('age')); // true

// Direct property check
console.log(user.name !== undefined); // true
```

## ⚙️ Object Methods

### Method Shorthand (ES6+)
```javascript
let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
```

### Methods with `this` Context
```javascript
let person = {
    name: "Bob",
    greet() {
        return `Hello, I'm ${this.name}`;
    },
    introduce(otherPerson) {
        return `Hi ${otherPerson}, I'm ${this.name}`;
    }
};
```

### Arrow Functions and `this`
```javascript
let counter = {
    count: 0,
    // ❌ Wrong - 'this' refers to global scope
    increment: () => {
        this.count++; // This won't work
    },
    // ✅ Correct - 'this' refers to the object
    incrementProper() {
        this.count++;
    }
};
```

## 🔄 Object Iteration

### for...in Loop
```javascript
let book = { title: "JS Guide", author: "John", year: 2023 };

for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}
```

### Object.keys()
```javascript
let keys = Object.keys(book); // ["title", "author", "year"]
keys.forEach(key => {
    console.log(`${key}: ${book[key]}`);
});
```

### Object.values()
```javascript
let values = Object.values(book); // ["JS Guide", "John", 2023]
values.forEach(value => {
    console.log(value);
});
```

### Object.entries()
```javascript
let entries = Object.entries(book);
// [["title", "JS Guide"], ["author", "John"], ["year", 2023]]

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

## 🚀 Advanced Concepts

### Object Destructuring

**Basic Destructuring:**
```javascript
let user = { name: "Alice", age: 25, email: "alice@email.com" };
let { name, age } = user;
console.log(name, age); // "Alice" 25
```

**Renaming Variables:**
```javascript
let { name: userName, age: userAge } = user;
console.log(userName, userAge); // "Alice" 25
```

**Default Values:**
```javascript
let { name, age, city = "Unknown" } = user;
console.log(city); // "Unknown"
```

**Nested Destructuring:**
```javascript
let userWithAddress = {
    name: "Alice",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

let { address: { street, city } } = userWithAddress;
console.log(street, city); // "123 Main St" "New York"
```

### Object Spread Operator

**Combining Objects:**
```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combined = { ...obj1, ...obj2 };
// { a: 1, b: 2, c: 3, d: 4 }
```

**Overriding Properties:**
```javascript
let updated = { ...obj1, b: 5 };
// { a: 1, b: 5 }
```

**Cloning Objects:**
```javascript
let clone = { ...obj1 };
console.log(clone === obj1); // false (different reference)
```

### Object Immutability

**Object.freeze():**
```javascript
let config = { apiUrl: "https://api.example.com" };
Object.freeze(config);
// config.apiUrl = "new-url"; // Error in strict mode
```

**Object.seal():**
```javascript
Object.seal(config);
// config.newProp = "value"; // Error in strict mode
// delete config.apiUrl; // Error in strict mode
```

**Object.preventExtensions():**
```javascript
Object.preventExtensions(config);
// config.newProp = "value"; // Error in strict mode
// config.apiUrl = "new-url"; // This works
```

### Object Prototypes

**Constructor Functions:**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

let person = new Person("Charlie", 35);
```

**Class Syntax (ES6+):**
```javascript
class Animal {
    constructor(species) {
        this.species = species;
    }
    
    makeSound() {
        return "Some sound";
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Dog");
        this.name = name;
    }
    
    makeSound() {
        return "Woof!";
    }
}
```

## ✅ Best Practices

### 1. Use Object Literals for Simple Objects
```javascript
// ✅ Good
let person = { name: "John", age: 30 };

// ❌ Avoid for simple objects
let person = new Object();
person.name = "John";
person.age = 30;
```

### 2. Use Descriptive Property Names
```javascript
// ✅ Good
let user = {
    firstName: "John",
    lastName: "Doe",
    emailAddress: "john@email.com"
};

// ❌ Avoid
let user = {
    fn: "John",
    ln: "Doe",
    em: "john@email.com"
};
```

### 3. Use Method Shorthand
```javascript
// ✅ Good (ES6+)
let calculator = {
    add(a, b) {
        return a + b;
    }
};

// ❌ Avoid
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};
```

### 4. Use Object Destructuring for Clean Code
```javascript
// ✅ Good
function processUser({ name, age, email }) {
    console.log(`Processing ${name} (${age})`);
}

// ❌ Avoid
function processUser(user) {
    console.log(`Processing ${user.name} (${user.age})`);
}
```

### 5. Use Object Spread for Immutability
```javascript
// ✅ Good
let updatedUser = { ...user, age: user.age + 1 };

// ❌ Avoid
user.age = user.age + 1; // Mutates original object
```

### 6. Check for Property Existence
```javascript
// ✅ Good
if ('propertyName' in object) {
    // Property exists
}

// ✅ Also good
if (object.hasOwnProperty('propertyName')) {
    // Own property exists
}

// ❌ Avoid
if (object.propertyName !== undefined) {
    // Might miss properties with undefined values
}
```

## ⚠️ Common Pitfalls

### 1. Mutating Objects Unexpectedly
```javascript
// ❌ Problem
let original = { a: 1, b: 2 };
let copy = original;
copy.a = 3;
console.log(original.a); // 3 (original was mutated!)

// ✅ Solution
let copy = { ...original };
copy.a = 3;
console.log(original.a); // 1 (original unchanged)
```

### 2. Arrow Functions and `this`
```javascript
// ❌ Problem
let counter = {
    count: 0,
    increment: () => {
        this.count++; // 'this' refers to global scope
    }
};

// ✅ Solution
let counter = {
    count: 0,
    increment() {
        this.count++; // 'this' refers to the object
    }
};
```

### 3. Forgetting to Check Property Existence
```javascript
// ❌ Problem
let user = { name: "John" };
console.log(user.age.toString()); // Error if age is undefined

// ✅ Solution
if (user.age !== undefined) {
    console.log(user.age.toString());
}
```

### 4. Using `for...in` Without hasOwnProperty
```javascript
// ❌ Problem
for (let key in object) {
    console.log(key); // Might include inherited properties
}

// ✅ Solution
for (let key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key); // Only own properties
    }
}
```

### 5. Not Using Object.freeze() for Constants
```javascript
// ❌ Problem
const config = {
    apiUrl: "https://api.example.com"
};
config.apiUrl = "new-url"; // This works!

// ✅ Solution
const config = Object.freeze({
    apiUrl: "https://api.example.com"
});
// config.apiUrl = "new-url"; // Error in strict mode
```

## 🎯 Key Takeaways

1. **Objects are reference types** - be careful with mutations
2. **Use object literals** for simple object creation
3. **Prefer method shorthand** over function expressions
4. **Use destructuring** for cleaner code
5. **Use spread operator** for object cloning and merging
6. **Check property existence** before accessing
7. **Use Object.freeze()** for immutable objects
8. **Be careful with `this` context** in arrow functions
9. **Use for...in with hasOwnProperty** to avoid inherited properties
10. **Prefer Object.keys(), Object.values(), Object.entries()** for iteration

## 🔗 Related Topics

- [Arrays](../05-Arrays/) - Array methods and manipulation
- [Functions](../04-Functions/) - Function context and `this`
- [ES6+ Features](../09-ES6Features/) - Modern JavaScript features
- [Advanced Concepts](../12-AdvancedConcepts/) - Advanced object patterns

---

*Next: [Strings](../07-Strings/) - String manipulation and methods*
