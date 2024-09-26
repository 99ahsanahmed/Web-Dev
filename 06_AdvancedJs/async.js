//! ASYNC
//* setTimeout is not a JS in built function rather,
function sayHello(){
    console.log(`Hello there!`)
}
sayHello();

//* It will change the flow
function late(){
    console.log(`Late hello`)
}
setTimeout(() => {
   return late() 
}, 4000);

class Person{
    constructor(name,id){
        this.name = name
        this.id = id
    }
}
let person1 = new Person("ashan" , 8263)
console.log(person1)