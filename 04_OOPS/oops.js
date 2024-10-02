//! CLASS & CONSTRUCTOR
class student {
  //* function inside a class is method
  constructor(rollno, grade, name) {
    this.rollno = rollno;
    this.grade = grade;
    this.name = name;
  }
  //* ANOTHER METHOD
  rollnum() {
    return `Roll no of ${this.name} is ${this.rollno}`;
  }
}
let sharim = new student(45, "5th", "sharim");
// ?console.log(`sharim: `,sharim);
//* METHOD of sharim
//? console.log(sharim.rollnum())



//! INHERITANCE
class clgStudent extends student {
  //* METHOD
  graduate() {
    return `this ${this.name} is now in college`;
  }
}
let graduatedStd = new clgStudent(" ", "", "zaib");
//? console.log(graduatedStd.graduate())

//! PRIVATE
class BankAcc {
  //* Cannot be accesed directly
  #balance = 0;

  //* Method to edit and acess it:
  myBal(amount) {
    this.#balance = amount + this.#balance;
    return `Your balance is $ ${this.#balance}`;
  }
}
let myAcc = new BankAcc();
//? console.log(myAcc.myBal(700));

//! ABSTRACTION
class SeerahTeachers {
  isArrived() {
    return `Seerah Teacher has arrived..`;
  }
  isCompleted() {
    return `class has completed`;
  }
  classStatus() {
    let msgOne = this.isArrived();
    let msgTwo = this.isCompleted();
    return `${msgOne} after an hour  ${msgTwo} `;
  }
}
let seerahSession = new SeerahTeachers();
//? console.log(seerahSession.classStatus())



//! POLYMORPHISM
//* Names are same but different functionanlity
class Car{
    fly(){
        return `Cars cannot fly`
    }
}
class Plane extends Car{
    fly(){
        return `Aeroplanes can fly`
    }
}
let cars = new Car();
let aeroplanes = new Plane();
//? console.log(cars.fly())
//? console.log(aeroplanes.fly());


//! STATIC KEYWORD
//* Static methods cannot be accessed anyone other than SocialAcc  
class SocialAcc{
  static credentials(){
    return `password : 12407`
  }
}
//? console.log(SocialAcc.credentials()); //TRUE
let details = new SocialAcc();
//? console.log(details.credentials()) //FALSE


//! GETTERS AND SETTERS