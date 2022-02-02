document.addEventListener('click', e => {
  const el = e.target;

  if (el.classList.contains('hidden-text')) {
    el.parentElement.classList.remove('palette-container');
    el.parentElement.classList.add('select');
    const removePalette = document.querySelectorAll('.palette-container');
    for (removeItem of removePalette) {
      removeItem.remove();
    }
    // createCloseButton() {
    //   const closeButton = document.createElement('button');

    // }
  }
})