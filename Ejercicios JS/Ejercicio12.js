/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función:
*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  const listaNoDuplicados = []; 

  for (let i = 0; i < list.length; i++) {
    const elemento = list[i];

    if (!listaNoDuplicados.includes(elemento)) {
      listaNoDuplicados.push(elemento); 
    }
  }
  return listaNoDuplicados;
}

console.log(removeDuplicates(duplicates));
