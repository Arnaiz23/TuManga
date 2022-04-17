const views = ["account", "address", "cards", "comments", "index", "mangas", "orderDetails", "orders", "payment", "product", "shoppingCart"];

views.map(view => {
    if(location.href.includes(view)){
        const btnMenu = document.getElementById("buttonMenu");
        const nav = document.getElementById("navHome");
        const iconCart = document.getElementById("iconCart");

        const btnUp = document.querySelector("#btn-up");
        
        const btnLogout = document.getElementById("btnLogout");

        const platform = document.getElementById("btnAccessPanel")

        platform.addEventListener("click", () => {
            location.href = "adminPanel.html"
        })
        
        btnMenu.addEventListener("click", () => {
            nav.classList.toggle("navActive");
        });
        
        btnLogout.addEventListener("click", () => location.href = "login.html")
        
        window.addEventListener("click", (e) => {
            if (e.target != nav && e.target != btnMenu && nav.classList.contains("navActive")) {
                nav.classList.toggle("navActive");
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
    }
})



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

let locations = ["account.html", "orders.html", "address.html", "cards.html", "comments.html"];

locations.map(location => {
    if (window.location.href.includes(location)) {
        const btnSubmenu = document.querySelector(".btnSubmenu");
        const btnCloseSubmenu = document.getElementById("closeModalAccount");
        const submenu = document.querySelector(".submenuFloat");
    
        btnSubmenu.addEventListener("click", () => {
            submenu.classList.add("submenuActive");
        });
    
        btnCloseSubmenu.addEventListener("click", () => {
            submenu.classList.remove("submenuActive");
        });
    }
});

if(location.href.includes("orders")){
    const btnModal = document.querySelector(".btnShowOrderInfo");
    const modal = document.querySelector(".modalOrderInfo");

    btnModal.addEventListener("click", () => {
        modal.classList.add("modalOrderActive");
    })

    window.addEventListener("click", (e) => {
        if(e.target != btnModal && e.target != modal && modal.classList.contains("modalOrderActive")){
            modal.classList.remove("modalOrderActive");
        }
    })
}

if(location.href.includes("cards")){
    const template = document.getElementById("templateCard");
    const containerProducts = document.querySelector(".containerGrid");

    for (let index = 0; index < 4; index++) {
        let clonado = template.cloneNode(true);
        clonado.removeAttribute("id");
        containerProducts.appendChild(clonado);
    }
}



if (window.location.href.includes("mangas")) {
    const card = document.querySelector(".card img");
    card.addEventListener("click", () => {
        location.href = "product.html";
    });

}

if(location.href.includes("shopping")){
    const btnFinish = document.querySelector(".btn.btn-success");

    btnFinish.addEventListener("click", () => location.href = "payment.html")
}

if(location.href.includes("payment.html")){
    const btnChange = document.querySelectorAll(".changeData");
    const btnClose = document.querySelectorAll(".dataDownClose")

    const modal = document.querySelector(".modalBackground")
    const btnCloseModal = document.getElementById("btnCloseModal")
    const btnModal = document.querySelectorAll(".dataDown .rowEnd .btn")

    btnChange.forEach(e =>{
        e.addEventListener("click", () => {
            e.parentElement.nextElementSibling.classList.add("dataDownShow")
        })
    })

    btnClose.forEach(e =>{
        e.addEventListener("click", () => {
            e.parentElement.parentElement.classList.remove("dataDownShow")
        })
    })

    btnModal.forEach(e => {
        e.addEventListener("click", () => {
            modal.classList.add("modalBackgroundShow")
        })
    })

    btnCloseModal.addEventListener("click", () => {
        modal.classList.remove("modalBackgroundShow")
    })
}

const viewsLog = ["login", "logout"];

if(location.href.includes(viewsLog[0])){
    const formLogin = document.querySelector(".contentLog form")

    const btnGoLogOut = document.querySelector(".btn-light")

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()
        location.href = "index.html"
    })
    btnGoLogOut.addEventListener("click", () => location.href = "logout.html")
}

if(location.href.includes(viewsLog[1])){
    const formLogOut = document.querySelector(".contentLog form")

    const btnGoLogIn = document.querySelector(".btn-light")

    btnGoLogIn.addEventListener("click", () => location.href = "login.html")
    formLogOut.addEventListener("submit", (e) => {
        e.preventDefault()
        location.href = "index.html"
    })
}

if(location.href.includes("recoverPassword")){
    const form = document.querySelector("form")

    form.addEventListener("submit", e => {
        e.preventDefault()
        location.href = "index.html"
    })
}

if(location.href.includes("adminPanel")){
    const goLogin = document.querySelector("#goBack")

    const users = document.querySelector("#btnUser")
    const users2 = document.querySelector("#btnUser2")

    const home = document.querySelector(".adminBrand")

    home.addEventListener("click", () => location.href = "adminPanel.html")

    goLogin.addEventListener("click", () => location.href = "index.html")

    users.addEventListener("click", () => {location.href = "adminPanel2.html"})
    users2.addEventListener("click", () => {location.href = "adminPanel2.html"})

}

if(location.href.includes("adminPanel2")){
    const closeModal = document.querySelector(".modalCenter header i")
    const modal = document.querySelector(".modalInformation")
    const showModal = document.querySelectorAll(".btnShowModal")

    const btnEdit = document.querySelectorAll(".btnEditData")

    const newUser = document.querySelector(".rowAdminTitle button")

    showModal.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.add("showModal")
        })
    })
    
    closeModal.addEventListener("click", () => {
        modal.classList.remove("showModal")
    })


    btnEdit.forEach(btn => {
        btn.addEventListener("click", () => location.href = "adminPanel3.html")
    })

    newUser.addEventListener("click", () => {
        location.href = "adminPanel4.html"
    })
}

if(location.href.includes("adminPanel3") || location.href.includes("adminPanel4")){
    const btnSave = document.querySelector(".containerAdminCenter footer button")

    btnSave.addEventListener("click", () => {
        location.href = "adminPanel2.html"
    })
}