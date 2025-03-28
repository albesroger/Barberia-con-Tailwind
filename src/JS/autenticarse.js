// Esto se ejecutará cuando el formulario se envíe
document.getElementById("id_login").addEventListener("submit", function (e) {
  e.preventDefault();     //Previene que el formulario se envíe y recargue la página

  // Obtener valores del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Suponiendo que tengas un array de usuarios (como ejemplo)
  const usuarios = [
    { usuario: "admin", password: "12345", rol: "admin" },
    { usuario: "user", password: "67890", rol: "user" },
  ];

  // Buscar el usuario en el array
  const usuarioEncontrado = usuarios.find(
    (user) => user.usuario === username && user.password === password
  );

  // Si el usuario fue encontrado
  if (usuarioEncontrado) {
    // Guardar el usuario en localStorage
    localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

    // Verificar si el usuario es admin
    if (usuarioEncontrado.rol === "admin") {
      console.log("Redirigiendo a la página de admin...");
      window.location.href = "Admin.html"; // Redirige a admin.html
    } else {
      console.log("Usuario no tiene permisos de admin.");
      alert("Acceso restringido, no eres administrador.");
    }
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});
