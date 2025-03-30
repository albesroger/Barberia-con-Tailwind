
document.addEventListener('DOMContentLoaded', function () {

  const currentPage = window.location.pathname.split('/').pop();


  if (currentPage === 'login.html' || currentPage === 'registarse.html') {
    return;
  }


  const usuarioStr = localStorage.getItem('usuario');
  let usuario;
  try {
    usuario = usuarioStr ? JSON.parse(usuarioStr) : null;
  } catch (error) {
    usuario = null;
  }

 
  if (!usuario || usuario.rol !== 'admin') {
    window.location.href = 'login.html';
  }
});
