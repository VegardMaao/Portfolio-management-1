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