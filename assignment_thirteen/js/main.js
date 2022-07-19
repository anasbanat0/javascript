/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let one = document.querySelector('.one');
let two = document.querySelector('.two');
window.onload = function () {
  two.focus();
};

one.onblur = function() {
  document.links[0].click();
};
/*
  DOM [Class List]
  - classlist
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("0"));
console.log(element.classList.item(2));

element.onclick = function () {
  this.classList.toggle("show");
}

/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, stylesheet]
  - setProperty(propertyName, value, priority)
*/

element.style.color = "red";
element.style.backgroundColor = "#444";
element.style.fontWeight = "600";

element.style.cssText = "font-weight: bold; color: aqua; opacity: 0.9; background-color: #555";

element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");
document.styleSheets[0].cssRules[0].style.removeProperty("line-height");
document.styleSheets[0].cssRules[0].style.setProperty("line-height", "3");

/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let createP = document.createElement("p");
element.before("Hello From JS");
element.after("Hello From JS");
element.after(createP);
element.append("hello world");
element.prepend("hello world");

// element.remove();

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
let span = document.querySelector(".two");
console.log(span.nextSibling)
console.log(span.nextElementSibling)

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myP = document.querySelector("p")//.cloneNode(true);
let myDiv = document.querySelector("div");
myP.id = `${myP.id}-clone`;
myDiv.appendChild(myP);

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

myP.addEventListener("click", function() {
  console.log(`Message From OnClick 1 Event`);
});
// myP.addEventListener("click", "string"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("I am Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === 'clone') {
    console.log("I am cloned")
  }
});

let inputAdd = document.querySelector(".classes-to-add");
let inputRemove = document.querySelector(".classes-to-remove");
let myDiv1 = document.querySelector(".classes-list div");
let Current = document.querySelector("[title = 'Current']");



function addAndRemove() {
  document.querySelectorAll("span").forEach((ele) => ele.remove());
  for (let i = 0; i < this.value.split(" ").length; i++) {
    if (inputAdd.value.length > 0) {
      Current.classList.add(inputAdd.value.toLowerCase().split(" ")[i]);
    }
    if (inputRemove.value.length > 0) {
      Current.classList.remove(inputRemove.value.toLowerCase().split(" ")[i]);
    }
  }
  addClassesToSpan();
  this.value = "";
}

function addClassesToSpan() {
  if (Current.classList.length === 0) {
    myDiv1.textContent = "No Classes To Show";
  } else {
    myDiv1.textContent = "";
    Current.classList.value.split(" ").sort().forEach((element) => {
        let myspan = document.createElement("span");
        myspan.className = `${element}-span`;
        myspan.append(element);
        myDiv1.append(myspan);
    });
  }
}
addClassesToSpan();
inputAdd.onblur = addAndRemove;
inputRemove.onblur = addAndRemove;