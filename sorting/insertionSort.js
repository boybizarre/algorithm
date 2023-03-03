const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    console.log('*************')
    arr[j + 1] = currentValue;
    console.log(arr);
  }

  return arr;
};

// function insertionSort(arr) {
//   var currentVal;
//   for (var i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }

// insertionSort([2, 1, 9, 76, 4]);

console.log(insertionSort([9, 8, 5, 7, 2, 3, 8, 1, 0]));
