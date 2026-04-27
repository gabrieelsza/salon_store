window.sr = new ScrollReveal();

sr.reveal('.headline-easy', {
    origin: 'top',
    delay: 750,
});

sr.reveal('.headline-medium', {
    origin: 'top',
    delay: 1000,
});

sr.reveal('.headline-hard', {
    origin: 'top',
    delay: 1200,
});

sr.reveal('.desc-animation', {
    origin: 'left',
    delay: 500,
    distance: "20px"
});

sr.reveal('.image-animation', {
    origin: 'rigth',
    delay: 500,
    distance: "100px"
});

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});