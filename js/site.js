$(document).ready(function () {
  wow = new WOW({
    animateClass: "animated",
    offset: 100
  });
  wow.init();

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    var navOffset = $("#navbar").height();
    $("a.page-scroll").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - navOffset
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $("body").scrollspy({
      target: ".navbar-fixed-top",
      offset: navOffset + 5
    });
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });

  $(".team-container").slick({
    infinite: true,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  setTimeout(function () {
    $("#cookieConsent").fadeIn(200, 'swing');
  }, 2000);
  $("#closeCookieConsent, .cookieConsentOK").click(function () {
    $("#cookieConsent").fadeOut(200);
  });
});
