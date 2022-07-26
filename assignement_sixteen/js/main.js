/*
	Destructuring
	" is a javascript expression that allows us to extract data from arrays,
	objects, and maps and set them into new, distinct variables. "
	- Destructuring Array
*/
let a = 1;
let b = 1;
let c = 1;
let d = 1;
let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
[a = "Aseel", b, c, d, e = "Anas"] = myFriends;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let [ , y, , z] = myFriends;
console.log(y);
console.log(z);

/***************************************/
/*
	Destructuring
	- Destructuring Array Advanced Example
*/
myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

[ , , , [a, , [ , b]]] = myFriends;
console.log(a); // Shady
console.log(b); // Gamal

/**********************************/
let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
[a,b,c,d,e] = myNumbers;

console.log(a * e); // 5

/***********************************/

let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here

[a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

/*******************************/
/*
	Destructuring
	- Destructuring Array => Swapping Variables
*/
let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book;

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash;

[book, video] = [video, book];

console.log(book);
console.log(video);

/*************************************/

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let newArray = arr3.concat(arr2,arr1);

// Write Your Destructuring Assignment Here
[ , a, b, , , , c, , ,] = newArray;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

/***********************************/

/*
	Destructuring
	- Destructuring Object
	--- Naming The Variables
	--- Add New Property
	--- Nested Object
	--- Destructuring The Nested Object Only
*/

const user = {
	theName: "Anas",
	theAge: 24,
	theTitle: "Developer",
	theCountry: "Palestine",
	theColor: "Black",
	skills: {
		html: 70,
		css: 80,
	}
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({theName, theAge, theTitle, theCountry} = user);

const {theName, theAge, theTitle, theCountry, theColor:co="Red", skills:{html:h,css}} = user;

console.log(theName);
console.log(theAge);
console.log(theTitle);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const {html:skillOne, css:skillTwo} = user.skills;
console.log(`My HTML Skill Progress Is ${skillOne}`, `&& My CSS Skill Progress Is ${skillTwo}`);

/*******************************/

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here

const {age:a1, working:w1, country:c1, hobbies:[h1,,h3]} = member;

console.log(`My Age Is ${a1} And I am ${w1 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c1}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

/*******************************/

/*
	Destructuring
	- Destructuring Function Parameters
*/
const user1 = {
	theName: "Anas",
	theAge: 24,
	skills: {
		html: 70,
		css: 80,
	},
};

showDetails(user1);

// function showDetails(obj) {
// 	console.log(`Your Name Is ${obj.theName}`);
// 	console.log(`Your Age Is ${obj.theAge}`);
// 	console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({theName:n, theAge:a, skills:{css:c}} = user1) {
	console.log(`Your Name Is ${n}`);
	console.log(`Your Age Is ${a}`);
	console.log(`Your CSS Skill Progress Is ${c}`);
}
/*********************************/

/*
	Destructuring
	- Destructuring Mixed Content
*/
const user2 = {
	theName: "Anas",
	theAge: 24,
	skills: ["HTML", "CSS", "JavaScript"],
	addresses: {
		Palestine: "Gaza",
		USA: "New York",
	},
};

const {theName: n, theAge: a2, skills: [one, , three], addresses:{Palestine: p}} = user2;

console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a2}`);
console.log(`Your Skills Are: ${one}, ${three}`);
console.log(`You Live In: ${p}`);

/************************************/

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
// console.log(Object.values(Object.values(game)[2])[0][0]);
// let o1 = Object.keys(Object.values(game)[2])[0];
// console.log(o1)
// let u1 = Object.values(Object.values(game)[2])[0][0];
let {title: t, developer: d1, releases} = game;
let [o,ark,ori] = Object.keys(releases);
let [u,j] = Object.values(releases[o]);
let [u_price,j_price] = Object.values(releases[ark]);
let [or] = [Object.values(releases[ori]).join("")];

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d1} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${ark}`);
// Although I Love Ark Of Napishtim

console.log(`${ark} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${ark} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

/*************************************/

let chosen = 1;

let myFriend = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function showDetail(chosen) {
	let friends = myFriend[chosen-1];
	let{title:name, age, available, skills:[,skill2]} = friends;
	console.log(`${name}\n${age}\n${available===true?"Available":"Not Available"}\n${skill2}`);
}
showDetail(1);
showDetail(2);
showDetail(3);

myFriend.map(({title, age, available, skills:[,skill2]}) => console.log(`${title}\n${age}\n${available===true?"Available":"Not Available"}\n${skill2}`));