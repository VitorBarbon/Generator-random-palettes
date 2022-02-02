(function () {

  const btnCreatePalette = document.querySelector('.btn-palettes');

  btnCreatePalette.addEventListener('click', () => {
    setTimeout(() => {
      let arrDivPalette = document.querySelectorAll('.palette-container');

      for (divPalette of arrDivPalette) {
        let divColors = divPalette.querySelectorAll('div');
        for (itemColor of divColors) {
          setTextHex()
        }
      }

      function setTextHex() {
        const color = getValueHex()
        console.log(color);
        color[0] = Number(color[0]);
        color[1] = Number(color[1]);
        color[2] = Number(color[2]);
        const hex = ConvertRGBtoHex(color[0], color[1], color[2]);
        const buttonEdit = createButtonsEdit()
        itemColor.innerHTML = `<div><p>${hex}</p></div>`
        itemColor.classList.add('hidden-text');
      }

      function getValueHex() {
        let stylesDivColor = getComputedStyle(itemColor);
        let color = stylesDivColor.backgroundColor;
        color = color.replace('rgb(', '').replace(')', '');
        color = color.split(', ');
        return color;
      }
    }, 10);
  })

  function createButtonsEdit() {
    const buttonEdit = document.createElement('button');
    const iconEdit = document.createElement('i');
    iconEdit.classList.add('fas');
    iconEdit.classList.add('fa-edit');
    buttonEdit.classList.add('buttonEdit');
    buttonEdit.appendChild(iconEdit);
    return buttonEdit;
  }

  function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return (hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal).toUpperCase();;
  }

  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }
})();