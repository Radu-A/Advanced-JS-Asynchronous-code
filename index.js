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
                .catch(error=>console.log(error))
}

//3.- Declara una función getAllImagesByBreed que obtenga todas las imágenes de una raza.
async function getAllImagesByBreed() {
    return fetch('https://dog.ceo/api/breed/african/images')
                .then(res=>res.json())
                .then(data=>console.log(data.message))
                .catch(error=>console.log(error))
}

//4.- Declara una funcion getAllImagesByBreed2(breed) que devuelva las imágenes de la raza pasada por el argumento
async function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
                .then(res=>res.json())
                .then(data=>data.message)
                .catch(error=>console.log(error))
}

//5.- Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).
function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
            .then(res=>res.json())
            .then(data=>data)
            .catch(error=>console.log(error))
}

//6.- Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.
function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(function(data) {
            const mySection = document.getElementById("mySection");
            const img = data.avatar_url;
            const name = data.name;
            const profileCard = {imgSrc: img, name};
            //mejor con desestructuración
            //const {avatar_url:imgSrc, name} = data;
            const myImg = document.createElement("img");
            const myP = document.createElement("p");
            myImg.setAttribute("src", img);
            myP.innerHTML = name;
            mySection.appendChild(myImg);
            mySection.appendChild(myP);
            return profileCard;
        })
        .catch(error=>console.log(error))
}

//7. Crea una función getAndPrintGitHubUserProfile(username) que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:
function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(res=>res.json())
    .then(function(data) {
        let cardText = `<section>
                    <img src="${data.avatar_url}" alt="imagen de ${data.name}">
                    <h1>${data.name}</h1>
                    <p>Public repos: ${data.public_repos}</p>
                </section>`
        document.querySelector("main").innerHTML += cardText;
        return cardText;
    })
    .catch(error=>console.log(error))
}



//8
let input = document.querySelector("#input");
let button = document.querySelector('#button');

button.addEventListener("click", function () {
    let username = input.value;
    getAndPrintGitHubUserProfile(username);
})

//9
//crear arrray de usuarios de github
let arrUsersGitHub = ['alvaro3c', 'Radu-A', 'mariogiron'];
let promiseArray = [];
for (let i = 0; i < arrUsersGitHub.length; i++) {
    promiseArray.push(fetch(`https://api.github.com/users/${arrUsersGitHub[i]}`))
    
}

Promise.all(promiseArray)
    .then(function(data) {
    for (let i = 0; i < data.length; i++) {
        fetch(data[i].url)
            .then(res => res.json())
            .then(json => console.log(json.name))
    }
});


