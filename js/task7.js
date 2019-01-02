/*
7. Покрасьте все буквы текста в заданном элементе в разные случайные цвета. Список цветов должен хранится в массиве. Две соседние буквы не должны иметь одинаковый цвет.
*/
makeColorWord(6, 'Hello!')

function makeColorWord(count, phrase) {
  if (phrase.length !== count) {
    console.log('The length of phrase must be equel to the count!')
  } else {
    var firstScript = document.querySelector('script');
    var fragment = document.createDocumentFragment();
    var div = document.createElement('div');
    var spanColors = createColorArray(count);
    for (var i = 0; i < count; i++) {
      var span = document.createElement('span');
      span.textContent = phrase[i];
      span.style.color = spanColors[i];
      div.appendChild(span);
    }
    fragment.appendChild(div);
    document.body.insertBefore(fragment, firstScript);
  }

  function createColorArray(y) {
    var palette = [];
    var letters = '0123456789ABCDEF';
    for (var i = 0; i < y; i++) {
      var color = '#';
      for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      palette.push(color);
    }
    return palette;
  }
}