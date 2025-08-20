// JavaScript Objects - Interactive Examples

// ============================================
// OBJECT CREATION EXAMPLES
// ============================================

console.log("=== Object Creation Examples ===");

// Object literal
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log("Object literal:", person);

// Object constructor
let car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;

console.log("Object constructor:", car);

// Object.create()
let animal = Object.create(null);
animal.type = "Dog";
animal.breed = "Golden Retriever";
animal.age = 5;

console.log("Object.create():", animal);

// Factory function
function createUser(name, email, age = 25) {
    return {
        name: name,
        email: email,
        age: age,
        greet() {
            return `Hello, I'm ${this.name}`;
        },
        getInfo() {
            return `${this.name} (${this.email}) - ${this.age} years old`;
        }
    };
}

let user1 = createUser("Alice", "alice@email.com", 28);
let user2 = createUser("Bob", "bob@email.com");

console.log("Factory function user1:", user1);
console.log("Factory function user2:", user2);
console.log("User1 greet:", user1.greet());
console.log("User2 info:", user2.getInfo());

// ============================================
// OBJECT PROPERTIES EXAMPLES
// ============================================

console.log("\n=== Object Properties Examples ===");

let user = { 
    name: "Alice", 
    age: 25,
    email: "alice@email.com"
};

// Accessing properties
console.log("Dot notation:", user.name);
console.log("Bracket notation:", user["age"]);
console.log("Dynamic property access:", user["name"]);

// Adding properties
user.phone = "123-456-7890";
user["address"] = "123 Main St";
user.job = "Developer";

console.log("After adding properties:", user);

// Deleting properties
delete user.phone;
delete user["address"];

console.log("After deleting properties:", user);

// Property descriptors
Object.defineProperty(user, 'id', {
    value: 12345,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log("After defining property:", user);
console.log("User ID:", user.id);

// Checking properties
console.log("'name' in user:", 'name' in user);
console.log("hasOwnProperty('age'):", user.hasOwnProperty('age'));
console.log("hasOwnProperty('toString'):", user.hasOwnProperty('toString'));

// ============================================
// OBJECT METHODS EXAMPLES
// ============================================

console.log("\n=== Object Methods Examples ===");

// Method shorthand (ES6+)
let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    },
    power(a, b) {
        return Math.pow(a, b);
    }
};

console.log("Calculator add:", calculator.add(5, 3));
console.log("Calculator multiply:", calculator.multiply(4, 7));
console.log("Calculator power:", calculator.power(2, 8));

// Method with this context
let person = {
    name: "Bob",
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`;
    },
    introduce(otherPerson) {
        return `Hi ${otherPerson}, I'm ${this.name} and I'm ${this.age} years old`;
    },
    haveBirthday() {
        this.age++;
        return `Happy birthday! I'm now ${this.age} years old`;
    }
};

console.log("Person greet:", person.greet());
console.log("Person introduce:", person.introduce("Alice"));
console.log("Person birthday:", person.haveBirthday());

// Arrow functions and this context
let counter = {
    count: 0,
    increment: () => {
        // This won't work - 'this' refers to global scope
        console.log("Arrow function 'this':", this);
        // this.count++; // This would cause an error
    },
    incrementProper() {
        this.count++;
        return this.count;
    },
    reset() {
        this.count = 0;
        return "Counter reset";
    },
    getCount() {
        return this.count;
    }
};

console.log("Counter initial:", counter.getCount());
counter.incrementProper();
console.log("Counter after increment:", counter.getCount());
console.log("Counter reset:", counter.reset());

// ============================================
// OBJECT ITERATION EXAMPLES
// ============================================

console.log("\n=== Object Iteration Examples ===");

let book = {
    title: "JavaScript Guide",
    author: "John Doe",
    year: 2023,
    pages: 300,
    genre: "Programming",
    isbn: "978-1234567890"
};

// for...in loop
console.log("for...in loop:");
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Object.keys()
let keys = Object.keys(book);
console.log("Object.keys():", keys);

// Object.values()
let values = Object.values(book);
console.log("Object.values():", values);

// Object.entries()
let entries = Object.entries(book);
console.log("Object.entries():", entries);

// Iterating over entries
console.log("Iterating over entries:");
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Object.getOwnPropertyNames()
let propertyNames = Object.getOwnPropertyNames(book);
console.log("getOwnPropertyNames():", propertyNames);

// ============================================
// ADVANCED OBJECT CONCEPTS
// ============================================

console.log("\n=== Advanced Object Concepts ===");

// Object Destructuring
let userProfile = {
    name: "Alice",
    age: 25,
    email: "alice@email.com",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    preferences: {
        theme: "dark",
        notifications: true
    }
};

// Basic destructuring
let { name, age, email } = userProfile;
console.log("Destructured:", { name, age, email });

// Renaming variables
let { name: userName, age: userAge } = userProfile;
console.log("Renamed destructuring:", { userName, userAge });

// Default values
let { name, age, city = "Unknown" } = userProfile;
console.log("Default value destructuring:", { name, age, city });

// Nested destructuring
let { address: { street, city: userCity } } = userProfile;
console.log("Nested destructuring:", { street, userCity });

// Object Spread
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { d: 4, e: 5, f: 6 };

// Spread operator
let combined = { ...obj1, ...obj2 };
console.log("Spread combined:", combined);

// Override properties
let updated = { ...obj1, b: 10, g: 7 };
console.log("Spread with override:", updated);

