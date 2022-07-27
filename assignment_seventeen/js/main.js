/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/
let myData = [1,1,1,2,3,"A"];
// let myUniqueData = new Set([1,1,1,2,3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);
/***********************************/
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).pop());
// Done
/**********************************/
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(Array.from(new Set(myFriends)).sort());
// Done
/**********************************/
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to object in a Weakset are held weakly.
    If no other references to an object in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set => Have Keys, Values, Entries
  WeakSet => Does Not Have Clear, Keys Values And Entries
  --
  Set => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1,1,1,2,3,"A","A"]);

console.log(mySet);

// Size

console.log(`Size Of Elements Inside Set Are: ${mySet.size}`);

// Values + Keys [Alias for Values]
let iterator = mySet.keys();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach
mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{A: 1, B: 2}]);

console.log(myws);

// Search About: WeakSet Use Cases

/***************************************/
/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  "10": "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a:1,b:2}, "Object");
myNewMap.set(function doSomething(){}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("#".repeat(20));

console.log(myNewObject);
console.log(myNewMap);
/**************************/

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/
myMap = new Map([
  [10, "Number"],
  ["Name", "Anas"],
  [false, "Boolean"],
]);
// myMap.set(10, "Number");
// myMap.set("Name", "Anas");

console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("#".repeat(20));

console.log(myMap.has(false));
console.log(myMap.has("Name"));
console.log(myMap.has("name"));

console.log(myMap.size);

console.log(myMap.delete("Name"));

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);



/*******************************/

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map => Key Van Be Anything
  WeakMap => Key Can Be Object Only
*/

let mapUser = {theName: "Elzero"};
let myMap1 = new Map();
myMap1.set(mapUser, "Object Value");
mapUser = null; // Override The Reference
console.log(myMap1);

console.log("#".repeat(20));

let wMMapUser = {theName: "Elzero"};
let myWeakMap = new WeakMap();
myWeakMap.set(wMMapUser, "Object Value");
wMMapUser = null; // Override The Reference
console.log(myWeakMap);

/*******************************/

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap00 = new Map(Object.entries(myInfo));

console.log(myMap00);
console.log(myMap00.size);
console.log(myMap00.has("role"));
// Done

/******************************/

/*
  Array Methods
  - Array.form(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/
console.log(Array.from("Anas"));
console.log(Array.from("12345"));
console.log(Array.from("12345", n => +n + +n));

let myArray = [1,1,1,2,3,4];
let myset = new Set(myArray);
console.log(Array.from(myset));

console.log([...new Set(myArray)]);

function fr() {
  return Array.from(arguments);
}

console.log(fr("Anas", "Aseel", "Arkan"));


/***************************/

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of And Array To Another Location in the same array"
  -- Any Negative Value Will Count The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Lenght Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

myArray = [10, 20, 30, 40, 50, "A", "B"];
// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]
// myArray.copyWithin(4,6); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(4,-1); // [10, 20, 30, 40, "B", "A", "B"]
// myArray.copyWithin(1,-2); // [10, "A", "B", 40, 50, "A", "B"]
myArray.copyWithin(1,-2, -1); // [10, "A", 30, 40, 50, "A", "B"]
console.log(myArray);


/***************************/
let theName = "Elzero";

console.log(Array.from(theName)); // 1
console.log(theName.split("")); // 2
console.log(Array.of(...theName)); // 3
console.log([...theName]); // 4
console.log(Object.assign([], theName)); // 5

// Done 

/****************************/
let chars = ["A", "B", "C",15, "D", "E",8, 6, 20];
let array = [];
chars.forEach(function (el) {
  // add numbers to numsArray
  if (typeof el === "number") {
    array.push(el);
  }
  // remove numbers from chars array
  chars = chars.filter((el) => isNaN(el));
  // add numbers at the start of chars array
  chars.unshift(...array);
});
chars.copyWithin(0, array.length, array.length * 2);
console.log(chars);

let map1 = chars.filter(value => Number(value));
let map2 = chars.filter(value => !Number(value));
let newMap = map1.concat(map2);
chars.copyWithin(0, newMap.length, newMap.length * 2);
console.log(chars);
// Done
/*********************************/
/*
  Array Methods
  - Array.some(CallbackFunction(Element, Index, Array), This Argument)
  --- CallbackFunction => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunction
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/
let nums = [1,2,3,4,5,6,7,8,9,10];

let myNum = 10;

// let check = nums.some(function(e) {
//   return e > 5;
// });

let check = nums.some(function(e) {
  return e > this;
}, myNum);

// let check = nums.some((e) => e > 5);
console.log(check);

function checkValues(arr, val) {
  return arr.some((e) => e === val);
}
console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function(e){
  return e >= this.min && e <= this.max;
}, range);

/**************************************/
/*
  Array Methods
  - Array.every(CallbackFunction(Element, Index, Array), This Argument)
  --- CallbackFunction => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Without With
  --- This Argument => Value To Use As This When Executing CallbackFunction
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};
let mainLocation = 15;
let locationsArrays = Object.keys(locations);
console.log(locationsArrays);
let locationsArrayNumbers = locationsArrays.map((n) => +n);
console.log(locationsArrayNumbers);
let checks = locationsArrayNumbers.every(function(e) {
  return e > this;
}, mainLocation);
console.log(checks);

/*********************************/
/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String
console.log("Anas");
console.log(..."Anas");
console.log([..."Anas"]);

// Concatenate Array
let myArray1 = [1,2,3];
let myArray2 = [4,5,6];

let allArrays = [...myArray1,...myArray2];
console.log(allArrays);

// Copy Array
let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array
let allFriends = ["Anas", "Mohammed", "Ahmed"];
let thisYearFriends = ["Hatem", "Loay"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object
let myNums = [10,20,-100,100,1000,500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects
let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};
console.log({...objOne, ...objTwo, e: 5});

/********************************/

let theNumber = 100020003000;
console.log(+Array.from(new Set([...theNumber.toString()])).filter((e) => e !== "0").join(""));
// Not Yet

/***************************/
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let newArray = numsOne.concat(numsTwo);
console.log(newArray);
console.log([...numsOne, ...numsTwo]);
numsOne.push(...numsTwo)
console.log(numsOne);

const merge = (first, second) => {
  for (let i=0; i<second.length; i++) {
    first.push(second[i]);
  }
  return first;
}
console.log(merge(numsOne, numsTwo));

const merged = numsTwo.reduce((arr, item) => {
  arr.push(item);
  return arr;    
}, numsOne);

console.log(merged);
/********************************/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// console.log(+Array.from(new Set([...n1.concat(n2).join('')])).sort().reverse().filter(el => el !== "3").join("")); // 210
console.log(Math.max(...n2)*(n1.concat(n2).length));