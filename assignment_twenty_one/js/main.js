/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/

/*
  JSON
  - API Overview
  - Tools to test API
  - Preview github API
*/

/*
  JSON 
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/
const myJsonObjectFromServer = '{"username": "Anas", "age": 24}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject["username"] = "Banat";
myJsObject["age"] = 25;

const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);


/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous
// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");


// Asynchronus
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
  console.log("Web API");
}, 0);

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("Two");
}
function three() {
  two();
  console.log("Three");
}

three();

/*
  ================================
  console.log("One");
  ================================
  function one() {
    console.log("One");
  }
  ================================
  function two() {
    one();
    console.log("Two");
  }
  ================================
  function three() {
    two();
    console.log("Three");
  }
  ================================
*/

console.log("#".repeat(30));

console.log("One");

console.log("Two");

console.log("Three");

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;


/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);


/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "../js/test.json");
myRequest.open("GET", "https://api.github.com/users/anasbanat0/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);
  if(this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

/*******************************/
let httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+, etc.
  httpRequest = new XMLHttpRequest(); // AJAX
} else if (window.ActiveXObject) { // IE 6 and older
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
httpRequest.open('GET', '../js/articles.json', true);
httpRequest.send();
httpRequest.onreadystatechange = function(){
  // Process the server response here.
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      setTimeout(() => { console.log("Data Loaded!") }, 0);
      let mainData = JSON.parse(this.responseText);
      for (let i = 0; i < mainData.length; i++) {
        mainData[i]["category"] = "All";
      }
      console.log(mainData);
      let updatedData = JSON.stringify(mainData);
      console.log(updatedData);
      let mymainelement = document.createElement("div");
      mymainelement.id = "data";
      for (let i = 0; i < mainData.length; i++) {
        let div = document.createElement("div");
        let myHeading = document.createElement("h2");
        let para1 = document.createElement("p");
        let para2 = document.createElement("p");
        let para3 = document.createElement("p");
        let myHeadingtext = document.createTextNode(mainData[i]["title"]);
        let myPara1text = document.createTextNode(mainData[i]["author_name"]);
        let myPara2text = document.createTextNode(mainData[i]["category"]);
        let myPara3text = document.createTextNode(mainData[i]["content"]);
        myHeading.appendChild(myHeadingtext);
        para1.appendChild(myPara1text);
        para2.appendChild(myPara2text);
        para3.appendChild(myPara3text);
        div.appendChild(myHeading);
        div.appendChild(para1);
        div.appendChild(para2);
        div.appendChild(para3);
        mymainelement.appendChild(div);
      }
      document.body.appendChild(mymainelement);
    }
  }
};