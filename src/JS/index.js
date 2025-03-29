// JavaScript para controlar el menú móvil
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("boton_menu_mobil");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

// add-SERVICIOS
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
});
const services = JSON.parse(localStorage.getItem("services")) || [];
function renderServices() {
  console.log("Cargando servicios:", services); // Depuración
  const container = document.getElementById("services-container");

  if (!container) {
    console.error("No se encontró el contenedor de servicios en el HTML.");
    return;
  }

  container.innerHTML = services
    .map(
      (s) => `
    <div class="flex-shrink-0 w-64 items-center flex flex-col hover:scale-105 transition-all duration-300 relative group">
      <img class="h-48 sm:h-56 md:h-80 object-cover" src="${s.img}" alt="${s.name}">
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col space-y-4 items-center justify-center">
        <p class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 font-sans font-semibold">
          ${s.desc}
        </p>
        <p class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 bg-white bg-opacity-30">
          Precio: $${s.price}
        </p>
      </div>
      <h3 class="font-serif text-xl md:text-2xl text-slate-700 py-2 md:py-3">${s.name}</h3>
    </div>
  `
    )
    .join("");
}
renderServices();

// add-PROMOCIONES
document.addEventListener("DOMContentLoaded", () => {
  renderPromotions();
});
const promotions = JSON.parse(localStorage.getItem("promotions")) || [];

function renderPromotions() {
  console.log("Cargando promociones en la web...");
  const container = document.getElementById("promo-container");

  if (!container) {
    console.error("No se encontró el contenedor de promociones en el HTML.");
    return;
  }

  container.innerHTML = promotions
    .map(
      (p) => `
      <div class="flex flex-col items-center w-72 bg-white hover:scale-105 transition-all">
        <div class="h-52">
          <img class="h-full w-full object-cover object-center" src="${p.img}" alt="${p.title}">
        </div>
        <div class="p-5 space-y-3">
          <h3 class="text-sm font-semibold text-sky-500">${p.service}</h3> 
          <h2 class="text-xl font-semibold text-slate-800 leading-tight">${p.title}</h2>
          <p class="text-slate-500">${p.desc}</p>
        </div>
      </div>
    `
    )
    .join("");

  console.log("Promociones renderizadas:", promotions);
}

renderPromotions();
