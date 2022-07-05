/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Boolean
  - Object
  - Undefined
*/
console.log("Anas Banat");
console.log(typeof "Anas Banat");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof true);
console.log(typeof ['An', 'Ba', "As"]);
console.log(typeof {name: "Anas", age: 24, country: 'PS'});
console.log(typeof undefined);
console.log(typeof null);
/*
  Variables Intro
  - What is Variable?
  - Why we use variables?
  - Declare a variable and use
  - Syntax (Keyword | Variable Name | Assignment Operator | Variable Value)
  - Variable without var
  - Multiple variables in the same line
  - Id and Global variable
  - loosely typed vs strongly typed
*/
/*
  Identifiers
  - name Conventions And Rules
  - Reserved Words
*/
var user = "Anas", age = 24;
console.log(user);
console.log(age);
// console.log(hello);
hello.innerHTML = "Option";
/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block or Function Scope

  Let
  - Redeclare (No)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block or Function Scope

  Const
  - Redeclare (No)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block or Function Scope
*/
/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/
console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log('Elzero \\Web\\ \'School\'');
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");

/*
  Concatenation
*/
let a = "We love";
let b = "JavaScript";
document.write(a + b);
console.log(a, b);
/*
  Template Literals (Template strings)
*/
let aa = "We love";
let bb = "JavaScript";
let cc = "And";
let dd = "Programming";
console.log(aa+" "+bb+" "+cc+" "+dd);
console.log(`${aa} ${bb} ${cc} ${dd}`);
console.log(`${100*40}`);
let title = "Elzero";
let desc = "Elzero Web School";
let markup = `
  <div class="card">
    <div class="card-head">
      <h3 class="card-title">${title}</h3>
    </div>
    <div class="card-body">
      <p>${desc}</p>
    </div>
  </div>
`;
document.write(markup);
/*
  ==========================================
  == Variable And Concatenation Challenge ==
  ==========================================

  [1] Create 3 Variables [Title, Description, Date]
  -- All In One Statement
  -- Variable Name Must Be Two Words
  -- Title Content Is "Elzero"
  -- Description Content Is "Elzero Web School"
  -- Date Content Is "25/10"
  [2] Create Variable Contains Div And This Div Contains
  -- H3 For Title
  -- P For Paragraph
  -- Span For Time
  [3] Add This Card To Page 4 Times
  [4] Use Template Literals For Concatenate
*/
let title1 = "Elzero", description = "Elzero Web School", time = "25/10";
let markup2 = `
  <div class="card">
    <h3>hello ${title1}</h3>
    <p>${description}</p>
    <span>${time}</span>
  </div>
`;
document.write(markup2.repeat(4));

let number1 = 10, number2 = 20;
console.log(number1+""+number2);
console.log(typeof (number1+""+number2));
console.log(`${number1}${number2}`);
console.log(typeof`${number1}${number2}`);
console.log(number2+"\n\
"+number1);
console.log(`${number2}
${number1}`);
console.log(elzero.innerHTML);
console.log(typeof elzero);
console.log("'I'm In \n\
\\\\\n\
Love \\\\ \"\"\" '''\n\
++ With ++\n\
\\\"\"\"\\\"\"\"\n\
\"\"JavaScript\"\"''");

// _21_2021_2021_2021_20_
// _a_ba_ba_ba_b_
let aaa = 21, bbb = 20;
console.log(`_${(aaa+"_"+bbb).repeat(4)}_`);