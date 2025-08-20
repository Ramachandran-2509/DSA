// JavaScript Async Programming - Interactive Examples

// ============================================
// EVENT LOOP & CONCURRENCY EXAMPLES
// ============================================

console.log("=== Event Loop & Concurrency Examples ===");

// Demonstrate event loop behavior
console.log("1. Start");
setTimeout(() => console.log("3. Async timeout"), 0);
console.log("2. End");

// Microtasks vs Macrotasks
console.log("4. Script start");

setTimeout(() => console.log("7. setTimeout"), 0);

Promise.resolve().then(() => console.log("5. Promise microtask"));

setTimeout(() => console.log("8. Another setTimeout"), 0);

Promise.resolve().then(() => console.log("6. Another Promise microtask"));

console.log("9. Script end");

// Output order: 1, 2, 4, 9, 5, 6, 3, 7, 8

// ============================================
// CALLBACKS EXAMPLES
// ============================================

console.log("=== Callbacks Examples ===");

// Basic callback function
function processData(data, callback) {
    const result = data.map(item => item * 2);
    callback(null, result);
}

// Error-first callback
function readFile(filename, callback) {
    setTimeout(() => {
        if (filename === "error.txt") {
            callback(new Error("File not found"));
        } else {
            callback(null, "File content: " + filename);
        }
    }, 1000);
}

// Callback hell example
function getUserData(userId, callback) {
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
}

console.log("Callbacks examples loaded");

// ============================================
// PROMISES EXAMPLES
// ============================================

console.log("=== Promises Examples ===");

// Basic promise creation
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

// Promise chaining
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: "User " + id }), 500);
    });
}

function getUserPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, title: "Post 1", userId: user.id },
            { id: 2, title: "Post 2", userId: user.id }
        ]), 500);
    });
}

function getUserComments(user) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, text: "Comment 1", userId: user.id },
            { id: 2, text: "Comment 2", userId: user.id }
        ]), 500);
    });
}

// Promise.all example
function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: "User " + id });
        }, Math.random() * 1000);
    });
}

console.log("Promises examples loaded");

// ============================================
// ASYNC/AWAIT EXAMPLES
// ============================================

console.log("=== Async/Await Examples ===");

// Basic async/await
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

// Parallel execution
async function fetchParallel() {
    const promises = [
        getUser(1),
        getUser(2),
        getUser(3)
    ];
    return await Promise.all(promises);
}

// Sequential execution
async function fetchSequential() {
    const user1 = await getUser(1);
    const user2 = await getUser(2);
    const user3 = await getUser(3);
    return [user1, user2, user3];
}

console.log("Async/Await examples loaded");

// ============================================
// EVENT EMITTER EXAMPLES
// ============================================

console.log("=== Event Emitter Examples ===");

// Custom event emitter
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

// Async event emitter
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

console.log("Event Emitter examples loaded");

// ============================================
// ADVANCED ASYNC PATTERNS
// ============================================

console.log("=== Advanced Async Patterns Examples ===");

// Async generator
async function* fetchUsersStream() {
    const userIds = [1, 2, 3, 4, 5];
    
    for (const id of userIds) {
        const user = await fetchUser(id);
        yield user;
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

// Async queue
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

// Retry pattern
async function retryOperation(operation, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            if (attempt === maxRetries) {
                throw error;
            }
            console.log(`Attempt ${attempt} failed, retrying...`);
            await new Promise(resolve => 
                setTimeout(resolve, 1000 * attempt)
            );
        }
    }
}

console.log("Advanced patterns examples loaded");

// ============================================
// INTERACTIVE FUNCTIONS
// ============================================

function simulateEventLoop() {
    let result = "";
    let logCount = 0;
    
    const log = (message) => {
        logCount++;
        result += `${logCount}. ${message}\n`;
    };
    
    log("Start");
    
    // Simulate synchronous code
    for (let i = 0; i < 1000000; i++) {
        // Heavy computation
    }
    log("Heavy computation done");
    
    // Simulate async code
    setTimeout(() => {
        log("Async timeout completed");
        document.getElementById('eventLoopResult').textContent = result;
    }, 0);
    
    log("End of script");
    
    // Show immediate result
    document.getElementById('eventLoopResult').textContent = result;
}

