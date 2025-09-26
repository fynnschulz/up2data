document.querySelectorAll('.svg-card').forEach((card, idx, cards) => {
  card.onclick = function () {
    let nextIdx = (idx + 1) % cards.length;
    cards.forEach((c, i) => c.classList.toggle('active', i === nextIdx));
  };
});