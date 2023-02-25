// function charCount(str) {
//   // make object to return at end
//   var result = {};
//   // loop over string fro each character
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
      
//       //if the character is a number/letter AND is a key in object, add one to count
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }

//   // if character is something else ( space, period etc.) don't do anything
//   // return object at end
//   return result;

// }

// console.log(charCount('Hi There!'));

function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string fro each character
  for (var char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      //if the character is a number/letter AND is a key in object, add one to count
      result[char] = ++result[char] || 1;
    }
  }

  // if character is something else ( space, period etc.) don't do anything
  // return object at end
  return result;
}

function isAlphanumeric(char) {
  var code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) &&  // upper alpha (A-Z)
    !(code > 96 && code < 123)) //lower alpha (a-z) 
  { return false }
  return true;
}


console.log(charCount('Hello WORLD hi!!!'));
