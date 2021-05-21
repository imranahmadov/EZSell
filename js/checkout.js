//change responsive-nav active status
let navResponsive = document.getElementsByClassName("responsive-nav")[0];
let ulNav = navResponsive.firstElementChild;
for (let i = 0; i < ulNav.children.length; i++) {
    ulNav.children[i].onclick = function(event) {
        event.preventDefault();
        for (let j = 0; j < ulNav.children.length; j++) {
            if (j != i) {
                ulNav.children[j].classList.remove("active");
                ulNav.children[i].classList.add("active");
            }
        }
    }
}
//password showpassword checkbox
let btnShowPassword = document.getElementById("show-password");
let enterPasswordInput = document.getElementsByName("password")[0];
let confirmPasswordInput = document.getElementsByName("confirm-password")[0];

btnShowPassword.onchange = function() {
        if (btnShowPassword.checked) {
            enterPasswordInput.setAttribute("type", "text");
            confirmPasswordInput.setAttribute("type", "text");
        } else {
            enterPasswordInput.setAttribute("type", "password");
            confirmPasswordInput.setAttribute("type", "password");
        }
    }
    //checkbox label check
let checkboxTexts = document.getElementsByClassName("checkbox-text");

for (let i = 0; i < checkboxTexts.length; i++) {
    checkboxTexts[i].onclick = function() {
        if (i != 1) {
            checkboxTexts[i].parentNode.firstElementChild.checked = !(checkboxTexts[i].parentNode.firstElementChild.checked);
        } else {
            checkboxTexts[i].parentNode.firstElementChild.nextElementSibling.nextElementSibling.checked = !(checkboxTexts[i].parentNode.firstElementChild.nextElementSibling.nextElementSibling.checked);
            if (checkboxTexts[i].parentNode.firstElementChild.getAttribute("type") == "text") {
                checkboxTexts[i].parentNode.firstElementChild.setAttribute("type", "password");
                checkboxTexts[i].parentNode.firstElementChild.nextElementSibling.setAttribute("type", "password");
            } else {
                checkboxTexts[i].parentNode.firstElementChild.setAttribute("type", "text");
                checkboxTexts[i].parentNode.firstElementChild.nextElementSibling.setAttribute("type", "text");
            }
        }
    }
}
//menutoggle
let menuToggle = document.getElementsByClassName("menu-toggle")[0];
let responsiveNav = document.getElementsByClassName("responsive-nav")[0];

menuToggle.onclick = function() {
        responsiveNav.classList.toggle("activated-nav");
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