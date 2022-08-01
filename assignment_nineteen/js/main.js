/*
  Constructor Function
  - New Syntax
  - Deal With Properties And Methods
  - Update Properties
  - Built In Constructor
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User(100, "Anas", 5000);
let userTwo = new User(101, "", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg());
console.log(userTwo.writeMsg());

/*************************/
class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run () {
    return `Car Is Running Now`;
  }
  stop () {
    return `Car Is Stopped`;
  }
}

let carOne = new Car("MG", 2022, 420000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());
/**************************/

/*
  Constructor Function
  - Update Properties
  - Built In Constructor
*/
class User1 {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName (newName) {
    this.u = newName;
  }
}

let userone = new User1(100, "Anas", 5000);

console.log(userone.u);
userone.updateName("Aseel");
console.log(userone.u);

let strOne = "Anas";
let strTwo = new String("Anas");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/*
  Class
  - Static Properties And Methods
*/
class User2 {
  // Static Property
  static count = 0;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User2.count++;
  }
  // Static Method
  static sayHello () {
    return `Hello From Class`;
  }
  static countMembers () {
    return `${this.count} members Created`;
  }
}

let userAnas = new User2(100, "Anas", 5000);
let userAseel = new User2(101, "Aseel", 6000);
let userArkan = new User2(103, "Arkan", 7000);

console.log(userAnas.u);
console.log(userAseel.u);
console.log(userAnas.count);
console.log(User2.count);
console.log(User2.sayHello());
console.log(User2.countMembers());

/*************************/
/*
  Class
  - inheritance
*/

// Parent Class
class User3 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello () {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends User3{
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

userOne = new User3(100, "Anas");
let adminOne = new Admin(110, "Anas", 1);

console.log(userOne.u);
console.log(userOne.sayHello());
console.log("#".repeat(20));
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());

/***********************/

class Phone {
  constructor(name, serial, price) {
    this.name = name;
    this.serial = serial;
    this.price = price;
  }
}

class Tablet extends Phone {
  constructor(name, serial, price, size) {
    super(name, serial, price);
    this.size = size || "Unknown";
  }
  fullDetails () {
    return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`;
  }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
console.log(`${TabletTwo.fullDetails()}`);
console.log(`${TabletThree.fullDetails()}`);



/***********************/

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User4 {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary () {
    return parseInt(this.#e);
  }
}

userOne = new User4(100, "Anas", "5000 ILS");

console.log("@".repeat(17));
console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);

/**********************/
class Vehicle {
  #name;
  #type;
  constructor(id, name, type) {
    this.id = id;
    this.#name = name;
    this.#type = type;
  }
  getName () {
    return `The Vehicle Name Is ${this.#name}`;
  }
  getType () {
    return `This Vehicle Type Is ${this.#type}`;
  }
}
class Cars extends Vehicle {
  #price;
  #color;
  #speed;
  constructor(id, name, type, price, color, speed) {
    super(id, name, type);
    this.#price = price;
    this.#color = color;
    this.#speed = speed;
  }
  getPrice () {
    return `Car Price Is ${this.#price}`;
  }
  getColor () {
    return `Car Color Is ${this.#color}`;
  }
  getSpeed () {
    return `Car Speed Is ${this.#speed}`;
  }
}
class Bicycle extends Vehicle{
  #price;
  #color;
  constructor(id, name, type, price, color) {
    super(id, name, type);
    this.#price = price;
    this.#color = color;
  }
  getPrice () {
    return `Car Price Is ${this.#price}`;
  }
  getColor () {
    return `Car Color Is ${this.#color}`;
  }
}

console.log("#".repeat(30));
let car1 = new Cars(100, "BMW", "Automatic", 100000, "Black", 220);

console.log(car1.id);
console.log(car1.getName());
console.log(car1.getType());
console.log(car1.getPrice());
console.log(car1.getColor());
console.log(car1.getSpeed());

/**********************/

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects inherit features from one another.
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User5 {
  constructor (id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello () {
    return `Hello ${this.u}`;
  }
}

userOne = new User5(100, "Anas");
console.log(userOne.u);
console.log(User5.prototype);
console.log(userOne);

User5.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
}
let myString = "Elzero";
/*************************/
String.prototype.addLove = function () {
  return `I Love ${myStr} Web School`
};
let myStr = "Elzero";
console.log(myStr.addLove());
/*************************/

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Connot Delete Or Reconfigure]

  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject);

// myObject.c = 100;

// console.log(delete myObject.c);
console.log(delete Object.prototype.love);

// for (let prop in myObject) {
//   console.log(prop, myObject[prop]);
// }

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));

/************************/
const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

Object.defineProperties(myObj, {
  id: {
    enumerable: false,
  },
  score: {
    configurable: false,
    writable: false,
    enumerable: true,
  },
});

delete myObj.country;

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

/************************/
// Edit The Class
class User6 {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }
  get showData () {
    this.#c
    let regular = /\d{4}/ig;
    return `Hello ${this.u} Your Credit Card Number Is ${(this.#c).toString().match(/\d{4}/ig).join("-")}`
  }
}

// Do Not Edit Anything Below

userOne = new User6("Osama", "1234-5678-1234-5678");
userTwo = new User6("Ahmed", "1234567812345678");
let userThree = new User6("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined