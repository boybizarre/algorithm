// function takeShower() {
//   return 'Showering!';
// }

// function eatBreakfast() {
//   let meal = cookFood();
//   return `Eating ${meal}`;
// }

// function cookFood() {
//   let items = ['Oatmeal', 'Eggs', 'Protein Shake'];
//   return items[Math.floor(Math.random() * items.length)];
// }
// function wakeUp() {
//   takeShower();
//   eatBreakfast();
//   console.log('Ok ready to go to work!');
// }

// wakeUp();

// first recursive function
function countDown(num) {
  if (num <= 0) {
    console.log('All Done!');
    return;
  }

  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(3));

// although we could always just loop
// function countDownLoop(num) {
//   for (let i = num; i > 0; i--){
//     console.log(i);
//   }
//   console.log('All Done!');
// }

// console.log(countDownLoop(4));