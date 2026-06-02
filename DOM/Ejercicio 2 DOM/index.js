
//2.1 Inserta dinamicamente en un html un div vacio con javascript.
let nuevoDiv = document.createElement("div"); 
document.body.appendChild(nuevoDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newP = document.createElement('p');
nuevoDiv.appendChild(newP);
document.body.appendChild(nuevoDiv);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const containerDiv3 = document.createElement('div');

for (let i = 0; i < 6; i++) {
    const newP3 = document.createElement('p');
    containerDiv3.appendChild(newP3);
}
document.body.appendChild(containerDiv3);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const newP4 = document.createElement('p');
newP4.textContent = 'Soy dinámico!';
document.body.appendChild(newP4);


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const targetH2 = document.querySelector('.fn-insert-here');
targetH2.textContent = 'Wubba Lubba dub dub';


//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});

document.body.appendChild(ul);


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
    element.remove();
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const p8 = document.createElement('p');
p8.textContent = 'Voy en medio!';
const firstDiv = document.querySelector('div');
firstDiv.insertAdjacentElement('afterend', p8);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divsToModify = document.querySelectorAll('div.fn-insert-here');
divsToModify.forEach(div => {
    const p9 = document.createElement('p');
    p9.textContent = 'Voy dentro!';
    div.appendChild(p9);
});