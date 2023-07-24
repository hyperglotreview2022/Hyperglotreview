let cross = document.getElementById("close");
let modal = document.getElementById("modal")

cross.addEventListener("click", hidemodal )

function hidemodal(){
  modal.style.display = "none";
}