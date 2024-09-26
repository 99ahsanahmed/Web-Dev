//!CONSTRUCTOR
function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);
}
let myCar = new Car("toyota", "corolla", 1991);
//? console.log(myCar)




//! CLASS & CONSTRUCTOR
class student {
  //* function inside a class is method
  constructor(rollno, grade, name) {
    this.rollno = rollno;
    this.grade = grade;
    this.name = name;
  }
  //* ANOTHER METHOD
  rollnum(){
    return `Roll no of ${this.name} is ${this.rollno}`
  }
}
let sharim = new student(45, "5th", "sharim");
// ?console.log(`sharim: `,sharim);
//* METHOD of sharim
//? console.log(sharim.rollnum())



