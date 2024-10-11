let currentSlide = 0;

function moveSlider(direction) {
  const slider = document.getElementById('slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
