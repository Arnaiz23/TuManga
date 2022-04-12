const btnMenu = document.getElementById("buttonMenu");
const nav = document.getElementById("navHome");


btnMenu.addEventListener("click", () => {
    nav.classList.toggle("navActive");
});


window.addEventListener("click", (e) => {
    if(e.target != nav && e.target != btnMenu && nav.classList.contains("navActive")){
        nav.classList.toggle("navActive");
    }
});