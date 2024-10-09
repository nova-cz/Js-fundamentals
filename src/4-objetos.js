//* OBJETOS 
const persona = {
    nombre: 'Miguel',
    apellido: 'Cruz',
    edad: 27,
    direccion: {
        ciudad: 'Mexico',
        zip: 123456,
        lat: 14.3232,
        lng: 34.923332
    }
};

const persona2 = {...persona}; //!Usamos operador spread para crear una copia del objeto inicial persona, lo que hace spread es copiar las propiedades y valores de persona a persona2.

persona2.nombre = 'Peter';

console.log(persona); //Basicamente crea otro objeto el cual contiene a persona y sus propiedades y valores pero no es el mismo objeto 
console.log(persona2);
