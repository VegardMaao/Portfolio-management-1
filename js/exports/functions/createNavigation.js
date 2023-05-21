export function createNavigation(container, array) {
    for (let i = 0; i < array.length; i++) {
        container.innerHTML += `<li><a href="${array[i].link}">${array[i].title}</a></li>`;
    }
}