const modal = document.getElementById("header__nav--modal-container");
const hamburger = document.querySelector(".header__hamburger");

const mediaQuery = window.matchMedia("(max-width: 42.4em)");

function modalChange(e) {
  if (e.matches) {
    hamburger.addEventListener("click", function () {
      modal.classList.toggle("hidden");
    });
  } else {
    modal.classList.add("hidden");
  }
}
mediaQuery.addEventListener("change", modalChange);

/*
if (window.matchMedia("(max-width:42.4em)").matches) {
  hamburger.addEventListener("click", function () {
    modal.classList.toggle("hidden");
  });
} else if (window.matchMedia("(min-width:42.5em)").matches) {
  modal.classList.add("hidden");
} */
