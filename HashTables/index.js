// ========================================
// HASH TABLES IN JAVASCRIPT
// ========================================

console.log("🔐 Hash Tables Implementation\n");

// ========================================
// HASH TABLE CLASS
// ========================================

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
        this.size = size;
    }

    // Hash function
    hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
        
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const char = key[i];
            const value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.size;
        }
        
        return total;
    }

    // Set key-value pair
    set(key, value) {
        const index = this.hash(key);
        
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        
        // Check if key already exists
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                this.keyMap[index][i][1] = value;
                return;
            }
        }
        
        this.keyMap[index].push([key, value]);
    }

    // Get value by key
    get(key) {
        const index = this.hash(key);
        
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        
        return undefined;
    }

    // Get all keys
    keys() {
        const keysArr = [];
        
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        
        return keysArr;
    }

    // Get all values
    values() {
        const valuesArr = [];
        
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        
        return valuesArr;
    }

    // Remove key-value pair
    remove(key) {
        const index = this.hash(key);
        
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    this.keyMap[index].splice(i, 1);
                    return true;
                }
            }
        }
        
        return false;
    }

    // Check if key exists
    has(key) {
        return this.get(key) !== undefined;
    }

    // Get load factor
    getLoadFactor() {
        let totalItems = 0;
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                totalItems += this.keyMap[i].length;
            }
        }
        return totalItems / this.size;
    }

    // Print hash table
    print() {
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                console.log(`${i}: ${JSON.stringify(this.keyMap[i])}`);
            }
        }
    }
}

// ========================================
// ADVANCED HASH TABLE IMPLEMENTATIONS
// ========================================

// 1. Separate Chaining Hash Table
class SeparateChainingHashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        const index = this.hash(key);
        
        if (!this.table[index]) {
            this.table[index] = [];
        }
        
        // Check if key exists
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i].key === key) {
                this.table[index][i].value = value;
                return;
            }
        }
        
        this.table[index].push({ key, value });
        this.count++;
        
        // Resize if load factor > 0.75
        if (this.getLoadFactor() > 0.75) {
            this.resize(this.size * 2);
        }
    }

    get(key) {
        const index = this.hash(key);
        
        if (this.table[index]) {
            for (const item of this.table[index]) {
                if (item.key === key) {
                    return item.value;
                }
            }
        }
        
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i].key === key) {
                    this.table[index].splice(i, 1);
                    this.count--;
                    return true;
                }
            }
        }
        
        return false;
    }

    getLoadFactor() {
        return this.count / this.size;
    }

    resize(newSize) {
        const oldTable = this.table;
        this.table = new Array(newSize);
        this.size = newSize;
        this.count = 0;
        
        for (const bucket of oldTable) {
            if (bucket) {
                for (const item of bucket) {
                    this.set(item.key, item.value);
                }
            }
        }
    }
}

// 2. Linear Probing Hash Table
class LinearProbingHashTable {
    constructor(size = 53) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        let index = this.hash(key);
        
        while (this.table[index] && this.table[index].key !== key) {
            index = (index + 1) % this.size;
        }
        
        if (!this.table[index]) {
            this.count++;
        }
        
        this.table[index] = { key, value };
        
        if (this.getLoadFactor() > 0.75) {
            this.resize(this.size * 2);
        }
    }

    get(key) {
        let index = this.hash(key);
        
        while (this.table[index]) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.size;
        }
        
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        
        while (this.table[index]) {
            if (this.table[index].key === key) {
                this.table[index] = null;
                this.count--;
                this.rehash(index);
                return true;
            }
            index = (index + 1) % this.size;
        }
        
        return false;
    }

    rehash(startIndex) {
        const items = [];
        let index = startIndex;
        
        // Collect all items after the removed item
        while (this.table[index]) {
            items.push(this.table[index]);
            this.table[index] = null;
            index = (index + 1) % this.size;
        }
        
        // Reinsert items
        for (const item of items) {
            this.set(item.key, item.value);
            this.count--; // Adjust count since set() increments it
        }
    }

    getLoadFactor() {
        return this.count / this.size;
    }

    resize(newSize) {
        const oldTable = this.table;
        this.table = new Array(newSize);
        this.size = newSize;
        this.count = 0;
        
        for (const item of oldTable) {
            if (item) {
                this.set(item.key, item.value);
            }
        }
    }
}

// ========================================
// HASH TABLE APPLICATIONS
// ========================================

// 1. Frequency Counter
function frequencyCounter(arr) {
    const frequency = {};
    
    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;
    }
    
    return frequency;
}

// 2. Anagram Checker
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const frequency = {};
    
    for (const char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    for (const char of str2) {
        if (!frequency[char]) return false;
        frequency[char]--;
    }
    
    return true;
}

