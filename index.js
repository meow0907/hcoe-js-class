//----day2-------
//ES5
// person = "Anjila";
// console.log(person);

//ES6
//let
//const
// alert("Hi");

// const age = prompt("How old are you?");
// console.log(Number(age));

// const isvalid = confirm("Are you above 18?");
// console.log(isvalid);

//write a js program that ask user for principle, interest rate and time..
//alert the interest amount

// const p = prompt("Enter principle");
// const r = prompt("Enter rate");
// const t = prompt("Enter time");

// console.log(Number(p));
// console.log(Number(r));
// console.log(Number(t));
// i = (p * t * r) / 100;
// alert(`The interest is ${i}`);

// //-----type conversion or type coercion-----
// const num = string(10);
// const num1 = Number(num);

//----statements----
// write a js program that ask for their gender(m/f)
//use if else and alert user about theiir gender

// let gender = prompt("Tell me your gender");
// gender === "m"
//   ? alert(`You are male`)
//   : gender === "f"
//   ? alert(`You are female`)
//   : alert(`You are trans`);

//-----switch case-----
//write a js program to calculate grade
// const marks = prompt("Enter your marks");
// switch (true) {
//   case marks > 80:
//     alert("Grade A");
//     break;
//   case marks > 60 && marks < 80:
//     alert("Grade B");
//     break;
//   case marks < 60:
//     alert("Grade C");
//     break;
//   default:
//     alert("Invalid number");
// }

//------operator-----
//write a js to ask user for username and password
//if username==password
//alert welcome 'your name'
//alert invalid credential

// const username = prompt("Enter your username");
// const password = prompt("Enter your password");
// if (username === "Anji" || password === "Anji") {
//   alert("Welcome Anji");
// } else {
//   alert("Invalid credentials");
// }
// username === "Anji" && password === "Anji"
//   ? alert("Welcome Anji")
//   : alert("Invalid credentials");

//--loop-----
//multiplication table of 13
// let i = 1;
// while (i <= 10) {
//   mul = 13 * i;
//   console.log(mul);
//   i++;
// }
// let i = 1;
// do {
//   let mul = 13 * i;
//   console.log(mul);
//   i++;
// } while (i <= 10);

// convert anjila and gurung to Anjila Gurung
// const fName = "anjila";
// const lName = "gurung";
// //output: "Anjila Gurung"
// console.log(`Before name is ${fName.concat(" ", lName)}`);

// name1 = fName.charAt(0).toUpperCase(); // a-> A
// n1 = fName.slice(1, 6); // to print njila
// result1 = name1.concat("", n1);

// name2 = lName.charAt(0).toUpperCase(); //g->G
// n2 = lName.slice(1, 6); // urung
// result2 = name2.concat("", n2);
// console.log(`After name is ${result1.concat(" ", result2)}`);

//write js program that add no of format
//--decimalprecision---
// const price1 = 48.9823;
// const formattedPrice1 = price1.toFixed(2);
// console.log(Number(formattedPrice1));
// const price2 = 101.0167;
// const formattedPrice2 = price2.toFixed(2);
// console.log(Number(formattedPrice2));
// console.log(Number(formattedPrice1) + Number(formattedPrice2));

//---coma separated numbers---
// let num = 7323452568.283;

// // US system en-US
// const usFormat = num.toLocaleString("en-US");
// console.log(usFormat); // 7,323,452,568.283

// // India system hi-IN
// const inFormat = num.toLocaleString("hi-IN");
// console.log(inFormat); // 7,32,34,52,568.283

//---Number Format Currency---
const number = 76346.45;

// United state $
let num = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format(number);
console.log(num);
// Indian rupee ₹
num = new Intl.NumberFormat("hi-IN", {
  style: "currency",
  currency: "INR",
}).format(number);
console.log(num);
