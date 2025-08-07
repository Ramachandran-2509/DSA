// ========================================
// DYNAMIC PROGRAMMING IN JAVASCRIPT
// ========================================

console.log("💡 Dynamic Programming Implementation\n");

// ========================================
// MEMOIZATION UTILITY
// ========================================

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// ========================================
// CLASSIC DP PROBLEMS
// ========================================

// 1. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized Fibonacci
const memoizedFibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
});

// Tabulated Fibonacci
function fibonacciTabulation(n) {
    if (n <= 1) return n;
    
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// 2. Climbing Stairs
function climbStairs(n) {
    if (n <= 2) return n;
    
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// 3. Coin Change (Minimum coins needed)
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === Infinity ? -1 : dp[amount];
}

// 4. Longest Common Subsequence (LCS)
function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

// 5. Longest Increasing Subsequence (LIS)
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// 6. 0/1 Knapsack Problem
function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(n + 1).fill().map(() => Array(capacity + 1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

// 7. Edit Distance
function editDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    // Initialize first row and column
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,     // Delete
                    dp[i][j - 1] + 1,     // Insert
                    dp[i - 1][j - 1] + 1  // Replace
                );
            }
        }
    }
    
    return dp[m][n];
}

// 8. Maximum Subarray Sum (Kadane's Algorithm)
function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// 9. House Robber
function houseRobber(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    
    return dp[nums.length - 1];
}

// 10. Unique Paths
function uniquePaths(m, n) {
    const dp = Array(m).fill().map(() => Array(n).fill(1));
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    return dp[m - 1][n - 1];
}

// ========================================
// ADVANCED DP TECHNIQUES
// ========================================

// 1. Memoization with State
function memoizeWithState(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// 2. State Compression DP
function stateCompressionDP(states) {
    const n = states.length;
    const dp = Array(1 << n).fill(Infinity);
    dp[0] = 0;
    
    for (let mask = 0; mask < (1 << n); mask++) {
        for (let i = 0; i < n; i++) {
            if (!(mask & (1 << i))) {
                const newMask = mask | (1 << i);
                dp[newMask] = Math.min(dp[newMask], dp[mask] + states[i]);
            }
        }
    }
    
    return dp[(1 << n) - 1];
}

// 3. Digit DP
function digitDP(n) {
    const digits = n.toString().split('').map(Number);
    const dp = Array(digits.length).fill().map(() => Array(2).fill().map(() => Array(10).fill(-1)));
    
    function solve(pos, tight, lastDigit) {
        if (pos === digits.length) return 1;
        
        if (dp[pos][tight][lastDigit] !== -1) {
            return dp[pos][tight][lastDigit];
        }
        
        let limit = tight ? digits[pos] : 9;
        let ans = 0;
        
        for (let d = 0; d <= limit; d++) {
            if (d !== lastDigit) {
                ans += solve(pos + 1, tight && (d === limit), d);
            }
        }
        
        return dp[pos][tight][lastDigit] = ans;
    }
    
    return solve(0, true, -1);
}

// ========================================
// DP OPTIMIZATION TECHNIQUES
// ========================================

// 1. Space Optimization
function fibonacciOptimized(n) {
    if (n <= 1) return n;
    
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}

// 2. Sliding Window Optimization
function maxSumSubarrayOfSizeK(arr, k) {
    if (arr.length < k) return 0;
    
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    
    let maxSum = sum;
    for (let i = k; i < arr.length; i++) {
        sum = sum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum;
}

// 3. Binary Search with DP
function binarySearchWithDP(arr, target) {
    const dp = new Array(arr.length).fill(1);
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// ========================================
// TESTING
// ========================================

console.log("🧪 Testing Dynamic Programming Problems");
console.log("=".repeat(50));

// Test Fibonacci
console.log("1. Fibonacci (n=10):");
console.log("Recursive:", fibonacci(10));
console.log("Memoized:", memoizedFibonacci(10));
console.log("Tabulated:", fibonacciTabulation(10));
console.log("Optimized:", fibonacciOptimized(10));

// Test Climbing Stairs
console.log("\n2. Climbing Stairs (n=5):", climbStairs(5));

// Test Coin Change
console.log("\n3. Coin Change:");
console.log("Coins [1,2,5], Amount 11:", coinChange([1, 2, 5], 11));
console.log("Coins [2], Amount 3:", coinChange([2], 3));

// Test LCS
console.log("\n4. Longest Common Subsequence:");
console.log("'abcde' and 'ace':", longestCommonSubsequence("abcde", "ace"));

// Test LIS
console.log("\n5. Longest Increasing Subsequence:");
console.log("[10,9,2,5,3,7,101,18]:", lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

// Test Knapsack
console.log("\n6. 0/1 Knapsack:");
const weights = [2, 1, 3, 2];
const values = [12, 10, 20, 15];
const capacity = 5;
console.log("Weights:", weights);
console.log("Values:", values);
console.log("Capacity:", capacity);
console.log("Max Value:", knapsack(weights, values, capacity));

// Test Edit Distance
console.log("\n7. Edit Distance:");
console.log("'horse' to 'ros':", editDistance("horse", "ros"));

// Test Max Subarray
console.log("\n8. Maximum Subarray Sum:");
console.log("[-2,1,-3,4,-1,2,1,-5,4]:", maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Test House Robber
console.log("\n9. House Robber:");
console.log("[2,7,9,3,1]:", houseRobber([2, 7, 9, 3, 1]));

// Test Unique Paths
console.log("\n10. Unique Paths (3x7):", uniquePaths(3, 7));

// Test Advanced Techniques
console.log("\n11. Advanced Techniques:");
console.log("Max Sum Subarray of Size 3 [2,1,5,1,3,2]:", maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3));

console.log("\n✅ All dynamic programming tests completed!");
