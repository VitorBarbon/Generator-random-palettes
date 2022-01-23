$(document).ready(() => {
  $('#submit-palettes').on('click', () => {
    let xmlHttp = new XMLHttpRequest();
    let valueInputPalette = $('#palettes-amount').val();
    let valueInputColor = $('#colors-amount').val();
    let amountColors = valueInputColor * 4;
    let random = Math.random() * 99;
    let randomInt = Math.round(random);
    console.log(randomInt)
    let url = 'https://www.colr.org/json/colors/random/' + (randomInt);
    console.log(url)
    xmlHttp.open('GET', url);
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

        let JSONColors = xmlHttp.responseText
        let objJSONColors = JSON.parse(JSONColors);

        // laço de repetição que cria o número de paletas conforme value do input
        for (let i = 0; i < 1; i++) {

          let divPalette = document.createElement('div');
          $(divPalette).addClass('divPalette');

          for (let c = 0; c < valueInputColor; c++) {
            let divColor = document.createElement('div');
            $(divColor).css({
              'width': 100 / valueInputColor + '%',
              'height': '100%',
              'background-color': '#' + objJSONColors.colors[c].hex,
            });

            $(divPalette).append(divColor);
          }

          $('#palettes-content').append(divPalette);
        }

        // cria botões
        $('.divButtons').remove('');
        $('#palettes-content').append('<div class="divButtons"><button class="buttonReset btn" /><button class="buttonSelect btn" /></div>')
        $('.divButtons').css({
          'display': 'flex',
          'width': '100%',
          'height': '100px',
          'justify-content': 'center',
          'align-items': 'center',
          'gap': '20px',
        });

        $('.buttonReset').html('Resetar paletas').attr('id', 'reset')
        $('.buttonSelect').html('Selecionar Paletas');

        $('.buttonReset').on('click', () => {
          $('#palettes-content').html('')
        });
      }
    }
    xmlHttp.send()
  })
})