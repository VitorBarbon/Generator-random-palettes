document.addEventListener('click', e => {
  const el = e.target;
  console.log(el);

  if (el.classList.contains('hidden-text')) {
    el.parentElement.classList.remove('palette-container');
    el.parentElement.classList.add('select');
    console.log(el.parentElement);
  }
})