/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user0 = {
  // Properties
  theName: "Anas Banat",
  theAge: 24,
  // Methods
  sayHello: function() {
    return `Hello`;
  },
};

console.log(user0.theName);
console.log(user0.theAge);
console.log(user0.sayHello());

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let user1 = {
  theName: "Anas Banat",
  country: "Palestine",
};
console.log(user1.theName);
console.log(user1.country);
console.log(user1[myVar])

/*
  Object
  - Nested Object And Trainings
*/
let user = {
  name: "Anas",
  age: 24,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if(this.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
}

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]);
console.log(user.addresses);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt);
console.log(user.addresses.egypt.one);
console.log(user.addresses.egypt.two);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"].one);
console.log(user["addresses"]["egypt"]["one"]);
console.log(user.checkAv());

/*
  Object
  - Create With New Keyword new Object()
*/

let user2 = new Object({
  age: 20,
});

console.log(user2);

user2.age = 24;
user2["country"] = "Palestine";

user2.sayHello = function () {
  return `Hello`;
}

console.log(user2);
console.log(user2.age);
console.log(user2.country);
console.log(user2.sayHello());

/*
  Function this keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);

var myVar1 = 100;

console.log(window.myVar1);
console.log(this.myVar1);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();
console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user3 = {
  age: 24,
  ageInDays: function () {
    return this.age * 365;
  },
};
console.log(user3.age);
console.log(user3.ageInDays());

/*
  Object
  - Create Object With create Method
*/
let user4 = {
  age: 24,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user4);
console.log(user4.age);
console.log(user4.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user4);

copyObj.age = 25;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
/*
  Object
  - Create Object With assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth1: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 1,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 100;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, {prop:5, prop6:6});

console.log(newObject);

let member = {
  name: "Anas",
  age: 24,
  country: "Palestine",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
  },
};

console.log(member.name); // Anas
console.log(member.age); // 24
console.log(member.country); // Palestine
console.log(member.fullDetails());
// My Name Is Anas, My Age Is 24, I Live in Palestine

let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object({
  property: "Method Two",
});

console.log(objMethodTwo.property); // "Method Two"

let objMethodThree = Object.create({
  property: "Method Three",
});

console.log(objMethodThree.property); // "Method Three"

let objMethodFour = Object.assign({
  property: "Method Four",
});

console.log(objMethodFour.property); // "Method Four"

let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject1 = Object.assign({a}, threeNums, twoNums);

console.log(finalObject1);

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}