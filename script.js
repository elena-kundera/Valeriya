const diplom1 = document.querySelector("#modal1");
const modalButton = document.querySelector("#button_modal1");

modalButton.onclick = function () {
    diplom1.style.display = "block";
}

const closeDiplom1 = document.querySelector(".diplom1_modal");

closeDiplom1.onclick = function () {
    diplom1.style.display = "none";
}