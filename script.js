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
    div.addEventListener('click', () => {
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
/* ^^^^^ A função cria um grid de pixels com x e y igual a n, dá uma classe 'pixel' para casa div criada e adiciona um evento que, caso o mouse passe por cima de com o botão clicado, a cor do background da div se torne a cor de quem está com a classe selected. 
*/
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

    document.querySelector('#pixel-board').style.gridTemplateColumns = `repeat(${inputV.value}, 1fr)`;
    document.querySelector('#pixel-board').style.gridTemplateRows = `repeat(${inputV.value}, 1fr)`;
  }
}
//
window.onload = changeValue;
//
/* ^^^^^ Altera a quantida de divs no pixelBoard. Se o valor testado for menor que 1 ou maior que 50, um alerta é gerado. */
//
const classTarget = document.querySelector('#color-palette');

classTarget.addEventListener('click', (event) => {
  const selected = document.getElementsByClassName('selected')[0];
  selected.classList.remove('selected');
  event.target.classList.add('selected');
})
//
/* ^^^^^ Caso ocorra algum click dentro da color-palete, a classe selected será adicionada ao elemento clicado, e a apenas ele.*/
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
/* ^^^^^ Caso seja modificado o valor do input Color Picker, uma div 'variável' receberá esse valor e será adicionado à essa div a classe selected. */
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
/* ^^^^^ Caso o elemento com a classe 'button' sejá clicado, todos os pixel receberão o backgroundColor 'grey' */
//
const boardSizeX = document.querySelector('#board-size');

boardSizeX.addEventListener('click', () => {
  changeValue()
})
//
/* ^^^^^ Quando o input com a classe 'board-size' for clicado, ele chama a função de criar o quadro de pixel que já tem como alvo de valor o próprio value deste input.*/
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
/* ^^^^^ Liga e desliga o som, sem muita complicação. */
//
const informacoes = document.querySelector('#informacoes');

informacoes.addEventListener('click', () => {
  informacoes.innerHTML = '<p id="paragrafo">Este site foi feito por <a href="https://github.com/Guga-Santos" target="_blank">Guga Santos</a> como parte da conclusão do bloco 5 do curso de desenvolvimento web da <a href="http://www.betrybe.com" target="_blank">@Trybe</a>. </p>'
})

informacoes.addEventListener('mouseleave', () => {
  informacoes.innerHTML = ''
})
//
/* ^^^^Quando houver o clique na div oculta, ela mostra a mensagem. Quando o mouse sair de cima da div, a mensagem some. */
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

/* Quando a lata de tinta é selecionada, ela recebe a classe 'uso' e as outras ferramentas são excluidas da classe. Então, com essa contendo essa classe, caso clique dentro do pixel board, todas as divs serão preenchidas com a cor de background do elemento da classe selected. */

const eraser = document.querySelector('#eraser');
eraser.addEventListener('click', () => {
  brush.classList.remove('uso')
  bucket.classList.remove('uso')
  eraser.classList.add('uso')
})
/* Quando clicado na borracha, ela ganha a classe 'uso' */
const brush = document.querySelector('#brush');
brush.addEventListener('click', (e) => {
  eraser.classList.remove('uso')
  bucket.classList.remove('uso')
  brush.classList.add('uso')
})
//
/* Quando clicado no pincel, ele ganha a classe 'uso'*/

pixelBoard.addEventListener('mouseover', (e) => {
  if(draw && e.target.id == ''){ 
  if (eraser.classList.contains('uso')) {
    e.target.style.backgroundColor = 'grey'
  }else if(brush.classList.contains('uso')) {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
  }
}
})
/* Caso draw seja verdadeiro(mouse clicado), verdadeiro porque inicialmente é falso, e não tem id (porque pixelboard tem id): se é a borracha que contem a classe 'uso', onde o mouse clicar será acrescido o background grey, caso seja o brush que tenha a classe 'uso', onde o mouse clicar seá acrescido do background de quem tiver a classe 'selected'. */

