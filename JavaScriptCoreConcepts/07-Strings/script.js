// JavaScript Strings - Interactive Examples

// ============================================
// STRING CREATION EXAMPLES
// ============================================

console.log("=== String Creation Examples ===");

// String literals
let str1 = "Hello, World!";
let str2 = 'Single quotes work too';
let str3 = `Template literals (ES6+)`;

console.log("String literals:", str1, str2, str3);

// String constructor
let str4 = new String("Constructor string");
console.log("String constructor:", str4);
console.log("Type of str4:", typeof str4); // "object"

// Template literals with expressions
let name = "Alice";
let age = 25;
let greeting = `Hello, ${name}! You are ${age} years old.`;
let multiline = `
    This is a
    multiline string
    using template literals
`;

console.log("Template literal:", greeting);
console.log("Multiline string:", multiline);

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let fullName2 = firstName.concat(" ", lastName);

console.log("Concatenation:", fullName);
console.log("concat() method:", fullName2);

// ============================================
// STRING PROPERTIES EXAMPLES
// ============================================

console.log("\n=== String Properties Examples ===");

let text = "JavaScript is awesome!";

// Length property
console.log("String length:", text.length);

// Accessing characters
console.log("First character (bracket):", text[0]);
console.log("First character (charAt):", text.charAt(0));
console.log("Last character:", text[text.length - 1]);
console.log("Character at index 4:", text.charAt(4));

// Unicode values
console.log("Unicode of 'J':", text.charCodeAt(0));
console.log("Unicode of 'a':", text.charCodeAt(1));

// String visualization
console.log("String visualization:");
console.log("Index:  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22");
console.log("String: J a v a S c r i p t   i s   a w e s o m e !");

// ============================================
// STRING METHODS EXAMPLES
// ============================================

console.log("\n=== String Methods Examples ===");

let sampleText = "  Hello, World!  ";

// Searching methods
console.log("Original text:", `"${sampleText}"`);
console.log("indexOf('World'):", sampleText.indexOf("World"));
console.log("lastIndexOf('o'):", sampleText.lastIndexOf("o"));
console.log("includes('Hello'):", sampleText.includes("Hello"));
console.log("startsWith('Hello'):", sampleText.startsWith("Hello"));
console.log("endsWith('!'):", sampleText.endsWith("!"));

// Extracting methods
console.log("slice(2, 7):", `"${sampleText.slice(2, 7)}"`);
console.log("substring(2, 7):", `"${sampleText.substring(2, 7)}"`);
console.log("slice(-6, -1):", `"${sampleText.slice(-6, -1)}"`);

// Transforming methods
console.log("toUpperCase():", `"${sampleText.toUpperCase()}"`);
console.log("toLowerCase():", `"${sampleText.toLowerCase()}"`);
console.log("trim():", `"${sampleText.trim()}"`);
console.log("trimStart():", `"${sampleText.trimStart()}"`);
console.log("trimEnd():", `"${sampleText.trimEnd()}"`);

// Replacing
console.log("replace('World', 'JavaScript'):", `"${sampleText.replace("World", "JavaScript")}"`);

// Splitting and joining
let words = sampleText.trim().split(", ");
console.log("split(', '):", words);
console.log("join(' - '):", words.join(" - "));

// Padding
let shortText = "Hello";
console.log("padStart(10, '*'):", `"${shortText.padStart(10, "*")}"`);
console.log("padEnd(10, '-'):", `"${shortText.padEnd(10, "-")}"`);

// Repeating
console.log("repeat(3):", `"${shortText.repeat(3)}"`);

// ============================================
// SEARCH & REPLACE EXAMPLES
// ============================================

console.log("\n=== Search & Replace Examples ===");

let searchText = "The quick brown fox jumps over the lazy dog";

// Basic search methods
console.log("Original text:", searchText);
console.log("indexOf('fox'):", searchText.indexOf("fox"));
console.log("lastIndexOf('the'):", searchText.lastIndexOf("the"));
console.log("includes('brown'):", searchText.includes("brown"));
console.log("startsWith('The'):", searchText.startsWith("The"));
console.log("endsWith('dog'):", searchText.endsWith("dog"));

// Regular expressions
console.log("search(/fox/):", searchText.search(/fox/));
console.log("match(/the/gi):", searchText.match(/the/gi));

// Replace methods
console.log("replace('fox', 'cat'):", searchText.replace("fox", "cat"));
console.log("replaceAll('the', 'a'):", searchText.replaceAll("the", "a"));
console.log("replace(/the/gi, 'a'):", searchText.replace(/the/gi, "a"));

