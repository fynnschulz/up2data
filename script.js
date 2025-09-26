document.querySelectorAll('.svg-card').forEach((card, idx, cards) => {
  card.onclick = function () {
    if (!card.classList.contains('active')) return; // Only top card can be clicked
    // Move the top card to the back, shift others forward
    cards.forEach((c, i) => {
      let newIndex = (i === 0) ? cards.length - 1 : i - 1;
      c.style.setProperty('--card-index', newIndex);
      c.classList.remove('active');
    });
    // The next card becomes active
    cards[1].classList.add('active');
  };
});