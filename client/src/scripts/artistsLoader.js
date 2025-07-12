// src/scripts/artistLoader.js

const artists = [
  {
    name: "RocBoi Quez",
    genre: "Hip-Hop",
    image: "/public/img/rocboi.jpg"
  },
  {
    name: "Lyric Flamez",
    genre: "Spoken Word",
    image: "/public/img/lyric.jpg"
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.artist-grid');

  artists.forEach(artist => {
    const card = document.createElement('div');
    card.className = 'artist-card';
    card.innerHTML = `
      <img src="${artist.image}" alt="${artist.name}" class="artist-img" />
      <h4>${artist.name}</h4>
      <p>Genre: ${artist.genre}</p>
      <a href="#book">Book Now</a>
    `;
    grid.appendChild(card);
  });
});
