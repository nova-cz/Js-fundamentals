//* ARREGLOS
const arreglo1 = [1, 2, 3, 4];

let arreglo2 = [ ...arreglo1, 5]; //!Usamos spread para copiar los valores de arreglo1 a arreglo2 y agregar un nuevo valor

let arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});
// !el metodo map() crea un nuevo arreglo con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos.
// !En este caso multiplicamos por 2 cada uno de los elementos del arreglo2 y los guardamos en arreglo3
// es usuario siempre usar un return en el metodo map() para que no haya problemas con el resultado


console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);