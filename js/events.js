document.addEventListener('click', e => {
  const el = e.target;
  const containerPalette = document.getElementById('palettes-content');
  const containerButtonReset = document.querySelector('.reset');

  if (el.classList.contains('button-reset')) {
    containerPalette.innerHTML = '';
    containerButtonReset.innerHTML = '';
  }
});