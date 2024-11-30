const routes = {
  "/": {
    page: "./public/pages/inicio/index.html",
    scripts: ["./public/js/main.js"],
  },
  "/tienda": {
    page: "./public/pages/tienda/index.html",
    scripts: [
      "./public/pages/tienda/js/carro.js",
      "./public/pages/tienda/js/productos.js",
    ],
  },
  "/blog": {
    page: "./public/pages/blog/index.html",
    scripts: ["./public/pages/blog/js/audio.js"],
  },
  "/contactanos": {
    page: "./public/pages/contactanos/index.html",
    scripts: ["./public/js/index.js"],
  },
  "/carro": {
    page: "./public/pages/carro/index.html",
    scripts: [
      "./public/pages/carro/js/render-productos.js",
      "./public/pages/tienda/js/carro.js",
    ],
  },
  "/admin": {
    page: "./admin/index.html",
  },
  "*": {
    page: "./public/pages/not-found/index.html",
    scripts: [],
  },
};

async function loadContent(path) {
  const route = routes[path] || routes["*"];

  const response = await fetch(route.page);
  const content = await response.text();
  document.getElementById("content").innerHTML = content;

  document.title =
    path === "/" ? "Inicio" : path.replace("/", "").toUpperCase();

  loadScripts(route.scripts);
}

function loadScripts(scripts) {
  const existingScripts = document.querySelectorAll(
    'script[data-loaded="true"]'
  );
  existingScripts.forEach((script) => script.remove());

  scripts.forEach((scriptSrc) => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.type = "module";
    script.setAttribute("data-loaded", "true");
    script.onload = () => console.log(`${scriptSrc} cargado y ejecutado`);
    document.body.appendChild(script);
  });
}

function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  loadContent(path);
}

document.addEventListener("click", (e) => {
  if (e.target.tagName === "A" && e.target.hasAttribute("data-link")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    navigateTo(path);
  }
});

window.onpopstate = () => loadContent(window.location.pathname);

window.addEventListener("DOMContentLoaded", () => {
  loadContent(window.location.pathname);
});
