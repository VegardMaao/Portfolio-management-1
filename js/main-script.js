import { createNavigation } from "./exports/functions/createNavigation.js";
import { navItems } from "./exports/objects/navigaitonObjects.js";

const navContainer = document.querySelector(".nav_ul");

createNavigation(navContainer, navItems);

