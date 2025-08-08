// largest number in an array in DSA concepts

// function largestNumber(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// } 
// // Example usage
// const numbers = [3, 5, 7, 2, 8];
// console.log("Largest number in the array:",largestNumber(numbers));
// // smallest number in an array in DSA concepts
// function smallestNumber(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// // Example usage
// const numbers2 = [3, 5, 7, 2, 8];
// console.log("Smallest number in the array:", smallestNumber(numbers2));
// sum of all elements in an array in DSA concepts
// function sumOfElements(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// // Example usage
// const numbers3 = [3, 5, 7, 2, 8];
// console.log("Sum of all elements in the array:", sumOfElements(numbers3));


// second largest number in an array in DSA concepts

// function secondLargestNumber(arr) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] !== first) {
//             second = arr[i];
//         }
//     }
//     return second;
// }
// // Example usage
// const numbers4 = [3, 5, 2,4,8, 8];
// console.log("Second largest number in the array:", secondLargestNumber(numbers4));


// geeks fro geeks solution for second largest number in an array
// This is a class-based solution that can be used in a competitive programming context.
// class Solution {
//     getSecondLargest(arr) {
//         let first = -1;
//        let second = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > first) {
//             second = first;
//             first = arr[i];
//         } else if (arr[i] > second && arr[i] !== first) {
//             second = arr[i];
//         }
//     }
//     return second;
        
//     }
// }



// check if array is sorted in DSA concepts

// function isSorted(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// // Example usage
// const numbers = [1, 2, 3, 4, 5];
// console.log("Is the array sorted?", isSorted(numbers));

// Improved version with better edge case handling and flexibility
// function isSortedImproved(arr, order = 'ascending') {
//     // Handle edge cases
//     if (!arr || arr.length <= 1) {
//         return true;
//     }
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (order === 'ascending' && arr[i] > arr[i + 1]) {
//             return false;
//         } else if (order === 'descending' && arr[i] < arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
}

// Example usage
// const numbers5 = [1, 2, 3, 4, 5];
// console.log("Is the array sorted?", isSorted(numbers5));
// console.log("Is the array sorted (ascending)?", isSortedImproved(numbers5, 'ascending'));
// console.log("Is the array sorted (descending)?", isSortedImproved([5, 4, 3, 2, 1], 'descending'));