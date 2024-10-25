$(document).ready(() => {
  const renderProductos = () => {
    const productos = localStorage.getItem("items");
    if (productos === null) {
      $("#render-productos").html(
        `<div class="container d-flex align-items-center justify-content-center" style="height:100vh;">No hay productos en la canasta</div>`,
      );
    } else {
      $("#render-productos").html(`
        <p>Hello</p>
        <button id="limpiar-carro">Limpiar Carro</button>
      `);
      $("#limpiar-carro").on("click", () => {
        localStorage.clear();
        renderProductos();
      });
    }
  };

  renderProductos();
});
