//! THIS
//* Run in the browser for better experience - also "this" works best with classic old function
function whatIsThis() {
  console.log(this);
}
// ?whatIsThis()

//! Higher order function, First Class Function
//* Make a function that takes another function as an Parameter,Placeholder

// this function is passed as an parameter
function paramFunction(test) {
  return `Trying higher order function ${test}`;
}
// This Function takes a function as parameter
function mainFunction(aFunction) {
  return aFunction("worked!");
}

// Calling a function with another function as an argument
console.log(mainFunction(paramFunction));

// !Function inside a function
// ?Aby bhai function ke andar ke child functions keh pass sara access hota hai
function makeTea(name) {
  return function makeThis(whichTea) {
    return `I want this ${whichTea} and I am ${name}`;
  };
}
let order = makeTea("ahsan");
console.log(order("latte"));
