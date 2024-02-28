let pokemonList = [
  {
    name: 'Venusaur',
    height: 2,
    abilities: ['Chlorophyll', 'Overgrow'],
    type: ['Grass', 'Poison']
  },

  {
    name: 'Charizard',
    height: 1.7,
    abilities: ['Blaze', 'Solar-power'],
    type: ['Fire', 'Flying']
  },

  {
    name: 'Blastoise',
    height: 1.6,
    abilities: ['Rain-dish', 'Torrent'],
    type: 'Water'
  },

  {
    name: 'Pikachu',
    height: 0.4,
    abilities: ['Static', 'Lightningrod'],
    type: 'Electric'
  }
];

let pokemon1 =
{
  name: 'Venusaur',
  height: 2,
  abilities: ['Chlorophyll', 'Overgrow'],
  type: ['Grass', 'Poison']
};

let pokemon2 =
{
  name: 'Charizard',
  height: 1.7,
  abilities: ['Blaze', 'Solar-power'],
  type: ['Fire', 'Flying']
};

let pokemon3 =
{
  name: 'Blastoise',
  height: 1.6,
  abilities: ['Rain-dish', 'Torrent'],
  type: 'Water'
};

let pokemon4 =
{
  name: 'Pikachu',
  height: 0.4,
  abilities: ['Static', 'Lightningrod'],
  type: 'Electric'
}


// for (let i = 0; i < pokemons.length; i++) {
//   if (pokemons[i].height > 1.9) {
//     document.write('<p>' + pokemons[i].name + ' (height: ' + (pokemons[i].height) + 'm) - Wow, that\'s big!</p>');
//   } else if (pokemons[i].height < 1.9 ){
//       document.write('<p>' + pokemons[i].name + ' (height: ' + (pokemons[i].height) + 'm)</p>');
// }
// }


// function print(){  
//   for (let i = 0; i < pokemonList.length; i++) {
//     if (pokemonList[i].height > 1.9) {
//     document.write('<p>' + pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + 'm) - Wow, that\'s big!</p>');
//     } else if (pokemonList[i].height < 1.9 ){
//       document.write('<p>' + pokemonList[i].name + ' (height: ' + (pokemonList[i].height) + 'm)</p>');
// };
// }
// }

// print();


// IIFE
let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: 'Venusaur',
      height: 2,
      abilities: ['Chlorophyll', 'Overgrow'],
      type: ['Grass', 'Poison']
    },
  
    {
      name: 'Charizard',
      height: 1.7,
      abilities: ['Blaze', 'Solar-power'],
      type: ['Fire', 'Flying']
    },
  
    {
      name: 'Blastoise',
      height: 1.6,
      abilities: ['Rain-dish', 'Torrent'],
      type: 'Water'
    },
  
    {
      name: 'Pikachu',
      height: 0.4,
      abilities: ['Static', 'Lightningrod'],
      type: 'Electric'
    }
  ]

  function getAll () {
    return pokemonList;
  }
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  }
})()

console.log(pokemonRepository.getAll())


// internal anonymous function - I know this is wrong as it doesn't work but I don't know what I did wrong
pokemonList.forEach(function() {
  if (pokemonList.height > 1.9) {
    document.write('<p>' + pokemonList.name + ' (height: ' + (pokemonList.height) + 'm) - Wow, that\'s big!</p>');
  } else if (pokemonList.height < 1.9) {
    document.write('<p>' + pokemonList.name + ' (height: ' + (pokemonList.height) + 'm)</p>');
  };
});