function testCallback() {
    const input = document.getElementById('callbackInput').value || "1,2,3,4,5";
    const data = input.split(',').map(item => parseInt(item.trim()));
    
    processData(data, (error, result) => {
        if (error) {
            document.getElementById('callbackResult').textContent = `Error: ${error.message}`;
        } else {
            document.getElementById('callbackResult').textContent = `Result: ${JSON.stringify(result)}`;
        }
    });
}

function testErrorCallback() {
    readFile("error.txt", (error, data) => {
        if (error) {
            document.getElementById('callbackResult').textContent = `Error: ${error.message}`;
        } else {
            document.getElementById('callbackResult').textContent = `Data: ${data}`;
        }
    });
}

function testPromise() {
    fetchData()
        .then(data => {
            document.getElementById('promiseResult').textContent = `Success: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('promiseResult').textContent = `Error: ${error.message}`;
        });
}

function testPromiseError() {
    // Create a promise that always rejects
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Simulated error"));
        }, 1000);
    })
    .then(data => {
        document.getElementById('promiseResult').textContent = `Success: ${JSON.stringify(data)}`;
    })
    .catch(error => {
        document.getElementById('promiseResult').textContent = `Error: ${error.message}`;
    });
}

function testPromiseChain() {
    getUser(1)
        .then(user => {
            document.getElementById('promiseResult').textContent = `User: ${JSON.stringify(user)}`;
            return getUserPosts(user);
        })
        .then(posts => {
            document.getElementById('promiseResult').textContent += `\nPosts: ${JSON.stringify(posts)}`;
        })
        .catch(error => {
            document.getElementById('promiseResult').textContent = `Error: ${error.message}`;
        });
}

function testPromiseAll() {
    const promises = [
        fetchUser(1),
        fetchUser(2),
        fetchUser(3)
    ];
    
    Promise.all(promises)
        .then(users => {
            document.getElementById('combinatorResult').textContent = `All users: ${JSON.stringify(users, null, 2)}`;
        })
        .catch(error => {
            document.getElementById('combinatorResult').textContent = `Error: ${error.message}`;
        });
}

function testPromiseRace() {
    const fastPromise = new Promise(resolve => 
        setTimeout(() => resolve("Fast"), 100)
    );
    const slowPromise = new Promise(resolve => 
        setTimeout(() => resolve("Slow"), 1000)
    );
    
    Promise.race([fastPromise, slowPromise])
        .then(result => {
            document.getElementById('combinatorResult').textContent = `Winner: ${result}`;
        })
        .catch(error => {
            document.getElementById('combinatorResult').textContent = `Error: ${error.message}`;
        });
}

function testPromiseAllSettled() {
    const promises = [
        Promise.resolve("Success 1"),
        Promise.reject(new Error("Error 1")),
        Promise.resolve("Success 2"),
        Promise.reject(new Error("Error 2"))
    ];
    
    Promise.allSettled(promises)
        .then(results => {
            let result = "Results:\n";
            results.forEach((result, index) => {
                if (result.status === "fulfilled") {
                    result += `Promise ${index + 1}: ${result.value}\n`;
                } else {
                    result += `Promise ${index + 1}: ${result.reason.message}\n`;
                }
            });
            document.getElementById('combinatorResult').textContent = result;
        });
}

function testAsyncAwait() {
    async function runTest() {
        try {
            const result = await fetchUserData();
            document.getElementById('asyncResult').textContent = `Result: ${JSON.stringify(result, null, 2)}`;
        } catch (error) {
            document.getElementById('asyncResult').textContent = `Error: ${error.message}`;
        }
    }
    
    runTest();
}

function testParallelExecution() {
    async function runTest() {
        try {
            const startTime = Date.now();
            const users = await fetchParallel();
            const endTime = Date.now();
            
            document.getElementById('asyncResult').textContent = 
                `Parallel execution (${endTime - startTime}ms): ${JSON.stringify(users, null, 2)}`;
        } catch (error) {
            document.getElementById('asyncResult').textContent = `Error: ${error.message}`;
        }
    }
    
    runTest();
}

function testAsyncError() {
    async function runTest() {
        try {
            // Simulate an error
            await new Promise((resolve, reject) => {
                setTimeout(() => reject(new Error("Async error test")), 1000);
            });
        } catch (error) {
            document.getElementById('asyncResult').textContent = `Caught error: ${error.message}`;
        }
    }
    
    runTest();
}

function testEventEmitter() {
    const emitter = new EventEmitter();
    let result = "";
    
    emitter.on('userLogin', (user) => {
        result += `User logged in: ${JSON.stringify(user)}\n`;
    });
    
    emitter.on('userLogout', (user) => {
        result += `User logged out: ${JSON.stringify(user)}\n`;
    });
    
    emitter.emit('userLogin', { id: 1, name: 'John' });
    emitter.emit('userLogout', { id: 1, name: 'John' });
    
    document.getElementById('eventResult').textContent = result;
}

function testAsyncEventEmitter() {
    const asyncEmitter = new AsyncEventEmitter();
    let result = "";
    
    asyncEmitter.on('dataProcessed', async (data) => {
        await new Promise(resolve => setTimeout(resolve, 100));
        result += `Data processed: ${JSON.stringify(data)}\n`;
    });
    
    asyncEmitter.on('dataProcessed', async (data) => {
        await new Promise(resolve => setTimeout(resolve, 200));
        result += `Data processed again: ${JSON.stringify(data)}\n`;
    });
    
    asyncEmitter.emitAsync('dataProcessed', { id: 1, value: 'test' })
        .then(() => {
            result += "All handlers completed\n";
            document.getElementById('eventResult').textContent = result;
        });
}

function testAsyncGenerator() {
    async function runTest() {
        let result = "Processing users:\n";
        
        for await (const user of fetchUsersStream()) {
            result += `- ${JSON.stringify(user)}\n`;
        }
        
        document.getElementById('advancedResult').textContent = result;
    }
    
    runTest();
}

function testAsyncQueue() {
    const queue = new AsyncQueue(2);
    let result = "";
    
    const tasks = [
        () => new Promise(resolve => setTimeout(() => resolve('Task 1'), 1000)),
        () => new Promise(resolve => setTimeout(() => resolve('Task 2'), 500)),
        () => new Promise(resolve => setTimeout(() => resolve('Task 3'), 800)),
        () => new Promise(resolve => setTimeout(() => resolve('Task 4'), 300))
    ];
    
    tasks.forEach((task, index) => {
        queue.add(task).then(result => {
            console.log(`Task ${index + 1} completed:`, result);
        });
    });
    
    document.getElementById('advancedResult').textContent = "Tasks added to queue. Check console for results.";
}

function testPerformance() {
    async function runPerformanceTest() {
        const iterations = 1000;
        let result = "";
        
        // Test sequential
        const sequentialStart = Date.now();
        for (let i = 0; i < iterations; i++) {
            await new Promise(resolve => setTimeout(resolve, 1));
        }
        const sequentialTime = Date.now() - sequentialStart;
        
        // Test parallel
        const parallelStart = Date.now();
        const promises = Array.from({ length: iterations }, () => 
            new Promise(resolve => setTimeout(resolve, 1))
        );
        await Promise.all(promises);
        const parallelTime = Date.now() - parallelStart;
        
        result = `Performance Test Results:\n`;
        result += `Sequential (${iterations} operations): ${sequentialTime}ms\n`;
        result += `Parallel (${iterations} operations): ${parallelTime}ms\n`;
        result += `Speedup: ${(sequentialTime / parallelTime).toFixed(2)}x`;
        
        document.getElementById('performanceResult').textContent = result;
    }
    
    runPerformanceTest();
}

// Initialize console examples
console.log("Async Programming examples loaded. Check the interactive sections above!");
