# JavaScript Async Programming

Asynchronous programming is a fundamental concept in JavaScript that allows code to run non-blocking operations. Understanding async programming is crucial for building responsive web applications, handling I/O operations, and managing complex workflows.

## 📚 Table of Contents

1. [Event Loop & Concurrency](#event-loop--concurrency)
2. [Callbacks](#callbacks)
3. [Promises](#promises)
4. [Promise Combinators](#promise-combinators)
5. [Async/Await](#asyncawait)
6. [Event-Driven Programming](#event-driven-programming)
7. [Advanced Async Patterns](#advanced-async-patterns)
8. [Performance & Best Practices](#performance--best-practices)
9. [Common Pitfalls](#common-pitfalls)

## 🔄 Event Loop & Concurrency

### Understanding the Event Loop

JavaScript is single-threaded but uses an event loop to handle concurrency. The event loop continuously checks the call stack and processes tasks from the task queue.

```javascript
console.log("1. Start");
setTimeout(() => console.log("3. Async timeout"), 0);
console.log("2. End");

// Output: 1, 2, 3 (even though timeout is 0ms)
```

### Microtasks vs Macrotasks

```javascript
console.log("Script start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise microtask"));

console.log("Script end");

// Output: Script start, Script end, Promise microtask, setTimeout
```

**Key Points:**
- **Microtasks** (Promises, queueMicrotask) are processed before the next render
- **Macrotasks** (setTimeout, setInterval, I/O) are processed after the current execution context
- The event loop prioritizes microtasks over macrotasks

## 📞 Callbacks

### Basic Callbacks

```javascript
function processData(data, callback) {
    const result = data.map(item => item * 2);
    callback(null, result);
}

processData([1, 2, 3], (error, result) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Result:", result);
    }
});
```

### Error-First Callbacks (Node.js Style)

```javascript
function readFile(filename, callback) {
    setTimeout(() => {
        if (filename === "error.txt") {
            callback(new Error("File not found"));
        } else {
            callback(null, "File content: " + filename);
        }
    }, 1000);
}

readFile("data.txt", (error, data) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Data:", data);
    }
});
```

### Callback Hell

```javascript
// Nested callbacks become hard to read and maintain
getUser(userId, (error, user) => {
    if (error) {
        callback(error);
    } else {
        getUserPosts(user, (error, posts) => {
            if (error) {
                callback(error);
            } else {
                getUserComments(user, (error, comments) => {
                    if (error) {
                        callback(error);
                    } else {
                        callback(null, { user, posts, comments });
                    }
                });
            }
        });
    }
});
```

## 🤝 Promises

### Creating Promises

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ id: 1, name: "John" });
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

fetchData()
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
```

### Promise States

- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

### Promise Chaining

```javascript
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: "User " + id }), 500);
    });
}

function getUserPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, title: "Post 1", userId: user.id }
        ]), 500);
    });
}

getUser(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user);
    })
    .then(posts => console.log("Posts:", posts))
    .catch(error => console.error("Error:", error));
```

### Promise Static Methods

```javascript
// Promise.resolve() - creates a resolved promise
const resolvedPromise = Promise.resolve("Immediate success");

// Promise.reject() - creates a rejected promise
const rejectedPromise = Promise.reject(new Error("Immediate error"));

// Promise.all() - waits for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then(results => console.log("All completed:", results));

// Promise.race() - returns the first promise to settle
Promise.race([fastPromise, slowPromise])
    .then(result => console.log("Winner:", result));
```

## 🔗 Promise Combinators

### Promise.all()

Waits for all promises to resolve. If any promise rejects, the entire Promise.all rejects.

```javascript
const promises = [
    fetchUser(1),
    fetchUser(2),
    fetchUser(3)
];

Promise.all(promises)
    .then(users => console.log("All users:", users))
    .catch(error => console.error("Error:", error));
```

### Promise.race()

Returns the first promise to settle (either resolve or reject).

```javascript
const fastPromise = new Promise(resolve => 
    setTimeout(() => resolve("Fast"), 100)
);
const slowPromise = new Promise(resolve => 
    setTimeout(() => resolve("Slow"), 1000)
);

Promise.race([fastPromise, slowPromise])
    .then(result => console.log("Winner:", result)); // "Fast"
