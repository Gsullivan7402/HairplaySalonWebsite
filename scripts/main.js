// scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Meet the Team carousel
    const images = document.querySelectorAll('.carousel-images .carousel-item');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((item, i) => {
            item.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 5000); // Change images every 5 seconds
    showImage(currentIndex);

    // Start carousel with Lisa
    const startIndex = Array.from(images).findIndex(item => item.querySelector('img').alt === 'Lisa');
    if (startIndex !== -1) {
        currentIndex = startIndex;
        showImage(currentIndex);
    }

    // Testimonials carousel
    const testimonials = document.querySelectorAll('.testimonial-column p');
    let testimonialIndex = 0;
    const testimonialsToShow = 3; // Number of testimonials to show at once

    function showTestimonials(index) {
        testimonials.forEach((testimonial, i) => {
            if (i >= index && i < index + testimonialsToShow) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
    }

    function nextTestimonial() {
        testimonialIndex = (testimonialIndex + 1) % (testimonials.length - testimonialsToShow + 1);
        showTestimonials(testimonialIndex);
    }

    setInterval(nextTestimonial, 5000); // Change testimonials every 5 seconds
    showTestimonials(testimonialIndex);
});
