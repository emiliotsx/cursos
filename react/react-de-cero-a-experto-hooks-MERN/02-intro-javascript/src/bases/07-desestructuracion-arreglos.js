const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [ , , personaje3 ] = personajes;
console.log(personaje3);

console.log('\n-----------------------\n\n')

const retornarArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornarArreglo();
console.log(letras, numeros);

console.log('\n-----------------------\n\n')

// TAREA
// 1 - el primer valor del arreglo se llamara nombre
// 2 - el segundo valor del arreglo se llamara setNombre 
const usarEstado = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola Mundo')
    },
  ];
};

const [ nombre, setNombre ] = usarEstado('SuperZombie');
console.log(nombre);
setNombre();