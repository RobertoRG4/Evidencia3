const data = [
  {
    id: 1,
    nombre: "Nike Journey Run",
    precio: "$2,099",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee48e9b8-83fa-4432-8db3-68bef3905a06/NIKE+JOURNEY+RUN.png",
    descripcion: "Un gran zapato para correr que ofrece comodidad y soporte.",
  },
  {
    id: 2,
    nombre: "Adidas Ultraboost",
    precio: "$2,499",
    imgURL:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,pg_1/6cbd82fd2f1947cc9058ab7c0127d9bc_9366/Ultraboost_21_Shoes_White_GZ2573_01_standard.jpg",
    descripcion:
      "Zapatos de alto rendimiento que proporcionan energía en cada paso.",
  },
  {
    id: 3,
    nombre: "Puma RS-X",
    precio: "$1,899",
    imgURL:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb,f_auto,h_1000,w_1000/global/385747/01/modif/compos/6_01.jpg",
    descripcion: "Un diseño llamativo y una amortiguación excepcional.",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
<<<<<<< HEAD

const producto = data.find((p) => p.id == productId);

=======
const producto = data.find((p) => p.id == productId);

const handleOnClick = () => {
  let itemCount = parseInt(localStorage.getItem("items") || "0", 10);
  itemCount++;

  localStorage.setItem("items", itemCount.toString());

  $("#item-count").text(itemCount);
  console.log("Producto agregado al carrito");
  $("body").append(`
    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 1055;">
      <div id="liveToast" class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            Producto añadido al carrito con éxito!
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
        </div>
      </div>
    </div>
  `);

  const toastElement = new bootstrap.Toast(
    document.getElementById("liveToast"),
  );
  toastElement.show();
};
>>>>>>> main
if (producto) {
  $("#producto-info").html(`
                <img src="${producto.imgURL}" alt="${producto.nombre}" style="width: 300px; height: auto;">
                <h2>${producto.nombre}</h2>
                <p>Precio: ${producto.precio}</p>
                <p>${producto.descripcion}</p>
<<<<<<< HEAD
=======
<button onclick="handleOnClick()" class="btn btn-primary">Agregar al carro</button>
>>>>>>> main
                <a href="./tienda.html">Volver a la tienda</a>
            `);
} else {
  $("#producto-info").html(`<p>Producto no encontrado.</p>`);
}
