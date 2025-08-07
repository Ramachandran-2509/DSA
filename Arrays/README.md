# Arrays & Strings in JavaScript

## 📚 Overview
Arrays are the most fundamental data structure and are heavily tested in interviews. This section covers essential array operations, patterns, and techniques.

## 🎯 Key Concepts

### 1. **Basic Array Operations**
- Finding min/max elements
- Sum of elements
- Reverse array
- Rotate array

### 2. **Two-Pointer Technique**
- Used for problems involving pairs or subarrays
- Time Complexity: O(n)
- Space Complexity: O(1)

### 3. **Sliding Window**
- For subarray/substring problems
- Maintains a window of elements
- Time Complexity: O(n)

### 4. **Prefix Sum**
- Precompute cumulative sums
- Useful for range sum queries
- Time Complexity: O(n) preprocessing, O(1) query

## 🚀 Common Interview Patterns

### Two-Pointer Problems
- Two Sum (sorted array)
- Remove duplicates
- Container with most water
- Valid palindrome

### Sliding Window Problems
- Maximum sum subarray of size k
- Longest substring without repeating characters
- Minimum window substring

### Prefix Sum Problems
- Range sum queries
- Subarray with given sum
- Equilibrium point

## 📊 Time Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Access by index | O(1) | O(1) |
| Search by value | O(n) | O(1) |
| Insert at end | O(1) | O(1) |
| Insert at beginning | O(n) | O(1) |
| Delete from end | O(1) | O(1) |
| Delete from beginning | O(n) | O(1) |

## 💡 Interview Tips

1. **Always clarify the input format** - Sorted/unsorted, duplicates allowed?
2. **Consider edge cases** - Empty array, single element, all same elements
3. **Think about space optimization** - Can you solve in-place?
4. **Use appropriate techniques**:
   - Two pointers for sorted arrays
   - Sliding window for subarray problems
   - Hash table for frequency counting

## 🎯 Practice Problems

### Easy Level
- Find largest/smallest element
- Reverse array
- Remove duplicates
- Two Sum

### Medium Level
- Three Sum
- Container with most water
- Longest substring without repeating characters
- Maximum subarray sum

### Hard Level
- Trapping rain water
- Sliding window maximum
- Minimum window substring
- Merge k sorted arrays

## 🔧 Implementation Notes

- Use `for...of` for cleaner iteration
- Consider `Array.prototype` methods for readability
- Use destructuring for swapping elements
- Remember array methods: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`

Happy Coding! 🚀
