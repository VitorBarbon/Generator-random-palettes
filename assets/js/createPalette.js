(function () {
  class Palette {
    constructor(numColors, typeOption, id) {
      this.containerPalettes = document.querySelector('#palettes-content');
      this.palette = document.createElement('div');
      this.numColors = numColors; //value
      this.typeOption = typeOption; //value
      this.id = id; //palette(n number)
      this.watchEventClick();
    }

    watchEventClick() {
      this.containerPalettes.addEventListener('click', e => {
        const el = e.target;
        if (el.parentElement.getAttribute('id') === `palette${this.id.slice(7 , 99)}`) {
          el.parentElement.classList.remove('c-palette');
          el.parentElement.classList.add('select');
        }
      })
    }

    createDivPallete() {
      const divColor = document.createElement('div');
      divColor.classList.add('c-palette__color')
      divColor.style.background = this.randomBgColor();
      this.palette.appendChild(divColor);
    }

    createDivColors() {
      for (let i = 0; i < this.numColors; i++) {
        this.createDivPallete();
      }
      this.palette.classList.add('c-palette')
      this.palette.setAttribute('id', this.id);
      this.containerPalettes.appendChild(this.palette);
    }

    randomBgColor() {
      const num1 = this.selectValueToGenerateRGB();
      const num2 = this.selectValueToGenerateRGB();
      const num3 = this.selectValueToGenerateRGB();
      return `rgb(${num1}, ${num2}, ${num3})`;
    }

    selectValueToGenerateRGB() {
      if (this.typeOption === '1') return Palette.randomInt(0, 255);
      if (this.typeOption === '2') return Palette.randomInt(0, 127);
      if (this.typeOption === '3') return Palette.randomInt(127, 255);
      if (this.typeOption === '4') return Palette.randomInt(0, 80);
      if (this.typeOption === '5') return Palette.randomInt(175, 255);
    }

    static randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }

  //validando formulário
  class ValidForm {
    constructor() {
      this.form = document.querySelector('.form');
      this.numberColors = document.querySelector('#colors-amount');
      this.paletteType = document.querySelector('#select-palette');
      this.count = 999;
      this.event();
    }

    event() {
      this.form.addEventListener('submit', e => {
        let count = this.createId();
        this.handleSubmit(e, count);
      });
    }

    createId() {
      return `palette${this.count = this.count + 1}`;
    }

    handleSubmit(e, id) {
      e.preventDefault();
      const validFilds = this.isValid();
      if (validFilds) {
        let palette = new Palette(this.numberColors.value, this.paletteType.value, String(id));
        palette.createDivColors();
        return;
      }
    }

    isValid() {
      let valid = true;

      for (let errorText of this.form.querySelectorAll('.error-text')) {
        errorText.remove();
      }

      if (!this.paletteType || this.paletteType.value === '0') {
        ValidForm.createError(this.paletteType, 'Esse campo precisa estar selecionado.');
        valid = false;
      }

      if (this.numberColors.value < 4 || this.numberColors.value > 7) {
        ValidForm.createError(this.numberColors, 'Esse campo precisa conter valores entre 4 e 7.');
        valid = false;
      }

      return valid;
    }

    static createError(fild, message) {
      const divError = document.createElement('div');
      divError.innerText = message;
      divError.classList.add('error-text');
      fild.insertAdjacentElement('afterend', divError);
    }
  }
  const validate = new ValidForm();
})();