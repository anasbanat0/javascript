// DOM challenge

let header = document.createElement("header");
let logo = document.createElement("div");
let logoText = document.createTextNode("Elzero");
let menu = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let service = document.createElement("li");
let contact = document.createElement("li");
let homeText = document.createTextNode("home");
let aboutText = document.createTextNode("about");
let serviceText = document.createTextNode("service");
let contactText = document.createTextNode("contact");
let content = document.createElement("div");

//================= start header ===================
header.className = "website-head";
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; background-color: rgb(245 245 245); padding: 10px";
header.appendChild(logo);
header.appendChild(menu);
// logo
logo.className = "logo";
logo.setAttribute("title", "website logo");
logo.style = "font-weight: bold; font-size: 25px; color: green"
logo.appendChild(logoText);
// menu
menu.className = "menu";
menu.style.cssText = "list-style: none; display: flex; justify-content: space-evenly; padding: 0";
home.style = "margin-right: 10px; text-transform: capitalize";
about.style = "margin-right: 10px; text-transform: capitalize";
contact.style = "margin-right: 10px; text-transform: capitalize";
service.style = "margin-right: 10px; text-transform: capitalize";
home.appendChild(homeText);
about.appendChild(aboutText);
contact.appendChild(contactText);
service.appendChild(serviceText);
menu.appendChild(home);
menu.appendChild(about);
menu.appendChild(service);
menu.appendChild(contact);
// ============== start content ==============
let numberOfProduct = 15;
for (let i = 1; i <= numberOfProduct; i++) {
    let product = document.createElement("div");
    let productNum = document.createElement("span");
    let productText = document.createTextNode("product");
    content.style = "padding: 20px; display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; background-color: #EDECED";
    content.setAttribute("class", 'content');
    product.className = "product"
    product.style = "width: 28%; text-align: center; padding: 20px; background-color: white; border-radius: 10px";
    productNum.innerText = i;
    productNum.style = "display: block; margin: 5px; font-size: 25px"
    content.appendChild(product);
    product.appendChild(productNum);
    product.appendChild(productText);
}
// ============== start footer ==============
let footer = document.createElement("footer");
let copyright = document.createTextNode("Copyright 2022");
footer.className = "footer";
footer.style = "background-color: green; text-align: center; padding: 20px; color: white; font-size: 20px; font-weight: bold";
footer.appendChild(copyright);
// =================== append child in body =================
document.body.style = "margin: 0; padding: 0; box-sizing: border-box";
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);