// Complex replacements
let emailText = "Contact us at john@email.com or jane@email.com";
let maskedEmail = emailText.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[EMAIL]");
console.log("Email masking:", maskedEmail);

// ============================================
// STRING EXTRACTION EXAMPLES
// ============================================

console.log("\n=== String Extraction Examples ===");

let extractText = "JavaScript Programming";

console.log("Original text:", extractText);
console.log("slice(0, 10):", extractText.slice(0, 10));
console.log("slice(-11):", extractText.slice(-11));
console.log("slice(4, -4):", extractText.slice(4, -4));

console.log("substring(0, 10):", extractText.substring(0, 10));
console.log("substring(11):", extractText.substring(11));
console.log("substring(-5):", extractText.substring(-5)); // Negative becomes 0

console.log("substr(0, 10):", extractText.substr(0, 10));
console.log("substr(-11):", extractText.substr(-11));

// Character access
console.log("charAt(4):", extractText.charAt(4));
console.log("charCodeAt(0):", extractText.charCodeAt(0));
console.log("text[4]:", extractText[4]);

// ============================================
// ADVANCED STRING CONCEPTS
// ============================================

console.log("\n=== Advanced String Concepts ===");

// Unicode and special characters
let unicode = "\u0041\u0042\u0043"; // "ABC"
let emoji = "Hello \u{1F600}"; // "Hello 😀"
let special = "Line 1\nLine 2\tTabbed";
let raw = String.raw`C:\Users\Name`; // Raw string

console.log("Unicode:", unicode);
console.log("Emoji:", emoji);
console.log("Special characters:", special);
console.log("Raw string:", raw);

// String normalization
let cafe1 = "café";
let cafe2 = "cafe\u0301";
console.log("Normalized:", cafe1.normalize("NFC"));
console.log("Are equal:", cafe1 === cafe2);
console.log("Are normalized equal:", cafe1.normalize() === cafe2.normalize());

// String iteration
let iterateText = "Hello";
console.log("String iteration:");
for (let char of iterateText) {
    console.log(char);
}

// Array methods with strings
let chars = [...iterateText];
console.log("Spread operator:", chars);
let reversed = iterateText.split("").reverse().join("");
console.log("Reversed:", reversed);

// String iterator
let iterator = iterateText[Symbol.iterator]();
console.log("Iterator first value:", iterator.next().value);

// String comparison
console.log("String comparison:");
console.log("'apple' < 'banana':", "apple" < "banana");
console.log("'Apple' < 'apple':", "Apple" < "apple");
console.log("'ä'.localeCompare('a'):", "ä".localeCompare("a"));

// String equality
let str1 = "Hello";
let str2 = new String("Hello");
console.log("str1 === str2:", str1 === str2);
console.log("str1 == str2:", str1 == str2);
console.log("str1 === str2.toString():", str1 === str2.toString());

// ============================================
// PERFORMANCE EXAMPLES
// ============================================

console.log("\n=== Performance Examples ===");

// String concatenation performance
function testConcatenation() {
    const iterations = 10000;
    
    // Method 1: String concatenation
    const start1 = performance.now();
    let result1 = "";
    for (let i = 0; i < iterations; i++) {
        result1 += i;
    }
    const time1 = performance.now() - start1;
    
    // Method 2: Array join
    const start2 = performance.now();
    let parts = [];
    for (let i = 0; i < iterations; i++) {
        parts.push(i);
    }
    let result2 = parts.join("");
    const time2 = performance.now() - start2;
    
    return {
        concatenation: time1,
        arrayJoin: time2,
        concatenationResult: result1.length,
        arrayJoinResult: result2.length
    };
}

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

function createString() {
    const input = document.getElementById('stringInput').value;
    const type = document.getElementById('stringType').value;
    let result = '';
    let code = '';
    
    switch(type) {
        case 'literal':
            result = `"${input}"`;
            code = `let str = "${input}";`;
            break;
        case 'template':
            result = `\`${input}\``;
            code = `let str = \`${input}\`;`;
            break;
        case 'constructor':
            result = `new String("${input}")`;
            code = `let str = new String("${input}");`;
            break;
    }
    
    document.getElementById('stringResult').innerHTML = `
        <div class="result-display">
Code: ${code}
Result: ${result}
Type: ${typeof eval(result)}
Length: ${eval(result).length}
        </div>
    `;
}