```

### Promise.allSettled()

Waits for all promises to settle, regardless of whether they resolve or reject.

```javascript
const promises = [
    Promise.resolve("Success 1"),
    Promise.reject(new Error("Error 1")),
    Promise.resolve("Success 2")
];

Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index + 1}:`, result.value);
            } else {
                console.log(`Promise ${index + 1}:`, result.reason);
            }
        });
    });
```

### Promise.any()

Returns the first promise to fulfill (resolve). Only rejects if all promises reject.

```javascript
const promises = [
    Promise.reject(new Error("Error 1")),
    Promise.resolve("Success 1"),
    Promise.reject(new Error("Error 2"))
];

Promise.any(promises)
    .then(result => console.log("First success:", result)) // "Success 1"
    .catch(error => console.error("All failed:", error));
```

## ⏰ Async/Await

### Basic Async/Await

```javascript
async function fetchUserData() {
    try {
        const user = await getUser(1);
        console.log("User:", user);
        
        const posts = await getUserPosts(user);
        console.log("Posts:", posts);
        
        return { user, posts };
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

fetchUserData()
    .then(result => console.log("Final result:", result))
    .catch(error => console.error("Final error:", error));
```

### Parallel Execution

```javascript
// Sequential (slow)
async function fetchSequential() {
    const user1 = await getUser(1);
    const user2 = await getUser(2);
    const user3 = await getUser(3);
    return [user1, user2, user3];
}

// Parallel (fast)
async function fetchParallel() {
    const promises = [
        getUser(1),
        getUser(2),
        getUser(3)
    ];
    return await Promise.all(promises);
}
```

### Async Arrow Functions

```javascript
const fetchData = async (id) => {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
};

// Async IIFE (Immediately Invoked Function Expression)
(async () => {
    try {
        const data = await fetchData(1);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();
```

## 📡 Event-Driven Programming

### Custom Event Emitter

```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event]
                .filter(cb => cb !== callback);
        }
    }
}

const emitter = new EventEmitter();
emitter.on('userLogin', (user) => {
    console.log('User logged in:', user);
});

emitter.emit('userLogin', { id: 1, name: 'John' });
```

### Async Event Emitter

```javascript
class AsyncEventEmitter extends EventEmitter {
    async emitAsync(event, data) {
        if (this.events[event]) {
            const promises = this.events[event]
                .map(callback => callback(data));
            return Promise.all(promises);
        }
        return Promise.resolve();
    }
    
    once(event, callback) {
        const onceCallback = (data) => {
            callback(data);
            this.off(event, onceCallback);
        };
        this.on(event, onceCallback);
    }
}

const asyncEmitter = new AsyncEventEmitter();
asyncEmitter.on('dataProcessed', async (data) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log('Data processed:', data);
});

asyncEmitter.emitAsync('dataProcessed', { id: 1, value: 'test' })
    .then(() => console.log('All handlers completed'));
```

## 🚀 Advanced Async Patterns

### Async Generators

```javascript
async function* fetchUsersStream() {
    const userIds = [1, 2, 3, 4, 5];
    
    for (const id of userIds) {
        const user = await fetchUser(id);
        yield user;
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

async function processUserStream() {
    for await (const user of fetchUsersStream()) {
        console.log('Processing user:', user);
    }
}
```

### Async Queue

```javascript
class AsyncQueue {
    constructor(concurrency = 1) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    
    async add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ task, resolve, reject });
            this.process();
        });
    }
    
    async process() {
        if (this.running >= this.concurrency || this.queue.length === 0) {
            return;
        }
        
        this.running++;
        const { task, resolve, reject } = this.queue.shift();
        
        try {
            const result = await task();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.running--;
            this.process();
        }
    }
}

const queue = new AsyncQueue(2);
const tasks = [
    () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 500))
];

tasks.forEach(task => {
    queue.add(task).then(result => console.log(result));
});
```

### Retry Pattern

```javascript
async function retryOperation(operation, maxRetries = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            if (attempt === maxRetries) {
                throw error;
            }
            
            console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2; // Exponential backoff
        }
    }
}

// Usage
retryOperation(async () => {
    const response = await fetch('/api/data');
    if (!response.ok) {
        throw new Error('API call failed');
    }
    return response.json();
}, 3, 1000);
```

### Async Pool

