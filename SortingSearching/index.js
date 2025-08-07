// ========================================
// SORTING & SEARCHING IN JAVASCRIPT
// ========================================

console.log("🔍 Sorting & Searching Implementation\n");

// ========================================
// SORTING ALGORITHMS
// ========================================

// 1. Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Optimization
    }
    
    return arr;
}

// 2. Selection Sort
function selectionSort(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

// 3. Insertion Sort
function insertionSort(arr) {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    
    return arr;
}

// 4. Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    
    return result.concat(left.slice(i), right.slice(j));
}

// 5. Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return quickSort(left).concat(middle, quickSort(right));
}

// 6. Heap Sort
function heapSort(arr) {
    const n = arr.length;
    
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// 7. Counting Sort
function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const output = new Array(arr.length);
    
    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
    
    // Modify count array to store actual positions
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    return output;
}

// 8. Radix Sort
function radixSort(arr) {
    const max = Math.max(...arr);
    let exp = 1;
    
    while (Math.floor(max / exp) > 0) {
        arr = countingSortByDigit(arr, exp);
        exp *= 10;
    }
    
    return arr;
}

function countingSortByDigit(arr, exp) {
    const count = new Array(10).fill(0);
    const output = new Array(arr.length);
    
    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }
    
    // Modify count array
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build output array
    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    
    return output;
}

// ========================================
// SEARCHING ALGORITHMS
// ========================================

// 1. Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// 2. Binary Search (Iterative)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// 3. Binary Search (Recursive)
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// 4. Jump Search
function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    
    let prev = 0;
    while (prev < n && arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }
    
    while (prev < Math.min(step, n)) {
        if (arr[prev] === target) {
            return prev;
        }
        prev++;
    }
    
    return -1;
}

// 5. Interpolation Search
function interpolationSearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right && target >= arr[left] && target <= arr[right]) {
        if (left === right) {
            return arr[left] === target ? left : -1;
        }
        
        const pos = left + Math.floor(((right - left) / (arr[right] - arr[left])) * (target - arr[left]));
        
        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            left = pos + 1;
        } else {
            right = pos - 1;
        }
    }
    
    return -1;
}

// ========================================
// ADVANCED SEARCHING TECHNIQUES
// ========================================

// 1. Find First and Last Position
function searchRange(arr, target) {
    const first = findFirst(arr, target);
    const last = findLast(arr, target);
    return [first, last];
}

function findFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

function findLast(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// 2. Find Peak Element
function findPeakElement(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

// 3. Search in Rotated Sorted Array
function searchInRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        }
        
        // Left half is sorted
        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}

// ========================================
// SORTING UTILITIES
// ========================================

// Check if array is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// Generate random array
function generateRandomArray(size, max = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// Performance measurement
function measurePerformance(fn, arr) {
    const start = performance.now();
    const result = fn([...arr]);
    const end = performance.now();
    return {
        result,
        time: end - start
    };
}

// ========================================
// TESTING
// ========================================

console.log("🧪 Testing Sorting & Searching Algorithms");
console.log("=".repeat(50));

// Test data
const testArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const duplicateArray = [1, 2, 2, 3, 3, 3, 4, 5, 5];

console.log("Original Array:", testArray);

// Test Sorting Algorithms
console.log("\n📊 SORTING ALGORITHMS:");
console.log("Bubble Sort:", bubbleSort([...testArray]));
console.log("Selection Sort:", selectionSort([...testArray]));
console.log("Insertion Sort:", insertionSort([...testArray]));
console.log("Merge Sort:", mergeSort([...testArray]));
console.log("Quick Sort:", quickSort([...testArray]));
console.log("Heap Sort:", heapSort([...testArray]));
console.log("Counting Sort:", countingSort([...testArray]));
console.log("Radix Sort:", radixSort([...testArray]));

// Test Searching Algorithms
console.log("\n🔍 SEARCHING ALGORITHMS:");
console.log("Linear Search for 22:", linearSearch([...testArray], 22));
console.log("Binary Search for 5:", binarySearch(sortedArray, 5));
console.log("Binary Search Recursive for 7:", binarySearchRecursive(sortedArray, 7));
console.log("Jump Search for 3:", jumpSearch(sortedArray, 3));
console.log("Interpolation Search for 6:", interpolationSearch(sortedArray, 6));

// Test Advanced Searching
console.log("\n🚀 ADVANCED SEARCHING:");
console.log("Search Range for 3 in [1,2,2,3,3,3,4,5,5]:", searchRange(duplicateArray, 3));
console.log("Peak Element in [1,3,20,4,1,0]:", findPeakElement([1, 3, 20, 4, 1, 0]));
console.log("Search in Rotated Array [4,5,6,7,0,1,2] for 0:", searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0));

// Performance Comparison
console.log("\n⚡ PERFORMANCE COMPARISON:");
const largeArray = generateRandomArray(1000);
console.log("Array size:", largeArray.length);

const algorithms = [
    { name: "Bubble Sort", fn: bubbleSort },
    { name: "Selection Sort", fn: selectionSort },
    { name: "Insertion Sort", fn: insertionSort },
    { name: "Merge Sort", fn: mergeSort },
    { name: "Quick Sort", fn: quickSort },
    { name: "Heap Sort", fn: heapSort },
    { name: "Built-in Sort", fn: arr => [...arr].sort((a, b) => a - b) }
];

algorithms.forEach(({ name, fn }) => {
    const { time, result } = measurePerformance(fn, largeArray);
    console.log(`${name}: ${time.toFixed(2)}ms, Sorted: ${isSorted(result)}`);
});

console.log("\n✅ All sorting & searching tests completed!");
