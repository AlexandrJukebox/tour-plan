const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters 
    loop: true,
  // Transition effect ('slide' | 'fade' | 'cube' | 'coverflow' | 'flip')
    effect: 'coverflow',
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
// keyboard left+right+pageUp+pageDown
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,
  },
    
// Speed	
  speed: 1000,
});
const reviewsSLider = new Swiper('.reviews-slider', {
  // Optional parameters 
    loop: true,
  // Transition effect ('slide' | 'fade' | 'cube' | 'coverflow' | 'flip')
    effect: 'slide',
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
// keyboard left+right+pageUp+pageDown
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        pageUpDown: true,
  },
    
// Speed	
  speed: 500,
});
$('.parallax-window').parallax({
  imageSrc: '/path/to/image.jpg',
  speed: 0.2, 
  parallax: 'scroll',
  imageSrc:'img/newsletter-bg.jpg',
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
  console.log('Клик по кнопке меню');
  document.querySelector('.navbar-bottom').classList.toggle('.navbar-bottom--visible');
})