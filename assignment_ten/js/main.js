/*
  Higher Order Functions
  ---> is a function that accepts function as parameters and/or returns a function.

  - Map
  --- Method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Inted, Array){}, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The current array

  Notes
  - Map return A New Array

  Examples
  - Anonymous Function
  - Named Function
*/

let myNums = [1,2,3,4,5,6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

let addSelf = myNums.map(function(element, index, arr) {
  console.log(`Current Element => ${element}`)
  console.log(`Current Index => ${index}`)
  console.log(`Array => ${arr}`)
  console.log(`This => ${this}`)
  return element + element;
}, 10);

console.log(addSelf);

let addSelf1 = myNums.map((element) => element + element);

console.log(addSelf1);

function addition(ele) {
  return ele + ele;
}
let add = myNums.map(addition);
console.log(add);

/*
  Map
  - Swap Cases
  - Inverted numbers
  - Ignore number value
*/

let swappingCases = 'elZERo';
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw1 = swappingCases.split("").map(function(ele) {
  // Condition ? True: False
  return ele === ele.toUpperCase() ? ele.toLowerCase(): ele.toUpperCase();
}).join("");

console.log(sw1);

let sw2 = swappingCases.split("").map((ele) =>ele === ele.toUpperCase() ? ele.toLowerCase(): ele.toUpperCase()).join("");

console.log(sw2);

let inv = invertedNumbers.map(function(ele){
  return -ele;
});
console.log(inv);

let ign = ignoreNumbers.split("").map(function(ele){
  return isNaN(parseInt(ele)) ? ele: "";
}).join("");

console.log(ign);

/*
  Filter
  -- method creates a new array
  -- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array){}, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The current array
*/

// Get Friends With Name Starts With A
let friends = ["Anas", "Ahmed", "Sayed", "Rabeeh", "Asma", "Fool", "Cool", "Awesome", "arkan", "aya"];

// Get Even Numbers only
let numbers = [11,20,2,5,17,10];

// Test Map vs Filter

let addMap = numbers.map(function(el){
  return el + el;
});
console.log(addMap);

let addFilter = numbers.filter(function(el){
  return el > 10 ;
});
console.log(addFilter);

let filterFriends = friends.filter(function(el) {
  return el.startsWith("A") || el.startsWith("a");
});
console.log(filterFriends);

let evenNumbers = numbers.filter(function(el){
  return el % 2 === 0;
});
console.log(evenNumbers);

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence.split(" ").filter(function(el) {
  return el.length <= 4;
}).join(" ");
console.log(smallWords);

let ignoreNumbers1 = "Elz123er4o";

let ign1 = ignoreNumbers1.split("").filter(function(ele){
  return isNaN(parseInt(ele));
}).join("");

console.log(ign1);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let multiply = mix.split("").filter(function(el) {
  return !isNaN(parseInt(el))
}).map(function(el) {
  return el * el
});

console.log(multiply);

/*
  Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunction(Accumulator, Current Val, Current Index, Source Array) {}, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided
  ---------- otherwise, it starts from index 1.
  - Array => The Current Array
*/
let nums = [10, 20, 15, 30];

let add1 = nums.reduce(function(acc, current, index, arr){
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`*****************`);
  return acc+current;
}, 5);

console.log(add1);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

theBiggest = ['Bla', 'Propaganda', 'Other', 'AAA', 'Battery', 'Test', 'Anas banat'];

let check = theBiggest.reduce(function(acc, current, index, arr){
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`*****************`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

let finalString = removeChars.filter(function(el){
  return !el.startsWith("@");
}).reduce(function(acc, current) {
  return `${acc}${current}`;
});
console.log(finalString);

/*
  forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) {}, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The current array

  Note
  - Doesn't Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function(ele) {
  ele.onclick = function() {
    // Remove Active Class From All Elements
    allLis.forEach(function(ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function(ele){
      ele.style.display = 'none';
    });
  }
 });

 /*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain
 */
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter((el) => 
  isNaN(parseInt(el))
).map((el,index, array) => {
  array.length = array.length--;
  return `${el.charAt().replace("_", " ")}`;
}).reduce((acc, current) => 
  acc + current
);

console.log(solution); // Elzero Web School

let mix1 = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let onlyString = mix1.map(function(ele) {
  return isNaN(parseInt(ele)) ? ele: "";
}).reduce(function(acc, current) {
  return acc + current;
});

console.log(onlyString); // Elzero

let myString1 = "EElllzzzzzzzeroo";

let removeIterativeLetters = myString1.split("").filter(function(ele, index, array){
  return index === array.indexOf(ele);
}).join("");

console.log(removeIterativeLetters); // Elzero 

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newString = myArray.reduce(function(acc, current, index, array){
  return acc + current;
}).split(',').reduce(function(acc, current){
  return acc + current;
});

console.log(newString); // Elzero 

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newOnly_reverse = numsAndStrings.filter(function(ele){
  return !isNaN(parseInt(ele))
}).map(function(ele) {
  return -ele
});

console.log(newOnly_reverse); // [-1, -10, 10, 20, -5, -3]

let numss = [2, 12, 11, 5, 10, 1, 99];

let even_odd = numss.reduce(function(acc, current){
  return current % 2 == 1 ? acc + current : acc * current
}, 1);

console.log(even_odd); // 500
