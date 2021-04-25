const modal = document.querySelector(".modal");
const Post1 = document.querySelector(".Post1");
const Post2 = document.querySelector(".Post2");
const Post3 = document.querySelector(".Post3");
const Post4 = document.querySelector(".Post4");
const Post5 = document.querySelector(".Post5");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

Post1.addEventListener("click", toggleModal);
Post2.addEventListener("click", toggleModal);
Post3.addEventListener("click", toggleModal);
Post4.addEventListener("click", toggleModal);
Post5.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
