// JavaScript to handle the slider functionality
let currentSlide = 0; // Index for the current slide
const slides = document.querySelectorAll('.slide'); // All slides
const totalSlides = slides.length; // Total number of slides

// Function to move the slider
function moveSlide(direction) {
    const slider = document.getElementById('slider');

    // Update the current slide index
    currentSlide += direction;

    // Handle infinite loop: if we're at the last slide, go back to the first one, and vice versa
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Calculate the width of a single slide (assumes all slides are the same width)
    const slideWidth = slides[0].clientWidth;

    // Move the slider by adjusting the transform property
    slider.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
}

// Event listeners for prev and next buttons
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
