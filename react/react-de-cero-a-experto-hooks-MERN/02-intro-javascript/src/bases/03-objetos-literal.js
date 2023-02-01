const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'Guatemala',
    zip: 123,
    lat: 14.2,
    lng: 5.2565
  },
};

console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'peter';
console.log(persona2);
