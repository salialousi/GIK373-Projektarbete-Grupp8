//Function to change panel name
function openPanel(panel) {
    if (panel === "#") {
        document.title = "Världens vatten";
    } else if (panel === "about") {
        document.title = "Världens vatten - Om oss";
    } else if (panel === "facts") {
        document.title = "Världens vatten - Fakta";
    } else if (panel === "testimonials") {
        document.title = "Coffee - Testimonials";
    } else if (panel === "gallery") {
        document.title = "Coffee - Gallery";
    } else if (panel === "contact") {
        document.title = "Coffee - Contact us";
    }
}

const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButtoon = document.querySelector("#menu-open-button");
const menuCloseButtoon = document.querySelector("#menu-close-button");

menuOpenButtoon.addEventListener("click", () => {
    //Toogle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

//Close menu when the close button is clicked
menuCloseButtoon.addEventListener("click", () => menuOpenButtoon.click());

//Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButtoon.click());
});

// Initialize video-swiper for home section
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
    });
});

window.addEventListener("scroll", function () {
    const header = this.document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});