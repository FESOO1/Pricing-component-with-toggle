const toggleBtn = document.getElementById('toggleBtn');
const monthlyYearlyTexts = document.querySelectorAll('.plan-yearly-monthly-price');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('toggle-btn-js');
    for (const priceText of monthlyYearlyTexts) {
        priceText.classList.toggle('price-container-js');
    };
});