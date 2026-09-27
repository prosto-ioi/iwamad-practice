import './style.css';

// Step 1 — Make It Interactive
// Toggles a "liked" state on click: swaps the heart icon/text and
// highlights the whole card with an accent border.
const likeBtn = document.querySelector('#like-btn');
const card = document.querySelector('#profile-card');

let isLiked = false;

likeBtn.addEventListener('click', () => {
  isLiked = !isLiked;

  card.classList.toggle('is-liked', isLiked);
  likeBtn.classList.toggle('is-liked', isLiked);
  likeBtn.setAttribute('aria-pressed', String(isLiked));

  likeBtn.innerHTML = isLiked
    ? '<span aria-hidden="true">♥</span> Liked'
    : '<span aria-hidden="true">♡</span> Like';
});
