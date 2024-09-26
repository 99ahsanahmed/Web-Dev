//! THIS CONTEXT BINDING
const person =  {
    name : "ahsan",
    greet(){
        console.log( `hello, I am ${this.name}`)
    }
}
//? This will work totally fine
person.greet();

//? But reference will not get the context
//* let milna = person.greet;
//* milna()
//! Solution:
    let milna = person.greet.bind({name:"shaik"})
    milna()

//! CALL && APPLY