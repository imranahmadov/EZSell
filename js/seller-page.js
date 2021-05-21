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
//change product tab nav active status
let grayNavs = document.getElementById("navSection");
let tabContent = document.getElementsByClassName("tab-content")[0];
for (let i = 0; i < grayNavs.children.length; i++) {
    grayNavs.children[i].onclick = function(event) {
        event.preventDefault();
        this.classList.add("active");
        for (let j = 0; j < grayNavs.children.length; j++) {
            if (j != i) {
                if (grayNavs.children[j].classList.contains("active")) grayNavs.children[j].classList.remove("active");
                tabContent.children[i].classList.add("active-content");
                tabContent.children[j].classList.remove("active-content");
            }
        }
    }
}
//review stars change rating
let ratingStars = document.getElementsByClassName("stars")[0];
let inputs = document.getElementsByClassName("inputs")[0];
for (let i = 0; i < ratingStars.children.length; i++) {
    ratingStars.children[i].onmouseover = function() {
        for (let j = 0; j <= i; j++) {
            ratingStars.children[j].classList.add("star-fade");
        }
    }
    ratingStars.children[i].onmouseout = function() {
        for (let j = i; j >= 0; j--) {
            ratingStars.children[j].classList.remove("star-fade");
        }
    }
}
for (let i = 0; i < ratingStars.children.length; i++) {
    ratingStars.children[i].onclick = function() {
        if (inputs.children[i].checked != true) {
            inputs.children[i].checked = true;
        }
        for (let j = 0; j <= i; j++) {
            ratingStars.children[j].classList.remove("fa-star-o");
            ratingStars.children[j].classList.add("fa-star");
            inputs.children[i].checked = true;
        }
        for (let j = i + 1; j <= ratingStars.children.length; j++) {
            if (ratingStars.children[j] != undefined) {
                ratingStars.children[j].classList.add("fa-star-o");
                ratingStars.children[j].classList.remove("fa-star");
            }
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