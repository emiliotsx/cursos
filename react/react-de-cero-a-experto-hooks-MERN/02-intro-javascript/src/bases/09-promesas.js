
import { getHeroeById } from './bases/08-imports-exports';

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Tarea
    // 1 - importar el getHeroesById a este archivo
    const heroe = getHeroeById(2);
    resolve(heroe);
    // reject('No se pudo encontrar el Heroe');
  }, 2000);
});

promesa.then((heroe) => {
  console.log('heroe ', heroe);
}).catch((error) => console.warn(error));

console.log('\n-----------------------\n\n');

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      (!!heroe) ? resolve(heroe) : reject('El Héroe no existe');
    }, 2000);
  });
};

getHeroeByIdAsync(2)
  .then(console.log)
  .catch(console.warn);