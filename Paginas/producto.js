import { dataDescripcion } from "../informacion";
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
const producto = dataDescripcion.find((p) => p.id == productId);

const handleOnClick = () => {
  let itemCount = parseInt(localStorage.getItem("items") || "0", 10);
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  itemCount++;
  carrito.push(producto);

  localStorage.setItem("items", itemCount.toString());
  localStorage.setItem("carrito", JSON.stringify(carrito));

  console.log("Producto agregado al carrito:", producto);
  localStorage.setItem("id", productId);

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
                <h1 class="mb-2"><b>${producto.nombre}</b></h1>
                <p class="mb-4">"${producto.descripcion}"</p>
                <p class="mb-5">${producto.precio}</p>
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
                <div class="row mt-5 d-flex align-items-center justify-content-center">
                    <div class="col-4">
                        <a href="./comprar.html" class="btn btn-dark w-100">Comprar</a>
                    </div>
                    <div class="col-4">
                        <button class="btn bg-dark text-white w-100" >Agregar al carro</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
                `);
  document
    .querySelector(".btn.bg-dark")
    .addEventListener("click", handleOnClick);
} else {
  $("#producto-info").html(`<p>Producto no encontrado.</p>`);
}

