const diplom1 = document.querySelector("#modal1");
const modalButton = document.querySelector("#button_modal1");

modalButton.onclick = function () {
    diplom1.style.display = "block";
}


diplom1.onclick = function () {
    diplom1.style.display = "none";
}