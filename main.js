const data = [
  {
    id: 1,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/94cbff26-d461-4cac-85a2-052f7d884487/NIKE+ZOOMX+VAPORFLY+NEXT%25+3.png",
    nombre: "Nike Vaporfly 3",
    precio: "$5,399",
  },
  {
    id: 2,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9df887f6-b642-4788-9db0-8502f0be219f/AIR+ZOOM+ALPHAFLY+NEXT%25+3+EK.png",
    nombre: "Nike Alphafly 3 'Eliud Kipchoge'",
    precio: "$6,699",
  },
  {
    id: 3,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9b21da-6e5f-43ec-bab3-6cb8c86cf85d/NIKE+DEFYALLDAY.png",
    nombre: "Nike Defy All Day",
    precio: "$1,599",
  },
  {
    id: 4,
    url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cb012097-eead-47a5-8674-1c63b656b1b0/W+NIKE+DOWNSHIFTER+13.png",
    nombre: "Nike Downshifter 13",
    precio: "$1,799",
  },
];
const containerDiv = document.getElementById("container-main");
$(document).ready(() => {
  let cards = "";
  data.forEach((item, index) => {
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
