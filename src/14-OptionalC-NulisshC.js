//!Optional changing
//Sirve para evitar errores en caso de que una propiedad no exista
//Lo que hace es que si la propiedad no existe, no se ejecuta la siguiente propiedad
//Si la propiedad existe, se ejecuta la siguiente propiedad
const alumno = {
    nombre: 'Miguel',
    edad: 27,
    examenes: {
        exam1: 10,
        exam2: 8,
    }
}

console.log(alumno?.examenes?.exam1); //10

//!Nullish Coalescing Operator
//Sirve para definir un valor por defecto en caso de que una propiedad no exista
//Si la propiedad no existe, se asigna el valor por defecto
//Si la propiedad existe, se asigna el valor de la propiedad
const usuario = {
    nombre: null,
    edad: 27,
}
//El valor por defecto irira despues de ?? en caso de que la propiedad no exista
const nombre = usuario.nombre ?? 'Usuario sin nombre';
console.log(nombre)