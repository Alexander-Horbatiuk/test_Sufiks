$(() =>{
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut();
    }
  });

  $(".scrollup").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $(".slider_inner").slick({
    nextArrow: '<button type="button" class="slick_btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick_btn slick-prev"></button>',
    infinite: false,
    dots: true,
  });

  $(".partners_box").slick({
    nextArrow:
      '<button type="button" class="slick_btn_partners slick-next"></button>',
    prevArrow:
      '<button type="button" class="slick_btn_partners slick-prev"></button>',
    infinite: false,
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 4,
    speed: 1000,
    easing: "linear",
    draggable: false,
    waitForAnimate: false,
    rows: 1,
    dots: true,
  });

  

  $(".header_btn_menu").on("click", function () {
    $(".header_box_menu ul").slideToggle();
  });

  $("select").styler();
})
