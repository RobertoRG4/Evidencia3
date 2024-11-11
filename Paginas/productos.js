let data = [
  {
    id: 1,
    nombre: "Nike Journey Run",
    precio: "$2,099",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee48e9b8-83fa-4432-8db3-68bef3905a06/NIKE+JOURNEY+RUN.png",
  },
  {
    id: 2,
    nombre: "Nike Vomero 17",
    precio: "$3,499",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6e2c11db-1b66-4f12-9395-5d8235603da9/W+NIKE+VOMERO+17.png",
  },
  {
    id: 3,
    nombre: "Nike Air Zoom Arcadia 2",
    precio: "$1,799",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/748f8a26-e20b-4e0c-95e4-a5b513c97e9a/NIKE+AIR+ZOOM+ARCADIA+2+%28GS%29.png",
  },
  {
    id: 4,
    nombre: "Nike Pegasus Plus",
    precio: "$4,199",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8a36278-bdd7-47d6-9e6c-201d3e0820bb/PEGASUS+PLUS.png",
  },
  {
    id: 5,
    nombre: "Nike Rival Fly 4",
    precio: "$2,399",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/86a9258e-acac-4ea5-942d-c65614109c1b/NIKE+AIR+ZOOM+RIVAL+FLY+4.png",
  },
  {
    id: 6,
    nombre: "Jordan Heir 'Bloodline'",
    precio: "$2,699",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f082446b-4aed-40cd-b4b3-b8ccccd90c66/JORDAN+HEIR.png",
  },
  {
    id: 7,
    nombre: "Air Jordan 1 Low SE",
    precio: "$3,249",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c897d92-a0ce-488e-bb2a-5e7e766d7614/AIR+JORDAN+1+LOW+SE.png",
  },
  {
    id: 8,
    nombre: "Air Jordan Dub Zero",
    precio: "$3,999",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c264faee-3451-4d38-963f-e224782fbb42/AIR+JORDAN+DUB+ZERO.png",
  },
  {
    id: 9,
    nombre: "Air Jordan 1 Zoom CMFT 2",
    precio: "$3,599",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d6e54aa-7104-47c6-8777-3d838d6980b3/AIR+JORDAN+1+ZM+AIR+CMFT+2.png",
  },
  {
    id: 10,
    nombre: "Air Jordan 1 Mid",
    precio: "$3,199",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9921d678-ed65-49c6-bdcb-e85bebeb7c46/AIR+JORDAN+1+MID.png",
  },
];

$(document).ready(() => {
  let cardsHtml = "";
  data.forEach((item, index) => {
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
