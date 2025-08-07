// ========================================
// LINKED LISTS IN JAVASCRIPT
// ========================================

console.log("🔗 Linked Lists Implementation\n");

// ========================================
// NODE CLASS
// ========================================

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// ========================================
// SINGLY LINKED LIST CLASS
// ========================================

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at the end
    append(data) {
        const newNode = new Node(data);
        
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert at the beginning
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert at specific position
    insertAt(data, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.prepend(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        let count = 0;

        while (count < position - 1) {
            current = current.next;
            count++;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // Delete first occurrence of data
    delete(data) {
        if (!this.head) return;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    // Delete at position
    deleteAt(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let count = 0;

        while (count < position - 1) {
            current = current.next;
            count++;
        }

        current.next = current.next.next;
        this.size--;
    }

    // Search for data
    search(data) {
        let current = this.head;
        let position = 0;

        while (current) {
            if (current.data === data) {
                return position;
            }
            current = current.next;
            position++;
        }
        return -1;
    }

    // Get element at position
    getAt(position) {
        if (position < 0 || position >= this.size) {
            return null;
        }

        let current = this.head;
        let count = 0;

        while (count < position) {
            current = current.next;
            count++;
        }

        return current.data;
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    // Check if linked list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get size of linked list
    getSize() {
        return this.size;
    }

    // Print the linked list
    print() {
        let current = this.head;
        let result = [];
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        console.log("Linked List:", result.join(" -> "));
    }

    // Convert to array
    toArray() {
        const result = [];
        let current = this.head;
        
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        
        return result;
    }
}

// ========================================
// ADVANCED LINKED LIST TECHNIQUES
// ========================================

// 1. Detect Cycle (Floyd's Cycle Detection)
function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

// 2. Find Middle Node
function findMiddle(head) {
    if (!head) return null;
    
    let slow = head;
    let fast = head;
    
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// 3. Remove Nth Node From End
function removeNthFromEnd(head, n) {
    if (!head) return null;
    
    let dummy = new Node(0);
    dummy.next = head;
    
    let first = dummy;
    let second = dummy;
    
    // Move first pointer n+1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers until first reaches end
    while (first) {
        first = first.next;
        second = second.next;
    }
    
    second.next = second.next.next;
    return dummy.next;
}

// 4. Merge Two Sorted Lists
function mergeSortedLists(l1, l2) {
    let dummy = new Node(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.data <= l2.data) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 || l2;
    return dummy.next;
}

// ========================================
// TESTING
// ========================================

console.log("🧪 Testing Linked List Operations");
console.log("=".repeat(50));

// Create and test linked list
const list = new LinkedList();

console.log("1. Creating linked list...");
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();

console.log("\n2. Prepending 0...");
list.prepend(0);
list.print();

console.log("\n3. Inserting 2.5 at position 3...");
list.insertAt(2.5, 3);
list.print();

console.log("\n4. Deleting element 2.5...");
list.delete(2.5);
list.print();

console.log("\n5. Searching for element 3...");
console.log("Position of 3:", list.search(3));

console.log("\n6. Getting element at position 2...");
console.log("Element at position 2:", list.getAt(2));

console.log("\n7. Reversing the linked list...");
list.reverse();
list.print();

console.log("\n8. Finding middle node...");
const middle = findMiddle(list.head);
console.log("Middle node data:", middle ? middle.data : "No middle");

console.log("\n9. Size of linked list:", list.getSize());
console.log("Is empty:", list.isEmpty());

console.log("\n10. Converting to array:", list.toArray());

// Test cycle detection
console.log("\n11. Testing cycle detection...");
const cycleList = new LinkedList();
cycleList.append(1);
cycleList.append(2);
cycleList.append(3);
cycleList.append(4);

// Create a cycle (4 -> 2)
let current = cycleList.head;
while (current.next) {
    current = current.next;
}
current.next = cycleList.head.next; // Point last node to second node

console.log("Has cycle:", hasCycle(cycleList.head));

console.log("\n✅ All linked list tests completed!");
