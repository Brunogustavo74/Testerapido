const cards = document.querySelectorAll('.cards');
const overlay = document.querySelector('.overlay');
let activeCard = null;

cards.forEach(card => {
  card.addEventListener('click', e => {
    e.stopPropagation();

    if (activeCard === card) return;

    if (activeCard) {
      activeCard.classList.remove('active');
    }

    card.classList.add('active');
    overlay.classList.add('active');
    activeCard = card;
  });
});

document.addEventListener('click', e => {
  if (activeCard && !activeCard.contains(e.target)) {
    activeCard.classList.remove('active');
    overlay.classList.remove('active');
    activeCard = null;
  }
});