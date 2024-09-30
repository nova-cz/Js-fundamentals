
const nombre =  'Miguel';
const apellido = 'Cruz';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto); // Miguel Cruz

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`${getSaludo(nombre)}`);
