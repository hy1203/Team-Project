const navbarToggler = document.querySelector('.navbar-toggler');
const carousel = document.querySelector('#carouselExampleControls');
if (navbarToggler !== null && carousel !== null) {
    navbarToggler.addEventListener('click', () => {
        if (carousel.classList.contains('slide-down')) {
            carousel.classList.remove('slide-down');
        } else {
            carousel.classList.add('slide-down');
        }
    });
    function adjustSlidePosition() {
        if (carousel.classList.contains('slide-down') && window.innerWidth >= 992) {
            carousel.classList.remove('slide-down');
        }
    }
    window.addEventListener('resize', () => {
        adjustSlidePosition();
    });
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        if (carousel.classList.contains('slide-down')) {
            carousel.classList.remove('slide-down');
        } else {
            carousel.classList.add('slide-down');
        }
    });
}

$(function() {
    $("#scroller").simplyScroll({
        pauseOnHover:false
    });
});