// import { heroes, owners } from '../data/heroes';
import { heroes } from '../data/heroes';

// console.log(heroes);
// console.log(owners);

// console.log('\n-----------------------\n\n')

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2));

// console.log('\n-----------------------\n\n')

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner('Marvel'));

export {
  getHeroeById,
  getHeroesByOwner,
}