function visualizeString() {
    const text = document.getElementById('visualizeString').value;
    if (!text) return;
    
    let indices = '';
    let characters = '';
    let unicodeValues = '';
    
    for (let i = 0; i < text.length; i++) {
        indices += `<span class="char-index">${i}</span>`;
        characters += `<span class="char-index">${text[i]}</span>`;
        unicodeValues += `<span class="char-index">${text.charCodeAt(i)}</span>`;
    }
    
    document.getElementById('visualizationResult').innerHTML = `
        <div class="string-visualizer">
String: "${text}"
Length: ${text.length}

Indices:     ${indices}
Characters:  ${characters}
Unicode:     ${unicodeValues}
        </div>
    `;
}

function testStringMethod() {
    const text = document.getElementById('methodString').value;
    const method = document.getElementById('methodSelect').value;
    const param1 = document.getElementById('methodParam1').value;
    const param2 = document.getElementById('methodParam2').value;
    
    if (!text) return;
    
    let result = '';
    let code = '';
    
    switch(method) {
        case 'toUpperCase':
            result = text.toUpperCase();
            code = `"${text}".toUpperCase()`;
            break;
        case 'toLowerCase':
            result = text.toLowerCase();
            code = `"${text}".toLowerCase()`;
            break;
        case 'trim':
            result = text.trim();
            code = `"${text}".trim()`;
            break;
        case 'slice':
            const start = parseInt(param1) || 0;
            const end = parseInt(param2) || text.length;
            result = text.slice(start, end);
            code = `"${text}".slice(${start}, ${end})`;
            break;
        case 'replace':
            result = text.replace(param1, param2);
            code = `"${text}".replace("${param1}", "${param2}")`;
            break;
        case 'split':
            result = JSON.stringify(text.split(param1));
            code = `"${text}".split("${param1}")`;
            break;
        case 'indexOf':
            result = text.indexOf(param1);
            code = `"${text}".indexOf("${param1}")`;
            break;
        case 'includes':
            result = text.includes(param1);
            code = `"${text}".includes("${param1}")`;
            break;
    }
    
    document.getElementById('methodResult').innerHTML = `
        <div class="result-display">
Method: ${code}
Result: ${result}
        </div>
    `;
}

function searchAndReplace() {
    const text = document.getElementById('searchText').value;
    const searchTerm = document.getElementById('searchTerm').value;
    const replaceTerm = document.getElementById('replaceTerm').value;
    
    if (!text || !searchTerm) return;
    
    const replaced = text.replaceAll(searchTerm, replaceTerm);
    const index = text.indexOf(searchTerm);
    const includes = text.includes(searchTerm);
    
    document.getElementById('searchResult').innerHTML = `
        <div class="result-display">
Original: "${text}"
Search term: "${searchTerm}"
Replace with: "${replaceTerm}"

Results:
- First occurrence at index: ${index !== -1 ? index : 'Not found'}
- Includes search term: ${includes}
- Replaced text: "${replaced}"
        </div>
    `;
}

function extractString() {
    const text = document.getElementById('extractString').value;
    const start = parseInt(document.getElementById('startIndex').value) || 0;
    const end = parseInt(document.getElementById('endIndex').value) || text.length;
    
    if (!text) return;
    
    const sliceResult = text.slice(start, end);
    const substringResult = text.substring(start, end);
    const substrResult = text.substr(start, end - start);
    
    document.getElementById('extractResult').innerHTML = `
        <div class="result-display">
Original: "${text}"
Start: ${start}, End: ${end}

Results:
- slice(${start}, ${end}): "${sliceResult}"
- substring(${start}, ${end}): "${substringResult}"
- substr(${start}, ${end - start}): "${substrResult}"
        </div>
    `;
}

function testStringPerformance() {
    const results = testConcatenation();
    
    document.getElementById('performanceResult').innerHTML = `
        <div class="result-display">
String Performance Test (10,000 iterations):

Method 1 - String Concatenation:
- Time: ${results.concatenation.toFixed(2)}ms
- Result length: ${results.concatenationResult}

Method 2 - Array Join:
- Time: ${results.arrayJoin.toFixed(2)}ms
- Result length: ${results.arrayJoinResult}

Performance difference: ${(results.concatenation - results.arrayJoin).toFixed(2)}ms
        </div>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Strings section loaded successfully!");
    
    // Set default values for interactive elements
    document.getElementById('visualizeString').value = "Hello World";
    document.getElementById('methodString').value = "  Hello, World!  ";
    document.getElementById('extractString').value = "JavaScript Programming";
});
