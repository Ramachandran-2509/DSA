# JavaScript Error Handling

Error handling is a critical aspect of JavaScript development that ensures your applications are robust, reliable, and provide good user experiences. Understanding how to properly handle, create, and debug errors is essential for building production-ready applications.

## 📚 Table of Contents

1. [Error Types](#error-types)
2. [Try-Catch Blocks](#try-catch-blocks)
3. [Custom Errors](#custom-errors)
4. [Error Handling Patterns](#error-handling-patterns)
5. [Global Error Handling](#global-error-handling)
6. [Debugging Tools](#debugging-tools)
7. [Best Practices](#best-practices)
8. [Common Pitfalls](#common-pitfalls)

## 🚨 Error Types

### Built-in Error Types

JavaScript provides several built-in error types that represent different categories of errors:

#### Generic Error
```javascript
const error = new Error("Something went wrong");
console.log(error.name); // "Error"
console.log(error.message); // "Something went wrong"
console.log(error.stack); // Stack trace
```

#### ReferenceError
Thrown when trying to access a variable that doesn't exist:
```javascript
try {
    console.log(undefinedVariable);
} catch (error) {
    console.log(error.name); // "ReferenceError"
    console.log(error.message); // "undefinedVariable is not defined"
}
```

#### TypeError
Thrown when an operation is performed on an incompatible type:
```javascript
try {
    const nullValue = null;
    nullValue.someMethod();
} catch (error) {
    console.log(error.name); // "TypeError"
    console.log(error.message); // "Cannot read property 'someMethod' of null"
}
```

#### RangeError
Thrown when a value is outside the allowed range:
```javascript
try {
    const arr = new Array(-1);
} catch (error) {
    console.log(error.name); // "RangeError"
    console.log(error.message); // "Invalid array length"
}
```

#### SyntaxError
Thrown when there's a syntax error in the code:
```javascript
try {
    eval("const x = ;"); // Invalid syntax
} catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // "Unexpected token ';'"
}
```

#### URIError
Thrown when URI encoding/decoding fails:
```javascript
try {
    decodeURIComponent("%");
} catch (error) {
    console.log(error.name); // "URIError"
    console.log(error.message); // "URI malformed"
}
```

## 🛡️ Try-Catch Blocks

### Basic Try-Catch

The fundamental error handling mechanism in JavaScript:

```javascript
try {
    // Risky code that might throw an error
    const result = riskyOperation();
    console.log("Success:", result);
} catch (error) {
    // Handle the error
    console.error("Error occurred:", error.message);
} finally {
    // Always execute, regardless of success or failure
    console.log("Cleanup completed");
}
```

### Multiple Catch Blocks

Handle different types of errors differently:

```javascript
try {
    const result = riskyOperation();
} catch (error) {
    if (error instanceof TypeError) {
        console.error("Type error:", error.message);
    } else if (error instanceof ReferenceError) {
        console.error("Reference error:", error.message);
    } else if (error instanceof RangeError) {
        console.error("Range error:", error.message);
    } else {
        console.error("Unknown error:", error.message);
    }
}
```

### Async Try-Catch

Handle errors in asynchronous operations:

```javascript
async function asyncOperation() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Async error:", error.message);
        // Re-throw if you want to propagate the error
        throw error;
    }
}
```

### Error Propagation

Errors can be caught and re-thrown to propagate up the call stack:

```javascript
function level1() {
    try {
        level2();
    } catch (error) {
        console.log("Level 1 caught:", error.message);
        // Add context and re-throw
        throw new Error(`Level 1 error: ${error.message}`);
    }
}

function level2() {
    throw new Error("Error from level 2");
}
```

## 🔧 Custom Errors

### Basic Custom Error

Create custom error types for specific use cases:

```javascript
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

// Usage
throw new ValidationError("Invalid email format", "email");
```

### Custom Error with Properties

Add additional properties and methods to your custom errors:

```javascript
class NetworkError extends Error {
    constructor(message, statusCode, url) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
        this.url = url;
        this.timestamp = new Date();
    }
    
    getDetails() {
        return `${this.name}: ${this.message} (${this.statusCode}) at ${this.url}`;
    }
    
    isRetryable() {
        return this.statusCode >= 500 || this.statusCode === 429;
    }
}

// Usage
throw new NetworkError("API failed", 500, "/api/users");
```

### Error Factory

Create a factory for generating consistent errors:

```javascript
class ErrorFactory {
    static createValidationError(field, value) {
        return new ValidationError(
            `Invalid value for ${field}: ${value}`,
            field
        );
    }
    
    static createNetworkError(statusCode, url) {
        return new NetworkError(
            `HTTP ${statusCode} error`,
            statusCode,
            url
        );
    }
    
    static createDatabaseError(operation, table) {
        return new Error(`Database ${operation} failed on table ${table}`);
    }
}

// Usage
throw ErrorFactory.createValidationError("age", -5);
throw ErrorFactory.createNetworkError(404, "/api/users/123");
```

### Error with Stack Trace

Capture detailed stack trace information:

```javascript
class DetailedError extends Error {
    constructor(message, context = {}) {
        super(message);
        this.name = "DetailedError";
        this.context = context;
        this.timestamp = new Date();
        
        // Capture stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DetailedError);
        }
    }
    
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            context: this.context,
            timestamp: this.timestamp,
            stack: this.stack
        };
    }
}
```

## 📋 Error Handling Patterns

### Error Boundary Pattern

Create boundaries that catch and handle errors gracefully:

```javascript
class ErrorBoundary {
    constructor() {
        this.errors = [];
    }
    
    execute(operation) {
        try {
            return operation();
        } catch (error) {
            this.errors.push({
                error: error,
                timestamp: new Date(),
                context: "ErrorBoundary"
            });
            return null;
        }
    }
    
    getErrors() {
        return this.errors;
    }
    
    clearErrors() {
        this.errors = [];
    }
    
    hasErrors() {
        return this.errors.length > 0;
    }
}

// Usage
const boundary = new ErrorBoundary();
const result = boundary.execute(() => riskyOperation());
if (boundary.hasErrors()) {
    console.log("Errors occurred:", boundary.getErrors());
}
```

### Retry Pattern

Automatically retry failed operations:

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
const result = await retryOperation(async () => {
    const response = await fetch('/api/data');
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
}, 3, 1000);
```

### Fallback Pattern

Provide alternative operations when primary operations fail:

```javascript
async function operationWithFallback(primaryOp, fallbackOp) {
    try {
        return await primaryOp();
    } catch (error) {
        console.log("Primary operation failed, using fallback");
        try {
            return await fallbackOp();
        } catch (fallbackError) {
            throw new Error(`Both operations failed: ${error.message}, ${fallbackError.message}`);
        }
    }
}

// Usage
const data = await operationWithFallback(
    async () => fetch('/api/users').then(r => r.json()),
    async () => fetch('/api/users/backup').then(r => r.json())
);
```

### Error Logging Pattern

Centralized error logging and monitoring:

```javascript
class ErrorLogger {
    constructor() {
        this.logs = [];
    }
    
    log(error, context = {}) {
        const logEntry = {
            error: error.message,
            name: error.name,
            stack: error.stack,
            context: context,
            timestamp: new Date()
        };
        
        this.logs.push(logEntry);
        console.error("Error logged:", logEntry);
        
        // Send to external service
        this.sendToExternalService(logEntry);
    }
    
    sendToExternalService(logEntry) {
        // Implementation for external logging service
        fetch('/api/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(logEntry)
        }).catch(err => console.error('Failed to send log:', err));
    }
    
    getLogs() {
        return this.logs;
    }
    
    clearLogs() {
        this.logs = [];
    }
}

// Usage
const logger = new ErrorLogger();
try {
    riskyOperation();
} catch (error) {
    logger.log(error, { operation: 'riskyOperation', userId: 123 });
}
```

## 🌍 Global Error Handling

### Window Error Handler

Catch all unhandled errors globally:

```javascript
window.addEventListener('error', (event) => {
    console.error('Global error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });
    
    // Prevent default browser error handling
    event.preventDefault();
    
    // Send to monitoring service
    sendToMonitoringService({
        type: 'window.error',
        message: event.message,
        filename: event.filename,
        line: event.lineno,
        column: event.colno,
        stack: event.error?.stack
    });
});
```

### Unhandled Promise Rejection

Catch unhandled promise rejections:

```javascript
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', {
        reason: event.reason,
        promise: event.promise
    });
    
    // Prevent default browser handling
    event.preventDefault();
    
    // Send to monitoring service
    sendToMonitoringService({
        type: 'unhandled.rejection',
        reason: event.reason?.message || event.reason,
        stack: event.reason?.stack
    });
});
```

### Console Error Override

Intercept console errors for logging:

```javascript
const originalError = console.error;
console.error = function(...args) {
    // Log to external service
    logToExternalService({
        type: 'console.error',
        message: args.join(' '),
        timestamp: new Date()
    });
    
    // Call original
    originalError.apply(console, args);
};

function logToExternalService(data) {
    // Implementation for external logging
    fetch('/api/logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(err => console.error('Failed to send log:', err));
}
```

### Error Monitoring Service

Comprehensive error monitoring:

```javascript
class ErrorMonitor {
    constructor() {
        this.errors = [];
        this.setupGlobalHandlers();
    }
    
    setupGlobalHandlers() {
        window.addEventListener('error', (event) => {
            this.captureError(event.error, {
                type: 'window.error',
                filename: event.filename,
                lineno: event.lineno
            });
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            this.captureError(event.reason, {
                type: 'unhandled.rejection'
            });
        });
    }
    
    captureError(error, context = {}) {
        const errorData = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            context: context,
            timestamp: new Date(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };
        
        this.errors.push(errorData);
        this.sendToService(errorData);
    }
    
    sendToService(errorData) {
        // Send to monitoring service (e.g., Sentry, LogRocket)
        fetch('/api/errors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(errorData)
        }).catch(err => console.error('Failed to send error:', err));
    }
    
    getErrors() {
        return this.errors;
    }
    
    clearErrors() {
        this.errors = [];
    }
}

// Initialize error monitoring
const errorMonitor = new ErrorMonitor();
```

## 🔍 Debugging Tools

### Console Debugging Methods

```javascript
// Basic logging
console.log("Basic log");
console.error("Error message");
console.warn("Warning message");
console.info("Info message");
console.debug("Debug message");

// Object inspection
console.table([
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
]);

// Grouping
console.group("User Data");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd();

// Timing
console.time("operation");
// ... some operation
console.timeEnd("operation");

// Stack trace
console.trace("Function call trace");
```

### Stack Trace Analysis

```javascript
function getStackTrace() {
    const stack = new Error().stack;
    const lines = stack.split('\n');
    
    // Remove first two lines (Error constructor and getStackTrace)
    return lines.slice(2).map(line => {
        // Parse stack trace line
        const match = line.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
        if (match) {
            return {
                function: match[1],
                file: match[2],
                line: parseInt(match[3]),
                column: parseInt(match[4])
            };
        }
        return { raw: line.trim() };
    });
}

// Usage
console.log(getStackTrace());
```

### Error Inspector

```javascript
class ErrorInspector {
    static inspect(error) {
        return {
            name: error.name,
            message: error.message,
            stack: error.stack,
            constructor: error.constructor.name,
            properties: Object.getOwnPropertyNames(error),
            prototype: Object.getPrototypeOf(error).constructor.name
        };
    }
    
    static getErrorChain(error) {
        const chain = [];
        let current = error;
        
        while (current) {
            chain.push({
                name: current.name,
                message: current.message
            });
            current = current.cause;
        }
        
        return chain;
    }
    
    static formatStack(error) {
        if (!error.stack) return "No stack trace available";
        
        return error.stack
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.startsWith('at '))
            .map(line => line.replace('at ', ''));
    }
}

// Usage
const inspection = ErrorInspector.inspect(new Error("Test error"));
console.log(inspection);
```

### Performance Monitoring

```javascript
class PerformanceMonitor {
    constructor() {
        this.metrics = new Map();
    }
    
    startTimer(name) {
        this.metrics.set(name, {
            start: performance.now(),
            end: null,
            duration: null
        });
    }
    
    endTimer(name) {
        const metric = this.metrics.get(name);
        if (metric) {
            metric.end = performance.now();
            metric.duration = metric.end - metric.start;
        }
    }
    
    getMetrics() {
        return Object.fromEntries(this.metrics);
    }
    
    logMetrics() {
        console.table(Array.from(this.metrics.entries()).map(([name, metric]) => ({
            name,
            duration: metric.duration ? `${metric.duration.toFixed(2)}ms` : 'Running'
        })));
    }
}

// Usage
const monitor = new PerformanceMonitor();
monitor.startTimer('apiCall');
// ... API call
monitor.endTimer('apiCall');
monitor.logMetrics();
```

## ✅ Best Practices

### 1. Always Handle Errors

```javascript
// ❌ Don't ignore errors
function riskyFunction() {
    // This might throw an error
    return someOperation();
}

// ✅ Always handle potential errors
function safeFunction() {
    try {
        return someOperation();
    } catch (error) {
        console.error("Operation failed:", error.message);
        return null; // Provide fallback
    }
}
```

### 2. Use Specific Error Types

```javascript
// ❌ Generic error
throw new Error("Something went wrong");

// ✅ Specific error
throw new ValidationError("Invalid email format", "email");
```

### 3. Provide Meaningful Error Messages

```javascript
// ❌ Vague error message
throw new Error("Error");

// ✅ Descriptive error message
throw new Error("Failed to validate user email: invalid format");
```

### 4. Don't Swallow Errors

```javascript
// ❌ Swallowing errors
try {
    riskyOperation();
} catch (error) {
    // Error is ignored
}

// ✅ Log or handle errors appropriately
try {
    riskyOperation();
} catch (error) {
    console.error("Operation failed:", error);
    // Or re-throw if appropriate
    throw error;
}
```

### 5. Use Error Boundaries

```javascript
// ✅ Wrap risky operations in error boundaries
const boundary = new ErrorBoundary();
const result = boundary.execute(() => riskyOperation());
if (boundary.hasErrors()) {
    // Handle errors gracefully
    showUserFriendlyError();
}
```

### 6. Implement Proper Logging

```javascript
// ✅ Comprehensive error logging
try {
    riskyOperation();
} catch (error) {
    logger.log(error, {
        operation: 'riskyOperation',
        userId: currentUser.id,
        timestamp: new Date()
    });
    
    // Show user-friendly message
    showErrorMessage("Something went wrong. Please try again.");
}
```

## ❌ Common Pitfalls

### 1. Catching Errors Too Early

```javascript
// ❌ Catching too early
function processData(data) {
    try {
        const result = data.map(item => item.process());
        return result;
    } catch (error) {
        // This catches errors from the map operation
        // but might mask important errors
        return [];
    }
}

// ✅ Let errors bubble up to appropriate level
function processData(data) {
    return data.map(item => item.process());
}

// Handle at the appropriate level
try {
    const result = processData(data);
} catch (error) {
    // Handle at the right level
    console.error("Data processing failed:", error);
}
```

### 2. Not Checking Error Types

```javascript
// ❌ Generic error handling
try {
    someOperation();
} catch (error) {
    console.error("Error:", error.message);
}

// ✅ Check error types
try {
    someOperation();
} catch (error) {
    if (error instanceof NetworkError) {
        // Handle network errors
        retryOperation();
    } else if (error instanceof ValidationError) {
        // Handle validation errors
        showValidationMessage(error.field);
    } else {
        // Handle unknown errors
        console.error("Unknown error:", error);
    }
}
```

### 3. Forgetting to Clean Up

```javascript
// ❌ No cleanup
try {
    const connection = openDatabaseConnection();
    const result = connection.query("SELECT * FROM users");
    return result;
} catch (error) {
    console.error("Query failed:", error);
    // Connection is never closed!
}

// ✅ Always clean up
let connection;
try {
    connection = openDatabaseConnection();
    const result = connection.query("SELECT * FROM users");
    return result;
} catch (error) {
    console.error("Query failed:", error);
    throw error;
} finally {
    if (connection) {
        connection.close();
    }
}
```

### 4. Not Handling Async Errors

```javascript
// ❌ Unhandled async errors
async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}

// ✅ Handle async errors properly
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
    }
}
```

## 🎯 Key Takeaways

1. **Always handle errors appropriately** - Don't let them crash your application
2. **Use specific error types** - Create custom errors for different scenarios
3. **Provide meaningful error messages** - Help with debugging and user experience
4. **Implement proper logging** - Track errors for monitoring and debugging
5. **Use error boundaries** - Isolate errors and prevent cascading failures
6. **Handle async errors** - Use try-catch with async/await or .catch() with promises
7. **Clean up resources** - Use finally blocks to ensure cleanup
8. **Monitor errors globally** - Set up global error handlers for production
9. **Test error scenarios** - Ensure your error handling works correctly
10. **Document error handling** - Make it clear how errors are handled in your codebase

Error handling is not just about catching errors - it's about creating robust, reliable applications that provide good user experiences even when things go wrong.
