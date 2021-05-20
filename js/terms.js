//change responsive-nav active status
let navResponsive = document.getElementsByClassName("responsive-nav")[0];
let ulNav = navResponsive.firstElementChild;
for (let i = 0; i < ulNav.children.length; i++) {
    ulNav.children[i].onclick = function (event) {
        event.preventDefault();
        for (let j = 0; j < ulNav.children.length; j++) {
            if (j != i) {
                ulNav.children[j].classList.remove("active");
                ulNav.children[i].classList.add("active");
            }
        }
    }
}
//menu-toggle
let menuToggle = document.getElementsByClassName("menu-toggle")[0];
let responsiveNav = document.getElementsByClassName("responsive-nav")[0];

menuToggle.onclick = function () {
    responsiveNav.classList.toggle("activated-nav");
}