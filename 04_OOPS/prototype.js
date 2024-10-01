//! Prototypes
//* Better on chrome
let bmw = {
    tyres : 4
}
let tesla = {
    driver : "AI"
}

//? Injecting protoype of bmw into tesla
Object.setPrototypeOf(tesla , bmw)
//? Getting prototype of bmw that is now inside tesla
console.log(`tesla `, Object.getPrototypeOf(tesla))