// Scroll to top button
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// dark-light theme switcher
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
})

// Responsive website
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelector("#nav-link");

hamburger.addEventListener("click", openMenu);

function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}