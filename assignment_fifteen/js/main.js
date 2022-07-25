/*
  BOM [Browser Object Model]
  local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration
  - HTTP And HTTPS
  - Private Tab
*/

// Set
// window.localStorage.setItem("color", "#f00");
// window.localStorage.fontWeight = "bold";
// window.localStorage['fontSize'] = "20px";

// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage['color']);

// Remove One Key
// window.localStorage.removeItem("color");

// Remove All Keys Value
// window.localStorage.clear();

// Get Key
// console.log(window.localStorage.key(0));

// Set Color In Page
// document.body.style.backgroundColor = window.localStorage.color;

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector("#exp");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - new tab = new session
  - duplicate tab = copy session
  - new tab with same url = new session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   // console.log(this.value);
//   window.localStorage.setItem("input-name", this.value);
// };
// window.localStorage.clear();

const inputVal = document.getElementsByClassName('input')[0];
const addTaskBtn = document.getElementsByClassName('add')[0];

addTaskBtn.addEventListener('click', function () {
	if(inputVal.value.trim()!=0) {
		let localItems = JSON.parse(localStorage.getItem('localItem'));
		if (localItems === null) {
			taskList = [];
		} else {
			taskList = localItems;
		}
		taskList.push(inputVal.value);
		localStorage.setItem('localItem', JSON.stringify(taskList)); 
	}
	showItem();
});

function showItem() {
	let localItems = JSON.parse( localStorage.getItem('localItem'));
	if(localItems === null){
		taskList = [];
	}else{
		taskList = localItems;
	}
	let html = '';
	let itemShow = document.querySelector('.tasks');
	taskList.forEach((data, index )=> {
		html += `
			<div class="todoList" style="background-color: white; padding: 10px 20px; margin-bottom: 10px; display:flex; justify-content: space-between;">
				<p class="pText">${data}</p>
				<button class="deleteTask" style="background-color: red; border: 2px solid #ddd; padding: 7px 15px; border-radius: 20px; font-weight: 400; font-size: 18px; cursor: pointer;" onClick="deleteItem(${index})">Delete</button>
			</div>
		`
	});
	itemShow.innerHTML = html;
}
showItem();
function deleteItem(index) {
	let localItems = JSON.parse( localStorage.getItem('localItem'));
	taskList.splice(index, 1);
	localStorage.setItem('localItem', JSON.stringify(taskList));
	showItem();
}

/*******************************************/

let mySel1 = document.getElementById("colors");
let mySel2 = document.getElementById("fonts");
let mySel3 = document.getElementById("sizes");

mySel1.addEventListener("change", (e) => {
	document.body.style.color = e.currentTarget.value;
	window.localStorage.setItem("colors", e.currentTarget.value);
});
if (window.localStorage.getItem("colors")) {
	mySel1.value = window.localStorage.getItem("colors");
	document.body.style.color = window.localStorage.getItem("colors");
};
mySel2.addEventListener("change", (e) => {
	document.body.style.fontFamily = e.currentTarget.value;
	window.localStorage.setItem("fontFamily", e.currentTarget.value);
});
if (window.localStorage.getItem("fontFamily")) {
	mySel2.value = window.localStorage.getItem("fontFamily");
  document.body.style.fontFamily = window.localStorage.getItem("fontFamily");
}
mySel3.addEventListener("change", (e) => {
	document.body.style.fontSize = e.currentTarget.value;
	window.localStorage.setItem("fontSize", e.currentTarget.value);
});
if (window.localStorage.getItem("fontSize")) {
	mySel3.value = window.localStorage.getItem("fontSize");
  document.body.style.fontSize = window.localStorage.getItem("fontSize");
}

/******************************************/

let color = document.getElementById("color");
let text = document.getElementById("text");
let email = document.getElementById("email");
let num = document.getElementById("num");

color.addEventListener("change", (e) => {
	document.body.style.backgroundColor = e.currentTarget.value;
	window.sessionStorage.setItem("color", e.currentTarget.value);
});
if (window.sessionStorage.getItem("color")) {
	color.value = window.sessionStorage.getItem("color");
	document.body.style.backgroundColor = window.sessionStorage.getItem("color");
};
text.addEventListener("input", (e) => {
	window.sessionStorage.setItem("text", e.currentTarget.value);
});
if (window.sessionStorage.getItem("text")) {
	text.value = window.sessionStorage.getItem("text");
};
email.addEventListener("input", (e) => {
	window.sessionStorage.setItem("email", e.currentTarget.value);
});
if (window.sessionStorage.getItem("email")) {
	email.value = window.sessionStorage.getItem("email");
};
num.addEventListener("input", (e) => {
	window.sessionStorage.setItem("number", e.currentTarget.value);
});
if (window.sessionStorage.getItem("number")) {
	num.value = window.sessionStorage.getItem("number");
};
