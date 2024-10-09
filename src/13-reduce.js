//!Reduce
/*
*El método reduce() en JavaScript ejecuta una función reductora sobre cada elemento de un arreglo, devolviendo un único valor de retorno. Reduce() recibe dos argumentos: el acumulador y el valor actual.
 */
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 15 (1 + 2 + 3 + 4 + 5 = 15)
