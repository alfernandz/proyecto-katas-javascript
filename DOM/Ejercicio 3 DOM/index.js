
//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const div1 = document.createElement('div');
const ul = document.createElement('ul');
countries.forEach((country) => {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});
div1.appendChild(ul);
document.body.appendChild(div1);

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();




//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const arrayDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});
arrayDiv.appendChild(ulCars);


//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries4 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries4.forEach(item => {
    const div4 = document.createElement('div');
    div4.classList.add('country-card'); 
    div4.innerHTML = `
        <h4>${item.title}</h4>
        <img src="${item.imgUrl}" alt="${item.title}">;
    `
})
//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const btnDeleteLast = document.createElement('button');
btnDeleteLast.textContent = 'Eliminar ÚLTIMO elemento';
btnDeleteLast.style.display = 'block';
btnDeleteLast.style.margin = '20px 0';

btnDeleteLast.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.country-card');
    if (allCards.length > 0) {
        allCards[allCards.length - 1].remove();
    }
});

document.body.appendChild(btnDeleteLast);

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const btnRemoveSelf = document.createElement('button');
    btnRemoveSelf.textContent = 'Eliminar este elemento';

    // Añadimos el evento para eliminar el div padre
    btnRemoveSelf.addEventListener('click', () => {
        containerDiv.remove();
    });

    // Metemos el botón en el div y el div en el body
    containerDiv.appendChild(btnRemoveSelf);
    document.body.appendChild(containerDiv);

});