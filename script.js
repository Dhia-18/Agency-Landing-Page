const menuButton = document.getElementById("menu");
const navBar = document.querySelector(".top-nav-bar");

menuButton.addEventListener("click",()=>{
    navBar.classList.toggle("active");
});