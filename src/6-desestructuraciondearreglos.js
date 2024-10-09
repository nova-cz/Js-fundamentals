const returnArray = () => {
    return ['ABC', 123];
}

const [letras, num] = returnArray();
console.log(letras, num);

//Tarea
const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombree, setNombre] = useState('Goku');
console.log(nombree);
setNombre();