const swiper = new Swiper('.swiper-container', {
  // Optional parameters 
    loop: true,
  // Transition effect ('slide' | 'fade' | 'cube' | 'coverflow' | 'flip')
    effect: 'coverflow',
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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
