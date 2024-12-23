'use strict';

// assigning the queryselectors to variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

//  creating the functions

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Adding Event listeners

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

// adding keypress(keydown) listener

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
