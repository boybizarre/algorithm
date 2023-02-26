// // same naive implementation

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (var i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)
//     if (correctIndex === -1) {
//       return false;
//     }

//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }

//   return true;
// }

// same([1, 2, 3, 4], [1, 9, 4, 16]);

// refactored function
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }

//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }

//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);








// write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// function sameFrequency(num1, num2) {
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();

//   if (strNum1.length !== strNum2.length) {
//     return false;
//   }

//   let countNum1 = {};
//   let countNum2 = {};

//   for (let i = 0; i < strNum1.length; i++) {
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
//   }

//   for (let i = 0; i < strNum2.length; i++) {
//     countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
//   }

//   for (let key in countNum1) {
//     if (countNum1[key] !== countNum2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false








// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern
//  frequency counter function
function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}