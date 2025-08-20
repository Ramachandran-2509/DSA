# JavaScript Strings

Strings are one of the most fundamental data types in JavaScript, used to represent text. They are immutable, meaning once created, they cannot be changed. JavaScript provides a rich set of methods for string manipulation, searching, and transformation.

## 📚 Table of Contents

1. [String Creation](#string-creation)
2. [String Properties](#string-properties)
3. [String Methods](#string-methods)
4. [Search & Replace](#search--replace)
5. [String Extraction](#string-extraction)
6. [Advanced Concepts](#advanced-concepts)
7. [Performance & Best Practices](#performance--best-practices)
8. [Common Pitfalls](#common-pitfalls)

## 🏗️ String Creation

### String Literals
The most common way to create strings:

```javascript
let str1 = "Hello, World!";
let str2 = 'Single quotes work too';
let str3 = `Template literals (ES6+)`;
```

### String Constructor
Using the `String` constructor (creates a String object):

```javascript
let str = new String("Constructor string");
console.log(typeof str); // "object"
```

### Template Literals (ES6+)
Modern way to create strings with expressions:

```javascript
let name = "Alice";
let age = 25;
let greeting = `Hello, ${name}! You are ${age} years old.`;

// Multiline strings
let multiline = `
    This is a
    multiline string
    using template literals
`;
```

### String Concatenation
Combining strings:

```javascript
let firstName = "John";
let lastName = "Doe";

// Using + operator
let fullName = firstName + " " + lastName;

// Using concat() method
let fullName2 = firstName.concat(" ", lastName);

// Using template literals
let fullName3 = `${firstName} ${lastName}`;
```

## 📊 String Properties

### Length Property
```javascript
let text = "JavaScript is awesome!";
console.log(text.length); // 23
```

### Character Access
```javascript
let text = "Hello";

// Bracket notation (ES6+)
console.log(text[0]); // "H"

// charAt() method
console.log(text.charAt(0)); // "H"

// charCodeAt() for Unicode
console.log(text.charCodeAt(0)); // 72 (Unicode for 'H')

// Last character
console.log(text[text.length - 1]); // "o"
```

## 🔧 String Methods

### Searching Methods

**indexOf() and lastIndexOf():**
```javascript
let text = "The quick brown fox jumps over the lazy dog";

console.log(text.indexOf("fox"));       // 16
console.log(text.lastIndexOf("the"));   // 31
console.log(text.indexOf("cat"));       // -1 (not found)
```

**includes(), startsWith(), endsWith():**
```javascript
let text = "Hello, World!";

console.log(text.includes("World"));    // true
console.log(text.startsWith("Hello"));  // true
console.log(text.endsWith("!"));        // true
```

### Extracting Methods

**slice(start, end):**
```javascript
let text = "JavaScript Programming";

console.log(text.slice(0, 10));         // "JavaScript"
console.log(text.slice(-11));           // "Programming"
console.log(text.slice(4, -4));         // "Script Progra"
```

**substring(start, end):**
```javascript
console.log(text.substring(0, 10));     // "JavaScript"
console.log(text.substring(11));        // "Programming"
console.log(text.substring(-5));        // "JavaScript" (negative becomes 0)
```

**substr(start, length) - Deprecated:**
```javascript
console.log(text.substr(0, 10));        // "JavaScript"
console.log(text.substr(-11));          // "Programming"
```

### Transforming Methods

**Case Conversion:**
```javascript
let text = "Hello, World!";

console.log(text.toUpperCase());        // "HELLO, WORLD!"
console.log(text.toLowerCase());        // "hello, world!"
```

**Trimming:**
```javascript
let spaced = "  Hello World  ";

console.log(spaced.trim());             // "Hello World"
console.log(spaced.trimStart());        // "Hello World  "
console.log(spaced.trimEnd());          // "  Hello World"
```

**Replacing:**
```javascript
let text = "Hello, World!";

console.log(text.replace("World", "JavaScript")); // "Hello, JavaScript!"
console.log(text.replaceAll("o", "0"));           // "Hell0, W0rld!"
```

**Splitting and Joining:**
```javascript
let text = "apple,banana,orange";

let fruits = text.split(",");           // ["apple", "banana", "orange"]
console.log(fruits.join(" - "));        // "apple - banana - orange"
```

### Advanced Methods

**Padding:**
```javascript
let text = "Hello";

console.log(text.padStart(10, "*"));    // "*****Hello"
console.log(text.padEnd(10, "-"));      // "Hello-----"
```

**Repeating:**
```javascript
let text = "Ha";

console.log(text.repeat(3));            // "HaHaHa"
```

## 🔍 Search & Replace

### Basic Search Methods
```javascript
let text = "The quick brown fox jumps over the lazy dog";

// Finding position
console.log(text.indexOf("fox"));       // 16
console.log(text.lastIndexOf("the"));   // 31

// Checking existence
console.log(text.includes("brown"));    // true
console.log(text.startsWith("The"));    // true
console.log(text.endsWith("dog"));      // true
```

### Regular Expressions
```javascript
let text = "The quick brown fox jumps over the lazy dog";

// Search with regex
console.log(text.search(/fox/));        // 16

// Match with regex
console.log(text.match(/the/gi));       // ["The", "the"]

// Replace with regex
console.log(text.replace(/the/gi, "a")); // "a quick brown fox jumps over a lazy dog"
```

### Replace Methods
```javascript
let text = "Hello World Hello";

// Replace first occurrence
console.log(text.replace("Hello", "Hi")); // "Hi World Hello"

// Replace all occurrences
console.log(text.replaceAll("Hello", "Hi")); // "Hi World Hi"

// Replace with regex
console.log(text.replace(/Hello/g, "Hi")); // "Hi World Hi"
```

## ✂️ String Extraction

### slice() vs substring() vs substr()

**slice(start, end):**
- Negative indices count from the end
- Returns empty string if start > end
```javascript
let text = "JavaScript";
console.log(text.slice(0, 4));    // "Java"
console.log(text.slice(-6));      // "Script"
console.log(text.slice(4, -2));   // "Scri"
```

**substring(start, end):**
- Negative indices become 0
- Swaps start and end if start > end
```javascript
console.log(text.substring(0, 4)); // "Java"
console.log(text.substring(-6));   // "JavaScript" (negative becomes 0)
console.log(text.substring(4, 2)); // "va" (swaps indices)
```

**substr(start, length) - Deprecated:**
```javascript
console.log(text.substr(0, 4));   // "Java"
console.log(text.substr(-6));     // "Script"
```

## 🚀 Advanced Concepts

### Unicode & Special Characters
```javascript
// Unicode escape sequences
let unicode = "\u0041\u0042\u0043"; // "ABC"
let emoji = "Hello \u{1F600}"; // "Hello 😀"

// Special characters
let special = "Line 1\nLine 2\tTabbed";
let raw = String.raw`C:\Users\Name`; // Raw string

// String normalization
let cafe1 = "café";
let cafe2 = "cafe\u0301";
console.log(cafe1.normalize() === cafe2.normalize()); // true
```

### String Iteration
```javascript
let text = "Hello";

// for...of loop
for (let char of text) {
    console.log(char); // H, e, l, l, o
}

// Array methods
let chars = [...text]; // ["H", "e", "l", "l", "o"]
let reversed = text.split("").reverse().join(""); // "olleH"

// String iterator
let iterator = text[Symbol.iterator]();
console.log(iterator.next().value); // "H"
```

### String Comparison
```javascript
// Lexicographic comparison
console.log("apple" < "banana");        // true
console.log("Apple" < "apple");         // true (uppercase < lowercase)

// Locale-aware comparison
console.log("ä".localeCompare("a"));    // 1 (depends on locale)

// Case-insensitive comparison
console.log("Hello".toLowerCase() === "hello".toLowerCase()); // true

// String equality
let str1 = "Hello";
let str2 = new String("Hello");
console.log(str1 === str2);             // false (different types)
console.log(str1 == str2);              // true (value comparison)
```

## ⚡ Performance & Best Practices

### Efficient String Concatenation
```javascript
// ❌ Inefficient for many concatenations
let result = "";
for (let i = 0; i < 1000; i++) {
    result += i; // Creates new string each time
}

// ✅ More efficient with arrays
let parts = [];
for (let i = 0; i < 1000; i++) {
    parts.push(i);
}
let result2 = parts.join("");

// ✅ Template literals for complex strings
let name = "Alice";
let age = 25;
let message = `Hello ${name}, you are ${age} years old`;
```

### Use Modern Methods
```javascript
// ✅ Use includes() for existence checks
if (text.includes("search")) {
    // Found
}

// ❌ Avoid indexOf() for existence checks
if (text.indexOf("search") !== -1) {
    // Found
}

// ✅ Use replaceAll() for global replacement
text.replaceAll("old", "new");

// ❌ Avoid regex for simple replacement
text.replace(/old/g, "new");
```

### String Immutability
```javascript
let text = "Hello";
text[0] = "h"; // This doesn't work - strings are immutable
console.log(text); // "Hello"

// ✅ Create new string
let newText = "h" + text.slice(1); // "hello"
```

## ✅ Best Practices

### 1. Use Template Literals for Complex Strings
```javascript
// ✅ Good
let message = `Hello ${name}, you are ${age} years old`;

// ❌ Avoid
let message = "Hello " + name + ", you are " + age + " years old";
```

### 2. Use Appropriate Search Methods
```javascript
// ✅ For existence checks
if (text.includes("search")) { /* ... */ }

// ✅ For position checks
if (text.indexOf("search") !== -1) { /* ... */ }

// ✅ For start/end checks
if (text.startsWith("prefix")) { /* ... */ }
if (text.endsWith("suffix")) { /* ... */ }
```

### 3. Use slice() for String Extraction
```javascript
// ✅ Good - supports negative indices
let lastChars = text.slice(-5);

// ❌ Avoid - deprecated
let lastChars = text.substr(-5);
```

### 4. Handle Empty Strings
```javascript
// ✅ Good
if (text && text.trim()) {
    // Process non-empty string
}

// ❌ Avoid
if (text) {
    // Might process whitespace-only strings
}
```

### 5. Use String Methods Instead of Regex When Possible
```javascript
// ✅ Simple replacement
text.replaceAll("old", "new");

// ❌ Unnecessary regex
text.replace(/old/g, "new");
```

## ⚠️ Common Pitfalls

### 1. String Immutability
```javascript
// ❌ Problem
let text = "Hello";
text[0] = "h"; // Doesn't work
console.log(text); // "Hello"

// ✅ Solution
let text = "Hello";
text = "h" + text.slice(1); // "hello"
```

### 2. String Constructor vs Literal
```javascript
// ❌ Problem
let str1 = "Hello";
let str2 = new String("Hello");
console.log(str1 === str2); // false

// ✅ Solution
let str1 = "Hello";
let str2 = "Hello";
console.log(str1 === str2); // true
```

### 3. Case-Sensitive Comparisons
```javascript
// ❌ Problem
if (userInput === "yes") {
    // Only matches exact case
}

// ✅ Solution
if (userInput.toLowerCase() === "yes") {
    // Case-insensitive
}
```

### 4. Using substr() (Deprecated)
```javascript
// ❌ Problem - deprecated
let result = text.substr(0, 5);

// ✅ Solution
let result = text.slice(0, 5);
```

### 5. Not Handling Unicode Properly
```javascript
// ❌ Problem
let text = "café";
console.log(text.length); // 4 (might be 5 in some cases)

// ✅ Solution
let text = "café".normalize();
console.log(text.length); // Consistent
```

### 6. Inefficient String Concatenation
```javascript
// ❌ Problem - inefficient
let result = "";
for (let i = 0; i < 1000; i++) {
    result += i;
}

// ✅ Solution - more efficient
let parts = [];
for (let i = 0; i < 1000; i++) {
    parts.push(i);
}
let result = parts.join("");
```

## 🎯 Key Takeaways

1. **Strings are immutable** - methods return new strings
2. **Use template literals** for complex string creation
3. **Prefer includes()** over indexOf() for existence checks
4. **Use slice()** for string extraction (supports negative indices)
5. **Avoid substr()** - it's deprecated
6. **Use replaceAll()** for global replacement
7. **Handle Unicode properly** with normalize()
8. **Use array join()** for multiple concatenations
9. **Be aware of case sensitivity** in comparisons
10. **Use appropriate search methods** for different needs

## 🔗 Related Topics

- [Variables & Data Types](../01-Variables-DataTypes/) - Primitive types
- [Operators & Expressions](../02-Operators-Expressions/) - String operators
- [Control Flow](../03-ControlFlow/) - String-based conditions
- [Functions](../04-Functions/) - String manipulation functions
- [ES6+ Features](../09-ES6Features/) - Template literals and modern methods

---

*Next: [DOM Manipulation](../08-DOM/) - Working with the Document Object Model*
