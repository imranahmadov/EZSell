let inputFile = document.getElementById("customFile");
let inputLabel = inputFile.nextElementSibling;
inputFile.onchange = function() {
        if (this.files.length == 1) {
            inputLabel.innerText = this.files.length + " image";
        } else {
            inputLabel.innerText = this.files.length + " images";
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