import { dataDescripcion, productos, dataHome } from "../informacion.js";
const $renderizadoItemsHome = document.getElementById("itemsHome");
const $renderizadoItemsProductos = document.getElementById("itemsProductos");
const $renderizadoItemsDescripcion =
  document.getElementById("itemsDescripcion");
dataHome.forEach((element, index) => {
  $renderizadoItemsHome.innerHTML += `<tr><td>${element.id}</td><td>${element.nombre}</td><td>${element.url}</td><td>${element.precio}</td></tr>`;
});
productos.forEach((element, index) => {
  $renderizadoItemsProductos.innerHTML += `<tr><td>${element.id}</td><td>${element.nombre}</td><td>${element.imgURL}</td><td>${element.precio}</td></tr>`;
});
dataDescripcion.forEach((element, index) => {
  $renderizadoItemsDescripcion.innerHTML += `<tr><td>${element.id}</td><td>${element.nombre}</td><td>${element.imgURL}</td><td>${element.precio}</td><td>${element.descripcion}</td></tr>`;
});
