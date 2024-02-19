let pokemonList = [];

let pokemons = [
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

for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].height > 1.9) {
      document.write(pokemons[i].name + ' (height: ' + (pokemons[i].height) + 'm) - Wow, that\'s big! <br><br>');
    } else if (pokemons[i].height < 1.9 ){
        document.write(pokemons[i].name + ' (height: ' + (pokemons[i].height) + 'm)<br><br>');
  }
}
