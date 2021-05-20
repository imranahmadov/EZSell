let inputFile = document.getElementById("customFile");
let inputLabel = inputFile.nextElementSibling;
inputFile.onchange = function () {
    if (this.files.length == 1) {
        inputLabel.innerText = this.files.length + " image";
    } else {
        inputLabel.innerText = this.files.length + " images";
    }
}