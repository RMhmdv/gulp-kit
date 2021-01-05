document.addEventListener("DOMContentLoaded", function () {
    let box = document.querySelector(".box");
    box.style.border = "5px solid red";

    let lis = document.querySelectorAll(".menu_item");
    lis.forEach(elem => {
        elem.innerText = "Привет BABEL!";
    });
})