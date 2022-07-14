/*
  Comparison Operators
  - == Equal
  - != Not Equal
  - === Identical
  - !== Not Identical
  - > Larger Than
  - >= Larger Than Or Equal
  - < Smaller Than
  - <= Smaller Than Or Equal
*/
console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log("Osama".length === "Ahmed".length);
console.log(typeof "Osama" === typeof "Ahmed");


/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/
console.log(true);
console.log(!true);

console.log(!(10 === "10"));

console.log(10 == "10" && 10 > 8 && 10 >= 10);
console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 8 || 10 > 50);
console.log(10 == "10" || 10 < 8 || 10 > 50);
console.log(10 === "10" || 10 < 8 || 10 > 50);


console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 >= +"-40")); // true
console.log(!(10 >= -"-40")); // true
console.log(!("10" === 10)); // true
console.log(!(20 < false)); // true

let num1 = 10;
let num2 = 20;

console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(!(num1 == num2)); // true
console.log(num1 > -num2); // true
console.log(num1 != num2); // true
console.log(num1 <= num2); // true

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a == b) && !(a == b) && !(a == c) && !(a == c)); // true


/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }
*/

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  if (student === true) {
    price -= discountAmount + 30;
  } else {
    price -= discountAmount + 10;
  }
} else {
  price -= 10;
}

console.log(price);

/*
  Conditional (Ternary) Operator
*/
let theName = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True: If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20 ? console.log(20) : theAge > 20 && theAge < 60 ? console.log("20 To 60") : theAge > 60 ? console.log("Larger Than 60") : console.log("Unknown");


/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price1 = 0;
console.log(`The Price Is ${price1 || 200}`);
console.log(`The Price Is ${price1 ?? 200}`);


/*
  If Condition
*/
let aa = 10;

if (aa < 10) {
  console.log(10);
} else if (aa >= 10 && aa <= 40) {
  console.log("10 To 40");
} else if (aa > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

aa < 10 ? console.log(10) : aa >= 10 && aa <= 40 ? console.log("10 To 40"): a > 40 ? console.log("> 40"): console.log("Unknown");

let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34"){
  console.log("Good");
}
console.log()
// W position may change
if (st.charAt(st.indexOf("W")).toLowerCase() === "w") {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

/*
  Switch Statement
  switch(expression) {
    case 1:
      // Code Block
      break;
    case 2: 
      // Code Block
      break;
    default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = 0;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unknown Day");
}

/*
  Switch Challenge
*/
let job = "Manager";
let salary = 0;

if(job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
console.log(salary);

switch(job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    break;
  default:
    salary = 4000;
}
console.log(salary);

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if(holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}


let num = 210; 

if (num < 10) {
  console.log(`00${num}`);
}else if (num > 10 && num < 100) {
  console.log(`0${num}`);
}else if (num >= 100) {
  console.log(num);
}

let num10 = 9;
let str = "9";
let str2 = "20";

if (num10 == str) {
  console.log(`${num10} is the same value as ${str}`);
}
if (num10 == str) {
  if(num10 === str) {
    console.log(`${num10} is the same value as ${str} and the same type`);
  }else {
    console.log(`${num10} is the same value as ${str} But not the same type`);
  }
}
if (num10 != str2) {
  console.log(`${num10} is not the same value or the same type as ${str2}`);
}
if(str !== str2) {
  console.log(`${str} is the same type as ${str2} but not the same value`);
}

let num3 = 10;
let num4 = 30;
let num5 = "30";
if (num5 > num3 && num5 !== num4) {
  if(num5 > num3 && num5 == num4 && num5 !== num4) {
    if(num5 != num3 && num5 !== num4) {
      console.log(`${num5} is larger than ${num3} and type string not the same type as number`);
      console.log(`${num5} is larger than ${num3} and value is the same as ${num4} and type string not the same type as number`);
      console.log(`${num5} value and type is not the same as ${num3} and type is not the same as ${num4}`);
    }
  }
}

// Edit What You Want Here

let num11 = 7;
let num22 = 5;
let num33 = 7;
let num44 = 30;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num11 > num22) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num11 > num22 && num11 < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num11 > num22 && num11 === num33) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num11 + num22) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num11 + num33) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num11 + num22 + num33) < num44) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num44 - (num11 + num33) + num22 === 21) {
  console.log("True");
} else {
  console.log("False");
}


let day1 = "   Wednesday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

let newDay = day1.trim().charAt().toUpperCase() + day1.trim().slice(1);


switch(newDay) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available`);
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log(`From 10:00 AM To 6:00 PM`);
    break;
  case "Wednesday":
    console.log(`From 10:00 AM To 7:00 PM`);
    break;
  default:
    console.log(`It's not a valid day`);
}
