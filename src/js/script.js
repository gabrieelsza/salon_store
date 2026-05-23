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


const btnMenu = document.getElementById("btn-menu"); 
const navLinks = document.querySelector(".bar-nav-desktop")

btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show"); 
    navLinks.classList.toggle("fa-times"); 
    navLinks.classList.toggle("fa-bars"); 

}); 

const serviceDesc = document.querySelector(".service-desc");
const galeria = document.querySelector(".galeria");

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        entries[0].target.classList.add("show")
    }  else {
        entries[0].target.classList.remove("show")
    } 
}, {
    threshold: 0.5, 
    rootMargin: "0px 0px 0px 400px"
}); 

observer.observe(serviceDesc);
observer.observe(galeria);