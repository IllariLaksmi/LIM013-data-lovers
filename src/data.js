import data from './data/pokemon/pokemon.js';

//Funcion de filtrado por tipo
export const dataUtilities = {
    listAll: function() {
        return data.pokemon;
    },
    filterByType: function(pokemonType) {
        const pokemonTypeFiltered = data.pokemon.filter(element => element.type.includes(pokemonType));
        return pokemonTypeFiltered;
    },
    filterByName: function(pokemonName) {
        const pokemonNameFiltered = data.pokemon.filter(element => element.name.includes(pokemonName));
        return pokemonNameFiltered;
    },
    orderAlphabeticallyAz: function() {
        return data.pokemon.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
    },
    orderAlphabeticallyZa: function() {
        return data.pokemon.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        });
    },
    orderNumericallyDirect: function() {
        return data.pokemon.sort((a, b) => {
            if (a.num > b.num) {
                return 1;
            }
            if (a.num < b.num) {
                return -1;
            }
            return 0;
        });
    },
    orderNumericallyReverse: function() {
        return data.pokemon.sort((a, b) => {
            if (a.num > b.num) {
                return -1;
            }
            if (a.num < b.num) {
                return 1;
            }
            return 0;
        });
    },
    comparePokemon: function(myPlayer, otherPlayer) {
        const fullArrayNamePlayer1 = data.pokemon.filter(element => element.name.includes(myPlayer));
        const fullArrayNamePlayer2 = data.pokemon.filter(element => element.name.includes(otherPlayer));
        let typePlayer1 = [];
        let weaknessesPlayer1 = [];
        let resistantPlayer1 = [];
        let typePlayer2 = [];
        let weaknessesPlayer2 = [];
        let resistantPlayer2 = [];

        fullArrayNamePlayer1.forEach(element => {
            typePlayer1.push(element.type);
            weaknessesPlayer1.push(element.weaknesses);
            resistantPlayer1.push(element.resistant);
        });

        fullArrayNamePlayer2.forEach(element => {
            typePlayer2.push(element.type);
            weaknessesPlayer2.push(element.weaknesses);
            resistantPlayer2.push(element.resistant);
        });

        if (weaknessesPlayer2[0].some(type => typePlayer1[0].includes(type))) {
            return "¡Ganaste!";
        } else if (weaknessesPlayer1[0].some(type => typePlayer2[0].includes(type))) {
            return "¡Perdiste!";
        } else if (weaknessesPlayer2[0].some(type => resistantPlayer1[0].includes(type))) {
            return "¡Ganaste!";
        } else if (weaknessesPlayer1[0].some(type => resistantPlayer2[0].includes(type))) {
            return "¡Perdiste!";
        } else {
            return "¡Empate!";
        }

    },
}





// export default dataPokemon;