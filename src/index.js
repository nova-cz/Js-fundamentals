import { heroes } from "./data/heroes.js";

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

//* OBJETOS 
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

//! Desestructuracion de objetos
/* const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre, edad, clave} = persona; */

// console.log(nombre);
// console.log(edad);
// console.log(clave);

//Desestructuracion de objetos en argumentos de funciones
// const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
//     console.log(nombre, edad, rango);
//     return {
//         nombreClave: clave,
//         anios: edad,
//         latlng: {
//             lat: 14.1232,
//             lng: -12.3232
//         }
//     }
// }

// const {nombreclave, anios, latlng:{lat, lng}} = useContext(persona);

// console.log(nombreclave, anios);
// console.log(latlng);
// console.log(lat, lng);


//Desestructuracion de arreglos
/* const personajes = ['Goku', 'Vegeta', 'Trunks'];

const  [p1, ,p3] = personajes;
console.log(p1, p3); //Goku Vegeta

*valores predeterminados
let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 
 */

//!Funcion que retorna un arreglo
/* const returnArray = () => {
    return ['ABC', 123];
}

const [letras, num] = returnArray();
console.log(letras, num);


const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombree, setNombre] = useState('Goku');
console.log(nombree);
setNombre(); */

//!Desestructuracion de arreglos
/* const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const hero = getHeroeById(2);
console.log(hero);

*Usamos filtyer para buscar un heroe por su owner
*filter regresa un arreglo con los elementos que cumplan con la condicion
const owner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(owner('Marvel')); //Spiderman, Wolverine */

//! ForEach y Map
/* const tecnologias = ['React', 'Angular', 'Vue']

*El foreach es un ciclo que recorre cada uno de los elementos de un arreglo
tecnologias.forEach((tecnologia, index) => {
        console.log(`La tecnologia es: ${tecnologia} y es la numero ${index + 1}`)
})

*El map a diferencia del foreach, tambien itera el arreglo pero ademas puede retornar un nuevo arreglo con los elementos modificados o especificaciones q se le den en la funcion
tecnologias.map((tecnologia, index) => {
    if(tecnologia === 'React') {
        return console.log(`${tecnologia} con indice: ${index + 1}`)} 
}) */
//*Conclusion el foreachsirve como remplazo del for loop normal y el map es util para modificar los elementos de un arreglo y retornar un nuevo arreglo con los elementos modificados

//!Filter con funciones

/* const tecnologias = ['React', 'Angular', 'Vue', 'React', 'Angular', 'Vue']
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nuevoArray = tecnologias.filter((tecnologia) => tecnologia !== 'React');
console.log(nuevoArray); //Angular, Vue, Angular, Vue

const arr2 = numero.filter((num) => num % 2 === 0);
console.log(arr2); //2, 4, 6, 8, 10 */

//!Includes 
/*
*El método includes() en JavaScript verifica si un arreglo contiene un elemento específico, devolviendo true si lo encuentra y false en caso contrario.
 */
/* const frutas = ['manzana', 'pera', 'naranja'];
console.log(frutas.includes('pera')); // true
console.log(frutas.includes('sandía')); // false
 */

//!Some
/*
*El método some() en JavaScript verifica si al menos un elemento de un arreglo cumple una condición definida en una función de callback. Devuelve true si encuentra al menos un caso verdadero y false si ninguno cumple.
 */
/* const numeros = [1, 2, 3, 4, 5];
const esPar = numeros.some(num => num % 2 === 0);
console.log(esPar); // true (porque hay números pares, como 2 y 4) */

//!Find
/*
*El método find() en JavaScript devuelve el primer elemento de un arreglo que cumple con una condición definida en una función de callback. Si no encuentra ningún elemento, devuelve undefined.
 */
/* const heroess = [
    { id: 1, nombre: 'Batman', owner: 'DC' },
    { id: 2, nombre: 'Spiderman', owner: 'Marvel' },
    { id: 3, nombre: 'Superman', owner: 'DC' },
    { id: 4, nombre: 'Flash', owner: 'DC' } 
];

const heroe = heroess.find(heroe => heroe.id === 1);
console.log(heroe)  // { id: 1, nombre: 'Batman', owner: 'DC' } */

//!Every
/*
*El método every() en JavaScript verifica si todos los elementos de un arreglo cumplen una condición definida en una función de callback. Devuelve true si todos los elementos cumplen la condición y false si al menos uno no la cumple.
 */
/* const numeros = [1, 2, 3, 4, 5];
const todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); // false (porque no todos son pares) */

//!Reduce
/*
*El método reduce() en JavaScript ejecuta una función reductora sobre cada elemento de un arreglo, devolviendo un único valor de retorno. Reduce() recibe dos argumentos: el acumulador y el valor actual.
 */
/* const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 15 (1 + 2 + 3 + 4 + 5 = 15)
 */

//!Optional changing
//Sirve para evitar errores en caso de que una propiedad no exista
//Lo que hace es que si la propiedad no existe, no se ejecuta la siguiente propiedad
//Si la propiedad existe, se ejecuta la siguiente propiedad
// const alumno = {
//     nombre: 'Miguel',
//     edad: 27,
//     examenes: {
//         exam1: 10,
//         exam2: 8,
//     }
// }

// console.log(alumno?.examenes?.exam1); //10

//!Nullish Coalescing Operator
//Sirve para definir un valor por defecto en caso de que una propiedad no exista
//Si la propiedad no existe, se asigna el valor por defecto
//Si la propiedad existe, se asigna el valor de la propiedad
// const usuario = {
//     nombre: null,
//     edad: 27,
// }
//El valor por defecto irira despues de ?? en caso de que la propiedad no exista
// const nombre = usuario.nombre ?? 'Usuario sin nombre';
// console.log(nombre)

// Seleccionar elementos por ID
const tecnologiasDiv = document.getElementById('tecnologias');
console.log(tecnologiasDiv);  // Muestra el div con id="tecnologias"

// Seleccionar elementos por clase
const reactElement = document.getElementsByClassName('react');
console.log(reactElement[0]);  // Muestra el primer elemento con clase "react"

// Seleccionar todos los elementos <a> (etiqueta)
const enlaces = document.getElementsByTagName('a');
console.log(enlaces);  // Muestra todos los enlaces <a>

// querySelector para seleccionar el primer elemento que coincida con un selector
const heading = document.querySelector('.heading');
console.log(heading);  // Muestra el primer elemento con la clase "heading"

// querySelectorAll para seleccionar todos los elementos que coincidan con un selector
const allEnlaces = document.querySelectorAll('.navegacion a');
console.log(allEnlaces);  // Muestra todos los enlaces dentro de la clase "navegacion"

// EVENTOS

// Evento de clic en los enlaces
allEnlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();  // Evitar comportamiento por defecto del enlace
        alert(`Haz hecho clic en ${e.target.textContent}`);
    });
});

// Evento de input en el formulario
const nombreInput = document.getElementById('nombre');
nombreInput.addEventListener('input', (e) => {
    console.log(`Escribiste: ${e.target.value}`);
});

// Evento de submit en el formulario
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();  // Evitar que el formulario se envíe
    alert('Formulario enviado');
});
