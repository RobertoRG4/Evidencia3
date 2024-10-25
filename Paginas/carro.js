$(document).ready(() => {
  const actualizarItemCount = () => {
    let itemCount = localStorage.getItem("items") || 0;
    $("#item-count").text(itemCount);
  };

  actualizarItemCount();

  window.addEventListener("storage", (event) => {
    if (event.key === "items") {
      actualizarItemCount();
    }
  });
});
