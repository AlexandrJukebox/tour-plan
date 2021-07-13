const hotelswiper = new Swiper('.hotel-slider', {
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
