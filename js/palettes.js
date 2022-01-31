function createRandomPalettes() {
  const formPalettes = document.querySelector('.form');
  const sectionPalettes = document.querySelector('#palettes-content');

  function createPalette() {
    const palette = document.createElement('div');
    palette.classList.add('palette-container')
    return sectionPalettes.appendChild(palette);
  }

  function getValueInputColor() {
    const valueInputColor = document.querySelector('#colors-amount');
    return valueInputColor.value;
  }

  function createDivColors(numColors, paletteDiv) {
    for (let i = 0; i <= numColors - 1; i++) {
      const divColor = document.createElement('div');
      const colorBg = randomBgColor();
      divColor.style.backgroundColor = colorBg;
      divColor.style.width = (100 / numColors) + '%';
      paletteDiv.appendChild(divColor);
    }
  }
 
  function randomBgColor() {
    const num1 = generateRandomNum();
    const num2 = generateRandomNum();
    const num3 = generateRandomNum();

    return `rgb(${num1}, ${num2}, ${num3})`;
  }

  function generateRandomNum() {
    const randomNum = getSelectValue();
    return randomNum;
  }

  formPalettes.addEventListener('submit', e => {
    e.preventDefault();
    const palette = createPalette();
    createDivColors(getValueInputColor(), palette);
  });

  function getSelectValue() {
    const selectValue = document.querySelector('#select-palette');
    // console.log(selectValue.value);
    if(selectValue.value === '0') return getRandomInt(0, 255);
    if(selectValue.value === '1') return getRandomInt(0, 127); 
    if(selectValue.value === '2') return getRandomInt(127, 255);
    if(selectValue.value === '3') return getRandomInt(0, 80);
    if(selectValue.value === '4') return getRandomInt(175, 255);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // console.log(Math.floor(Math.random() * (max - min)) + min);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
createRandomPalettes()