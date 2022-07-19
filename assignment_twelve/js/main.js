/*
  DOM
  What is DOM?
  DOM Selectors
  --- find Element By ID
  --- find element by tag name
  --- find element by class name
  --- find element by css selectors
  --- find element by collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span.special");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElement);
console.log(myTagElement[1]);
console.log(myTagElement[1].innerHTML);
console.log(myClassElement);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement);
console.log(myQueryAllElement[0]);

console.log(document.title);
console.log(document.body);
console.log(document.images);
console.log(document.forms);
console.log(document.forms[0].one);
console.log(document.forms[2].one.value);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[0].href);

/*
  Dom [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "../images/Untitled.png";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img-fluid w-25";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https:twitter.com");
myLink.setAttribute("title", "Twitter");
myLink.setAttribute("target", "_blank");

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[2];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute('data-src');
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}


if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[2].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div has no attributes`);
}

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let createElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This is div");
createElement.className = "product";
createElement.setAttributeNode(myAttr);
createElement.setAttribute("data-test", "Testing");

// Append Comment To Element
createElement.appendChild(myComment);

// Append Text To Element 
createElement.appendChild(myText);

// Append Element To Bidy
document.body.appendChild(createElement);

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/
let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add heading Text
myHeading.appendChild(myHeadingText);

// Add Heading To Main Element
myMainElement.appendChild(myHeading);

// Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph To Main Element
myMainElement.appendChild(myParagraph);

myMainElement.className = 'product';

document.body.appendChild(myMainElement);

for(let i = 1; i<=100;i++){
  let myD = document.createElement("div");
  let myH= document.createElement("h3");
  let myP = document.createElement("p");
  let myText=document.createTextNode("product title " +[i] );
  let myT= document.createTextNode("paragraph discreption " +[i] );
  myD.className="prudoct";
  myH.appendChild(myText);
  myP.appendChild(myT);
  myD.appendChild(myH);
  myD.appendChild(myP);
  document.body.appendChild(myD);
}

/*
  DOM [Deal With Children]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement1 = document.querySelector(".div-parent");

console.log(myElement1);
console.log(myElement1.children);
console.log(myElement1.children[0]);
console.log(myElement1.childNodes);
console.log(myElement1.childNodes[0]);
console.log(myElement1.firstChild);
console.log(myElement1.lastChild);
console.log(myElement1.firstElementChild);
console.log(myElement1.lastElementChild);

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log(`Clicked`);
};
myBtn.oncontextmenu = function () {
  console.log(`Right Clicked`);
};
myBtn.onmouseenter = function () {
  console.log(`On Mouse Enter`);
};
myBtn.onmouseleave = function () {
  console.log(`On Mouse Leave`);
};

window.onscroll = function () {
  console.log(`Scroll`);
};
window.onresize = function () {
  console.log(`Resize`);
};

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[3].onsubmit = function (event) {
  let userVaild = false;
  let ageValid = false;
  console.log(userInput.value);
  console.log(userInput.value.length);
  if(userInput.value !== "" && userInput.value.length <= 10) {
    userVaild = true;
  }
  if(ageInput.value !== "") {
    ageValid = true;
  }
  if(userVaild === false || ageValid === false) {
    event.preventDefault();
  }
};

document.links[3].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};

let myDiv = document.querySelector("div#elzero");
console.log(myDiv);
let myDiv1 = document.querySelector("#elzero");
console.log(myDiv1);
let myDiv2 = document.querySelector(".element");
console.log(myDiv2);
let myDiv3 = document.querySelector("[name='js']");
console.log(myDiv3);
let myDiv4 = document.querySelectorAll("div#elzero");
console.log(myDiv4);
let myDiv5 = document.querySelectorAll("#elzero");
console.log(myDiv5);
let myDiv6 = document.querySelectorAll(".element");
console.log(myDiv6);
let myDiv7 = document.querySelectorAll("[name='js']");
console.log(myDiv7);
let myDiv8 = document.getElementById("elzero");
console.log(myDiv8);
let myDiv9 = document.getElementsByTagName("div");
console.log(myDiv9[4]);
let myDiv10 = document.getElementsByName("js");
console.log(myDiv10);
let myDiv11 = document.getElementsByClassName("element");
console.log(myDiv11);

let myImage = document.querySelectorAll(".group-images div img");

for(let i = 0; i < 10; i ++) {
  myImage[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  myImage[i].style.backgroundColor = "aqua";
  myImage[i].alt = "Elzero Logo";
}

let form_usd = document.querySelector("form input");
let usd = document.querySelector("form .result .usd");
let egypt = document.querySelector("form .result .egypt");

form_usd.oninput = () => {
  let inputvalue = document.querySelector("form input").value;
  usd.innerHTML = inputvalue;
  egypt.innerHTML = (inputvalue * 18.92).toFixed(2);
};

let one = document.querySelector(".one");
let two = document.querySelector(".two");

// one.getAttribute("class");

console.log(one.getAttribute("class"));
console.log(one.getAttribute("title"));

if(one.getAttribute("class") === one.getAttribute("title") && one.innerText === "One") {
  console.log(`true`);
} else {
  one.setAttribute("class", "one");
  one.setAttribute("title", "one");
  one.innerText = "One";
}
if(two.getAttribute("class") === two.getAttribute("title") && two.innerText === "Two") {
  console.log(`true`);
} else {
  two.setAttribute("class", "two");
  two.setAttribute("title", "two");
  two.innerText = "Two 2";
}

let images = document.querySelectorAll(".images img");

for (let i = 0; i < images.length; i++) {
  if(images[i].hasAttribute("alt")) {
    images[i].setAttribute("alt", "old");
  } else {
    images[i].setAttribute("alt", "Elzero New");
  }
}

let elementNumber = document.querySelector('[name="elements"]');
let elementText = document.querySelector('[name="texts"]');
let elementType = document.querySelector('[name="type"]');
let submit = document.querySelector('[type="submit"]');
let result = document.querySelector('.results');
result.style = "display: flex; justify-content: space-between; flex-wrap: wrap";

submit.onclick = function(event) {
    let typeOfElement;
    elementType.value === 'Div' ? typeOfElement = "div" : typeOfElement = "section";
    // remove childs 
    result.innerHTML = '';
    // Creat And Append New Child
    let number = elementNumber.value;
    for (let i = 1; i <= number; i++) {
        if (typeOfElement === "div") {
            let newElement = document.createElement('div');
            newElement.className = "box";
            newElement.title = "element";
            newElement.id = `id_${i}`;
            newElement.textContent = elementText.value;
            newElement.style = "width: calc(100% / 4); padding: 10px 5px; background-color: aqua; border: 2px solid black; text-align: center; margin: 20px 0"
            result.appendChild(newElement);
        } else {
            let newElement = document.createElement('section');
            newElement.className = "box";
            newElement.title = "element";
            newElement.id = `id_${i}`;
            newElement.textContent = elementText.value;
            newElement.style = "width: calc(100% / 4); padding: 10px 5px; background-color: aqua; border: 2px solid black; text-align: center; margin: 20px 0"
            result.appendChild(newElement);
        }
    }
    event.preventDefault();
};