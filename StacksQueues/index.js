// ========================================
// STACKS & QUEUES IN JAVASCRIPT
// ========================================

console.log("📚 Stacks & Queues Implementation\n");

// ========================================
// STACK IMPLEMENTATION
// ========================================

class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    // Push element to top
    push(element) {
        this.items.push(element);
        this.size++;
    }

    // Pop element from top
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        this.size--;
        return this.items.pop();
    }

    // Peek at top element
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Check if stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get stack size
    getSize() {
        return this.size;
    }

    // Clear stack
    clear() {
        this.items = [];
        this.size = 0;
    }

    // Print stack
    print() {
        console.log("Stack:", this.items);
    }
}

// ========================================
// QUEUE IMPLEMENTATION
// ========================================

class Queue {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    // Enqueue element to back
    enqueue(element) {
        this.items.push(element);
        this.size++;
    }

    // Dequeue element from front
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        this.size--;
        return this.items.shift();
    }

    // Peek at front element
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get queue size
    getSize() {
        return this.size;
    }

    // Clear queue
    clear() {
        this.items = [];
        this.size = 0;
    }

    // Print queue
    print() {
        console.log("Queue:", this.items);
    }
}

// ========================================
// CIRCULAR QUEUE IMPLEMENTATION
// ========================================

class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    // Enqueue element
    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full");
            return false;
        }

        if (this.isEmpty()) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.size++;
        return true;
    }

    // Dequeue element
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }

        const element = this.items[this.front];
        
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }
        
        this.size--;
        return element;
    }

    // Peek at front element
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[this.front];
    }

    // Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Check if queue is full
    isFull() {
        return this.size === this.capacity;
    }

    // Get queue size
    getSize() {
        return this.size;
    }

    // Print queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = [];
        let i = this.front;
        let count = 0;

        while (count < this.size) {
            result.push(this.items[i]);
            i = (i + 1) % this.capacity;
            count++;
        }

        console.log("Circular Queue:", result);
    }
}

// ========================================
// PRIORITY QUEUE IMPLEMENTATION
// ========================================

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Enqueue with priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }

    // Dequeue highest priority element
    dequeue() {
        if (this.isEmpty()) {
            console.log("Priority queue is empty");
            return null;
        }
        return this.items.shift().element;
    }

    // Peek at highest priority element
    peek() {
        if (this.isEmpty()) {
            console.log("Priority queue is empty");
            return null;
        }
        return this.items[0].element;
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get queue size
    getSize() {
        return this.items.length;
    }

    // Print queue
    print() {
        console.log("Priority Queue:", this.items.map(item => `${item.element}(${item.priority})`));
    }
}

// ========================================
// ADVANCED STACK TECHNIQUES
// ========================================

// 1. Monotonic Stack (Decreasing)
class MonotonicStack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        while (this.stack.length > 0 && this.stack[this.stack.length - 1] < element) {
            this.stack.pop();
        }
        this.stack.push(element);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    print() {
        console.log("Monotonic Stack:", this.stack);
    }
}

// 2. Stack with Min/Max tracking
class MinMaxStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.maxStack = [];
    }

    push(element) {
        this.stack.push(element);

        // Update min stack
        if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(element);
        }

        // Update max stack
        if (this.maxStack.length === 0 || element >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(element);
        }
    }

    pop() {
        if (this.stack.length === 0) return null;

        const element = this.stack.pop();

        if (element === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        if (element === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }

        return element;
    }

    getMin() {
        return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : null;
    }

    getMax() {
        return this.maxStack.length > 0 ? this.maxStack[this.maxStack.length - 1] : null;
    }

    peek() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
    }

    print() {
        console.log("Stack:", this.stack);
        console.log("Min:", this.getMin());
        console.log("Max:", this.getMax());
    }
}

// ========================================
// STACK & QUEUE PROBLEMS
// ========================================

// 1. Valid Parentheses
function isValidParentheses(s) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// 2. Next Greater Element
function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }

    return result;
}

// 3. Implement Queue using Stacks
class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// ========================================
// TESTING
// ========================================

console.log("🧪 Testing Stack & Queue Operations");
console.log("=".repeat(50));

// Test Stack
console.log("1. Testing Stack:");
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log("Peek:", stack.peek());
console.log("Pop:", stack.pop());
stack.print();

// Test Queue
console.log("\n2. Testing Queue:");
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log("Peek:", queue.peek());
console.log("Dequeue:", queue.dequeue());
queue.print();

// Test Circular Queue
console.log("\n3. Testing Circular Queue:");
const circularQueue = new CircularQueue(3);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.print();
console.log("Dequeue:", circularQueue.dequeue());
circularQueue.enqueue(4);
circularQueue.print();

// Test Priority Queue
console.log("\n4. Testing Priority Queue:");
const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);
priorityQueue.print();
console.log("Dequeue:", priorityQueue.dequeue());
priorityQueue.print();

// Test Monotonic Stack
console.log("\n5. Testing Monotonic Stack:");
const monoStack = new MonotonicStack();
monoStack.push(3);
monoStack.push(1);
monoStack.push(4);
monoStack.push(2);
monoStack.print();

// Test MinMax Stack
console.log("\n6. Testing MinMax Stack:");
const minMaxStack = new MinMaxStack();
minMaxStack.push(3);
minMaxStack.push(1);
minMaxStack.push(4);
minMaxStack.push(2);
minMaxStack.print();

// Test Problems
console.log("\n7. Testing Problems:");
console.log("Valid Parentheses '(){}[]':", isValidParentheses("(){}[]"));
console.log("Valid Parentheses '([)]':", isValidParentheses("([)]"));
console.log("Next Greater Element [4, 5, 2, 10]:", nextGreaterElement([4, 5, 2, 10]));

// Test Queue using Stacks
console.log("\n8. Testing Queue using Stacks:");
const queueUsingStacks = new QueueUsingStacks();
queueUsingStacks.enqueue(1);
queueUsingStacks.enqueue(2);
queueUsingStacks.enqueue(3);
console.log("Dequeue:", queueUsingStacks.dequeue());
console.log("Peek:", queueUsingStacks.peek());

console.log("\n✅ All stack & queue tests completed!");
