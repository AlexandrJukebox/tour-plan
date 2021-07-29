$(document).ready(function () {
  // Swiper 1 
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
  // Swiper 2 
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
  //Паралакс эфект
  $('.parallax-window').parallax({
    imageSrc: 'img/newsletter-bg.jpg',
    speed: 0.2,
    parallax: 'scroll',
  });
  //Всплывающее меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass('navbar-bottom--visible');
  });
  //Модальные окна
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    console.log($(this).attr("data-href"));
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});