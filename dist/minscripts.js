let pokemonRepository = (function () {
  let e = [];
  function t(t) {
    "object" == typeof t && "name" in t
      ? e.push(t)
      : console.log("pokemon is not correct");
  }
  function n() {
    return e;
  }
  function i() {
    document.querySelector("#modal-container").classList.remove("is-visible");
  }
  function o(e) {
    return fetch(e.detailsUrl)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageUrl = t.sprites.front_default),
          (e.height = t.height),
          (e.weight = t.weight),
          (e.types = t.types),
          (e.abilities = t.abilities);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function a(e) {
    o(e).then(function () {
      var t, n, o, a, l, r;
      console.log(e);
      let s, c, d, p, m, h, u, f, g, y, k;
      (t = e.name.charAt(0).toUpperCase() + e.name.slice(1)),
        (n = e.imageUrl),
        (o = "Height: " + e.height + " dm"),
        (a = "Weight: " + e.weight + " kg"),
        (l = e.types),
        (r = e.abilities),
        ((s = document.querySelector("#modal-container")).innerHTML = ""),
        (c = document.createElement("div")).classList.add("modal"),
        (d = document.createElement("button__secondary")).classList.add(
          "modal-close"
        ),
        (d.innerText = "Close"),
        d.addEventListener("click", i),
        ((p = document.createElement("h1")).innerText = t),
        ((m = document.createElement("img")).src = n),
        m.classList.add("pokemon-image"),
        ((h = document.createElement("p")).innerText = o),
        ((u = document.createElement("p")).innerText = a),
        (f = l.map((e) => e.type.name).join(", ")),
        (g = r.map((e) => e.ability.name).join(", ")),
        ((y = document.createElement("p")).innerText = "Types: " + f),
        ((k = document.createElement("p")).innerText = "Abilities: " + g),
        c.appendChild(d),
        c.appendChild(p),
        c.appendChild(m),
        c.appendChild(h),
        c.appendChild(u),
        c.appendChild(y),
        c.appendChild(k),
        s.appendChild(c),
        s.classList.add("is-visible"),
        s.addEventListener("click", (e) => {
          e.target === s && i();
        });
    });
  }
  return {
    getAll: n,
    add: t,
    addListItem: function e(t) {
      let n = document.querySelector(".item-container"),
        i = document.createElement("li");
      i.classList.add("item");
      let o = document.createElement("button");
      (o.innerText = t.name.charAt(0).toUpperCase() + t.name.slice(1)),
        o.classList.add("pokemon"),
        i.appendChild(o),
        n.appendChild(i),
        o.addEventListener("click", function () {
          a(t);
        });
    },
    loadList: function e() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            let n = { name: e.name, detailsUrl: e.url };
            t(n), console.log(n);
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: o,
    showDetails: a,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
}),
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(function (e) {
      return e.json();
    })
    .then(function (e) {
      console.log(e);
    })
    .catch(function () {}),
  window.addEventListener("keydown", (e) => {
    let t = document.querySelector("#modal-container");
    "Escape" === e.key &&
      t.classList.contains("is-visible") &&
      document.querySelector("#modal-container").classList.remove("is-visible");
  }),
  document.querySelector(".pokemon").addEventListener("click", () => {
    showModal("Modal title", "This is the modal content!");
  });
