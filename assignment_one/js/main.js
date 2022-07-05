/**
 * Console Methods
 * log
 * error
 * table
 * 
 * WEb API
 * 
 * Styling Console
 * - Directive %c only two times
**/
console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
console.log("Multiple styles: %cred %corange", "color: red", "color: orange", "Additional unformatted message");

/********************************* */
document.write("<h1 class='elm'>Elzero</h1>");
var el = document.querySelector(".elm");
el.style = "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial";

/****************************** */
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;", "color: green; font-size: 40px; font-weight: bold;", "color: blue; font-size: 40px;");

/****************************** */
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.warn("More of level 3");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

/*************************** */
console.table(["Anas", "Ali", "Deeb", "Hasan", "Banat"]);

/************************** */

/*console.log("I am in console");*/
// document.write("I am in page");