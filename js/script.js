var wlcSlider = new Slider({
  alias: '#headerSlider',
  transition: '0.65s',
  autoChange: true,
  timer: 2500,
  draggable: true
});

var slidePag = document.getElementById('slidePag');
var li = '';
for(var i=0; i<wlcSlider.nr_o_slides; i++){
  li += '<li></li>'
}
slidePag.innerHTML += li;

var pags = slidePag.querySelectorAll('li');
pags[wlcSlider.current].classList.add('pagActive');
pags.forEach(function(el, index){
  el.addEventListener("click", function(){
    wlcSlider.autoChange = false;
     wlcSlider.changeSlide(index);
  });
});

watch(wlcSlider, "current", function(){
  pags.forEach(function(el, index){
    el.classList.remove('pagActive');
  });
  pags[wlcSlider.current].classList.add('pagActive');
});

var main_menu = document.querySelectorAll('ul.main-menu > li > a');
for(let i=0; i<main_menu.length; i++){
  let el = document.querySelector(main_menu[i].getAttribute('href'));
  let offs = el.offsetTop;
  main_menu[i].addEventListener('click', function(ev){
    ev.preventDefault();
    window.scroll({
      top: offs,
      behavior: 'smooth'
    });
  });
}

var sections = document.querySelectorAll('section');
var lis = document.querySelectorAll('ul.main-menu > li')
var ofset = document.getElementById('about').offsetTop;
window.onscroll = function(){
  if(window.scrollY >= ofset){
    document.getElementById('topBar').classList.add('sticky');
  } else {
    document.getElementById('topBar').classList.remove('sticky');
  }

  for(let i=0; i<sections.length; i++){
    lis[i].classList.remove('current');
  }
  for(let i=sections.length-1; i>=0; i--){
    if(sections[i].offsetTop <= window.scrollY){
      lis[i].classList.add('current');
      i = -1;
    }
  }
  if(window.scrollY == 0){
    lis[0].classList.add('current');
  }
}

document.getElementById('toggle-menu').addEventListener('click', function(){
  this.classList.toggle('cross');
  document.querySelector('ul.main-menu').classList.toggle('show-menu');
});
