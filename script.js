// function guardarConteudo() {
//   const htmlContent = document.querySelector('#middleSection').innerHTML;
//   localStorage.setItem('conteudo', htmlContent);
// }
// const saveButton = document.querySelector('#save');

// saveButton.addEventListener('click', guardarConteudo);

// const addButton = document.querySelector('#add');

// const saved = localStorage.getItem('conteudo');

// function pegarConteudo() {
// if (saved) {
//   const htmlContent1 = document.querySelector('#middleSection');
//   htmlContent1.innerHTML = saved;
// }
// }
// addButton.addEventListener('click', pegarConteudo)

 //
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
  soundIcon.src = './images/som-ligado.png'
  soundIcon.classList = 'soundOn'
  document.querySelector('#audio-container').innerHTML = ''
  } else if (soundIcon.classList.value === 'soundOn'){
    soundIcon.src = './images/mudo.png'  
    soundIcon.classList = ''
    document.querySelector('#audio-container').innerHTML = '<audio id="myaudio" autoplay src="./midia/SuperMarioBros.mp3"></audio>'
    const audio = document.getElementById("myaudio");
      audio.volume = 0.1;
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

//

const bucket = document.querySelector('#bucket');
bucket.addEventListener('click', () => {
  brush.classList.remove('uso')
  eraser.classList.remove('uso')
  bucket.classList.add('uso')
})
pixelBoard.addEventListener('click', () => {
  if(bucket.classList.contains('uso')){
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    }
  }
})

const eraser = document.querySelector('#eraser');

eraser.addEventListener('click', () => {
  brush.classList.remove('uso')
  bucket.classList.remove('uso')
  eraser.classList.add('uso')
})

pixelBoard.addEventListener('mousedown', (e) => {
  if(!draw && e.target.id == ''){ 
  if (eraser.classList.contains('uso')) {
    e.target.style.backgroundColor = 'grey'
  }else if(brush.classList.contains('uso')) {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
  }
}
})
pixelBoard.addEventListener('mouseover', (e) => {
  if(draw && e.target.id == '') { 
  if (eraser.classList.contains('uso')) {
    e.target.style.backgroundColor = 'grey'
  } else if(brush.classList.contains('uso')) {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
  }
}
})
//
const brush = document.querySelector('#brush');
brush.addEventListener('click', (e) => {
  eraser.classList.remove('uso')
  bucket.classList.remove('uso')
  brush.classList.add('uso')
})
//
const greenToddy = document.querySelector('#greenToddy');    
    greenToddy.addEventListener('dblclick', () => {
      for(let i = 0; i < greenToddy.childElementCount; i += 1) {
        greenToddy.children[i].classList.value = 'pixel'
      }
      pixelBoard.innerHTML = greenToddy.innerHTML
      for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
        greenToddy.children[i].classList.value = 'pixel-E'
      }
      pixelBoard.style.gridTemplateColumns= "repeat(16, 1fr)"
      pixelBoard.style.gridTemplateRows= "repeat(16, 1fr)"
      document.querySelector('#board-size').value = '16'
})
//
const redToddy = document.querySelector('#redToddy');
redToddy.addEventListener('dblclick', () => {
  for(let i = 0; i < redToddy.childElementCount; i += 1) {
    redToddy.children[i].classList.value = 'pixel'
   }
  pixelBoard.innerHTML = redToddy.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   redToddy.children[i].classList.value = 'pixel-E'
  }
  pixelBoard.style.gridTemplateColumns= "repeat(16, 1fr)"
  pixelBoard.style.gridTemplateRows= "repeat(16, 1fr)"
  document.querySelector('#board-size').value = '16'
})
//
const redFlower = document.querySelector('#redFlower');
redFlower.addEventListener('dblclick', () => {
  for(let i = 0; i < redFlower.childElementCount; i += 1) {
    redFlower.children[i].classList.value = 'pixel'
   }
  pixelBoard.innerHTML = redFlower.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   redFlower.children[i].classList.value = 'pixel-E'
  }
  pixelBoard.style.gridTemplateColumns= "repeat(16, 1fr)"
  pixelBoard.style.gridTemplateRows= "repeat(16, 1fr)"
  document.querySelector('#board-size').value = '16'
})
//
const mario = document.querySelector('#mario');
mario.addEventListener('dblclick', () => {
  for(let i = 0; i < mario.childElementCount; i += 1) {
    mario.children[i].classList.value = 'pixel'
   }
   pixelBoard.style.gridTemplateColumns= "repeat(22, 1fr)"
   pixelBoard.style.gridTemplateRows= "repeat(22, 1fr)"
   document.querySelector('#board-size').value = '22'

  pixelBoard.innerHTML = mario.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   mario.children[i].classList.value = 'pixel-E'
  }
})



