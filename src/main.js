import { dataUtilities } from './data.js';
import data from "./data/pokemon/pokemon.js";

//Declaracion de variables globales
const typeButton = document.getElementsByClassName("type");
const counterType = document.getElementById("counter-type");
const buttonMenuTypes = document.getElementById("menu-button");
const buttonClosed = document.getElementById("closed");
const inputSearch = document.getElementById("search");
const orderAz = document.getElementById("a-z");
const orderZa = document.getElementById("z-a");
const orderDirect = document.getElementById("direct");
const orderReverse = document.getElementById("reverse");
const orderStrongest = document.getElementById("stronger");
const orderWeakest = document.getElementById("weakest");
const versusButton = document.getElementById("boton-versus");
const randomizePokemon = document.getElementById("random");
const containerGalery = document.getElementById("container-galery");
const pokeCardContainer = document.getElementById("pokeCardContainer");
const helpButton = document.getElementById("helpButton");

//Mostrar las cartas en la galería
const showCards = (dataArr) => {
    containerGalery.innerHTML = "";
    dataArr.forEach((element) => {
        const templateCards = `
            <div class="card ${element.type}" id="${element.name}">
            <img src="${element.img}" class="imageContainer">
            <p class="">${element.name}</p>
            </div>
            `;
        containerGalery.innerHTML += templateCards});
    showPokeCards(dataArr);
}

//Filtrar por showPokeCards(pokemonDataByType);tipo
const filterPokemonByType = (pokemonType) => {
    let pokemonDataByType = dataUtilities.filterByType(pokemonType);
    const templateCards = `
    <div class="sticker">
    <img src="images/types/${pokemonType}.png">
    <p class="sticker-type">${pokemonType}: ${pokemonDataByType.length}</p>
    <img src="images/closed-new.png" id="closed-sticker">
    </div>
    `
    let gallery = document.getElementById("container-galery")
    gallery.childNodes.classList.add("hide");
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");
    let divType = gallery.createElement('div');
    divType.classList.remove("hide");
    divType.classList.add("display");
    divType.innerHTML = templateCards;

    const buttonRemove = document.getElementById("closed-sticker");
    buttonRemove.addEventListener("click", () => {
        let gallery = document.getElementById("container-galery")
        counterType.innerHTML = "";
        gallery.removeChild(divType);
        gallery.childNodes.classList.remove("hide");
        gallery.childNodes.classList.add("display");
    })

    showCards(pokemonDataByType);
}

//Mostrar el menú hamburguesa
buttonMenuTypes.addEventListener("click", () => {
    document.getElementById("modal-menu").classList.add("display");
    document.getElementById("modal-menu").classList.remove("hide");
});

//Cerrar menu hamburguesa
buttonClosed.addEventListener("click", () => {
    document.getElementById("modal-menu").classList.add("hide");
    document.getElementById("modal-menu").classList.remove("display");
})

//Buscador
inputSearch.addEventListener("keyup", (e) => {
    const pokemonDataByName = dataUtilities.filterByName(e.target.value);
    showCards(pokemonDataByName);
})

//Capturar el tipo de pokemon
for (let j = 0; j < typeButton.length; j++) {
    typeButton[j].addEventListener("click", (event) => {
        let pokemonType = event.target.getAttribute("data-type");
        filterPokemonByType(pokemonType)
    })
}

//Ordenar alfabeticamente
orderAz.addEventListener("click", function() {
    const orderAz = dataUtilities.orderAlphabeticallyAz(data.pokemon);
    showCards(orderAz);
})

orderZa.addEventListener("click", function() {
    const orderZa = dataUtilities.orderAlphabeticallyZa(data.pokemon);
    showCards(orderZa);
})

//Ordenar numericamente
orderDirect.addEventListener("click", function() {
    const orderDirect = dataUtilities.orderNumericallyDirect(data.pokemon);
    showCards(orderDirect);

})

orderReverse.addEventListener("click", function() {
    const orderReverse = dataUtilities.orderNumericallyReverse(data.pokemon);
    showCards(orderReverse);
})

//Ordenar por fuerza
orderStrongest.addEventListener("click", function() {
    const orderStrongest = dataUtilities.orderStrong(data.pokemon);
    showCards(orderStrongest);

})
orderWeakest.addEventListener("click", function() {
    const orderWeakest = dataUtilities.orderWeak(data.pokemon);
    showCards(orderWeakest);

})

//Random Pokemon
randomizePokemon.addEventListener("click", () => {
    const selectPokemonRandomize = dataUtilities.randomPokemon(data.pokemon);
    showCards(selectPokemonRandomize);
})

//Versus
versusButton.addEventListener("click", function() {
    document.getElementById("versus-modal-container").classList.add("display");
    document.getElementById("versus-modal-container").classList.remove("hide");
    const templateVersus = `
    <div class="outside-modal">
    <div id="versusModal" class="versusModal">
        <img src="images/closed-white.png" id="closed-versus">
        <h2 class="title-versus">¡Pon a prueba el tipo de tu pokemón!</h2>
        <div class="players">
            <input type="text" name="Player 1" class="player1" placeholder="Tu jugador" id="my-player">
            <input type="text" name="Player 2" class="player2" placeholder="Contrincante" id="other-player">
        </div>
        <button id="compare">Comparar</button>  
    </div>
    </div>
    `
    const versusModalContainer = document.getElementById("versus-modal-container");
    versusModalContainer.innerHTML = templateVersus;
    const versusModal = document.getElementById("versusModal");

    const compare = document.getElementById("compare");
    compare.addEventListener("click", function() {
        let myPlayer = document.getElementById("my-player").value;
        let otherPlayer = document.getElementById("other-player").value;
        let compareResult = dataUtilities.comparePokemon(myPlayer, otherPlayer);
        versusModal.innerHTML += `<p class="compare-result"> ${compareResult} </p>`;

        const buttonClosed = document.getElementById('closed-versus');
        buttonClosed.addEventListener("click", function() {
            document.getElementById("versus-modal-container").classList.add("hide");
        })
    })

    const buttonClosed = document.getElementById('closed-versus');
    buttonClosed.addEventListener("click", function() {
        document.getElementById("versus-modal-container").classList.add("hide");
    })

})

//Función mostrar modal personalizado
function showPokeCards(dataArr) {
    for (let k = 0; k < dataArr.length; k++) {
        document.getElementById(dataArr[k].name).addEventListener("click", function() {
            document.getElementById("pokeCardContainer").style.display = "block";
            pokeCardContainer.innerHTML = `
            <div class="outside-modal">
            <div class="pokeCard" id="pokeCard">
            <img src="images/closed-new.png" id="close">
                <div class="info-centered">
                    <div class="headCard ">
                        <img src="${dataArr[k].img}" class="imgSize" alt="">
                        <div class="headCard2">
                            <p>Nombre: ${dataArr[k].name} </p>
                            <p>N°: ${dataArr[k].num} </p>
                        </div>
                    </div>
                    <div class="centerCard">
                        <p>Peso: ${dataArr[k].size.weight}</p>
                        <p>Altura: ${dataArr[k].size.height}</p>
                        <p>Tipo: ${dataArr[k].type}</p>
                    </div>
                    <p id="description" translate="yes" >${dataArr[k].about} </p>
                </div>
            </div>
            </div>
                `
            document.getElementById("pokeCard").style.display = "block";
            document.getElementById("close").addEventListener("click", function() {
                pokeCardContainer.style.display = "none";
            })
        })
    }
}

showCards(data.pokemon);