// Clone object
let clone = { ...obj1 };
console.log("Spread clone:", clone);
console.log("Clone is same object:", clone === obj1);

// Object Freezing
let config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};

// Object.freeze() - makes object immutable
Object.freeze(config);
console.log("Config frozen:", Object.isFrozen(config));

// Object.seal() - prevents adding/deleting properties
let sealedConfig = { ...config };
Object.seal(sealedConfig);
console.log("Config sealed:", Object.isSealed(sealedConfig));

// Object.preventExtensions() - prevents adding properties
let nonExtensibleConfig = { ...config };
Object.preventExtensions(nonExtensibleConfig);
console.log("Config non-extensible:", Object.isExtensible(nonExtensibleConfig));

// Object Prototypes
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return `${this.name} is ${this.age} years old`;
};

let person1 = new Person("Charlie", 35);
console.log("Constructor function:", person1);
console.log("Person greet:", person1.greet());
console.log("Person age:", person1.getAge());

// Class syntax (ES6+)
class Animal {
    constructor(species, name) {
        this.species = species;
        this.name = name;
    }
    
    makeSound() {
        return "Some sound";
    }
    
    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super("Dog", name);
        this.breed = breed;
    }
    
    makeSound() {
        return "Woof!";
    }
    
    getBreedInfo() {
        return `${this.name} is a ${this.breed}`;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
console.log("Class inheritance:", dog);
console.log("Dog sound:", dog.makeSound());
console.log("Dog info:", dog.getInfo());
console.log("Dog breed:", dog.getBreedInfo());

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

// Global object for interactive features
window.demoObject = {
    name: "Demo Object",
    value: 42,
    items: ["a", "b", "c"]
};

function addPropertyInput() {
    const container = document.getElementById('propertyInputs');
    const newInput = document.createElement('div');
    newInput.className = 'property-input';
    newInput.innerHTML = `
        <input type="text" placeholder="Property name" class="prop-name">
        <input type="text" placeholder="Property value" class="prop-value">
        <button onclick="this.parentElement.remove()" style="background: #e74c3c;">Remove</button>
    `;
    container.appendChild(newInput);
}

function createObject() {
    const inputs = document.querySelectorAll('.property-input');
    const obj = {};
    
    inputs.forEach(input => {
        const nameInput = input.querySelector('.prop-name');
        const valueInput = input.querySelector('.prop-value');
        
        if (nameInput.value && valueInput.value) {
            obj[nameInput.value] = valueInput.value;
        }
    });
    
    const result = document.getElementById('objectResult');
    result.innerHTML = `
        <div class="result-display">
Created Object:
${JSON.stringify(obj, null, 2)}

Object keys: [${Object.keys(obj).join(', ')}]
Object values: [${Object.values(obj).join(', ')}]
        </div>
    `;
}

function addProperty() {
    const name = document.getElementById('propertyName').value;
    const value = document.getElementById('propertyValue').value;
    
    if (name && value) {
        window.demoObject[name] = value;
        updatePropertyResult();
    }
}

function deleteProperty() {
    const name = document.getElementById('propertyName').value;
    
    if (name && name in window.demoObject) {
        delete window.demoObject[name];
        updatePropertyResult();
    }
}

function checkProperty() {
    const name = document.getElementById('propertyName').value;
    
    if (name) {
        const exists = name in window.demoObject;
        const hasOwn = window.demoObject.hasOwnProperty(name);
        const value = window.demoObject[name];
        
        const result = document.getElementById('propertyResult');
        result.innerHTML = `
            <div class="result-display">
Property Check Results:
Property: "${name}"
Exists (in operator): ${exists}
Has own property: ${hasOwn}
Value: ${value !== undefined ? JSON.stringify(value) : 'undefined'}
            </div>
        `;
    }
}

function updatePropertyResult() {
    const result = document.getElementById('propertyResult');
    result.innerHTML = `
        <div class="result-display">
Current Object:
${JSON.stringify(window.demoObject, null, 2)}
        </div>
    `;
}

function testMethod() {
    const method = document.getElementById('methodSelect').value;
    const param1 = parseFloat(document.getElementById('methodParam1').value);
    const param2 = parseFloat(document.getElementById('methodParam2').value);
    
    if (isNaN(param1) || isNaN(param2)) {
        document.getElementById('methodResult').innerHTML = 
            '<div class="result-display">Please enter valid numbers</div>';
        return;
    }
    
    const result = calculator[method](param1, param2);
    document.getElementById('methodResult').innerHTML = `
        <div class="result-display">
Method: ${method}(${param1}, ${param2})
Result: ${result}
        </div>
    `;
}

function iterateObject() {
    const result = document.getElementById('iterationResult');
    let output = "Object Iteration Results:\n\n";
    
    // for...in loop
    output += "for...in loop:\n";
    for (let key in window.demoObject) {
        if (window.demoObject.hasOwnProperty(key)) {
            output += `${key}: ${window.demoObject[key]}\n`;
        }
    }
    
    output += "\nObject.keys():\n";
    output += Object.keys(window.demoObject).join(', ') + "\n";
    
    output += "\nObject.values():\n";
    output += Object.values(window.demoObject).join(', ') + "\n";
    
    output += "\nObject.entries():\n";
    Object.entries(window.demoObject).forEach(([key, value]) => {
        output += `[${key}, ${JSON.stringify(value)}]\n`;
    });
    
    result.innerHTML = `<div class="result-display">${output}</div>`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updatePropertyResult();
    console.log("Objects section loaded successfully!");
});
