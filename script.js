const menuButton = document.getElementById("menu");
const navBar = document.querySelector(".navbar");

menuButton.addEventListener("click",()=>{
    menuButton.style.opacity=0.5;
    navBar.classList.toggle("hidden");
});