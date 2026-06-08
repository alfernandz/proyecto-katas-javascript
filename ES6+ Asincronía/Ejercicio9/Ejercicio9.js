/*
Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.

URL: https://pokeapi.co/api/v2/pokemon/
*/
// 1. Seleccionamos el elemento de la imagen
const pokemonImage = document.querySelector('.random-image');

// 2. Generamos un número aleatorio entre 1 y 151
function getRandomPokemonId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. Función asíncrona para obtener el Pokemon
async function fetchRandomPokemon() {
    const randomId = getRandomPokemonId(1, 151);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) throw new Error("No se pudo obtener el Pokemon");

        const pokemonData = await response.json();

        // 4. Buscamos la imagen que más nos guste. 
        const imageUrl = pokemonData.sprites.other['official-artwork'].front_default 
                         || pokemonData.sprites.front_default;

        // 5. Asignamos la imagen al elemento HTML
        pokemonImage.src = imageUrl;
        pokemonImage.alt = pokemonData.name;

    } catch (error) {
        console.error("Error en la petición:", error);
    }
}

// Ejecutamos la función al cargar la página
fetchRandomPokemon();