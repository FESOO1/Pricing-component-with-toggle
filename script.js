const toggleBtn = document.getElementById('toggleBtn');
const monthlyYearlyTexts = document.querySelector('.plan-yearly-monthly-price');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('toggle-btn-js');
    monthlyYearlyTexts.classList.toggle('price-container-js');
});