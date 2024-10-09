//!Find
/*
*El método find() en JavaScript devuelve el primer elemento de un arreglo que cumple con una condición definida en una función de callback. Si no encuentra ningún elemento, devuelve undefined.
 */
const heroess = [
    { id: 1, nombre: 'Batman', owner: 'DC' },
    { id: 2, nombre: 'Spiderman', owner: 'Marvel' },
    { id: 3, nombre: 'Superman', owner: 'DC' },
    { id: 4, nombre: 'Flash', owner: 'DC' } 
];

const heroe = heroess.find(heroe => heroe.id === 1);
console.log(heroe)  // { id: 1, nombre: 'Batman', owner: 'DC' }