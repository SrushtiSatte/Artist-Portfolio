
document.addEventListener("DOMContentLoaded", () => {

  const gallery = document.getElementById("galleryScroll");

  if (!gallery) {
    console.error("galleryScroll element not found");
    return;
  }

  let scrollInterval;

  gallery.addEventListener("mouseenter", () => {
    scrollInterval = setInterval(() => {
      gallery.scrollLeft += 2;
    }, 16);
  });

  gallery.addEventListener("mouseleave", () => {
    clearInterval(scrollInterval);
  });

});  

/* MENU TOGGLE FUNCTION */

function toggleMenu() {
  document
    .getElementById("topNavbar")
    .classList.toggle("show");
}