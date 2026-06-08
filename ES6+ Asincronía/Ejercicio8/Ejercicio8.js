/*
Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así: 
*/

// Seleccionamos los elementos del DOM
const characterList = document.getElementById('character-list');
const characterImage = document.querySelector('.character-image');

let characters = [];

// Obtenemos los datos de la API
async function getCharacters() {
    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        characters = await response.json();
        
        // Una vez tenemos los datos, rellenamos el select
        populateSelect(characters);
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
}

// Rellenamos el select con los nombres
function populateSelect(data) {
    const defaultOption = document.createElement('option');
    defaultOption.textContent = "Selecciona un personaje...";
    defaultOption.value = "";
    characterList.appendChild(defaultOption);

    data.forEach(character => {
        const option = document.createElement('option');
        option.value = character.id; // Usamos el ID para identificarlo luego
        option.textContent = character.fullName; // Nombre que verá el usuario
        characterList.appendChild(option);
    });
}

// 3. Creamos un evento para detectar el cambio de selección
characterList.addEventListener('change', (event) => {
    const selectedId = event.target.value;

    // Buscamos el personaje que coincide con el ID seleccionado
    const characterFound = characters.find(c => c.id == selectedId);

    if (characterFound) {
        characterImage.src = characterFound.imageUrl;
        characterImage.alt = characterFound.fullName;
        characterImage.style.display = "block";
    } else {
        // Limpiamos la imagen si no hay selección
        characterImage.src = "";
    }
});
getCharacters();