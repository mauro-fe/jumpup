// COMEÇO HEADER
// Fazer scroll suave do header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// FIM HEADER

//NAV BAR

const navbarIcon = document.getElementById("navbar-icon");
const navbarMobile = document.querySelector(".navbar-mobile");

navbarIcon.addEventListener("click", function () {
    navbarMobile.classList.toggle("active");

})

window.addEventListener("resize", function () {
    if (window.innerWidth >= 870) {
        menuMobile.classList.remove("active");
    }
});
