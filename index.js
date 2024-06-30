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

//---sir's ---
// const fName = "anjila";
// const lName = "gurung";
// const firstName = fName
//   .slice(0, 1) //a
//   .toUpperCase() //A
//   .concat(fName.slice(1, fName.length)); //njila
// console.log(firstName);

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
// const number = 76346.45;

// // United state $
// let num = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// }).format(number);
// console.log(num);
// // Indian rupee ₹
// num = new Intl.NumberFormat("hi-IN", {
//   style: "currency",
//   currency: "INR",
// }).format(number);
// console.log(num);

//----day3------
//write a ES6 to sum 2 value a=110, b=200
//fn declare
// const add = (a, b) => {
//   //const sum = a + b;
//   return a + b; //a and b paramters
//   //alert(`The sum is ${sum}`);
// };
// //fn execution
// const sum = add(110, 200);
// console.log(sum);

//--default function num=5
//--parameterized ->without num=5
// const paging = (num = 5) => {
//   console.log(num);
// };
// paging(1); //1
// paging(); //5

//--IIFE
// (() => {
//   console.log("hello");
// })();

//write js to reverse a number x=32243: o/p: 34223
// const reverser = (num) => Number(String(num).split("").reverse().join(""));
// // {
// // const string = String(num);
// // const step2 = string.split(""); //["3","2",..]
// // const step3 = step2.reverse(); //["3","4",...]
// // const step4 = step3.join("");
// // return step4;
// // };
// const answer = reverser(32243);
// console.log(answer);

// write a js to convert temperature to and from celsius, fahrenheit
//c/5 =(f-32)/9

// const conversion = (value, temp = "c") => {
//   const ans = temp === "c" ? ((value - 32) / 9) * 5 : (value / 5) * 9 + 32;
//   return ans;
// };
// const result = conversion(60, "f");
// console.log(result);

//--object----
// const laptop={
//   model:"Apple",
//   Name:"M1 Pro",
//   modelyear: 2021,
//   age:()=>{
//     return 2024-laptop.modelyear;
//   },
//   fullName: function(){
//     return this.model+" "+this.Name;
//   },
// };

// //Read
// const laptopModel = laptop.model;
// const laptopAge = laptop.age();
// const laptopFullname = laptop.fullName();
// console.log(laptopModel,laptopAge,laptopFullname);

// //update
// laptop.model="Ball";
// console.log(laptop);

// //delete
// delete laptop.model;
// console.log(laptop);
// //instead use destructure

// //destructure
// const{model,fullName,...rest}=laptop;
// console.log(rest);

//
//headphone,77.84,7%
// const prod = {
//   name: "headphones",
//   price: 83.7,
//   discount: "7%",
// };
// const getNewProduct = (product) => {
//   const { price, discount, ...rest } = product;
//   const discountAmount = price > 100 ? 0.1 * price : 0.07 * price;
//   rest.price = price - discountAmount;
//   rest.discount = price > 100 ? "10%" : "7%";
//   return rest;
// };
// const newProd = getNewProduct(prod);
// console.log(newProd);

// const compareArrays =(a,b)=>{
//   (a.length===b.length)? false:
// }

let food1 = ["Noodle", "Pasta", "Ice-cream"];
let food2 = ["Fries", "Ice-cream", "Pizza"];

const compareArrays = (a, b) => {
  // Loop for food1
  for (let i = 0; i < food1.length; i++) {
    // Loop for food2
    for (let j = 0; j < food2.length; j++) {
      // Compare the element of each and
      // every element from both of the
      // arrays
      if (food1[i] === food2[j]) {
        // console.log(`The common food item is ${food1[i]}`);
        // Return if common element found
        //return true;
        return food1[i];
      }
    }
  }

  // Return if no common element exist
  //return false;
};

console.log(compareArrays(food1, food2));
