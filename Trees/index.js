// ========================================
// TREES IN JAVASCRIPT
// ========================================

console.log("🌳 Trees Implementation\n");

// ========================================
// TREE NODE CLASS
// ========================================

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// ========================================
// BINARY TREE CLASS
// ========================================

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a node
    insert(data) {
        if (!this.root) {
            this.root = new TreeNode(data);
            return;
        }

        const queue = [this.root];
        while (queue.length > 0) {
            const current = queue.shift();
            
            if (!current.left) {
                current.left = new TreeNode(data);
                return;
            }
            if (!current.right) {
                current.right = new TreeNode(data);
                return;
            }
            
            queue.push(current.left);
            queue.push(current.right);
        }
    }

    // Level Order Traversal (BFS)
    levelOrderTraversal() {
        if (!this.root) return [];
        
        const result = [];
        const queue = [this.root];
        
        while (queue.length > 0) {
            const levelSize = queue.length;
            const currentLevel = [];
            
            for (let i = 0; i < levelSize; i++) {
                const current = queue.shift();
                currentLevel.push(current.data);
                
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
            
            result.push(currentLevel);
        }
        
        return result;
    }

    // Inorder Traversal (DFS)
    inorderTraversal(node = this.root, result = []) {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }

    // Preorder Traversal (DFS)
    preorderTraversal(node = this.root, result = []) {
        if (node) {
            result.push(node.data);
            this.preorderTraversal(node.left, result);
            this.preorderTraversal(node.right, result);
        }
        return result;
    }

    // Postorder Traversal (DFS)
    postorderTraversal(node = this.root, result = []) {
        if (node) {
            this.postorderTraversal(node.left, result);
            this.postorderTraversal(node.right, result);
            result.push(node.data);
        }
        return result;
    }

    // Get height of tree
    getHeight(node = this.root) {
        if (!node) return 0;
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Get size of tree
    getSize(node = this.root) {
        if (!node) return 0;
        return this.getSize(node.left) + this.getSize(node.right) + 1;
    }

    // Check if tree is balanced
    isBalanced(node = this.root) {
        if (!node) return true;
        
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        
        return Math.abs(leftHeight - rightHeight) <= 1 && 
               this.isBalanced(node.left) && 
               this.isBalanced(node.right);
    }

    // Print tree (simple level order)
    print() {
        const levels = this.levelOrderTraversal();
        console.log("Tree Structure:");
        levels.forEach((level, index) => {
            console.log(`Level ${index}:`, level);
        });
    }
}

// ========================================
// BINARY SEARCH TREE CLASS
// ========================================

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a node
    insert(data) {
        this.root = this.insertNode(this.root, data);
    }

    insertNode(node, data) {
        if (!node) {
            return new TreeNode(data);
        }

        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        }

        return node;
    }

    // Search for a node
    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (!node || node.data === data) {
            return node;
        }

        if (data < node.data) {
            return this.searchNode(node.left, data);
        }

        return this.searchNode(node.right, data);
    }

    // Find minimum value
    findMin(node = this.root) {
        if (!node) return null;
        
        while (node.left) {
            node = node.left;
        }
        return node;
    }

    // Find maximum value
    findMax(node = this.root) {
        if (!node) return null;
        
        while (node.right) {
            node = node.right;
        }
        return node;
    }

    // Delete a node
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(node, data) {
        if (!node) return null;

        if (data < node.data) {
            node.left = this.deleteNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.deleteNode(node.right, data);
        } else {
            // Node with only one child or no child
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Node with two children
            const temp = this.findMin(node.right);
            node.data = temp.data;
            node.right = this.deleteNode(node.right, temp.data);
        }

        return node;
    }

    // Inorder traversal (gives sorted order)
    inorderTraversal(node = this.root, result = []) {
        if (node) {
            this.inorderTraversal(node.left, result);
            result.push(node.data);
            this.inorderTraversal(node.right, result);
        }
        return result;
    }

    // Check if BST is valid
    isValidBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;

        if (node.data <= min || node.data >= max) return false;

        return this.isValidBST(node.left, min, node.data) && 
               this.isValidBST(node.right, node.data, max);
    }

    // Get kth smallest element
    kthSmallest(k) {
        const result = [];
        this.inorderTraversal(this.root, result);
        return result[k - 1] || null;
    }

    // Print BST
    print() {
        console.log("BST Inorder Traversal (sorted):", this.inorderTraversal());
    }
}

// ========================================
// ADVANCED TREE TECHNIQUES
// ========================================

