// ========================================
// ARRAYS & STRINGS - PRACTICE PROBLEMS
// ========================================

console.log("🚀 Arrays & Strings Practice Problems\n");

// ========================================
// EASY LEVEL PROBLEMS
// ========================================

console.log("📝 EASY LEVEL PROBLEMS");
console.log("=".repeat(50));

// 1. Two Sum (Sorted Array)
function twoSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1];
}

// 2. Remove Duplicates from Sorted Array
function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    
    let writeIndex = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[writeIndex] = arr[i];
            writeIndex++;
        }
    }
    return writeIndex;
}

// 3. Reverse Array
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// 4. Find Missing Number (0 to n)
function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// ========================================
// MEDIUM LEVEL PROBLEMS
// ========================================

console.log("\n📝 MEDIUM LEVEL PROBLEMS");
console.log("=".repeat(50));

// 1. Container With Most Water
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const width = right - left;
        const h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

// 2. Three Sum
function threeSum(arr) {
    const result = [];
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        
        let left = i + 1;
        let right = arr.length - 1;
        
        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            
            if (sum === 0) {
                result.push([arr[i], arr[left], arr[right]]);
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

// 3. Maximum Subarray Sum (Kadane's Algorithm)
function maxSubArraySum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}

// 4. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}

// ========================================
// HARD LEVEL PROBLEMS
// ========================================

console.log("\n📝 HARD LEVEL PROBLEMS");
console.log("=".repeat(50));

// 1. Trapping Rain Water
function trap(height) {
    if (height.length === 0) return 0;
    
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    return water;
}

// 2. Sliding Window Maximum
function maxSlidingWindow(nums, k) {
    if (nums.length === 0 || k === 0) return [];
    
    const result = [];
    const deque = [];
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements outside the window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove smaller elements from the back
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

// ========================================
// TESTING ALL PROBLEMS
// ========================================

console.log("\n🧪 TESTING PROBLEMS");
console.log("=".repeat(50));

// Test Easy Problems
console.log("1. Two Sum (Sorted):", twoSumSorted([1, 2, 3, 4, 6], 6));
console.log("2. Remove Duplicates:", removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]));
console.log("3. Reverse Array:", reverseArray([1, 2, 3, 4, 5]));
console.log("4. Missing Number:", findMissingNumber([0, 1, 3, 4, 5]));

// Test Medium Problems
console.log("\n5. Max Area:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("6. Three Sum:", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("7. Max Subarray Sum:", maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log("8. Longest Substring:", lengthOfLongestSubstring("abcabcbb"));

// Test Hard Problems
console.log("\n9. Trapping Rain Water:", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log("10. Sliding Window Max:", maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

console.log("\n✅ All tests completed!");
