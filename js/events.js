const ulNav = document.querySelector('ul');
const buttonOpen = document.querySelector('.fas');

document.addEventListener('click', e => {
  const el = e.target;
  const containerPalette = document.getElementById('palettes-content');
  const containerButtonReset = document.querySelector('.reset');

  if (el.classList.contains('button-reset')) {
    containerPalette.innerHTML = '';
    containerButtonReset.innerHTML = '';
  }

  if (el.classList.contains('fas')) {
    function setMenuHamburguer() {
      if (el.classList.contains('fa-bars')) {
        visibleMenuHamburguer([
          'navbar-links-hidden',
          'navbar-links',
          'fa-bars',
          'fa-times'
        ]);
      } else {
        visibleMenuHamburguer(withOutHamburguer);
      }
    }
    setMenuHamburguer();
  }
});

function visibleMenuHamburguer([class1, class2, class3, class4]) {
  ulNav.classList.remove(class1);
  ulNav.classList.add(class2);
  buttonOpen.classList.remove(class3);
  buttonOpen.classList.add(class4);
}

const withOutHamburguer = [
  'navbar-links',
  'navbar-links-hidden',
  'fa-times',
  'fa-bars'
];

function removeMenuHamburguer() {
  if (window.innerWidth > 820) {
    visibleMenuHamburguer(withOutHamburguer);
  }
}