pixelBoard.addEventListener('mousedown', (e) => {
  if(!draw && e.target.id == '') { 
  if (eraser.classList.contains('uso')) {
    e.target.style.backgroundColor = 'grey'
  } else if(brush.classList.contains('uso')) {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor
  }
}
})
/* Caso draw seja verdadeiro(mouse clicado), verdadeiro porque inicialmente é falso, e não tem id (porque pixelboard tem id): se é a borracha que contem a classe 'uso', onde o mouse passar por cima será acrescido o background grey, caso seja o brush que tenha a classe 'uso', onde o mouse passar por cima será acrescido do background de quem tiver a classe 'selected'. */
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
      pixelBoard.style.gridTemplateColumns= "repeat(22, 1fr)"
      pixelBoard.style.gridTemplateRows= "repeat(22, 1fr)"
      document.querySelector('#board-size').value = '22'
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
  pixelBoard.style.gridTemplateColumns= "repeat(22, 1fr)"
  pixelBoard.style.gridTemplateRows= "repeat(22, 1fr)"
  document.querySelector('#board-size').value = '22'
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
//
const yoshi = document.querySelector('#yoshi');
yoshi.addEventListener('dblclick', () => {
  for(let i = 0; i < yoshi.childElementCount; i += 1) {
    yoshi.children[i].classList.value = 'pixel'
   }
   pixelBoard.style.gridTemplateColumns= "repeat(28, 1fr)"
   pixelBoard.style.gridTemplateRows= "repeat(28, 1fr)"
   document.querySelector('#board-size').value = '28'

  pixelBoard.innerHTML = yoshi.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   yoshi.children[i].classList.value = 'pixel-E'
  }
})
//
const princess = document.querySelector('#princess');
princess.addEventListener('dblclick', () => {
  for(let i = 0; i < princess.childElementCount; i += 1) {
    princess.children[i].classList.value = 'pixel'
   }
   pixelBoard.style.gridTemplateColumns= "repeat(34, 1fr)"
   pixelBoard.style.gridTemplateRows= "repeat(34, 1fr)"
   document.querySelector('#board-size').value = '34'

  pixelBoard.innerHTML = princess.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   princess.children[i].classList.value = 'pixel-E'
  }
})
//
const star = document.querySelector('#star');
star.addEventListener('dblclick', () => {
  for(let i = 0; i < star.childElementCount; i += 1) {
    star.children[i].classList.value = 'pixel'
   }
   pixelBoard.style.gridTemplateColumns= "repeat(22, 1fr)"
   pixelBoard.style.gridTemplateRows= "repeat(22, 1fr)"
   document.querySelector('#board-size').value = '22'

  pixelBoard.innerHTML = star.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   star.children[i].classList.value = 'pixel-E'
  }
})
//
const ghost = document.querySelector('#ghost');
ghost.addEventListener('dblclick', () => {
  for(let i = 0; i < ghost.childElementCount; i += 1) {
    ghost.children[i].classList.value = 'pixel'
   }
   pixelBoard.style.gridTemplateColumns= "repeat(22, 1fr)"
   pixelBoard.style.gridTemplateRows= "repeat(22, 1fr)"
   document.querySelector('#board-size').value = '22'

  pixelBoard.innerHTML = ghost.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   ghost.children[i].classList.value = 'pixel-E'
  }
})
//
const feather = document.querySelector('#feather');
feather.addEventListener('dblclick', () => {
  for(let i = 0; i < feather.childElementCount; i += 1) {
    feather.children[i].classList.value = 'pixel'
   }
   pixelBoard.style.gridTemplateColumns= "repeat(22, 1fr)"
   pixelBoard.style.gridTemplateRows= "repeat(22, 1fr)"
   document.querySelector('#board-size').value = '22'

  pixelBoard.innerHTML = feather.innerHTML
  for(let i = 0; i < pixelBoard.childElementCount; i += 1) {
   feather.children[i].classList.value = 'pixel-E'
  }
})

/* ^^^ Quando houver um clique duplo no elemento de id 'feather', a classe de todos os filhos de feather será 'pixel', o pixel board receberá 22 numero de colunas e 22 numeros de linhas e o valor do board-size também será 22. O conteúdo do pixel boarde será definido como o do feather e a classe de todos os filhos de feather será 'pixel-E'. Recebem a classe 'pixel' para que sejam alteraveis dentro do quadro pixelboard e recebem a classe 'pixel-e' para que não sejam alterados dentro do quadro 'feather'.

Isso serve para todos os outros id's acima.*/

pixelBoard.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  if(!eraser.classList.contains('uso')) {
    brush.classList.remove('uso')
    bucket.classList.remove('uso')
    eraser.classList.add('uso')
  } else if (eraser.classList.contains('uso')) {
    eraser.classList.remove('uso')
    bucket.classList.remove('uso')
    brush.classList.add('uso')
  }
})

/* Quando clicar com o botão direito, ele irá alterar entre pincel e borracha. */