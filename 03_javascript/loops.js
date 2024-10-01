//* sum of 1 - 5 using while loop:
let sum = 0;
let i = 1;
while(i<=5){
    sum = sum + i;
    i++;
}
// ?console.log(sum)



//* While loop 5 to 1 countdown store in an array
let y = 5;
countdown = [];
while (y>0){
    // console.log(y);
    countdown.push(y)
    y--
}
// ?console.log(countdown)


//* For loop that multiply each array element with 2
let multiplied_numbers = []
let arr = [2,4,6]
for (let index = 0; index < arr.length; index++) {
    multiplied_numbers.push(arr[index] * 2);
}
// ?console.log(multiplied_numbers);

// !BREAK
//* For loop through array and stops the loop when it finds chai, also store values in new array
let teas = ["latte","choca" ,"mocca" , "chai" , "shake"]
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'chai') {
        break;
    }
    selectedTeas.push(teas[i])
    
}
// ?console.log(selectedTeas)


// !CONTINUE
// *skip a country save othersto new array
let countries = ["pak","india","bangla","Paris","Afg","Palestine"]
let withoutParis = []
for (let i = 0; i < countries.length; i++) {
  if (countries[i] === "Paris") {
    continue;
  }
  withoutParis.push(countries[i]);
}
// ?console.log(withoutParis)

//! For-of
// *iterate through an array and copy it but stop before 4
let numbers = [1,2,3,4]
let newNumbers = []
for (const element of numbers) {
    if (numbers === 4) {
        break;
    }
    newNumbers.push(element);
}
// ?console.log(newNumbers)


//* Use for-f and skip one element of an array
let biscuits = ["sooper","zeera","prince","chai"]
let filteredBiscuits = []
for (const value of biscuits) {
    if (value === "zeera" || biscuits === "Zeera") {
        continue;
    }
    filteredBiscuits.push(value)
}
// ?console.log(filteredBiscuits)


//* For-in loop through an object and create a new object
let players = {
    benzema : "madrid",
    "messi" : "barca",
    xavi : "barca",
    ody : "valencia"
}
let newPlayers = {}
for (const men in players) {
    newPlayers[men] = players[men]; 
}
// ?console.log(newPlayers)


//! Forin and skip
let asia = {
    Pakistan : 990,
    India : 9999,
    afg : 6677,
    china : 2345,
}
let newCountries = {}
for (const country  in asia) {
    if (country === "afg") {
        continue;
    }
    newCountries[country] = asia[country];
}
// ?console.log(newCountries)


//! Skip the item
//* with less than thousand rupees
let chips = {
    masala : 1100,
    namak : 1200,
    plain : 250,
    pringles : 6666,
    nimco : 300,
}
let ExpensiveChips = {}
for (const packet in chips) {
    if (chips[packet] < 1000 ) {
        continue;
    }
    ExpensiveChips[packet] = chips[packet]
} 
// ?console.log(ExpensiveChips)


//! Foreach && array
//* Only display unTravelled countries 
let middleEast = ["Saudia","Syria","Sudan","Palestine"]
let unTravelled = []
middleEast.forEach((country) => {
    if (country === "sudan" || country === "Sudan") {
        return;
    }
    unTravelled.push(country)
})
// ?console.log(unTravelled)


//* Using forloop iterate through an array skip no.7 and multiply other nums, also store in new arrays
let primeNums = [2,3,5,7,11,13];
let doubled = [];
for (let i = 0; i < primeNums.length; i++) {
    if (primeNums[i] === 7) {
        continue
    }
    doubled.push(primeNums[i]*2)
}
// ?console.log(doubled)

//* Use for of loop to remove elements with more than 7 characters
let basket = ["mango","apple","bananana","orange","greenapple","watermelon"]
let shortFruits = [];
for (const fruits of basket) {
  if (fruits.length >= 7) {
    continue;
  }
  shortFruits.push(fruits)
} 
console.log(shortFruits)