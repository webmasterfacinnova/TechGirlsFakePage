const body = document.body;
const graffitiPieces = document.querySelectorAll('.graffiti');

function setStagePalette() {
  const hour = new Date().getHours();
  body.classList.remove('morning', 'daytime', 'evening', 'night');

  if (hour >= 6 && hour < 12) {
    body.classList.add('morning');
  } else if (hour >= 12 && hour < 18) {
    body.classList.add('daytime');
  } else if (hour >= 18 && hour < 21) {
    body.classList.add('evening');
  } else {
    body.classList.add('night');
  }
}

function activateGraffiti(element) {
  element.classList.add('active');
  element.setAttribute('aria-pressed', 'true');

  setTimeout(() => {
    element.classList.remove('active');
    element.setAttribute('aria-pressed', 'false');
  }, 2500);
}

setStagePalette();

setInterval(() => {
  const activeSpot = Math.floor(Math.random() * graffitiPieces.length);
  activateGraffiti(graffitiPieces[activeSpot]);
}, 8000);

graffitiPieces.forEach((piece) => {
  piece.addEventListener('click', () => activateGraffiti(piece));
  piece.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateGraffiti(piece);
    }
  });
});

window.addEventListener('focus', setStagePalette);
