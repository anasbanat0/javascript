/*
  Function
  - Anonymous Function
  - Calling Named Function vs Ananymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

console.log(calc(10,20));

function calc(num1, num2) {
  return num1 + num2;
}

let calculator = function(num1, num2) {
  return num1 + num2;
};

console.log(calculator(10,20));

function sayHello() {
  console.log("Hello Anas");
}

document.getElementById("show").onclick = function () {
  console.log("Hello Anas");
};

// document.getElementById("show").onclick = sayHello;

setTimeout(function () {
  console.log("Good");
}, 2000);

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example One

function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Anas", "Banat"));

// Example Two

function sayMessage1(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessage1("Anas", "Banat"));

// Example Three

function sayMessage2(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMessage2("Anas", "Banat"));

/*
  Function
  - Arrow Function
  - Regular vs Arrow [Param + No Param]
  - Multiple Lines
*/

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if(x === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}
console.log(`From Global ${x}`);

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;
  function child() {
    let a = 20;
    console.log(a);
    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}

parent();

/*
  Function Arrow Challenges
*/
// [1] One statement In Function
// [2] convert to arrow function
// [3] print the output [Arguments may change]

let names = (...names) => `String [${names.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/**********************************/

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calcs = (one, two, ...nums) => `${one + two + parseInt(nums)}`;

function calcss(one, two, ...nums) {
  return `${one + two + parseInt(nums)}`;
}

console.log(calcs(10, myNumbers[0], myNumbers[1])); // 80
console.log(calcss(10, myNumbers[2], myNumbers[3])); // 80


function currying(x) {
  const sum = (a, b) => a + b;
  let sumVal = x || 0;
  return function add(y) {
    if (!y) {
      return sumVal;
    }
    sumVal = sum(sumVal, y);
    return add;
  };
}

const sum1 = currying();
console.log(sum1(1)(2)(3)(4)());

const sum2 = a => b => b ? sum2(a+b) : a;
console.log(sum2(1)(2)(3)(4)());


function getDetails(zName, zAge, zCountry) {
  function namePattern(zName){
    return `Hello ${zName.split(" ", 1)} ${zName.split(" ", 2)[1].charAt(0).toUpperCase()}.`;
  }
  function ageWithMessage(zAge){
    let number = "", numbers = "0123456789";
    for(char of zAge) {
      if(numbers.includes(char)) {
        number += char;
      }
    }
    return `Your Age Is ${number}`;
  }
  function countryTwoLetters(zCountry){
    return `You Live In ${zCountry.slice(0,2).toUpperCase()}`;
  }
  function fullDetails(){
  return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}

console.log(getDetails("Anas Banat", "24 is my age", "Palestine"));
// Hello Anas B., Your Age Is 24, You Live In PA
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


let itsMe= _ => `I am An Arrow Function`;

console.log(itsMe()); // I am An Arrow Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

let checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary}` : `I am Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // I am Not Avaialble

function specialMix(...data) {
  let result = 0, allString = true;
  for (item of data) {
    if(!isNaN(parseInt(item))) {
      result += parseInt(item);
      allString = false;
    }
  }
  return allString ? "All Is String": result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings