let politicWin = document.getElementById('politicWin')
let clsButton = document.getElementById('clsButton')
let callPolit1 = document.getElementById('callPolit1')
let callPolit2 = document.getElementById('callPolit2')

callPolit1.addEventListener('click', function(){
    politicWin.classList.add('show')
})
clsButton.addEventListener('click', function(){
    politicWin.classList.remove('show')
})
callPolit2.addEventListener('click', function(){
    politicWin.classList.add('show')
})
clsButton.addEventListener('click', function(){
    politicWin.classList.remove('show')
})

let togglePrice = document.getElementById('togglePrice')
let toggleReview = document.getElementById('toggleReview')
let toggleHow = document.getElementById('toggleHow')
let toggleForm = document.getElementById('toggleForm')

let priceWin = document.getElementById('priceWin')
let reviewWin = document.getElementById('reviewWin')
let howWin = document.getElementById('howWin')
let formWin = document.getElementById('formWin')

togglePrice.addEventListener('click', function(){
    priceWin.classList.toggle('show')
})


toggleReview.addEventListener('click', function(){
    reviewWin.classList.toggle('show')
})


toggleHow.addEventListener('click', function(){
    howWin.classList.toggle('show')
})


toggleForm.addEventListener('click', function(){
    formWin.classList.toggle('show')
})

// 


function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var inputs = [document.querySelector("#tel0"), document.querySelector("#tel1")];
    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false);
        input.focus(); 
        setCursorPosition(3, input); 
    });
});


// 


document.getElementById('scrollButton').addEventListener('click', function() {
    const targetElement = document.getElementById('targetElement');
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

// 


const items = document.querySelectorAll('.itemm');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

let currentIndex = 0;

// Функция для обновления видимого элемента
function updateSlider() {
    items.forEach((item, index) => {
        item.classList.remove('show'); // Убираем класс show у всех элементов
        if (index === currentIndex) {
            item.classList.add('show'); // Добавляем класс show к текущему элементу
        }
    });
}

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Переключаемся на следующий элемент
    updateSlider();
});

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Переключаемся на предыдущий элемент
    updateSlider();
});

// Изначально обновляем слайдер, чтобы установить первое значение
updateSlider();