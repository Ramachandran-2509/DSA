// JavaScript Error Handling - Interactive Examples

// Global error log
let errorLog = [];
let debugLog = [];

function addToErrorLog(entry) {
    errorLog.push(entry);
    updateErrorLogDisplay();
}

function updateErrorLogDisplay() {
    const logElement = document.getElementById('errorLog');
    if (logElement) {
        logElement.innerHTML = errorLog.map(entry => 
            `<div class="error-entry ${entry.type}">[${entry.timestamp.toLocaleTimeString()}] ${entry.message}</div>`
        ).join('');
    }
}

function addToDebugLog(message) {
    debugLog.push({ message: message, timestamp: new Date() });
    updateDebugLogDisplay();
}

function updateDebugLogDisplay() {
    const debugElement = document.getElementById('debugResult');
    if (debugElement) {
        debugElement.textContent = debugLog.map(entry => 
            `[${entry.timestamp.toLocaleTimeString()}] ${entry.message}`
        ).join('\n');
    }
}

// Error Types
function testErrorType() {
    const errorType = document.getElementById('errorTypeSelect').value;
    let error;
    
    try {
        switch (errorType) {
            case 'Error':
                throw new Error('Generic error test');
            case 'ReferenceError':
                console.log(undefinedVariable);
                break;
            case 'TypeError':
                const nullValue = null;
                nullValue.someMethod();
                break;
            case 'RangeError':
                new Array(-1);
                break;
            case 'SyntaxError':
                eval('const x = ;');
                break;
            case 'URIError':
                decodeURIComponent('%');
                break;
        }
    } catch (e) {
        error = e;
    }
    
    const result = `Error Type: ${error.name}\nMessage: ${error.message}`;
    document.getElementById('errorTypeResult').textContent = result;
    addToErrorLog({ type: 'error', message: `${error.name}: ${error.message}`, timestamp: new Date() });
}

// Try-Catch Tests
function riskyOperation() {
    if (Math.random() > 0.5) {
        throw new Error("Operation failed");
    }
    return "Operation successful";
}

function testBasicTryCatch() {
    let result = "";
    
    try {
        const riskyResult = riskyOperation();
        result = `Success: ${riskyResult}`;
    } catch (error) {
        result = `Error caught: ${error.message}`;
    } finally {
        result += "\nFinally block executed";
    }
    
    document.getElementById('tryCatchResult').textContent = result;
    addToErrorLog({ type: 'info', message: 'Basic try-catch test completed', timestamp: new Date() });
}

function testMultipleCatch() {
    let result = "";
    
    try {
        processData("invalid");
    } catch (error) {
        if (error instanceof TypeError) {
            result = `Type error caught: ${error.message}`;
        } else if (error instanceof ReferenceError) {
            result = `Reference error caught: ${error.message}`;
        } else {
            result = `Unknown error caught: ${error.message}`;
        }
    }
    
    document.getElementById('tryCatchResult').textContent = result;
    addToErrorLog({ type: 'info', message: 'Multiple catch test completed', timestamp: new Date() });
}

function processData(data) {
    if (typeof data !== 'object') {
        throw new TypeError("Data must be an object");
    }
    if (!data.id) {
        throw new ReferenceError("Data must have an id");
    }
    return data.id;
}

function testAsyncTryCatch() {
    async function runTest() {
        let result = "";
        
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        reject(new Error("Async operation failed"));
                    } else {
                        resolve("Async operation successful");
                    }
                }, 1000);
            });
            result = "Async operation completed successfully";
        } catch (error) {
            result = `Async error caught: ${error.message}`;
        }
        
        document.getElementById('tryCatchResult').textContent = result;
        addToErrorLog({ type: 'info', message: 'Async try-catch test completed', timestamp: new Date() });
    }
    
    runTest();
}

// Custom Errors
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode, url) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
        this.url = url;
        this.timestamp = new Date();
    }
}

class ErrorFactory {
    static createValidationError(field, value) {
        return new ValidationError(`Invalid value for ${field}: ${value}`, field);
    }
    
    static createNetworkError(statusCode, url) {
        return new NetworkError(`HTTP ${statusCode} error`, statusCode, url);
    }
}

function testCustomError() {
    try {
        throw new ValidationError("Invalid email format", "email");
    } catch (error) {
        const result = `Custom Error: ${error.name}\nMessage: ${error.message}\nField: ${error.field}`;
        document.getElementById('customErrorResult').textContent = result;
        addToErrorLog({ type: 'error', message: `${error.name}: ${error.message}`, timestamp: new Date() });
    }
}

