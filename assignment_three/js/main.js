/*
  Arithmetic Operators
  + Addition
  - Subtraction
  / Division
  * Multiplication
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [POST / Pre]
  -- Decrement [POST / Pre]
*/
console.log(10 + 20);
console.log(10 + "Anas");
console.log(10 - 20);
console.log(10 - "Anas");
console.log(typeof NaN);
console.log(10 * 20);
console.log(10 * -20);
console.log(10 / 4);
console.log(10 / 5);
console.log(2 ** 4);
console.log(10 % 3);
console.log(20 % 2 == 0);
console.log(21 % 2 == 0);

/*
  - + Unary Plus [Return Number Id It's not number]
  - - Unary Negation [Return Number If It's Not Number + Negates it]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Anas");
console.log(+"19.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Anas");
console.log(-"19.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));

/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/
let a = "10";
let b = 20;
let c = true;

console.log(-a + b);
console.log(a - b);
console.log(b - a);
console.log("" - 2);
console.log(null - 2);
console.log(+false - true);
console.log(b + c);
console.log(a + b + c);
console.log(b + +a + c);

/*
  Assignment Operators
*/

let aa = 10;
aa += 20;
console.log(aa);

/*
  Challenge 1
*/
let x = 10;
let y = "20";
let z = 80;
console.log(++x + +y++ + +z++ - +x++); // 11 + 20 + 80 - 11 = 100
console.log(++x + -y + +z++ - -x++ + +x); // 13 + -21 + 81 + 13 + 14 = 100
console.log(--z + +y + --x * +y++ - +y * x + --x - +true); // 81 + 21 + 273 - 286 + 11 = 386 - 286 = 100 

/*
  [++x] [+]
  [++x]
  - Value: 11
  - Explain: This is prefix operator
  [+]
  - Explain: This is Addition operator from arithmetic operators
  [+y++]
  - Value: 20
  - Explain: Because it is postfix operator it prints then increment
  [-]
  - Explain: This is subtraction operator from arithmetic operators 
*/

/* Challenge 2 */
let d = "-100";
let e = "20";
let f = 30;
let g = true;
// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(-d + ++f + ++g * ++e ); // 173

// Replace ? With Arithmetic Operators
// console.log(10 ? 20 ? 15 ? 3 ? 190 ? 10 ? 400); // 0
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

let num = 3;
// Soluation One
console.log(num+num); // 6
// Solution 2
console.log(num*num-num); // 6
// Solution 3
console.log(num*num*num/num-num); // 6
// Solution 4
console.log(num**num / num - num); // 6
// Solution 5
console.log(+num * +num + -num); // 6
// Solution 6
console.log(++num ** ++num % num * num % --num + --num + num); // 6

let number = "10";
// Solution 1
console.log(+number + +number); // 20
// Solution 2
console.log(+number + +number - number + +number); // 20
// Solution 3
console.log(+number * +number / number + +number); // 20
// Solution 4
console.log(+number / +number * number + +number); // 20
// Solution 5
console.log(+number - +number + +number + +number); // 20

let points = 10;
points += +true + +true;
points++;

console.log(points); // 13

--points;
points -= (true + true) * (true  + true);

console.log(points); // 8