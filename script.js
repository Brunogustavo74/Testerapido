const cards = document.querySelectorAll(".cards");
const overlay = document.querySelector(".overlay");
let activeCard = null;

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("active")) return;

    // Remove ativo anterior
    if (activeCard) activeCard.classList.remove("active");

    // Ativa o novo
    card.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("active-grid");
    activeCard = card;
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  document.body.classList.remove("active-grid");
  if (activeCard) activeCard.classList.remove("active");
  activeCard = null;
});