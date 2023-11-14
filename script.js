const openMenuBtn = document.getElementById("open")
const closeMenuBtn = document.getElementById("close")
const phoneMenu = document.getElementById("phone-menu")

function openMenu() {
    openMenuBtn.style.display = "none"
    closeMenuBtn.style.display = "block"
    phoneMenu.style.display = "flex"
}

openMenuBtn.addEventListener("click", openMenu) 

function closeMenu() {
    openMenuBtn.style.display = "block"
    closeMenuBtn.style.display = "none"
    phoneMenu.style.display = "none"
}

closeMenuBtn.addEventListener("click", closeMenu) 

const header = document.getElementById("header")
const header2 = document.getElementById("header2")

window.addEventListener("scroll", function() {
    header.classList.toggle("blurbackground", window.scrollY > 80)
});

window.addEventListener("scroll", function() {
    header2.classList.toggle("blurbackground", window.scrollY > 80)
});

console.log(header);
