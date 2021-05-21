//change responsive-nav active status
let navResponsive = document.getElementsByClassName("responsive-nav")[0];
let ulNav = navResponsive.firstElementChild;
let productTabs = document.getElementsByClassName("product-tabs")[0];


for (let i = 0; i < ulNav.children.length; i++) {
    ulNav.children[i].onclick = function(event) {
        event.preventDefault();

        if (i > 0) {
            if (i == productTabs.children[i - 1].getAttribute("data-id")) {
                productTabs.children[i - 1].classList.add("active-content");
            }
        }
        for (let j = 0; j < ulNav.children.length; j++) {
            if (j != i) {
                if (j > 0) {
                    productTabs.children[j - 1].classList.remove("active-content");
                }
                ulNav.children[j].classList.remove("active");
                ulNav.children[i].classList.add("active");
            }
        }
    }
}

//countdown bar
let hotDealsList = document.getElementsByClassName("hot-deal-list")[0];
let countDownDate = new Date("Sep 29, 2020 15:37:25").getTime();
let x = setInterval(function() {

    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    hotDealsList.children[0].children[0].children[0].innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    hotDealsList.children[1].children[0].children[0].innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hotDealsList.children[2].children[0].children[0].innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    hotDealsList.children[3].children[0].children[0].innerText = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text

}, 1000);

//menu-toggle
let menuToggle = document.getElementsByClassName("menu-toggle")[0];
let responsiveNav = document.getElementsByClassName("responsive-nav")[0];
let div1 = document.getElementsByClassName("menuStripe1")[0];
let div2 = document.getElementsByClassName("menuStripe2")[0];
let div3 = document.getElementsByClassName("menuStripe3")[0];
let toggleDiv = document.getElementsByClassName("toggle-div")[0];
menuToggle.onclick = function() {
    responsiveNav.classList.toggle("activated-nav");
    if (div1.style.marginBottom == "4px") {
        div3.style.opacity = 0;
        div1.style.transform = "rotate(45deg)";
        div1.style.marginBottom = "-10px";
        div2.style.transform = "rotate(-45deg)";

    } else if (div1.style.marginBottom == "-10px") {
        div1.style.marginBottom = "4px";
        div1.style.transform = "rotate(0deg)";
        div3.style.opacity = 1;
        div2.style.transform = "rotate(0deg)";

    } else {
        div3.style.opacity = 0;
        div1.style.transform = "rotate(45deg)";
        div1.style.marginBottom = "-10px";
        div2.style.transform = "rotate(-45deg)";

    }
}

//slick
/*
$(document).ready(function () {
    $('.new-product-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
});
*/

$('.products-slick').each(function() {
    var $this = $(this),
        $nav = $this.attr('data-nav');

    $this.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        speed: 300,
        dots: false,
        arrows: false,
        appendArrows: $nav ? $nav : false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});
//dropdown cart

let dropdownCart = document.getElementsByClassName("dropdown-cart")[0];
let cartBtn = document.getElementById("cart-btn");

cartBtn.onclick = function() {
    dropdownCart.classList.toggle("d-none");
}
dropdownCart.onclick = function(ev) {
    ev.stopPropagation();
}

///
let qtyUp = document.getElementsByClassName("qty-up")[0];
let qtyDown = document.getElementsByClassName("qty-down")[0];
let qtyInput = document.getElementsByClassName("qty-input")[0];

for (let i = 0; i < productTabs.children.length; i++) {
    let qtyLabel = productTabs.children[i].children[0].children[0].children[0].children[2].children[0];
    let firstInput = qtyLabel.children[0];
    let secondInput = qtyLabel.children[2];

    let qtyInput1 = firstInput.children[0];
    let qtyUp1 = firstInput.children[1];
    let qtyDown1 = firstInput.children[2];

    let qtyInput2 = secondInput.children[0];
    let qtyUp2 = secondInput.children[1];
    let qtyDown2 = secondInput.children[2];

    qtyUp1.onclick = function() {
        qtyInput1.value++;
    }
    qtyDown1.onclick = function() {
        if (qtyInput1.value > 0) {
            qtyInput1.value--;
        }
    }
    qtyUp2.onclick = function() {
        qtyInput2.value++;
    }
    qtyDown2.onclick = function() {
        if (qtyInput2.value > 0) {
            qtyInput2.value--;
        }
    }
}
let justBool = false;
let productImage = document.getElementsByClassName("product-image");
let newElem = document.getElementsByClassName("new-product-elem");

for (let image of productImage) {
    image.onmouseover = function() {
        justBool = true;
    }
    image.onmouseleave = function() {
        justBool = false;
    }
}

for (let elem of newElem) {
    elem.onclick = function() {
        if (justBool == true) {
            location.href = "product.html";
        }
    }
}