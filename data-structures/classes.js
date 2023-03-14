class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELLED!!!';
    }

    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s)`; 
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce((a, b) => { return a + b; });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student('Jamal', 'Olakunle', 1);
let secondStudent = new Student('Sara', 'Williams', 2);


// console.log(secondStudent.addScore(23));
// console.log(secondStudent.addScore(42));
// console.log(secondStudent.calculateAverage());


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);