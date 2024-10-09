const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreclave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreclave, anios);
console.log(latlng);
console.log(lat, lng);
