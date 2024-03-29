// export const portfolioItems = [{
//     title: "Project Exam 1",
//     imageUrl: "/images/loppasbigblog.jpg",
//     description: "This is the most recent project that I have made, and the one most representative of my current skillset. The site was made using vanilla HTML, CSS and JS, as well as the WordPress REST API to manage content.",
//     gitHubLink: "https://github.com/Noroff-FEU-Assignments/project-exam-1-VegardMaao",
//     websiteLink: "https://loppasbigblog.netlify.app/"
// },{
//     title: "Cross-Course Project",
//     imageUrl: "/images/cross-course.jpg",
//     description: "The Cross-Course Project was made as part of several assignments at Noroff, all the way from design and basic HTML/CSS to dynamically creating pages using JS and the WP REST API (managing content using WooCommerce).",
//     gitHubLink: "https://github.com/VegardMaao/html-and-css-CA_Vegard-Maaoe",
//     websiteLink: "https://ecstatic-jackson-e63b3f.netlify.app/"
// }, { 
//     title: "Semester Project 2022",
//     imageUrl: "/images/comscimuseum.jpg",
//     description: "This was a fun project! The assignment was making a site for a children's science museum, using basic HTML and CSS. I added some JavaSCript, but it was not part of the assignment. The JS isn't good, but I learned a lot.",
//     gitHubLink: "https://github.com/VegardMaao/semester_project_spring22_vegard_maao",
//     websiteLink: "https://comscimuseum.netlify.app/"
// }]  


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
const crossCourseProject = createPortfolioItem("Cross-Course Project", "/images/cross-course.jpg", "The Cross-Course Project was made as part of several assignments at Noroff, all the way from design and basic HTML/CSS to dynamically creating pages using JS and the WP REST API (managing content using WooCommerce).", "https://github.com/VegardMaao/html-and-css-CA_Vegard-Maaoe", "https://ecstatic-jackson-e63b3f.netlify.app/")
const semesterProject22 = createPortfolioItem("Semester Project 2022", "/images/comscimuseum.jpg", "This was a fun project! The assignment was making a site for a children's science museum, using basic HTML and CSS. I added some JavaSCript, but it was not part of the assignment. The JS isn't good, but I learned a lot.", "https://github.com/VegardMaao/semester_project_spring22_vegard_maao", "https://comscimuseum.netlify.app/");

portfolioItems.push(projectExamOne, crossCourseProject, semesterProject22);