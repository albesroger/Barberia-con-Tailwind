const services = JSON.parse(localStorage.getItem("services")) || [];

function addService() {
  const name = document.getElementById("service-name").value;
  const desc = document.getElementById("service-desc").value;
  const price = document.getElementById("service-price").value;
  const img = document.getElementById("service-img").value;

  if (name && desc && price && img) {
    services.push({ name, desc, price, img });
    localStorage.setItem("services", JSON.stringify(services));
    renderAdminServices();
    renderServices(); // Para actualizar la página de usuario
  }
}

function removeService(index) {
  services.splice(index, 1);
  localStorage.setItem("services", JSON.stringify(services));
  renderAdminServices();
  renderServices();
}

function renderAdminServices() {
  const list = document.getElementById("services-list");
  list.innerHTML = services
    .map(
      (s, i) => `
      <li class="flex justify-between items-center p-0 pl-3 bg-transparent border-2 hover:bg-white border-white rounded-lg ">
        ${s.name} - $${s.price}
        <button onclick="removeService(${i})" class="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 py-1">Eliminar</button>
      </li>
    `
    )
    .join("");
}

renderAdminServices();
