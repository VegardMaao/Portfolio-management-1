export function createPortfolio(container, array) {
    for (let i = 0; i < array.length; i++) {
        container.innerHTML += `
        <div class="portfolio-item">
                    <h3>${array[i].title}</h3>
                    <a href="${array[i].websiteLink}" target="_blank">
                        <img src="${array[i].imageUrl}" alt="${array[i].title}" class="thumbnail">
                    </a>
                    <p>${array[i].description}</p>
                    <div class="portfolio-links">
                    <p><a href="${array[i].gitHubLink}" target="_blank">GitHub</a></p>
                    <p><a href="${array[i].websiteLink}" target="_blank">Live Site</a></p>
                    </div>
                </div>
        `;
    }
}