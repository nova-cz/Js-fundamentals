//*VARIABLES
//Const para valores que no cambiaran
//Let para valores que sabemos que cambiaran

// const nombre = 'Miguel';
// const apellido = 'Cruz'

// let valorDado = 5;
// valorDado = 10;

// console.log(nombre, apellido, valorDado);

//* TEMPLATE STINGS

// const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto); // Miguel Cruz

// function getSaludo(nombre) {
//     return 'Hola ' + nombre;
// }

// console.log(`Este es un saludo: \n${getSaludo(nombre)}`);

//* OBJETOS LITERALES
// const persona = {
//     nombre: 'Miguel',
//     apellido: 'Cruz',
//     edad: 27,
//     direccion: {
//         ciudad: 'Mexico',
//         zip: 123456,
//         lat: 14.3232,
//         lng: 34.923332
//     }
// };

// const persona2 = {...persona}; //!Usamos operador spread para crear una copia del objeto inicial persona, lo que hace spread es copiar las propiedades y valores de persona a persona2.

// persona2.nombre = 'Peter';

// console.log(persona); //Basicamente crea otro objeto el cual contiene a persona y sus propiedades y valores pero no es el mismo objeto 
// console.log(persona2);

//* ARREGLOS
// const arreglo1 = [1, 2, 3, 4];

// let arreglo2 = [ ...arreglo1, 5]; //!Usamos spread para copiar los valores de arreglo1 a arreglo2 y agregar un nuevo valor

// let arreglo3 = arreglo2.map(function(numero) {
//     return numero * 2;
// });
//!el metodo map() crea un nuevo arreglo con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos.
//!En este caso multiplicamos por 2 cada uno de los elementos del arreglo2 y los guardamos en arreglo3
//es usuario siempre usar un return en el metodo map() para que no haya problemas con el resultado


// console.log(arreglo1);
// console.log(arreglo2);
// console.log(arreglo3);

//* FUNCIONES

// //!Funciones asignadas a una variable
// const saludar = function(nombre) {
//     return `Hola, ${nombre}`;
// }

// //!Funciones de flecha
// const saludar2 = (nombre) => {
//     return `Hola, ${nombre}`;
// }

// //!Funciones de flecha simplificadas
// const saludar3 = (nombre) => `Hola, ${nombre}`;

// //!Funciones que retornan un objeto implicito
// const getUsuario = () => ({
//     uid: 'ABC123',
//     username: 'El_Papi1502'
// });

// const user = getUsuario();
// console.log(user);

// const getUsuarioActivo = (nombre) => ({
//     uid: 'ABC567',
//     username: nombre
// });

// const user2 = getUsuarioActivo('Mikimouse');
// console.log(user2);
// console.log(saludar2('Miguel'));

//* Desestructuracion de objetos