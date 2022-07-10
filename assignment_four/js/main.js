/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - ParseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/
console.log((100).toString());
console.log(100..toString());
console.log(100.10.toString());

console.log(100.555555.toFixed());
console.log(10.555555.toFixed(2));
console.log(10.554555.toFixed(2));

console.log(parseInt("100"));
console.log(Number("100"));
console.log(Number("100 Anas"));
console.log(+"100");
console.log(+"100 Anas");
console.log(parseInt("100 Anas"));
console.log(parseInt("Anas 100 Anas"));

console.log(parseFloat("100"));
console.log(parseFloat("100.564 Anas"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.500));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Anas"));
console.log(Number.isNaN("Anas" / 20));

/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [ES6]
*/

console.log(Math.round(99.3));
console.log(Math.round(99.5));

console.log(Math.ceil(99.1));
console.log(Math.ceil(99.5));

console.log(Math.floor(99.7));
console.log(Math.floor(99.1));

console.log(Math.min(10,20,100,-100,90));
console.log(Math.max(10,20,100,-100,90));

console.log(Math.pow(2, 4));

console.log(Math.random());

console.log(Math.trunc(99.7));
console.log(Math.trunc(99.1));

/*
  Number Challenge
*/
let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find SMallest number in All Variables And Return Integer
console.log(parseInt(Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, parseInt(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil((Math.floor(b) / Math.ceil(d)))); // 67 => Number

console.log(100000);
console.log(100_000);
console.log(5e4 + 5e4);
console.log(1e5);
console.log(10 ** 5);
console.log(Math.pow(10, 5));
console.log(100000.0);
console.log(1000000/10);
console.log(100_00 * 10);
console.log(Number("100000"));
console.log(parseInt("100000"));
console.log(Math.trunc("100000"));
console.log(+"100000");

console.log(-(Number.MIN_SAFE_INTEGER)); // 9007199254740991

console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16

let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar.toString()).toFixed(2))); // 100

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed())); // 10

console.log(Math.round(Math.random() * 4)); // 0 || 1 || 2 || 3 || 4

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - chain Methods
*/

let theName = "  Ahmed  ";
console.log(theName);
console.log(theName[4]);

console.log(theName.charAt(4));

console.log(theName.length);

console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());


console.log(theName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separtor [Opt], Limit [Opt])
*/
let aa = "Elzero Web School";

console.log(aa.indexOf("Web")); // 7
console.log(aa.indexOf("Web", 8)); // -1
console.log(aa.indexOf("o")); // 5

console.log(aa.lastIndexOf("Web")); // 7
console.log(aa.lastIndexOf("o")); // 15

console.log(aa.slice(0));
console.log(aa.slice(0, 6));
console.log(aa.slice(7, 10));
console.log(aa.slice(7));
console.log(aa.slice(2, 6));

console.log(aa.slice(-6));
console.log(aa.slice(-6, -3));
console.log(aa.slice(-10, -7));

console.log(aa.repeat(3));

console.log(aa.split());
console.log(aa.split(""));
console.log(aa.split(" "));
console.log(aa.split("", 6));
console.log(aa.split("  ").toString());

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Include End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Nagative Start From End
  - Includes(value [Mand], Start [Opt] Default 0) [ES6]
  - startswith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let bb = "Elzero Web School";

console.log(bb.substring(2));
console.log(bb.substring(2,6));
console.log(bb.substring(6,2));
console.log(bb.substring(-10));
console.log(bb.substring(-10, 6));
console.log(bb.substring(bb.length - 1));
console.log(bb.substring(bb.length - 5, bb.length - 3));

console.log(bb.includes("Web"));
console.log(bb.includes("Web", 8));

console.log(bb.startsWith("E"));
console.log(bb.startsWith("E", 2));
console.log(bb.startsWith("z", 2));
console.log(bb.startsWith("zero", 2));

console.log(bb.endsWith("o"));
console.log(bb.endsWith("l"));
console.log(bb.endsWith("o", 6));
console.log(bb.endsWith("ro", 6));

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let cc = "Elzero Web School";

// Include This Methods In Your Solution [slice, charAt]
console.log(cc.charAt(2).toUpperCase() + cc.slice(3, 7)); // Zero

// 8 H
console.log(cc.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(cc.split("", 6)); // Elzero

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${cc.substr(0, 6)}${cc.substr(10)}`); // Elzero School

// Solution Must Be Dynamic And String May Change
console.log(cc.charAt().toLowerCase()+cc.substring(1, cc.length - 1).toUpperCase()+cc.substring(cc.length - 1).toLowerCase()); // eLZERO WEB SCHOOl

let userName = "Elzero";

console.log(userName.charAt().toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLocaleLowerCase()); // e
console.log(userName.substr(0,1).toLocaleLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.split("", 1).toString().toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.toLowerCase().startsWith(letterE)); // True
console.log(word.toUpperCase().endsWith(letterO)); // True