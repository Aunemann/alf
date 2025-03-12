    // Bildegalleri-logikk
    function changeMainImage(thumb) {
        const mainContainer = thumb.closest('.gallery-container');
        const mainImage = mainContainer.querySelector('.main-image');
        mainImage.src = thumb.dataset.full;
        mainImage.classList.add('confirm-animation');
        setTimeout(() => mainImage.classList.remove('confirm-animation'), 500);
      }
      function zoomImage(img) {
        img.classList.toggle('zoomed');
        img.style.transform = img.classList.contains('zoomed') 
          ? 'scale(2) translateY(-20%)' 
          : 'scale(1)';
      }
      // Betalingsflyt
      function showPaymentInstructions() {
        document.getElementById('payment-instructions').classList.remove('hidden');
        document.body.scrollIntoView({ behavior: 'smooth' });
      }
      function confirmPayment() {
        alert('Takk for din bestilling! Vi kontakter deg for leveringsdetaljer.');
        document.getElementById('payment-instructions').classList.add('hidden');
      }
      // Utvid-produktkort (om man klikker utenom knappen)
      document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (!e.target.closest('button')) {
            card.classList.toggle('expanded');
          }
        });
      });