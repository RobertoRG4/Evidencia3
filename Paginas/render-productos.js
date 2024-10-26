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
    nombre: "Nike Vomero 17",
    precio: "$2,499",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6e2c11db-1b66-4f12-9395-5d8235603da9/W+NIKE+VOMERO+17.png",
    descripcion:
      "Zapatos de alto rendimiento que proporcionan energía en cada paso.",
  },
  {
    id: 3,
    nombre: "Nike Air Zoom Arcadia 2",
    precio: "$1,799",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/748f8a26-e20b-4e0c-95e4-a5b513c97e9a/NIKE+AIR+ZOOM+ARCADIA+2+%28GS%29.png",
    descripcion: "Un diseño llamativo y una amortiguación excepcional.",
  },
  {
    id: 4,
    nombre: "Nike Pegasus Plus",
    precio: "$4,199",
    imgURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8a36278-bdd7-47d6-9e6c-201d3e0820bb/PEGASUS+PLUS.png",
    descripcion: "Innovación y estilo se combinan en este zapato de alto rendimiento."
  },
  {
    id: 5,
    nombre: "Nike Rival Fly 4",
    precio: "$2,399",
    imgURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86a9258e-acac-4ea5-942d-c65614109c1b/NIKE+AIR+ZOOM+RIVAL+FLY+4.png",
    descripcion: "Diseñados para la velocidad, estos zapatos te llevarán más lejos."
  },
  {
    id: 6,
    nombre: "Jordan Heir 'Bloodline'",
    precio: "$2,699",
    imgURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f082446b-4aed-40cd-b4b3-b8ccccd90c66/JORDAN+HEIR.png",
    descripcion: "Un diseño icónico que rinde homenaje a la herencia de Jordan."
  },
  {
    id: 7,
    nombre: "Air Jordan 1 Low SE",
    precio: "$3,249",
    imgURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c897d92-a0ce-488e-bb2a-5e7e766d7614/AIR+JORDAN+1+LOW+SE.png",
    descripcion: "Estilo clásico y comodidad moderna en cada paso."
  },
  {
    id: 8,
    nombre: "Air Jordan Dub Zero",
    precio: "$3,999",
    imgURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c264faee-3451-4d38-963f-e224782fbb42/AIR+JORDAN+DUB+ZERO.png",
    descripcion: "Tecnología avanzada y diseño audaz para los amantes del baloncesto."
  },
  {
    id: 9,
    nombre: "Air Jordan 1 Zoom CMFT 2",
    precio: "$3,599",
    imgURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d6e54aa-7104-47c6-8777-3d838d6980b3/AIR+JORDAN+1+ZM+AIR+CMFT+2.png",
    descripcion: "Comodidad y estilo se unen en este modelo clásico renovado."
  },
  {
    id: 10,
    nombre: "Air Jordan 1 Mid",
    precio: "$3,199",
    imgURL: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9921d678-ed65-49c6-bdcb-e85bebeb7c46/AIR+JORDAN+1+MID.png",
    descripcion: "Un clásico atemporal que nunca pasa de moda."
  },
];

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
            <button data-id="${producto.id}" class="btn-eliminar btn btn-danger">Eliminar</button>
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