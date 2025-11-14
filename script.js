const books = [
  {
    title: 'El Bosque de las Luciérnagas',
    genre: 'fantasía',
    tagline: 'Hechizos, criaturas y una amistad que ilumina la oscuridad.',
    summary:
      'Lia se aventura en un bosque encantado donde cada luciérnaga guarda el recuerdo de una historia olvidada. A medida que rescata estos destellos, descubre su propio poder y un destino ligado a las notas de una canción ancestral.',
    playlist: [
      'Aurora Borealis – Harps & Voices',
      'Firefly Waltz – Dream Strings',
      'Night Sky Lullaby – Celeste Keys'
    ]
  },
  {
    title: 'Cartas para la Marea',
    genre: 'romance',
    tagline: 'Amor a la deriva entre secretos y mareas cambiantes.',
    summary:
      'En una ciudad costera, dos compositoras anónimas se envían cartas y partituras que viajan en botellas. Sus melodías las acercan sin revelar sus identidades, hasta que un festival de luna llena obliga a enfrentarse a lo que sienten sin romper la magia.',
    playlist: [
      'Tidal Hearts – Indigo Piano',
      'Moonlit Letters – Acoustic Bloom',
      'Seafoam Promises – Coral Chorus'
    ]
  },
  {
    title: 'Crónicas del Metro 7',
    genre: 'ficción',
    tagline: 'Un viaje urbano que combina ciencia, ritmo y destellos del futuro.',
    summary:
      'Aisha descubre un vagón secreto en el metro que solo aparece a medianoche. Cada pasajero transporta una melodía distinta y un fragmento de una gran historia colectiva que podría redibujar el mapa cultural de la ciudad.',
    playlist: [
      'Neon Lines – City Pulse',
      'Midnight Platform – Bass & Brass',
      'Signals in Motion – Synth Steps'
    ]
  },
  {
    title: 'El Misterio del Viaducto Silente',
    genre: 'misterio',
    tagline: 'Intrigas, notas perdidas y susurros en un viaducto olvidado.',
    summary:
      'Un colectivo de lectoras se reúne cada noche para descifrar un mural sonoro escondido en un viaducto abandonado. Las pistas musicales conducen a una escritora desaparecida y a una novela que jamás llegó a publicarse.',
    playlist: [
      'Echoes in Stone – Noir Ensemble',
      'Shadow Keys – Obsidian Piano',
      'Whispers Beneath – Midnight Strings'
    ]
  },
  {
    title: 'Universos Paralelos para Principiantes',
    genre: 'ficción',
    tagline: 'Ciencia y emoción se encuentran al ritmo del multiverso.',
    summary:
      'Cuando Maia activa una consola que mezcla sonido y memoria, queda conectada con versiones de sí misma en otros universos. Cada una le recomienda un libro y una canción, pero debe decidir qué camino musical seguir para mantener su realidad estable.',
    playlist: [
      'Quantum Echo – Stellar Beats',
      'Liminal Chorale – Polyphonic Minds',
      'Between Worlds – Harmonic Flux'
    ]
  },
  {
    title: 'El Jardín de los Suspiros',
    genre: 'romance',
    tagline: 'Flores nocturnas y serenatas susurradas.',
    summary:
      'En un jardín que florece solo al anochecer, Emilia dirige un club secreto donde los asistentes recomiendan libros escribiendo versos musicales en pétalos luminosos. La llegada de una nueva integrante cambia el tono de todas las melodías.',
    playlist: [
      'Moonlit Petals – Velvet Strings',
      'Sighing Hearts – Nightingale Duo',
      'Starlit Bloom – Lyra & Echo'
    ]
  },
  {
    title: 'Archivo de Niebla Carmesí',
    genre: 'misterio',
    tagline: 'Detectives poéticos resolviendo enigmas con jazz y tinta.',
    summary:
      'Una biblioteca secreta contiene archivos escritos con tinta que solo se revela al ritmo del jazz. Dos adolescentes decodifican casos cerrados mientras improvisan melodías en saxofón y descubren una conspiración artística.',
    playlist: [
      'Crimson Mist – Blue Lantern Jazz',
      'Sax & Secrets – Indigo Noir',
      'Ink & Echo – Sapphire Groove'
    ]
  },
  {
    title: 'Constelaciones del Corazón',
    genre: 'fantasía',
    tagline: 'Amores estelares trazados por melodías interestelares.',
    summary:
      'Un observatorio celestial reparte partituras que predicen historias de amor. Cada nota revela un libro destinado a una lectora distinta. Al completar su melodía, Nara debe decidir si seguir el destino escrito o improvisar su propio final.',
    playlist: [
      'Starbound Duet – Cosmic Lyrids',
      'Celestial Glow – Meteoric Harp',
      'Orbiting Hearts – Nebula Choir'
    ]
  }
];

