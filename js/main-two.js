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
    speed: 0.3,
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
  $(".modal__overlay").on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    console.log($(this).attr("data-href"));
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $('body').css('overflow', 'hidden');
  }
  function closeModal(event) {
    event.preventDefault();
    $('body').css('overflow', 'auto');
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");


  }
  //Закрытие по Esc
  $(document).keyup(function (event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      event.preventDefault();
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      $('body').css('overflow', 'auto');
    }
  });

  // Обработка формs

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      rules: {
        phone: {
          minlength: 18,
        },
      },
      messages: {
        name: {
          required: "Let us know your name",
          minlength: "Name must contain more then 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format name@domain.com",
        },
        phone: {
          required: "Please, fill the number field",
          minlength: "Please, fill full phone number",
        },
      },
    });
  });

  $(".phone").mask("+7 (000) 000-00-00");
  AOS.init({});
});