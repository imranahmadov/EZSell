//nav click effect
let grayNavs = document.getElementsByClassName("nav-section");
for (let grayNav of grayNavs) {
    for (let i = 0; i < grayNav.children.length; i++) {
        grayNav.children[i].onclick = function(event) {
            event.preventDefault();
            grayNav.children[i].classList.add("active");
            for (let j = 0; j < grayNav.children.length; j++) {
                if (j != i) {
                    grayNav.children[j].classList.remove("active");
                }
            }
        }
    }
}

// modify using plus and minus signs

let qtyLabel = document.getElementsByClassName("qty-label")[0];

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
    //checkbox label click
let checkboxes = document.getElementsByClassName("input-checkbox");
for (let checkbox of checkboxes) {
    checkbox.children[1].onclick = function() {
        checkbox.children[0].checked = !(checkbox.children[0].checked);
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