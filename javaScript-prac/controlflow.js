const student = {
  name: "John Doe",
  age: 17,
  grade: "A",
  isEnrolled: true,
  level: "Undergraduate",
  courses: ["Mathematics", "Physics", "Computer Science"],
};

// if (student.isEnrolled && student.age >= 18) {
//   console.log(student.name + " is enrolled in the course.");
// } else if (student.isEnrolled && student.age < 18) {
//   console.log(student.name + " is enrolled but not eligible due to age.");
// } else {
//   console.log(student.name + " is not enrolled in the course.");
// }

// if (condtion){ //must always be a boolean expression
//   action
// }

// let grade = 55;

// if (grade >= 90) {
//   console.log("You got an A!");
// } else if (grade >= 80) {
//   console.log("You got a B!");
// } else if (grade >= 70) {
//   console.log("You got a C!");
// } else if (grade >= 60) {
//   console.log("You got a D!");
// } else {
//   console.log("You failed the course.");
// }

// check falsy values

// if (0) {
//   console.log("This will not be printed because 0 is falsy.");
// } else {
//   console.log("0 is falsy, so this block will be executed.");
// }

// if (""){
//   console.log("This will not be printed because an empty string is falsy.");
// } else {
//   console.log("An empty string is falsy, so this block will be executed.");
//  }

// let username = "0"

// if (username) {
//   console.log("Username is valid.");
// } else {
//   console.log("Username is empty or invalid.");
// }

// Ternary operator
let age = 15;
// let isAdult = condition ? truthy value : falsy value

// if (age >= 20) {
//   isAdult = true
// } else {
//   isAdult = false
// }

// let isAdult = age >= 20 ? "He/She is an adult" : "He/She is not an adult";
// console.log(isAdult);

// let partyEntry =
//   age >= 18
//     ? "You can enter the party"
//     : isAdult && age < 18
//       ? "He comes with an adult"
//       : "Not allowed to enter the party";

// const currentDay = "Monday";

// switch (currentDay) {
//   case "Monday":
//     console.log("Working day");
//     return;
//   case "Tuesday":
//     console.log("Fun fair");
//     return;

//   case "Wednesday":
//     console.log("Sport day");
//     return;

//   case "Thursday":
//     console.log("Party day");
//     return;

//   case "Friday":
//     console.log("Jumat");
//     return;

//   default:
//     console.log("Days not found");
//     return;
// }


let num = 20;

let isNumOddOrEven = num%2 === 0 ? "Even" : "Odd";

console.log(isNumOddOrEven)

// check is a number s divisible by 3, if true return "the number is divisible my 3" :  "it is not divisible by 3"

// 