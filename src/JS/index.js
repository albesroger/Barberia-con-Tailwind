
// JavaScript para controlar el menú móvil
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("boton_menu_mobil");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
});
