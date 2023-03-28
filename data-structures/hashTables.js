// const hash = (key, arrayLen) => {
//   let total = 0;
//   for (let i = 0; i < key.length; i++) {
//     let char = key[i],
//       value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }

//   return total;
// };

// Improved hash function with prime number to avoid collisions
// const hash = (key, arrayLen) => {
//   let total = 0,
//     WEIRD_PRIME = 31;
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i],
//       value = char.charCodeAt(0) - 96;
//     total = (total * WEIRD_PRIME + value) % arrayLen;
//   }

//   return total;
// }

// console.log(hash('pink', 13)); // output -> 5
// console.log(hash('cyan', 13)); // output -> 5 collisions

// console.log('a'.charCodeAt(0));
// console.log('crash'.charCodeAt(0));
// console.log('hi'.charCodeAt(0));
// console.log('a'.charCodeAt(0) - 96);
// console.log('j'.charCodeAt(0) - 96);
// console.log('z'.charCodeAt(0) - 96);

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0,
      WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i],
        value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }

    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);

ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');

// console.log(ht.get('plum'));

console.log(ht.values());
console.log(ht.keys());

console.log(ht);

// ht.keys().forEach((key) => {
//   console.log(ht.get(key));
// })

// BIG O NOTATION
// Insert: O(1)
// Deletion: O(1)
// Access: O(1)
