// IIFE
let pokemonRepository = (function () {
  let repository = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // Function to add pokemon to a list
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  // Function to get the list of all pokemon
  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    let repository = document.querySelector(".item-container");
    let pokemonListItem = document.createElement("li");
    pokemonListItem.classList.add("item");
    let button = document.createElement("button");
    button.innerText =
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    button.classList.add("pokemon");
    pokemonListItem.appendChild(button);
    repository.appendChild(pokemonListItem);
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  // Function to fetch and load the pokemon list from the API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showModal(
    title,
    imageUrl,
    heightText,
    weightText,
    types,
    abilities
  ) {
    let modalContainer = document.querySelector("#modal-container");

    // Clear all existing modal content
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    // Add the new modal content
    let closeButtonElement = document.createElement("button__secondary");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = title;

    let img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("pokemon-image");

    let heightElement = document.createElement("p");
    heightElement.innerText = heightText;

    let weightElement = document.createElement("p");
    weightElement.innerText = weightText;

    // Process types and abilities to extract the names
    let typesText = types.map((typeItem) => typeItem.type.name).join(", ");

    let abilitiesText = abilities
      .map((abilityItem) => abilityItem.ability.name)
      .join(", ");

    let typesElement = document.createElement("p");
    typesElement.innerText = "Types: " + typesText;

    let abilitiesElement = document.createElement("p");
    abilitiesElement.innerText = "Abilities: " + abilitiesText;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(img);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(typesElement);
    modal.appendChild(abilitiesElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");

    modalContainer.addEventListener("click", (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  // Function to fetch and load details for a specific pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
        item.abilities = details.abilities;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to show details of a pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
        pokemon.imageUrl,
        "Height: " + pokemon.height + " dm",
        "Weight: " + pokemon.weight + " kg",
        pokemon.types,
        pokemon.abilities
      );
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

// Fetch and load the pokemon list, then create list items for each pokemon
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(function (response) {
    return response.json(); // This returns a promise!
  })
  .then(function (repository) {
    console.log(repository); // The actual JSON response
  })
  .catch(function () {
    // Error
  });

(function () {
  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      let modalContainer = document.querySelector("#modal-container");
      modalContainer.classList.remove("is-visible");
    }
  });

  // document.querySelector(".pokemon").addEventListener("click", () => {
  //   showModal("Modal title", "This is the modal content!");
  // });
})();
