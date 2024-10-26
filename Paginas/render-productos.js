const numeroDeProductos = [];
$(document).ready(() => {
  const renderProductos = () => {
    const productos = localStorage.getItem("items");
    if (productos === null) {
      $("#render-productos").html(
        `<div class="container d-flex align-items-center justify-content-center" style="height:100vh;">No hay productos en la canasta</div>`,
      );
    } else {
      let count = 1;
      $("#render-productos").html(`
        <section class="container-fluid">
          <h2 class="m-4">Productos</h2>
          <div class="d-flex justify-content-center" style="width: 100%;">
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/414628b5-29e9-42e1-b6a3-e98d4ec46fbe/JORDAN+TATUM+3.png" class="card-img" style="width:150px" alt="...">
            <div class="m-4">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="d-flex flex-column align-items-center" style="width:200px">
              <p class="m-4">Cantidad</p>
              <p id="cantidad">${count}</p>
              <div>
                <button id="btn-sumar" class="btn btn-secondary">+</button>
                <button id="btn-restar" class="btn btn-secondary">-</button>
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center">            
              <a href="#" class="btn btn-danger">Eliminar</a>
            </div>
          </div>
        </section>
        <button class="btn btn-primary m-5" id="limpiar-carro">Limpiar Carro</button>
      `);

      $("#btn-sumar").on("click", () => {
        count++;
        $("#cantidad").text(count);
      });
      $("#btn-restar").on("click", () => {
        if (count > 1) {
          count--;
          $("#cantidad").text(count);
        }
      });
      $("#limpiar-carro").on("click", () => {
        localStorage.clear();
        renderProductos();
      });
    }
  };

  renderProductos();
});
