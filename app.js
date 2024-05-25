function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

window.onclick = function(event) {
  var popup = document.getElementById('popup');
  if (event.target == popup) {
      popup.style.display = 'none';
  }
}

function openText() {
  document.getElementById('learn__more__text').style.display = 'flex'
  document.getElementById('predict__open__btn').style.opacity = '0'
  document.getElementById('predict__img').style.marginTop = '-100px'
}

function closeText() {
  document.getElementById('learn__more__text').style.display = 'none'
  document.getElementById('predict__open__btn').style.opacity = '1'
  document.getElementById('predict__img').style.marginTop = '0px'
}

const openBtn = document.getElementById('predict__open__btn')
const closeBtn = document.getElementById('predict__close__btn')

window.onclick = function(event) {
  let text = document.getElementById('learn__more__text');
  if (event.target == learn__more__text) {
    learn__more__text.style.display = 'none'
  }
}

function determineOpen() {
  document.getElementById('determine__learn__more__text').style.display = 'flex'
  document.getElementById('determine__button').style.opacity = '0'
  document.getElementById('determine__img').style.marginTop = '-100px'
}

function determineClose() {
  document.getElementById('determine__learn__more__text').style.display = 'none'
  document.getElementById('determine__button').style.opacity = '1'
  document.getElementById('determine__img').style.marginTop = '0px'
}

window.onclick = function(event) {
  let text = document.getElementById('determine__learn__more__text');
  if (event.target == determine__learn__more__text) {
    determine__learn__more__text.style.display = 'none'
  }
}

function activateOpen() {
  document.getElementById('activate__learn__more__text').style.display = 'flex'
  document.getElementById('activate__button').style.opacity = '0'
  document.getElementById('activate__img').style.marginTop = '-100px'
}

function activateClose() {
  document.getElementById('activate__learn__more__text').style.display = 'none'
  document.getElementById('activate__button').style.opacity = '1'
  document.getElementById('activate__img').style.marginTop = '0px'
}

window.onclick = function(event) {
  let text = document.getElementById('determine__learn__more__text');
  if (event.target == determine__learn__more__text) {
    determine__learn__more__text.style.display = 'none'
  }
}