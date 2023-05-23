export function createPortfolio(container, array) {
    for (let i = 0; i < array.length; i++) {
        container.innerHTML += `
        <div class="portfolio-item">
                    <h3>${array[i].title}</h3>
                    <img src="${array[i].imageUrl}" alt="${array[i].title}" class="thumbnail">
                    <p>${array[i].description}</p>
                    <p><a href="${array[i].gitHubLink}">GitHub</a></p>
                    <p><a href="${array[i].websiteLink}">Live Site</a></p>
                </div>
        `;
    }
}