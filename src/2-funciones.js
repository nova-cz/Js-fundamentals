//* FUNCIONES

//!Funciones asignadas a una variable
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

//!Funciones de flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

//!Funciones de flecha simplificadas
const saludar3 = (nombre) => `Hola, ${nombre}`;

//!Funciones que retornan un objeto implicito
const getUsuario = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUsuario();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const user2 = getUsuarioActivo('Mikimouse');
console.log(user2);
console.log(saludar2('Miguel'));