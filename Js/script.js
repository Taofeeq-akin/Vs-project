'use script';

///////////////////////////////////////
// Modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalForm = document.querySelector('.modal-form');
const btnCloseModal = document.querySelector('.btn-close-modal');
const btnOpenModal = document.querySelector('.btn-contact-us');
const btnSend = document.querySelector('.btn-send');
const requiredFields = [...document.querySelectorAll('.required')];

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnSend.addEventListener('click', function (e) {
  if (requiredFields.every(field => field.value !== '')) {
    e.preventDefault();
    closeModal();
    modalForm.reset();
  }
});

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////
// Smooth Scrolling
document.querySelector('.mainNavList').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('mainNavLink')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

document.querySelectorAll('.smooth').forEach(link =>
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  })
);

////////////////////////////////////////
// Slider component

const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider-btn--right');
const btnLeft = document.querySelector('.slider-btn--left');

let counter = 0;
let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${119 * (i - slide)}%)`)
  );
  counter = 0;
};

goToSlide(0);

const nextSlide = function () {
  if (currentSlide === maxSlide - 2) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);
};

const previousSlide = function () {
  if (currentSlide === 0) currentSlide = maxSlide - 2;
  else currentSlide--;

  goToSlide(currentSlide);
};

btnRight.addEventListener('click', previousSlide);
btnLeft.addEventListener('click', nextSlide);

setInterval(() => {
  counter++;
}, 1000);

setInterval(() => {
  if (counter === 5) nextSlide();
  else counter = 0;
}, 5000);

////////////////////////////////////////
// Slider responsiveness
const page = document.documentElement;
console.log(page.clientWidth);
