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
  {
    id: 4,
    nombre: "Nike Pegasus Plus",
    precio: "$4,199",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8a36278-bdd7-47d6-9e6c-201d3e0820bb/PEGASUS+PLUS.png",
  },
  {
    id: 5,
    nombre: "Nike Rival Fly 4",
    precio: "$2,399",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86a9258e-acac-4ea5-942d-c65614109c1b/NIKE+AIR+ZOOM+RIVAL+FLY+4.png",
  },
  {
    id: 6,
    nombre: "Jordan Heir 'Bloodline'",
    precio: "$2,699",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f082446b-4aed-40cd-b4b3-b8ccccd90c66/JORDAN+HEIR.png",
  },
  {
    id: 7,
    nombre: "Air Jordan 1 Low SE",
    precio: "$3,249",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c897d92-a0ce-488e-bb2a-5e7e766d7614/AIR+JORDAN+1+LOW+SE.png",
  },
  {
    id: 8,
    nombre: "Air Jordan Dub Zero",
    precio: "$3,999",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c264faee-3451-4d38-963f-e224782fbb42/AIR+JORDAN+DUB+ZERO.png",
  },
  {
    id: 9,
    nombre: "Air Jordan 1 Zoom CMFT 2",
    precio: "$3,599",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d6e54aa-7104-47c6-8777-3d838d6980b3/AIR+JORDAN+1+ZM+AIR+CMFT+2.png",
  },
  {
    id: 10,
    nombre: "Air Jordan 1 Mid",
    precio: "$3,199",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9921d678-ed65-49c6-bdcb-e85bebeb7c46/AIR+JORDAN+1+MID.png",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
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
if (producto) {
  $("#producto-info").html(`
    <main class="container py-5">
        <div class="row">
            <div class="col-12 col-md-6 mb-4 mb-md-0">
                <img src="${producto.imgURL}" alt="${producto.imgURL}" class="img-fluid">
            </div>
            <div class="col-12 col-md-6">
                <p class="text-danger">Sustainable materials</p>
                <h1 class="mb-5"><b>${producto.nombre}</b></h1>
                <p class="mb-3">${producto.precio}</p>
                <p class="mb-5">"${producto.descripcion}"</p>
                <p class="mb-5">Selecciona tu talla</p>
                <div class="row g-1 mb-2">
                    <div class="col-3">
                        <input type="radio" class="btn-check" name="options" id="CM_22" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_22">CM 22</label>
                    </div>
                    <div class="col-3">
                        <input type="radio" class="btn-check" name="options" id="CM_23" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_23">CM 23</label>
                    </div>
                    <div class="col-3">
                        <input type="radio" class="btn-check" name="options" id="CM_24" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_24">CM 24</label>
                    </div>
                    <div class="col-3">
                        <input type="radio" class="btn-check" name="options" id="CM_25" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_25">CM 25</label>
                    </div>
                </div>
                <div class="row g-1 mb-4">
                    <div class="col-3">
                        <input type="radio" class="btn-check" name="options" id="CM_26" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_26">CM 26</label>
                    </div>
                    <div class="col-3">
                        <input type="radio" class="btn-check" name="options" id="CM_27" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_27">CM 27</label>
                    </div>
                    <div class="col-3">
                        <input type="radio" class="btn-check" name="options" id="CM_28" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_28">CM 28</label>
                    </div>
                    <div class="col-3 bt-5">
                        <input type="radio" class="btn-check" name="options" id="CM_29" autocomplete="off">
                        <label class="btn btn-outline-dark btn-sm w-100" for="CM_29">CM 29</label>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-4">
                        <a href="./tienda.html" class="btn btn-dark w-70">Regresar a la tienda</a>
                    </div>
                    <div class="col-4">
                        <a href="./carro-de-compras.html" class="btn btn-dark w-70">Agregar a carrito</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
                `);
} else {
  $("#producto-info").html(`<p>Producto no encontrado.</p>`);
}
