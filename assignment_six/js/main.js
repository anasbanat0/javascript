/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Ali", "Anas", "Ashraf"]];
console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][3]}`);
console.log(`${myFriends[1][3].toUpperCase()}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][3]}`);
console.log(`${myFriends[3][1][3].toUpperCase()}`);

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);
console.log(typeof myFriends);
let str = "Anas";
console.log(Array.isArray(myFriends));
console.log(Array.isArray(str));

/*
  Array Methods
  - Length
*/

let myFamily = ["Najwa", "Heba", "Enas", "Anas", "Adham"];
console.log(myFamily.length);
myFamily[3] = ["Anas", "Aseel", "Arkan"];
myFamily[myFamily.length] = "Sana";
console.log(myFamily);

console.log(myFriends);
myFriends.unshift("Hala", "Bala");
console.log(myFriends);
myFriends.push("Samah", "Eman");
console.log(myFriends);
let first = myFriends.shift();
console.log(myFriends);
console.log(`First Name is ${first}`);
let last = myFriends.pop();
console.log(myFriends);
console.log(`Last Name is ${last}`);
/*
  Arrays methods [search]
  - indexOf (SearchElement, From Index [Opt])
  - lastIndexOf (search Element, From Index [Opt])
  - includes (valueToFind, from Index [Opt]) [ES7]
*/

console.log(myFriends);
console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));
console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", -2));
console.log(myFriends.includes("Ahmed"));

if(myFriends.indexOf("Ahmed") === -1) {
  console.log("Not Found");
}

/*
  Arrays Methods [Sort]
  - sort (Function [Opt])
  - reverse
*/
myFriends.unshift(10);
myFriends[5] = "90";
myFriends.push(1000, 100, 20, "10", -20, -10);
console.log(myFriends);
console.log(myFriends.sort());
console.log(myFriends.reverse());
console.log(myFriends.sort().reverse());

/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Includung End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- negative Count From End
  --- If end Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/
console.log(myFriends);
console.log(myFriends.slice());
console.log(myFriends.slice(1, 5));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -7));
console.log(myFriends.slice(-4, -2));

console.log(myFriends);
myFriends.splice(0, 13, "Sameer", "Samara", "Anas", "Adham", "Enas");
console.log(myFriends);


/*
  Arrays Methods [joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/
let myNewFriends = ['Samy', "Ayman"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Jameel", "Tareq", [1,2,3,4,5]);

console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" | "));
console.log(allFriends.join(" | ").toUpperCase());

/*
  Arrays Challenges
*/

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// Write Code Here

console.log(my.slice(zero , ++counter).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter).reverse()); // ["Elham", "Mazero"]

console.log(my.slice(zero, counter).reverse().join("").slice(--zero, --counter) + my.slice(++zero, counter).join("").slice(counter)); // "Elzero"

console.log(my.slice(zero, counter).join("").slice(++zero+counter, zero - ++counter)+ my.slice(--zero, --counter).join("").slice(counter+ ++counter).toUpperCase()); // "rO"

let myFriend = ["Ahmed", "Elham", "Osama", "Gamal"];

let num = 3;
// Method 1
myFriend.pop();
console.log(myFriend); // ["Ahmed", "Elham", "Osama"];
console.log(myFriend.slice());

let friend = ["Ahmed", "Eman", "Osama", "Gamal"];

friend.pop();
friend.shift();

console.log(friend); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP","JS", "Python"];

if (haystack.indexOf(needle)) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle)) {
  console.log("Found");
}
if (haystack.includes(needle)) {
  console.log("Found");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

console.log(allArrs.concat(arr1, arr2).sort().splice(++arr1.length).join("").toLowerCase()); // fxy