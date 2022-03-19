let goTop = document.querySelector('.goTop')
let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

window.addEventListener('scroll', function(){
  if(this.window.pageYOffset > 350){
      goTop.classList.add('active');
  } else {
      goTop.classList.remove('active');
  }
})

goTop.onclick = function top() {
  window.scrollTo({top: 0,left: 0 , behavior: 'smooth'});
}

let aberto = false


function abrirOuFecharMenu() {
  if (aberto === true){
    aberto = false
    menuMobile.classList.remove('aberto')
      
      
  } else {
    aberto = true
    menuMobile.classList.add('aberto')
      
  }
}

function fecharMenu() {
  aberto = false
  menuMobile.classList.remove('aberto')
}


$('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    
});  

$('.carouselMobile').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,  
  slidesToShow: 1,
  slidesToScroll: 1,
  
});  