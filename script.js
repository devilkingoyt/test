// // Disable right-click context menu
// document.addEventListener('contextmenu', event => event.preventDefault());

// // Disable F12 key and Ctrl+Shift+I combo
// document.addEventListener('keydown', event => {
//   if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
//     event.preventDefault();
//   }
// });


// index image slider

const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider-img');

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method



function indexSlider() {
    setInterval(() => {
        slides[activeSlide].classList.remove('active');
        activeSlide++;
        if (activeSlide === slideCount) {
            activeSlide =0;
        }
        slides[activeSlide].classList.add('active');
    }, 3000);
}
window.onload = indexSlider;

