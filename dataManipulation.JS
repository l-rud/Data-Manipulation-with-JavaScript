// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) &&
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //Part 1: Math Problems

  //Check if all numbers are divisible by 5. 
//Cache the result in a variable.
let thisLogic1 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log(thisLogic1);

//Check if the first number is larger than the last. 
//Cache the result in a variable.
let thisLogic2 = n1 > n4;
console.log(thisLogic2);

//Subtract the first number from the second number.
let thisLogic3 = n2 - n1;
console.log(thisLogic3);

//Multiply the result by the third number.
let thisLogic4 = thisLogic3 * n3;
console.log(thisLogic4);

//Find the remainder of dividing the result by the fourth number.
let thisLogic5 = thisLogic4 % n4;
console.log(thisLogic5);

//Change the way that isOver25 calculates 
//so that we do not need to use 
//the NOT operator (!) in other logic comparisons. 
//Rename the variable as appropriate.

const newIsOver25 = (n1 - 25) < 0 || (n2 - 25) < 0 || (n3 - 25) < 0 || (n4 - 25) < 0;
console.log(newIsOver25);

const newIsValid = isSum50 && isTwoOdd && newIsOver25 && isUnique;
console.log(newIsValid);


// Part 2: Practical Math

//The distance of the trip, in total, is 1,500 miles.
let tripDistance = 1500;

//Your car’s fuel efficiency is as follows:
//At 55 miles per hour, you get 30 miles per gallon.
//At 60 miles per hour, you get 28 miles per gallon.
//At 75 miles per hour, you get 23 miles per gallon.
let milesPerHour55 = 55;
let milesPerHour60 = 60;
let milesPerHour75 = 75;

let fuelAt55miles = 30;
let fuelAt60miles = 28;
let fuelAt75miles = 23;

//You have a fuel budget of $175.
let fuelBudget = 175;

//The average cost of fuel is $3 per gallon.
let costOfFuel = 3;

//How many gallons of fuel will you need for the entire trip?
// at 55 / 60 /75 miles per hour:
let fuelAt55 = Math.round(tripDistance / fuelAt55miles);
console.log(fuelAt55);
let fuelAt60 = Math.round(tripDistance / fuelAt60miles);
console.log(fuelAt60);
let fuelAt75 = Math.round(tripDistance / fuelAt75miles);
console.log(fuelAt75);

//The cost of fuel for the hole trip
// at 55 / 60 /75 miles per hour:
let costOfFuel55 = Math.round(costOfFuel * fuelAt55);
console.log(costOfFuel55);

let costOfFuel60 = Math.round(costOfFuel * fuelAt60);
console.log(costOfFuel60);

let costOfFuel75 = Math.round(costOfFuel * fuelAt75);
console.log(costOfFuel75);

//Compare the results when traveling 
//at an average of 55, 60, and 75 miles per hour.
console.log(`When traveling at an average of ${milesPerHour55} miles per hour, the cost of fuel for the hole trip
will be \$${costOfFuel55}.`);

console.log(`When traveling at an average of ${milesPerHour60} miles per hour, the cost of fuel for the hole trip
will be \$${costOfFuel60}.`);

console.log(`When traveling at an average of ${milesPerHour75} miles per hour, the cost of fuel for the hole trip
will be \$${costOfFuel75}.`);

//Will your budget be enough to cover the fuel expense?
let enoughBudget55 = costOfFuel55 <= fuelBudget;
console.log(enoughBudget55);

let enoughBudget60 = costOfFuel60 <= fuelBudget;
console.log(enoughBudget60);

let enoughBudget75 = costOfFuel75 <= fuelBudget;
console.log(enoughBudget75);

console.log("The budget may only be enough when traveling 55 or 60 mph.");

//Which makes the most sense for the trip?
let cheapestTrip = Math.min(costOfFuel55, costOfFuel60, costOfFuel75);
console.log(cheapestTrip);

console.log("So, the cheapest trip is a trip, when traveling at an average of 55 miles per hour.")

//How long will the trip take, in hours?
// at 55 / 60 /75 miles per hour:

let tripTotalHours55 = Math.floor(tripDistance / milesPerHour55);
console.log(tripTotalHours55);

let tripTotalHours60 = Math.floor(tripDistance / milesPerHour60);
console.log(tripTotalHours60);

let tripTotalHours75 = Math.floor(tripDistance / milesPerHour75);
console.log(tripTotalHours75);

console.log("So, if traveling at an average of 75 miles per hour, the trip will take the less hours")

