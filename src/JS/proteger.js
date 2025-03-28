// Este script debe ir en las páginas que deben ser protegidas, como admin.html
document.addEventListener("DOMContentLoaded", function() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Verificar si el usuario está logueado y si es admin
  if (!usuario || usuario.rol !== "admin") {
    // Si no es admin o no está logueado, redirigir al login
    window.location.href = "login.html";
  }
});
