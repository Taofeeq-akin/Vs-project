"use script";

///////////////////////////////////////
// Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalForm = document.querySelector(".modal-form");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnOpenModal = document.querySelector(".btn-contact-us");
const btnSend = document.querySelector(".btn-send");
const requiredFields = [...document.querySelectorAll(".required")];

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnSend.addEventListener("click", function (e) {
  if (requiredFields.every((field) => field.value !== "")) {
    e.preventDefault();
    closeModal();
    modalForm.reset();
  }
});

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////
// Smooth Scrolling
document.querySelector(".mainNavList").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("mainNavLink")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

////////////////////////////////////
// Sticky Nav
const aboutUs = document.querySelector(".aboutus");
const nav = document.querySelector(".nav-header");
const header = document.querySelector(".header");

const cords = aboutUs.getBoundingClientRect();
console.log(cords);
window.addEventListener("scroll", function () {
  if (window.scrollY > cords.top) {
    nav.classList.add("sticky");
    nav.classList.add("active");
  } else {
    nav.classList.remove("sticky");
    nav.classList.remove("active");
  }
});
