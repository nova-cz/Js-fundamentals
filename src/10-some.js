//!Some
/*
*El método some() en JavaScript verifica si al menos un elemento de un arreglo cumple una condición definida en una función de callback. Devuelve true si encuentra al menos un caso verdadero y false si ninguno cumple.
 */
const numeros = [1, 2, 3, 4, 5];
const esPar = numeros.some(num => num % 2 === 0);
console.log(esPar); // true (porque hay números pares, como 2 y 4)
