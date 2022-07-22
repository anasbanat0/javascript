/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------- Test Document And Console
  - What Can We Do With Window Object?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.console.log(`Good`);
window.document.title = "Hello Week 14";

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("test");

// let confirmMsg = confirm("Are you Sure?");
// console.log(confirmMsg);

// if(confirmMsg === true) {
//   console.log(`Item has been deleted`);
// }else {
//   console.log(`Item has not been deleted`);
// }

// let promptMsg = prompt("Good Day To You?", "Write day with 3 characters");
// console.log(promptMsg);

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Parmaters)
  - clearTimeout(Identifier)
*/
// setTimeout(function() {
//   console.log(`Msg`);
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg () {
//   console.log(`I am Message`);
// }

// setTimeout(sayMsg, 3000, "Anas", 24);

// function sayMsg (user, age) {
//   console.log(`I am Message For ${user} Your age is ${age}`);
// }

let counter = setTimeout(sayMsg, 3000);

function sayMsg () {
  console.log(`I am Message`);
}
let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
}
/*
  BOM [Browser Object Model]
  - setInterval(Function, Milliseconds, Additional Parmaters)
  - clearInterval(Identifier)
*/
// setInterval(function() {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg () {
//   console.log(`I am Message`);
// }

// setInterval(sayMsg, 1000, "Anas", 24);

// function sayMsg (user, age) {
//   console.log(`I am Message For ${user} Your age is ${age}`);
// }

let div = document.querySelector(".div");

function countdown() {
  div.innerHTML -=1;
  if(div.innerHTML === "0") {
    clearInterval(counter1);
  }
}

let counter1 = setInterval(countdown, 1000);

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/
console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "#sec02";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);
console.log(location.hash);

/*
  BOM [Browser Object Model]
  - open (URL [Option], Window Name Or Target Attr [Option], Win Features [Option], History Relace)
  - close()
  - Window Features
  --- width [Num]
  --- height [Num]
  --- left [Num]
  --- top [num]

  Search
  - Window.open Window Features
*/

setTimeout(function () {
  // window.open("https://google.com", "_blank", "width=400, height=400, left=200, top=100");
}, 2000);

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/
console.log(history);
console.log(history.length);

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

window.scrollTo({
  left: 500,
  top: 200,
  behavior: "smooth"
});

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let btn1 = document.querySelector(".up");

window.onscroll = function () {
  if(window.scrollY >= 600) {
    btn1.style.display = "block";
  }else {
    btn1.style.display = "none";
  }
};

btn1.onclick = function () {
  window.scrollTo ({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
};

/******************************* */

// let prompt0 = prompt("Print Numner From - To", "5-20");

// let start = parseInt(prompt0.split("-").slice(0,1).toString());
// let end = parseInt(prompt0.split("-").slice(1,2).toString());

// if(start > end) {
//   for(let i = end; i <= start; i++) {
//     console.log(`${i}`)
//   }
// }else {
//   for(let i = start; i <= end; i++) {
//     console.log(`${i}`)
//   }
// }

/************************ */

let popup = document.getElementById("popup");
setTimeout(function () {
  popup.style.display = "block";
}, 5000);

let popupBTN = document.getElementById("popup-btn");
popupBTN.onclick = function () {
  popup.style.display = "none";
}

/********************** */
let div10 = document.getElementById("div");

function counters() {
  div10.innerHTML -= 1;
  if(div10.innerHTML === "2") {
    // location.href = "https://elzero.org";
  }
  if(div10.innerHTML === "5") {
      window.open("https://elzero.org", "_blank", "width=400, height=400, left=200, top=100");
  }
  if(div10.innerHTML === "0") {
    clearInterval(counter2);
  }
}
let counter2 = setInterval(counters, 200);

/****************************** */

