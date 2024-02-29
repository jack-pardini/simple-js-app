// IIFE
var pokemonRepository = (function () {
  let repository = [
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

  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon &&
      'height' in pokemon &&
      'type' in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  function getAll () {
    return repository;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);

});

//   var result;
//   item.types.forEach(function (typeItem) {
//     if (typeItem == 'Grass') {
//       result = '<span style="color:green;"> ';
//     } else if (typeItem == 'Fire') {
//       result = '<span style="color:red;"> ';
//     } else if (typeItem == 'Water') {
//       result = '<span style="color:blue;"> ';  
//     } else if (typeItem == 'Electric') {
//       result = '<span style="color:yellow;"> ';
//     }
// }


// let pokemonList = [
//   {
//     name: 'Venusaur',
//     height: 2,
//     abilities: ['Chlorophyll', 'Overgrow'],
//     type: ['Grass', 'Poison']
//   },

//   {
//     name: 'Charizard',
//     height: 1.7,
//     abilities: ['Blaze', 'Solar-power'],
//     type: ['Fire', 'Flying']
//   },

//   {
//     name: 'Blastoise',
//     height: 1.6,
//     abilities: ['Rain-dish', 'Torrent'],
//     type: 'Water'
//   },

//   {
//     name: 'Pikachu',
//     height: 0.4,
//     abilities: ['Static', 'Lightningrod'],
//     type: 'Electric'
//   }
// ];

// let pokemon1 =
// {
//   name: 'Venusaur',
//   height: 2,
//   abilities: ['Chlorophyll', 'Overgrow'],
//   type: ['Grass', 'Poison']
// };

// let pokemon2 =
// {
//   name: 'Charizard',
//   height: 1.7,
//   abilities: ['Blaze', 'Solar-power'],
//   type: ['Fire', 'Flying']
// };

// let pokemon3 =
// {
//   name: 'Blastoise',
//   height: 1.6,
//   abilities: ['Rain-dish', 'Torrent'],
//   type: 'Water'
// };

// let pokemon4 =
// {
//   name: 'Pikachu',
//   height: 0.4,
//   abilities: ['Static', 'Lightningrod'],
//   type: 'Electric'
// }


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