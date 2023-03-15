'use strict';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const $ratingCard = $('#rating-card');
const $completedCard = $('#completed-card');
const $submitBtn = $('#submit');
const $selectionMessage = $('#selection-message');
const $$options = $$('input[type=radio]');

$submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let selection;
  $$options.forEach((el) => {
    if (!el.checked) return;
    selection = el.value;
  });
  $selectionMessage.textContent = `You selected ${selection} out of ${$$options.length}`;
  $ratingCard.classList.add('hidden');
  $completedCard.classList.remove('hidden');
});
