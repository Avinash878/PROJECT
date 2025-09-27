const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});