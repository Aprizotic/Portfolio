import './css/main.scss';

const showEducationButton = document.querySelector('[data-js="show-education"]');
const showExperienceButton = document.querySelector('[data-js="show-experience"]');
const jumpButton = document.querySelector('[data-js="jump-button"]');
const educationSection = document.querySelector('.main__section--education');
const experienceSection = document.querySelector('.main__section--experience');

function toggleHistory() {
  educationSection.classList.toggle('hidden');
  experienceSection.classList.toggle('hidden');
  showExperienceButton.classList.toggle('button--selected');
  showEducationButton.classList.toggle('button--selected');
}

showExperienceButton.addEventListener('click', toggleHistory);
showEducationButton.addEventListener('click', toggleHistory);

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

jumpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});