const bookGrid = document.getElementById('bookGrid');
const bookModal = document.getElementById('bookModal');
const modalTitle = document.getElementById('modalTitle');
const modalGenre = document.getElementById('modalGenre');
const modalSummary = document.getElementById('modalSummary');
const modalPlaylist = document.getElementById('modalPlaylist');
const modalClose = document.getElementById('modalClose');

const chatForm = document.getElementById('chatForm');
const chatMessage = document.getElementById('chatMessage');
const chatFeed = document.getElementById('chatFeed');

const vibeForm = document.getElementById('vibeForm');
const vibeResult = document.getElementById('vibeResult');

const genreButtons = document.querySelectorAll('.chip');
let activeGenre = 'todos';

function renderBooks(list) {
  bookGrid.innerHTML = '';
  list.forEach((book) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.setAttribute('tabindex', '0');
    card.dataset.genre = book.genre;
    card.innerHTML = `
      <span class="book-card__badge">${book.genre}</span>
      <h3>${book.title}</h3>
      <p>${book.tagline}</p>
    `;

    card.addEventListener('click', () => openModal(book));
    card.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        openModal(book);
      }
    });

    bookGrid.appendChild(card);
  });
}

function openModal(book) {
  modalTitle.textContent = book.title;
  modalGenre.textContent = book.genre;
  modalSummary.textContent = book.summary;
  modalPlaylist.innerHTML = '';
  book.playlist.forEach((track) => {
    const li = document.createElement('li');
    li.textContent = track;
    modalPlaylist.appendChild(li);
  });
  if (typeof bookModal.showModal === 'function') {
    bookModal.showModal();
  } else {
    bookModal.setAttribute('open', 'true');
  }
}

function closeModal() {
  if (typeof bookModal.close === 'function') {
    bookModal.close();
  } else {
    bookModal.removeAttribute('open');
  }
}

modalClose.addEventListener('click', closeModal);
bookModal.addEventListener('cancel', (event) => {
  event.preventDefault();
  closeModal();
});

bookModal.addEventListener('click', (event) => {
  if (event.target === bookModal) {
    closeModal();
  }
});

function filterBooks(genre) {
  if (genre === 'todos') {
    renderBooks(books);
    return;
  }
  const filtered = books.filter((book) => book.genre === genre);
  renderBooks(filtered);
}

genreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    genreButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    activeGenre = button.dataset.genre;
    filterBooks(activeGenre);
  });
});

function loadMessages() {
  const stored = localStorage.getItem('constellationMessages');
  const messages = stored ? JSON.parse(stored) : [];
  chatFeed.innerHTML = '';
  messages.forEach((message) => {
    chatFeed.appendChild(createMessageElement(message.text, message.date));
  });
}

function saveMessage(text) {
  const stored = localStorage.getItem('constellationMessages');
  const messages = stored ? JSON.parse(stored) : [];
  messages.unshift({ text, date: new Date().toISOString() });
  localStorage.setItem('constellationMessages', JSON.stringify(messages));
}

function createMessageElement(text, isoDate) {
  const li = document.createElement('li');
  li.className = 'chat-message';
  const time = new Date(isoDate).toLocaleString('es-MX', {
    dateStyle: 'short',
    timeStyle: 'short'
  });
  li.innerHTML = `
    <span>${text}</span>
    <span class="chat-message__time">${time}</span>
  `;
  return li;
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = chatMessage.value.trim();
  if (!text) return;
  saveMessage(text);
  chatFeed.prepend(createMessageElement(text, new Date().toISOString()));
  chatMessage.value = '';
});

