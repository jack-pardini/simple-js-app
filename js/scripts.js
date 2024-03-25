// IIFE
let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Function to add pokemon to a list
  function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      'name' in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log('pokemon is not correct');
    }
  }

  // Function to get the list of all pokemon
  function getAll () {
    return repository;
  }

  function addListItem(pokemon) {
    let repository = document.querySelector('.pokemon-list');
    let pokemonListItem = document.createElement('li');
    
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    pokemonListItem.appendChild(button);
    repository.appendChild(pokemonListItem);
    button.addEventListener('click', function() {
      showDetails(pokemon);
      showModal('Modal title', 'This is the modal content!');

    })
  }

  // Function to fetch and load the pokemon list from the API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
    });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function showModal(title, imageUrl, heighttext, weighttext, abilitiestext) {
    let modalContainer = document.querySelector('#modal-container');
  
    // Clear all existing modal content
    modalContainer.innerHTML = '';
  
    let modal = document.createElement('div');
    modal.classList.add('modal');
  
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
  
    let heightElement = document.createElement('p');
    heightElement.innerText = heighttext;

    let weightElement = document.createElement('p');
    weightElement.innerText = weighttext;

    let abilitiesElement = document.createElement('p');
    abilitiesElement.innerText = abilitiestext;

    let img = document.createElement('img');
    img.src = imageUrl;
    
    modal.appendChild(closeButtonElement);
    modal.appendChild(img); 
    modal.appendChild(titleElement);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(abilitiesElement);
    modalContainer.appendChild(modal);
  
    modalContainer.classList.add('is-visible');

    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  // Function to fetch and load details for a specific pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.abilities = details.abilities;
    }).catch(function (e) {
      console.error(e);
    });
  }

  // Function to show details of a pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon.name, pokemon.imageUrl, pokemon.height + ' dm', pokemon.weight + ' kg', pokemon.abilities);
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

// Fetch and load the pokemon list, then create list items for each pokemon
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (repository) {
  console.log(repository); // The actual JSON response
}).catch(function () {
  // Error
});





(function(){
  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  
  document.querySelector('.button-class').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });
})();






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