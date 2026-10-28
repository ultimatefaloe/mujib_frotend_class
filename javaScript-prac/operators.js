// // arithementic operators
// let num1 = 10;
// let num2 = 5;

// let result = num1 + num2; // addition
// // console.log("Addition: " + result);

// result = num1 - num2; // subtraction
// // console.log("Subtraction: " + result);

// result = num1 * num2; // multiplication
// // console.log("Multiplication: " + result);

// result = num1 / num2; // division
// // console.log("Division: " + result);

// result = num1 % num2; // modulus
// // console.log("Modulus: " + result);

// result = num1 ** num2; // exponentiation
// // console.log("Exponentiation: " + result);


// // assignment operators
// let x = 10;
// // let newX = x + 10;
// x += 10;
// // x = x + 10;
// // console.log("x after += : " + x);

// let y = 20;
// y -= 5;
// // y = y - 5;
// // console.log("y after -= : " + y);



// // comparison operators
// let a = 10;
// let b = 10;

// // console.log("Type of a: " + typeof a);
// // console.log("Type of b: " + typeof b);

// result = a == b; // equal to (boolean) loose check
// // console.log("checking if a is equal to b: " + result);

// result = a > b; // greater than (boolean)
// // console.log("checking if a is greater than b: " + result);

// result = a < b; // less than (boolean)
// // console.log("checking if a is less than b: " + result);

// result = a >= b; // greater than or equal to (boolean)
// // console.log("checking if a is greater than or equal to b: " + result);

// result = a <= b; // less than or equal to (boolean)
// // console.log("checking if a is less than or equal to b: " + result);


// // strict equality and inequality operators
// let c = 10;
// let d = "10";

// console.log("Type of c: " + typeof c);
// console.log("Type of d: " + typeof d);

// result = c == d; // equal to (boolean) loose check
// // console.log("checking if c is equal to d: " + result);
// result = c === d; // strict equal to (boolean) checks both value and type
// // console.log("checking if c is strictly equal to d: " + result);

// result = c != d; // not equal to (boolean) loose check
// console.log("checking if c is not equal to d: " + result);
// result = c !== d; // strict not equal to (boolean) checks both value and type
// console.log("checking if c is strictly not equal to d: " + result);


// let calculation = (15 + 5) * 3 / 4
// console.log("calculation: " + calculation);


// let x = 10;
// let y = 20;

// let result =(x**3 + y**2 + 90) / ( 13%4)

// console.log("result: " + result);


let age = 25;
let grade = 90;

let isEligibleForCompetition = (age >= 18) && grade >= 80; // logical AND operator
console.log("Is eligible for competition: " + isEligibleForCompetition);

// let isOrEligibleForCompetition = (age >= 18) || grade >= 80; // logical OR operator
// console.log("Is or eligible for competition: " + isOrEligibleForCompetition);

let isNotEligibleForCompetition = !(isEligibleForCompetition);
console.log("Is not eligible for competition: " + isNotEligibleForCompetition);