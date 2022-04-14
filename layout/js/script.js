const btnMenu = document.getElementById("buttonMenu");
const nav = document.getElementById("navHome");
const iconCart = document.getElementById("iconCart");

btnMenu.addEventListener("click", () => {
    nav.classList.toggle("navActive");
});


window.addEventListener("click", (e) => {
    if (e.target != nav && e.target != btnMenu && nav.classList.contains("navActive")) {
        nav.classList.toggle("navActive");
    }
});

if (window.location.href.includes("index.html") || window.location.href.includes("mangas.html")) {
    const btnAddCart = document.querySelector(".addCart");

    const template = document.getElementById("cardTemplate");
    const containerProducts = document.querySelector(".containerProducts");

    for (let index = 0; index < 7; index++) {
        let clonado = template.cloneNode(true);
        clonado.removeAttribute("id");
        containerProducts.appendChild(clonado);
    }

    btnAddCart.addEventListener("click", () => {
        iconCart.classList.replace("fa-cart-shopping", "fa-check");
        btnAddCart.classList.add("addCartChecked");

        setTimeout(() => {
            iconCart.classList.replace("fa-check", "fa-cart-shopping");
            btnAddCart.classList.remove("addCartChecked");
        }, 1000);
    });
}

const btnUp = document.querySelector("#btn-up");

if (window.location.href.includes("mangas.html")) {
    const btnSelect = document.querySelector(".selectOrderOptions");
    const optionsSelect = document.querySelector(".optionsSelectOrder");

    btnSelect.addEventListener("click", () => {
        optionsSelect.classList.toggle("selectActive");
    });

    window.addEventListener("click", (e) => {
        if (e.target != btnSelect && e.target != optionsSelect && optionsSelect.classList.contains("selectActive")) {
            optionsSelect.classList.remove("selectActive");
        }
    });


    const btnFilter = document.querySelector(".btnFilter");
    const modalFilter = document.querySelector(".optionsFilterResponsive");
    const btnCloseFilter = document.getElementById("closeModalFilter");

    btnFilter.addEventListener("click", () => {
        modalFilter.classList.add("modalFilterActive");
    });

    btnCloseFilter.addEventListener("click", () => {
        modalFilter.classList.remove("modalFilterActive")
    });
}

let locations = ["account.html", "orders.html"];

locations.map(location => {
    if (window.location.href.includes(location)) {
        const btnSubmenu = document.querySelector(".btnSubmenu");
        const btnCloseSubmenu = document.getElementById("closeModalAccount");
        const submenu = document.querySelector(".submenuFloat");
    
        console.table([btnSubmenu, btnCloseSubmenu, submenu]);
    
        btnSubmenu.addEventListener("click", () => {
            submenu.classList.add("submenuActive");
        });
    
        btnCloseSubmenu.addEventListener("click", () => {
            submenu.classList.remove("submenuActive");
        });
    }
});

btnUp.addEventListener("click", () => {
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

window.onscroll = () => {

    // Barra de scroll donde esta
    var scroll = document.documentElement.scrollTop;

    if (scroll > 100) {
        btnUp.style.transform = "scale(1)";
    } else if (scroll < 100) {
        btnUp.style.transform = "scale(0)";
    }

}

if (window.location.href === "account.html") {
    const card = document.querySelector(".card img");
    card.addEventListener("click", () => {
        location.href = "product.html";
    });

}