function testErrorFactory() {
    try {
        throw ErrorFactory.createValidationError("age", -5);
    } catch (error) {
        const result = `Error Factory: ${error.name}\nMessage: ${error.message}\nField: ${error.field}`;
        document.getElementById('customErrorResult').textContent = result;
        addToErrorLog({ type: 'error', message: `${error.name}: ${error.message}`, timestamp: new Date() });
    }
}

// Error Patterns
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
}

async function retryOperation(operation, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            if (attempt === maxRetries) {
                throw error;
            }
            console.log(`Attempt ${attempt} failed, retrying...`);
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
}

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

function testErrorBoundary() {
    const boundary = new ErrorBoundary();
    
    const result1 = boundary.execute(() => "Success operation");
    const result2 = boundary.execute(() => {
        throw new Error("Boundary test error");
    });
    
    const errors = boundary.getErrors();
    const result = `Boundary Test:\nSuccess: ${result1}\nFailed: ${result2}\nErrors captured: ${errors.length}`;
    
    document.getElementById('errorPatternResult').textContent = result;
    addToErrorLog({ type: 'info', message: 'Error boundary test completed', timestamp: new Date() });
}

function testRetryPattern() {
    async function runTest() {
        let attemptCount = 0;
        
        const operation = async () => {
            attemptCount++;
            if (attemptCount < 3) {
                throw new Error(`Attempt ${attemptCount} failed`);
            }
            return "Operation succeeded";
        };
        
        try {
            const result = await retryOperation(operation, 3, 500);
            document.getElementById('errorPatternResult').textContent = `Retry successful: ${result}`;
        } catch (error) {
            document.getElementById('errorPatternResult').textContent = `Retry failed: ${error.message}`;
        }
        
        addToErrorLog({ type: 'info', message: 'Retry pattern test completed', timestamp: new Date() });
    }
    
    runTest();
}

function testFallbackPattern() {
    async function runTest() {
        const primaryOp = async () => {
            throw new Error("Primary operation failed");
        };
        
        const fallbackOp = async () => {
            return "Fallback operation succeeded";
        };
        
        try {
            const result = await operationWithFallback(primaryOp, fallbackOp);
            document.getElementById('errorPatternResult').textContent = `Fallback result: ${result}`;
        } catch (error) {
            document.getElementById('errorPatternResult').textContent = `Both failed: ${error.message}`;
        }
        
        addToErrorLog({ type: 'info', message: 'Fallback pattern test completed', timestamp: new Date() });
    }
    
    runTest();
}

// Global Error Handling
window.addEventListener('error', (event) => {
    console.error('Global error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        error: event.error
    });
    event.preventDefault();
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', {
        reason: event.reason,
        promise: event.promise
    });
    event.preventDefault();
});

function testGlobalErrorHandler() {
    setTimeout(() => {
        throw new Error("Global error handler test");
    }, 100);
    
    document.getElementById('globalErrorResult').textContent = "Global error triggered. Check console for details.";
    addToErrorLog({ type: 'warning', message: 'Global error handler test triggered', timestamp: new Date() });
}

function testUnhandledRejection() {
    setTimeout(() => {
        Promise.reject(new Error("Unhandled rejection test"));
    }, 100);
    
    document.getElementById('globalErrorResult').textContent = "Unhandled rejection triggered. Check console for details.";
    addToErrorLog({ type: 'warning', message: 'Unhandled rejection test triggered', timestamp: new Date() });
}

// Debugging Tools
function testConsoleDebugging() {
    addToDebugLog("Testing console debugging methods...");
    
    console.group("Debug Test Group");
    console.log("Test log message");
    console.warn("Test warning message");
    console.error("Test error message");
    console.groupEnd();
    
    console.time("debugTest");
    setTimeout(() => {
        console.timeEnd("debugTest");
        addToDebugLog("Console debugging test completed");
    }, 100);
}

