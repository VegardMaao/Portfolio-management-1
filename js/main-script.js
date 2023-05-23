import { createNavigation } from "./exports/functions/createNavigation.js";
import { navItems } from "./exports/objects/navigaitonObjects.js";

const navContainer = document.querySelector(".nav_ul");

createNavigation(navContainer, navItems);

import { createPortfolio } from "./exports/functions/createPortfolio.js";
import { portfolioItems } from "./exports/objects/portfolioObjects.js";

const portfolioContainer = document.querySelector(".portfolio-container");

createPortfolio(portfolioContainer, portfolioItems);