// Desestructuracion
// Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'IronMan',
};

const {
  nombre: nombre2,
  edad,
  clave,
} = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);
console.log('-----------------------\n\n');

const retornaPersona = ({
  nombre,
  edad,
  rango = 'Capitan'
}) => {
  console.log(nombre, edad, rango);
};

retornaPersona(persona);

console.log('-----------------------\n\n');

const usContenido = ({
  clave,
  nombre,
  edad,
  rango = 'Capitan'
}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: '4561321',
      lng: '-568961',
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: {
    lat,
    lng
  }
} = usContenido(persona);
console.log(nombreClave, anios);

console.log(lat, lng);

