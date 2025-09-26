document.querySelectorAll('.svg-card').forEach((card, idx, cards) => {
  card.onclick = function () {
    // Find the current active card
    let activeIdx = Array.from(cards).findIndex(c => c.classList.contains('active'));
    // Remove active from all
    cards.forEach(c => c.classList.remove('active'));
    // Set new active
    card.classList.add('active');
    // Reorder card indexes for smooth stacking
    cards.forEach((c, i) => {
      let newIndex = (i - idx + cards.length) % cards.length;
      c.style.setProperty('--card-index', newIndex);
    });
  };
});