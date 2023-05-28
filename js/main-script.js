import { createNavigation } from "./exports/functions/createNavigation.js";
import { navItems } from "./exports/objects/navigaitonObjects.js";
import { footerItems } from "./exports/objects/footerObjects.js";
const navContainer = document.querySelector(".nav_ul");
const footerContainer = document.querySelector(".cs_ul");
createNavigation(navContainer, navItems);
createNavigation(footerContainer, footerItems);

import { createPortfolio } from "./exports/functions/createPortfolio.js";
import { portfolioItems } from "./exports/objects/portfolioObjects.js";
const portfolioContainer = document.querySelector(".portfolio-container");
createPortfolio(portfolioContainer, portfolioItems);

import { closeMenu } from "./exports/functions/closeMenuOnClick.js";
const menuCheckBox = document.querySelector("#hamburger_menu");
const menuIcon =  document.querySelector("#menu_icon");
const navUl = document.querySelector(".nav_ul");
const nodeList = navUl.childNodes;
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener("click", e  => {
        closeMenu(menuCheckBox);
    })
}
window.addEventListener("click", e => {
    if (e.target === menuCheckBox || e.target === menuIcon || e.target === navUl){
        return;
    }
    closeMenu(menuCheckBox);
})

import { validateAllInputs } from "./exports/functions/validateForm.js";
import { emailRegExTest } from "./exports/functions/validateForm.js";
import { validateTextInputLength } from "./exports/functions/validateForm.js";
import { submitForm } from "./exports/functions/submitForm.js";
import { characterCount } from "./exports/functions/characterCounter.js"; 
const allFormInputs = document.querySelector("fieldset").elements;
const formField = document.querySelector("form");
const nameInput = document.querySelector("#your-name");
const emailInput = document.querySelector("#your-email");
const subjectInput = document.querySelector("#your-subject");
const messageInput = document.querySelector("#your-message");
const counter = document.querySelector(".counter");
const maxMsgLength = document.querySelector(".max-val");
const submitMessageBtn = document.querySelector(".submit");

const message = `<p>Your message has been sent!</p>`;
const contactURL = `https://sellmo.no/Flower_Power/wp-json/contact-form-7/v1/contact-forms/379/feedback`;

messageInput.textContent = "";
characterCount("", counter, maxMsgLength, 500)

nameInput.onkeyup = (e) => {validateTextInputLength(nameInput, 4, 30),  validateAllInputs(allFormInputs, submitMessageBtn)};
emailInput.onkeyup = (e) => {validateTextInputLength(emailInput, 3, 50), emailRegExTest(emailInput), validateAllInputs(allFormInputs, submitMessageBtn)};
subjectInput.onkeyup = (e) => {validateTextInputLength(subjectInput, 3, 25),  validateAllInputs(allFormInputs, submitMessageBtn)};
messageInput.onkeyup = (e) => {validateTextInputLength(messageInput, 25, 500),  validateAllInputs(allFormInputs, submitMessageBtn), characterCount(messageInput.value, counter, maxMsgLength, 500, 25)};

submitMessageBtn.onclick = (e) => {
    submitForm(e, formField, contactURL, formField, message);
  }