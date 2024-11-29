import { productos, dataHome } from "../../data/informacion.js";
import $ from "jquery";
import "bootstrap";

const $renderizadoItemsHome = document.getElementById("itemsHome");
const $renderizadoItemsProductos = document.getElementById("itemsProductos");
let status = true;

const crearFilaProducto = (producto) => `
  <tr>
    <td style="width:50px">${producto.id}</td>
    <td style="width:250px">
      <span class="span span-nombre">${producto.nombre}</span>
      <input class="input input-nombre" type="hidden" value="${
        producto.nombre
      }" />
    </td>
    <td style="width:500px">
      <span class="span span-url">${producto.imgURL || producto.url}</span>
      <input class="input input-url" type="hidden" value="${
        producto.imgURL || producto.url
      }" />
    </td>
    <td style="width:120px">
      <span class="span span-precio">${producto.precio}</span>
      <input class="input input-precio" type="hidden" value="${
        producto.precio
      }" />
    </td>
    <td>
      <span class="span span-descripcion">${producto.descripcion || ""}</span>
      <input class="input input-descripcion" type="hidden" value="${
        producto.descripcion || ""
      }" />
    </td>
    <td><button class="editar btn btn-primary">Editar</button></td>
    <td><button class="eliminar btn btn-danger">Eliminar</button></td>
  </tr>
`;

dataHome.forEach((element) => {
  $renderizadoItemsHome.innerHTML += crearFilaProducto(element);
});

productos.forEach((element) => {
  $renderizadoItemsProductos.innerHTML += crearFilaProducto(element);
});

$(document).on("click", ".editar", function () {
  const $button = $(this);
  const $row = $button.closest("tr");
  const inputs = $row.find(".input");
  const spans = $row.find(".span");

  if ($button.text() === "Editar") {
    $button
      .text("Confirmar")
      .removeClass("btn-primary")
      .addClass("btn-success");
    inputs.attr("type", "text");
    spans.hide();
  } else {
    $button.text("Editar").removeClass("btn-success").addClass("btn-primary");
    inputs.attr("type", "hidden");
    spans.each((i, span) => $(span).text($(inputs[i]).val()).show());

    const id = parseInt($row.find("td:first-child").text());
    const elemento =
      productos.find((p) => p.id === id) || dataHome.find((d) => d.id === id);

    if (elemento) {
      elemento.nombre = $row.find(".input-nombre").val();
      elemento.imgURL = $row.find(".input-url").val();
      elemento.precio = $row.find(".input-precio").val();
      elemento.descripcion = $row.find(".input-descripcion").val() || "";
    }
  }
});

$(document).on("click", ".eliminar", function () {
  const $row = $(this).closest("tr");
  const id = parseInt($row.find("td:first-child").text());

  const index = productos.findIndex((p) => p.id === id);
  if (index !== -1) productos.splice(index, 1);

  $row.remove();
});

$(document).on("click", "#agregar", () => {
  if (!status) {
    const toastLiveExample = document.getElementById("liveToast");
    if (toastLiveExample)
      bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();
    return;
  }

  const id = productos.length + 1;
  $renderizadoItemsProductos.innerHTML += `
    <tr>
      <td>${id}</td>
      <td><span id="span-agregar-nombre-${id}"></span><input id="input-agregar-nombre-${id}" type="text" /></td>
      <td><span id="span-agregar-url-${id}"></span><input id="input-agregar-url-${id}" type="text" /></td>
      <td><span id="span-agregar-precio-${id}"></span><input id="input-agregar-precio-${id}" type="text" /></td>
      <td><span id="span-agregar-descripcion-${id}"></span><input id="input-agregar-descripcion-${id}" type="text" /></td>
      <td><button id="agregar-confirmar-${id}" class="btn btn-success">Confirmar</button></td>
    </tr>`;
  status = false;
});

$(document).on("click", "[id^=agregar-confirmar-]", function () {
  const $row = $(this).closest("tr");
  const id = parseInt($row.find("td:first-child").text());
  const nombre = $row.find(`#input-agregar-nombre-${id}`).val();
  const url = $row.find(`#input-agregar-url-${id}`).val();
  const precio = $row.find(`#input-agregar-precio-${id}`).val();
  const descripcion = $row.find(`#input-agregar-descripcion-${id}`).val();

  if (!nombre || !url || !precio || !descripcion) {
    const toastLiveExample = document.getElementById("liveToast");
    if (toastLiveExample)
      bootstrap.Toast.getOrCreateInstance(toastLiveExample).show();
    return;
  }

  productos.push({ id, nombre, imgURL: url, precio, descripcion });
  $row.replaceWith(
    crearFilaProducto({ id, nombre, imgURL: url, precio, descripcion })
  );
  status = true;
});
