
// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('.showme');
console.log (button);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector('#pillado');
console.log (h1Pillado);
//1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll('p');
console.log (parrafos);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const elementosPokemon = document.querySelectorAll ('.pokemon');
console.log (elementosPokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const elementosData = document.querySelectorAll('[data-function="testMe"]');
console.log (elementosData);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const personajeData = document.querySelectorAll('[data-function="testMe"]');
console.log (personajeData[2]);