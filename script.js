const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;
let slideInterval;


// Show slide
function showSlide(index) {
slides.forEach(slide => slide.classList.remove('active'));
dots.forEach(dot => dot.classList.remove('active'));
slides[index].classList.add('active');
dots[index].classList.add('active');
}


// Next slide
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}


// Previous slide
function prevSlide() {
currentIndex = (currentIndex - 1 + slides.length) % slides.length;
showSlide(currentIndex);
}
// Auto slide
function startAutoSlide() {
slideInterval = setInterval(nextSlide, 3000);
}


// Stop auto slide
function stopAutoSlide() {
clearInterval(slideInterval);
}


// Button events
nextBtn.addEventListener('click', () => {
stopAutoSlide();
nextSlide();
startAutoSlide();
});
prevBtn.addEventListener('click', () => {
stopAutoSlide();
prevSlide();
startAutoSlide();
});


// Dot navigation
dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
stopAutoSlide();
currentIndex = index;
showSlide(currentIndex);
startAutoSlide();
});
});


// Start slider
startAutoSlide();
