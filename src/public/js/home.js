const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.carousel-button-left');
const rightButton = document.querySelector('.carousel-button-right');
const items = Array.from(track.children);
const itemWidth = items[0].getBoundingClientRect().width;

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = 'translateX(' + (-itemWidth * currentIndex) + 'px)';
}

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        updateCarousel();
    }
});

rightButton.addEventListener('click', () => {
    if (currentIndex < items.length - 2) {
        currentIndex += 1;
        updateCarousel();
    }
});
