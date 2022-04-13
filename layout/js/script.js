const btnMenu = document.getElementById("buttonMenu");
const nav = document.getElementById("navHome");
const iconCart = document.getElementById("iconCart");
const btnAddCart = document.querySelector(".addCart");

const template = document.getElementById("cardTemplate");
const containerProducts = document.querySelector(".containerProducts");

const btnUp = document.querySelector("#btn-up");

const btnSelect = document.querySelector(".selectOrderOptions");
const optionsSelect = document.querySelector(".optionsSelectOrder");

const btnFilter = document.querySelector(".btnFilter");
const modalFilter = document.querySelector(".optionsFilterResponsive");
const btnCloseFilter = document.getElementById("closeModalFilter");

const card = document.querySelector(".card img");


btnMenu.addEventListener("click", () => {
    nav.classList.toggle("navActive");
});


window.addEventListener("click", (e) => {
    if(e.target != nav && e.target != btnMenu && nav.classList.contains("navActive")){
        nav.classList.toggle("navActive");
    }
    if(e.target != btnSelect && e.target != optionsSelect && optionsSelect.classList.contains("selectActive")){
        optionsSelect.classList.remove("selectActive");
    }
});


btnAddCart.addEventListener("click", () => {
    iconCart.classList.replace("fa-cart-shopping", "fa-check");
    btnAddCart.classList.add("addCartChecked");

    setTimeout(() => {
        iconCart.classList.replace("fa-check" , "fa-cart-shopping");
        btnAddCart.classList.remove("addCartChecked");
    },1000);
});

for (let index = 0; index < 7; index++) {
    let clonado = template.cloneNode(true);
    clonado.removeAttribute("id");
    containerProducts.appendChild(clonado);
}

btnUp.addEventListener("click", () => {
    var currentScroll = document.documentElement.scrollTop;

    if(currentScroll > 0){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

window.onscroll = () => {
    
    // Barra de scroll donde esta
    var scroll = document.documentElement.scrollTop;

    if(scroll > 100){
        btnUp.style.transform = "scale(1)";
    }else if(scroll < 100){
        btnUp.style.transform = "scale(0)";
    }

}


btnSelect.addEventListener("click", () => {
    optionsSelect.classList.toggle("selectActive");
});


btnFilter.addEventListener("click", () => {
    modalFilter.classList.add("modalFilterActive");
});

btnCloseFilter.addEventListener("click", () => {
    modalFilter.classList.remove("modalFilterActive")
});

console.log(card);
card.addEventListener("click", () => {
    location.href = "product.html";
});