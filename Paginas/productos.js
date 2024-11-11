import { productos } from "../informacion";
$(document).ready(() => {
  let cardsHtml = "";
  productos.forEach((item, index) => {
    cardsHtml += `
      <div class="card text-center m-4" style="width: 18rem">
        <a href="producto.html?id=${item.id}" style="text-decoration: none; color: inherit;">
          <img src="${item.imgURL}" class="card-img-top" alt="${item.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.precio}</p>
          </div>
        </a>
      </div>
    `;
  });
  $("#cards").html(cardsHtml);
});
