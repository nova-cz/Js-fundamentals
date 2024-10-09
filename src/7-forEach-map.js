//! ForEach y Map
const tecnologias = ['React', 'Angular', 'Vue']

//*El foreach es un ciclo que recorre cada uno de los elementos de un arreglo
tecnologias.forEach((tecnologia, index) => {
        console.log(`La tecnologia es: ${tecnologia} y es la numero ${index + 1}`)
})

//*El map a diferencia del foreach, tambien itera el arreglo pero ademas puede retornar un nuevo arreglo con los elementos modificados o especificaciones q se le den en la funcion
tecnologias.map((tecnologia, index) => {
    if(tecnologia === 'React') {
        return console.log(`${tecnologia} con indice: ${index + 1}`)} 
}) 
//*Conclusion el foreachsirve como remplazo del for loop normal y el map es util para modificar los elementos de un arreglo y retornar un nuevo arreglo con los elementos modificados
