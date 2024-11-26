import $ from "jquery";
$(document).ready(() => {
  $("#form-compra").on("submit", (event) => {
    event.preventDefault();
    manejarEnvioFormulario();
  });
});

const manejarEnvioFormulario = () => {
  $("#compra-exitosa").removeClass("d-none");

  setTimeout(() => {
    $("#compra-exitosa").addClass("d-none");
  }, 3000);
};
