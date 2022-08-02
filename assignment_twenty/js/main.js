/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number Of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let datenow = new Date();

console.log(datenow);

console.log(Date.now()); // 1000 MillSeconds = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("May 31, 98");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
document.write(`<div style="text-align: center; position: fixed; width: 100%; bottom: 0; padding: 20px; background: #111; color: #fff; font-weight: 600; font-size: 17px">Copyrights &copy; ${dateNow.getFullYear()} <a style="text-decoration: none; color: #ff090f;" href="https://linkedin.com/in/anasali0" target="_blank">Anas Banat</a></div>`);
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getUTCDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds Optional [0-59], Milliseconds => Optional [0-999])
  - setMinutes(Minutes [0-59], Senonds => Optional [0-59], Milliseconds => Optional [0-999])
  - setSeconds(Seconds => [0-59], Milliseconds => Optional [0-999])
*/

dateNow = new Date();
console.log(dateNow);

console.log("#".repeat(64));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(64));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(64));

// dateNow.setDate(31);
// console.log(dateNow);

// dateNow.setFullYear(2020, 13);
// console.log(dateNow);

dateNow.setMonth(11, 31);
console.log(dateNow);

/**********************************/
console.log("_______".repeat(10));
dateNow = new Date();
birthday = new Date("May 31, 98");
dateDiff = dateNow - birthday;
console.log(`${parseInt(dateDiff / 1000)} Seconds`);
console.log(`${parseInt(dateDiff / 1000 / 60)} Minutes`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60)} Hours`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60 / 24)} Days`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60 / 24 / 365)} Years`);
/***********************************/
dateNow = new Date();
dateNow.setHours(0,0,0,1000);
dateNow.setFullYear(1980, 0, 1);
console.log(dateNow);
/***********************************/
dateNow = new Date();
dateNow.setDate(-1);
console.log(dateNow);

const previousMonth = dateNow.toLocaleString('default', { month: 'long' });
console.log(`Previous Month Is ${previousMonth} And Last day Is ${dateNow.getDate()}`);
/***********************************/
/*
  Date And Time
  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("May 31 1998"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(896562000000);
console.log(date2);

let date3 = new Date("5/31/1998");
console.log(date3);

let date4 = new Date("1998-5-31");
console.log(date4);

let date5 = new Date("98-5-31");
console.log(date5);

let date6 = new Date(1998, 5, 31, 3, 44, 31);
console.log(date6);

let date7 = new Date(1998, 5, 31);
console.log(date7);

let date8 = new Date("1998-05-31T03:44:31");
console.log(date8);

/*
  Date And Time
  - Track Operations time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 1000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

/****************************/
let birthday1 = new Date(1998, 4, 31);
console.log(birthday1);
let birthday2 = new Date(896562000000);
console.log(birthday2);
let birthday3 = new Date("1998-05-31T00:00:00");
console.log(birthday3);
/****************************/
// start = performance.now();
// for (let i = 1; i < 100000; i++) {
//   console.log(i);
// }
// end = performance.now();
// console.log(`Loop Took ${(end - start).toFixed(0)} Milliseconds`);
/****************************/

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());
// console.log(generator.next().value);
// console.log(generator.next().done);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}

/*
  Generators
  - Delegate Generator
*/
function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll () {
  yield* generateNums();
  yield* generateLetters();
  yield* [4,5,6];
}

generator = generateAll();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Stop Generators"));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

function* generateNumber() {
  // yield 1;
  // yield 2;
  // return "A";
  // yield 3;
  // yield 4;
  let index = 0;
  while(true) {
    yield index++;
  }
}
generator = generateNumber();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

/**********************************/
console.log("#".repeat(66))
function* gen() {
  let index = 14;
  yield index;
  for(let i = 1;; i++) {
    yield index += 200 * (i - 1) + 140;
  }
}
generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

/***********************************/
console.log("@#".repeat(40));
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5].filter((value) => {
    return value;
  });
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

generator = genAll();
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}

/**************************************/
/*
  Modules
  - Import And Export
  - Export Alias
  - Named Export
  - Default Export
  - Import All
*/
let arr = [1,2,3,4];
function saySomething() {
  return `Something`;
}

export {arr, saySomething}
export default function() {
  return `Hello`;
}
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
