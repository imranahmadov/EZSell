//menu-toggle
let menuToggle = document.getElementsByClassName("menu-toggle")[0];
let responsiveNav = document.getElementsByClassName("responsive-nav")[0];
cart = document.getElementsByClassName("cart-container")[0];
orders = document.getElementsByClassName("orders-container")[0];
menuToggle.onclick = function() {
    responsiveNav.classList.toggle("activated-nav");
}

//change responsive-nav active status
let navResponsive = document.getElementsByClassName("responsive-nav")[0];
let ulNav = navResponsive.firstElementChild;
let productTabs = document.getElementsByClassName("product-tabs")[0];

for (let i = 0; i < ulNav.children.length; i++) {
    ulNav.children[i].onclick = function(event) {
        event.preventDefault();
        if (i == 0) {
            orders.classList.add("d-none");
            cart.classList.remove("d-none");

        } else {
            cart.classList.add("d-none");
            orders.classList.remove("d-none")
        }
        ulNav.children[i].classList.add("active");
        for (let j = 0; j < ulNav.children.length; j++) {
            if (j != i) {
                ulNav.children[j].classList.remove("active");
            }
        }
    }
}

//checkbox select all items in cart
let checkboxSelectAll = document.getElementById("checkboxSelectAll");
let checkBoxDiv = document.getElementsByClassName("item-checkbox");
checkboxSelectAll.onclick = function() {
        for (let i = 0; i < checkBoxDiv.length; i++) {
            if (checkboxSelectAll.checked == true) {
                checkBoxDiv[i].firstElementChild.checked = true;
            } else {
                checkBoxDiv[i].firstElementChild.checked = false;
            }
        }
    }
    //checkbox select all event on no selected and all selected
for (let i = 0; i < checkBoxDiv.length; i++) {
    checkBoxDiv[i].onclick = function() {
        countChecked = 0;
        for (let j = 0; j < checkBoxDiv.length; j++) {
            if (checkBoxDiv[j].firstElementChild.checked == true) countChecked++;
        }
        if (countChecked < checkBoxDiv.length) checkboxSelectAll.checked = false;
        if (countChecked == checkBoxDiv.length) checkboxSelectAll.checked = true;
    }
}
// input select value 10
let qtyDropdownList = document.getElementsByClassName("quantity-select");
let qtyUpdateBtn = document.getElementsByClassName("quantity-update");
let qtyEnter = document.getElementsByClassName("quantity-enter");
for (let i = 0; i < qtyDropdownList.length; i++) {
    qtyDropdownList[i].onchange = function() {
        if (qtyDropdownList[i].options[qtyDropdownList[i].selectedIndex].value == 10) {
            for (let m = 0; m < qtyDropdownList[i].children.length; m++) {
                qtyDropdownList[i].children[m].removeAttribute("selected");
            }
            qtyDropdownList[i].classList.add("d-none");
            qtyEnter[i].classList.remove("d-none");
            qtyUpdateBtn[i].classList.remove("d-none");
        }
    }
    qtyUpdateBtn[i].onclick = function() {
        if (qtyEnter[i].firstElementChild.value >= 10) {
            qtyUpdateBtn[i].classList.add("d-none");
        } else if (qtyEnter[i].firstElementChild.value > 0 && qtyEnter[i].firstElementChild.value < 10) {
            qtyDropdownList[i].classList.remove("d-none");
            qtyEnter[i].classList.add("d-none");
            for (let j = 0; j < qtyDropdownList[i].children.length; j++) {
                if (qtyDropdownList[i].children[j].getAttribute("value") == qtyEnter[i].firstElementChild.value) {
                    for (let k = 0; k < qtyDropdownList[i].children.length; k++) {
                        if (k != j) {
                            qtyDropdownList[i].children[k].removeAttribute("selected");
                        }
                        qtyDropdownList[i].children[j].setAttribute("selected", "selected");
                        qtyUpdateBtn[i].classList.add("d-none");
                    }
                }
            }
        }
    }
    qtyEnter[i].firstElementChild.onfocus = function() {
        qtyUpdateBtn[i].classList.remove("d-none");
    }
}
////////
let cartItemNavs = document.getElementsByClassName("cart-item-nav");
for (let i = 0; i < cartItemNavs.length; i++) {
    for (let j = 0; j < cartItemNavs[i].children[1].children[0].children.length; j++) {
        cartItemNavs[i].children[1].children[0].children[j].children[0].onclick = function(ev) {
            ev.preventDefault();
        }
    }
}

let sflatertItemNavs = document.getElementsByClassName("saved-for-later-item");
for (let i = 0; i < sflatertItemNavs.length; i++) {
    for (let j = 0; j < sflatertItemNavs[i].children[0].children[1].children[2].children[0].children[0].children.length; j++) {
        sflatertItemNavs[i].children[0].children[1].children[2].children[0].children[0].children[j].onclick = function(ev) {
            ev.preventDefault();
            console.log("re re");
        }
    }
}

let orderCard = document.getElementsByClassName("order-card");
for (let i = 0; i < orderCard.length; i++) {
    for (let j = 0; j < orderCard[i].children[1].children.length; j++) {
        orderCard[i].children[1].children[j].children[2].children[0].onclick = function(ev) {
            ev.preventDefault();
        }
    }
}

//dropdown cart

let dropdownCart = document.getElementsByClassName("dropdown-cart")[0];
let cartBtn = document.getElementById("cart-btn");

cartBtn.onclick = function() {
    dropdownCart.classList.toggle("d-none");
}
dropdownCart.onclick = function(ev) {
    ev.stopPropagation();
}