function testStackTraceAnalysis() {
    addToDebugLog("Testing stack trace analysis...");
    
    const stack = new Error().stack;
    const lines = stack.split('\n');
    const stackTrace = lines.slice(2).map(line => {
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
    
    console.log("Stack trace:", stackTrace);
    addToDebugLog(`Stack trace analysis completed. Found ${stackTrace.length} stack frames.`);
}

function testErrorInspector() {
    addToDebugLog("Testing error inspector...");
    
    const testError = new ValidationError("Test validation error", "testField");
    const inspection = {
        name: testError.name,
        message: testError.message,
        stack: testError.stack,
        constructor: testError.constructor.name,
        properties: Object.getOwnPropertyNames(testError)
    };
    
    console.log("Error inspection:", inspection);
    addToDebugLog("Error inspector test completed");
}

function clearDebugLog() {
    debugLog = [];
    updateDebugLogDisplay();
    addToDebugLog("Debug log cleared");
}

// Error Simulation
function simulateError() {
    const message = document.getElementById('errorMessage').value || "Simulated error";
    const errorType = document.getElementById('errorType').value;
    const delay = parseInt(document.getElementById('errorDelay').value) || 1000;
    
    setTimeout(() => {
        try {
            switch (errorType) {
                case 'Error':
                    throw new Error(message);
                case 'ReferenceError':
                    console.log(undefinedVariable);
                    break;
                case 'TypeError':
                    const nullValue = null;
                    nullValue.someMethod();
                    break;
                case 'RangeError':
                    new Array(-1);
                    break;
                case 'SyntaxError':
                    eval('const x = ;');
                    break;
                case 'URIError':
                    decodeURIComponent('%');
                    break;
            }
        } catch (error) {
            document.getElementById('simulationResult').textContent = 
                `Simulated ${errorType}: ${error.message}`;
            addToErrorLog({ type: 'error', message: `Simulated ${errorType}: ${error.message}`, timestamp: new Date() });
        }
    }, delay);
    
    document.getElementById('simulationResult').textContent = `Error simulation scheduled for ${delay}ms from now...`;
}

function simulateAsyncError() {
    const message = document.getElementById('errorMessage').value || "Simulated async error";
    const delay = parseInt(document.getElementById('errorDelay').value) || 1000;
    
    setTimeout(async () => {
        try {
            await new Promise((resolve, reject) => {
                reject(new Error(message));
            });
        } catch (error) {
            document.getElementById('simulationResult').textContent = 
                `Simulated Async Error: ${error.message}`;
            addToErrorLog({ type: 'error', message: `Simulated Async Error: ${error.message}`, timestamp: new Date() });
        }
    }, delay);
    
    document.getElementById('simulationResult').textContent = `Async error simulation scheduled for ${delay}ms from now...`;
}

function simulateUnhandledRejection() {
    const message = document.getElementById('errorMessage').value || "Simulated unhandled rejection";
    const delay = parseInt(document.getElementById('errorDelay').value) || 1000;
    
    setTimeout(() => {
        Promise.reject(new Error(message));
        document.getElementById('simulationResult').textContent = 
            `Unhandled rejection simulated: ${message}`;
        addToErrorLog({ type: 'warning', message: `Unhandled rejection simulated: ${message}`, timestamp: new Date() });
    }, delay);
    
    document.getElementById('simulationResult').textContent = `Unhandled rejection simulation scheduled for ${delay}ms from now...`;
}

// Error Log Management
function clearErrorLog() {
    errorLog = [];
    updateErrorLogDisplay();
    addToErrorLog({ type: 'info', message: 'Error log cleared', timestamp: new Date() });
}

function exportErrorLog() {
    const logData = JSON.stringify(errorLog, null, 2);
    const blob = new Blob([logData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `error-log-${new Date().toISOString().slice(0, 19)}.json`;
    a.click();
    
    URL.revokeObjectURL(url);
    addToErrorLog({ type: 'info', message: 'Error log exported', timestamp: new Date() });
}

function showErrorStats() {
    const stats = {
        total: errorLog.length,
        errors: errorLog.filter(entry => entry.type === 'error').length,
        warnings: errorLog.filter(entry => entry.type === 'warning').length,
        info: errorLog.filter(entry => entry.type === 'info').length
    };
    
    const result = `Error Statistics:\n` +
        `Total entries: ${stats.total}\n` +
        `Errors: ${stats.errors}\n` +
        `Warnings: ${stats.warnings}\n` +
        `Info: ${stats.info}`;
    
    document.getElementById('errorLog').innerHTML += 
        `<div class="error-entry info">[${new Date().toLocaleTimeString()}] ${result.replace(/\n/g, '<br>')}</div>`;
}

// Initialize
console.log("Error Handling examples loaded. Check the interactive sections above!");
addToErrorLog({ type: 'info', message: 'Error handling system initialized', timestamp: new Date() });
