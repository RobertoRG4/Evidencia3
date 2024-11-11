$(document).ready(() => {
  const renderProductos = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
      $("#render-productos").html(
        `<div class="container d-flex align-items-center justify-content-center" style="height:80vh;">No hay productos en la canasta</div>`,
      );
      return;
    }

    let productosHTML = `
      <section class="container-fluid">
        <h2 class="m-4">Productos en el Carrito</h2>
        <div class="d-flex flex-column" style="width: 100%;">`;

    carrito.forEach((producto) => {
      productosHTML += `
        <div class="d-flex justify-content-center align-items-center border-bottom py-3">
          <img src="${producto.imgURL}" class="card-img" style="width:150px" alt="${producto.nombre}">
          <div class="m-4">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <p class="card-price">${producto.precio}</p>
          </div>
          <div class="d-flex flex-column align-items-center" style="width:200px">
            <p class="m-4">Cantidad</p>
            <p id="cantidad-${producto.id}">${producto.cantidad || 1}</p>
            <div>
              <button data-id="${producto.id}" class="btn-sumar btn btn-secondary">+</button>
              <button data-id="${producto.id}" class="btn-restar btn btn-secondary">-</button>
            </div>
          </div>
          <div class="d-flex align-items-center justify-content-center">
            <button onclick="localStorage.clear()" data-id="${producto.id}" class="btn-eliminar btn btn-danger">Eliminar</button>
          </div>
        </div>`;
    });

    productosHTML += `
        </div>
        <button class="btn btn-dark m-5" id="limpiar-carro">Limpiar Carro</button>
        <a href="./comprar.html" class="btn btn-dark">Comprar</a>
      </section>`;

    $("#render-productos").html(productosHTML);

    $(".btn-sumar").on("click", (e) => {
      const productId = $(e.currentTarget).data("id");
      actualizarCantidad(productId, 1);
    });

    $(".btn-restar").on("click", (e) => {
      const productId = $(e.currentTarget).data("id");
      actualizarCantidad(productId, -1);
    });

    $(".btn-eliminar").on("click", (e) => {
      const productId = $(e.currentTarget).data("id");
      eliminarProducto(productId);
    });

    $("#limpiar-carro").on("click", () => {
      localStorage.clear();
      renderProductos();
    });
  };

  const actualizarCantidad = (productId, cambio) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const producto = carrito.find((item) => item.id === productId);

    if (producto) {
      producto.cantidad = (producto.cantidad || 1) + cambio;
      if (producto.cantidad < 1) producto.cantidad = 1;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      renderProductos();
    }
  };

  const eliminarProducto = (productId) => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito = carrito.filter((item) => item.id !== productId);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderProductos();
  };

  renderProductos();
});
