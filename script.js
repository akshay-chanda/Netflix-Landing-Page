document.addEventListener('DOMContentLoaded', () => {
  // Poster click popup
  const posters = document.querySelectorAll('.poster');
  posters.forEach(poster => {
    poster.addEventListener('click', () => {
      const videoSrc = poster.dataset.video;
      showPopup(videoSrc);
    });
  });

  // Scroll buttons
  const rows = document.querySelectorAll('.row');
  rows.forEach(row => {
    const container = row.querySelector('.row-posters');
    const btnLeft = row.querySelector('.scroll-left');
    const btnRight = row.querySelector('.scroll-right');

    if (btnLeft && btnRight) {
      btnLeft.addEventListener('click', () => {
        container.scrollBy({ left: -300, behavior: 'smooth' });
      });
      btnRight.addEventListener('click', () => {
        container.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });
});

function showPopup(videoSrc) {
  const overlay = document.createElement('div');
  overlay.className = 'custom-overlay';

  const popup = document.createElement('div');
  popup.className = 'custom-popup';

  const iframe = document.createElement('iframe');
  iframe.src = videoSrc;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Close';
  closeBtn.addEventListener('click', () => document.body.removeChild(overlay));

  popup.appendChild(iframe);
  popup.appendChild(closeBtn);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}
