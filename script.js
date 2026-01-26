const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-list a");

// Função para abrir/fechar menu
function toggleMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
    body.classList.toggle("no-scroll"); // Trava/Destrava o scroll
}

hamburger.addEventListener("click", toggleMenu);

// Fechar o menu e destravar o scroll ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
        body.classList.remove("no-scroll");
    });
});