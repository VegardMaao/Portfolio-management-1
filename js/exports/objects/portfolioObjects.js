export const portfolioItems = [];

function createPortfolioItem(title, imageUrl, description, gitHubLink, websiteLink) {
    return{
    title: title,
    imageUrl: imageUrl,
    description: description,
    gitHubLink: gitHubLink,
    websiteLink: websiteLink
    }
}

const projectExamOne = createPortfolioItem("Project Exam 1", "/images/loppasbigblog.jpg", "This is the most recent project that I have made, and the one most representative of my current skillset. The site was made using vanilla HTML, CSS and JS, as well as the WordPress REST API to manage content.", "https://github.com/Noroff-FEU-Assignments/project-exam-1-VegardMaao", "https://loppasbigblog.netlify.app/");
const crossCourseProject = createPortfolioItem("Cross-Course Project", "/images/cross-course.jpg", "The Cross-Course Project was made as part of several assignments at Noroff, all the way from design and basic HTML/CSS to dynamically creating pages using JS and the WP REST API (managing content using WooCommerce).", "https://github.com/VegardMaao/html-and-css-CA_Vegard-Maaoe", "https://ecstatic-jackson-e63b3f.netlify.app/");
const frameworksAssignment = createPortfolioItem("React Project 1", "/images/frameworks-assignment.jpg", "My first React project. I have used Zustand for state management, and the backend is hosted by Noroff Fagskole.", "https://github.com/VegardMaao/front-end-frameworks-CA-Vegard-Maaoe", "https://frameworkscavegardmaaoe.netlify.app/");

portfolioItems.push(projectExamOne, crossCourseProject, frameworksAssignment);