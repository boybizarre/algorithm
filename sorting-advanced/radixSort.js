const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (numbersArr) => {
  let maxDigits = 0;
  for (let i = 0; i < numbersArr.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(numbersArr[i]));
  };

  return maxDigits;

};

console.log(mostDigits([23, 567, 89, 12234324, 90]));

const radixSort = (numbersArr) => {
  let maxDigitCount = mostDigits(numbersArr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < numbersArr.length; i++) {
      let digit = getDigit(numbersArr[i], k);
      digitBuckets[digit].push(numbersArr[i]);
    };

    // console.log(digitBuckets);
    numbersArr = [].concat(...digitBuckets);
    // console.log(numbersArr);
  };

  return numbersArr;

}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));