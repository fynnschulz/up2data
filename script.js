function showCard(idx) {
  document.querySelectorAll('.svg-card').forEach((card, i) => {
    card.classList.toggle('active', i === idx);
  });
}