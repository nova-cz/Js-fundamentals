//!Every
/*
*El método every() en JavaScript verifica si todos los elementos de un arreglo cumplen una condición definida en una función de callback. Devuelve true si todos los elementos cumplen la condición y false si al menos uno no la cumple.
 */
const numeros = [1, 2, 3, 4, 5];
const todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); // false (porque no todos son pares)
