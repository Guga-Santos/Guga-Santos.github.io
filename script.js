const pixelBoard = document.querySelector('#pixel-board');
//
let draw = false
function numeroGrid(n) {
  for (let i = 1; i <= n * n; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');

    div.addEventListener('mouseover', () => {
      const select = document.querySelector('.selected').style.backgroundColor;
      if(draw) { 
      div.style.backgroundColor = select;
    }
    });
    div.addEventListener('mousedown', () => {
      const select = document.querySelector('.selected').style.backgroundColor;
      if(!draw) { 
      div.style.backgroundColor = select;
    }
    });
    pixelBoard.appendChild(div);
  }
}

window.addEventListener('mousedown', function(){
  draw = true
})

window.addEventListener('mouseup', function(){
  draw = false
})
//

//
function changeValue() {
  const inputV = document.querySelector('#board-size');
  const currentVal = inputV.value;
  const quadrados = document.querySelector('#pixel-board').childElementCount;

  if (!inputV.value === true) {
    alert('Board inválido!');
  } else if (inputV.value >= 1 && inputV.value <= 50) {
    inputV.value = currentVal;
    pixelBoard.innerHTML = '';
    numeroGrid(inputV.value);

    if (inputV.value == (quadrados / inputV.value)) {
      alert('Board inválido!');
    }

    document.querySelector('#pixel-board').style.gridTemplateColumns = `repeat(${inputV.value}, 1fr)`;
    document.querySelector('#pixel-board').style.gridTemplateRows = `repeat(${inputV.value}, 1fr)`;
  }
}
//
window.onload = changeValue;
//

//
const classTarget = document.querySelector('#color-palette');

classTarget.addEventListener('click', (event) => {
  const selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  event.target.classList.add('selected');
})
//

//
const colorPicker = document.querySelector('#inputColor');

colorPicker.addEventListener('change', () => {
  const variavel = document.querySelector('#variavel');
  const selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  variavel.classList.add('selected')
  variavel.style.backgroundColor = colorPicker.value
})
//

//
const button = document.querySelector('.button');

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'grey';
  }
}
button.addEventListener('click', clearBoard);
//

//
const boardSizeX = document.querySelector('#board-size');

boardSizeX.addEventListener('click', () => {
  changeValue()
})
//

//
const soundIcon = document.querySelector('#soundIcon');

soundIcon.addEventListener('click', () => {
  if(soundIcon.classList.value === '') {
  soundIcon.src = './images/SoundOn.png'
  soundIcon.classList = 'soundOn'
  document.querySelector('#audio-container').innerHTML = ''
  } else if (soundIcon.classList.value === 'soundOn'){
    soundIcon.src = './images/SoundOff.png'
    soundIcon.classList = ''
    document.querySelector('#audio-container').innerHTML = '<audio autoplay src="./midia/SuperMarioBros.mp3"></audio>'
  }
})
//

//
const informacoes = document.querySelector('#informacoes');

informacoes.addEventListener('click', () => {
  informacoes.innerHTML = '<p id="paragrafo">Este site foi feito por <a href="https://github.com/Guga-Santos" target="_blank">Guga Santos</a> como parte da conclusão do bloco 5 do curso de desenvolvimento web da <a href="http://www.betrybe.com" target="_blank">@Trybe</a>. </p>'
})

informacoes.addEventListener('mouseleave', () => {
  informacoes.innerHTML = ''
})
//