export function createNavigation(container, array) {
    for (let i = 0; i < array.length; i++) {
        container.innerHTML += `<li><a href="${array[i].link}" target="${array[i].target}">${array[i].title}</a></li>`;
    }
}