
const thumbnail = document.getElementById('thumbnail');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');

thumbnail.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
    