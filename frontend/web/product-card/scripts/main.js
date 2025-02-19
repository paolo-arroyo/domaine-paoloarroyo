document.addEventListener('DOMContentLoaded', function () {
  const swatchButtons = document.querySelectorAll('.color-swatch');
  const primaryImage = document.querySelector('.primary-image');
  const secondaryImage = document.querySelector('.secondary-image');

  // Select the first swatch button by default
  if (swatchButtons.length > 0) {
    swatchButtons[0].style.border = '2px solid blue';
  }

  swatchButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      swatchButtons.forEach((btn) => (btn.style.border = 'none'));
      this.style.border = '2px solid blue';
      primaryImage.src = this.dataset.primaryImage;
      secondaryImage.src = this.dataset.hoverImage;
    });
  });
});