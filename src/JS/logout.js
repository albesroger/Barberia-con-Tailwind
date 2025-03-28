document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("usuario"); // Eliminar sesión
  window.location.href = "index.html"; // Redirigir al login
});
