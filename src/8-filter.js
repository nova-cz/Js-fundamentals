//!Filter con funciones
/*
*El método filter() en JavaScript crea un nuevo arreglo con los elementos que cumplen una condición definida en una función de callback. No modifica el arreglo original y devuelve solo los elementos que evaluaron como verdaderos.
 */
const tecnologias = ['React', 'Angular', 'Vue', 'React', 'Angular', 'Vue']
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nuevoArray = tecnologias.filter((tecnologia) => tecnologia !== 'React');
console.log(nuevoArray); //Angular, Vue, Angular, Vue

const arr2 = numero.filter((num) => num % 2 === 0);
console.log(arr2); //2, 4, 6, 8, 10