//1.- Declara una funcion getAllBreeds que devuelva todas las razas de perro.
function getAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res=>res.json())
    .then(data=>Object.keys(data.message))
}

//2.- Declara una función getRandomDog que obtenga una imagen random de una raza.
function getRandomDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(data=>data.message)
}

//3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de una raza.
function getAllImagesByBreed() {
    return fetch('https://dog.ceo/api/breed/african/images')
    .then(res=>res.json())
    .then(data=>data.message)
}

//4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento


//5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).
function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res=>res.json())
    .then(data=>data);
}

//6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.
function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res=>res.json())
    .then(function(data) {
        const imgSrc = data.avatar_url;
        const name = data.name;
        const myImg = document.createElement("img");
        const myP = document.createElement("p");
        myImg.setAttribute("src", imgSrc);
        myP.innerHTML = name;
        document.body.appendChild(myImg);
        document.body.appendChild(myP);
        return {imgSrc, name};
    })
}

//7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:
function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res=>res.json())
    .then(function(data) {
        return `<section>
                    <img src="${data.avatar_url}" alt="imagen de ${data.name}">
                    <h1>${data.name}</h1>
                    <p>Public repos: ${data.public_repos}</p>
                </section>`
    })
}

console.log(printGithubUserProfile('Radu-A'));