// 1. Lowest Common Ancestor (LCA)
function findLCA(root, p, q) {
    if (!root || root.data === p || root.data === q) {
        return root;
    }

    const left = findLCA(root.left, p, q);
    const right = findLCA(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left || right;
}

// 2. Path Sum
function hasPathSum(root, targetSum) {
    if (!root) return false;
    
    if (!root.left && !root.right) {
        return targetSum === root.data;
    }
    
    return hasPathSum(root.left, targetSum - root.data) || 
           hasPathSum(root.right, targetSum - root.data);
}

// 3. Serialize and Deserialize Binary Tree
function serialize(root) {
    if (!root) return 'null';
    
    return root.data + ',' + serialize(root.left) + ',' + serialize(root.right);
}

function deserialize(data) {
    const values = data.split(',');
    let index = 0;
    
    function buildTree() {
        if (index >= values.length || values[index] === 'null') {
            index++;
            return null;
        }
        
        const node = new TreeNode(parseInt(values[index++]));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    
    return buildTree();
}

// 4. Vertical Order Traversal
function verticalOrderTraversal(root) {
    if (!root) return [];
    
    const map = new Map();
    const queue = [{ node: root, col: 0 }];
    
    while (queue.length > 0) {
        const { node, col } = queue.shift();
        
        if (!map.has(col)) {
            map.set(col, []);
        }
        map.get(col).push(node.data);
        
        if (node.left) {
            queue.push({ node: node.left, col: col - 1 });
        }
        if (node.right) {
            queue.push({ node: node.right, col: col + 1 });
        }
    }
    
    const result = [];
    const sortedCols = Array.from(map.keys()).sort((a, b) => a - b);
    
    for (const col of sortedCols) {
        result.push(map.get(col));
    }
    
    return result;
}

// 5. Diameter of Binary Tree
function diameterOfBinaryTree(root) {
    let maxDiameter = 0;
    
    function height(node) {
        if (!node) return 0;
        
        const leftHeight = height(node.left);
        const rightHeight = height(node.right);
        
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    height(root);
    return maxDiameter;
}

// ========================================
// TREE PROBLEMS
// ========================================

// 1. Maximum Depth of Binary Tree
function maxDepth(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// 2. Symmetric Tree
function isSymmetric(root) {
    if (!root) return true;
    
    function isMirror(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;
        
        return left.data === right.data && 
               isMirror(left.left, right.right) && 
               isMirror(left.right, right.left);
    }
    
    return isMirror(root.left, root.right);
}

// 3. Binary Tree Level Order Traversal II
function levelOrderBottom(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();
            currentLevel.push(current.data);
            
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        
        result.unshift(currentLevel);
    }
    
    return result;
}

// ========================================
// TESTING
// ========================================

console.log("🧪 Testing Tree Operations");
console.log("=".repeat(50));

// Test Binary Tree
console.log("1. Testing Binary Tree:");
const binaryTree = new BinaryTree();
binaryTree.insert(1);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(4);
binaryTree.insert(5);
binaryTree.insert(6);
binaryTree.insert(7);

binaryTree.print();
console.log("Inorder:", binaryTree.inorderTraversal());
console.log("Preorder:", binaryTree.preorderTraversal());
console.log("Postorder:", binaryTree.postorderTraversal());
console.log("Height:", binaryTree.getHeight());
console.log("Size:", binaryTree.getSize());
console.log("Is Balanced:", binaryTree.isBalanced());

// Test Binary Search Tree
console.log("\n2. Testing Binary Search Tree:");
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);

bst.print();
console.log("Search for 4:", bst.search(4) ? "Found" : "Not found");
console.log("Search for 9:", bst.search(9) ? "Found" : "Not found");
console.log("Min:", bst.findMin().data);
console.log("Max:", bst.findMax().data);
console.log("Is Valid BST:", bst.isValidBST());
console.log("3rd smallest:", bst.kthSmallest(3));

// Test Advanced Techniques
console.log("\n3. Testing Advanced Techniques:");
console.log("LCA of 1 and 4:", findLCA(bst.root, 1, 4).data);
console.log("Has path sum 9:", hasPathSum(bst.root, 9));
console.log("Has path sum 20:", hasPathSum(bst.root, 20));

// Test Serialization
console.log("\n4. Testing Serialization:");
const serialized = serialize(bst.root);
console.log("Serialized:", serialized);
const deserialized = deserialize(serialized);
console.log("Deserialized inorder:", new BinarySearchTree().inorderTraversal(deserialized));

// Test Problems
console.log("\n5. Testing Problems:");
console.log("Max Depth:", maxDepth(bst.root));
console.log("Is Symmetric:", isSymmetric(bst.root));

// Create symmetric tree for testing
const symmetricTree = new BinaryTree();
symmetricTree.insert(1);
symmetricTree.insert(2);
symmetricTree.insert(2);
symmetricTree.insert(3);
symmetricTree.insert(4);
symmetricTree.insert(4);
symmetricTree.insert(3);
console.log("Is Symmetric (symmetric tree):", isSymmetric(symmetricTree.root));

console.log("\n✅ All tree tests completed!");