```javascript
class AsyncPool {
    constructor(maxConcurrency) {
        this.maxConcurrency = maxConcurrency;
        this.running = 0;
        this.queue = [];
    }
    
    async run(tasks) {
        const results = new Array(tasks.length);
        let completed = 0;
        
        return new Promise((resolve, reject) => {
            const processTask = async (index) => {
                if (index >= tasks.length) return;
                
                this.running++;
                try {
                    results[index] = await tasks[index]();
                } catch (error) {
                    reject(error);
                    return;
                } finally {
                    this.running--;
                    completed++;
                    
                    if (completed === tasks.length) {
                        resolve(results);
                    } else {
                        processTask(completed + this.running);
                    }
                }
            };
            
            // Start initial tasks
            for (let i = 0; i < Math.min(this.maxConcurrency, tasks.length); i++) {
                processTask(i);
            }
        });
    }
}

const pool = new AsyncPool(3);
const tasks = Array.from({ length: 10 }, (_, i) => 
    () => new Promise(resolve => 
        setTimeout(() => resolve(`Task ${i + 1}`), Math.random() * 1000)
    )
);

pool.run(tasks).then(results => console.log('All results:', results));
```

## ⚡ Performance & Best Practices

### Memory Management

```javascript
class DataProcessor {
    constructor() {
        this.cache = new Map();
        this.listeners = new Set();
    }
    
    addListener(callback) {
        this.listeners.add(callback);
        return () => this.listeners.delete(callback);
    }
    
    clearCache() {
        this.cache.clear();
    }
    
    destroy() {
        this.listeners.clear();
        this.cache.clear();
    }
}
```

### Error Handling Patterns

```javascript
async function robustAsyncOperation() {
    try {
        // Primary operation
        const result = await primaryOperation();
        return result;
    } catch (error) {
        console.error('Primary operation failed:', error);
        
        try {
            // Fallback operation
            const fallback = await fallbackOperation();
            return fallback;
        } catch (fallbackError) {
            console.error('Fallback also failed:', fallbackError);
            return getDefaultValue();
        }
    } finally {
        // Cleanup
        await cleanup();
    }
}
```

### Performance Optimization

```javascript
// Avoid blocking the event loop
function heavyComputation() {
    return new Promise((resolve) => {
        // Use setTimeout to break up heavy work
        setTimeout(() => {
            // Process in chunks
            const result = processInChunks();
            resolve(result);
        }, 0);
    });
}

// Use Promise.all for parallel operations
async function fetchMultipleData() {
    const promises = [
        fetch('/api/users'),
        fetch('/api/posts'),
        fetch('/api/comments')
    ];
    
    const [users, posts, comments] = await Promise.all(promises);
    return { users, posts, comments };
}
```

## ❌ Common Pitfalls

### Forgetting to Await

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

### Not Handling Promise Rejections

```javascript
// ❌ Unhandled promise rejection
async function riskyOperation() {
    const result = await fetch('/api/data');
    return result.json();
}

// ✅ Always handle errors
async function safeOperation() {
    try {
        const result = await fetch('/api/data');
        return result.json();
    } catch (error) {
        console.error('Operation failed:', error);
        throw error;
    }
}
```

### Blocking the Event Loop

```javascript
// ❌ Blocking operation
function heavyTask() {
    for (let i = 0; i < 1000000000; i++) {
        // Heavy computation blocks the event loop
    }
}

// ✅ Non-blocking operation
async function heavyTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Process in chunks
            const result = processInChunks();
            resolve(result);
        }, 0);
    });
}
```

### Memory Leaks in Event Listeners

```javascript
// ❌ Potential memory leak
class Component {
    constructor() {
        this.emitter = new EventEmitter();
        this.emitter.on('data', this.handleData.bind(this));
    }
    
    // Listener is never removed
}

// ✅ Proper cleanup
class Component {
    constructor() {
        this.emitter = new EventEmitter();
        this.handleData = this.handleData.bind(this);
        this.emitter.on('data', this.handleData);
    }
    
    destroy() {
        this.emitter.off('data', this.handleData);
    }
}
```

## 🎯 Key Takeaways

1. **JavaScript is single-threaded but uses an event loop for concurrency**
2. **Use async/await for cleaner asynchronous code**
3. **Always handle promise rejections and errors**
4. **Use Promise.all for parallel operations**
5. **Avoid blocking the event loop with heavy computations**
6. **Clean up event listeners to prevent memory leaks**
7. **Use appropriate promise combinators for different scenarios**
8. **Consider performance implications of async patterns**
9. **Test async code thoroughly**
10. **Use retry patterns for unreliable operations**

Asynchronous programming is essential for modern JavaScript development. Understanding these patterns will help you build more responsive and efficient applications.