// 3. First Non-Repeating Character
function firstNonRepeatingChar(str) {
    const frequency = {};
    
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    for (const char of str) {
        if (frequency[char] === 1) {
            return char;
        }
    }
    
    return null;
}

// 4. Two Sum with Hash Table
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// 5. Group Anagrams
function groupAnagrams(strs) {
    const groups = {};
    
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        
        if (!groups[sorted]) {
            groups[sorted] = [];
        }
        
        groups[sorted].push(str);
    }
    
    return Object.values(groups);
}

// 6. Longest Consecutive Sequence
function longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLength = 0;
    
    for (const num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;
            
            while (set.has(current + 1)) {
                current++;
                length++;
            }
            
            maxLength = Math.max(maxLength, length);
        }
    }
    
    return maxLength;
}

// 7. Subarray Sum Equals K
function subarraySum(nums, k) {
    const map = new Map();
    map.set(0, 1);
    
    let sum = 0;
    let count = 0;
    
    for (const num of nums) {
        sum += num;
        
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    
    return count;
}

// ========================================
// HASH TABLE UTILITIES
// ========================================

// Generate random string
function generateRandomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Performance measurement
function measureHashTablePerformance(hashTable, operations) {
    const start = performance.now();
    
    for (const [key, value] of operations) {
        hashTable.set(key, value);
    }
    
    for (const [key] of operations) {
        hashTable.get(key);
    }
    
    const end = performance.now();
    return end - start;
}

// ========================================
// TESTING
// ========================================

console.log("🧪 Testing Hash Table Implementations");
console.log("=".repeat(50));

// Test Basic Hash Table
console.log("1. Basic Hash Table:");
const ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");

console.log("Get 'maroon':", ht.get("maroon"));
console.log("Get 'yellow':", ht.get("yellow"));
console.log("Keys:", ht.keys());
console.log("Values:", ht.values());
console.log("Load Factor:", ht.getLoadFactor());

// Test Separate Chaining
console.log("\n2. Separate Chaining Hash Table:");
const scht = new SeparateChainingHashTable(10);
scht.set("apple", 1);
scht.set("banana", 2);
scht.set("cherry", 3);
scht.set("date", 4);
scht.set("elderberry", 5);

console.log("Get 'apple':", scht.get("apple"));
console.log("Get 'banana':", scht.get("banana"));
console.log("Load Factor:", scht.getLoadFactor());

// Test Linear Probing
console.log("\n3. Linear Probing Hash Table:");
const lpht = new LinearProbingHashTable(10);
lpht.set("apple", 1);
lpht.set("banana", 2);
lpht.set("cherry", 3);
lpht.set("date", 4);
lpht.set("elderberry", 5);

console.log("Get 'apple':", lpht.get("apple"));
console.log("Get 'banana':", lpht.get("banana"));
console.log("Load Factor:", lpht.getLoadFactor());

// Test Applications
console.log("\n4. Hash Table Applications:");

// Frequency Counter
console.log("Frequency Counter [1,2,2,3,3,3,4]:", frequencyCounter([1, 2, 2, 3, 3, 3, 4]));

// Anagram Checker
console.log("Is Anagram 'listen' and 'silent':", isAnagram("listen", "silent"));
console.log("Is Anagram 'hello' and 'world':", isAnagram("hello", "world"));

// First Non-Repeating Character
console.log("First Non-Repeating in 'leetcode':", firstNonRepeatingChar("leetcode"));

// Two Sum
console.log("Two Sum [2,7,11,15] target 9:", twoSum([2, 7, 11, 15], 9));

// Group Anagrams
console.log("Group Anagrams:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Longest Consecutive Sequence
console.log("Longest Consecutive [100,4,200,1,3,2]:", longestConsecutive([100, 4, 200, 1, 3, 2]));

// Subarray Sum Equals K
console.log("Subarray Sum [1,1,1] k=2:", subarraySum([1, 1, 1], 2));

// Performance Comparison
console.log("\n5. Performance Comparison:");
const operations = Array.from({ length: 1000 }, (_, i) => [
    generateRandomString(),
    Math.floor(Math.random() * 1000)
]);

const basicTime = measureHashTablePerformance(new HashTable(100), operations);
const scTime = measureHashTablePerformance(new SeparateChainingHashTable(100), operations);
const lpTime = measureHashTablePerformance(new LinearProbingHashTable(100), operations);

console.log("Basic Hash Table:", basicTime.toFixed(2), "ms");
console.log("Separate Chaining:", scTime.toFixed(2), "ms");
console.log("Linear Probing:", lpTime.toFixed(2), "ms");

console.log("\n✅ All hash table tests completed!");
