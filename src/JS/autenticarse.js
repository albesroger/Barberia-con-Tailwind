// Fu
function validarUsuario(username, password) {
  const usuarios = [
    { usuario: 'admin', password: '12345', rol: 'admin' },
    { usuario: 'user', password: '67890', rol: 'user' },
  ];
  return usuarios.find(
    (user) => user.usuario === username && user.password === password
  );
}


function redireccionarUsuario(usuario) {
  if (usuario.rol === 'admin') {
    console.log('Redirigiendo a la página de admin...');
    window.location.href = 'Admin.html';
  } else {
    console.log('Usuario no tiene permisos de admin.');
    alert('Acceso restringido, no eres administrador.');
  }
}


function manejarLogin(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const usuarioEncontrado = validarUsuario(username, password);

  if (usuarioEncontrado) {
    localStorage.setItem('usuario', JSON.stringify(usuarioEncontrado));
    redireccionarUsuario(usuarioEncontrado);
  } else {
    alert('Usuario o contraseña incorrectos.');
  }
}

function verificarSesion() {
  const usuarioGuardado = localStorage.getItem('usuario');
  if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);
    redireccionarUsuario(usuario);
    return true;
  }
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  if (!verificarSesion()) {
    const formLogin = document.getElementById('id_login');
    if (formLogin) {
      formLogin.addEventListener('submit', manejarLogin);
    }
  }
});
