function initCarousel(carouselId, leftButtonId, rightButtonId) {
    const track = document.querySelector(`#${carouselId} .carousel-track`);
    const leftButton = document.getElementById(leftButtonId);
    const rightButton = document.getElementById(rightButtonId);
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
}

document.addEventListener('DOMContentLoaded', function () {
    initCarousel('carousel-1', 'carousel-1-left', 'carousel-1-right');
    initCarousel('carousel-2', 'carousel-2-left', 'carousel-2-right');
});
