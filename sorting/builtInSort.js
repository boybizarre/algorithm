const numberCompare = (num1, num2) => {
  return num1 - num2;
};

const compareByLen = (str1, str2) => {
  return str2.length - str1.length;
};

console.log([6, 4, 15, 10, 2, 1, 9, 5, 88, 100, 1, 55, 23].sort(numberCompare));
console.log(['Steele', 'Colt', 'Data Structures', "Algorithms"].sort(compareByLen));