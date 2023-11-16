document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.carrossel img');
  let currentImage = 0;

  function showImage(n) {
    images.forEach(img => img.classList.remove('active'));
    images[n].classList.add('active');
  }

  function nextImage() {
    showImage(currentImage);
    currentImage = (currentImage + 1) % images.length;
  }

  setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos (3000ms)
});
