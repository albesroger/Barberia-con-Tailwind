document.addEventListener('DOMContentLoaded', () => {
  renderPromotions();
});

const promotions = JSON.parse(localStorage.getItem('promotions')) || [];

function addPromotion() {
  const service = document.getElementById('promo-service').value;
  const title = document.getElementById('promo-title').value;
  const desc = document.getElementById('promo-desc').value;
  const img = document.getElementById('promo-img').value;

  if (service && title && desc && img) {
    promotions.push({ service, title, desc, img });
    localStorage.setItem('promotions', JSON.stringify(promotions));
    renderAdminPromotions();

    document.getElementById('promo-service').value = '';
    document.getElementById('promo-title').value = '';
    document.getElementById('promo-desc').value = '';
    document.getElementById('promo-img').value = '';
  }
}

function removePromotion(index) {
  promotions.splice(index, 1);
  localStorage.setItem('promotions', JSON.stringify(promotions));
  renderAdminPromotions();
  renderPromotions();
}

function renderAdminPromotions() {
  const list = document.getElementById('promo-list');
  list.innerHTML = promotions
    .map(
      (p, i) => `
        <li class="flex justify-between items-center p-0 pl-3 bg-transparent border-2 hover:bg-white border-white rounded-lg ">
          ${p.service} - ${p.title} 
          <button onclick="removePromotion(${i})" class="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 py-1">Eliminar</button>
        </li>
      `
    )
    .join('');
}

renderAdminPromotions();
