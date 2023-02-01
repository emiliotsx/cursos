const saludar = (nombre) => {
  return `Hola ${nombre}`;
}

const saludar2 = () => {
  return `Super Zombie`;
}

const saludar3 = () => `Funcion escrita de forma optima`;
const saludar4 = (nombre) => `Funcion escrita de forma optima, bien echo ${nombre}`;

console.log(saludar('Emilio'));
console.log(saludar2());
console.log(saludar3());
console.log(saludar4('Breinercito'));

const getUser = () => ({
  uid: 'ASDF54613',
  username: 'SuperZombie',
});

console.log(getUser());

// Tarea
// 1 - transformar a funcion de flecha
// 2 - tiene que retornar un objeto implicito
// 3 pruebas
function getUsuarioActivo (nombre) {
  return {
    uid: 'asdfasdf4587',
    username: nombre,
  }
}

const usuarioActivo = getUsuarioActivo('Emilio');
console.log(usuarioActivo);

// Solución a tarea
const getUsuarioActivoFlecha = (nombre) => ({
  uid: 'asdfasdf4587',
  username: nombre,
});

console.log(getUsuarioActivoFlecha('Breinercito'));


