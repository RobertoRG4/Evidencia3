import { dataHome } from "../../src/informacion";
import $ from "jquery";
import "bootstrap";
$(document).ready(() => {
  let cards = "";
  dataHome.forEach((item, index) => {
    cards += ` 
          <div id="${item.id}" class="card card-width">
            <img
              class="card-img-top"
              src="${item.url}"
            />
            <div class="card-body">
              <h5>${item.nombre}</h5>
              <p class="card-text">${item.precio}</p>
            </div>
          </div>
 `;
  });
  $("#container-main").html(cards);
});
