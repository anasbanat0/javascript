/*
  Function
  - What is function?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Parctical Example
*/
function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is not suitable for you`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}
sayHello("Anas", 24);
sayHello("Arkan", 0);
sayHello("Aya", 20);

function generate(start, end) {
  for (let i = start; i <= end; i++) {  
    if(i === 15) {
      return `Interruptting`;
    }
    console.log(i);
  }
}
generate(10, 20);

/*
  Function
  - Return
  - Automatic semicolon Insertion [No Line Terminator Allowed]
  - Interruptting
*/


function calc(num1, num2) {
  return num1 + num2;
}

let sum = calc(10, 20);
console.log(sum);

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHi(userName = "Unknown", age = "Unknown") {
  // if(age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hi ${userName} Your Age is ${age}`;
}

console.log(sayHi());
console.log(sayHi("Anas"));
console.log(sayHi("Anas", 24));

/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/
function calcs(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return `Final Result Is ${result}`;
}
console.log(calcs(10,20,20,30,20,80,80,80,80,80));

/*
  Function
  - parameters
  - Default
  - Rest
  - Loop
  - Condition
*/
function showInfo(user = "Unknown", age = "Unknown", hourRate = 0, show = "Yes", ...skills) {
  document.write(`<div class="mb-3" style="background: aqua; text-align: center; padding: 20px;">`);
  document.write(`<h2>Welcome, ${user}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Hour Rate: $${hourRate}</p>`);
  if(show === "Yes") {
    if(skills.length > 0) {
      document.write(`<p><b>Skills:</b> ${skills.join(" | ")}</p>`);
    }else {
      document.write(`<p>Dear ${user} you don't have any <b>Skills:</b>.<br>Please add some <b>Skills:</b> to your profile.</p>`);
    }
  } else {
    if(skills.length < 1) {
      document.write(`<p>Dear ${user} you don't have any <b>Skills:</b>.<br>Please add some <b>Skills:</b> to your profile.</p>`);
    } else {
      document.write(`<p><b>Skills:</b> are hidden</p>`);
    }
  }
  document.write(`</div>`);
}
showInfo("Anas", 24, 20, "Yes", "HTML5", "CSS3", "JS", "Bootstrap", "PHP", "MYSQL");

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => name
  - Number => age
  - Boolean => status
  Argument Is random
  data is not sorted output depend on data types
  - use ternary conditional operator
*/

function showDetail (a, b, c) {
  info = [a, b, c];
  for (i = 0; i < 3; i++) {
    typeof info[i] === 'string'? first = info[i]: typeof info[i] === 'number'? second = info[i]: typeof info[i] === 'boolean'? info[i] === true?third = 'Available':third = 'Not Available': "The Input is not valid";
 }
  document.write(`<p>Hello ${first}, Your Age Is ${second}, You Are ${third} For Hire</p>`);
}
showDetail("Anas", 24, true);
showDetail(24, true, "Anas");
showDetail(false, 24, "Anas");

function sayGreetings(theName, theGender) {
  if(theGender === "Male"){
    document.write(`<p>Hello Mr ${theName}</p>`);
  } else if(theGender === "Female"){
    document.write(`<p>Hello Miss ${theName}</p>`);
  } else {
    document.write(`<p>Hello ${theName}</p>`);
  }
}

sayGreetings("Anas", "Male");
sayGreetings("Aseel", "Female");
sayGreetings("Rania");

function calculate(firstNum, secondNum, operation) {
  if (secondNum === "" || secondNum === null || secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined){
    console.log(firstNum + secondNum);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === 'subtract') {
    console.log(firstNum - secondNum);
  } else if (operation === 'multiply') {
    console.log(firstNum * secondNum);
  }
}
calculate(20);
calculate(20, 30);
calculate(20, 30, "add");
calculate(20, 30, "subtract");
calculate(20, 30, "multiply");

function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`Your age is ${theAge * 12} months`);
    console.log(`Your age is ${theAge * 52.1429} weeks`);
    console.log(`Your age is ${theAge * 365} days`);
    console.log(`Your age is ${theAge * 365 * 24} hours`);
    console.log(`Your age is ${theAge * 365 * 24 * 60} Minutes`);
    console.log(`Your age is ${theAge * 365 * 24 * 60 * 60} Seconds`);
  } else {
    console.log("Age Out Of Range");
  }
}

ageInTime(110);
ageInTime(24);

function createSelectBox(startYear, endYear) {
  document.write(`<select class="form-control">`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(1998, 2022);

function multiply(...numbers) {
  let result = 1;
  for (let i = 0 ; i < numbers.length; i++) {
    if(typeof numbers[i] === "string") {
      continue;
    }
    result *= parseInt(numbers[i]);
  }
  console.log(result);
}
multiply(10, 20);
multiply("A", 10, 30);
multiply("A", 10, 30, 100.1);
multiply("A", 10, 30, 100.9);
multiply(100.5, 10, "B");