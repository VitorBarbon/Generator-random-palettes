document.addEventListener('click', e => {
  const el = e.target;
  const paletteContent = document.getElementById('palettes-content');
  console.log(paletteContent);

  if (el.classList.contains('hidden-text')) {
    el.parentElement.classList.remove('palette-container');
    el.parentElement.classList.add('select');
    const removePalette = document.querySelectorAll('.palette-container');
    for (removeItem of removePalette) {
      removeItem.remove();
    }
  }
})