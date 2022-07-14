/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/
let myFriends = [1, 2, "Osama", "Ahmed",true , 8, 5,"Sayed", "Ali", "Amira"];
for (let i = 0; i < myFriends.length; i++) {
  if(typeof myFriends[i] === 'string') {
    console.log(myFriends[i]);
  }
}
/*
  Loop
  - Nested Loops
*/
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021, 2022];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15))
  console.log(`# ${products[i]}`);
  console.log('Colors: ');
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log('Models: ');
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
/*
  Loop Control
  - Break
  - Continue
  - Label
*/
let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

mainLoop: for (let i = 0; i < product.length; i++) {
  if (typeof product[i] === "number" || typeof product[i] === "boolean") {
    continue;
  }
  console.log(`## ${product[i]}`);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if(colors[j] === 'Green') {
      break mainLoop;
    }
  }
}

for (let i = 0; i < product.length;i++) {
  if (typeof product[i] === "number" || typeof product[i] === "boolean") {
    continue;
  }
  console.log(`## ${product[i]}`);
}

let i = 0;
for (;;) {
  console.log(product[i]);
  i++;
  if(i === product.length) break;
}

/*
  Products Practice
*/
let showCount = 3;

document.write(`<h1>${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i+1}] ${product[i]}</h3>`);
  for(let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}
/********************************** */
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i+=start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}

let start1 = 10;
let end1 = 0;
let stop = 3;
for (let i = start1; i > end1; i--) {
  if (i < start1) {
    console.log(`0${i}`);
  }else {
    console.log(i);
  }
  if (i === stop) {
    break;
  }
}

let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++) {
  console.log(i);
  for (let j = breaker; j <= breaker+breaker; j+=breaker) {
    console.log(`-- ${j}`);
  }
}

let index = 10;
let jumb = 2;
let end3 = 0;

for(;;) {
  console.log(index);
  index-= jumb;
  if (index === jumb) {
    break;
  }
}

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = +false ; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  }else {
    console.log(`${i} => ${friends[i]}`);
  }
  
}

let start3 = 0;
let swappedName = "elZerO";
let result = [];

for(let i = start3; i < swappedName.length; i++) {
  if(swappedName[i] === swappedName[i].toLowerCase()){
    result.push(swappedName[i].toUpperCase());
  }else {
    result.push(swappedName[i].toLowerCase());
  }
  
}
let final = result.join("");
console.log(final);

let start4 = 0;
let mix = [1, 2, 3,"A", "B", "C", 4];

for(let i = start4; i < mix.length; i++) {
  if(typeof mix[i] === 'number' && mix[i] !== mix[start4]) {
    console.log(mix[i])
  }
}

let index1 = 0;
while(index1 < product.length) {
  console.log(product[index1]);
  index1++;
}

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Somia"];
let newArray = [];
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  newArray.push(myAdmins[i]);
}
document.write(`<div>We Have ${newArray.length} Admins</div><hr>`);

for (let i = 0; i < newArray.length; i++) {
  document.write(`<div>The Admin For Team ${i+1} is ${newArray[i]}`);
  document.write(`<h3>Team Members:</h3>`);
  for (let j = 0; j < myEmployees.length; j++) {
    if(myEmployees[j].startsWith("A") && myAdmins[i].startsWith("A")) {
      document.write(`<p>- ${j+1} ${myEmployees[j]} </p>`);
    }
    if(myEmployees[j].startsWith("O") && myAdmins[i].startsWith("O")) {
      document.write(`<p>- ${j+1} ${myEmployees[j]} </p>`);
    }
    if(myEmployees[j].startsWith("S") && myAdmins[i].startsWith("S")) {
      document.write(`<p>- ${j+1} ${myEmployees[j]} </p>`);
    }
  }
  document.write(`</div>`);
}

let frinds = ["Ahmed", "Sayed", "Ali", 1, 2, "Mohamed", "Amany"];
let index2 = 0;
let counter = 0;

while(counter < frinds.length) {
  if (typeof frinds[counter] === 'string' && !(frinds[counter].startsWith("A"))) {
    console.log(`${counter} =>  ${frinds[counter]}`);
  }
  
  counter++;
}