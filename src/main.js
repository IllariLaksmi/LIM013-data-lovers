import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

//Insertando un nuevo nodo
let i = 0;
while (i <= 256) {
    const container = document.getElementById("container");
    const cardNew = document.createElement("div");
    const image1 = document.createElement("img");
    const text1 = document.createElement("h2")
    cardNew.className = "card";
    image1.className = "imageContainer";
    image1.setAttribute("src", "https://www.serebii.net/pokemongo/pokemon/001.png", )
    text1.textContent = "Bulbasaur";
    cardNew.appendChild(image1);
    cardNew.appendChild(text1);
    container.appendChild(cardNew);
    i++
}

//Filtrando por tipo
const typeButton = document.getElementsByClassName("type");

for (var i = 0; i < typeButton.length; i++) {
    typeButton[i].addEventListener("click", function(event) {
        let dataType = event.target.getAttribute("data-type");
        typeShow(dataType);
    })
}

function typeShow(e) {
    data.pokemon.forEach(element => {
        if (element.type.includes(e)) {
            document.getElementById("galery").innerHTML += element.name + " ";
        }
    });
}