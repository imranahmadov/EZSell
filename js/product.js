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

// change thumbnail image
let imagesThumbnail = document.getElementsByClassName("thumbnail-image");
let magnifierDiv = document.getElementById("magnifierDiv");
let magnifiedImages = magnifierDiv.children;
for (let imageThumbnail of imagesThumbnail) {
    let imgdataId = imageThumbnail.getAttribute("data-id");

    imageThumbnail.onmouseover = function() {
        for (i = 0; i < magnifiedImages.length; i++) {
            this.style.transform = "scale(1.3)";
            this.style.border = "1px solid #d10024";
            if (imgdataId != magnifiedImages[i].getAttribute("data-id")) {
                magnifiedImages[i].classList.remove("active-image");
                imagesThumbnail[i].style.transform = "scale(1)";
                imagesThumbnail[i].style.border = "1px solid #e4e7ed";
            }
        }
        magnifiedImages[imgdataId - 1].classList.add("active-image");
    }
}
// modify using plus and minus signs
let qtyUp = document.getElementsByClassName("qty-up")[0];
let qtyDown = document.getElementsByClassName("qty-down")[0];
let qtyInput = document.getElementsByClassName("qty-input")[0];

qtyUp.onclick = function() {
    if (qtyInput.value < 10) {
        qtyInput.value++;
    }
}
qtyDown.onclick = function() {
    if (qtyInput.value > 1) {
        qtyInput.value--;
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

//image zoom
let magnifiedArea = document.getElementById("magnifierDiv");
magnifiedArea.onmousemove = function(ev) {
    let activeImage = document.getElementsByClassName("active-image")[0];
    activeImage.style.left = (activeImage.width / 2) - ((2 * activeImage.width - 500) * ev.offsetX) / 500 + "px";
    activeImage.style.top = (activeImage.height / 2) - ((2 * activeImage.height - 500) * ev.offsetY) / 500 + "px";
}
magnifiedArea.onmouseleave = function() {
    let activeImage = document.getElementsByClassName("active-image")[0];
    activeImage.style.removeProperty("top");
    activeImage.style.removeProperty("left");
}

//Add your review link
let link = document.getElementsByClassName("reviews-link")[0].firstElementChild;
let content = document.getElementById("product-rev-div");
let navlink = document.getElementsByClassName("nav-section")[1];
link.onclick = function() {
    for (let i = 0; i < content.parentElement.children.length; i++) {
        if (content.parentElement.children[i].classList.contains("active-content")) content.parentElement.children[i].classList.remove("active-content");
        if (navlink.children[i].classList.contains("active")) navlink.children[i].classList.remove("active");
    }
    content.classList.add("active-content");
    navlink.children[2].classList.add("active");
}

//menu-toggle
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