// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 5, 3, 10]));


// write a function that counts the numbers of unique values present in an array

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 5, 7, 7, 99]));


// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)
// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(array, val) {
  if (array.length === 0) return 0;

  let left = 0
  let right = array.length - 1;

  while (left < right) {
    let average = (array[left] + array[right]) / 2;

    if (average === val) {
      return [array[left, array[right]]];
    } else if (average < val) {
      left++;
    } else {
      right--
    }
  }
}