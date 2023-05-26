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

// import  { fixedNav } from "./exports/functions/stickyHeader.js"
// const header = document.querySelector("header");
// let position = header.offsetTop;
// window.addEventListener("scroll", e => {
//     console.log(position) 
//     console.log(window.scrollY)
//     fixedNav(header, position)
// });

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
