let data = [
  {
    id: 1,
    nombre: "Nike Journey Run",
    precio: "$2,099",
    imgURL:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee48e9b8-83fa-4432-8db3-68bef3905a06/NIKE+JOURNEY+RUN.png",
  },
];
$(document).ready(() => {
  $("#cards").html();
  data.forEach((item) => {
    $("#cards").html(
      `<div class="card text-center" style="width: 18rem">
                             <img src=${item.imgURL} class="card-img-top" alt="..." />
                            <div class="card-body">
                            <h5 class="card-title">${item.nombre}</h5>
                          <p class="card-text" >
${item.precio}
                  </p>
<button class="btn text-white bg-black p-3 button-class m-4">
Ver
              </button>

                </div>
              </div>
`,
    );
    console.log(item.id);
  });
});