function generateVibe(energy, emotion, companion) {
  const combinations = {
    serena: {
      romántica: {
        sola: {
          book: 'El Jardín de los Suspiros',
          vibe: 'Un rincón íntimo con cuerdas suaves y arpegios brillantes.'
        },
        pareja: {
          book: 'Cartas para la Marea',
          vibe: 'Dúos acústicos y el murmullo del mar de fondo.'
        },
        grupo: {
          book: 'Constelaciones del Corazón',
          vibe: 'Coros etéreos y percusión ligera para compartir historias.'
        }
      },
      misteriosa: {
        sola: {
          book: 'Archivo de Niebla Carmesí',
          vibe: 'Jazz tenue, faroles y un saxofón que guía las pistas.'
        },
        pareja: {
          book: 'El Misterio del Viaducto Silente',
          vibe: 'Pianos ecoicos y golpes de tambor suaves.'
        },
        grupo: {
          book: 'Crónicas del Metro 7',
          vibe: 'Ritmos urbanos susurrados para investigaciones nocturnas.'
        }
      },
      aventurera: {
        sola: {
          book: 'El Bosque de las Luciérnagas',
          vibe: 'Arpas cristalinas y voces corales que acompañan tu búsqueda.'
        },
        pareja: {
          book: 'Constelaciones del Corazón',
          vibe: 'Duetos espaciales llenos de destellos románticos.'
        },
        grupo: {
          book: 'Universos Paralelos para Principiantes',
          vibe: 'Sintetizadores suaves para planear portales secretos.'
        }
      },
      nostálgica: {
        sola: {
          book: 'Cartas para la Marea',
          vibe: 'Baladas con piano y olas que recuerdan veranos pasados.'
        },
        pareja: {
          book: 'El Jardín de los Suspiros',
          vibe: 'Valses lentos bajo faroles florales.'
        },
        grupo: {
          book: 'El Bosque de las Luciérnagas',
          vibe: 'Coros brillantes que invitan a recordar historias.'
        }
      }
    },
    media: {
      romántica: {
        sola: {
          book: 'Cartas para la Marea',
          vibe: 'Indie pop costero con notas brillantes.'
        },
        pareja: {
          book: 'El Jardín de los Suspiros',
          vibe: 'Bossa nova luminosa con chasquidos rítmicos.'
        },
        grupo: {
          book: 'Constelaciones del Corazón',
          vibe: 'R&B galáctico para cantar en armonía.'
        }
      },
      misteriosa: {
        sola: {
          book: 'El Misterio del Viaducto Silente',
          vibe: 'Beats trip-hop que guían tus investigaciones.'
        },
        pareja: {
          book: 'Archivo de Niebla Carmesí',
          vibe: 'Jazz con batería suave y sax seductor.'
        },
        grupo: {
          book: 'Crónicas del Metro 7',
          vibe: 'Electrofunk colaborativo para resolver acertijos.'
        }
      },
      aventurera: {
        sola: {
          book: 'Universos Paralelos para Principiantes',
          vibe: 'Synthwave suave para viajar entre realidades.'
        },
        pareja: {
          book: 'El Bosque de las Luciérnagas',
          vibe: 'Percusión tribal ligera y voces vaporosas.'
        },
        grupo: {
          book: 'Crónicas del Metro 7',
          vibe: 'Fusión electrónica y metales que impulsan la acción.'
        }
      },
      nostálgica: {
        sola: {
          book: 'Cartas para la Marea',
          vibe: 'Dream pop con ecos marinos.'
        },
        pareja: {
          book: 'El Jardín de los Suspiros',
          vibe: 'Duetos vintage con guitarras suaves.'
        },
        grupo: {
          book: 'Archivo de Niebla Carmesí',
          vibe: 'Jazz lounge con snaps y palmas coordinadas.'
        }
      }
    },
    alta: {
      romántica: {
        sola: {
          book: 'Constelaciones del Corazón',
          vibe: 'Pop estelar con beats brillantes y crescendos románticos.'
        },
        pareja: {
          book: 'Cartas para la Marea',
          vibe: 'Future bass con vocales en dúo.'
        },
        grupo: {
          book: 'El Jardín de los Suspiros',
          vibe: 'Disco floral con riffs contagiosos.'
        }
      },
      misteriosa: {
        sola: {
          book: 'Archivo de Niebla Carmesí',
          vibe: 'Electrojazz vibrante para perseguir pistas.'
        },
        pareja: {
          book: 'El Misterio del Viaducto Silente',
          vibe: 'Percusión profunda y bajos dramáticos.'
        },
        grupo: {
          book: 'Crónicas del Metro 7',
          vibe: 'Funk futurista para descifrar conspiraciones.'
        }
      },
      aventurera: {
        sola: {
          book: 'Universos Paralelos para Principiantes',
          vibe: 'EDM melódico con drops interdimensionales.'
        },
        pareja: {
          book: 'El Bosque de las Luciérnagas',
          vibe: 'Percusión épica y voces ascendentes.'
        },
        grupo: {
          book: 'Constelaciones del Corazón',
          vibe: 'Pop coral y sintetizadores luminosos.'
        }
      },
      nostálgica: {
        sola: {
          book: 'Cartas para la Marea',
          vibe: 'Dreamwave marino lleno de reverberación.'
        },
        pareja: {
          book: 'El Jardín de los Suspiros',
          vibe: 'Soul vintage con cuerdas enérgicas.'
        },
        grupo: {
          book: 'Archivo de Niebla Carmesí',
          vibe: 'Big band moderno con giros dramáticos.'
        }
      }
    }
  };

  return combinations[energy]?.[emotion]?.[companion];
}

vibeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const energy = document.getElementById('energy').value;
  const emotion = document.getElementById('emotion').value;
  const companion = document.getElementById('companion').value;

  const result = generateVibe(energy, emotion, companion);
  if (!result) {
    vibeResult.style.display = 'none';
    vibeResult.textContent = '';
    return;
  }
  vibeResult.innerHTML = `
    <strong>Libro sugerido:</strong> ${result.book}<br>
    <strong>Vibe musical:</strong> ${result.vibe}
  `;
  vibeResult.style.display = 'block';
});

renderBooks(books);
loadMessages();
filterBooks(activeGenre);
