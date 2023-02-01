const nombre = 'Super';
const apellido = 'Zombie';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Mi nombre completo es: ${nombre} ${apellido} y la suma de 1 + 1 = ${1+1}`;
console.log(nombreCompleto);

function getSaludo (nombre) {
  return 'hola ' + nombre;
}

console.log(`Este es un texto ${getSaludo(nombre)}`);