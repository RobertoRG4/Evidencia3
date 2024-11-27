import $ from "jquery";
$(document).on("scroll", () => {
  if (window.scrollY > 900) {
    $("#nav").removeClass("bg-transparent").addClass("bg-white");
  } else {
    $("#nav").addClass("bg-transparent");
  }
});
