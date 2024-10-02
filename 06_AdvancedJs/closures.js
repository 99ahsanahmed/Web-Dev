//! Closures

function closureFn  () {
    let counter = 0;
    return function(){
        counter++;
        return counter
    }
}
let increment = closureFn();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());